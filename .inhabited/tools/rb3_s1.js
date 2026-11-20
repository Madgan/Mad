// Rebuild 3: S1 stepped on the page's own clock (SIS.seek), frames pasted side by side (phone) or stacked (desktop).
// node rb3_s1.js <w> <h> <lang> <out.png> <t,t,t,t> [clipY0] [clipH] [scale] [file] [stack]
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const SCR = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/';
const a = process.argv;
const w = +a[2], h = +a[3], lang = a[4], out = a[5], TIMES = a[6].split(',').map(Number), y0 = +(a[7] || 0), ch = +(a[8] || 640), sc = +(a[9] || 1), file = a[10] && a[10] !== '-' ? a[10] : '/home/user/Mad/.inhabited/designer/index.html', stack = a[11] === 'stack';
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: sc })).newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto('file://' + file + '?autoplay=0' + (lang === 'en' ? '&lang=en' : '')); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  const files = [];
  for (const t of TIMES) {
    await p.evaluate(tt => window.SIS.seek(tt), t);
    await p.waitForTimeout(90);
    const f = SCR + 'rb3s1_' + out.replace(/[^a-z0-9]/gi, '_') + '_' + t + '.png'; files.push(f);
    await p.screenshot({ path: f, clip: { x: 0, y: y0, width: w, height: ch } });
  }
  await b.close();
  if (stack) execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_vstack.py', out, ...files]);
  else execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_paste.py', out, ...files.map((f, i) => f + '::t=' + TIMES[i] + ' ms')]);
  console.log(out, 'errors', JSON.stringify(errs));
})();
