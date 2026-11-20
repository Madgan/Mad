// cycle 3: overflow at five widths, first-screen rects, text dumps, computed type, targets
const { chromium } = require('playwright');
const fs = require('fs');
const S = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/';
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
(async () => {
  const b = await chromium.launch();
  // A. overflow
  for (const w of [320, 390, 768, 1280, 1440]) for (const lang of ['zh', 'en']) {
    const ctx = await b.newContext({ viewport: { width: w, height: 844 }, deviceScaleFactor: 1 });
    const p = await ctx.newPage(); await p.goto(URL + '?autoplay=0' + (lang === 'en' ? '&lang=en' : '')); await p.waitForTimeout(700);
    const r = await p.evaluate(() => {
      const vw = document.documentElement.clientWidth; const over = [];
      for (const el of document.querySelectorAll('body *')) { const cs = getComputedStyle(el); if (cs.display === 'none' || cs.visibility === 'hidden') continue; const r = el.getBoundingClientRect(); if (r.width && r.height && (r.right > vw + 0.5 || r.left < -0.5)) { let clip = false, a = el.parentElement; while (a && a !== document.body) { const o = getComputedStyle(a); if (o.overflow !== 'visible' || o.clipPath !== 'none') { clip = true; break; } a = a.parentElement; } if (!clip && !el.closest('.sr,.skip')) over.push((el.className || el.tagName).toString().slice(0, 30) + ' ' + Math.round(r.left) + '..' + Math.round(r.right)); } }
      return { sw: document.documentElement.scrollWidth, vw, bodySw: document.body.scrollWidth, over: over.slice(0, 6), n: over.length, H: document.documentElement.scrollHeight };
    });
    // try to scroll sideways
    await p.mouse.move(w / 2, 400); await p.mouse.wheel(300, 0); await p.waitForTimeout(100);
    const sx = await p.evaluate(() => scrollX);
    console.log('overflow', w, lang, 'scrollWidth', r.sw, 'client', r.vw, 'scrollX after sideways wheel', sx, 'unclipped elements past the edge', r.n, r.over.join(' | '), 'height', r.H);
    await ctx.close();
  }
  // B. first screen
  for (const [h, lang, rm] of [[844, 'zh', false], [844, 'en', false], [844, 'zh', true], [844, 'en', true], [700, 'zh', false], [700, 'en', false]]) {
    const ctx = await b.newContext({ viewport: { width: 390, height: h }, deviceScaleFactor: 1, reducedMotion: rm ? 'reduce' : 'no-preference' });
    const p = await ctx.newPage(); await p.goto(URL + (lang === 'en' ? '?lang=en' : '')); await p.waitForTimeout(rm ? 800 : 3400);
    const r = await p.evaluate(() => {
      const q = (s) => { const el = document.querySelector(s); const r = el.getBoundingClientRect(); const cx = r.left + r.width / 2, cy = r.top + Math.min(r.height / 2, 20); const top = document.elementFromPoint(cx, cy); return { top: Math.round(r.top), bottom: Math.round(r.bottom), left: Math.round(r.left), right: Math.round(r.right), covered: !(top && (el.contains(top) || top.contains(el))), fs: getComputedStyle(el).fontSize, fw: getComputedStyle(el).fontWeight }; };
      return { cta: q('#hero .hero-cta'), terms: q('#hero .trial-terms'), sheet: q('#sheet'), toggle: q('.lang-toggle'), topcta: q('header.topbar .cta-trial'), claim: q('#hero h1'), termsText: document.querySelector('#hero .trial-terms').innerText, vh: innerHeight };
    });
    console.log('first screen 390x' + h, lang, rm ? 'reduced' : 'rest', JSON.stringify(r));
    if (h === 844) await p.screenshot({ path: `/home/user/Mad/.inhabited/v1_critic/screens/c3_first_390_${lang}_${rm ? 'rm' : 'rest'}.png` });
    if (h === 700) await p.screenshot({ path: `/home/user/Mad/.inhabited/v1_critic/screens/c3_first_390x700_${lang}.png` });
    await ctx.close();
  }
  // C, D, E
  for (const [w, lang] of [[390, 'zh'], [390, 'en'], [1280, 'zh'], [1280, 'en']]) {
    const ctx = await b.newContext({ viewport: { width: w, height: w === 390 ? 844 : 800 }, deviceScaleFactor: 1 });
    const p = await ctx.newPage(); await p.goto(URL + '?autoplay=0' + (lang === 'en' ? '&lang=en' : '')); await p.waitForTimeout(900);
    await p.evaluate(() => document.fonts.ready);
    const r = await p.evaluate(() => {
      const out = { text: document.body.innerText, attrs: [], fonts: {}, small: [], zhHeavy: [], targets: [], gutter: [] };
      for (const el of document.querySelectorAll('[aria-label],[title],[alt]')) out.attrs.push([el.tagName, el.getAttribute('aria-label'), el.getAttribute('title'), el.getAttribute('alt')].join('|'));
      out.meta = [document.title, document.querySelector('meta[name=description]').content, document.documentElement.lang];
      const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const isZh = s => /[一-鿿]/.test(s);
      for (let n; (n = tw.nextNode());) {
        const s = n.nodeValue.trim(); if (!s) continue; const el = n.parentElement; if (!el || el.closest('script,style,.sr,.skip')) continue;
        const cs = getComputedStyle(el); const r = el.getBoundingClientRect(); if (cs.display === 'none' || cs.visibility === 'hidden' || !r.width) continue;
        let hid = false; for (let a = el; a; a = a.parentElement) { const c = getComputedStyle(a); if (c.display === 'none' || c.visibility === 'hidden') { hid = true; break; } } if (hid) continue;
        const fam = cs.fontFamily.split(',')[0].replace(/"/g, '').trim(); const key = [fam, cs.fontWeight, cs.fontStretch, cs.fontStyle, isZh(s) ? 'zh' : 'latin'].join(' / ');
        (out.fonts[key] = out.fonts[key] || []).push((el.className || el.tagName).toString().slice(0, 18) + ':' + s.slice(0, 14));
        if (parseFloat(cs.fontSize) < 11) out.small.push(cs.fontSize + ' ' + (el.className || el.tagName) + ':' + s.slice(0, 16));
        if (isZh(s) && +cs.fontWeight > 700) out.zhHeavy.push(s.slice(0, 12));
        if (/\d/.test(s) && /RM|:|\d{2,}/.test(s) && cs.fontVariantNumeric.indexOf('tabular') < 0 && el.closest('.invoice-sheet,.report-screen,.stub,.past,.price,.mt,.st,.ck')) (out.notab = out.notab || []).push((el.className || el.tagName).toString().slice(0, 18) + ':' + s.slice(0, 14));
      }
      for (const el of document.querySelectorAll('a,button,[role=switch],[role=slider],input')) { const cs = getComputedStyle(el); const r = el.getBoundingClientRect(); if (cs.display === 'none' || cs.visibility === 'hidden' || !r.width) continue; if (el.closest('.skip')) continue; if (r.height < 44 || r.width < 44) out.targets.push((el.className || el.tagName).toString().slice(0, 24) + ' ' + Math.round(r.width) + 'x' + Math.round(r.height) + ' "' + el.innerText.trim().slice(0, 14) + '"'); }
      return out;
    });
    fs.writeFileSync(`${S}text_${w}_${lang}.txt`, r.text + '\n\n---ATTRS---\n' + r.attrs.join('\n') + '\n---META---\n' + r.meta.join('\n'));
    console.log('\n== type', w, lang); Object.keys(r.fonts).sort().forEach(k => console.log('  ', k, 'x' + r.fonts[k].length, '| e.g.', r.fonts[k].slice(0, 3).join(' ; ')));
    console.log('  under 11px:', r.small.length, r.small.slice(0, 5).join(' | '), '| Chinese above 700:', r.zhHeavy.length, '| figures without tabular-nums:', (r.notab || []).length, (r.notab || []).slice(0, 6).join(' | '));
    console.log('  targets under 44:', r.targets.length, r.targets.slice(0, 12).join(' | '));
    await ctx.close();
  }
  await b.close();
})();
