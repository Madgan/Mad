// Rebuild 3: the language switch with scripts off (javaScriptEnabled: false). Click the switch, shoot, wheel down, shoot,
// tap the wordmark (#top), shoot, press Space on the switch (keyboard), shoot. node rb3_nojs_lang.js <w> <h>
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const w = +process.argv[2] || 390, h = +process.argv[3] || 844;
const S = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/', O = '/home/user/Mad/.inhabited/v1_critic/screens/';
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, javaScriptEnabled: false });
  const p = await ctx.newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html'); await p.waitForTimeout(1200);
  const shots = []; const shot = async (label) => { const f = S + 'rb3nojs_' + w + '_' + shots.length + '.png'; await p.screenshot({ path: f }); shots.push(f + '::' + label); };
  await shot('no script, as loaded');
  await p.click('.lang-toggle'); await p.waitForTimeout(250); await shot('no script, switch clicked');
  await p.mouse.move(w / 2, h / 2); await p.mouse.wheel(0, 2300); await p.waitForTimeout(500); await shot('no script, EN, wheeled 2300');
  await p.mouse.wheel(0, -2300); await p.waitForTimeout(400);
  await p.click('.wordmark'); await p.waitForTimeout(300); await shot('no script, after the wordmark link (#top)');
  await p.focus('#lang-en'); await p.keyboard.press('Space'); await p.waitForTimeout(250); await shot('no script, Space on the switch');
  // the accessibility tree still reports a switch and its state
  const box = await p.locator('#lang-en').boundingBox();
  console.log('width', w, 'switch box', JSON.stringify(box), 'shots', shots.length);
  await b.close();
  const per = w > 600 ? 2 : 4;
  for (let k = 0; k < shots.length; k += per) {
    const out = O + 'rebuild3_nojs_lang_' + w + '_' + String.fromCharCode(97 + k / per) + '.png';
    if (w > 600) execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_vstack.py', out, ...shots.slice(k, k + per).map(f => f.split('::')[0])]);
    else execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_paste.py', out, ...shots.slice(k, k + per)]);
  }
})();
