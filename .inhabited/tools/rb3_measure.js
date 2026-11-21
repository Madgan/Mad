// Rebuild 3: where each margin note stands against the thing it is about (page y, px). node rb3_measure.js <w> <h> [lang]
const { chromium } = require('playwright');
const w = +process.argv[2] || 1280, h = +process.argv[3] || 800, lang = process.argv[4] || 'zh';
const T = { story: ['.stub-row', '.doc-bubble', '.doc-bubble .file-bar'], reports: ['.month-bars', '.rank-h', '#report-msg>.file-bar'], import: ['.slot-row', '.review-card', '.review-state.rs-wait'], pro: ['#pro-stage', '.token-state.ts-on', '.token-btn'], pricing: ['.plans'] };
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0' + (lang === 'en' ? '&lang=en' : '')); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
  const out = await p.evaluate((T) => {
    const res = {};
    for (const id in T) {
      const sec = document.getElementById(id), nts = [...sec.querySelectorAll('.tc>.notice .nt')], tc = sec.querySelector('.tc').getBoundingClientRect();
      const att = sec.querySelector('.tc>.stage,.tc>.attach').getBoundingClientRect();
      res[id] = { tcTop: Math.round(tc.top + scrollY), lane: [Math.round(att.left), Math.round(att.right)], attTop: Math.round(att.top + scrollY), attH: Math.round(att.height), rows: T[id].map((sel, i) => { const t = sec.querySelector(sel).getBoundingClientRect(), n = nts[i] ? nts[i].getBoundingClientRect() : null; return { sel, target: +(t.top - att.top).toFixed(1), note: n ? +(n.top - att.top).toFixed(1) : null, noteH: n ? Math.round(n.height) : null, noteX: n ? [Math.round(n.left), Math.round(n.right)] : null }; }) };
    }
    return res;
  }, T);
  for (const id in out) { console.log(id, 'tcTop', out[id].tcTop, 'lane x', out[id].lane.join(' to '), 'attachment top', out[id].attTop, 'height', out[id].attH); for (const r of out[id].rows) console.log('   ', r.sel.padEnd(26), 'target', String(r.target).padStart(6), 'note', String(r.note).padStart(6), 'diff', r.note == null ? '' : (r.note - r.target).toFixed(1), 'note h', r.noteH, 'x', r.noteX && r.noteX.join(' to ')); }
  const sheet = await p.evaluate(() => { const s = document.getElementById('sheet').getBoundingClientRect(); window.SIS.beat({ tear: 1, drop: true, filed: true, tick: 3 }); const l = document.querySelector('#story .leaf').getBoundingClientRect(); return { sheet: [s.left, s.right], leaf: [l.left, l.right], sw: document.documentElement.scrollWidth }; });
  console.log('sheet x', sheet.sheet.map(v => v.toFixed(1)).join(' to '), '| landed leaf x', sheet.leaf.map(v => v.toFixed(1)).join(' to '), '| scrollWidth', sheet.sw, '| errors', JSON.stringify(errs));
  await b.close();
})();
