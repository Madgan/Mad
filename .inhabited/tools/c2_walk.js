// Critic cycle 2: walk the page top to bottom. usage: node c2_walk.js <tag> <w> <h> <lang> <normal|reduce|nojs> <step>
const { chromium } = require('playwright');
const fs = require('fs');
const [tag, W, Hh, lang, mode, stepArg] = process.argv.slice(2);
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const OUT = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/walk_' + tag;
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: +W, height: +Hh }, deviceScaleFactor: 1, reducedMotion: mode === 'reduce' ? 'reduce' : 'no-preference', javaScriptEnabled: mode !== 'nojs' });
  const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(URL); await p.waitForTimeout(4200);
  if (lang === 'en' && mode !== 'nojs') { await p.click('.lang-toggle'); await p.waitForTimeout(500); }
  const H = mode === 'nojs' ? 5600 : await p.evaluate(() => document.documentElement.scrollHeight);
  const step = +stepArg; let y = 0, i = 0; const ys = [];
  await p.mouse.move(+W / 2, +Hh / 2);
  while (true) {
    await p.waitForTimeout(450);
    const sy = mode === 'nojs' ? y : await p.evaluate(() => Math.round(scrollY));
    const f = OUT + '/f_' + String(i).padStart(5, '0') + '.png';
    await p.screenshot({ path: f }); ys.push(sy); i++;
    if (y >= H - +Hh) break;
    const target = Math.min(H - +Hh, y + step);
    while (y < target) { const d = Math.min(60, target - y); await p.mouse.wheel(0, d); y += d; await p.waitForTimeout(16); }
    if (i > 14) break;
  }
  console.log(tag, 'H', H, 'frames', i, 'scrollYs', ys.join(','), 'errs', JSON.stringify(errs));
  await b.close();
})();
