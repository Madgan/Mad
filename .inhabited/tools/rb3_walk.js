// Rebuild 3: walk the page from top to footer by wheel, a viewport shot at each stop, pasted (phone: 4 across; desktop: 2 stacked).
// node rb3_walk.js <name> <w> <h> <zh|en> <js|rm|nojs> [pre: none|client1|client2|draft|en-click] [stop px] [settle ms]
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const O = '/home/user/Mad/.inhabited/v1_critic/screens/', SCR = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/';
const [name, W, Hh, lang, mode, pre, STOP, SETTLE] = process.argv.slice(2);
const w = +W, h = +Hh, stop = +(STOP || (h - 110)), settle = +(SETTLE || 900);
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, reducedMotion: mode === 'rm' ? 'reduce' : 'no-preference', javaScriptEnabled: mode !== 'nojs' });
  const p = await ctx.newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html' + (mode === 'nojs' ? '' : '?autoplay=0' + (lang === 'en' ? '&lang=en' : '')));
  await p.waitForTimeout(1200);
  if (mode === 'nojs' && lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(200); }
  if (mode !== 'nojs') {
    if (pre === 'client1' || pre === 'client2') { await p.click('.tile[data-i="' + (pre === 'client1' ? 1 : 2) + '"]'); await p.waitForTimeout(700); }
    if (pre === 'draft') { await p.click('.rstrip[data-id="video"]'); await p.waitForTimeout(600); await p.click('.rstrip[data-id="edit"]'); await p.waitForTimeout(600); }
  }
  if (mode !== 'nojs') { await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(300); }
  await p.mouse.move(w / 2, h / 2);
  const total = mode === 'nojs' ? 6000 : await p.evaluate(() => document.documentElement.scrollHeight);
  const files = []; let y = 0, i = 0;
  for (;;) {
    const f = SCR + 'rb3walk_' + name + '_' + String(i).padStart(2, '0') + '.png'; await p.screenshot({ path: f }); files.push([f, y]); i++;
    if (i > 14) break;
    // wheel down one stop in 40 px moves, about 900 px a second
    for (let d = 0; d < stop; d += 40) { await p.mouse.wheel(0, Math.min(40, stop - d)); await p.waitForTimeout(40); }
    await p.waitForTimeout(settle);
    const ny = mode === 'nojs' ? y + stop : await p.evaluate(() => Math.round(scrollY));
    if (mode !== 'nojs' && ny === y) break;
    y = ny; if (mode === 'nojs' && y > 5600) break;
  }
  await b.close();
  const per = w > 600 ? 2 : 4, outs = [];
  for (let k = 0; k < files.length; k += per) {
    const grp = files.slice(k, k + per), out = O + 'rebuild3_' + name + '_' + String.fromCharCode(97 + k / per) + '.png'; outs.push(out);
    if (w > 600) execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_vstack.py', out, ...grp.map(g => g[0])]);
    else execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_paste.py', out, ...grp.map(g => g[0] + '::scroll ' + g[1])]);
  }
  console.log(name, 'shots', files.length, 'at', files.map(f => f[1]).join(','), '->', outs.length, 'files; errors', JSON.stringify(errs));
})();
