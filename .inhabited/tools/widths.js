// Horizontal overflow, console errors and first-screen positions at several widths and both languages; touch target audit; keyboard focus shots.
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const OUT = '/home/user/Mad/.inhabited/designer/screens/';
(async () => {
  const b = await chromium.launch();
  for (const [w, h] of [[320, 640], [360, 740], [390, 844], [430, 932], [768, 900], [1280, 800], [1440, 900]]) {
    const p = await (await b.newContext({ viewport: { width: w, height: h } })).newPage();
    const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
    await p.goto(URL + '?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
    for (const lang of ['zh', 'en']) {
      if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(200); }
      const r = await p.evaluate(() => {
        const q = s => { const e = document.querySelector(s).getBoundingClientRect(); return Math.round(e.top + scrollY) + '-' + Math.round(e.bottom + scrollY); };
        const iw = innerWidth; let over = 0; document.querySelectorAll('main *, header *, footer *').forEach(e => { const b = e.getBoundingClientRect(); if (b.width && b.right > iw + 1 && getComputedStyle(e).visibility !== 'hidden' && !e.closest('.thread-band')) over++; });
        return { sw: document.documentElement.scrollWidth, over, docH: document.documentElement.scrollHeight, claim: q('.hero-claim'), sheet: q('#sheet'), cta: q('#hero .hero-cta'), terms: q('.trial-terms'), topCta: q('.cta-compact') };
      });
      console.log(w + 'x' + h, lang, JSON.stringify(r), 'errors', errs.length);
    }
    if (w === 390) {
      // touch targets
      const small = await p.evaluate(() => [...document.querySelectorAll('a,button,input')].map(e => { const b = e.getBoundingClientRect(); let hh = b.height, ww = b.width; const af = getComputedStyle(e, '::after'); if (af.content !== 'none' && af.position === 'absolute') { hh = Math.max(hh, parseFloat(af.height) || 0); } return { c: (e.className || e.tagName) + '', w: Math.round(ww), h: Math.round(hh) }; }).filter(x => x.h < 44 || x.w < 44));
      console.log('targets under 44:', JSON.stringify(small));
    }
    if (w === 390 || w === 1280) {
      await p.click('.lang-toggle'); await p.waitForTimeout(200); await p.evaluate(() => scrollTo(0, 0));
      await p.keyboard.press('Tab'); await p.keyboard.press('Tab'); await p.keyboard.press('Tab');
      await p.screenshot({ path: `${OUT}focus_toggle_${w}.png`, clip: { x: 0, y: 0, width: w, height: 200 } });
      for (let i = 0; i < 3; i++) await p.keyboard.press('Tab');
      await p.screenshot({ path: `${OUT}focus_herocta_${w}.png`, clip: { x: 0, y: 0, width: w, height: Math.min(h, 800) } });
      await p.keyboard.press('Tab'); await p.keyboard.press('Tab');
      console.log('focused:', await p.evaluate(() => document.activeElement.className + ' ' + document.activeElement.tagName));
      await p.keyboard.press('ArrowLeft'); await p.keyboard.press('ArrowLeft'); await p.waitForTimeout(100);
      await p.screenshot({ path: `${OUT}focus_rail_${w}.png`, clip: { x: 0, y: 0, width: w, height: Math.min(h, 800) } });
      await p.keyboard.press('End'); await p.keyboard.press('Tab'); await p.keyboard.press('Tab'); await p.keyboard.press('Enter'); await p.waitForTimeout(600);
      console.log('kbd pick:', await p.evaluate(() => document.activeElement.className + ' -> ' + document.querySelector('#sheet .name').textContent));
      await p.screenshot({ path: `${OUT}focus_tile_${w}.png`, clip: { x: 0, y: 0, width: w, height: Math.min(h, 844) } });
    }
    await p.close();
  }
  await b.close();
})();
