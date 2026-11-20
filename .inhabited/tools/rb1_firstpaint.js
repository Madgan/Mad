// First paint, timed. The web fonts are refused here so that a screenshot never waits for them:
// the page paints at once in its fallback faces, which is the worst case for a flash of the wrong frame.
// An in-page sampler also logs, on every animation frame from the first one, whether the sheet is visible.
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const O = '/home/user/Mad/.inhabited/v1_critic/screens/';
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
  await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  await p.addInitScript(() => {
    window.__log = [];
    const t0 = performance.now();
    function tick() {
      const s = document.querySelector('#sheet'), c = document.querySelector('.stage-caption'), f = document.querySelector('#sheet .fig'), bd = document.querySelector('.thread-band');
      if (s) window.__log.push([Math.round(performance.now() - t0), getComputedStyle(s).visibility, document.documentElement.className.replace('cuts', '').trim(), bd.className.indexOf('running') >= 0 ? 'run' : 'still', f.textContent, (c.innerText || '').trim().replace(/\s+/g, ' ').slice(0, 24)]);
      if (performance.now() - t0 < 3600) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
  const t0 = Date.now();
  await p.goto(URL, { waitUntil: 'commit' });
  for (const wt of [0, 50, 150, 400, 800, 1200]) {
    const wait = wt - (Date.now() - t0); if (wait > 0) await p.waitForTimeout(wait);
    const at = Date.now() - t0;
    for (let k = 0; k < 20; k++) { try { await p.screenshot({ path: O + 'rebuild1_firstpaint_' + String(wt).padStart(4, '0') + '.png', clip: { x: 0, y: 0, width: 390, height: 640 } }); break; } catch (e) { await p.waitForTimeout(10); } }
    console.log('target', wt, 'ms: shot started', at, 'done', Date.now() - t0);
  }
  await p.waitForTimeout(3000);
  const log = await p.evaluate(() => window.__log);
  let last = '';
  for (const r of log) { const k = r.slice(1).join(' | '); if (k !== last) { console.log(r[0] + ' ms : ' + k); last = k; } }
  console.log('frames sampled', log.length, '; frames with the sheet visible before the run started:', log.filter(r => r[1] === 'visible' && r[3] === 'still' && r[0] < 600 && r[4] === '2,700.00').length);
  await b.close();
})();
