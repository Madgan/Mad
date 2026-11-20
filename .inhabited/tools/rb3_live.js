// Rebuild 3 (rb2_live.js, output renamed): lossless screenshots taken while the opening runs on the wall clock (not seeked), with what is visible in the band at that moment.
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const O = '/home/user/Mad/.inhabited/v1_critic/screens/';
const SCR = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/';
(async () => {
  const b = await chromium.launch(); const files = [];
  for (const delay of [330, 420, 520, 900]) {
    const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
    await p.goto(URL, { waitUntil: 'commit' });
    await p.waitForFunction(() => window.SIS_T0 > 0);
    await p.waitForTimeout(delay);
    const info = await p.evaluate(() => { const band = document.querySelector('.thread-band'), br = band.getBoundingClientRect(); const vis = [...document.querySelectorAll('.strip .bubble')].filter(e => { const r = e.getBoundingClientRect(); return r.bottom > br.top && r.top < br.bottom && getComputedStyle(e).visibility === 'visible'; }).length; const sm = [...document.querySelectorAll('.strip .smear')].filter(e => { const r = e.getBoundingClientRect(); return r.bottom > br.top && r.top < br.bottom && getComputedStyle(e).visibility === 'visible'; }).length; const txt = [...document.querySelectorAll('.strip .bubble p, .strip .bubble .fw, .strip .bubble .wave')].filter(e => { const r = e.getBoundingClientRect(); return r.bottom > br.top && r.top < br.bottom && getComputedStyle(e).visibility === 'visible'; }).length; return { ms: Math.round(performance.now() - window.SIS_T0), running: band.classList.contains('running'), bubblesDrawn: vis, smearsDrawn: sm, textRunsDrawn: txt, hang: [...document.querySelectorAll('.hang')].filter(e => getComputedStyle(e).visibility === 'visible').map(e => e.innerText.trim()) }; });
    const f = SCR + 'live_' + delay + '.png'; await p.screenshot({ path: f, clip: { x: 0, y: 150, width: 390, height: 490 } });
    const done = await p.evaluate(() => Math.round(performance.now() - window.SIS_T0));
    console.log('asked', delay, JSON.stringify(info), 'capture finished at', done); files.push(f + '::wall clock, captured between ' + info.ms + ' and ' + done + ' ms after first paint');
    await p.close();
  }
  await b.close();
  execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_paste.py', O + 'rebuild3_live_390zh.png', ...files]);
})();
