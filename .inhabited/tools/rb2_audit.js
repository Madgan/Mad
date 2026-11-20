// Rebuild 2 mechanical checks: overflow, console errors, first-screen positions, text sizes, touch targets, gutters,
// font weights by script and family, totals read back with everything downstream, language-switch offsets.
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
(async () => {
  const b = await chromium.launch();
  for (const w of [320, 360, 390, 430, 768, 900, 1024, 1280, 1440]) {
    const p = await (await b.newContext({ viewport: { width: w, height: w >= 900 ? 800 : 844 }, deviceScaleFactor: 1 })).newPage();
    const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
    await p.goto(URL + '?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
    const out = [];
    for (const lang of ['zh', 'en']) {
      if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(200); }
      out.push(lang + ':' + await p.evaluate(() => {
        const de = document.documentElement; let worst = '';
        document.querySelectorAll('body *').forEach(e => { const r = e.getBoundingClientRect(); if (r.width && r.right > innerWidth + 0.5 && !e.closest('.thread-band,.sr,.skip,.fly-layer') && getComputedStyle(e).visibility !== 'hidden') { if (!worst) worst = (e.className || e.tagName) + '@' + Math.round(r.right); } });
        return de.scrollWidth + '/' + de.scrollHeight + (worst ? ' OVER:' + worst : '');
      }));
    }
    console.log('width', w, out.join(' '), 'errors', errs.length, errs.join(';'));
    await p.close();
  }
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto(URL + '?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
  for (const lang of ['zh', 'en']) {
    if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(200); }
    const r = await p.evaluate(() => {
      const pos = {}; [['claim', '#hero .hero-claim'], ['stage', '.hero-stage'], ['sheet', '#sheet'], ['caption', '.stage-caption'], ['cta', '#hero .cta-trial'], ['terms', '#hero .trial-terms'], ['rail', '.cut-rail'], ['toggle', '.lang-toggle'], ['topcta', 'header .cta-trial'], ['pickc', '.picker-client'], ['pickr', '.picker-rate'], ['note', '.sample-note'], ['story', '#story'], ['reports', '#reports'], ['import', '#import'], ['pro', '#pro'], ['pricing', '#pricing'], ['footer', 'footer']].forEach(([k, s]) => { const q = document.querySelector(s).getBoundingClientRect(); pos[k] = Math.round(q.top + scrollY) + '-' + Math.round(q.bottom + scrollY) + ' x' + Math.round(q.left) + '-' + Math.round(q.right); });
      const small = {}, tiny = []; let n = 0; const wz = {}, wl = {};
      const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      while (tw.nextNode()) {
        const t = tw.currentNode; if (!t.textContent.trim()) continue; const e = t.parentElement; if (!e || e.closest('script,style,.sr,.skip')) continue;
        let hid = false; for (let a = e; a && a.nodeType === 1; a = a.parentNode) { const c = getComputedStyle(a); if (c.display === 'none') { hid = true; break; } } if (hid) continue;
        const cs = getComputedStyle(e); if (cs.visibility === 'hidden') continue;
        const rg = document.createRange(); rg.selectNodeContents(t); const rc = rg.getBoundingClientRect(); if (!rc.width || !rc.height) continue;
        const fs = parseFloat(cs.fontSize); n++;
        if (fs < 10.95) { const k = fs.toFixed(1); small[k] = (small[k] || 0) + 1; if (tiny.length < 14) tiny.push(k + ':' + t.textContent.trim().slice(0, 18) + '@' + (e.className || e.tagName)); }
        const fam = cs.fontFamily.split(',')[0].replace(/"/g, ''); const tx = t.textContent;
        const where = (e.closest('h1') ? 'h1' : e.closest('.cta-trial,.replay,.signin,.lang-toggle,.composer,.act,.tile,.rstrip,.mcol') ? 'control' : e.closest('.hero-sub,.sample-note,.pk-hint,.pk-label,.hint,.notice,footer,.plan li,.price,.smp') ? 'copy' : 'thread+product');
        if (/[一-鿿]/.test(tx)) { const k = where + ' w' + cs.fontWeight; wz[k] = (wz[k] || 0) + 1; }
        if (/[A-Za-z0-9]/.test(tx)) { const k = fam + ' w' + cs.fontWeight + (cs.fontStyle === 'italic' ? 'i' : ''); wl[k] = (wl[k] || 0) + 1; if (!window.__ex) window.__ex = {}; if (!window.__ex[k]) window.__ex[k] = (e.className || e.tagName) + ':' + tx.trim().slice(0, 14); }
      }
      const tg = []; document.querySelectorAll('a,button,input').forEach(e => { const r = e.getBoundingClientRect(); const c = getComputedStyle(e); if (c.display === 'none' || !r.width || e.classList.contains('skip')) return; if (r.width < 43.5 || r.height < 43.5) tg.push((e.className || e.tagName) + ' ' + Math.round(r.width) + 'x' + Math.round(r.height)); });
      const gut = []; document.querySelectorAll('#sheet, .msg, .notice, .tape-label, .cta-trial, .tile, .rstrip, .chat-head, .stage, .composer, footer p, .past-row, .stub').forEach(e => { const r = e.getBoundingClientRect(); if (!r.width) return; if (e.closest('.thread-band')) return; if (r.left < 15.5 || r.right > 374.5) gut.push((e.className || e.tagName).slice(0, 30) + ' ' + Math.round(r.left) + '-' + Math.round(r.right)); });
      const stretch = new Set(); document.querySelectorAll('body *').forEach(e => stretch.add(getComputedStyle(e).fontStretch));
      return { pos, runs: n, small, tiny, tg, gut, chineseWeights: wz, latinWeights: wl, examples: window.__ex, stretch: [...stretch], docH: document.documentElement.scrollHeight };
    });
    console.log('\n== ' + lang + ' at 390 x 844 =='); console.log(JSON.stringify(r, null, 1));
  }
  // totals read back, with everything downstream
  await p.click('.lang-toggle'); await p.waitForTimeout(200);
  const rb = async tag => console.log('state', tag, '|', await p.evaluate(() => {
    const q = s => { const e = document.querySelector(s); return e ? e.innerText.replace(/\s+/g, ' ').trim() : 'MISSING'; };
    const s = document.querySelector('#sheet'), st = document.querySelector('#story-stage');
    return ['fig ' + s.querySelector('.fig').textContent, 'total() ' + window.SIS.total(), 'words ' + q('#sheet .total-words'), 'machine ' + q('#sheet .machine-line'),
      'chat ' + q('#story .chat-head .av') + ' / ' + q('#story .chat-head .who'), 'card ' + q('.sc-client'), 'stub ' + (getComputedStyle(document.querySelector('.stub')).visibility === 'hidden' ? '(hidden) slot: ' + q('.stub-slot') : q(document.querySelector('.stub').classList.contains('is-front') ? '.sface.front' : '.sface.done')),
      'past ' + q('.past'), 'leaf ' + q('.leaf .bill-to .name') + ' ' + q('.leaf .total b') + ' draft=' + document.querySelector('.leaf').classList.contains('is-draft') + ' crossing ' + getComputedStyle(document.querySelector('.leaf .crossing')).visibility + ' block ' + getComputedStyle(document.querySelector('.leaf .record-block')).visibility + ' draft-tape ' + getComputedStyle(document.querySelector('.leaf .draft-tape')).visibility,
      'pdf ' + document.querySelector('.doc-bubble').getAttribute('data-state') + ' "' + q('.doc-bubble .empty-label') + '"', 'leafT ' + document.querySelector('.leaf').style.transform,
      '014tag ' + (document.querySelector('.tag014').classList.contains('pre') ? 'absent' : 'on'), 'nov ' + q('.d-s') + ' net ' + q('.d-n'), 'rank ' + q('.rank')].join(' | ');
  }));
  await p.evaluate(() => scrollTo(0, 99999)); await p.waitForTimeout(500);
  await rb('default (read at the foot of the page, every sequence at its end)');
  await p.evaluate(() => window.SIS.pickClient(1)); await p.waitForTimeout(700); await rb('client TANJUNG');
  await p.evaluate(() => window.SIS.pickClient(2)); await p.waitForTimeout(700); await rb('client ARIA');
  await p.evaluate(() => window.SIS.toggleRate('photo')); await p.waitForTimeout(700); await rb('add photo');
  await p.evaluate(() => window.SIS.toggleRate('edit')); await p.waitForTimeout(700); await rb('remove edit');
  await p.evaluate(() => window.SIS.toggleRate('video')); await p.waitForTimeout(700); await p.evaluate(() => window.SIS.toggleRate('photo')); await p.waitForTimeout(700); await rb('none (draft)');
  await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(300); await p.evaluate(() => scrollTo(0, 99999)); await p.waitForTimeout(500); await rb('draft after going up and down the page again');
  await p.evaluate(() => window.SIS.toggleRate('edit')); await p.waitForTimeout(700); await rb('add edit');
  await p.evaluate(() => window.SIS.pickClient(0)); await p.waitForTimeout(700);
  console.log('errors', JSON.stringify(errs));
  // language switch: at each scroll position, what is at the reading line before and after, and by how much it moved on screen
  for (const [w, h] of [[390, 844], [1280, 800]]) {
    const q = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage();
    await q.goto(URL + '?autoplay=0'); await q.evaluate(() => document.fonts.ready); await q.waitForTimeout(300);
    const dh = await q.evaluate(() => document.documentElement.scrollHeight);
    let worst = 0, worstAt = 0, worstTop = 0, worstTopAt = 0, worstBack = 0, rows = [];
    for (let y = 0; y < dh - h; y += 100) {
      await q.evaluate(yy => scrollTo(0, yy), y); await q.waitForTimeout(420);
      const probe = () => q.evaluate(() => {
        // independent landmark: the deepest block that exists in both languages under the reading line, found from the pixels
        const y = innerHeight * .4, xs = [innerWidth * .5, innerWidth * .25, 60]; let e = null;
        for (const x of xs) { e = document.elementFromPoint(x, y); while (e && e.closest && e.closest('.zh,.en')) e = e.closest('.zh,.en').parentElement; if (e && !/^(BODY|HTML|MAIN|SECTION|HEADER)$/.test(e.tagName) && !e.classList.contains('col') && getComputedStyle(e).position !== 'sticky' && !e.closest('.leaf')) break; e = null; }
        window.__lm = e; if (!e) return { sy: Math.round(scrollY), who: '(gap)' };
        const r = e.getBoundingClientRect(); window.__f = (y - r.top) / r.height;
        return { sy: Math.round(scrollY), top: r.top, pt: y, who: (e.className || e.tagName).toString().slice(0, 24) };
      });
      const after = () => q.evaluate(() => { const e = window.__lm; if (!e) return { sy: Math.round(scrollY) }; const r = e.getBoundingClientRect(); return { sy: Math.round(scrollY), top: r.top, pt: r.top + window.__f * r.height, h: r.height }; });
      const a = await probe();
      await q.click('.lang-toggle'); await q.waitForTimeout(160);
      const bb = await after();
      await q.click('.lang-toggle'); await q.waitForTimeout(160);
      const c = await after();
      if (a.who === '(gap)') { rows.push(y + ': scrollY zh ' + a.sy + ' > en ' + bb.sy + ' > zh ' + c.sy + ' | reading line is on a gap'); continue; }
      const mv = Math.abs(bb.pt - a.pt), mvTop = Math.abs(bb.top - a.top), back = Math.abs(c.sy - a.sy);
      if (mv > worst) { worst = mv; worstAt = y; } if (mvTop > worstTop) { worstTop = mvTop; worstTopAt = y; } if (back > worstBack) worstBack = back;
      rows.push(y + ': scrollY zh ' + a.sy + ' > en ' + bb.sy + ' > zh ' + c.sy + ' | block ' + a.who + ': point under the reading line moved ' + mv.toFixed(1) + ' px, its top edge ' + mvTop.toFixed(1) + ' px');
    }
    console.log('\nlanguage switch at ' + w + ' x ' + h + ': worst movement of the point under the reading line ' + worst.toFixed(1) + ' px (scroll ' + worstAt + '); worst movement of that block top edge ' + worstTop.toFixed(1) + ' px (scroll ' + worstTopAt + '); worst scrollY not restored after zh > en > zh ' + worstBack + ' px');
    console.log(rows.join('\n'));
    await q.close();
  }
  await b.close();
})();
