// Rebuild 3: the smear's geometry as built (bars, tines, scraps), the hero gutter, and where things stand at 1280.
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const [w, h] of [[390, 844], [320, 700], [1280, 800]]) {
    const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage();
    await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
    const gut = await p.evaluate(() => { const st = document.querySelector('.hero-stage').getBoundingClientRect(); const bs = [...document.querySelectorAll('.set-end .bubble')].map(e => { const r = e.getBoundingClientRect(); return [+(r.left - st.left).toFixed(1), +(st.right - r.right).toFixed(1), e.classList.contains('out') ? 'out' : 'in']; }); return { stage: [st.left, st.right], minLeftIn: Math.min(...bs.filter(x => x[2] === 'in').map(x => x[0])), minRightOut: Math.min(...bs.filter(x => x[2] === 'out').map(x => x[1])) }; });
    await p.evaluate(() => window.SIS.seek(500)); await p.waitForTimeout(120);
    const g = await p.evaluate(() => {
      const st = document.querySelector('.hero-stage').getBoundingClientRect(), em = parseFloat(getComputedStyle(document.querySelector('.smear')).fontSize);
      const hang = [...document.querySelectorAll('.hang')].filter(e => getComputedStyle(e).visibility === 'visible').map(e => { const r = e.getBoundingClientRect(); return [+(r.left - st.left).toFixed(1), +(st.right - r.right).toFixed(1), e.innerText.trim().slice(0, 24)]; });
      const bars = [...document.querySelectorAll('.smear .tr')].map(e => ({ w: parseFloat(e.style.width) * em, len: parseFloat(e.style.height) * em, top: parseFloat(e.style.top), al: getComputedStyle(e).opacity, c: e.dataset.c }));
      const per = [...document.querySelectorAll('.smear')].map(s => ({ n: s.querySelectorAll('.tr').length, ahead: [...s.querySelectorAll('.tr')].filter(e => parseFloat(e.style.top) < 0).length }));
      let tines = [], scraps = [], perHead = [];
      document.querySelectorAll('.smear .hd').forEach(hd => {
        const pts = hd.style.clipPath.replace(/^polygon\(|\)$/g, '').split(/,(?![^(]*\))/).map(s => s.trim()); const bw = hd.parentElement.parentElement.getBoundingClientRect().width; let nt = 0, ns = 0;
        for (let i = 1; i + 5 < pts.length; i += 6) {
          const q = pts.slice(i, i + 6); const xb = parseFloat(q[0]), xa = parseFloat(q[2]); const yt = q[3].replace(/^[\d.]+% /, ''), ya = q[2].replace(/^[\d.]+% /, ''), yb = q[1].replace(/^[\d.]+% /, '');
          if (ya === yb && /em$/.test(ya) && parseFloat(yt) === 0) { scraps.push({ depth: parseFloat(ya), wpx: (xb - xa) / 100 * bw }); ns++; } else { tines.push({ wpct: xb - xa, wpx: (xb - xa) / 100 * bw, top: parseFloat(yt) || 0 }); nt++; }
        }
        perHead.push([nt, ns]);
      });
      const mm = a => a.length ? [Math.min(...a).toFixed(1), Math.max(...a).toFixed(1)] : [];
      return { em, hang, smears: per.length, barsPer: mm(per.map(x => x.n)), aheadPer: mm(per.map(x => x.ahead)), barW: [...new Set(bars.map(x => x.w.toFixed(1)))].sort((a, b) => a - b), barLen: mm(bars.map(x => x.len)), barAhead: mm(bars.filter(x => x.top < 0).map(x => -x.top)), alpha: [...new Set(bars.map(x => x.c + ':' + x.al))], tinesPer: mm(perHead.map(x => x[0])), scrapsPer: mm(perHead.map(x => x[1])), tineWpct: mm(tines.map(x => x.wpct)), tineWpx: mm(tines.map(x => x.wpx)), tineTopEm: mm(tines.filter(x => x.top > 0).map(x => x.top)), tinesOnEdge: tines.filter(x => x.top === 0).length + ' of ' + tines.length, scrapDepthEm: mm(scraps.map(x => x.depth)), scrapWpx: mm(scraps.map(x => x.wpx)) };
    });
    console.log(w + ' x ' + h, '| gutter at rest: nearest incoming bubble ' + gut.minLeftIn + ' px from the stage edge, nearest outgoing ' + gut.minRightOut + ' px; hanging message(s) at t=500: ' + JSON.stringify(g.hang));
    console.log('   smear em ' + g.em.toFixed(2) + ' px; smears ' + g.smears + '; bars per smear ' + g.barsPer.join(' to ') + ', of which ahead of the edge ' + g.aheadPer.join(' to ') + ' (by ' + g.barAhead.join(' to ') + ' em); bar widths px ' + g.barW.join(', ') + '; bar lengths px ' + g.barLen.join(' to ') + '; alpha ' + g.alpha.join(' '));
    console.log('   tines per head ' + g.tinesPer.join(' to ') + '; tine width ' + g.tineWpct.join(' to ') + ' % = ' + g.tineWpx.join(' to ') + ' px; start on the leading edge: ' + g.tinesOnEdge + ', the rest ' + g.tineTopEm.join(' to ') + ' em behind it; scraps per head ' + g.scrapsPer.join(' to ') + ', depth ' + g.scrapDepthEm.join(' to ') + ' em, width ' + g.scrapWpx.join(' to ') + ' px');
    if (w === 1280) {
      await p.evaluate(() => window.SIS.end());
      console.log('   1280 positions:', JSON.stringify(await p.evaluate(() => { const g = s => { const r = document.querySelector(s).getBoundingClientRect(); return Math.round(r.left) + '-' + Math.round(r.right) + ' y' + Math.round(r.top + scrollY) + '-' + Math.round(r.bottom + scrollY); }; return { claim: g('.hero-claim'), cta: g('#hero .hero-cta'), stage: g('.hero-stage'), sheet: g('#sheet'), console: g('.console'), note: g('.sample-note'), lane: g('#story-stage'), storyNotes: g('#story .notice'), firstNt: g('#story .nt'), chip: g('#story .date-chip'), footer: g('footer .col'), trust: g('footer .trust-line'), docH: document.documentElement.scrollHeight, ntFont: getComputedStyle(document.querySelector('#story .nt')).fontSize }; })));
    }
    await p.close();
  }
  await b.close();
})();
