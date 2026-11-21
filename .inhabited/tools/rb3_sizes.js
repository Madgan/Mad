// Rebuild 3: at 320, 390, 768, 1280 and 1440, in both languages, with script, reduced motion and no script where it can be
// measured: sideways overflow, visible text under 11 px, targets under 44 px, readable blocks inside the 16 px gutter,
// and the first screen at 390 (trial button, prices line, sheet) in each mode.
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
(async () => {
  const b = await chromium.launch(); const allErrs = [];
  for (const [w, h] of [[320, 700], [390, 844], [768, 1024], [1280, 800], [1440, 900]]) for (const lang of ['zh', 'en']) for (const mode of ['js', 'rm']) {
    const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, reducedMotion: mode === 'rm' ? 'reduce' : 'no-preference' })).newPage();
    p.on('console', m => { if (m.type() === 'error') allErrs.push(w + lang + mode + ': ' + m.text()); }); p.on('pageerror', e => allErrs.push(w + lang + mode + ': PAGEERROR ' + e.message));
    await p.goto(URL + '?autoplay=0' + (lang === 'en' ? '&lang=en' : '')); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(350);
    await p.evaluate(() => scrollTo(0, 99999)); await p.waitForTimeout(900); await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(300);
    const r = await p.evaluate(() => {
      const de = document.documentElement, small = [], tg = [], over = [], gut = []; let n = 0;
      const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      while (tw.nextNode()) {
        const t = tw.currentNode; if (!t.textContent.trim()) continue; const e = t.parentElement; if (!e || e.closest('script,style,.sr,.skip')) continue;
        let hid = false; for (let a = e; a && a.nodeType === 1; a = a.parentNode) { if (getComputedStyle(a).display === 'none') { hid = true; break; } } if (hid) continue;
        const cs = getComputedStyle(e); if (cs.visibility === 'hidden') continue;
        const rg = document.createRange(); rg.selectNodeContents(t); const rc = rg.getBoundingClientRect(); if (!rc.width || !rc.height) continue; n++;
        // the stage scales with the screen below 390; its type is measured as drawn
        if (parseFloat(cs.fontSize) < 10.95) small.push(parseFloat(cs.fontSize).toFixed(1) + ':' + t.textContent.trim().slice(0, 14) + '@' + (e.className || e.tagName));
      }
      document.querySelectorAll('a,button,input,label').forEach(e => { const q = e.getBoundingClientRect(), c = getComputedStyle(e); if (c.display === 'none' || !q.width || e.classList.contains('skip')) return; if (q.width < 43.5 || q.height < 43.5) tg.push((e.className || e.id || e.tagName) + ' ' + Math.round(q.width) + 'x' + Math.round(q.height)); });
      document.querySelectorAll('body *').forEach(e => { const q = e.getBoundingClientRect(); if (q.width && q.right > innerWidth + 0.5 && !e.closest('.thread-band,.sr,.skip,.fly-layer,.hero-stage') && getComputedStyle(e).visibility !== 'hidden') over.push((e.className || e.tagName) + '@' + Math.round(q.right)); });
      const g = innerWidth >= 900 ? 31.5 : 15.5;
      document.querySelectorAll('#sheet, .msg, .notice, .nt, .cta-trial, .tile, .rstrip, .chat-head, .stage, .composer, footer p, .past-row, .stub, .hero-claim, .set-end .bubble').forEach(e => { const q = e.getBoundingClientRect(); if (!q.width || getComputedStyle(e).visibility === 'hidden') return; if (q.left < g || q.right > innerWidth - g) gut.push((e.className || e.tagName).toString().slice(0, 26) + ' ' + Math.round(q.left) + '-' + Math.round(q.right)); });
      const box = s => { const q = document.querySelector(s).getBoundingClientRect(); return Math.round(q.top) + '-' + Math.round(q.bottom); };
      return { sw: de.scrollWidth, h: de.scrollHeight, n, small, tg, over: over.slice(0, 4), gut: gut.slice(0, 6), first: 'cta ' + box('#hero .hero-cta') + ' prices ' + box('#hero .trial-terms') + ' sheet ' + box('#sheet') + ' "' + document.querySelector('#hero .trial-terms').innerText.trim() + '"' };
    });
    console.log(String(w).padStart(4), lang, mode, '| scrollWidth', r.sw, r.sw === w ? 'ok' : 'OVERFLOW', '| height', r.h, '| text runs', r.n, 'under 11 px:', r.small.length, r.small.slice(0, 5).join(' '), '| targets under 44:', r.tg.length, r.tg.join(' '), '| past the right edge:', r.over.length, r.over.join(' '), '| outside the gutter:', r.gut.length, r.gut.join(' '), w === 390 ? '| first screen: ' + r.first : '');
    await p.close();
  }
  console.log('console and page errors over all 20 runs:', JSON.stringify(allErrs));
  await b.close();
})();
