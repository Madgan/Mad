// Reduced motion, scripts disabled, and the real-time autoplay of S1 (wall clock), plus a real pointer drag on the rail.
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const OUT = '/home/user/Mad/.inhabited/designer/screens/';
(async () => {
  const b = await chromium.launch();
  const mk = async (opts) => { const ctx = await b.newContext(Object.assign({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 }, opts)); const p = await ctx.newPage(); const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message)); return { p, errs, ctx }; };
  const yOf = (p, sel, frac, h) => p.evaluate(([s, f, hh]) => Math.max(0, Math.round(document.querySelector(s).getBoundingClientRect().top + scrollY - f * hh)), [sel, frac, h]);

  // 1. reduced motion: first screen (with autoplay allowed, it must not play), rail snap, a tap, a scroll sequence
  { const { p, errs, ctx } = await mk({ reducedMotion: 'reduce' });
    await p.goto(URL); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(900);
    await p.screenshot({ path: OUT + 'rm_first_390.png' });
    await p.evaluate(() => { const r = document.querySelector('.rail input'); r.value = 1000; r.dispatchEvent(new Event('input', { bubbles: true })); }); await p.waitForTimeout(150);
    console.log('rm rail snapped to', await p.evaluate(() => document.querySelector('.rail input').value), await p.evaluate(() => document.querySelector('.stage-caption').textContent));
    await p.screenshot({ path: OUT + 'rm_rail_snap_390.png', clip: { x: 0, y: 0, width: 390, height: 700 } });
    await p.evaluate(() => { const r = document.querySelector('.rail input'); r.value = 2420; r.dispatchEvent(new Event('input', { bubbles: true })); });
    await p.evaluate(() => scrollTo(0, 70)); await p.click('.tile[data-i="1"]'); await p.waitForTimeout(60); await p.screenshot({ path: OUT + 'rm_tap_client_390.png' });
    await p.evaluate(y => scrollTo(0, y), await yOf(p, '#story-stage', .66, 844)); await p.waitForTimeout(400); await p.screenshot({ path: OUT + 'rm_story_early_390.png' });
    await p.evaluate(y => scrollTo(0, y), await yOf(p, '#import-stage', .6, 844)); await p.waitForTimeout(400); await p.screenshot({ path: OUT + 'rm_import_early_390.png' });
    await p.click('.approve'); await p.waitForTimeout(60); await p.screenshot({ path: OUT + 'rm_import_saved_390.png' });
    console.log('rm errors', JSON.stringify(errs)); await ctx.close(); }

  // 2. scripts disabled: the finished frame from markup and stylesheet alone
  { const { p, ctx } = await mk({ javaScriptEnabled: false });
    await p.goto(URL); await p.waitForTimeout(1500);
    await p.screenshot({ path: OUT + 'nojs_first_390.png' });
    for (const [i, y] of [[1, 800], [2, 1500], [3, 2250], [4, 3000], [5, 3700]]) { await p.mouse.wheel(0, i === 1 ? 800 : 750); await p.waitForTimeout(200); await p.screenshot({ path: OUT + `nojs_${i}_390.png` }); }
    await ctx.close(); }

  // 3. real time: page load autoplay, sampled on the wall clock
  { const { p, errs, ctx } = await mk({});
    await p.goto(URL); const t0 = Date.now();
    const marks = [];
    for (let i = 0; i < 9; i++) { await p.screenshot({ path: OUT + `rt_load_${i}_390.png`, clip: { x: 0, y: 0, width: 390, height: 640 } }); marks.push((Date.now() - t0) + 'ms ' + await p.evaluate(() => document.querySelector('.cut-rail').dataset.state + ' ' + document.querySelector('.readout').textContent)); await p.waitForTimeout(260); }
    await p.waitForTimeout(1500);
    console.log('rt marks', marks.join(' | '));
    console.log('rt end state', await p.evaluate(() => document.querySelector('.cut-rail').dataset.state + ' ' + document.querySelector('.readout').textContent + ' anims:' + document.getAnimations().length + ' chips:' + document.querySelectorAll('.catch').length));
    // real pointer drag on the rail
    const box = await p.evaluate(() => { const r = document.querySelector('.rail input').getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
    await p.mouse.move(box.x + box.w - 8, box.y + 16); await p.mouse.down(); await p.mouse.move(box.x + box.w * 0.55, box.y + 16, { steps: 6 }); await p.waitForTimeout(120);
    await p.screenshot({ path: OUT + 'rt_drag_mid_390.png', clip: { x: 0, y: 0, width: 390, height: 700 } });
    console.log('drag mid', await p.evaluate(() => document.querySelector('.cut-rail').dataset.state + ' ' + document.querySelector('.readout').textContent + ' italic:' + getComputedStyle(document.querySelector('.readout')).fontStyle));
    await p.mouse.move(box.x + box.w * 0.25, box.y + 16, { steps: 6 }); await p.mouse.up(); await p.waitForTimeout(150);
    console.log('drag released', await p.evaluate(() => document.querySelector('.cut-rail').dataset.state + ' ' + document.querySelector('.readout').textContent + ' italic:' + getComputedStyle(document.querySelector('.readout')).fontStyle));
    await p.screenshot({ path: OUT + 'rt_drag_released_390.png', clip: { x: 0, y: 0, width: 390, height: 700 } });
    await p.click('.replay'); await p.waitForTimeout(400); await p.screenshot({ path: OUT + 'rt_resume_390.png', clip: { x: 0, y: 0, width: 390, height: 700 } });
    await p.waitForTimeout(2600);
    console.log('after resume', await p.evaluate(() => document.querySelector('.cut-rail').dataset.state + ' ' + document.querySelector('.readout').textContent));
    // tap during replay interrupts by a cut
    await p.click('.replay'); await p.waitForTimeout(500); await p.evaluate(() => scrollTo(0, 70)); await p.click('.tile[data-i="2"]'); await p.waitForTimeout(700);
    console.log('tap during replay', await p.evaluate(() => document.querySelector('.cut-rail').dataset.state + ' client ' + document.querySelector('#sheet .name').textContent + ' anims:' + document.getAnimations().length));
    // language toggle
    await p.click('.lang-toggle'); await p.waitForTimeout(40); await p.screenshot({ path: OUT + 'lang_mid_390.png', clip: { x: 0, y: 0, width: 390, height: 300 } }); await p.waitForTimeout(200);
    console.log('lang', await p.evaluate(() => document.documentElement.lang + ' ' + document.title));
    console.log('rt errors', JSON.stringify(errs)); await ctx.close(); }
  await b.close();
})();
