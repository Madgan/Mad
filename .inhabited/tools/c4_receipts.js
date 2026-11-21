// cycle 4: the four other receipts (report, old files, token, plans): per-frame state log while wheeling, and a before/after frame of each
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const dir = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/rcpt';
(async () => {
  fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
  const b = await chromium.launch();
  for (const speed of [600, 1500]) {
    const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
    await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(600);
    await p.evaluate(() => scrollTo(0, 1500)); await p.waitForTimeout(400);
    await p.evaluate(() => { window.__r = []; const t0 = performance.now(); const ms = [...document.querySelectorAll('.msg.attach[data-state]')];
      const st = () => { ms.forEach((m, i) => { const s = m.querySelector('.st').getBoundingClientRect(); const k = m.dataset.state; const prev = window.__r.filter(x => x.i === i).pop(); const vis = s.top >= 52 && s.bottom <= innerHeight; if (!prev || prev.k !== k || prev.vis !== vis) window.__r.push({ i, t: Math.round(performance.now() - t0), k, vis, top: Math.round(s.top) }); }); requestAnimationFrame(st); }; requestAnimationFrame(st); });
    await p.mouse.move(195, 400);
    const stepPx = Math.round(speed / 60); const t0 = Date.now(); let d = 0;
    while (d < 3800) { await p.mouse.wheel(0, stepPx); d += stepPx; const wt = t0 + d / speed * 1000 - Date.now(); if (wt > 0) await p.waitForTimeout(wt); }
    await p.waitForTimeout(600);
    const r = await p.evaluate(() => window.__r);
    console.log('speed', speed); for (const x of r) console.log('   receipt', x.i, 't', x.t, 'state', x.k, 'line wholly on screen', x.vis, 'top', x.top);
    await p.close();
  }
  // frames: for each receipt, bring it on screen from below by one wheel move, shoot at once and after 450 ms
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(600);
  await p.mouse.move(195, 400);
  for (let i = 0; i < 4; i++) {
    const y = await p.evaluate(k => { const s = document.querySelectorAll('.msg.attach[data-state]')[k].querySelector('.st'); return Math.round(s.getBoundingClientRect().bottom + scrollY - innerHeight + 60); }, i);
    await p.evaluate(t => scrollTo(0, t - 140), y); await p.waitForTimeout(300);
    await p.mouse.wheel(0, 140); await p.waitForTimeout(40);
    await p.screenshot({ path: `${dir}/r${i}_a_now.png` });
    await p.waitForTimeout(450);
    await p.screenshot({ path: `${dir}/r${i}_b_450ms.png` });
  }
  await b.close();
  execFileSync('python3', ['/home/user/Mad/.inhabited/tools/c4_strip.py', dir, '/home/user/Mad/.inhabited/v1_critic/screens/c4_receipts_390zh'], { stdio: 'inherit' });
})();
