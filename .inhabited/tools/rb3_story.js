// Rebuild 3: tear, drop and the receipt clock in #story while wheel-scrolling at a given speed. Per-frame log in the page
// (state, time since the leaf landed), a video, and frames cut from it at landing, +260 and +520 ms. Then scroll back up.
// usage: node rb3_story.js <name> <w> <h> <zh|en> <px per second> [frames: 1 to save a sheet]
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const [name, W, Hh, lang, SPEED, FR] = process.argv.slice(2);
const w = +W, h = +Hh, speed = +SPEED;
const S = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/', dir = S + 'rb3vid_' + name, O = '/home/user/Mad/.inhabited/v1_critic/screens/';
(async () => {
  fs.rmSync(dir, { recursive: true, force: true });
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, recordVideo: FR ? { dir, size: { width: w, height: h } } : undefined });
  const p = await ctx.newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  const tOpen = Date.now();
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
      const m = new DOMMatrix(getComputedStyle(leaf).transform), br = bar.getBoundingClientRect();
      window.__log.push({ t: performance.now() - t0, wall: Date.now(), y: Math.round(scrollY), st: doc.dataset.state, ty: Math.round(m.m42 * 10) / 10, tx: Math.round(m.m41), front: stub.classList.contains('is-front'), barTop: Math.round(br.top), barIn: br.top >= 52 && br.bottom <= innerHeight });
      requestAnimationFrame(step);
    }; requestAnimationFrame(step);
  });
  const dist = Math.max(900, Math.round(speed * 0.9)), stepPx = Math.max(8, Math.round(speed / 60));
  const tStart = Date.now();
  for (let d = 0; d < dist; d += stepPx) { await p.mouse.wheel(0, stepPx); const due = tStart + (d + stepPx) / speed * 1000; const wait = due - Date.now(); if (wait > 0) await p.waitForTimeout(wait); }
  await p.waitForTimeout(1100);
  const log = await p.evaluate(() => window.__log);
  let prev = null; const ch = [];
  for (const l of log) { if (l.st !== prev) { ch.push(l); prev = l.st; } }
  const land = ch.find(c => c.st === 'sent');
  console.log(name, w + 'x' + h, lang, 'speed', speed, 'px/s');
  for (let i = 0; i < ch.length; i++) { const c = ch[i], n = ch[i + 1]; console.log('  state', c.st.padEnd(10), 'at', land ? Math.round(c.t - land.t) : '?', 'ms after landing | scrollY', c.y, '| file bar top', c.barTop, 'wholly on screen', c.barIn, n ? '| held ' + Math.round(n.t - c.t) + ' ms' : '| (to end)'); }
  const tys = [...new Set(log.map(l => l.ty))]; const i0 = log.findIndex(l => l.ty !== log[0].ty), iL = land ? log.indexOf(land) : -1;
  console.log('  leaf translateY first', log[0].ty, 'last', log[log.length - 1].ty, '| drop: first moved frame to the landing frame', i0 >= 0 && iL >= 0 ? Math.round(log[iL].t - log[i0].t) + ' ms, ' + (iL - i0) + ' frames; landing frame ty ' + log[iL].ty + ', frame before ' + log[iL - 1].ty : 'n/a');
  // back up above the drop: everything undone?
  const back = Math.round(dist * 0.75);
  for (let d = 0; d < back; d += 40) { await p.mouse.wheel(0, -40); await p.waitForTimeout(16); }
  await p.waitForTimeout(700);
  const after = await p.evaluate(() => ({ st: document.querySelector('.doc-bubble').dataset.state, y: Math.round(scrollY), front: document.querySelector('#story .stub').classList.contains('is-front') }));
  console.log('  after scrolling back up to', after.y, ': state', after.st, '| stub face front', after.front);
  if (FR) await p.screenshot({ path: S + 'rb3story_' + name + '_back.png' });
  // and down again: the clock runs again
  for (let d = 0; d < back; d += 40) { await p.mouse.wheel(0, 40); await p.waitForTimeout(16); }
  await p.waitForTimeout(900);
  const again = await p.evaluate(() => document.querySelector('.doc-bubble').dataset.state);
  console.log('  down again: state', again, '| errors', JSON.stringify(errs));
  const vid = FR ? await p.video().path() : null;
  await ctx.close(); await b.close();
  if (FR && land) {
    // video time of landing: wall clock of landing minus the wall clock at which recording began (context creation ~ page open)
    const base = (land.wall - tOpen) / 1000;
    const offs = [-0.12, -0.04, 0.04, 0.16, 0.30, 0.42, 0.56, 0.70]; const files = [];
    for (const o of offs) { const f = S + 'rb3story_' + name + '_' + (o < 0 ? 'm' : 'p') + Math.round(Math.abs(o) * 1000) + '.png'; execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', String(Math.max(0, base + o)), '-i', vid, '-frames:v', '1', f]); files.push(f + '::landing ' + (o < 0 ? '' : '+') + Math.round(o * 1000) + ' ms (video)'); }
    const per = w > 600 ? 2 : 4;
    for (let k = 0; k < files.length; k += per) {
      const out = O + 'rebuild3_ticks_' + name + '_' + String.fromCharCode(97 + k / per) + '.png';
      if (w > 600) execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_vstack.py', out, ...files.slice(k, k + per).map(f => f.split('::')[0])]);
      else execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_paste.py', out, ...files.slice(k, k + per)]);
    }
    execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_paste.py', O + 'rebuild3_ticks_' + name + '_back.png', S + 'rb3story_' + name + '_back.png::scrolled back above the drop']);
  }
})();
