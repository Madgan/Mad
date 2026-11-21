const { chromium } = require('playwright');
const S = '/home/user/Mad/.inhabited/v1_critic/screens/';
(async () => {
  const b = await chromium.launch();
  for (const lang of ['zh', 'en']) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
    const p = await ctx.newPage();
    await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(600);
    if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(400); }
    await p.screenshot({ path: S + 'c2_zoom2x_stage_' + lang + '.png', clip: { x: 0, y: 170, width: 390, height: 470 } });
    await ctx.close();
  }
  await b.close();
})();
