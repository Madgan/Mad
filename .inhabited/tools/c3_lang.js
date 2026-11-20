// cycle 3: language switch mid-page: does the reading position hold? measured on the block under the reading line, 390 and 1280
const { chromium } = require('playwright');
const OUT = '/home/user/Mad/.inhabited/v1_critic/screens/';
(async () => {
  const b = await chromium.launch();
  for (const [w, h] of [[390, 844], [1280, 800]]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const p = await ctx.newPage();
    await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0');
    await p.waitForTimeout(900);
    const H = await p.evaluate(() => document.documentElement.scrollHeight);
    const probe = () => p.evaluate(() => {
      // several probes: blocks whose box crosses 25%, 40%, 60% of the viewport height, identified by a stable path
      const pick = (fy) => {
        const xs = [innerWidth * 0.5, innerWidth * 0.3, innerWidth * 0.7, innerWidth * 0.2];
        for (const x of xs) {
          let el = document.elementFromPoint(x, innerHeight * fy);
          while (el && !(el.matches && el.matches('.msg,.notice,.chat-head,.date-chip,.plan,.composer,.sis-card,.doc-bubble,.hero-stage,.hero-claim,.cta-trial,.console,.picker-client,.picker-rate,footer p,footer .links,h2,.sample-note'))) el = el.parentElement;
          if (el) { if (!el.dataset.c3) el.dataset.c3 = 'k' + Math.random().toString(36).slice(2, 8); const r = el.getBoundingClientRect(); return { k: el.dataset.c3, cls: (el.className || el.tagName).toString().slice(0, 28), top: Math.round(r.top), h: Math.round(r.height) }; }
        } return null;
      };
      return { y: Math.round(scrollY), a: pick(0.25), b: pick(0.4), c: pick(0.6) };
    });
    const where = (k) => p.evaluate(k => { const el = document.querySelector('[data-c3="' + k + '"]'); if (!el) return null; const r = el.getBoundingClientRect(); return { top: Math.round(r.top), h: Math.round(r.height) }; }, k);
    let worst = 0, rows = [];
    for (let y = 300; y < H - h; y += 350) {
      await p.evaluate(yy => scrollTo(0, yy), y); await p.waitForTimeout(260);
      const before = await probe();
      if ([700, 2050, 4150].includes(y) ) await p.screenshot({ path: `${OUT}c3_lang_${w}_y${y}_1zh.png` });
      await p.locator('.lang-toggle').click(); await p.waitForTimeout(260);
      const yEn = await p.evaluate(() => Math.round(scrollY));
      const mid = {}; for (const key of ['a', 'b', 'c']) if (before[key]) mid[key] = await where(before[key].k);
      if ([700, 2050, 4150].includes(y)) await p.screenshot({ path: `${OUT}c3_lang_${w}_y${y}_2en.png` });
      await p.locator('.lang-toggle').click(); await p.waitForTimeout(260);
      const yBack = await p.evaluate(() => Math.round(scrollY));
      const d = key => before[key] && mid[key] ? mid[key].top - before[key].top : null;
      const dm = key => before[key] && mid[key] ? (mid[key].top + mid[key].h * ((innerH => 0)(0))) : null;
      rows.push(`y ${y} -> en ${yEn} -> zh ${yBack} | block at 40%: ${before.b && before.b.cls} top ${before.b && before.b.top} -> ${mid.b && mid.b.top} (h ${before.b && before.b.h} -> ${mid.b && mid.b.h}) | at 25%: ${d('a')} px | at 60%: ${d('c')} px`);
      for (const key of ['b']) if (d(key) !== null) worst = Math.max(worst, Math.abs(d(key)));
    }
    console.log('width', w, 'page height', H, 'worst top-edge shift of the block on the reading line', worst, 'px');
    rows.forEach(r => console.log('  ' + r));
    await ctx.close();
  }
  await b.close();
})();
