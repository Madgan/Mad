// Keyboard walk from a fresh load: a screenshot at each stop that matters, and what has focus.
const { chromium } = require('playwright');
const OUT = '/home/user/Mad/.inhabited/designer/screens/';
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  const who = () => p.evaluate(() => { const e = document.activeElement; const o = getComputedStyle(e); return (e.className || e.tagName) + ' outline:' + o.outlineStyle + ' ' + o.outlineWidth + ' ' + o.outlineColor + ' shadow:' + o.boxShadow.slice(0, 40); });
  const stops = { 1: 'skip', 3: 'toggle', 5: 'topcta', 6: 'herocta', 7: 'replay', 8: 'rail', 10: 'tile', 12: 'strip_added', 13: 'strip_free' };
  for (let i = 1; i <= 13; i++) { await p.keyboard.press('Tab'); if (stops[i]) { await p.waitForTimeout(80); await p.screenshot({ path: `${OUT}focus_${String(i).padStart(2, '0')}_${stops[i]}_390.png`, clip: { x: 0, y: 0, width: 390, height: 844 } }); console.log(i, stops[i], await who()); } }
  await p.keyboard.press('Enter'); await p.waitForTimeout(600);
  console.log('Enter on free strip ->', await p.evaluate(() => document.querySelector('#sheet .fig').textContent + ' rows ' + document.querySelectorAll('#sheet .row').length));
  await p.keyboard.press('Shift+Tab'); await p.keyboard.press('Shift+Tab'); await p.keyboard.press('Shift+Tab'); await p.keyboard.press('Space'); await p.waitForTimeout(600);
  console.log('Space on tile 2 ->', await p.evaluate(() => document.querySelector('#sheet .name').textContent));
  await b.close();
})();
