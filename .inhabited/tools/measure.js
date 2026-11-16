const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  await p.click('.lang-toggle'); await p.waitForTimeout(200);
  const r = await p.evaluate((sels) => sels.map(s => { const e = document.querySelector(s); const rg = document.createRange(); rg.selectNodeContents(e); const b = rg.getBoundingClientRect(); const pb = e.parentElement.getBoundingClientRect(); return s + ' text ' + Math.round(b.width) + 'x' + Math.round(b.height) + ' in ' + Math.round(pb.width); }), process.argv.slice(2));
  console.log(r.join('\n'));
  await b.close();
})();
