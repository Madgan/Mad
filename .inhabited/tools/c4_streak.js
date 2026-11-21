// cycle 4: lossless frames of the hero stage on the page clock (SIS.seek), pasted side by side with the time printed.
// usage: node c4_streak.js <name> <w> <h> <query> <t1,t2,...>
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const [name, W, H, q, ts] = process.argv.slice(2);
const dir = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/streak_' + name;
(async () => {
  fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: +W, height: +H }, deviceScaleFactor: 1 })).newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0' + (q && q !== '-' ? '&' + q : ''));
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
  const r = await p.evaluate(() => { const s = document.querySelector('.hero-stage').getBoundingClientRect(); return { x: Math.max(0, Math.round(s.left)), y: Math.round(s.top), width: Math.round(Math.min(s.width, innerWidth)), height: Math.round(s.height) }; });
  const list = ts.split(',').map(Number);
  for (const t of list) {
    await p.evaluate(tt => window.SIS.seek(tt), t);
    const info = await p.evaluate(() => ({ smears: [...document.querySelectorAll('.smear')].filter(e => e.getClientRects().length && getComputedStyle(e).visibility === 'visible').length, hang: [...document.querySelectorAll('.hang')].filter(e => getComputedStyle(e).visibility === 'visible').map(e => e.textContent.trim().slice(0, 30)), sheet: getComputedStyle(document.getElementById('sheet')).visibility }));
    console.log(name, 't', t, JSON.stringify(info));
    await p.screenshot({ path: dir + '/t_' + String(t).padStart(4, '0') + '.png', clip: r });
  }
  await b.close();
  execFileSync('python3', ['/home/user/Mad/.inhabited/tools/c4_strip.py', dir, '/home/user/Mad/.inhabited/v1_critic/screens/c4_streak_' + name], { stdio: 'inherit' });
})();
