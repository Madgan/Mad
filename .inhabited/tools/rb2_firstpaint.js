// Rebuild 2: first paint and the opening hold, sampled on every animation frame from inside the page, with no video recording
// (recording delays frames). Three font conditions: normal, delayed 1.2 s, refused. node rb2_firstpaint.js
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
(async () => {
  const b = await chromium.launch();
  for (const mode of ['fonts normal', 'fonts delayed 1.2 s', 'fonts refused', 'fonts normal, 1280 x 800', 'fonts normal, English']) {
    const big = mode.indexOf('1280') >= 0;
    const p = await (await b.newContext({ viewport: { width: big ? 1280 : 390, height: big ? 800 : 844 }, deviceScaleFactor: 1 })).newPage();
    if (mode.indexOf('delayed') >= 0) await p.route(/fonts\.(googleapis|gstatic)\.com/, async r => { await new Promise(z => setTimeout(z, 1200)); r.continue(); });
    if (mode.indexOf('refused') >= 0) await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
    await p.addInitScript(() => {
      window.__log = [];
      function tick() {
        const s = document.querySelector('#sheet'), bd = document.querySelector('.thread-band'), f = document.querySelector('#sheet .fig');
        if (s && bd && f) window.__log.push([performance.now(), getComputedStyle(s).visibility, document.documentElement.className.indexOf('s1-pre') >= 0 ? 'pre' : '', bd.className.indexOf('running') >= 0 ? 'run' : 'still', f.textContent, getComputedStyle(document.querySelector('#sheet .record-block')).clipPath === 'none' && getComputedStyle(document.querySelector('#sheet .record-block')).visibility === 'visible' ? 'block' : '', window.SIS_T0 ? Math.round(window.SIS_T0) : 0]);
        if (performance.now() < 5000) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
    await p.goto(URL + (mode.indexOf('English') >= 0 ? '?lang=en' : ''), { waitUntil: 'commit' });
    await p.waitForTimeout(3800);
    const log = await p.evaluate(() => window.__log);
    const t0 = log[0][0];
    const first = k => { const r = log.find(k); return r ? Math.round(r[0] - t0) : null; };
    const fin = log.filter(r => r[1] === 'visible' && r[3] === 'still' && r[4] === '2,700.00' && r[5] === 'block' && (r[0] - t0) < 1500).length;
    console.log(mode + ': frames sampled ' + log.length + '; after the first painted frame: thread starts to run at ' + first(r => r[3] === 'run') + ' ms; sheet cut in at ' + first(r => r[1] === 'visible') + ' ms; total written at ' + first(r => r[4] === '2,700.00' && r[1] === 'visible') + ' ms; band stops at ' + first(r => r[1] === 'visible' && r[3] === 'still') + ' ms; record block complete at ' + first(r => r[1] === 'visible' && r[5] === 'block') + ' ms; frames showing the finished sheet before the opening ran: ' + fin + '; first sampled frame is ' + Math.round(t0 - (log[0][6] || t0)) + ' ms after the frame the page itself stamped');
    await p.close();
  }
  await b.close();
})();
