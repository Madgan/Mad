// Rebuild 2: S1 stepped on the page's own clock, pasted side by side. node rb2_s1.js <w> <h> <lang> <outname> <t,t,t,t> [clipY0] [clipH] [scale]
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const O = '/home/user/Mad/.inhabited/v1_critic/screens/';
const SCR = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/';
const w = +process.argv[2], h = +process.argv[3], lang = process.argv[4], out = process.argv[5], TIMES = process.argv[6].split(',').map(Number), y0 = +(process.argv[7] || 0), ch = +(process.argv[8] || 640), sc = +(process.argv[9] || 1);
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: sc })).newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto(URL + '?autoplay=0' + (lang === 'en' ? '&lang=en' : '')); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  const files = [];
  for (const t of TIMES) {
    await p.evaluate(tt => window.SIS.seek(tt), t);
    await p.waitForTimeout(90);
    const f = SCR + 'rb2s1_' + out + '_' + t + '.png'; files.push(f);
    await p.screenshot({ path: f, clip: { x: 0, y: y0, width: w, height: ch } });
  }
  await b.close();
  execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_paste.py', O + out + '.png', ...files.map((f, i) => f + '::t=' + TIMES[i] + ' ms')]);
  console.log(out, 'errors', JSON.stringify(errs));
})();
