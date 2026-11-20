// Rebuild 2: rest frames, re-cuts per client with the chat below, the draft and everything downstream, the language switch,
// the ground cuts, taps, focus, stage at double density. All frames are viewport-bounded.
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const O = '/home/user/Mad/.inhabited/v1_critic/screens/';
const SCR = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/';
const paste = (out, items) => execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_paste.py', O + out + '.png', ...items]);
const vstack = (out, items) => execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_vstack.py', O + out + '.png', ...items]);
(async () => {
  const b = await chromium.launch();
  const open = async (w, h, lang, extra) => {
    const ctx = await b.newContext(Object.assign({ viewport: { width: w, height: h }, deviceScaleFactor: 1 }, extra || {}));
    const p = await ctx.newPage(); p._errs = [];
    p.on('console', m => { if (m.type() === 'error') p._errs.push(m.text()); }); p.on('pageerror', e => p._errs.push('PAGEERROR ' + e.message));
    await p.goto(URL + '?autoplay=0' + (lang === 'en' ? '&lang=en' : '')); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
    return p;
  };
  const errs = [];
  const storyY = (p, which) => p.evaluate(wh => { const r = document.querySelector('#story-stage').getBoundingClientRect(), vh = innerHeight, em = r.width / 35.8; const SD = Math.max(vh - 8 - 61.1 * em, 64 - 6.3 * em), SS = Math.min(SD - 50, vh - 12 - 66.1 * em), d = Math.min(84, Math.max(56, vh * .09)); const top = r.top + scrollY; return Math.round(wh === 'before' ? top - (SD + 150) : top - (SS - 2 * d - 6)); }, which);

  // ---- A. first screen at rest
  for (const [w, h] of [[390, 844], [1280, 800]]) for (const lang of ['zh', 'en']) {
    const p = await open(w, h, lang); await p.screenshot({ path: O + 'rebuild2_rest_' + w + '_' + lang + '.png' });
    console.log('rest', w, lang, JSON.stringify(await p.evaluate(() => { const g = s => { const r = document.querySelector(s).getBoundingClientRect(); return Math.round(r.top) + '-' + Math.round(r.bottom) + ' x' + Math.round(r.left) + '-' + Math.round(r.right); }; return { cta: g('#hero .cta-trial'), terms: g('#hero .trial-terms'), sheet: g('#sheet'), toggle: g('.lang-toggle'), topcta: g('header .cta-trial'), crossing: document.querySelector('#sheet .phrase').textContent.replace(/\s+/g, ' ') }; })));
    errs.push(...p._errs); await p.context().close();
  }
  // ---- B. a re-cut for each client, and the chat below it for that client
  for (const [i, code] of [[1, 'tanjung'], [2, 'aria']]) {
    const p = await open(390, 844, 'zh'); const fs = [], gs = [];
    await p.evaluate(() => window.SIS.hold(true)); await p.evaluate(k => window.SIS.pickClient(k), i);
    for (const t of [60, 200]) { await p.evaluate(tt => window.SIS.recut().seek(tt), t); await p.waitForTimeout(120); const f = SCR + 'cl_' + code + '_' + t + '.png'; await p.screenshot({ path: f, clip: { x: 0, y: 0, width: 390, height: 844 } }); fs.push(f + '::re-cut at ' + t + ' ms of 420'); }
    await p.evaluate(() => { window.SIS.hold(false); window.SIS.flush(); }); await p.waitForTimeout(300);
    let f = SCR + 'cl_' + code + '_after.png'; await p.screenshot({ path: f }); fs.push(f + '::after the re-cut');
    await p.evaluate(() => scrollTo(0, document.querySelector('#story').getBoundingClientRect().top + scrollY - 70)); await p.waitForTimeout(600);
    f = SCR + 'cl_' + code + '_chat0.png'; await p.screenshot({ path: f }); gs.push(f + '::the chat below: who asks');
    await p.evaluate(y => scrollTo(0, y), await storyY(p, 'before') + 100); await p.waitForTimeout(600);
    f = SCR + 'cl_' + code + '_chat1.png'; await p.screenshot({ path: f }); gs.push(f + '::client page, stub and leaf');
    await p.evaluate(y => scrollTo(0, y), await storyY(p, 'read')); await p.waitForTimeout(600);
    f = SCR + 'cl_' + code + '_chat2.png'; await p.screenshot({ path: f }); gs.push(f + '::the PDF in his reply, read');
    console.log('client', code, JSON.stringify(await p.evaluate(() => ({ sheet: document.querySelector('#sheet .name').textContent, chat: document.querySelector('#story .chat-head').innerText.replace(/\s+/g, ' '), leaf: document.querySelector('.leaf .name').textContent + ' / ' + document.querySelector('.leaf .sub').textContent, card: document.querySelector('.sc-client').innerText.replace(/\s+/g, ' '), stub: document.querySelector('.sface.done').innerText.replace(/\s+/g, ' '), pdf: document.querySelector('.doc-bubble').getAttribute('data-state') }))));
    paste('rebuild2_client_' + code + '_390zh_a', fs); paste('rebuild2_client_' + code + '_390zh_b', gs); errs.push(...p._errs); await p.context().close();
  }
  { // desktop: Tanjung, first screen and the chat
    const p = await open(1280, 800, 'en'); await p.evaluate(() => window.SIS.pickClient(1)); await p.waitForTimeout(700);
    const f1 = SCR + 'cl_d_a.png', f2 = SCR + 'cl_d_b.png'; await p.screenshot({ path: f1 });
    await p.evaluate(y => scrollTo(0, y), await storyY(p, 'read')); await p.waitForTimeout(600); await p.screenshot({ path: f2 });
    vstack('rebuild2_client_tanjung_1280en', [f1, f2]); errs.push(...p._errs); await p.context().close();
  }
  // ---- C. the draft (no rate picked) and everything downstream of it
  for (const lang of ['zh', 'en']) {
    const p = await open(390, 844, lang); const fs = [];
    await p.evaluate(() => { window.SIS.toggleRate('video'); }); await p.waitForTimeout(600); await p.evaluate(() => { window.SIS.toggleRate('edit'); }); await p.waitForTimeout(700);
    let f = SCR + 'dr_' + lang + '_0.png'; await p.screenshot({ path: f }); fs.push(f + '::first screen, no rate picked');
    await p.evaluate(y => scrollTo(0, y), await storyY(p, 'before')); await p.waitForTimeout(500); f = SCR + 'dr_' + lang + '_1.png'; await p.screenshot({ path: f }); fs.push(f + '::today, where the tear would start');
    await p.evaluate(y => scrollTo(0, y), await storyY(p, 'read')); await p.waitForTimeout(500); f = SCR + 'dr_' + lang + '_2.png'; await p.screenshot({ path: f }); fs.push(f + '::today, where the ticks would be read');
    await p.evaluate(() => scrollTo(0, document.querySelector('#reports').getBoundingClientRect().top + scrollY - 40)); await p.waitForTimeout(600); f = SCR + 'dr_' + lang + '_3.png'; await p.screenshot({ path: f }); fs.push(f + '::month end');
    console.log('draft', lang, JSON.stringify(await p.evaluate(() => ({ caption: document.querySelector('.stage-caption').innerText.replace(/\s+/g, ' '), leafDraft: document.querySelector('.leaf').classList.contains('is-draft'), pdf: document.querySelector('.doc-bubble').getAttribute('data-state'), stubVisible: getComputedStyle(document.querySelector('.stub')).visibility, tag014: !document.querySelector('.tag014').classList.contains('pre'), nov: document.querySelector('.d-s').textContent, rank: document.querySelector('.rank').innerText.replace(/\s+/g, ' ') }))));
    paste('rebuild2_draft_390' + lang, fs); errs.push(...p._errs); await p.context().close();
  }
  { // draft at 1280
    const p = await open(1280, 800, 'zh'); await p.evaluate(() => { window.SIS.toggleRate('video'); }); await p.waitForTimeout(600); await p.evaluate(() => { window.SIS.toggleRate('edit'); }); await p.waitForTimeout(700);
    const f1 = SCR + 'dr_d_a.png', f2 = SCR + 'dr_d_b.png'; await p.screenshot({ path: f1 });
    await p.evaluate(y => scrollTo(0, y), await storyY(p, 'before')); await p.waitForTimeout(600); await p.screenshot({ path: f2 });
    vstack('rebuild2_draft_1280zh', [f1, f2]); errs.push(...p._errs); await p.context().close();
  }
  // ---- D. the language switch at three scroll positions: same screen before and after, with the scroll offsets
  {
    const p = await open(390, 844, 'zh'); const fs = [];
    for (const y of [700, 2200, 4100]) {
      await p.evaluate(yy => scrollTo(0, yy), y); await p.waitForTimeout(500);
      const a = await p.evaluate(() => Math.round(scrollY)); let f = SCR + 'lg_' + y + '_zh.png'; await p.screenshot({ path: f }); fs.push(f + '::zh, scrollY ' + a);
      await p.click('.lang-toggle'); await p.waitForTimeout(300);
      const c = await p.evaluate(() => Math.round(scrollY)); f = SCR + 'lg_' + y + '_en.png'; await p.screenshot({ path: f }); fs.push(f + '::en, scrollY ' + c);
      await p.click('.lang-toggle'); await p.waitForTimeout(300);
      console.log('language switch 390 at', y, ': scrollY zh', a, '> en', c, '> zh', await p.evaluate(() => Math.round(scrollY)));
    }
    paste('rebuild2_lang_390_a', fs.slice(0, 4)); paste('rebuild2_lang_390_b', fs.slice(4)); errs.push(...p._errs); await p.context().close();
    const q = await open(1280, 800, 'zh');
    for (const y of [700, 2200, 4200]) {
      await q.evaluate(yy => scrollTo(0, yy), y); await q.waitForTimeout(500);
      const a = await q.evaluate(() => Math.round(scrollY)); const f1 = SCR + 'lgd_' + y + '_zh.png'; await q.screenshot({ path: f1 });
      await q.click('.lang-toggle'); await q.waitForTimeout(300);
      const c = await q.evaluate(() => Math.round(scrollY)); const f2 = SCR + 'lgd_' + y + '_en.png'; await q.screenshot({ path: f2 });
      await q.click('.lang-toggle'); await q.waitForTimeout(300);
      console.log('language switch 1280 at', y, ': scrollY zh', a, '> en', c, '> zh', await q.evaluate(() => Math.round(scrollY)));
      vstack('rebuild2_lang_1280_' + y, [f1, f2]);
    }
    errs.push(...q._errs); await q.context().close();
  }
  // ---- E. the ground cuts: the frame before and the frame after each boundary, one wheel notch apart
  for (const [w, h] of [[390, 844], [1280, 800]]) {
    const p = await open(w, h, 'zh'); const fs = [];
    for (const id of ['reports', 'import']) {
      const cut = await p.evaluate(i => Math.round(document.getElementById(i).getBoundingClientRect().top + scrollY - innerHeight * .5), id);
      await p.evaluate(yy => scrollTo(0, yy), cut - 6); await p.waitForTimeout(450);
      let f = SCR + 'gc_' + w + id + '_a.png'; await p.screenshot({ path: f }); fs.push(f + '::' + id + ': 6 px before the cut, ground ' + await p.evaluate(() => getComputedStyle(document.body).backgroundColor));
      await p.evaluate(yy => scrollTo(0, yy), cut + 6); await p.waitForTimeout(450);
      f = SCR + 'gc_' + w + id + '_b.png'; await p.screenshot({ path: f }); fs.push(f + '::' + id + ': 6 px after, ground ' + await p.evaluate(() => getComputedStyle(document.body).backgroundColor));
    }
    // and back up across the last boundary: the cut runs backwards
    const cut = await p.evaluate(() => Math.round(document.getElementById('import').getBoundingClientRect().top + scrollY - innerHeight * .5));
    await p.evaluate(yy => scrollTo(0, yy), cut - 6); await p.waitForTimeout(450);
    console.log('ground cuts', w, fs.map(x => x.split('::')[1]).join(' | '), '| back up:', await p.evaluate(() => getComputedStyle(document.body).backgroundColor + ' topbar ' + getComputedStyle(document.querySelector('.topbar')).backgroundColor));
    if (w > 800) { vstack('rebuild2_cut_1280_month', fs.slice(0, 2).map(x => x.split('::')[0])); vstack('rebuild2_cut_1280_dayone', fs.slice(2).map(x => x.split('::')[0])); }
    else paste('rebuild2_cut_390', fs);
    errs.push(...p._errs); await p.context().close();
  }
  // ---- F. taps: month, approve, undo, revoke
  {
    const p = await open(390, 844, 'zh'); const fs = [];
    await p.evaluate(() => scrollTo(0, document.querySelector('#report').getBoundingClientRect().top + scrollY - 120)); await p.waitForTimeout(500);
    await p.click('.mcol[data-i="2"]'); await p.waitForTimeout(300); let f = SCR + 'tp_0.png'; await p.screenshot({ path: f }); fs.push(f + '::a month tapped');
    await p.evaluate(() => scrollTo(0, document.querySelector('#import-stage').getBoundingClientRect().top + scrollY - 150)); await p.waitForTimeout(600);
    f = SCR + 'tp_1.png'; await p.screenshot({ path: f }); fs.push(f + '::before he approves');
    await p.click('.approve'); await p.waitForTimeout(500); f = SCR + 'tp_2.png'; await p.screenshot({ path: f }); fs.push(f + '::approved: green wrap, tape label, ticks unchanged');
    await p.evaluate(() => scrollTo(0, document.querySelector('#pro-stage').getBoundingClientRect().top + scrollY - 200)); await p.waitForTimeout(500);
    await p.click('.token-btn'); await p.waitForTimeout(600); f = SCR + 'tp_3.png'; await p.screenshot({ path: f }); fs.push(f + '::token revoked: tape label, ticks unchanged');
    console.log('ticks after taps', JSON.stringify(await p.evaluate(() => ['#report-msg', '#import-msg', '#pro-msg'].map(s => s + ' ' + document.querySelector(s).getAttribute('data-state') + ' "' + document.querySelector(s + ' .st').innerText.replace(/\s+/g, ' ').trim() + '"'))));
    paste('rebuild2_taps_390zh', fs); errs.push(...p._errs); await p.context().close();
  }
  // ---- G. focus marks (keyboard)
  {
    const p = await open(390, 844, 'zh'); const fs = [];
    await p.focus('#hero .cta-trial'); await p.keyboard.press('Tab'); await p.keyboard.press('Shift+Tab'); await p.waitForTimeout(150); let f = SCR + 'fc_0.png'; await p.screenshot({ path: f, clip: { x: 0, y: 0, width: 390, height: 700 } }); fs.push(f + '::focus on the trial button');
    await p.focus('.tile[data-i="1"]'); await p.keyboard.press('Shift+Tab'); await p.keyboard.press('Tab'); await p.waitForTimeout(150); f = SCR + 'fc_1.png'; await p.screenshot({ path: f, clip: { x: 0, y: 144, width: 390, height: 700 } }); fs.push(f + '::focus on a client tile');
    await p.focus('header .cta-trial'); await p.keyboard.press('Shift+Tab'); await p.keyboard.press('Tab'); await p.waitForTimeout(150); f = SCR + 'fc_2.png'; await p.screenshot({ path: f, clip: { x: 0, y: 0, width: 390, height: 700 } }); fs.push(f + '::focus on the top-bar trial button (44 px)');
    paste('rebuild2_focus_390zh', fs); errs.push(...p._errs); await p.context().close();
  }
  // ---- H. the stage at double density, both languages
  {
    const fs = [];
    for (const lang of ['zh', 'en']) { const p = await open(390, 844, lang, { deviceScaleFactor: 2 }); const f = SCR + 'zm_' + lang + '.png'; await p.screenshot({ path: f, clip: { x: 0, y: 173, width: 390, height: 460 } }); fs.push(f + '::' + lang + ', 2x'); errs.push(...p._errs); await p.context().close(); }
    paste('rebuild2_zoom2x_stage', fs);
  }
  console.log('errors', JSON.stringify(errs));
  await b.close();
})();
