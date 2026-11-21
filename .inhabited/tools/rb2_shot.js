// Rebuild 2: general viewport-bounded shots. usage: node rb2_shot.js <json>
// json: {w,h,lang,reduced,nojs,autoplay,out:[{name,y,eval,wait,clip}], pre:"js to eval first"}
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const O = '/home/user/Mad/.inhabited/v1_critic/screens/';
const cfg = JSON.parse(process.argv[2]);
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: cfg.w || 390, height: cfg.h || 844 }, deviceScaleFactor: 1, reducedMotion: cfg.reduced ? 'reduce' : 'no-preference', javaScriptEnabled: !cfg.nojs });
  const p = await ctx.newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  const q = [];
  if (!cfg.autoplay && !cfg.reduced && !cfg.nojs) q.push('autoplay=0');
  if (cfg.lang === 'en') q.push('lang=en');
  await p.goto(URL + (q.length ? '?' + q.join('&') : ''));
  if (!cfg.nojs) await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(cfg.settle || 600);
  if (cfg.pre) { await p.evaluate(cfg.pre); await p.waitForTimeout(700); }
  for (const s of cfg.out) {
    if (s.y !== undefined) { if (cfg.nojs) { await p.mouse.wheel(0, s.y - (cfg._y || 0)); cfg._y = s.y; } else await p.evaluate(yy => scrollTo(0, yy), s.y); }
    if (s.wheel) { await p.mouse.wheel(0, s.wheel); }
    if (s.eval) await p.evaluate(s.eval);
    await p.waitForTimeout(s.wait === undefined ? 350 : s.wait);
    const opt = { path: O + s.name + '.png' }; if (s.clip) opt.clip = s.clip;
    await p.screenshot(opt);
    if (s.log) console.log(s.name, JSON.stringify(await p.evaluate(s.log)));
  }
  console.log('shots', cfg.out.length, 'errors', JSON.stringify(errs));
  await b.close();
})();
