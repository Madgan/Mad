// Critic cycle 2: real-time recording of load + opening sequence. usage: node c2_video.js <tag> <lang> <w> <h> [reduce] [slowfonts]
const { chromium } = require('playwright');
const fs = require('fs');
const [tag, lang, W, Hh, reduce, slow] = process.argv.slice(2);
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
(async () => {
  const b = await chromium.launch();
  const dir = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/vid_' + tag;
  fs.mkdirSync(dir, { recursive: true });
  const ctx = await b.newContext({ viewport: { width: +W, height: +Hh }, deviceScaleFactor: 1, reducedMotion: reduce === 'reduce' ? 'reduce' : 'no-preference', recordVideo: { dir, size: { width: +W, height: +Hh } } });
  if (lang === 'en') await ctx.addInitScript(() => { try { localStorage.setItem('sis-lang', 'en'); } catch (e) { } });
  const p = await ctx.newPage();
  if (slow === 'slowfonts') await p.route(/fonts\.(googleapis|gstatic)\.com/, async r => { await new Promise(z => setTimeout(z, 1200)); r.continue(); });
  await p.addInitScript(() => {
    window.__log = []; const t0 = performance.now();
    function tick() { const sh = document.getElementById('sheet'); if (sh) { const cs = getComputedStyle(sh); const r = sh.getBoundingClientRect(); const cr = document.querySelector('#sheet .crossing'); window.__log.push([Math.round(performance.now()), cs.visibility, Math.round(r.top), Math.round(r.height), document.documentElement.className, (document.querySelector('#sheet .total') || {}).textContent || '', cr ? getComputedStyle(cr).visibility : '']); } requestAnimationFrame(tick); }
    requestAnimationFrame(tick);
  });
  const t0 = Date.now();
  await p.goto(URL);
  await p.waitForTimeout(5200);
  const log = await p.evaluate(() => window.__log);
  // compress log into runs
  let runs = [], last = '';
  for (const l of log) { const k = l.slice(1).join('|'); if (k !== last) { runs.push(l); last = k; } }
  console.log('frames sampled', log.length, 'first at', log[0] && log[0][0]);
  for (const r of runs.slice(0, 60)) console.log(JSON.stringify(r));
  await ctx.close(); await b.close();
  const f = fs.readdirSync(dir).filter(x => x.endsWith('.webm'))[0];
  console.log('video', dir + '/' + f);
})();
