// Rebuild 3: single viewport shots at given scroll positions (scrollTo), pasted. node rb3_shot.js <out name> <w> <h> <zh|en> <js|rm|nojs> <y,y,...> [settle ms]
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const O = '/home/user/Mad/.inhabited/v1_critic/screens/', SCR = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/';
const [name, W, Hh, lang, mode, YS, SETTLE] = process.argv.slice(2);
const w = +W, h = +Hh, ys = YS.split(','), settle = +(SETTLE || 900);
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, reducedMotion: mode === 'rm' ? 'reduce' : 'no-preference', javaScriptEnabled: mode !== 'nojs' });
  const p = await ctx.newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0' + (lang === 'en' ? '&lang=en' : '')); await p.waitForTimeout(1200);
  const files = [];
  for (const y of ys) {
    const yy = y === 'end' ? await p.evaluate(() => document.documentElement.scrollHeight) : +y;
    await p.evaluate(v => scrollTo(0, v), yy); await p.waitForTimeout(settle);
    const f = SCR + 'rb3shot_' + name + '_' + y + '.png'; await p.screenshot({ path: f }); files.push(f + '::scroll ' + y);
  }
  const sw = await p.evaluate(() => [document.documentElement.scrollWidth, innerWidth, document.documentElement.scrollHeight]);
  await b.close();
  const out = O + 'rebuild3_' + name + '.png';
  if (w > 600) execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_vstack.py', out, ...files.map(f => f.split('::')[0])]);
  else execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_paste.py', out, ...files]);
  console.log(name, 'scrollWidth/innerWidth/height', sw.join(' / '), 'errors', JSON.stringify(errs));
})();
