// First paint with slow fonts, focus marks, picker taps in real time, language cut with scroll anchor.
const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
const O = '/home/user/Mad/.inhabited/v1_critic/screens/';
(async () => {
  const b = await chromium.launch();
  {
    const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
    await p.route(/fonts\.(googleapis|gstatic)\.com/, async r => { await new Promise(s => setTimeout(s, 1500)); r.continue(); });
    const t0 = Date.now();
    await p.goto(URL, { waitUntil: 'commit' });
    const want = [0, 50, 150, 400, 700, 1000];
    for (const wt of want) {
      const wait = wt - (Date.now() - t0); if (wait > 0) await p.waitForTimeout(wait);
      const st = await p.evaluate(() => { const s = document.querySelector('#sheet'); return s ? document.documentElement.className + ' | sheet ' + getComputedStyle(s).visibility + ' | ' + document.querySelector('.stage-caption').innerText.trim().replace(/\n/g, ' ') : 'no body yet'; }).catch(() => 'n/a');
      const at = Date.now() - t0;
      await p.screenshot({ path: O + 'rebuild1_firstpaint_' + String(wt).padStart(4, '0') + '.png', clip: { x: 0, y: 0, width: 390, height: 640 } });
      console.log('firstpaint target', wt, 'read@', at, 'shot done@', Date.now() - t0, ':', st);
    }
    await p.close();
  }
  {
    const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
    const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
    await p.goto(URL + '?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
    for (let i = 0; i < 6; i++) await p.keyboard.press('Tab');
    await p.screenshot({ path: O + 'rebuild1_focus_cta_390.png', clip: { x: 0, y: 0, width: 390, height: 700 } });
    for (let i = 0; i < 3; i++) await p.keyboard.press('Tab');
    await p.waitForTimeout(200);
    await p.screenshot({ path: O + 'rebuild1_focus_tile_390.png' });
    console.log('focused', await p.evaluate(() => document.activeElement.className));
    await p.evaluate(() => scrollTo(0, 120)); await p.waitForTimeout(200);
    await p.click('.tile[data-i="2"]');
    await p.waitForTimeout(150); await p.screenshot({ path: O + 'rebuild1_tap_client_mid_390.png' });
    await p.waitForTimeout(500); await p.screenshot({ path: O + 'rebuild1_tap_client_after_390.png' });
    await p.click('.rstrip[data-id="photo"]');
    await p.waitForTimeout(90); await p.screenshot({ path: O + 'rebuild1_tap_rate_mid_390.png' });
    await p.waitForTimeout(600); await p.screenshot({ path: O + 'rebuild1_tap_rate_after_390.png' });
    await p.evaluate(() => document.querySelector('#import-stage').scrollIntoView({ block: 'start' })); await p.waitForTimeout(300);
    const before = await p.evaluate(() => Math.round(document.querySelector('#import-stage').getBoundingClientRect().top));
    await p.click('.lang-toggle'); await p.waitForTimeout(300);
    const after = await p.evaluate(() => Math.round(document.querySelector('#import-stage').getBoundingClientRect().top));
    console.log('lang anchor: import stage top before', before, 'after', after, 'lang', await p.evaluate(() => document.documentElement.lang));
    console.log('errors', JSON.stringify(errs));
    await p.close();
  }
  await b.close();
})();
