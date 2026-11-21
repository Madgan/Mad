// Critic cycle 1: pixel evidence. Real-time frame loops, first-screen rects, reduced-motion walk, desktop.
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const OUT = '/home/user/Mad/.inhabited/v1_critic/screens/';
const pad = (n, w = 4) => String(n).padStart(w, '0');
const RECTS = () => {
  const vw = innerWidth, vh = innerHeight;
  const r = (el) => { if (!el) return null; const b = el.getBoundingClientRect(); const cs = getComputedStyle(el); const cx = Math.min(vw - 1, Math.max(0, b.left + b.width / 2)), cy = Math.min(vh - 1, Math.max(0, b.top + b.height / 2)); const top = document.elementFromPoint(cx, cy); return { x: Math.round(b.left), y: Math.round(b.top), w: Math.round(b.width), h: Math.round(b.height), bottom: Math.round(b.bottom), inView: b.top >= 0 && b.bottom <= vh && b.left >= 0 && b.right <= vw, vis: cs.visibility, disp: cs.display, coveredBy: top && (el === top || el.contains(top) || top.contains(el)) ? 'none' : (top ? top.tagName + '.' + (top.className && top.className.baseVal !== undefined ? top.className.baseVal : top.className) : 'null'), fs: cs.fontSize }; };
  const q = (s) => [...document.querySelectorAll(s)].filter(e => getComputedStyle(e).display !== 'none')[0];
  const terms = q('#hero .trial-terms');
  const termsText = terms ? [...terms.querySelectorAll('span')].filter(e => getComputedStyle(e).visibility !== 'hidden' && getComputedStyle(e).display !== 'none').map(e => e.textContent).join('|') : '';
  return { vw, vh, scrollW: document.documentElement.scrollWidth, docH: document.documentElement.scrollHeight, lang: document.documentElement.getAttribute('data-lang') + '/' + document.documentElement.lang, title: document.title,
    heroCta: r(q('#hero .hero-cta')), topCta: r(q('header .cta-trial')), terms: r(terms), termsText, sheet: r(q('#sheet')), toggle: r(q('.lang-toggle')), claim: r(q('.hero-claim h1')), caption: r(q('.stage-caption')), rail: r(q('.cut-rail')), stage: r(q('.hero-stage')),
    sheetFonts: [...document.querySelectorAll('#sheet *')].filter(e => e.children.length === 0 && e.textContent.trim() && getComputedStyle(e).display !== 'none' && getComputedStyle(e).visibility !== 'hidden').map(e => parseFloat(getComputedStyle(e).fontSize)).sort((a, b) => a - b) };
};
(async () => {
  const b = await chromium.launch();
  const mk = async (w, h, opt = {}) => { const ctx = await b.newContext(Object.assign({ viewport: { width: w, height: h }, deviceScaleFactor: 1 }, opt)); const p = await ctx.newPage(); return { ctx, p }; };

  // A. real-time load, 390x844 zh. Warm the font cache first so timing reflects a repeat visit, then cold as well.
  for (const lang of ['zh', 'en']) {
    const { ctx, p } = await mk(390, 844);
    await p.goto(URL + '?autoplay=0'); await p.evaluate(() => document.fonts.ready); // warm fonts
    if (lang === 'en') { /* language is not persisted? check */ }
    const t0 = Date.now();
    await p.goto(URL, { waitUntil: 'commit' });
    if (lang === 'en') { try { await p.click('.lang-toggle', { timeout: 1500 }); } catch (e) { } }
    const log = [];
    for (let i = 0; i < 44; i++) {
      const t = Date.now() - t0;
      const info = await p.evaluate(() => ({ st: (document.querySelector('.hero-stage') || {}).dataset ? document.querySelector('.hero-stage').dataset.state : '', cap: (document.querySelector('.stage-caption') || {}).innerText, rd: (document.querySelector('.readout') || {}).textContent })).catch(() => ({}));
      const f = `rt_load_${lang}_${pad(i, 2)}_t${pad(t)}.png`;
      await p.screenshot({ path: OUT + f, clip: { x: 0, y: 0, width: 390, height: 700 } });
      log.push(f + ' ' + JSON.stringify(info));
      if (t > 4300) break;
    }
    console.log('A real-time load ' + lang + '\n  ' + log.join('\n  '));
    await ctx.close();
  }

  // B. first screen rects: zh/en x (rest, reduced) at 390x844, and 390x700
  for (const [w, h] of [[390, 844], [390, 700]]) for (const rm of [false, true]) for (const lang of ['zh', 'en']) {
    const { ctx, p } = await mk(w, h, { reducedMotion: rm ? 'reduce' : 'no-preference' });
    await p.goto(URL); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(rm ? 600 : 3600);
    if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(400); }
    const f = `first_${w}x${h}_${lang}_${rm ? 'rm' : 'rest'}.png`;
    await p.screenshot({ path: OUT + f });
    console.log('B ' + f + ' ' + JSON.stringify(await p.evaluate(RECTS)));
    await ctx.close();
  }

  // C. reduced-motion walk top to bottom, zh and en; also the default-motion walk in zh (native wheel so scroll sequences play)
  for (const [tag, rm, lang] of [['rm_zh', true, 'zh'], ['rm_en', true, 'en'], ['walk_zh', false, 'zh']]) {
    const { ctx, p } = await mk(390, 844, { reducedMotion: rm ? 'reduce' : 'no-preference' });
    await p.goto(URL); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(rm ? 600 : 3400);
    if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(400); }
    const H = await p.evaluate(() => document.documentElement.scrollHeight);
    let i = 0;
    for (let y = 0; y < H; y += 760) {
      if (rm) await p.evaluate(yy => scrollTo(0, yy), y); else { const cur = await p.evaluate(() => scrollY); for (let d = cur; d < y; d += 76) { await p.mouse.wheel(0, 76); await p.waitForTimeout(20); } }
      await p.waitForTimeout(500);
      await p.screenshot({ path: OUT + `${tag}_${pad(i, 2)}_y${pad(await p.evaluate(() => Math.round(scrollY)), 5)}.png` }); i++;
    }
    console.log('C ' + tag + ' docH ' + H + ' frames ' + i);
    await ctx.close();
  }

  // D. scroll-driven story sequence in motion: fine steps through #story, real wheel, 390x844
  {
    const { ctx, p } = await mk(390, 844);
    await p.goto(URL); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(3400);
    const top = await p.evaluate(() => Math.round(document.querySelector('#story-stage').getBoundingClientRect().top + scrollY));
    await p.evaluate(y => scrollTo(0, y), top - 760); await p.waitForTimeout(400);
    for (let i = 0; i < 12; i++) { await p.mouse.wheel(0, 60); await p.waitForTimeout(260); await p.screenshot({ path: OUT + `story_scroll_${pad(i, 2)}_y${pad(await p.evaluate(() => Math.round(scrollY)), 5)}.png` }); }
    await ctx.close();
  }

  // E. client tap in real time (S3), frames
  {
    const { ctx, p } = await mk(390, 844);
    await p.goto(URL); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(3400);
    const bx = await p.locator('.tile[data-i="1"]').boundingBox();
    const t0 = Date.now(); await p.mouse.click(bx.x + bx.width / 2, bx.y + bx.height / 2);
    for (let i = 0; i < 8; i++) { const t = Date.now() - t0; await p.screenshot({ path: OUT + `tap_client_${pad(i, 2)}_t${pad(t)}.png`, clip: { x: 0, y: 0, width: 390, height: 844 } }); }
    await ctx.close();
  }

  // F. desktop 1280x800: rest zh/en, S1 mid (page clock), walk
  {
    const { ctx, p } = await mk(1280, 800);
    await p.goto(URL + '?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(600);
    for (const t of [300, 900, 1250, 1700, 2000]) { await p.evaluate(tt => window.SIS.seek(tt), t); await p.waitForTimeout(120); await p.screenshot({ path: OUT + `d1280_s1_t${pad(t)}.png` }); }
    await p.evaluate(() => window.SIS.end && window.SIS.end()); await p.waitForTimeout(300);
    await p.screenshot({ path: OUT + 'd1280_rest_zh.png' });
    console.log('F desktop rects ' + JSON.stringify(await p.evaluate(RECTS)));
    const H = await p.evaluate(() => document.documentElement.scrollHeight); let i = 0;
    for (let y = 700; y < H; y += 700) { const cur = await p.evaluate(() => scrollY); for (let d = cur; d < y; d += 100) { await p.mouse.wheel(0, 100); await p.waitForTimeout(20); } await p.waitForTimeout(500); await p.screenshot({ path: OUT + `d1280_walk_${pad(++i, 2)}.png` }); }
    await ctx.close();
  }
  await b.close();
})();
