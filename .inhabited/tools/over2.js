const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const w of [320, 360]) for (const lang of ['zh', 'en']) {
    const p = await (await b.newContext({ viewport: { width: w, height: 740 } })).newPage();
    await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
    if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(200); }
    const r = await p.evaluate(() => { const iw = innerWidth, out = []; document.querySelectorAll('main *, header *, footer *').forEach(e => { const b = e.getBoundingClientRect(); if (b.width && b.right > iw + 1 && getComputedStyle(e).visibility !== 'hidden' && !e.closest('.thread-band')) out.push((e.className.baseVal !== undefined ? e.className.baseVal : e.className) + '<' + e.tagName + '>' + Math.round(b.left) + '..' + Math.round(b.right)); }); return out.slice(0, 12); });
    console.log(w, lang, r.join(' | '));
    await p.close();
  }
  await b.close();
})();
