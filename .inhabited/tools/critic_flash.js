const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
  await p.route(/fonts\.(googleapis|gstatic)\.com/, async r => { await new Promise(s => setTimeout(s, 1200)); r.continue(); });
  const O = '/home/user/Mad/.inhabited/v1_critic/screens/';
  const t0 = Date.now();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html', { waitUntil: 'commit' });
  for (let i = 0; i < 9; i++) {
    const st = await p.evaluate(() => { const s = document.querySelector('.hero-stage'); return s ? s.dataset.state + ' | ' + document.querySelector('.stage-caption').innerText + ' | fig ' + document.querySelector('#sheet .fig').textContent : 'no stage'; }).catch(() => 'n/a');
    const tb = Date.now() - t0;
    await p.screenshot({ path: O + `cold_flash_${i}.png`, clip: { x: 0, y: 0, width: 390, height: 620 } });
    console.log(i, 'state read at', tb, 'ms; shot done at', Date.now() - t0, 'ms :', st);
  }
  await b.close();
})();
