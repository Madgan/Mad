// cycle 3: opening timing against first-paint and SIS_T0, per-frame log with performance.now
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const init = () => {
  window.__log = [];
  const step = (now) => {
    const band = document.querySelector('.thread-band'), sheet = document.getElementById('sheet'), mover = document.querySelector('.mover');
    window.__log.push({ t: performance.now(), run: band ? band.classList.contains('running') : null, sheet: sheet ? getComputedStyle(sheet).visibility : null,
      ty: mover ? Math.round(new DOMMatrix(getComputedStyle(mover).transform).m42) : null, body: !!document.body, ready: !!window.SIS_READY });
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
(async () => {
  const b = await chromium.launch();
  const runs = [['390zh',390,844,''],['390zh',390,844,''],['390zh',390,844,''],['390zh',390,844,''],['390en',390,844,'?lang=en'],['390en',390,844,'?lang=en'],['1280zh',1280,800,''],['1280en',1280,800,'?lang=en']];
  for (const [name, w, h, q] of runs) {
    const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const p = await ctx.newPage();
    await p.addInitScript(init);
    await p.goto(URL + q);
    await p.waitForTimeout(3400);
    const r = await p.evaluate(() => ({ log: window.__log, T0: window.SIS_T0, paint: performance.getEntriesByType('paint').map(e => [e.name, Math.round(e.startTime)]) }));
    const log = r.log; const f = x => x == null ? null : Math.round(x);
    const firstRun = log.find(l => l.run), sheetOn = log.find(l => l.sheet === 'visible'), lastRun = [...log].reverse().find(l => l.run);
    const fcp = (r.paint.find(e => e[0] === 'first-contentful-paint') || [])[1];
    const firstFrames = log.slice(0, 8).map(l => f(l.t) + (l.ready ? 'R' : l.body ? 'b' : '-'));
    console.log(name, 'paint', JSON.stringify(r.paint), 'SIS_T0', f(r.T0), '| first sampled frames', firstFrames.join(' '),
      '\n    band starts', f(firstRun.t), '= T0+' + f(firstRun.t - r.T0), '= FCP+' + f(firstRun.t - fcp),
      '| sheet in', f(sheetOn.t), '= T0+' + f(sheetOn.t - r.T0), '= FCP+' + f(sheetOn.t - fcp), '| run ends T0+' + f(lastRun.t - r.T0), '| sheet-in minus band-start', f(sheetOn.t - firstRun.t));
    await ctx.close();
  }
  await b.close();
})();
