// scroll-linked sections at several scroll positions (real scrolling, default motion). node rb1_scroll.js <w> <h> <lang>
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const O = '/home/user/Mad/.inhabited/v1_critic/screens/';
const w = +process.argv[2], h = +process.argv[3], lang = process.argv[4] || 'zh';
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto(URL + '?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(250); }
  const top = async sel => p.evaluate(s => Math.round(document.querySelector(s).getBoundingClientRect().top + pageYOffset), sel);
  const shoot = async (name, y) => { await p.evaluate(yy => scrollTo(0, yy), y); await p.waitForTimeout(450); await p.screenshot({ path: `${O}rebuild1_${name}_${w}${lang}.png` }); };
  const st = await top('#story-stage');
  // story: leaf bottom reaches the screen, then tear, drop, ticks, stub travel, filed
  const y0 = st + 362 * (w >= 900 ? 1.4 : 1) - h * .97;
  const fr = [-0.06, 0.04, 0.25, 0.44, 0.58, 0.8, 0.96];
  for (let i = 0; i < fr.length; i++) await shoot('story_' + i + '_p' + String(Math.round(fr[i] * 100)).padStart(3, '0').replace('-', 'm'), Math.round(y0 + fr[i] * h * .5));
  await shoot('story_up_p025', Math.round(y0 + .25 * h * .5));
  const rp = await top('#report');
  const m0 = rp - h * .8, mr = h * .44;
  const mf = [0.1, 0.45, 0.8, 1];
  for (let i = 0; i < mf.length; i++) await shoot('month_' + i + '_p' + String(Math.round(mf[i] * 100)).padStart(3, '0'), Math.round(m0 + mf[i] * mr));
  const im = await top('#import-stage');
  const i0 = im - h * .75, ir = h * .42;
  const jf = [0.03, 0.3, 0.55, 0.78, 1];
  for (let i = 0; i < jf.length; i++) await shoot('import_' + i + '_p' + String(Math.round(jf[i] * 100)).padStart(3, '0'), Math.round(i0 + jf[i] * ir));
  // approve
  await p.evaluate(() => document.querySelector('.approve').scrollIntoView({ block: 'center' })); await p.waitForTimeout(300);
  await p.click('.approve'); await p.waitForTimeout(120); await p.screenshot({ path: `${O}rebuild1_approve_mid_${w}${lang}.png` });
  await p.waitForTimeout(400); await p.screenshot({ path: `${O}rebuild1_approve_after_${w}${lang}.png` });
  await p.evaluate(() => document.querySelector('.token-btn').scrollIntoView({ block: 'center' })); await p.waitForTimeout(300);
  await p.click('.token-btn'); await p.waitForTimeout(500); await p.screenshot({ path: `${O}rebuild1_token_revoked_${w}${lang}.png` });
  console.log('errors', JSON.stringify(errs));
  await b.close();
})();
