// Rebuild 3: the language switch by every route. With script: click, Space, Enter, under reduced motion, twice quickly.
// After each: data-lang, lang, the checkbox's checked state, what is drawn (h1 text shown), thumb position, title.
// With scripts off: click and Space (drawn text and thumb only; nothing can be read from a page without script except by pixels,
// so the DOM is read through Playwright's own locators, which need no page script).
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0';
(async () => {
  const b = await chromium.launch(); const errs = [];
  const state = p => p.evaluate(() => { const h = document.documentElement, t = document.getElementById('lang-en'), vis = e => getComputedStyle(e).display !== 'none' && getComputedStyle(e).visibility !== 'hidden'; const h1 = [...document.querySelectorAll('h1 .zh, h1 .en')].filter(vis).map(e => e.className).join('+'); const both = [...document.querySelectorAll('.zh,.en')].filter(e => getComputedStyle(e).display !== 'none'); const zhShown = both.filter(e => e.classList.contains('zh') && getComputedStyle(e).visibility !== 'hidden' && e.getClientRects().length).length, enShown = both.filter(e => e.classList.contains('en') && getComputedStyle(e).visibility !== 'hidden' && e.getClientRects().length).length; return 'data-lang ' + h.dataset.lang + ' | lang ' + h.lang + ' | checked ' + t.checked + ' | h1 shows ' + h1 + ' | .zh shown ' + zhShown + ', .en shown ' + enShown + ' | thumb x ' + Math.round(document.querySelector('.lt-thumb').getBoundingClientRect().left - document.querySelector('.lt-track').getBoundingClientRect().left) + ' | title ' + document.title.slice(0, 22) + ' | scrollY ' + Math.round(scrollY); });
  for (const rm of [false, true]) {
    const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: rm ? 'reduce' : 'no-preference' })).newPage();
    p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
    await p.goto(URL); await p.waitForTimeout(700);
    console.log(rm ? '-- with script, reduced motion' : '-- with script'); console.log('   at load:        ', await state(p));
    await p.click('.lang-toggle'); await p.waitForTimeout(250); console.log('   click:          ', await state(p));
    await p.click('.lang-toggle'); await p.waitForTimeout(250); console.log('   click again:    ', await state(p));
    await p.focus('#lang-en'); await p.keyboard.press('Space'); await p.waitForTimeout(250); console.log('   Space:          ', await state(p));
    await p.keyboard.press('Enter'); await p.waitForTimeout(250); console.log('   Enter:          ', await state(p));
    await p.click('.lang-toggle'); await p.click('.lang-toggle'); await p.waitForTimeout(400); console.log('   two fast clicks:', await state(p), '(the second lands while the thumb travels and is ignored)');
    await p.click('.lang-toggle'); await p.waitForTimeout(300); console.log('   back to Chinese:', await state(p));
    await p.reload(); await p.waitForTimeout(600); console.log('   after a reload: ', await state(p));
    await p.close();
  }
  { // scripts off
    const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, javaScriptEnabled: false })).newPage();
    await p.goto(URL); await p.waitForTimeout(700);
    const st = async () => 'checked ' + await p.locator('#lang-en').isChecked() + ' | h1 .zh visible ' + await p.locator('h1 .zh').isVisible() + ', h1 .en visible ' + await p.locator('h1 .en').isVisible() + ' | visible .cta-l text "' + (await p.locator('#hero .cta-l span:visible').first().innerText()) + '" | thumb x ' + Math.round((await p.locator('.lt-thumb').boundingBox()).x - (await p.locator('.lt-track').boundingBox()).x);
    console.log('-- scripts off'); console.log('   at load:', await st());
    await p.click('.lang-toggle'); await p.waitForTimeout(200); console.log('   click:  ', await st());
    await p.focus('#lang-en'); await p.keyboard.press('Space'); await p.waitForTimeout(200); console.log('   Space:  ', await st());
    await p.keyboard.press('Space'); await p.waitForTimeout(200); console.log('   Space:  ', await st());
    await p.close();
  }
  console.log('errors', JSON.stringify(errs));
  await b.close();
})();
