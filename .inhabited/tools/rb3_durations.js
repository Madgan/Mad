// Rebuild 3: every timed move on the page, as the page itself asks for it. Element.prototype.animate is wrapped before the
// page's script runs and each call is logged (what moves, which properties, delay, duration); CSS transitions are read
// from computed style. Then every sequence is run: opening, pickers, scroll down and up, taps, language.
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.addInitScript(() => {
    window.__an = []; const orig = Element.prototype.animate;
    Element.prototype.animate = function (frames, opts) {
      const props = [...new Set([].concat(...frames.map(f => Object.keys(f))))].filter(k => k !== 'offset' && k !== 'easing');
      const cls = (this.getAttribute('class') || this.tagName).toString().split(' ').slice(0, 3).join('.'); const par = this.parentElement ? (this.parentElement.getAttribute('class') || this.parentElement.tagName).toString().split(' ')[0] : '';
      const last = frames.filter(f => f.offset !== undefined).map(f => f.offset);
      window.__an.push({ phase: window.__phase || 'load', el: cls, par, props: props.join('+'), delay: opts.delay || 0, dur: opts.duration, settle: last.length ? last[0] : null, easing: opts.easing || 'linear' });
      return orig.call(this, frames, opts);
    };
  });
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html'); await p.waitForTimeout(3600);
  const ph = async (name, fn, wait) => { await p.evaluate(n => { window.__phase = n; }, name); await fn(); await p.waitForTimeout(wait || 700); };
  await ph('pick client', () => p.click('.tile[data-i="1"]'));
  await ph('add rate', () => p.click('.rstrip[data-id="photo"]'));
  await ph('remove rate', () => p.click('.rstrip[data-id="photo"]'));
  await ph('remove to draft', async () => { await p.click('.rstrip[data-id="video"]'); await p.waitForTimeout(600); await p.click('.rstrip[data-id="edit"]'); });
  await ph('complete a draft', () => p.click('.rstrip[data-id="video"]'));
  await ph('language', async () => { await p.click('.lang-toggle'); await p.waitForTimeout(300); await p.click('.lang-toggle'); });
  await p.mouse.move(195, 420);
  await ph('scroll down', async () => { for (let i = 0; i < 110; i++) { await p.mouse.wheel(0, 40); await p.waitForTimeout(30); } }, 900);
  await ph('scroll up', async () => { for (let i = 0; i < 110; i++) { await p.mouse.wheel(0, -40); await p.waitForTimeout(30); } }, 900);
  await ph('scroll down again', async () => { for (let i = 0; i < 110; i++) { await p.mouse.wheel(0, 40); await p.waitForTimeout(30); } }, 900);
  await ph('month tap', async () => { await p.evaluate(() => scrollTo(0, document.querySelector('#report').getBoundingClientRect().top + scrollY - 120)); await p.waitForTimeout(400); await p.click('.mcol[data-i="2"]'); });
  await ph('approve', async () => { await p.evaluate(() => scrollTo(0, document.querySelector('#import-stage').getBoundingClientRect().top + scrollY - 150)); await p.waitForTimeout(500); await p.click('.approve'); });
  await ph('undo approve', () => p.click('.approve'));
  await ph('revoke token', async () => { await p.evaluate(() => scrollTo(0, document.querySelector('#pro-stage').getBoundingClientRect().top + scrollY - 200)); await p.waitForTimeout(500); await p.click('.token-btn'); });
  await ph('create token', () => p.click('.token-btn'));
  const an = await p.evaluate(() => window.__an);
  const tr = await p.evaluate(() => { const out = []; document.querySelectorAll('body *').forEach(e => { const c = getComputedStyle(e); if (c.transitionDuration !== '0s' && c.transitionProperty !== 'all' || (c.transitionDuration !== '0s')) out.push((e.getAttribute('class') || e.tagName).toString().split(' ')[0] + '<' + (e.parentElement.getAttribute('class') || '').split(' ')[0] + ' ' + c.transitionProperty + ' ' + c.transitionDuration + ' delay ' + c.transitionDelay + ' ' + c.transitionTimingFunction); }); return [...new Set(out)]; });
  const kind = a => a.props.indexOf('strokeDashoffset') >= 0 ? 'stroke' : a.props.indexOf('clipPath') >= 0 ? 'wipe' : a.el.indexOf('catch-tr') >= 0 ? 'catch trail' : a.el.indexOf('catch') >= 0 ? 'catch' : a.el.indexOf('fly') >= 0 ? 're-cut flight' : a.el.indexOf('mover') >= 0 ? 'band (steps)' : a.props === 'visibility' ? 'cut (visibility hold)' : /leaf|old-file|tag014/.test(a.el) ? 'drop or lift' : 'knob, row or thumb move';
  const by = {};
  for (const a of an) { const k = kind(a); (by[k] = by[k] || []).push(a); }
  for (const k in by) {
    const ds = by[k].map(a => a.dur); const uniq = {};
    by[k].forEach(a => { const key = a.el + '<' + a.par + ' [' + a.props + '] ' + Math.round(a.dur) + ' ms' + (a.delay ? ' after ' + Math.round(a.delay) : '') + (a.settle !== null ? ' (settle from ' + a.settle + ')' : '') + ' ' + a.easing; (uniq[key] = uniq[key] || new Set()).add(a.phase); });
    console.log('\n' + k + ': ' + by[k].length + ' calls, durations ' + Math.round(Math.min(...ds)) + ' to ' + Math.round(Math.max(...ds)) + ' ms');
    if (k !== 'cut (visibility hold)') Object.keys(uniq).sort().forEach(u => console.log('   ' + u + '   {' + [...uniq[u]].join(', ') + '}'));
  }
  const props = [...new Set([].concat(...an.map(a => a.props.split('+'))))];
  console.log('\nproperties animated by script:', props.join(', '));
  console.log('CSS transitions (computed):'); tr.forEach(t => console.log('   ' + t));
  console.log('errors', JSON.stringify(errs));
  await b.close();
})();
