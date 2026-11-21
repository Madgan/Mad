// cycle 3: tear, drop and ticks in #story while wheel-scrolling at realistic speeds; per-frame log in the page + video
// usage: node c3_story.js <name> <w> <h> <zh|en> <px per second>
const { chromium } = require('playwright');
const fs = require('fs');
const [name, W, Hh, lang, SPEED] = process.argv.slice(2);
const w = +W, h = +Hh, speed = +SPEED;
const dir = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/c3vid_' + name;
(async () => {
  fs.rmSync(dir, { recursive: true, force: true });
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, recordVideo: { dir, size: { width: w, height: h } } });
  const p = await ctx.newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0' + (lang === 'en' ? '&lang=en' : ''));
  await p.waitForTimeout(800);
  const start = await p.evaluate(() => { const r = document.querySelector('#story').getBoundingClientRect(); return Math.max(0, Math.round(r.top + scrollY - innerHeight * 0.75)); });
  await p.evaluate(y => scrollTo(0, y), start);
  await p.mouse.move(w / 2, h / 2);
  await p.waitForTimeout(500);
  await p.evaluate(() => {
    window.__log = []; const t0 = performance.now();
    const doc = document.querySelector('.doc-bubble'), leaf = document.querySelector('#story .leaf'), stub = document.querySelector('#story .stub'), bar = document.querySelector('.doc-bubble .file-bar');
    const step = () => {
      const m = new DOMMatrix(getComputedStyle(leaf).transform), br = bar.getBoundingClientRect(), lr = leaf.getBoundingClientRect();
      window.__log.push({ t: Math.round(performance.now() - t0), y: Math.round(scrollY), st: doc.dataset.state, tx: Math.round(m.m41), ty: Math.round(m.m42), leafTop: Math.round(lr.top), front: stub.classList.contains('is-front'), barTop: Math.round(br.top), barIn: br.top > 52 && br.bottom < innerHeight });
      requestAnimationFrame(step);
    }; requestAnimationFrame(step);
  });
  const dist = 1500, stepPx = Math.max(8, Math.round(speed / 60));
  const tStart = Date.now();
  for (let d = 0; d < dist; d += stepPx) { await p.mouse.wheel(0, stepPx); const due = tStart + (d + stepPx) / speed * 1000; const wait = due - Date.now(); if (wait > 0) await p.waitForTimeout(wait); }
  await p.waitForTimeout(700);
  const log = await p.evaluate(() => window.__log);
  // summarise state changes
  let prev = null; const ch = [];
  for (const l of log) { const k = l.st + '|' + l.front; if (k !== prev) { ch.push(l); prev = k; } }
  console.log(name, 'speed', speed, 'px/s, start scroll', start, 'real duration', Date.now() - tStart, 'ms');
  for (let i = 0; i < ch.length; i++) { const c = ch[i], n = ch[i + 1]; console.log('  t', c.t, 'scrollY', c.y, 'state', c.st, 'stubFront', c.front, 'fileBarTop', c.barTop, 'barInView', c.barIn, n ? 'held ' + (n.t - c.t) + ' ms / ' + (n.y - c.y) + ' px' : '(to end)'); }
  // tear and drop travel
  const txMax = Math.max(...log.map(l => l.tx)), tys = [...new Set(log.map(l => l.ty))];
  const dropStart = log.findIndex(l => l.ty !== log[0].ty), settled = log.findIndex((l, i) => i > dropStart && log.slice(i, i + 6).every(x => x.ty === l.ty));
  console.log('  leaf translateX range', Math.min(...log.map(l => l.tx)), 'to', txMax, '| translateY values', tys.slice(0, 14).join(','), '| drop from t', log[dropStart] && log[dropStart].t, 'to t', log[settled] && log[settled].t, 'frames in flight', settled - dropStart);
  console.log('  tear samples (scrollY:tx)', log.filter((l, i) => i % 6 === 0 && l.tx > 0 && l.tx < txMax).map(l => l.y + ':' + l.tx).join(' '));
  await ctx.close(); await b.close();
})();
