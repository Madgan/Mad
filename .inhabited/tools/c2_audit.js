// Critic cycle 2: first-screen rects, pixel-based contrast audit, text sizes, fonts, targets.
const { chromium } = require('playwright');
const { PNG } = (() => { try { return require('/root/.npm/_npx/7d8c9df4b2b29034/node_modules/pngjs'); } catch (e) { return {}; } })();
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0';
const [lang, W, Hh, mode] = process.argv.slice(2);
function lum(c) { const f = v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }; return .2126 * f(c[0]) + .7152 * f(c[1]) + .0722 * f(c[2]); }
function cr(a, b) { const x = lum(a), y = lum(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); }
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: +W, height: +Hh }, deviceScaleFactor: 1, reducedMotion: mode === 'reduce' ? 'reduce' : 'no-preference' });
  const p = await ctx.newPage();
  await p.goto(URL); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(700);
  if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(500); }
  // first-screen rects
  const fs = await p.evaluate(() => {
    const q = s => { const e = document.querySelector(s); if (!e) return s + ': MISSING'; const r = e.getBoundingClientRect(); const cs = getComputedStyle(e); const cx = r.left + r.width / 2, cy = r.top + r.height / 2; const top = document.elementFromPoint(cx, cy); return s + ': x ' + Math.round(r.left) + '-' + Math.round(r.right) + ' y ' + Math.round(r.top) + '-' + Math.round(r.bottom) + ' vis=' + cs.visibility + ' fs=' + cs.fontSize + ' topEl=' + (top ? (top.tagName + '.' + (top.className.baseVal !== undefined ? top.className.baseVal : top.className)).slice(0, 50) : '-') + ' inside=' + (e.contains(top) || top === e); };
    return ['#hero .cta-trial', '#hero .trial-terms', '#sheet', 'header.topbar .cta-trial', '.lang-toggle', '.signin', '#hero h1', '.hero-stage', '.cut-rail', '.replay', '#sheet .total', '#sheet .crossing', '#sheet .record-block', '#sheet .machine-line', '.stage-caption'].map(q).concat(['H=' + document.documentElement.scrollHeight + ' SW=' + document.documentElement.scrollWidth + ' body data-ep=' + document.body.getAttribute('data-ep') + ' bg=' + getComputedStyle(document.body).backgroundColor]);
  });
  console.log('== first screen ' + lang + ' ' + W + 'x' + Hh + ' ' + (mode || 'normal') + '\n' + fs.join('\n'));
  // walk and audit
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  const seen = new Set(); const fails = []; let total = 0; const small = []; const fonts = {}; const grounds = {};
  await p.mouse.move(+W / 2, +Hh / 2);
  for (let y = 0; ; y += Math.round(+Hh * 0.6)) {
    const yy = Math.min(y, H - +Hh);
    // wheel there so scroll sequences complete
    let cur = await p.evaluate(() => scrollY); while (cur < yy) { const d = Math.min(80, yy - cur); await p.mouse.wheel(0, d); cur += d; await p.waitForTimeout(12); }
    await p.waitForTimeout(500);
    const buf = await p.screenshot();
    const png = PNG.sync.read(buf);
    const items = await p.evaluate(() => {
      const out = []; const vh = innerHeight, vw = innerWidth;
      const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let n; const done = new Set();
      while (n = w.nextNode()) {
        const t = n.textContent.replace(/\s+/g, ' ').trim(); if (!t) continue; const el = n.parentElement; if (!el || done.has(el)) continue;
        const cs = getComputedStyle(el); if (cs.visibility === 'hidden' || cs.display === 'none') continue;
        const range = document.createRange(); range.selectNodeContents(n); const r = range.getBoundingClientRect();
        if (r.width < 2 || r.height < 2) continue; if (r.top < 56 || r.bottom > vh || r.left < 0 || r.right > vw) continue;
        // skip sr-only
        if (r.width <= 2 && r.height <= 2) continue;
        // occlusion: element at centre must be el or inside
        const top = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2); if (!top || !(el.contains(top) || top.contains(el))) continue;
        done.add(el);
        let path = ''; let e = el, k = 0; while (e && k < 4) { path = e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') + (typeof e.className === 'string' && e.className ? '.' + e.className.trim().split(/\s+/).slice(0, 2).join('.') : '') + (path ? ' > ' + path : ''); e = e.parentElement; k++; }
        out.push({ t: t.slice(0, 40), path, x: r.left, y: r.top, w: r.width, h: r.height, color: cs.color, fs: parseFloat(cs.fontSize), fw: cs.fontWeight, ff: cs.fontFamily.split(',')[0].replace(/"/g, ''), fvn: cs.fontVariantNumeric, fst: cs.fontStretch, fvs: cs.fontVariationSettings, fsty: cs.fontStyle, ay: r.top + scrollY, tr: (function () { let s = 1; let q = el; while (q) { const m = getComputedStyle(q).transform; if (m && m !== 'none') { const v = m.match(/matrix\(([^)]+)\)/); if (v) { const a = v[1].split(',').map(Number); s *= Math.hypot(a[0], a[1]); } } q = q.parentElement; } return s; })() });
      }
      return { items: out, ep: document.body.getAttribute('data-ep'), bg: getComputedStyle(document.body).backgroundColor };
    });
    grounds[items.ep + ' ' + items.bg] = (grounds[items.ep + ' ' + items.bg] || 0) + 1;
    for (const it of items.items) {
      const key = it.path + '|' + it.t + '|' + Math.round(it.ay); if (seen.has(key)) continue; seen.add(key); total++;
      const m = it.color.match(/[\d.]+/g).map(Number); const fg = m.slice(0, 3);
      // dominant bg colour in the text rect expanded by 2px
      const hist = new Map(); const x0 = Math.max(0, Math.floor(it.x) - 2), x1 = Math.min(png.width - 1, Math.ceil(it.x + it.w) + 2), y0 = Math.max(0, Math.floor(it.y) - 2), y1 = Math.min(png.height - 1, Math.ceil(it.y + it.h) + 2);
      for (let yy2 = y0; yy2 <= y1; yy2++) for (let xx = x0; xx <= x1; xx++) { const i = (yy2 * png.width + xx) * 4; const k = (png.data[i] >> 2 << 16) | (png.data[i + 1] >> 2 << 8) | (png.data[i + 2] >> 2); hist.set(k, (hist.get(k) || 0) + 1); }
      // candidates: top 2 colours; bg = most frequent that is not close to fg
      const arr = [...hist.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4).map(e => [((e[0] >> 16) & 63) << 2, ((e[0] >> 8) & 63) << 2, (e[0] & 63) << 2, e[1]]);
      let bg = arr[0]; for (const c of arr) { if (Math.abs(c[0] - fg[0]) + Math.abs(c[1] - fg[1]) + Math.abs(c[2] - fg[2]) > 40) { bg = c; break; } }
      const ratio = cr(fg, bg); const px = it.fs * it.tr; const large = px >= 24 || (px >= 18.66 && +it.fw >= 700);
      const need = large ? 3 : 4.5;
      if (ratio < need) fails.push({ ratio: ratio.toFixed(2), need, px: px.toFixed(1), fw: it.fw, fg: fg.join(','), bg: bg.slice(0, 3).join(','), ep: items.ep, t: it.t, path: it.path });
      if (px < 11.95) small.push(px.toFixed(1) + ' ' + it.t + ' @ ' + it.path.split(' > ').slice(-2).join(' > '));
      const fk = it.ff + ' w' + it.fw + (it.fsty !== 'normal' ? ' ' + it.fsty : '') + (it.fst !== '100%' ? ' stretch ' + it.fst : ''); fonts[fk] = fonts[fk] || { n: 0, eg: [] }; fonts[fk].n++; if (fonts[fk].eg.length < 3) fonts[fk].eg.push(it.t.slice(0, 18) + ' <' + it.path.split(' > ').slice(-1)[0] + ' ' + px.toFixed(0) + 'px' + (it.fvs !== 'normal' ? ' ' + it.fvs : '') + '>');
    }
    if (yy >= H - +Hh) break;
  }
  console.log('\n== grounds seen (body data-ep, bg): ' + JSON.stringify(grounds));
  console.log('== text runs audited: ' + total + '   contrast fails: ' + fails.length);
  for (const f of fails) console.log('  ' + f.ratio + ' (need ' + f.need + ') ' + f.px + 'px w' + f.fw + ' fg ' + f.fg + ' on ' + f.bg + ' ep=' + f.ep + ' "' + f.t + '" ' + f.path);
  const u11 = small.filter(s => parseFloat(s) < 10.95);
  console.log('== runs under 11px: ' + u11.length + '; under 12px: ' + small.length); for (const s of u11) console.log('  ' + s);
  console.log('== fonts'); for (const k of Object.keys(fonts).sort()) console.log('  ' + k + ' x' + fonts[k].n + ' e.g. ' + fonts[k].eg.join(' ; '));
  // targets
  await p.evaluate(() => scrollTo(0, 0));
  const tg = await p.evaluate(() => [...document.querySelectorAll('a,button,input,[role=switch],[role=button]')].filter(e => getComputedStyle(e).visibility !== 'hidden' && e.getBoundingClientRect().width > 0).map(e => { const r = e.getBoundingClientRect(); return { w: Math.round(r.width), h: Math.round(r.height), t: (e.textContent || e.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim().slice(0, 30), c: e.className }; }).filter(o => o.w < 44 || o.h < 44));
  console.log('== targets under 44: ' + JSON.stringify(tg));
  await b.close();
})();
