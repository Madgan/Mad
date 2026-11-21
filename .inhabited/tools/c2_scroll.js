// Critic cycle 2: scroll-driven sequences at chosen positions. usage: node c2_scroll.js <tag> <lang> <y0> <y1> <n> [up]
const { chromium } = require('playwright');
const fs = require('fs');
const [tag, lang, y0, y1, n, up] = process.argv.slice(2);
const OUT = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/scroll_' + tag;
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
  if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(400); }
  await p.mouse.move(195, 420);
  let cur = 0; const wheelTo = async (t) => { while (cur !== t) { const d = Math.max(-40, Math.min(40, t - cur)); await p.mouse.wheel(0, d); cur += d; await p.waitForTimeout(10); } await p.waitForTimeout(250); };
  const ys = []; for (let i = 0; i < +n; i++) ys.push(Math.round(+y0 + (+y1 - +y0) * i / (+n - 1)));
  if (up) { await wheelTo(+y1 + 600); ys.reverse(); }
  let i = 0; const info = [];
  for (const y of ys) { await wheelTo(y); await p.screenshot({ path: OUT + '/f_' + String(i).padStart(5, '0') + '.png' }); info.push(y + ':' + await p.evaluate(() => { const g = s => { const e = document.querySelector(s); return e ? e.getAttribute('data-state') : null; }; return [document.body.getAttribute('data-ep'), g('.doc-bubble'), g('#report-msg') || g('.report-msg'), Math.round(scrollY)].join('/'); })); i++; }
  console.log(tag, info.join('  '));
  await b.close();
})();
