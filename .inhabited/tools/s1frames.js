// S1 "The Catch" as a frame sequence, stepped on the page's own clock (SIS.seek), not wall time.
// Usage: node s1frames.js <width> <height> <prefix> [lang] [cropStage]
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const OUT = '/home/user/Mad/.inhabited/designer/screens/';
const w = parseInt(process.argv[2] || '390'), h = parseInt(process.argv[3] || '844'), prefix = process.argv[4] || 's1', lang = process.argv[5] || 'zh';
const TIMES = (process.argv[6] ? process.argv[6].split(',').map(Number) : [0, 300, 500, 900, 1250, 1500, 1700, 1850, 2000, 2300, 2500]);
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto(URL + '?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
  if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(250); }
  for (const t of TIMES) {
    await p.evaluate(tt => window.SIS.seek(tt), t);
    await p.waitForTimeout(120);
    await p.screenshot({ path: `${OUT}${prefix}_t${String(t).padStart(4, '0')}.png`, clip: { x: 0, y: 0, width: w, height: Math.min(h, 700) } });
  }
  console.log('errors', JSON.stringify(errs));
  await b.close();
})();
