// cycle 4 (copy of c3): state following read back after wheel-scrolling the whole page, for each client and for the draft
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const [label, client, rates] of [['Lumen default', 0, ['video', 'edit']], ['Tanjung', 1, ['video', 'edit']], ['Aria + photo only', 2, ['photo']], ['draft (no rate)', 0, []], ['draft then Tanjung', 1, []]]) {
    const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
    await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0&lang=en'); await p.waitForTimeout(700);
    if (client) { await p.locator('.picker-client .tile').nth(client).click(); await p.waitForTimeout(650); }
    for (const id of ['video', 'photo', 'edit']) { const on = await p.evaluate(i => SIS.state.rates.includes(i), id); if (on !== rates.includes(id)) { await p.locator('.rstrip[data-id="' + id + '"]').click(); await p.waitForTimeout(650); } }
    const H = await p.evaluate(() => document.documentElement.scrollHeight);
    await p.mouse.move(195, 400); for (let y = 0; y < H; y += 80) { await p.mouse.wheel(0, 80); await p.waitForTimeout(18); } await p.waitForTimeout(500);
    for (let y = 0; y < H; y += 80) { await p.mouse.wheel(0, -80); await p.waitForTimeout(10); } await p.waitForTimeout(300);
    for (let y = 0; y < 2300; y += 80) { await p.mouse.wheel(0, 80); await p.waitForTimeout(18); } await p.waitForTimeout(600);
    const r = await p.evaluate(() => { const t = s => { const e = document.querySelector(s); if (!e) return 'MISSING'; const c = getComputedStyle(e); return (c.display === 'none' || c.visibility === 'hidden' || !e.getBoundingClientRect().width) ? '[hidden]' : e.innerText.replace(/\s+/g, ' ').trim().slice(0, 60); };
      const vis = s => { const e = document.querySelector(s); if (!e) return false; let a = e; while (a) { const c = getComputedStyle(a); if (c.display === 'none' || c.visibility === 'hidden') return false; a = a.parentElement; } return e.getBoundingClientRect().width > 0; };
      return { sheetTotal: t('#sheet .total b'), sheetDraftTape: vis('#sheet .draft-tape'), sheetCrossing: vis('#sheet .crossing .s1'), sheetRecord: vis('#sheet .record-block'), sheetMachine: vis('#sheet .machine-line .ml'),
        chat: t('#story .chat-head'), cardClient: t('.sc-client'), stub: vis('#story .stub') ? t('#story .stub .sface.done') + ' / front: ' + document.querySelector('#story .stub .sface.front').innerText.replace(/\s+/g, ' ') : '[stub hidden]', stubSlot: vis('.stub-slot') ? t('.stub-slot') : '[no slot]',
        leafName: t('#story .leaf .name'), leafSub: t('#story .leaf .sub'), leafTotal: t('#story .leaf .total b'), leafDraft: vis('#story .leaf .draft-tape'), leafCrossing: vis('#story .leaf .crossing .s1'), leafRecord: vis('#story .leaf .record-block'), leafMachine: vis('#story .leaf .machine-line .ml'),
        doc: document.querySelector('.doc-bubble').dataset.state, docTicks: vis('.doc-bubble .ticks'), docLabel: t('.doc-bubble .empty-label'), tag014: vis('.tag014'), novDetail: t('#report .d-s'), rank: t('#report .rank'), past: [...document.querySelectorAll('.past-row b')].map(e => e.textContent).join(',') }; });
    console.log('\n== ' + label); for (const k of Object.keys(r)) console.log('   ' + k + ': ' + r[k]);
    await p.close();
  }
  await b.close();
})();
