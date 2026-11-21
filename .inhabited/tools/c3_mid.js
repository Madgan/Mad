// cycle 3: first screen and one mid-page position at 768, 900 and 1024 (between the phone and desktop layouts)
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const w of [768, 900, 1024]) {
    const p = await (await b.newContext({ viewport: { width: w, height: 800 }, deviceScaleFactor: 1 })).newPage();
    await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.waitForTimeout(800);
    await p.screenshot({ path: `/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/mid_${w}_a.png` });
    const info = await p.evaluate(() => { const g = s => { const r = document.querySelector(s).getBoundingClientRect(); return Math.round(r.left) + ',' + Math.round(r.top) + ' ' + Math.round(r.width) + 'x' + Math.round(r.height); }; return { stage: g('.hero-stage'), claim: g('.hero-claim'), cta: g('#hero .hero-cta'), rail: g('.cut-rail'), clients: g('.picker-client'), rates: g('.picker-rate'), sheet: g('#sheet') }; });
    console.log(w, JSON.stringify(info));
    await p.evaluate(() => scrollTo(0, document.querySelector('#reports').getBoundingClientRect().top + scrollY - 60)); await p.waitForTimeout(500);
    await p.screenshot({ path: `/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/mid_${w}_b.png` });
    await p.close();
  }
  await b.close();
})();
