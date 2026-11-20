// Rebuild 3: pictures of the receipt clock. The page is scrolled from inside (scrollBy on every frame, a set speed), and
// viewport screenshots are taken as fast as they come. Before and after each one the page is asked for the receipt's
// state and the time since the frame the leaf landed; a shot is kept as evidence of a state only if both answers agree.
// Then the page is scrolled back above the drop and shot again.  node rb3_ticks.js <name> <w> <h> <zh|en> <px per second>
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const [name, W, Hh, lang, SPEED] = process.argv.slice(2);
const w = +W, h = +Hh, speed = +SPEED;
const S = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/', O = '/home/user/Mad/.inhabited/v1_critic/screens/';
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0' + (lang === 'en' ? '&lang=en' : '')); await p.waitForTimeout(900);
  const start = await p.evaluate(() => { const r = document.querySelector('#story-stage').getBoundingClientRect(); return Math.max(0, Math.round(r.top + scrollY - innerHeight * 0.55)); });
  await p.evaluate(y => scrollTo(0, y), start); await p.waitForTimeout(500);
  await p.evaluate((speed) => {
    const doc = document.querySelector('.doc-bubble'), leaf = document.querySelector('#story .leaf'); window.__land = 0; window.__fly = 0; let last = performance.now(), ty0 = null;
    window.__q = () => ({ now: performance.now(), st: doc.dataset.state, land: window.__land, fly: window.__fly });
    const step = (now) => {
      const ty = new DOMMatrix(getComputedStyle(leaf).transform).m42; if (ty0 === null) ty0 = ty; if (!window.__fly && Math.abs(ty - ty0) > 1) window.__fly = now;
      if (!window.__land && doc.dataset.state === 'sent') window.__land = now;
      if (!window.__stop) scrollBy(0, speed * (now - last) / 1000); last = now;
      if (window.__land && now - window.__land > 900) window.__stop = true;
      requestAnimationFrame(step);
    }; requestAnimationFrame(step);
  }, speed);
  const shots = [];
  for (let i = 0; i < 90; i++) {
    const a = await p.evaluate(() => window.__q()); const f = S + 'rb3tick_' + name + '_' + String(i).padStart(2, '0') + '.png'; await p.screenshot({ path: f }); const z = await p.evaluate(() => window.__q());
    shots.push({ f, a, z }); if (z.land && z.now - z.land > 800) break;
  }
  const rel = s => s.z.land ? [Math.round(s.a.now - s.z.land), Math.round(s.z.now - s.z.land)] : null;
  const pick = (st) => shots.find(s => s.a.st === st && s.z.st === st && s.a.land);
  const flying = shots.filter(s => s.a.fly && !s.a.land && !s.z.land).pop() || shots.filter(s => !s.z.land).pop();
  const keep = [[flying, 'in flight, before landing'], [pick('sent'), 'sent'], [pick('delivered'), 'delivered'], [pick('read'), 'read']].filter(k => k[0]);
  console.log(name, w + 'x' + h, lang, speed, 'px/s | shots', shots.length, '| kept:', keep.map(k => k[1] + ' ' + (rel(k[0]) ? rel(k[0]).join('..') + ' ms after landing' : '')).join(' ; '));
  // back above the drop
  await p.evaluate(() => { window.__stop = true; }); await p.evaluate(y => scrollTo(0, y), start); await p.waitForTimeout(600);
  const fb = S + 'rb3tick_' + name + '_back.png'; await p.screenshot({ path: fb }); const stb = await p.evaluate(() => document.querySelector('.doc-bubble').dataset.state);
  console.log('  scrolled back above the drop: state', stb, '| errors', JSON.stringify(errs));
  await b.close();
  const items = keep.map(k => k[0].f + '::' + k[1] + (rel(k[0]) ? ' (' + rel(k[0]).join(' to ') + ' ms after landing)' : '')).concat([fb + '::scrolled back above the drop: ' + stb]);
  if (w > 600) { for (let k = 0; k < items.length; k += 2) execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_vstack.py', O + 'rebuild3_ticks_' + name + '_' + String.fromCharCode(97 + k / 2) + '.png', ...items.slice(k, k + 2).map(f => f.split('::')[0])]); console.log('  order of frames:', items.map(i => i.split('::')[1]).join(' | ')); }
  else { execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_paste.py', O + 'rebuild3_ticks_' + name + '_a.png', ...items.slice(0, 4)]); execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_paste.py', O + 'rebuild3_ticks_' + name + '_b.png', ...items.slice(4)]); }
})();
