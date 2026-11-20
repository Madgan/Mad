// Rebuild 2: real-time recording of load + opening (Playwright video, 25 frames a second), with an in-page log on every animation frame.
// usage: node rb2_video.js <tag> <lang> <w> <h> [reduce] [slowfonts|nofonts]
const { chromium } = require('playwright');
const fs = require('fs');
const [tag, lang, W, Hh, reduce, slow] = process.argv.slice(2);
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html' + (lang === 'en' ? '?lang=en' : '');
(async () => {
  const b = await chromium.launch();
  const dir = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/rb2vid_' + tag;
  fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
  const ctx = await b.newContext({ viewport: { width: +W, height: +Hh }, deviceScaleFactor: 1, reducedMotion: reduce === 'reduce' ? 'reduce' : 'no-preference', recordVideo: { dir, size: { width: +W, height: +Hh } } });
  const p = await ctx.newPage();
  if (slow === 'slowfonts') await p.route(/fonts\.(googleapis|gstatic)\.com/, async r => { await new Promise(z => setTimeout(z, 1200)); r.continue(); });
  if (slow === 'nofonts') await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  await p.addInitScript(() => {
    window.__log = [];
    function tick() { const sh = document.getElementById('sheet'), bd = document.querySelector('.thread-band'); if (sh) { const cs = getComputedStyle(sh); window.__log.push([Math.round(performance.now()), cs.visibility, document.documentElement.className.replace('cuts', '').trim(), bd.className.indexOf('running') >= 0 ? 'run' : 'still', (document.querySelector('#sheet .fig') || {}).textContent || '', (document.querySelector('#sheet .name') || {}).textContent ? getComputedStyle(document.querySelector('#sheet .bill-to .slot-empty')).visibility : '', getComputedStyle(document.querySelector('#sheet .record-block')).clipPath]); } requestAnimationFrame(tick); }
    requestAnimationFrame(tick);
  });
  await p.goto(URL);
  await p.waitForTimeout(4600);
  const log = await p.evaluate(() => window.__log);
  let last = '';
  console.log('frames sampled', log.length, 'first frame at', log[0] && log[0][0], 'ms after navigation start');
  for (const l of log) { const k = l.slice(1).join('|'); if (k !== last) { console.log((l[0] - log[0][0]) + ' ms after first frame: ' + k); last = k; } }
  await ctx.close(); await b.close();
  const f = fs.readdirSync(dir).filter(x => x.endsWith('.webm'))[0];
  fs.renameSync(dir + '/' + f, dir + '/v.webm');
  console.log('video', dir + '/v.webm');
})();
