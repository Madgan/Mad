// Rebuild 2: the tear-off, the drop, the stub and the ticks, by real scrolling. Frames are taken at stage positions S (px from the top of the screen).
// node rb2_story.js <w> <h> <lang> <prefix> [client index]
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const O = '/home/user/Mad/.inhabited/v1_critic/screens/';
const SCR = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/';
const w = +process.argv[2], h = +process.argv[3], lang = process.argv[4], prefix = process.argv[5], client = +(process.argv[6] || 0);
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto(URL + '?autoplay=0' + (lang === 'en' ? '&lang=en' : '')); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  if (client) { await p.evaluate(i => window.SIS.pickClient(i), client); await p.waitForTimeout(700); }
  const g = await p.evaluate(() => { const r = document.querySelector('#story-stage').getBoundingClientRect(), vh = innerHeight, em = r.width / 35.8; const SD = Math.max(vh - 8 - 61.1 * em, 64 - 6.3 * em), SS = Math.min(SD - 50, vh - 12 - 66.1 * em), d = Math.min(84, Math.max(56, vh * .09)); return { top: r.top + scrollY, SD, SS, d, em }; });
  console.log('stage top (document)', Math.round(g.top), 'em', g.em.toFixed(2), 'drop at S', Math.round(g.SD), 'tear from S', Math.round(g.SD + 114), 'to', Math.round(g.SD + 24), 'filed at', Math.round(g.SD - 30), 'sent', Math.round(g.SS), 'delivered', Math.round(g.SS - g.d), 'read', Math.round(g.SS - 2 * g.d));
  const beats = [['before', g.SD + 150], ['tear_start', g.SD + 114], ['tear_half', g.SD + 69], ['tear_done', g.SD + 26], ['dropped_file', g.SD - 6], ['filed', g.SD - 36], ['sent', g.SS - 4], ['delivered', g.SS - g.d - 4], ['read', g.SS - 2 * g.d - 4]];
  const files = [];
  for (const [name, S] of beats) {
    await p.evaluate(yy => scrollTo(0, yy), g.top - S); await p.waitForTimeout(450);
    const st = await p.evaluate(() => [document.querySelector('.leaf').style.transform, document.querySelector('.doc-bubble').getAttribute('data-state'), document.querySelector('.stub').classList.contains('is-front') ? 'stub' : 'filed', (document.querySelector('.doc-bubble .st').innerText || '').replace(/\s+/g, ' ').trim()].join(' | '));
    console.log(name, 'S=' + Math.round(S), 'scrollY=' + Math.round(g.top - S), '|', st);
    const f = SCR + prefix + '_' + name + '.png'; files.push(f + '::' + name + ' (stage top at ' + Math.round(S) + ' px)');
    await p.screenshot({ path: f });
  }
  // the drop itself, on the wall clock: one wheel move across the threshold, then frames as fast as they come
  await p.evaluate(yy => scrollTo(0, yy), g.top - (g.SD + 20)); await p.waitForTimeout(500);
  await p.evaluate(() => { window.__d = []; const l = document.querySelector('.leaf'); const t0 = performance.now(); (function tick() { const r = l.getBoundingClientRect(); window.__d.push([Math.round(performance.now() - t0), Math.round(r.top + scrollY), Math.round(r.left), document.querySelector('.doc-bubble').getAttribute('data-state')]); if (performance.now() - t0 < 700) requestAnimationFrame(tick); })(); });
  await p.mouse.move(w / 2, h / 2); await p.mouse.wheel(0, 40);
  await p.waitForTimeout(800);
  const dl = await p.evaluate(() => window.__d);
  let last = ''; const seq = [];
  for (const r of dl) { const k = r.slice(1).join(','); if (k !== last) { seq.push(r[0] + 'ms y=' + r[1] + ' x=' + r[2] + ' ' + r[3]); last = k; } }
  console.log('drop on the wall clock (leaf top in document px, each change):', seq.join(' > '));
  await b.close();
  const per = w > 800 ? 2 : 4;
  for (let i = 0, k = 0; i < files.length; i += per, k++) {
    if (w > 800) execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_vstack.py', O + prefix + '_' + 'abcdef'[k] + '.png', ...files.slice(i, i + per).map(f => f.split('::')[0])]);
    else execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_paste.py', O + prefix + '_' + 'abcdef'[k] + '.png', ...files.slice(i, i + per)]);
  }
  console.log(prefix, 'errors', JSON.stringify(errs));
})();
