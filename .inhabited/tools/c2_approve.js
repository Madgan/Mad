const { chromium } = require('playwright');
const S = '/home/user/Mad/.inhabited/v1_critic/screens/';
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  await p.mouse.move(195, 420); let cur = 0; const wheelTo = async t => { while (cur < t) { const d = Math.min(60, t - cur); await p.mouse.wheel(0, d); cur += d; await p.waitForTimeout(10); } await p.waitForTimeout(400); };
  await wheelTo(2560);
  const shots = [];
  const snap = async n => { const f = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/ap_' + n + '.png'; await p.screenshot({ path: f }); shots.push(f); };
  await snap(0);
  await p.click('.approve'); await p.waitForTimeout(120); await snap(1); await p.waitForTimeout(700); await snap(2);
  console.log('import state', await p.evaluate(() => document.querySelector('#import-msg').getAttribute('data-state') + ' | ' + document.querySelector('#import-msg .st').innerText.replace(/\s+/g, ' ') + ' | ' + document.querySelector('.approve').innerText.replace(/\s+/g, ' ')));
  await wheelTo(3250); await snap(3);
  await p.click('.token-btn'); await p.waitForTimeout(700); await snap(4);
  console.log('pro state', await p.evaluate(() => document.querySelector('#pro-msg').getAttribute('data-state') + ' | ' + document.querySelector('#pro-msg .st').innerText.replace(/\s+/g, ' ') + ' | ' + document.querySelector('.token-btn').innerText.replace(/\s+/g, ' ') + ' | ' + document.querySelector('#pro-stage').innerText.replace(/\s+/g, ' ').slice(0, 200)));
  await b.close();
  console.log(shots.join(' '));
})();
