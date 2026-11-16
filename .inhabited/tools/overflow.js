// Report elements whose right edge passes the viewport, per language and width; and measure some text widths.
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
(async () => {
  const b = await chromium.launch();
  for (const [w, h] of [[390, 844], [1280, 800]]) {
    const p = await (await b.newContext({ viewport: { width: w, height: h } })).newPage();
    await p.goto(URL + '?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
    for (const lang of ['zh', 'en']) {
      if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(250); }
      const r = await p.evaluate(() => {
        const out = []; const iw = innerWidth;
        document.querySelectorAll('body *').forEach(e => { const b = e.getBoundingClientRect(); if (b.width && (b.right > iw + 0.5 || b.left < -0.5)) { const cs = getComputedStyle(e); if (cs.visibility === 'hidden' && !e.closest('.stack')) return; out.push((e.className && e.className.baseVal !== undefined ? e.className.baseVal : e.className) + ' <' + e.tagName + '> ' + Math.round(b.left) + '..' + Math.round(b.right) + ' y' + Math.round(b.top + scrollY)); } });
        return { sw: document.documentElement.scrollWidth, out: out.slice(0, 25) };
      });
      console.log(w, lang, JSON.stringify(r, null, 0));
    }
  }
  await b.close();
})();
