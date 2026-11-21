// cycle 3: opening hold and sheet arrival, measured per frame in the page, several cold runs
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const init = () => {
  window.__log = []; let t0 = null;
  const step = (now) => {
    if (t0 === null) t0 = now;
    const h = document.documentElement, band = document.querySelector('.thread-band'), sheet = document.getElementById('sheet');
    const mover = document.querySelector('.mover');
    window.__log.push({ t: Math.round(now - t0), pre: h.classList.contains('s1-pre'), run: band ? band.classList.contains('running') : null,
      sheet: sheet ? getComputedStyle(sheet).visibility : null,
      ty: mover ? Math.round(new DOMMatrix(getComputedStyle(mover).transform).m42) : null,
      state: (document.querySelector('.hero-stage')||{}).dataset ? document.querySelector('.hero-stage').dataset.state : null,
      fonts: document.fonts.status });
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
(async () => {
  const b = await chromium.launch();
  const runs = [
    ['390zh', { width: 390, height: 844 }, ''], ['390zh', { width: 390, height: 844 }, ''], ['390zh', { width: 390, height: 844 }, ''],
    ['390en', { width: 390, height: 844 }, '?lang=en'], ['390en', { width: 390, height: 844 }, '?lang=en'],
    ['1280zh', { width: 1280, height: 800 }, ''], ['1280en', { width: 1280, height: 800 }, '?lang=en'],
    ['390zh-fontblock', { width: 390, height: 844 }, ''],
  ];
  for (const [name, vp, q] of runs) {
    const ctx = await b.newContext({ viewport: vp, deviceScaleFactor: 1 });
    const p = await ctx.newPage();
    if (name.includes('fontblock')) await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
    await p.addInitScript(init);
    const errs = []; p.on('pageerror', e => errs.push(String(e))); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto(URL + q);
    await p.waitForTimeout(3600);
    const log = await p.evaluate(() => window.__log);
    const firstRun = log.find(l => l.run), sheetOn = log.find(l => l.sheet === 'visible'), firstMove = log.find((l, i) => i > 0 && l.ty !== log[0].ty);
    const lastRun = [...log].reverse().find(l => l.run), end = log.find(l => l.state === 'end' && l.t > 300);
    const early = log.filter(l => l.t < (firstRun ? firstRun.t : 0) && l.sheet === 'visible').length;
    const gaps = log.slice(1).map((l, i) => l.t - log[i].t); const maxGap = Math.max(...gaps);
    console.log(name, 'frames', log.length, 'first', JSON.stringify(log[0]), '| band running at', firstRun && firstRun.t, '| first band move', firstMove && firstMove.t,
      '| sheet visible at', sheetOn && sheetOn.t, '| run ends', lastRun && lastRun.t, '| stage end at', end && end.t, '| finished-sheet frames before start', early, '| maxFrameGap', maxGap, '| fonts at sheet', sheetOn && sheetOn.fonts, errs.length ? 'ERR ' + errs.join(';') : '');
    await ctx.close();
  }
  await b.close();
})();
