// Rebuild 2: each section below the hero at three scroll positions. node rb2_sections.js <w> <h> <lang> <prefix> [reduced|nojs]
// Positions per section: its start (chip or first message near the top), its middle, its end. The last section's end is the foot of the page.
// On a phone four frames go side by side per sheet; at 1280 two frames are stacked per sheet (1280 x 1600, no scaling).
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const O = '/home/user/Mad/.inhabited/v1_critic/screens/';
const SCR = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/';
const w = +process.argv[2], h = +process.argv[3], lang = process.argv[4], prefix = process.argv[5], mode = process.argv[6] || '';
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, reducedMotion: mode === 'reduced' ? 'reduce' : 'no-preference', javaScriptEnabled: mode !== 'nojs' });
  const p = await ctx.newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  const q = []; if (mode === '') q.push('autoplay=0'); if (lang === 'en') q.push('lang=en');
  await p.goto(URL + (q.length ? '?' + q.join('&') : '')); if (mode !== 'nojs') await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
  let secs;
  if (mode === 'nojs') {
    // without script nothing can be measured from the page: positions are taken from the scripted page of the same width (same layout, same heights)
    const c2 = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 }); const p2 = await c2.newPage();
    await p2.goto(URL + '?autoplay=0'); await p2.evaluate(() => document.fonts.ready); await p2.waitForTimeout(300);
    secs = await p2.evaluate(() => ['story', 'reports', 'import', 'pro', 'pricing'].map(id => { const r = document.getElementById(id).getBoundingClientRect(); return { id, top: r.top + scrollY, h: r.height }; }).concat([{ id: 'doc', top: 0, h: document.documentElement.scrollHeight }]));
    await c2.close();
  } else secs = await p.evaluate(() => ['story', 'reports', 'import', 'pro', 'pricing'].map(id => { const r = document.getElementById(id).getBoundingClientRect(); return { id, top: r.top + scrollY, h: r.height }; }).concat([{ id: 'doc', top: 0, h: document.documentElement.scrollHeight }]));
  const docH = secs.pop().h; const files = []; let cur = 0;
  const frames = [{ id: 'hero', k: 0, y: 0 }];
  for (const s of secs) {
    // a section taller than the screen: its start, middle and end. A shorter one: coming in (its top at 60% of the screen), in place, going out (its foot at mid-screen)
    const end = s.id === 'pricing' ? docH - h : s.top + s.h - h + 30;
    const ys = s.h > h + 90 ? [Math.round(s.top - 60), Math.round((s.top - 60 + end) / 2), Math.round(end)] : [Math.round(s.top - h * .6), Math.round(s.top - 60), Math.round(s.id === 'pricing' ? docH - h : s.top + s.h - h * .5)];
    ys.forEach((y, k) => frames.push({ id: s.id, k, y: Math.min(y, docH - h) }));
  }
  for (const f of frames) {
    if (mode === 'nojs') { await p.mouse.wheel(0, f.y - cur); cur = f.y; } else await p.evaluate(yy => scrollTo(0, yy), f.y);
    await p.waitForTimeout(500);
    const fn = SCR + prefix + '_' + f.id + f.k + '.png'; files.push({ fn, label: f.id + ' ' + (f.k + 1) + '/3 (scroll ' + f.y + ')' });
    await p.screenshot({ path: fn });
  }
  console.log(prefix, 'docH', docH, 'frames', frames.map(f => f.id + f.k + '@' + f.y).join(' '), 'errors', JSON.stringify(errs));
  await b.close();
  const per = w > 800 ? 2 : 4; let k = 0;
  for (let i = 0; i < files.length; i += per, k++) {
    const part = files.slice(i, i + per), out = O + prefix + '_' + String(k + 1).padStart(2, '0') + '.png';
    if (w > 800) execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_vstack.py', out, ...part.map(f => f.fn)]);
    else execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_paste.py', out, ...part.map(f => f.fn + '::' + f.label)]);
    console.log(out.split('/').pop(), ':', part.map(f => f.label).join(' | '));
  }
})();
