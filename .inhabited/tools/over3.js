const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
  console.log(await p.evaluate(() => { const iw = innerWidth, out = []; document.querySelectorAll('main *, header *, footer *').forEach(e => { const b = e.getBoundingClientRect(); if (b.width && b.right > iw + 1 && getComputedStyle(e).visibility !== 'hidden' && !e.closest('.thread-band')) out.push((e.className.baseVal !== undefined ? e.className.baseVal : e.className) + '<' + e.tagName + '>' + Math.round(b.left) + '..' + Math.round(b.right) + ' parent ' + e.parentElement.className); }); return out.join(' | '); }));
  await b.close();
})();
