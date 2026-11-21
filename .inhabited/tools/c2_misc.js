const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const w of [320, 360, 390, 430]) for (const lang of ['zh', 'en']) {
    const p = await (await b.newContext({ viewport: { width: w, height: 844 } })).newPage();
    await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
    if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(300); }
    const r = await p.evaluate(() => {
      const vw = innerWidth; const bad = [];
      const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n;
      while (n = tw.nextNode()) { if (!n.textContent.trim()) continue; const el = n.parentElement; const cs = getComputedStyle(el); if (cs.visibility === 'hidden' || cs.display === 'none') continue; if (el.closest('.hero-stage') || el.closest('.sr')) continue; const rg = document.createRange(); rg.selectNodeContents(n); const r = rg.getBoundingClientRect(); if (r.width < 2) continue; if (r.left < 15.5 || r.right > vw - 15.5) bad.push(Math.round(r.left) + '-' + Math.round(r.right) + ' "' + n.textContent.trim().slice(0, 24) + '" ' + (el.className || el.tagName)); 
        // clipped text: element narrower than its scrollWidth with overflow hidden
        if (el.scrollWidth > el.clientWidth + 1 && ['hidden', 'clip'].includes(cs.overflowX) && el.clientWidth > 0) bad.push('CLIPPED "' + n.textContent.trim().slice(0, 24) + '" ' + el.className + ' ' + el.clientWidth + '<' + el.scrollWidth); }
      return { sw: document.documentElement.scrollWidth, H: document.documentElement.scrollHeight, bad: bad.slice(0, 14), nbad: bad.length };
    });
    console.log(w, lang, 'scrollWidth', r.sw, 'H', r.H, 'gutter/clipping issues', r.nbad, JSON.stringify(r.bad));
    await p.close();
  }
  // language toggle scroll anchoring at several positions
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  for (const y of [700, 1500, 2300, 3000, 3700, 4200]) {
    await p.evaluate(yy => scrollTo(0, yy), y); await p.waitForTimeout(350);
    const before = await p.evaluate(() => { const e = document.elementFromPoint(195, 420); window.__a = e.closest('.msg,.notice,.chat-head,.date-chip,.plan,section') || e; return { top: Math.round(window.__a.getBoundingClientRect().top), cls: window.__a.className || window.__a.id, y: Math.round(scrollY) }; });
    await p.click('.lang-toggle'); await p.waitForTimeout(450);
    const after = await p.evaluate(() => ({ top: Math.round(window.__a.getBoundingClientRect().top), y: Math.round(scrollY) }));
    await p.click('.lang-toggle'); await p.waitForTimeout(450);
    console.log('toggle at y', y, 'anchor', String(before.cls).slice(0, 30), 'top before', before.top, 'after', after.top, 'drift', after.top - before.top, 'scrollY', before.y, '->', after.y);
  }
  await b.close();
})();
