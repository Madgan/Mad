// S1 frames stepped on the page's own clock. node rb1_s1.js <w> <h> <lang> <prefix> <t,t,...> [clipH]
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const O = '/home/user/Mad/.inhabited/v1_critic/screens/';
const w = +process.argv[2], h = +process.argv[3], lang = process.argv[4], prefix = process.argv[5], TIMES = process.argv[6].split(',').map(Number), ch = +(process.argv[7] || 640);
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto(URL + '?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(250); }
  for (const t of TIMES) {
    await p.evaluate(tt => window.SIS.seek(tt), t);
    await p.waitForTimeout(100);
    await p.screenshot({ path: `${O}${prefix}_t${String(t).padStart(4, '0')}.png`, clip: { x: 0, y: 0, width: w, height: ch } });
  }
  console.log('errors', JSON.stringify(errs));
  await b.close();
})();
