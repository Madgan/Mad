// cycle 4: nearest left and right edges of visible content at 320 and 390 (hero thread, hanging messages, page blocks)
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const w of [320, 390]) for (const lang of ['zh', 'en']) {
    const p = await (await b.newContext({ viewport: { width: w, height: 844 } })).newPage();
    await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0' + (lang === 'en' ? '&lang=en' : '')); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
    const res = {};
    for (const t of [-1, 100, 500]) {
      if (t >= 0) await p.evaluate(tt => SIS.seek(tt), t); else await p.evaluate(() => SIS.end());
      res[t] = await p.evaluate(() => { const vw = innerWidth; const L = [], R = [];
        const sel = '.hero-stage .bubble, .hero-stage .hang, main .msg, main .doc-bubble, main .notice, main .chat-head, .hero-claim, .hero-cta, .picker-client, .picker-rate, .cut-rail, footer .col, .plan, .composer, .date-chip, .tape-label';
        document.querySelectorAll(sel).forEach(e => { const cs = getComputedStyle(e); if (cs.visibility === 'hidden' || cs.display === 'none') return; let a = e.parentElement, hid = false; while (a) { const c = getComputedStyle(a); if (c.display === 'none' || c.visibility === 'hidden') { hid = true; break; } a = a.parentElement; } if (hid) return; const r = e.getBoundingClientRect(); if (!r.width || r.bottom < -2000) return; L.push([Math.round(r.left * 10) / 10, (e.className || e.tagName).toString().slice(0, 22)]); R.push([Math.round((vw - r.right) * 10) / 10, (e.className || e.tagName).toString().slice(0, 22)]); });
        L.sort((a, b) => a[0] - b[0]); R.sort((a, b) => a[0] - b[0]); return { left: L.slice(0, 3), right: R.slice(0, 3) }; });
    }
    console.log(w, lang, JSON.stringify(res));
    await p.close();
  }
  await b.close();
})();
