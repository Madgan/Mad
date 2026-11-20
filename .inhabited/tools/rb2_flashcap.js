// Lossless frames of the opening, one every 1/60 s of the page clock, for rb2_flash.py. node rb2_flashcap.js <w> <h> <outdir>
const { chromium } = require('playwright');
const fs = require('fs');
const URL = process.argv[5] || 'file:///home/user/Mad/.inhabited/designer/index.html';
const w = +process.argv[2], h = +process.argv[3], dir = process.argv[4];
(async () => {
  fs.mkdirSync(dir, { recursive: true });
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage();
  await p.goto(URL + '?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  const r = await p.evaluate(() => { const q = document.querySelector('.hero-stage').getBoundingClientRect(); return { x: Math.round(q.left), y: Math.round(q.top), width: Math.round(q.width), height: Math.round(q.height) }; });
  let i = 0;
  for (let t = 0; t <= 2420; t += 1000 / 60) {
    await p.evaluate(tt => window.SIS.seek(tt), t);
    await p.screenshot({ path: dir + '/f_' + String(i).padStart(4, '0') + '.png', clip: r }); i++;
  }
  console.log('frames', i, JSON.stringify(r));
  await b.close();
})();
