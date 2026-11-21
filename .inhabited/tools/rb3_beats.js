// Rebuild 3: the tear-off, the drop and the stub at set stage positions (S = px from the top of the screen), by scrollTo.
// Sheet a: before, tear starts, half torn, torn. Sheet b: landed (after the receipt clock has run), then back above the drop.
// node rb3_beats.js <w> <h> <lang> <prefix> [client index]
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const O = '/home/user/Mad/.inhabited/v1_critic/screens/', SCR = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/';
const w = +process.argv[2], h = +process.argv[3], lang = process.argv[4], prefix = process.argv[5], client = +(process.argv[6] || 0);
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage();
  const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0' + (lang === 'en' ? '&lang=en' : '')); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  if (client) { await p.evaluate(i => window.SIS.pickClient(i), client); await p.waitForTimeout(700); }
  const g = await p.evaluate(() => { const r = document.querySelector('#story-stage').getBoundingClientRect(), vh = innerHeight, em = r.width / 35.8; const SD = Math.max(vh - 8 - 61.1 * em, 64 - 6.3 * em); return { top: r.top + scrollY, SD, em }; });
  console.log(prefix, 'stage top (document)', Math.round(g.top), 'em', g.em.toFixed(2), '| tear from S', Math.round(g.SD + 114), 'to', Math.round(g.SD + 24), '(' + (7.2 * g.em).toFixed(0) + ' px sideways) | drop at S', Math.round(g.SD), '(' + (13.6 * g.em).toFixed(0) + ' px down) | filed at S', Math.round(g.SD - 30));
  const beats = [['before', g.SD + 150, 450], ['tear starts', g.SD + 114, 450], ['half torn', g.SD + 69, 450], ['torn, slot still empty', g.SD + 26, 450], ['landed, stub filed, receipt read', g.SD - 40, 1300], ['back above the drop', g.SD + 26, 700]];
  const files = [];
  for (const [name, S, wait] of beats) {
    await p.evaluate(yy => scrollTo(0, yy), g.top - S); await p.waitForTimeout(wait);
    const st = await p.evaluate(() => [document.querySelector('.leaf').style.transform, document.querySelector('.doc-bubble').getAttribute('data-state'), document.querySelector('.stub').classList.contains('is-front') ? 'stub' : 'filed', (document.querySelector('.doc-bubble .st').innerText || '').replace(/\s+/g, ' ').trim()].join(' | '));
    console.log('  ' + name, 'S=' + Math.round(S), '|', st);
    const f = SCR + prefix + '_' + files.length + '.png'; files.push(f + '::' + name + ' (stage top at ' + Math.round(S) + ' px)'); await p.screenshot({ path: f });
  }
  await b.close();
  const per = w > 800 ? 2 : 4;
  for (let i = 0, k = 0; i < files.length; i += per, k++) {
    if (w > 800) execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_vstack.py', O + prefix + '_' + 'abcdef'[k] + '.png', ...files.slice(i, i + per).map(f => f.split('::')[0])]);
    else execFileSync('python3', ['/home/user/Mad/.inhabited/tools/rb2_paste.py', O + prefix + '_' + 'abcdef'[k] + '.png', ...files.slice(i, i + per)]);
  }
  console.log('  errors', JSON.stringify(errs));
})();
