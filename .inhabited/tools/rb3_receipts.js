// Rebuild 3: the four other receipts. Wheel down the page at a given speed; per-frame log of each message's state and of
// whether its receipt line is wholly on screen. Reports ms between the first such frame and the cut to read.
// usage: node rb3_receipts.js <w> <h> <px per second> [rm]
const { chromium } = require('playwright');
const w = +process.argv[2], h = +process.argv[3], speed = +process.argv[4], rm = process.argv[5] === 'rm';
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, reducedMotion: rm ? 'reduce' : 'no-preference' })).newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.waitForTimeout(900);
  const init = await p.evaluate(() => [...document.querySelectorAll('.msg.attach[data-state]')].map(m => (m.id || m.dataset.beat) + ':' + m.dataset.state + ':' + m.querySelector('.st').innerText.replace(/\s+/g, ' ').trim()));
  console.log(w + 'x' + h, speed, 'px/s', rm ? 'reduced motion' : '', '| at load:', init.join(' | '));
  await p.mouse.move(w / 2, h / 2);
  await p.evaluate(() => {
    window.__log = []; const ms = [...document.querySelectorAll('.msg.attach[data-state]')]; const t0 = performance.now();
    const step = () => { window.__log.push({ t: performance.now() - t0, y: Math.round(scrollY), s: ms.map(m => { const r = m.querySelector('.st').getBoundingClientRect(); return [m.dataset.state, r.top >= 52 && r.bottom <= innerHeight, Math.round(r.top), m.querySelector('.st').innerText.replace(/\s+/g, ' ').trim(), getComputedStyle(m.querySelector('.ticks')).stroke, getComputedStyle(m.querySelector('.ticks .t2')).visibility]; }) }); requestAnimationFrame(step); };
    requestAnimationFrame(step);
  });
  const total = await p.evaluate(() => document.documentElement.scrollHeight - innerHeight), stepPx = Math.max(8, Math.round(speed / 60)), t0 = Date.now();
  for (let d = 0; d < total; d += stepPx) { await p.mouse.wheel(0, stepPx); const wait = t0 + (d + stepPx) / speed * 1000 - Date.now(); if (wait > 0) await p.waitForTimeout(wait); }
  await p.waitForTimeout(700);
  const log = await p.evaluate(() => window.__log); const names = ['report', 'import', 'pro', 'plans'];
  names.forEach((n, i) => {
    const fIn = log.find(l => l.s[i][1]), fRead = log.find(l => l.s[i][0] === 'read'), before = fRead && log[log.indexOf(fRead) - 1];
    console.log('  ' + n.padEnd(7), '| first frame wholly on screen t', fIn ? Math.round(fIn.t) : '-', '(receipt top ' + (fIn ? fIn.s[i][2] : '-') + ') showing "' + (fIn ? fIn.s[i][3] : '') + '" stroke ' + (fIn ? fIn.s[i][4] : '') + ' 2nd tick ' + (fIn ? fIn.s[i][5] : ''), '| cut to read', fIn && fRead ? Math.round(fRead.t - fIn.t) + ' ms later' : '-', '(receipt top ' + (fRead ? fRead.s[i][2] : '-') + ', on screen ' + (fRead ? fRead.s[i][1] : '-') + ') showing "' + (fRead ? fRead.s[i][3] : '') + '" stroke ' + (fRead ? fRead.s[i][4] : '') + ' 2nd tick ' + (fRead ? fRead.s[i][5] : ''), '| frame before the cut: ' + (before ? before.s[i][0] : '-'));
  });
  console.log('  errors', JSON.stringify(errs));
  await b.close();
})();
