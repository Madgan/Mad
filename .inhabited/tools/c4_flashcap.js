// cycle 3: lossless frames of the opening stage, one per 1/60 s of the page clock (SIS.seek), for c3_flash.py
// usage: node c3_flashcap.js <w> <h> <outdir> [query]
const { chromium } = require('playwright');
const fs = require('fs');
const w = +process.argv[2], h = +process.argv[3], dir = process.argv[4], q = process.argv[5] || '';
(async () => {
  fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0' + q); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  const r = await p.evaluate(() => { const s = document.querySelector('.hero-stage').getBoundingClientRect(); return { x: Math.round(s.left), y: Math.round(s.top), width: Math.round(s.width), height: Math.round(s.height) }; });
  let i = 0;
  for (let t = 0; t <= 2420; t += 1000 / 60) { await p.evaluate(tt => window.SIS.seek(tt), t); await p.screenshot({ path: dir + '/f_' + String(i).padStart(4, '0') + '.png', clip: r }); i++; }
  console.log('frames', i, JSON.stringify(r));
  await b.close();
})();
