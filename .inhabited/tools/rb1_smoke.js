const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const O = '/home/user/Mad/.inhabited/v1_critic/screens/';
(async () => {
  const b = await chromium.launch();
  for (const [w, h, lang] of [[390, 844, 'zh'], [390, 844, 'en'], [1280, 800, 'zh'], [1280, 800, 'en']]) {
    const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage();
    const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
    await p.goto(URL + '?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
    if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(250); }
    await p.screenshot({ path: `${O}rebuild1_rest_${w}_${lang}.png` });
    const info = await p.evaluate(() => {
      const q = s => { const e = document.querySelector(s); if (!e) return null; const r = e.getBoundingClientRect(); return [Math.round(r.left), Math.round(r.top), Math.round(r.right), Math.round(r.bottom)]; };
      return { sw: document.documentElement.scrollWidth, dh: document.documentElement.scrollHeight, claim: q('.hero-claim'), h1: q('.hero-claim h1'), stage: q('.hero-stage'), sheet: q('#sheet'), cap: q('.stage-caption'), cta: q('.hero-cta'), terms: q('.trial-terms'), rail: q('.cut-rail'), tiles: q('.tiles'), strips: q('.strips'), note: q('.sample-note'), sample: q('#sheet .sample'), signin: q('.signin'), total: document.querySelector('#sheet .fig').textContent };
    });
    console.log(w, lang, JSON.stringify(info), 'errors', JSON.stringify(errs));
    await p.close();
  }
  await b.close();
})();
