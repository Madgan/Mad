const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(600);
  console.log(JSON.stringify(await p.evaluate(() => {
    const arial = [], heavyCjk = [], width = [];
    document.querySelectorAll('body *').forEach(e => { const cs = getComputedStyle(e); const own = [...e.childNodes].filter(n => n.nodeType === 3 && n.textContent.trim()).map(n => n.textContent.trim()).join(' ');
      if (cs.fontFamily.split(',')[0].trim() === 'Arial') arial.push(e.tagName + '.' + e.className + ' "' + own.slice(0, 20) + '"');
      if (own && /[一-鿿]/.test(own) && +cs.fontWeight > 700) heavyCjk.push(e.className + ' ' + cs.fontWeight + ' "' + own.slice(0, 16) + '"');
      if (cs.fontStretch !== '100%') width.push(e.className + ' ' + cs.fontStretch); });
    const kanit = []; document.querySelectorAll('body *').forEach(e => { const cs = getComputedStyle(e); if (cs.fontFamily.split(',')[0].trim() === 'Kanit') kanit.push(e.className + ' "' + e.textContent.slice(0, 20) + '" ' + cs.fontStyle); });
    const st = [...document.styleSheets].flatMap(s => { try { return [...s.cssRules] } catch (e) { return [] } });
    const kanitRules = st.filter(r => r.cssText && /f-fly/.test(r.cssText)).map(r => r.selectorText);
    const radius = {}; document.querySelectorAll('body *').forEach(e => { const r = getComputedStyle(e).borderTopLeftRadius; radius[r] = (radius[r] || 0) + 1; });
    const shadows = new Set(); document.querySelectorAll('body *').forEach(e => { const s = getComputedStyle(e).boxShadow; if (s !== 'none') shadows.add(s); });
    const blur = []; document.querySelectorAll('body *').forEach(e => { const cs = getComputedStyle(e); if (cs.backdropFilter !== 'none' || (cs.filter !== 'none')) blur.push(e.className + ' ' + cs.filter + ' ' + cs.backdropFilter); if (/gradient/.test(cs.backgroundImage) && !/repeating/.test(cs.backgroundImage)) blur.push('GRADIENT ' + e.className + ' ' + cs.backgroundImage.slice(0, 80)); });
    const bgs = {}; document.querySelectorAll('body *').forEach(e => { const c = getComputedStyle(e).backgroundColor; if (c !== 'rgba(0, 0, 0, 0)') bgs[c] = (bgs[c] || 0) + 1; });
    return { arial, heavyCjk, width, kanit, kanitRules, radius, shadows: [...shadows], blurOrGradient: blur, bgs };
  }), null, 1));
  // lane geometry at rest and catch chip size
  console.log(JSON.stringify(await p.evaluate(() => { const r = e => { const b = document.querySelector(e).getBoundingClientRect(); return [Math.round(b.left), Math.round(b.top), Math.round(b.width), Math.round(b.height)] }; return { band: r('.thread-band'), sheet: r('#sheet'), stage: r('.hero-stage'), bubble0: r('.thread-band .rest .bubble'), shot: r('.thread-band .rest .shot'), crossing: r('#sheet .crossing'), record: r('#sheet .record-block'), lock: r('.tile .lock i'), strokeW: getComputedStyle(document.querySelector('#sheet .crossing .stroke')).strokeWidth, strikeW: getComputedStyle(document.querySelector('#sheet .bill-to .strike path')).strokeWidth } })));
  await p.evaluate(() => window.SIS.seek(470)); await p.waitForTimeout(100);
  console.log('catch chip at 470ms', JSON.stringify(await p.evaluate(() => [...document.querySelectorAll('.catch-layer *')].filter(e => getComputedStyle(e).visibility === 'visible' && e.getBoundingClientRect().width).map(e => { const b = e.getBoundingClientRect(), cs = getComputedStyle(e); return [e.className, e.textContent.slice(0, 24), Math.round(b.left), Math.round(b.top), Math.round(b.width), Math.round(b.height), cs.fontSize, cs.fontFamily.split(',')[0], cs.fontStyle, cs.backgroundColor, cs.color] }))));
  await p.screenshot({ path: '/home/user/Mad/.inhabited/v1_critic/screens/stage_zoom_t0470.png', clip: { x: 0, y: 176, width: 390, height: 336 } });
  await b.close();
})();
