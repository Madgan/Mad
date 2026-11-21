// cycle 4: find .zh strings that have no visible .en partner (and the reverse)
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const w of [390, 1280]) {
  const p = await (await b.newContext({ viewport: { width: w, height: 844 } })).newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.waitForTimeout(800);
  const vis = () => { const out = []; document.querySelectorAll('.zh,.en').forEach(e => { if (e.closest('.lang-toggle')) return; let a = e, v = e.getClientRects().length > 0; while (v && a) { const c = getComputedStyle(a); if (c.display === 'none' || c.visibility === 'hidden') v = false; a = a.parentElement; } if (v) out.push((e.parentElement.className || e.parentElement.tagName) + ' :: ' + e.textContent.trim().slice(0, 40)); }); return out; };
  const zh = await p.evaluate(vis);
  await p.click('label.lang-toggle'); await p.waitForTimeout(400);
  const en = await p.evaluate(vis);
  const zp = zh.map(s => s.split(' :: ')[0]), ep = en.map(s => s.split(' :: ')[0]);
  const cnt = a => a.reduce((m, k) => (m[k] = (m[k] || 0) + 1, m), {});
  const cz = cnt(zp), ce = cnt(ep);
  for (const k of new Set([...zp, ...ep])) if (cz[k] !== ce[k]) console.log(w, 'parent', k, 'zh', cz[k] || 0, 'en', ce[k] || 0, '|', zh.filter(s => s.startsWith(k + ' ::')).join(' / ').slice(0, 160), '||', en.filter(s => s.startsWith(k + ' ::')).join(' / ').slice(0, 160));
  }
  await b.close();
})();
