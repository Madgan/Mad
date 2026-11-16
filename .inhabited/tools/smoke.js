// Smoke test: load the page, report console errors, overflow and first-screen positions, save first-screen stills.
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const OUT = '/home/user/Mad/.inhabited/designer/screens/';
(async () => {
  const b = await chromium.launch();
  for (const [w, h] of [[390, 844], [1280, 800]]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const p = await ctx.newPage();
    const errs = [];
    p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
    p.on('requestfailed', r => errs.push('REQFAIL ' + r.url()));
    await p.goto(URL + '?autoplay=0');
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(600);
    for (const lang of ['zh', 'en']) {
      if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(250); }
      await p.screenshot({ path: `${OUT}rest_${w}_${lang}.png` });
      const m = await p.evaluate(() => {
        const r = s => { const e = document.querySelector(s); if (!e) return null; const b = e.getBoundingClientRect(); return [Math.round(b.left), Math.round(b.top + scrollY), Math.round(b.right), Math.round(b.bottom + scrollY)]; };
        return {
          sw: document.documentElement.scrollWidth, iw: innerWidth, docH: document.documentElement.scrollHeight,
          claim: r('.hero-claim'), stage: r('.hero-stage'), sheet: r('#sheet'), caption: r('.stage-caption'), cta: r('#hero .hero-cta'), terms: r('.trial-terms'),
          rail: r('.cut-rail'), pc: r('.picker-client'), pr: r('.picker-rate'), note: r('.sample-note'), story: r('#story-stage'),
        };
      });
      console.log(w, lang, JSON.stringify(m));
    }
    console.log(w, 'errors:', JSON.stringify(errs));
    await ctx.close();
  }
  await b.close();
})();
