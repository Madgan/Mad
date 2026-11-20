// viewport-bounded walk down the page. node rb1_walk.js <w> <h> <lang> <prefix> [reduced|nojs] [step]
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const O = '/home/user/Mad/.inhabited/v1_critic/screens/';
const w = +process.argv[2], h = +process.argv[3], lang = process.argv[4], prefix = process.argv[5], mode = process.argv[6] || '', step = +(process.argv[7] || (h - 84));
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, reducedMotion: mode === 'reduced' ? 'reduce' : 'no-preference', javaScriptEnabled: mode !== 'nojs' });
  const p = await ctx.newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto(URL + (mode === 'reduced' || mode === 'nojs' ? '' : '?autoplay=0')); if (mode !== 'nojs') await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(600);
  if (lang === 'en' && mode !== 'nojs') { await p.click('.lang-toggle'); await p.waitForTimeout(250); }
  const dh = mode === 'nojs' ? 5600 : await p.evaluate(() => document.documentElement.scrollHeight);
  let i = 0;
  for (let y = 0; y < dh - 40; y += step) {
    if (mode === 'nojs') { await p.mouse.wheel(0, i ? step : 0); } else await p.evaluate(yy => scrollTo(0, yy), y);
    await p.waitForTimeout(350);
    await p.screenshot({ path: `${O}${prefix}_${String(i).padStart(2, '0')}.png` }); i++;
    if (i > 12) break;
  }
  console.log(prefix, 'shots', i, 'docH', dh, 'errors', JSON.stringify(errs));
  await b.close();
})();
