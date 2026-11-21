// Critic cycle 1: DOM support checks (text parity, fonts, overflow, contrast spot checks, targets).
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
  await p.goto(URL); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(3500);
  const parity = await p.evaluate(() => {
    const zh = document.querySelectorAll('.zh').length, en = document.querySelectorAll('.en').length;
    const unpaired = [];
    document.querySelectorAll('.zh').forEach(z => { const s = z.parentElement.querySelector(':scope > .en'); if (!s) unpaired.push('zh without en: ' + z.textContent.slice(0, 40)); });
    document.querySelectorAll('.en').forEach(z => { const s = z.parentElement.querySelector(':scope > .zh'); if (!s) unpaired.push('en without zh: ' + z.textContent.slice(0, 40)); });
    // text outside .zh/.en
    const neutral = []; const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) { const n = w.currentNode; const t = n.textContent.trim(); if (!t) continue; const el = n.parentElement; if (el.closest('.zh,.en,script,style')) continue; if (getComputedStyle(el).display === 'none') continue; neutral.push(t.slice(0, 50)); }
    const attrs = []; document.querySelectorAll('[aria-label],[title],[alt]').forEach(e => attrs.push((e.getAttribute('aria-label') || e.getAttribute('title') || e.getAttribute('alt'))));
    return { zh, en, unpaired, neutral: [...new Set(neutral)], attrs };
  });
  console.log('PARITY', JSON.stringify(parity, null, 1));
  const fonts = async (lang) => p.evaluate((lang) => {
    const pick = { h1: '.hero-claim h1 .' + lang, heroSub: '.hero-sub .' + lang, cta: '.hero-cta .' + lang, terms: '.trial-terms .' + lang, caption: '.stage-caption .' + lang, readout: '.readout', msg: '.msg .stack .' + lang, msgTime: '.msg .time', bubble: '.thread-band .rest .bubble p .' + lang, sheetName: '#sheet .name', sheetRow: '#sheet .row .d .' + lang, sheetAmt: '#sheet .row .a', total: '#sheet .total b', machine: '#sheet .machine-line span', rec: '#sheet .record-block .when', tape: '.tape-label.sample .' + lang, tile: '.tile .nm', strip: '.rstrip .am', price: '.plan .price b', planH: '.plan h3', planLi: '.plan ul.' + lang + ' li', composer: '.composer-field .' + lang, footer: '.trust-line .stack .' + lang, wordmark: '.wordmark', chip: '.date-chip .' + lang, fig: '.mcol .fs', toggle: '.lt-en', pkLabel: '.pk-label b .' + lang, hint: '.cut-rail .hint .' + lang };
    const out = {};
    for (const k in pick) { const el = document.querySelector(pick[k]); if (!el) { out[k] = 'MISSING ' + pick[k]; continue; } const cs = getComputedStyle(el); out[k] = [cs.fontFamily.split(',').slice(0, 2).join(','), cs.fontWeight, cs.fontSize, 'stretch ' + cs.fontStretch, 'fvs ' + cs.fontVariationSettings, 'opsz ' + cs.fontOpticalSizing, cs.fontVariantNumeric, 'ls ' + cs.letterSpacing, cs.fontStyle].join(' | '); }
    const fams = new Set(); document.querySelectorAll('body *').forEach(e => fams.add(getComputedStyle(e).fontFamily.split(',')[0].trim()));
    const maxW = {}; document.querySelectorAll('body *').forEach(e => { const cs = getComputedStyle(e); const f = cs.fontFamily.split(',')[0].trim(); const w = +cs.fontWeight; if (e.textContent.trim() && (!maxW[f] || w > maxW[f])) maxW[f] = w; });
    // which fonts actually rendered (document.fonts loaded faces)
    const loaded = [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family + ' ' + f.weight + ' ' + f.style);
    return { out, firstFamilies: [...fams], maxWeightByFirstFamily: maxW, loaded: [...new Set(loaded)].slice(0, 40) };
  }, lang);
  console.log('FONTS zh', JSON.stringify(await fonts('zh'), null, 1));
  // overflow + contrast spot + targets, in both languages
  const audit = async () => p.evaluate(() => {
    const lum = (c) => { const m = c.match(/[\d.]+/g).map(Number); const f = v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }; return [.2126 * f(m[0]) + .7152 * f(m[1]) + .0722 * f(m[2]), m.length > 3 ? m[3] : 1]; };
    const bgOf = (el) => { let e = el; while (e) { const c = getComputedStyle(e).backgroundColor; const m = c.match(/[\d.]+/g).map(Number); if (!(m.length > 3 && m[3] === 0)) return c; e = e.parentElement; } return 'rgb(11,18,22)'; };
    const low = []; const seen = new Set();
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) { const n = w.currentNode; if (!n.textContent.trim()) continue; const el = n.parentElement; if (el.closest('script,style,.sr,[aria-hidden="true"]')) continue; const cs = getComputedStyle(el); if (cs.display === 'none' || cs.visibility === 'hidden') continue; const r = el.getBoundingClientRect(); if (!r.width) continue;
      const [l1] = lum(cs.color), [l2] = lum(bgOf(el)); const ratio = (Math.max(l1, l2) + .05) / (Math.min(l1, l2) + .05); const fs = parseFloat(cs.fontSize); const big = fs >= 24 || (fs >= 18.66 && +cs.fontWeight >= 700);
      if (ratio < (big ? 3 : 4.5)) { const k = cs.color + ' on ' + bgOf(el) + ' ' + ratio.toFixed(2); if (!seen.has(k)) { seen.add(k); low.push(k + '  fs ' + fs + '  "' + n.textContent.trim().slice(0, 30) + '"  <' + el.tagName.toLowerCase() + '.' + el.className + '>'); } } }
    const tiny = {}; const w2 = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (w2.nextNode()) { const n = w2.currentNode; if (!n.textContent.trim()) continue; const el = n.parentElement; if (el.closest('script,style,.sr')) continue; const cs = getComputedStyle(el); if (cs.display === 'none' || cs.visibility === 'hidden') continue; const fs = Math.round(parseFloat(cs.fontSize) * 10) / 10; if (fs < 11) { const zone = el.closest('#sheet') ? 'hero sheet' : el.closest('.thread-band') ? 'thread lane' : el.closest('.leaf') ? 'leaf(aria-hidden)' : el.closest('.stage') ? 'later stage' : 'page'; tiny[zone] = tiny[zone] || {}; tiny[zone][fs] = (tiny[zone][fs] || 0) + 1; } }
    const over = []; document.querySelectorAll('body *').forEach(e => { const r = e.getBoundingClientRect(); if (r.width && (r.right > innerWidth + 0.5 || r.left < -0.5) && getComputedStyle(e).visibility !== 'hidden' && !e.closest('.sr,.fly-layer,.catch-layer,.skip')) { const par = e.closest('.hero-stage,.stage,.slab'); over.push((e.className || e.tagName) + ' ' + Math.round(r.left) + '..' + Math.round(r.right) + (par ? ' (inside clipped stage)' : '')); } });
    const clip = []; document.querySelectorAll('.msg,.bubble p,.tile .nm,.rstrip,.plan li,.cta-trial,.trial-terms,.hero-claim h1,.pk-label,.review-state,.token-state,.fnm,.detail,.rank li,.tape-label,.composer-field,.hint,.record-block .id').forEach(e => { if (getComputedStyle(e).display === 'none') return; if (e.scrollWidth > e.clientWidth + 1 || e.scrollHeight > e.clientHeight + 2) clip.push((e.className || e.tagName) + ' sw' + e.scrollWidth + '>cw' + e.clientWidth + ' sh' + e.scrollHeight + '>ch' + e.clientHeight + ' "' + e.textContent.trim().slice(0, 24) + '"'); });
    const small = []; document.querySelectorAll('a,button,input').forEach(e => { const r = e.getBoundingClientRect(); if (r.width && (r.width < 44 || r.height < 44)) small.push((e.className || e.tagName) + ' ' + Math.round(r.width) + 'x' + Math.round(r.height) + ' "' + e.textContent.trim().slice(0, 16) + '"'); });
    const gutter = []; document.querySelectorAll('h1,p,a,button,li,.tape-label').forEach(e => { const cs = getComputedStyle(e); if (cs.display === 'none' || cs.visibility === 'hidden' || e.closest('.sr,.skip,[aria-hidden="true"]')) return; const r = e.getBoundingClientRect(); if (r.width && (r.left < 15.5 || r.right > innerWidth - 15.5) && e.textContent.trim()) gutter.push((e.className || e.tagName) + ' ' + Math.round(r.left) + '..' + Math.round(r.right)); });
    return { lowContrast: low, tinyTextCountsBySize: tiny, outsideViewport: over.slice(0, 12), clippedText: clip, smallTargets: small, insideGutter: [...new Set(gutter)].slice(0, 15), docH: document.documentElement.scrollHeight, scrollW: document.documentElement.scrollWidth };
  });
  console.log('AUDIT zh', JSON.stringify(await audit(), null, 1));
  await p.click('.lang-toggle'); await p.waitForTimeout(500);
  console.log('FONTS en', JSON.stringify((await fonts('en')).out, null, 1));
  console.log('AUDIT en', JSON.stringify(await audit(), null, 1));
  // EN state: any visible CJK? ZH state handled by reading. Collect visible text in EN.
  const cjkInEn = await p.evaluate(() => { const out = []; const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); while (w.nextNode()) { const n = w.currentNode; const t = n.textContent.trim(); if (!t || !/[一-鿿]/.test(t)) continue; const el = n.parentElement; if (el.closest('script,style')) continue; const cs = getComputedStyle(el); if (cs.display === 'none' || cs.visibility === 'hidden') continue; let e = el, hid = false; while (e) { const c = getComputedStyle(e); if (c.display === 'none' || c.visibility === 'hidden') { hid = true; break; } e = e.parentElement; } if (!hid) out.push(t.slice(0, 40) + ' <' + el.className + '>'); } return out; });
  console.log('VISIBLE CJK IN EN STATE', JSON.stringify(cjkInEn));
  const enText = await p.evaluate(() => document.body.innerText);
  require('fs').writeFileSync('/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/text_en.txt', enText);
  await p.click('.lang-toggle'); await p.waitForTimeout(500);
  require('fs').writeFileSync('/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/text_zh.txt', await p.evaluate(() => document.body.innerText));
  await b.close();
})();
