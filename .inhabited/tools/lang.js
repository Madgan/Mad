// S11: the language cut. Toggle at rest, mid-travel (held with a paused animation), and after, in one strip.
const { chromium } = require('playwright');
const OUT = '/home/user/Mad/.inhabited/designer/screens/';
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  const clip = { x: 0, y: 0, width: 390, height: 300 };
  await p.screenshot({ path: OUT + 'lang_0_zh_390.png', clip });
  await p.click('.lang-toggle');
  await p.evaluate(() => { const a = document.querySelector('.lt-thumb').getAnimations()[0]; a.pause(); a.currentTime = 40; });
  await p.waitForTimeout(80); await p.screenshot({ path: OUT + 'lang_1_mid_390.png', clip });
  await p.evaluate(() => document.querySelector('.lt-thumb').getAnimations()[0].finish());
  await p.waitForTimeout(150); await p.screenshot({ path: OUT + 'lang_2_en_390.png', clip });
  console.log('lang', await p.evaluate(() => document.documentElement.lang), 'errors', JSON.stringify(errs));
  await b.close();
})();
