// cycle 3: walk the whole page top to bottom with wheel scrolling; one viewport-bounded shot per step; c3_paste.py makes the sheets
// usage: node c3_walk.js <name> <w> <h> <zh|en> <normal|rm|nojs> <client index|-> <rates: default|none|csv> [step]
const { chromium } = require('playwright');
const fs = require('fs');
const [name, W, Hh, lang, mode, client, rates, stepArg] = process.argv.slice(2);
const w = +W, h = +Hh, step = +(stepArg || (h - 84));
const S = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/walk_' + name;
(async () => {
  fs.rmSync(S, { recursive: true, force: true }); fs.mkdirSync(S, { recursive: true });
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, reducedMotion: mode === 'rm' ? 'reduce' : 'no-preference', javaScriptEnabled: mode !== 'nojs' });
  const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(String(e))); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html' + (lang === 'en' && mode !== 'nojs' ? '?lang=en' : ''));
  await p.waitForTimeout(mode === 'normal' ? 3300 : 900);
  if (mode !== 'nojs') {
    if (client !== '-' && +client !== 0) { await p.locator('.picker-client .tile').nth(+client).click(); await p.waitForTimeout(700); }
    if (rates !== 'default') {
      const want = rates === 'none' ? [] : rates.split(',');
      for (const id of ['video', 'photo', 'edit']) {
        const on = await p.evaluate(i => window.SIS.state.rates.indexOf(i) >= 0, id);
        if (on !== want.includes(id)) { await p.locator('.rstrip[data-id="' + id + '"]').click(); await p.waitForTimeout(700); }
      }
    }
    console.log(name, 'state', JSON.stringify(await p.evaluate(() => ({ s: window.SIS.state, total: window.SIS.total() }))));
  }
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  let y = 0, i = 0;
  await p.mouse.move(w / 2, h / 2);
  for (;;) {
    await p.waitForTimeout(450);
    const sy = await p.evaluate(() => Math.round(scrollY));
    await p.screenshot({ path: `${S}/s${String(i).padStart(2, '0')}_y${sy}.png` });
    i++;
    if (sy + h >= H - 2) break;
    const target = Math.min(sy + step, H - h);
    if (mode === 'nojs') { await p.evaluate(t => scrollTo(0, t), target); }
    else { let left = target - sy; while (left > 0) { const d = Math.min(96, left); await p.mouse.wheel(0, d); left -= d; await p.waitForTimeout(24); } }
    if (i > 30) break;
  }
  console.log(name, 'height', H, 'shots', i, errs.length ? 'ERR ' + errs.join(' | ') : 'no errors');
  await b.close();
})();
