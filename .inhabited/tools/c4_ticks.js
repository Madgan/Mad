// cycle 4: the PDF receipt on a clock from the landing frame, at several wheel speeds, then scroll back up past the drop and down again.
// usage: node c4_ticks.js <name> <w> <h> <zh|en> <px per second>
const { chromium } = require('playwright');
const [name, W, Hh, lang, SPEED] = process.argv.slice(2);
const w = +W, h = +Hh, speed = +SPEED;
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0' + (lang === 'en' ? '&lang=en' : ''));
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(600);
  const start = await p.evaluate(() => { const r = document.querySelector('#story').getBoundingClientRect(); return Math.max(0, Math.round(r.top + scrollY - innerHeight * 0.75)); });
  await p.evaluate(y => scrollTo(0, y), start);
  await p.mouse.move(w / 2, h / 2);
  await p.waitForTimeout(500);
  await p.evaluate(() => {
    window.__log = []; const t0 = performance.now();
    const doc = document.querySelector('.doc-bubble'), leaf = document.querySelector('#story .leaf'), bar = document.querySelector('.doc-bubble .file-bar'), st = document.querySelector('.doc-bubble .st');
    const step = () => {
      const m = new DOMMatrix(getComputedStyle(leaf).transform), br = bar.getBoundingClientRect();
      const ticks = doc.querySelector('.ticks'); const tcol = ticks ? getComputedStyle(ticks).color : '';
      const word = [...st.querySelectorAll('*')].filter(e => e.offsetParent && e.children.length === 0 && getComputedStyle(e).visibility !== 'hidden' && e.textContent.trim()).map(e => e.textContent.trim()).join(' ');
      window.__log.push({ t: Math.round(performance.now() - t0), y: Math.round(scrollY), st: doc.dataset.state, ty: +(m.m42).toFixed(1), barTop: Math.round(br.top), barBot: Math.round(br.bottom), word, tcol, anims: document.getAnimations().filter(a => a.effect && a.effect.target === leaf && a.playState === 'running').length });
      requestAnimationFrame(step);
    }; requestAnimationFrame(step);
  });
  const wheel = async (dist, sp) => { const stepPx = Math.max(6, Math.round(Math.abs(sp) / 60)) * Math.sign(dist); const t0 = Date.now(); let d = 0; while (Math.abs(d) < Math.abs(dist)) { await p.mouse.wheel(0, stepPx); d += stepPx; const due = t0 + Math.abs(d) / Math.abs(sp) * 1000; const wt = due - Date.now(); if (wt > 0) await p.waitForTimeout(wt); } };
  await wheel(1400, speed);
  await p.waitForTimeout(900);
  const mark = await p.evaluate(() => window.__log.length);
  await wheel(-1400, speed); // back up past the drop
  await p.waitForTimeout(500);
  const mark2 = await p.evaluate(() => window.__log.length);
  await wheel(1400, speed); // down again
  await p.waitForTimeout(900);
  const log = await p.evaluate(() => window.__log);
  const summarise = (L, label) => {
    let prev = null; const ch = [];
    for (const l of L) { const k = l.st + '|' + l.word; if (k !== prev) { ch.push(l); prev = k; } }
    // landing frame: first frame after a running drop animation where anims==0 and st==sent
    const land = L.find(l => l.st === 'sent');
    console.log('  [' + label + ']');
    for (const c of ch) console.log('    t', c.t, (land ? '(landing+' + (c.t - land.t) + ')' : ''), 'scrollY', c.y, 'state', c.st, '| word "' + c.word + '"', '| ticks colour', c.tcol, '| file bar top/bottom', c.barTop, c.barBot, (c.barTop >= 0 && c.barBot <= h ? 'ON SCREEN' : 'OFF'));
  };
  console.log(name, w + 'x' + h, lang, 'speed', speed, 'px/s; start scroll', start);
  summarise(log.slice(0, mark), 'down');
  summarise(log.slice(mark, mark2), 'back up');
  summarise(log.slice(mark2), 'down again');
  await ctx.close(); await b.close();
})();
