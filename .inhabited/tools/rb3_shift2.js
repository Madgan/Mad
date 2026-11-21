// Rebuild 3: wheel slowly to the foot of the page at 390 in English and log, on every frame, the last line's text and
// where the composer and footer stand on screen: at the frame the line is cut, is anything that moved inside the screen?
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const [w, h, lang] of [[390, 844, 'en'], [390, 844, 'zh'], [1280, 800, 'en']]) {
    const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage();
    await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0' + (lang === 'en' ? '&lang=en' : '')); await p.waitForTimeout(700);
    await p.evaluate(() => scrollTo(0, document.querySelector('.elapsed').getBoundingClientRect().top + scrollY - innerHeight - 400)); await p.waitForTimeout(600);
    await p.evaluate(() => { window.__l = []; const e = document.querySelector('.elapsed'), c = document.querySelector('.composer'), f = document.querySelector('footer'); const step = () => { window.__l.push({ y: scrollY, n: e.innerText.length, eT: e.getBoundingClientRect().top, eB: e.getBoundingClientRect().bottom, cT: c.getBoundingClientRect().top, fT: f.getBoundingClientRect().top, H: document.documentElement.scrollHeight }); requestAnimationFrame(step); }; requestAnimationFrame(step); });
    await p.mouse.move(w / 2, h / 2);
    for (let i = 0; i < 60; i++) { await p.mouse.wheel(0, 16); await p.waitForTimeout(24); }
    const l = await p.evaluate(() => window.__l); const i = l.findIndex((x, k) => k > 0 && x.n !== l[k - 1].n);
    const a = l[i - 1], z = l[i];
    console.log(w + 'x' + h, lang, i < 0 ? 'no cut seen' : '| frame before the cut: line ' + Math.round(a.eT) + ' to ' + Math.round(a.eB) + ', composer top ' + Math.round(a.cT) + ', footer top ' + Math.round(a.fT) + ', height ' + a.H + ' | frame of the cut (scrolled ' + (z.y - a.y) + ' px): line ' + Math.round(z.eT) + ' to ' + Math.round(z.eB) + ', composer top ' + Math.round(z.cT) + ', footer top ' + Math.round(z.fT) + ', height ' + z.H + ' | screen height ' + h + ' | composer moved on screen by ' + Math.round(z.cT - a.cT + (z.y - a.y)) + ' px, and is ' + (a.cT >= h ? 'below the edge' : 'IN VIEW'));
    await p.close();
  }
  await b.close();
})();
