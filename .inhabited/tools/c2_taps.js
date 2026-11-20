// Critic cycle 2: record taps in real time; then draft-state stills.
const { chromium } = require('playwright');
const fs = require('fs');
const dir = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/vid_taps';
const S = '/home/user/Mad/.inhabited/v1_critic/screens/';
(async () => {
  fs.mkdirSync(dir, { recursive: true });
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, recordVideo: { dir, size: { width: 390, height: 844 } } });
  const t0 = Date.now();
  const p = await ctx.newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0'); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(800);
  await p.evaluate(() => scrollTo(0, 150)); await p.waitForTimeout(500);
  const mark = (n) => console.log(n, 'at video ms', Date.now() - t0, 'frame', Math.round((Date.now() - t0) / 40));
  mark('click tile 2'); await p.click('.tile[data-i="1"]'); await p.waitForTimeout(1300);
  mark('click rate photo (add)'); await p.click('.rstrip[data-id="photo"]'); await p.waitForTimeout(1300);
  console.log('total', await p.evaluate(() => SIS.total()));
  mark('remove photo'); await p.click('.rstrip[data-id="photo"]'); await p.waitForTimeout(900);
  mark('remove edit'); await p.click('.rstrip[data-id="edit"]'); await p.waitForTimeout(900);
  mark('remove video (none left)'); await p.click('.rstrip[data-id="video"]'); await p.waitForTimeout(1300);
  console.log('total', await p.evaluate(() => SIS.total()), 'state', JSON.stringify(await p.evaluate(() => { try { return SIS.state } catch (e) { return String(e) } })).slice(0, 300));
  await p.screenshot({ path: S + 'c2_draft_hero_zh.png' });
  const txt = await p.evaluate(() => { const g = s => [...document.querySelectorAll(s)].map(e => e.innerText.replace(/\s+/g, ' ').trim()).join(' || '); return { sheet: g('#sheet'), caption: g('.stage-caption'), stub: g('#story .stub, #story-stage .stub, .stub'), cta: g('#hero .cta-trial') }; });
  console.log(JSON.stringify(txt, null, 1).slice(0, 1800));
  // scroll down through story + report in draft state
  await p.mouse.move(195, 420);
  let cur = 150; const wheelTo = async (t) => { while (cur < t) { const d = Math.min(40, t - cur); await p.mouse.wheel(0, d); cur += d; await p.waitForTimeout(10); } await p.waitForTimeout(400); };
  await wheelTo(820); await p.screenshot({ path: S + 'c2_draft_story1_zh.png' });
  await wheelTo(1130); await p.screenshot({ path: S + 'c2_draft_story2_zh.png' });
  await wheelTo(1800); await p.screenshot({ path: S + 'c2_draft_report_zh.png' });
  const txt2 = await p.evaluate(() => { const g = s => [...document.querySelectorAll(s)].map(e => e.innerText.replace(/\s+/g, ' ').trim()).join(' || '); return { leaf: g('#story .leaf, #leaf'), docbubble: g('.doc-bubble .file-bar, .doc-bubble .st'), tiles: g('#story .slot-row, .sis-card'), report: g('#report .detail, .month-detail, #report') }; });
  console.log(JSON.stringify(txt2, null, 1).slice(0, 2600));
  await ctx.close(); await b.close();
  console.log('video', dir + '/' + fs.readdirSync(dir).filter(x => x.endsWith('.webm'))[0]);
})();
