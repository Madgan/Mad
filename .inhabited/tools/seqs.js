// Sequence captures: S2 (knob), S3 (re-cut, held and stepped on the page clock), scroll-linked S4/S5/S6/S8 down and up, S9, S10, S11.
// Usage: node seqs.js <width> <height> <tag> [which]
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const OUT = '/home/user/Mad/.inhabited/designer/screens/';
const w = parseInt(process.argv[2] || '390'), h = parseInt(process.argv[3] || '844'), tag = process.argv[4] || '390', which = process.argv[5] || 'all';
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, hasTouch: w < 500 });
  const p = await ctx.newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  const load = async () => { await p.goto(URL + '?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500); };
  const shot = async (name, clipH) => p.screenshot({ path: `${OUT}${name}_${tag}.png`, clip: clipH ? { x: 0, y: 0, width: w, height: clipH } : undefined });
  const log = [];
  const sheetState = () => p.evaluate(() => ({ client: document.querySelector('#sheet .name').textContent, rows: [...document.querySelectorAll('#sheet .row')].map(r => r.querySelector('.d').textContent.trim().slice(0, 40) + ' = ' + r.querySelector('.a').textContent), fig: document.querySelector('#sheet .fig').textContent, computed: window.SIS.total(), words: document.querySelector('#sheet .total-words').textContent, machine: document.querySelector('#sheet .machine-line').textContent, cap: document.querySelector('.stage-caption').textContent, draft: document.querySelector('#sheet').classList.contains('is-draft') }));

  if (which === 'all' || which === 's2') {
    await load();
    // S2: move the real range control to three positions through its input event, then keyboard, then replay
    for (const v of [600, 1300, 2100]) {
      await p.evaluate(vv => { const r = document.querySelector('.rail input'); r.value = vv; r.dispatchEvent(new Event('input', { bubbles: true })); }, v);
      await p.waitForTimeout(120); await shot(`s2_knob_${v}`, 700);
    }
    await p.focus('.rail input'); await p.keyboard.press('ArrowLeft'); await p.waitForTimeout(100);
    log.push('s2 after ArrowLeft from 2100: value ' + await p.evaluate(() => document.querySelector('.rail input').value) + ' readout ' + await p.evaluate(() => document.querySelector('.readout').textContent) + ' valuetext ' + await p.evaluate(() => document.querySelector('.rail input').getAttribute('aria-valuetext')));
    await shot('s2_focus_key', 700);
    await p.keyboard.press('End'); await p.waitForTimeout(100);
    log.push('s2 after End: state ' + await p.evaluate(() => document.querySelector('.cut-rail').dataset.state));
  }
  if (which === 'all' || which === 's3') {
    await load();
    await p.evaluate(() => scrollTo(0, 70)); await p.waitForTimeout(300);
    log.push('s3 before: ' + JSON.stringify(await sheetState()));
    await shot('s3_0_before');
    // client change, held on the page clock
    await p.evaluate(() => { window.SIS.hold(true); window.SIS.pickClient(1); });
    for (const t of [60, 200, 290, 360]) { await p.evaluate(tt => window.SIS.recut().seek(tt), t); await p.waitForTimeout(100); await shot(`s3_1_client_t${String(t).padStart(3, '0')}`); }
    await p.evaluate(() => window.SIS.flush()); await p.waitForTimeout(100);
    log.push('s3 after client: ' + JSON.stringify(await sheetState())); await shot('s3_1_client_after');
    // rate added
    await p.evaluate(() => window.SIS.toggleRate('photo'));
    for (const t of [80, 215, 330]) { await p.evaluate(tt => window.SIS.recut().seek(tt), t); await p.waitForTimeout(100); await shot(`s3_2_add_t${String(t).padStart(3, '0')}`); }
    await p.evaluate(() => window.SIS.flush()); await p.waitForTimeout(100);
    log.push('s3 after add: ' + JSON.stringify(await sheetState())); await shot('s3_2_add_after');
    // rate removed (middle row)
    await p.evaluate(() => window.SIS.toggleRate('edit'));
    for (const t of [60, 150, 240]) { await p.evaluate(tt => window.SIS.recut().seek(tt), t); await p.waitForTimeout(100); await shot(`s3_3_remove_t${String(t).padStart(3, '0')}`); }
    await p.evaluate(() => window.SIS.flush()); await p.waitForTimeout(100);
    log.push('s3 after remove: ' + JSON.stringify(await sheetState())); await shot('s3_3_remove_after');
    // remove everything: no rate left
    await p.evaluate(() => { window.SIS.toggleRate('video'); window.SIS.flush(); window.SIS.toggleRate('photo'); });
    for (const t of [150, 260]) { await p.evaluate(tt => window.SIS.recut().seek(tt), t); await p.waitForTimeout(100); await shot(`s3_4_none_t${String(t).padStart(3, '0')}`); }
    await p.evaluate(() => window.SIS.flush()); await p.waitForTimeout(100);
    log.push('s3 none: ' + JSON.stringify(await sheetState())); await shot('s3_4_none_after');
    // back from draft by a real tap, real time
    await p.evaluate(() => window.SIS.hold(false));
    await p.click('.rstrip[data-id="video"]'); await p.waitForTimeout(700);
    log.push('s3 real tap add from draft: ' + JSON.stringify(await sheetState())); await shot('s3_5_redraw_after');
    await p.click('.tile[data-i="2"]'); await p.waitForTimeout(700);
    log.push('s3 real tap client 3: ' + JSON.stringify(await sheetState())); await shot('s3_6_realtap_after');
  }
  const scrollSeq = async (name, sel, a, bEnd, ps) => {
    const top = await p.evaluate(s => document.querySelector(s).getBoundingClientRect().top + scrollY, sel);
    const yFor = pp => Math.max(0, Math.round(top - (a - pp * (a - bEnd)) * h));
    for (const [i, pp] of ps.entries()) { await p.evaluate(y => scrollTo(0, y), yFor(pp)); await p.waitForTimeout(550); await shot(`${name}_${i}_p${String(Math.round(pp * 100)).padStart(3, '0')}`); }
  };
  if (which === 'all' || which === 'scroll') {
    await load();
    await scrollSeq('s4s5_down', '#story-stage', .78, .28, [0, 0.04, 0.3, 0.52, 0.6, 0.68, 0.82, 0.93, 1]);
    await scrollSeq('s4s5_up', '#story-stage', .78, .28, [0.82, 0.3, 0]);
    await scrollSeq('s6_down', '#report', .8, .4, [0.1, 0.5, 0.86, 1]);
    await scrollSeq('s6_up', '#report', .8, .4, [0.5, 0.1]);
    await scrollSeq('s8_down', '#import-stage', .75, .35, [0.05, 0.3, 0.6, 0.82, 1]);
    await scrollSeq('s8_up', '#import-stage', .75, .35, [0.6, 0.3, 0.05]);
  }
  if (which === 'all' || which === 'taps') {
    await load();
    // month tap
    await p.evaluate(() => document.querySelector('#report').scrollIntoView({ block: 'center' })); await p.waitForTimeout(600);
    await shot('s6_tap_before'); await p.click('.mcol[data-i="2"]'); await p.waitForTimeout(300); await shot('s6_tap_after');
    log.push('month tap detail: ' + await p.evaluate(() => document.querySelector('.detail').textContent.replace(/\s+/g, ' ')));
    // S9
    await p.evaluate(() => document.querySelector('.review-card').scrollIntoView({ block: 'center' })); await p.waitForTimeout(700);
    await shot('s9_0_before'); await p.click('.approve'); await p.waitForTimeout(90); await shot('s9_1_during'); await p.waitForTimeout(500); await shot('s9_2_after');
    await p.click('.approve'); await p.waitForTimeout(500); await shot('s9_3_undone');
    // S10
    await p.evaluate(() => document.querySelector('#pro-stage').scrollIntoView({ block: 'center' })); await p.waitForTimeout(600);
    await shot('s10_0_before'); await p.click('.token-btn'); await p.waitForTimeout(150); await shot('s10_1_during'); await p.waitForTimeout(500); await shot('s10_2_revoked');
    await p.click('.token-btn'); await p.waitForTimeout(500); await shot('s10_3_created');
    // focus ring
    await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(300);
    await p.keyboard.press('Tab'); await p.keyboard.press('Tab'); await p.keyboard.press('Tab'); await shot('focus_toggle', 400);
    for (let i = 0; i < 4; i++) await p.keyboard.press('Tab'); await shot('focus_replay', 844);
    for (let i = 0; i < 3; i++) await p.keyboard.press('Tab'); await shot('focus_tile', 844);
  }
  console.log(log.join('\n')); console.log('errors', JSON.stringify(errs));
  await b.close();
})();
