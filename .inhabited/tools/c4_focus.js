// cycle 4: keyboard focus on the language switch: is a focus indicator drawn?
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.waitForTimeout(600);
  await p.keyboard.press('Tab'); await p.keyboard.press('Tab'); await p.keyboard.press('Tab');
  const r = await p.evaluate(() => { const a = document.activeElement; const cs = getComputedStyle(a); return { el: a.id || a.className || a.tagName, outline: cs.outlineStyle + ' ' + cs.outlineWidth + ' ' + cs.outlineColor, shadow: cs.boxShadow }; });
  console.log(JSON.stringify(r));
  await p.screenshot({ path: '/home/user/Mad/.inhabited/v1_critic/screens/c4_focus_390_toggle.png', clip: { x: 0, y: 0, width: 390, height: 60 } });
  await b.close();
})();
