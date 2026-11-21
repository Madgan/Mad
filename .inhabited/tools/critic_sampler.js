// Critic cycle 1: constraint gate sampler (no cross-fades).
// rAF sampler of computed opacity + colours on every element, plus document.getAnimations() polling,
// across: load (S1), scroll down/up, language toggle, taps, hover/focus/press, reduced motion.
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const INIT = () => {
  window.__S = { run: false, frames: 0, els: new Map(), anims: {}, seq: '' };
  let nid = 0; const ids = new WeakMap();
  const PROPS = ['opacity', 'color', 'backgroundColor', 'borderTopColor', 'fill', 'stroke', 'filter', 'backdropFilter'];
  function tag(el) {
    let s = el.tagName.toLowerCase(); if (el.id) s += '#' + el.id;
    if (el.className && typeof el.className === 'string') s += '.' + el.className.trim().split(/\s+/).join('.');
    else if (el.className && el.className.baseVal) s += '.' + el.className.baseVal;
    const p = el.parentElement; if (p) { let ps = p.tagName.toLowerCase(); if (p.className && typeof p.className === 'string') ps += '.' + p.className.trim().split(/\s+/)[0]; s = ps + ' > ' + s; }
    return s;
  }
  function tick() {
    if (!window.__S.run) return;
    window.__S.frames++;
    const all = document.querySelectorAll('*');
    for (const el of all) {
      let id = ids.get(el); if (!id) { id = ++nid; ids.set(el, id); }
      const cs = getComputedStyle(el);
      let rec = window.__S.els.get(id); if (!rec) { rec = { tag: tag(el), v: {} }; window.__S.els.set(id, rec); }
      for (const p of PROPS) {
        const val = cs[p]; let a = rec.v[p]; if (!a) a = rec.v[p] = [];
        if (a.length === 0 || a[a.length - 1][0] !== val) a.push([val, 1]); else a[a.length - 1][1]++;
      }
    }
    for (const an of document.getAnimations()) {
      let props = [];
      try { for (const k of an.effect.getKeyframes()) for (const key of Object.keys(k)) if (!['offset', 'easing', 'composite', 'computedOffset'].includes(key)) props.push(key + '=' + k[key]); } catch (e) { }
      const tp = an.transitionProperty ? ('TRANSITION:' + an.transitionProperty) : (an.animationName ? 'CSSANIM:' + an.animationName : 'WAAPI');
      const names = [...new Set(props.map(x => x.split('=')[0]))].sort().join(',');
      const key = tp + ' | ' + names;
      if (!window.__S.anims[key]) window.__S.anims[key] = { n: 0, sample: props.slice(0, 6), target: an.effect && an.effect.target ? tag(an.effect.target) : '' };
      window.__S.anims[key].n++;
    }
    requestAnimationFrame(tick);
  }
  window.__start = (name) => { window.__S = { run: true, frames: 0, els: new Map(), anims: {}, seq: name }; requestAnimationFrame(tick); };
  window.__stop = () => {
    window.__S.run = false;
    const out = { seq: window.__S.seq, frames: window.__S.frames, anims: window.__S.anims, multi: [], two: {} };
    for (const [id, rec] of window.__S.els) for (const p of Object.keys(rec.v)) {
      const a = rec.v[p];
      if (a.length >= 3) out.multi.push({ tag: rec.tag, prop: p, vals: a.slice(0, 12) });
      else if (a.length === 2) { const k = p + ': ' + a[0][0] + ' -> ' + a[1][0]; out.two[k] = (out.two[k] || 0) + 1; }
    }
    return out;
  };
};
function report(r) {
  console.log('\n=== ' + r.seq + ' (' + r.frames + ' frames) ===');
  console.log('animations seen:'); for (const k of Object.keys(r.anims)) console.log('   ' + k + '  x' + r.anims[k].n + '  target=' + r.anims[k].target + '  e.g. ' + JSON.stringify(r.anims[k].sample).slice(0, 200));
  // multi-valued: filter those with intermediate values (non-oscillating between two values)
  const bad = r.multi.filter(m => new Set(m.vals.map(v => v[0])).size >= 3);
  const osc = r.multi.filter(m => new Set(m.vals.map(v => v[0])).size < 3);
  console.log('elements with >=3 DISTINCT values of a watched prop: ' + bad.length);
  for (const m of bad.slice(0, 40)) console.log('   ' + m.tag + ' [' + m.prop + '] ' + JSON.stringify(m.vals).slice(0, 300));
  console.log('elements toggling back and forth between 2 values: ' + osc.length + (osc.length ? '  e.g. ' + osc.slice(0, 4).map(m => m.tag + '[' + m.prop + ']' + JSON.stringify(m.vals).slice(0, 120)).join(' ; ') : ''));
  const keys = Object.keys(r.two); console.log('single cuts (2 values, one change), ' + keys.length + ' kinds:');
  for (const k of keys.slice(0, 40)) console.log('   ' + k + '  x' + r.two[k]);
}
(async () => {
  const b = await chromium.launch();
  for (const mode of ['normal', 'reduce']) {
    console.log('\n################ MODE ' + mode + ' ################');
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, reducedMotion: mode === 'reduce' ? 'reduce' : 'no-preference', hasTouch: false });
    await ctx.addInitScript(INIT);
    const p = await ctx.newPage();
    const reqs = []; p.on('request', q => reqs.push(q.url()));
    const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.addInitScript(() => { document.addEventListener('DOMContentLoaded', () => window.__start('load + S1 autoplay')); });
    await p.goto(URL);
    await p.waitForTimeout(4200);
    report(await p.evaluate(() => window.__stop()));
    console.log('external requests:', JSON.stringify([...new Set(reqs.filter(u => !u.startsWith('file:')).map(u => u.split('?')[0].slice(0, 60)))]));

    const seq = async (name, fn, wait = 900) => { await p.evaluate(n => window.__start(n), name); await fn(); await p.waitForTimeout(wait); report(await p.evaluate(() => window.__stop())); };

    await seq('language toggle zh->en', async () => { await p.click('.lang-toggle'); });
    await seq('language toggle en->zh', async () => { await p.click('.lang-toggle'); });
    await seq('replay button', async () => { await p.click('.replay'); }, 3200);
    await seq('rail keyboard: Home, ArrowRight x20, End', async () => { await p.focus('.rail input'); await p.keyboard.press('Home'); for (let i = 0; i < 20; i++) await p.keyboard.press('ArrowRight'); await p.waitForTimeout(200); await p.keyboard.press('End'); }, 600);
    await seq('rail drag', async () => { const bx = await p.locator('.rail input').boundingBox(); await p.mouse.move(bx.x + bx.width - 4, bx.y + bx.height / 2); await p.mouse.down(); for (let i = 0; i <= 30; i++) { await p.mouse.move(bx.x + bx.width - 4 - i * (bx.width - 8) / 30, bx.y + bx.height / 2); await p.waitForTimeout(16); } for (let i = 30; i >= 0; i--) { await p.mouse.move(bx.x + bx.width - 4 - i * (bx.width - 8) / 30, bx.y + bx.height / 2); await p.waitForTimeout(16); } await p.mouse.up(); }, 500);
    await p.evaluate(() => scrollTo(0, 420)); await p.waitForTimeout(300);
    await seq('tap client tile 2 (Tanjung)', async () => { await p.click('.tile[data-i="1"]'); });
    await seq('tap client tile 3 (Aria)', async () => { await p.click('.tile[data-i="2"]'); });
    await seq('add rate photo', async () => { await p.click('.rstrip[data-id="photo"]'); });
    await seq('remove rate edit', async () => { await p.click('.rstrip[data-id="edit"]'); });
    await seq('remove rate photo + video (none left)', async () => { await p.click('.rstrip[data-id="photo"]'); await p.waitForTimeout(600); await p.click('.rstrip[data-id="video"]'); }, 1000);
    await seq('add rate video back + edit', async () => { await p.click('.rstrip[data-id="video"]'); await p.waitForTimeout(700); await p.click('.rstrip[data-id="edit"]'); }, 1000);
    await p.click('.tile[data-i="0"]'); await p.waitForTimeout(700);
    const H = await p.evaluate(() => document.documentElement.scrollHeight);
    await seq('scroll down full page (wheel 60px steps)', async () => { for (let y = 0; y < H; y += 60) { await p.mouse.wheel(0, 60); await p.waitForTimeout(16); } }, 800);
    await seq('scroll back up (wheel)', async () => { for (let y = 0; y < H + 600; y += 60) { await p.mouse.wheel(0, -60); await p.waitForTimeout(16); } }, 800);
    await seq('fast flick to bottom and back (scrollTo jumps)', async () => { await p.evaluate(h => scrollTo(0, h), H); await p.waitForTimeout(500); await p.evaluate(() => scrollTo(0, 0)); }, 800);
    // taps further down
    await p.evaluate(() => document.querySelector('#report').scrollIntoView({ block: 'center' })); await p.waitForTimeout(500);
    await seq('month tap (col 2 then col 6)', async () => { await p.click('.mcol[data-i="1"]'); await p.waitForTimeout(400); await p.click('.mcol[data-i="5"]'); });
    await p.evaluate(() => document.querySelector('.approve').scrollIntoView({ block: 'center' })); await p.waitForTimeout(600);
    await seq('approve (green wrap) then undo', async () => { await p.click('.approve'); await p.waitForTimeout(700); await p.click('.approve'); });
    await p.evaluate(() => document.querySelector('.token-btn').scrollIntoView({ block: 'center' })); await p.waitForTimeout(600);
    await seq('token revoke then create', async () => { await p.click('.token-btn'); await p.waitForTimeout(700); await p.click('.token-btn'); });
    // states: hover / focus / pressed on every interactive element
    await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(400);
    const sels = await p.evaluate(() => { const o = []; document.querySelectorAll('a,button,input').forEach((el, i) => { el.setAttribute('data-crit', i); o.push(i); }); return o; });
    await seq('hover + focus + press on all ' + sels.length + ' interactive elements', async () => {
      for (const i of sels) {
        const loc = p.locator('[data-crit="' + i + '"]');
        try { await loc.scrollIntoViewIfNeeded({ timeout: 800 }); await loc.hover({ timeout: 800, force: true }); await p.waitForTimeout(50); await loc.focus({ timeout: 800 }); await p.waitForTimeout(50);
          const bx = await loc.boundingBox(); if (bx) { await p.mouse.move(bx.x + bx.width / 2, bx.y + bx.height / 2); await p.mouse.down(); await p.waitForTimeout(70); await p.mouse.move(2, 400); await p.mouse.up(); await p.waitForTimeout(30); } } catch (e) { console.log('   (skip ' + i + ': ' + String(e.message).split('\n')[0] + ')'); }
      }
    }, 600);
    console.log('page errors:', JSON.stringify(errs));
    await ctx.close();
  }
  await b.close();
})();
