// Builds kids-hanzi/index.html from kids-hanzi/src/game.html.
// It embeds stroke data (from the hanzi-writer-data npm package) for every
// character listed in BANK_ROWS, so the game draws standard 楷体 shapes and the
// tracing works without fetching anything at runtime.
//
// Usage (from the repo root):
//   npm i --no-save hanzi-writer-data@2.0.1
//   node kids-hanzi/tools/build.mjs
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const src = readFileSync(join(root, 'src/game.html'), 'utf8');

const dataDirs = [
  process.env.HANZI_DATA,
  join(root, '..', 'node_modules/hanzi-writer-data'),
  join(process.cwd(), 'node_modules/hanzi-writer-data'),
].filter(Boolean);
const dataDir = dataDirs.find(d => existsSync(join(d, '日.json')));
if (!dataDir) {
  console.error('hanzi-writer-data not found. Run: npm i --no-save hanzi-writer-data@2.0.1');
  process.exit(1);
}

const block = src.slice(src.indexOf('/*DATA-START*/'), src.indexOf('/*DATA-END*/'));
const chars = [...new Set([...block.matchAll(/^\['([\u3400-\u9fff])',/gm)].map(m => m[1]))];
// also include every character used in recipes and word-train rows
for (const m of block.matchAll(/\['([\u3400-\u9fff])','([\u3400-\u9fff])'/g)) { chars.includes(m[1]) || chars.push(m[1]); chars.includes(m[2]) || chars.push(m[2]); }

const strokes = {};
const missing = [];
for (const c of chars) {
  const f = join(dataDir, c + '.json');
  if (!existsSync(f)) { missing.push(c); continue; }
  const d = JSON.parse(readFileSync(f, 'utf8'));
  strokes[c] = { strokes: d.strokes, medians: d.medians };
}
if (missing.length) console.warn('No stroke data for:', missing.join(' '));

const json = JSON.stringify(strokes).replace(/</g, '\\u003c');
const out = src.replace('<!--STROKES-->', `<script id="strokes" type="application/json">${json}</script>`);
writeFileSync(join(root, 'index.html'), out);
console.log(`Built kids-hanzi/index.html: ${Object.keys(strokes).length} characters, ${(out.length / 1024).toFixed(0)} KB`);
