// cycle 3: record the opening in real time (Playwright video, 25 fps), frames extracted with ffmpeg by c3_sheets.py
const { chromium } = require('playwright');
const fs = require('fs');
const URL = 'file:///home/user/Mad/.inhabited/designer/index.html';
(async () => {
  const b = await chromium.launch();
  for (const [name, w, h, q] of [['390zh',390,844,''],['390en',390,844,'?lang=en'],['1280zh',1280,800,'']]) {
    const dir = '/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/c3vid_' + name;
    fs.rmSync(dir, { recursive: true, force: true });
    const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, recordVideo: { dir, size: { width: w, height: h } } });
    const p = await ctx.newPage();
    await p.goto(URL + q);
    await p.waitForTimeout(4200);
    await ctx.close();
    console.log(name, fs.readdirSync(dir));
  }
  await b.close();
})();
