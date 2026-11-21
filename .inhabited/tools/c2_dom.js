const { chromium } = require('playwright');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0';
(async () => {
  const b = await chromium.launch();
  for (const lang of ['zh', 'en']) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto(URL); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(600);
    if (lang === 'en') { await p.click('.lang-toggle'); await p.waitForTimeout(500); }
    const out = await p.evaluate(() => {
      const res = [];
      const secs = document.querySelectorAll('header, main > *, footer');
      function vis(el) { const cs = getComputedStyle(el); if (cs.display === 'none' || cs.visibility === 'hidden') return false; return true; }
      function walk(n, acc) {
        if (n.nodeType === 3) { const t = n.textContent.replace(/\s+/g, ' ').trim(); if (t) acc.push(t); return; }
        if (n.nodeType !== 1) return; if (!vis(n)) return;
        if (n.tagName === 'SCRIPT' || n.tagName === 'STYLE') return;
        const al = n.getAttribute('aria-label'); if (al) acc.push('[aria:' + al + ']');
        const ti = n.getAttribute('title'); if (ti) acc.push('[title:' + ti + ']');
        for (const c of n.childNodes) walk(c, acc);
      }
      for (const s of secs) { const acc = []; walk(s, acc); const r = s.getBoundingClientRect(); res.push({ tag: s.tagName.toLowerCase() + (s.id ? '#' + s.id : '') + (s.className && typeof s.className === 'string' ? '.' + s.className.trim().split(/\s+/).join('.') : ''), y: Math.round(r.top + scrollY), h: Math.round(r.height), text: acc.join(' | ') }); }
      return { lang: document.documentElement.lang, title: document.title, H: document.documentElement.scrollHeight, SW: document.documentElement.scrollWidth, meta: [...document.querySelectorAll('meta')].map(m => (m.name || m.getAttribute('property') || m.httpEquiv || 'charset') + '=' + (m.content || m.getAttribute('charset'))), res };
    });
    console.log('\n######## ' + lang + ' lang=' + out.lang + ' title=' + out.title + ' H=' + out.H + ' SW=' + out.SW);
    console.log(out.meta.join('\n'));
    for (const s of out.res) console.log('\n--- ' + s.tag + ' y=' + s.y + ' h=' + s.h + '\n' + s.text);
    console.log('errors', JSON.stringify(errs));
    await ctx.close();
  }
  await b.close();
})();
