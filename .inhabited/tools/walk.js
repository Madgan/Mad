// Walk the page top to bottom in viewport-sized steps. Usage: node walk.js <width> <height> <lang> <prefix> [reduced]
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const OUT = '/home/user/Mad/.inhabited/designer/screens/';
const [w, h, lang, prefix, reduced] = [parseInt(process.argv[2]), parseInt(process.argv[3]), process.argv[4], process.argv[5], process.argv[6]];
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, reducedMotion: reduced ? 'reduce' : 'no-preference' });
  const p = await ctx.newPage();
  const errs = [];
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto(URL + '?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
  if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(250); }
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  const stepPx = h - 60; let i = 0;
  for (let y = 0; y < H; y += stepPx) {
    await p.evaluate(yy => scrollTo(0, yy), y); await p.waitForTimeout(450);
    await p.screenshot({ path: `${OUT}${prefix}_${String(i).padStart(2, '0')}.png` }); i++;
  }
  console.log('height', H, 'shots', i, 'errors', JSON.stringify(errs));
  await b.close();
})();
