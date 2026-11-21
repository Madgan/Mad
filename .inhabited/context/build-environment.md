# Build environment and delivery rules (read before writing or reviewing design code)

Checked on 2026-11-16 from inside this container.

## Network
- Reachable: fonts.googleapis.com and fonts.gstatic.com (Google Fonts loads normally in local screenshots), sistudio.app, the npm and PyPI registries.
- Not reachable: cdnjs.cloudflare.com, cdn.jsdelivr.net, unpkg.com, Unsplash, Pexels and the rest of the open web. Any request to them fails here.
- The WebSearch tool works (load it with ToolSearch `select:WebSearch`). It returns search results only; pages cannot be opened.

## What this means for the build
- Prefer plain HTML, CSS and JavaScript with no library. The Web Animations API, CSS scroll-driven animation with a JavaScript fallback, canvas and inline SVG are enough for this page.
- If a library is truly needed, the published page may load it only from cdnjs.cloudflare.com (preferred), cdn.jsdelivr.net/npm or unpkg.com, pinned to an exact version. Since those hosts fail here, install the same version from npm for local screenshots and say so in your hand-back. The page must still be complete and readable if the script fails to load.
- No photographs. The image-fill stage of the pipeline has nothing to fill: there are no `IMAGE_INTENT` placeholders in this project. All visuals are product UI or drawn in code (CSS, SVG, canvas). Stock sources are unreachable and the brief forbids stock and generated images of people.
- Fonts: load from Google Fonts with this one request, and give every family a real fallback stack:
  `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Instrument+Sans:wght@400..700&family=Kanit:ital,wght@0,700;1,700&family=Noto+Sans+SC:wght@400..700&display=swap`

## Output file
- One self-contained file: `/home/user/Mad/.inhabited/designer/index.html` (latest revision). Inline all CSS and JavaScript. Images only as inline SVG, canvas or data URIs. No other external requests besides the Google Fonts stylesheet.
- Write it as a complete document (doctype, html, head with charset and `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`, body).
- Chinese (Simplified) is the default language with an English toggle in the navigation. Every string exists in both languages.
- Phone first: design at 390 px wide, then 1440 px. The page body never scrolls sideways. Keep a side gutter of at least 16 px.
- Everything meant to be read must be present and legible with JavaScript's animations at rest, and under `prefers-reduced-motion: reduce` every animated sequence shows its complete final state.
- Nothing depends on sound.
- No long dash characters in any copy. Sample data is fictional and labelled as sample.
- Facts, prices and link targets come only from `/home/user/Mad/.inhabited/context/facts.md`.

## Screenshots (pixel verification)
Chromium and Playwright are pre-installed. Do not run `playwright install`. From any directory:

```js
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 })).newPage();
  await p.goto('file:///home/user/Mad/.inhabited/designer/index.html');
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: '/home/user/Mad/.inhabited/iter_1/shot_1280_top.png' }); // viewport-bounded, not fullPage
  await b.close();
})();
```

- This is the equivalent of the protocol's `browser_resize` + `browser_take_screenshot filename=…`. Save viewport-bounded screenshots (1280 x 800 and 390 x 844), scroll with `p.evaluate(() => scrollTo(0, y))` or `p.mouse.wheel` between shots, then open each saved file with the Read tool and look at it. Reviewing the DOM alone is not allowed.
- Motion must be judged in motion: capture several frames across each animated sequence (for example at 0, 200, 500, 1000, 2000 ms after it starts, or at several scroll positions for scroll-driven sequences) and read them in order. Also capture the reduced-motion state with `newContext({ reducedMotion: 'reduce' })`.
- Keep every saved image at or under 1600 px on its longest edge, png or jpg.
- Put scripts you write under `/home/user/Mad/.inhabited/tools/`.
