// cycle 4: further manifest checks: animate() durations by sequence, smear geometry, desktop edges, tape red, read tick, slots
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  await ctx.addInitScript(() => { window.__d = []; const o = Element.prototype.animate; Element.prototype.animate = function (k, opt) { try { const props = [...new Set((Array.isArray(k) ? k : [k]).flatMap(f => Object.keys(f).filter(x => !['offset', 'easing', 'composite'].includes(x))))].join(','); window.__d.push({ tag: (this.className && this.className.baseVal !== undefined ? this.className.baseVal : this.className || this.tagName).toString().slice(0, 24), dur: typeof opt === 'number' ? opt : opt && opt.duration, props, easing: opt && opt.easing, seq: window.__seq || '' }); } catch (e) { } return o.apply(this, arguments); }; });
  const p = await ctx.newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
  // smear geometry at t=168
  await p.evaluate(() => window.SIS.seek(168));
  const geo = await p.evaluate(() => { const tines = [], bars = []; document.querySelectorAll('.smear').forEach(s => { const hd = s.querySelector('.hd'); if (hd) { const cp = getComputedStyle(hd).clipPath; const w = hd.getBoundingClientRect().width; const xs = (cp.match(/[\d.]+%/g) || []).map(parseFloat); tines.push({ w: Math.round(w), cpLen: cp.length }); } s.querySelectorAll('.tr').forEach(t => { const r = t.getBoundingClientRect(); bars.push([+(r.width.toFixed(1)), Math.round(r.height), getComputedStyle(t).opacity]); }); }); const bw = bars.map(x => x[0]), bh = bars.map(x => x[1]); return { smears: tines.length, barCount: bars.length, barW: [Math.min(...bw), Math.max(...bw)], barH: [Math.min(...bh), Math.max(...bh)], opac: [...new Set(bars.map(x => x[2]))] }; });
  console.log('smear at t=168 (390):', JSON.stringify(geo));
  // tine widths: parse polygon of one .hd into x-ranges of separate quads
  const tw = await p.evaluate(() => { const out = []; document.querySelectorAll('.smear .hd').forEach(hd => { const w = hd.getBoundingClientRect().width; const cp = getComputedStyle(hd).clipPath; const pts = cp.replace(/^polygon\(|\)$/g, '').split(',').map(s => s.trim().split(/\s+/)); const xs = pts.map(pp => { const v = pp[0]; return v.endsWith('%') ? parseFloat(v) / 100 * w : parseFloat(v); }); for (let i = 0; i + 3 < xs.length; i += 4) { const q = xs.slice(i, i + 4); out.push(Math.max(...q) - Math.min(...q)); } }); out.sort((a, b) => a - b); return { n: out.length, min: +out[0].toFixed(1), p10: +out[Math.floor(out.length * .1)].toFixed(1), median: +out[Math.floor(out.length / 2)].toFixed(1), max: +out[out.length - 1].toFixed(1) }; });
  console.log('tine widths (approx, from polygon quads):', JSON.stringify(tw));
  await p.evaluate(() => { window.__d = []; window.__seq = 'S1 full run'; window.SIS.play(0); }); await p.waitForTimeout(2800);
  await p.evaluate(() => { window.__seq = 'recut client'; }); await p.click('.tile[data-i="1"]'); await p.waitForTimeout(700);
  await p.evaluate(() => { window.__seq = 'rate remove'; }); await p.click('.rstrip[data-id="edit"]'); await p.waitForTimeout(700);
  await p.evaluate(() => { window.__seq = 'rate add'; }); await p.click('.rstrip[data-id="edit"]'); await p.waitForTimeout(700);
  await p.evaluate(() => { window.__seq = 'draft complete'; }); await p.click('.rstrip[data-id="video"]'); await p.waitForTimeout(500); await p.click('.rstrip[data-id="edit"]'); await p.waitForTimeout(700); await p.click('.rstrip[data-id="video"]'); await p.waitForTimeout(700);
  await p.evaluate(() => { window.__seq = 'scroll page'; }); await p.mouse.move(195, 400); for (let i = 0; i < 90; i++) { await p.mouse.wheel(0, 60); await p.waitForTimeout(16); } await p.waitForTimeout(500);
  await p.evaluate(() => document.querySelector('.approve').scrollIntoView({ block: 'center' })); await p.waitForTimeout(400);
  await p.evaluate(() => { window.__seq = 'approve/undo'; }); await p.click('.approve'); await p.waitForTimeout(500); await p.click('.approve'); await p.waitForTimeout(500);
  await p.evaluate(() => document.querySelector('.token-btn').scrollIntoView({ block: 'center' })); await p.waitForTimeout(400);
  await p.evaluate(() => { window.__seq = 'token'; }); await p.click('.token-btn'); await p.waitForTimeout(500); await p.click('.token-btn'); await p.waitForTimeout(500);
  await p.evaluate(() => { window.__seq = 'lang'; }); await p.click('label.lang-toggle'); await p.waitForTimeout(400);
  const d = await p.evaluate(() => window.__d);
  const agg = {}; for (const x of d) { const k = x.seq + ' | ' + x.tag + ' | ' + x.props; (agg[k] = agg[k] || new Set()).add(x.dur + (x.easing && x.easing !== 'linear' ? '(' + x.easing + ')' : '')); }
  for (const k of Object.keys(agg)) console.log('  ', k, '->', [...agg[k]].join(','));
  const extra = await p.evaluate(() => ({ red: getComputedStyle(document.querySelector('.rs-wait, .review-state .tape-label, .tape-label.red') || document.body).backgroundColor, slots: [...document.querySelectorAll('#sheet .slot-empty')].map(e => e.dataset.slot + ':' + e.textContent.trim().slice(0, 12) + ':' + getComputedStyle(e).visibility).join(' | '), readTick: [...document.querySelectorAll('#report-msg .ticks *')].map(e => getComputedStyle(e).stroke).join(','), reportState: document.querySelector('#report-msg').dataset.state }));
  console.log('extra', JSON.stringify(extra));
  await ctx.close();
  // desktop edges
  for (const w of [900, 1280, 1440]) {
    const q = await (await b.newContext({ viewport: { width: w, height: 800 } })).newPage();
    await q.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await q.evaluate(() => document.fonts.ready); await q.waitForTimeout(500);
    const e = await q.evaluate(() => { const s = document.getElementById('sheet').getBoundingClientRect(), l = document.querySelector('#story .leaf').getBoundingClientRect(), lane = document.querySelector('#story .chat-head').getBoundingClientRect(); const nts = [...document.querySelectorAll('#story .nt')].map(n => Math.round(n.getBoundingClientRect().top + scrollY)); const gaps = []; document.querySelectorAll('.tc>.notice').forEach(no => { const ns = [...no.querySelectorAll('.nt')].map(n => n.getBoundingClientRect()); for (let i = 0; i + 1 < ns.length; i++) gaps.push(Math.round(ns[i + 1].top - ns[i].bottom)); }); const nf = getComputedStyle(document.querySelector('.nt')).fontSize; return { sheetLeft: +s.left.toFixed(1), leafLeft: +l.left.toFixed(1), lane: Math.round(lane.left) + '..' + Math.round(lane.right), noteFont: nf, gapsBetweenNotes: gaps.join(',') }; });
    console.log('desktop', w, JSON.stringify(e));
    await q.close();
  }
  await b.close();
})();
