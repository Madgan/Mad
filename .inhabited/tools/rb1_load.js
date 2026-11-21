// real-time load: wall-clock frames from navigation. node rb1_load.js <lang> <prefix> [slowfonts] [w] [h]
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const O = '/home/user/Mad/.inhabited/v1_critic/screens/';
const lang = process.argv[2] || 'zh', prefix = process.argv[3] || 'rebuild1_rt', slow = process.argv[4] === 'slowfonts', w = +(process.argv[5] || 390), h = +(process.argv[6] || 844);
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  if (slow) await p.route(/fonts\.(googleapis|gstatic)\.com/, async r => { await new Promise(s => setTimeout(s, 1200)); r.continue(); });
  if (lang === 'en') await p.addInitScript(() => { document.addEventListener('DOMContentLoaded', () => { document.documentElement.setAttribute('data-lang', 'en'); }); });
  const t0 = Date.now();
  await p.goto(URL, { waitUntil: 'commit' });
  const log = [];
  for (let i = 0; i < 46; i++) {
    const st = await p.evaluate(() => { const s = document.querySelector('.hero-stage'); if (!s) return 'no stage'; const sh = document.querySelector('#sheet'); return [document.documentElement.className, s.dataset.state, getComputedStyle(sh).visibility, document.querySelector('.stage-caption').innerText.trim(), document.querySelector('#sheet .fig').textContent, document.querySelector('.thread-band').className].join(' | '); }).catch(() => 'n/a');
    const tb = Date.now() - t0;
    await p.screenshot({ path: `${O}${prefix}_${String(i).padStart(2, '0')}.png`, clip: { x: 0, y: 0, width: w, height: Math.min(h, 640) } });
    log.push(`${i} read@${tb} shot@${Date.now() - t0} : ${st}`);
    if (Date.now() - t0 > 3600) break;
  }
  console.log(log.join('\n')); console.log('errors', JSON.stringify(errs));
  await b.close();
})();
