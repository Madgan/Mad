// cycle 4: 320 px first screen and report, to look at the small stage text and the month columns
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 320, height: 700 }, deviceScaleFactor: 1 })).newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html'); await p.waitForTimeout(3300);
  await p.screenshot({ path: '/home/user/Mad/.inhabited/v1_critic/screens/c4_w320_top.png' });
  await p.evaluate(() => document.querySelector('#report').scrollIntoView({ block: 'center' })); await p.waitForTimeout(800);
  await p.screenshot({ path: '/home/user/Mad/.inhabited/v1_critic/screens/c4_w320_report.png' });
  await b.close();
})();
