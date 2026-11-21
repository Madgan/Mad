const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const O = '/home/user/Mad/.inhabited/v1_critic/screens/';
(async () => {
  const b = await chromium.launch();
  // overflow at many widths, both languages
  for (const w of [320, 360, 390, 430, 768, 1280, 1440]) {
    const p = await (await b.newContext({ viewport: { width: w, height: 844 }, deviceScaleFactor: 1 })).newPage();
    const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
    await p.goto(URL + '?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
    const out = [];
    for (const lang of ['zh', 'en']) {
      if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(200); }
      out.push(lang + ':' + await p.evaluate(() => document.documentElement.scrollWidth + '/' + document.documentElement.scrollHeight));
    }
    console.log('width', w, out.join(' '), 'errors', errs.length);
    await p.close();
  }
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto(URL + '?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
  for (const lang of ['zh', 'en']) {
    if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(200); }
    const r = await p.evaluate(() => {
      const small = {}, tiny = []; let n = 0;
      const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      while (tw.nextNode()) {
        const t = tw.currentNode; if (!t.textContent.trim()) continue; const e = t.parentElement; if (!e || e.closest('script,style,.sr,.set-start')) continue;
        const cs = getComputedStyle(e); if (cs.visibility === 'hidden' || cs.display === 'none') continue;
        const rg = document.createRange(); rg.selectNodeContents(t); const rc = rg.getBoundingClientRect(); if (!rc.width || !rc.height) continue;
        let hid = false; for (let a = e; a; a = a.parentElement) { const c = getComputedStyle(a); if (c.display === 'none' || c.visibility === 'hidden') { hid = true; break; } } if (hid) continue;
        const fs = parseFloat(cs.fontSize); n++;
        if (fs < 10.95) { const k = fs.toFixed(1); small[k] = (small[k] || 0) + 1; if (tiny.length < 14) tiny.push(k + ':' + t.textContent.trim().slice(0, 18) + '@' + (e.closest('[id]') || {}).id); }
      }
      // touch targets
      const tg = []; document.querySelectorAll('a,button,input').forEach(e => { const r = e.getBoundingClientRect(); const c = getComputedStyle(e); if (c.display === 'none' || !r.width) return; let w = r.width, h = r.height; const af = getComputedStyle(e, '::after'); if (e.classList.contains('cta-compact')) h += 8; if (w < 43.5 || h < 43.5) tg.push((e.className || e.tagName) + ' ' + Math.round(w) + 'x' + Math.round(h)); });
      // gutters: readable things outside 16px
      const gut = []; document.querySelectorAll('#sheet, .msg, .notice, .tape-label, .cta-trial, .tile, .rstrip, .chat-head, .stage, .composer, footer p').forEach(e => { const r = e.getBoundingClientRect(); if (!r.width) return; if (e.closest('.thread-band')) return; if (r.left < 15.5 || r.right > 374.5) gut.push((e.className || e.tagName).slice(0, 30) + ' ' + Math.round(r.left) + '-' + Math.round(r.right)); });
      return { runs: n, small, tiny, tg, gut };
    });
    console.log(lang, JSON.stringify(r));
  }
  // totals read back
  await p.click('.lang-toggle'); await p.waitForTimeout(200);
  const rb = async tag => console.log('totals', tag, await p.evaluate(() => { const s = document.querySelector('#sheet'); return [s.querySelector('.fig').textContent, window.SIS.total(), s.querySelector('.total-words').innerText.trim(), s.querySelector('.machine-line').innerText.replace(/\s+/g, ' '), document.querySelector('.stub .face.done').innerText.replace(/\s+/g, ' '), document.querySelector('.d-n').textContent, document.querySelector('.leaf .total b').textContent].join(' | '); }));
  await rb('default');
  await p.evaluate(() => window.SIS.pickClient(1)); await p.waitForTimeout(700); await rb('client 1');
  await p.evaluate(() => window.SIS.toggleRate('photo')); await p.waitForTimeout(700); await rb('add photo');
  await p.evaluate(() => window.SIS.toggleRate('edit')); await p.waitForTimeout(700); await rb('remove edit');
  await p.evaluate(() => window.SIS.toggleRate('video')); await p.waitForTimeout(700); await p.evaluate(() => window.SIS.toggleRate('photo')); await p.waitForTimeout(700); await rb('none');
  await p.screenshot({ path: O + 'rebuild1_s3_none_390zh.png', clip: { x: 0, y: 0, width: 390, height: 700 } });
  await p.evaluate(() => window.SIS.toggleRate('edit')); await p.waitForTimeout(700); await rb('add edit');
  console.log('errors', JSON.stringify(errs));
  await b.close();
})();
