// Rebuild 3: does anything below move when the page's last line is cut to the clock and the count? Document height before
// and after the composer first comes on screen, at 390, 900, 1280 and 1440, both languages.
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const [w, h] of [[390, 844], [900, 800], [1280, 800], [1440, 900]]) for (const lang of ['zh', 'en']) {
    const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage();
    await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0' + (lang === 'en' ? '&lang=en' : '')); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
    const before = await p.evaluate(() => [document.documentElement.scrollHeight, Math.round(document.querySelector('footer').getBoundingClientRect().top + scrollY), document.querySelector('.elapsed').innerText.trim()]);
    await p.evaluate(() => scrollTo(0, 99999)); await p.waitForTimeout(1200);
    const after = await p.evaluate(() => [document.documentElement.scrollHeight, Math.round(document.querySelector('footer').getBoundingClientRect().top + scrollY), document.querySelector('.elapsed').innerText.replace(/\s+/g, ' ').trim()]);
    console.log(w, lang, '| height', before[0], '>', after[0], '| footer top', before[1], '>', after[1], '| moved', after[1] - before[1], 'px | "' + before[2] + '" > "' + after[2] + '"');
    await p.close();
  }
  await b.close();
})();
