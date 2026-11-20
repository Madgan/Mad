const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3 })).newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(600);
  const O = '/home/user/Mad/.inhabited/v1_critic/screens/';
  await p.screenshot({ path: O + 'zoom3x_rest_stage.png', clip: { x: 0, y: 176, width: 390, height: 336 } });
  await p.evaluate(() => window.SIS.seek(900)); await p.waitForTimeout(120);
  await p.screenshot({ path: O + 'zoom3x_s1_t0900_stage.png', clip: { x: 0, y: 176, width: 390, height: 336 } });
  await p.evaluate(() => window.SIS.seek(1000)); await p.waitForTimeout(120);
  await p.screenshot({ path: O + 'zoom3x_s1_t1000_lane.png', clip: { x: 0, y: 181, width: 200, height: 304 } });
  await b.close();
})();
