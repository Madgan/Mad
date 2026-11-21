// cycle 3: draft first screen, a client re-cut in frames, import filling by scroll, approve and token states, computed contrast
const { chromium } = require('playwright');
const S = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/';
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.waitForTimeout(800);
  // contrast, computed: text colour against the nearest opaque background (body ground per episode)
  const con = await p.evaluate(() => {
    const lum = c => { const m = c.match(/[\d.]+/g).map(Number); const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(m[0]) + 0.7152 * f(m[1]) + 0.0722 * f(m[2]); };
    const bgOf = el => { for (let a = el; a; a = a.parentElement) { const c = getComputedStyle(a).backgroundColor; const m = c.match(/[\d.]+/g); if (m && (m.length < 4 || +m[3] === 1)) return c; if (a.matches && a.matches('.ep,footer')) { const ep = a.dataset.ep; return ep === 'month' ? 'rgb(11,35,70)' : ep === 'dayone' ? 'rgb(42,22,6)' : 'rgb(11,18,22)'; } } return 'rgb(11,18,22)'; };
    const out = []; const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n, total = 0;
    while ((n = tw.nextNode())) { const s = n.nodeValue.trim(); if (!s) continue; const el = n.parentElement; if (el.closest('script,style,.sr,.skip,svg')) continue; let hid = false; for (let a = el; a; a = a.parentElement) { const c = getComputedStyle(a); if (c.display === 'none' || c.visibility === 'hidden') { hid = true; break; } } if (hid) continue; const cs = getComputedStyle(el); const fg = cs.color, bg = bgOf(el); const r = (Math.max(lum(fg), lum(bg)) + 0.05) / (Math.min(lum(fg), lum(bg)) + 0.05); total++; const big = parseFloat(cs.fontSize) >= 24 || (parseFloat(cs.fontSize) >= 18.66 && +cs.fontWeight >= 700); if (r < (big ? 3 : 4.5)) out.push(r.toFixed(2) + ' ' + fg + ' on ' + bg + ' ' + (el.className || el.tagName).toString().slice(0, 20) + ':' + s.slice(0, 14)); }
    return { total, fails: out };
  });
  console.log('contrast (computed) text runs', con.total, 'below AA', con.fails.length, con.fails.slice(0, 12).join(' | '));
  // draft first screen
  await p.locator('.rstrip[data-id="video"]').click(); await p.waitForTimeout(600); await p.locator('.rstrip[data-id="edit"]').click(); await p.waitForTimeout(700);
  await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(300); await p.screenshot({ path: S + 'st_0.png' });
  // add a rate back: frames of the re-cut
  await p.evaluate(() => scrollTo(0, 420)); await p.waitForTimeout(300);
  await p.locator('.rstrip[data-id="photo"]').click(); await p.waitForTimeout(60); await p.screenshot({ path: S + 'st_1.png' }); await p.waitForTimeout(120); await p.screenshot({ path: S + 'st_2.png' }); await p.waitForTimeout(700); await p.screenshot({ path: S + 'st_3.png' });
  // client re-cut frames
  await p.locator('.tile[data-i="1"]').click(); await p.waitForTimeout(40); await p.screenshot({ path: S + 'st_4.png' }); await p.waitForTimeout(90); await p.screenshot({ path: S + 'st_5.png' }); await p.waitForTimeout(90); await p.screenshot({ path: S + 'st_6.png' }); await p.waitForTimeout(600); await p.screenshot({ path: S + 'st_7.png' });
  // import by scroll
  const top = await p.evaluate(() => Math.round(document.querySelector('#import').getBoundingClientRect().top + scrollY));
  let k = 8; for (const d of [-500, -300, -150, 0, 150, 300, 450, 600]) { await p.evaluate(y => scrollTo(0, y), top + d); await p.waitForTimeout(500); const st = await p.evaluate(() => ({ y: Math.round(scrollY), rows: [...document.querySelectorAll('#import .review-card *')].filter(e => /AI/.test(e.textContent) && e.children.length === 0 && getComputedStyle(e).visibility !== 'hidden' && e.getBoundingClientRect().width > 0).length })); console.log('import scroll', JSON.stringify(st)); await p.screenshot({ path: S + 'st_' + (k++) + '.png' }); }
  // approve + token
  await p.evaluate(() => document.querySelector('.approve').scrollIntoView({ block: 'center' })); await p.waitForTimeout(500); await p.locator('.approve').click(); await p.waitForTimeout(900); await p.screenshot({ path: S + 'st_16.png' });
  await p.evaluate(() => document.querySelector('.token-btn').scrollIntoView({ block: 'center' })); await p.waitForTimeout(500); await p.screenshot({ path: S + 'st_17.png' }); await p.locator('.token-btn').click(); await p.waitForTimeout(900); await p.screenshot({ path: S + 'st_18.png' });
  await p.evaluate(() => document.querySelector('#report .mcol:nth-child(2)').scrollIntoView({ block: 'center' })); await p.waitForTimeout(500); await p.locator('#report .mcol').nth(1).click(); await p.waitForTimeout(600); await p.screenshot({ path: S + 'st_19.png' });
  await b.close();
})();
