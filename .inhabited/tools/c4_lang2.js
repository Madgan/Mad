// cycle 4: language switch with scripts off (native checkbox + :has) and with script (scroll hold), 390 and 1280
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const SC = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/';
const count = () => { let zh = 0, en = 0, zhList = [], enList = []; document.querySelectorAll('.zh,.en').forEach(e => { if (e.closest('.lang-toggle')) return; const r = e.getClientRects().length && getComputedStyle(e).visibility !== 'hidden'; let a = e, vis = r; while (vis && a) { const c = getComputedStyle(a); if (c.display === 'none' || c.visibility === 'hidden') vis = false; a = a.parentElement; } if (vis) { if (e.classList.contains('zh')) { zh++; zhList.push(e.textContent.trim().slice(0, 20)); } else { en++; } } }); const cjk = [...document.body.querySelectorAll('*')].filter(e => e.children.length === 0 && e.offsetParent && /[一-鿿]/.test(e.textContent) && !e.closest('.lang-toggle') && getComputedStyle(e).visibility !== 'hidden').map(e => e.textContent.trim().slice(0, 24)); return { zhShown: zh, enShown: en, cjkLeafVisible: cjk.length, cjkSample: cjk.slice(0, 6), lang: document.documentElement.lang, checked: document.getElementById('lang-en').checked, title: document.title.slice(0, 40), sx: scrollX, sw: document.documentElement.scrollWidth }; };
(async () => {
  const b = await chromium.launch();
  for (const [w, h] of [[390, 844], [1280, 800]]) {
    // no script
    const dir = SC + 'lang2_nojs_' + w; fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
    const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, javaScriptEnabled: false });
    const p = await ctx.newPage();
    await p.goto('file:///home/user/Mad/.inhabited/designer/index.html'); await p.waitForTimeout(1200);
    console.log('NOJS', w, 'before', JSON.stringify(await p.evaluate(count)));
    await p.screenshot({ path: dir + '/a_before.png' });
    await p.click('label.lang-toggle'); await p.waitForTimeout(300);
    console.log('NOJS', w, 'after click', JSON.stringify(await p.evaluate(count)));
    await p.screenshot({ path: dir + '/b_after_click.png' });
    await p.evaluate(() => scrollTo(0, 1900)); await p.waitForTimeout(200);
    await p.screenshot({ path: dir + '/c_mid_en.png' });
    await p.evaluate(() => scrollTo(0, 0)); await p.focus('#lang-en'); await p.keyboard.press('Space'); await p.waitForTimeout(200);
    console.log('NOJS', w, 'after Space', JSON.stringify(await p.evaluate(count)));
    await ctx.close();
    execFileSync('python3', ['/home/user/Mad/.inhabited/tools/c4_strip.py', dir, '/home/user/Mad/.inhabited/v1_critic/screens/c4_lang_nojs_' + w], { stdio: 'inherit' });
    // with script: hold of place
    const dir2 = SC + 'lang2_js_' + w; fs.rmSync(dir2, { recursive: true, force: true }); fs.mkdirSync(dir2, { recursive: true });
    const ctx2 = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const q = await ctx2.newPage();
    await q.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await q.evaluate(() => document.fonts.ready); await q.waitForTimeout(800);
    for (const y of [1200, 2600, 3900]) {
      await q.evaluate(t => scrollTo(0, t), y); await q.waitForTimeout(400);
      const probe = () => { const el = document.elementFromPoint(innerWidth * 0.7, innerHeight * 0.4); const r = el ? el.getBoundingClientRect() : null; return { y: Math.round(scrollY), el: el ? el.tagName + '.' + el.className.toString().slice(0, 30) : '', top: r ? Math.round(r.top) : null }; };
      const a = await q.evaluate(probe);
      await q.screenshot({ path: dir2 + '/y' + y + '_1zh.png' });
      await q.click('label.lang-toggle'); await q.waitForTimeout(400);
      const bb = await q.evaluate(probe); const c = await q.evaluate(count);
      await q.screenshot({ path: dir2 + '/y' + y + '_2en.png' });
      await q.click('label.lang-toggle'); await q.waitForTimeout(400);
      const cc = await q.evaluate(probe);
      console.log('JS', w, 'at', y, 'before', JSON.stringify(a), '| after en', JSON.stringify(bb), 'lang', c.lang, 'zhShown', c.zhShown, 'cjkLeaf', c.cjkLeafVisible, '| back zh', JSON.stringify(cc));
    }
    await ctx2.close();
    execFileSync('python3', ['/home/user/Mad/.inhabited/tools/c4_strip.py', dir2, '/home/user/Mad/.inhabited/v1_critic/screens/c4_lang_js_' + w], { stdio: 'inherit' });
  }
  await b.close();
})();
