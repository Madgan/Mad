# Critic verdict: cycle 3

## Scores
- fits framing: 9 / 10
- fits sampled inputs: 9 / 10
- fits competitor judgment: 9 / 10
- fits axis manifestation: 9 / 10
- Constraint honored: PASS (per-frame sampler, `getAnimations()`, code search and frames: only `transform`, `clip-path`, `stroke-dashoffset` and `visibility` animate; no opacity or alpha value changes anywhere, in either motion mode)
- Slop gate: (not run; the rubric is below 10)
- Hard limits: PASS (10 of 10; none fail)

Caps applied: none. No gate and no hard limit fails, so the numbers are the scores as judged. Cycle 2 was 8, 8, 8, 6.

## Gates

**ms-sample replay (re-run this cycle; all match `sampling.md`, whose audit blocks agree with the persona table; no further audit block exists):**

```
Framing      1794798837238 40 1 -> [37]        recorded [37]        MATCH
Designer     1794799205550 20 1 -> [14]        recorded [14]        MATCH
Seeds        1794800480856 40 2 -> [12, 20]    recorded [12, 20]    MATCH
Constraint   1794799080271  8 1 -> [1]         recorded [1]         MATCH
Competitors  1794799137895 20 2 -> [6, 19]     recorded [6, 19]     MATCH
Domain       1794799252914 20 2 -> [10, 13]    recorded [10, 13]    MATCH
Typography   1794799835954 15 3 -> [4, 8, 10]  recorded [4, 8, 10]  MATCH
Typography K random.Random(1794799831142).randint(2,4) -> 3   recorded 3   MATCH
```

Gate 1: PASS.

**Persona discipline: PASS.** `claude_designer.md` (mtime 2026-11-16 04:03, unchanged since cycle 1) read end to end again. Headings: Who you are, What you do not negotiate, Brand personality, Theme, Aesthetic direction, Design principles, How you think, How you work, Voice and tone, Things you do not do, Distinctive vocabulary, In summary. None prescribes page anatomy. No `layout_sketch` file exists.

**Constraint tests (all four re-run from scratch).**
- Test 1, frame stepping. `tools/c3_sampler.js` (the cycle 2 sampler with `stop-opacity` and `flood-opacity` added): on every animation frame it records, for every element, computed `opacity`, `color`, `background-color`, `border-top-color`, `outline-color`, `fill`, `stroke`, `fill-opacity`, `stroke-opacity`, `stop-opacity`, `flood-opacity`, `filter`, `backdrop-filter` and `mix-blend-mode`, and polls `document.getAnimations()` on the same frames. Sequences, at 390 x 844, with motion and with `reducedMotion: 'reduce'`: load with the opening, toggle both ways, replay, rail by keyboard and by drag, three client taps, rate add, remove, none left, re-add, wheel scroll down and up the whole page, a jump to the bottom and back, month tap, approve and undo, token revoke and create, hover, focus and press on all 31 interactive elements. Result: no opacity value changed in any sequence (the log holds no line with the word). The only elements with three values of a watched property are `body` and `header.topbar`, which step through `rgb(11,18,22)`, `rgb(11,35,70)`, `rgb(42,22,6)`, each held for 24 to 370 frames with nothing between; the date chips cut between `rgb(31,44,51)` and `rgb(245,242,233)` on the same frames. Animation kinds seen: `transform`, `clipPath`, `strokeDashoffset`, `visibility`, and CSS transitions on `transform` only. Full log: `tools/c3_sampler_log.txt`. I also recorded the opening and the `#story` scroll as video (25 frames a second, frames extracted with ffmpeg) and read about 90 of the frames in order; nothing is half there in any of them.
- Test 2, code. Every occurrence of the word `opacity` in the file, with my ruling:

| Line | Occurrence | Ruling |
|---|---|---|
| 42 | `stroke-opacity='.045'` in the wallpaper tile (an SVG data URI) | fixed, allowed |
| 161 | `.smear .tr{opacity:.6}` | fixed; the bar is cut on and off with `visibility` |
| 162 | `.smear .tr[data-c="g"]{opacity:.42}` | fixed |
| 163 | `.smear .tr[data-c="s"]{opacity:.42}` | fixed |
| 195 | `.catch-tr{opacity:.6}` | fixed; shown by a `visibility` keyframe held at `visible` |
| 196 | `.catch-tr[data-c="g"]{opacity:.42}` | fixed |

  Also fixed and allowed: the grain's alpha of .07 inside `feColorMatrix` (line 617), `mix-blend-mode: difference` on the toggle labels (line 86) and `screen` on `.beam` (line 184), the word `transparent` 11 times in borders and dash gradients. Not present: `rgba(`, `hsla(`, 8 or 4 digit hex, `@keyframes`, CSS `animation`, `transition: all`, `startViewTransition`, `<animate>`, a canvas, scroll timelines, `globalAlpha`. Transitions: three, all `transform ... linear` (lines 345, 385, 430), and two `transition: none` rules (lines 57, 576). Script writes to `style`: `height`, `bottom`, `top`, `left`, `width`, `fontSize`, `visibility`, `transform` and one custom property. The two `.animate(` calls take keyframes of `transform`, `clipPath`, `strokeDashoffset` and `visibility` only.
- Test 3, states. Hover, focus and press on 31 elements: single cuts of colour, outline or border only.
- Test 4, reduced motion. The finished sheet is there from the first sampled frame; `*{transition:none!important}` under the media query; the script branches on `RM` and writes end states.

Stricter reading taken and still passed: the smear bars overlap each other at fixed alpha and are printed at two lengths on alternate steps. A pixel under them changes by whole cuts every 84 ms and does not run through a falling series toward the ground, so this is not a trail made by repeated translucent paint.

Where the constraint forced a change of habit: the sheet arrives by a cut at 300 ms; each episode's ground, the top bar and the chip cut on one frame; ticks, captions and both languages cut; the record block, the green wrap and the AI fields wipe; hover is an underline or a border; reduced motion is the finished frame.

**Opening timing, measured (`tools/c3_open2.js`, a per-frame log in the page, 8 cold runs, a new browser context each).** Against the browser's own first-contentful-paint entry the thread starts moving 180 to 273 ms after first paint and the sheet is cut in 509 to 536 ms after first paint (390 zh: 531, 536, 530, 527; 390 en: 511, 514; 1280 zh 510; 1280 en 509). Against the page's own `SIS_T0` stamp, which lands 19 to 40 ms before the reported paint, the same runs read 537 to 561. Frames showing a finished sheet before the opening: 0 in every run. The fixed 200 ms hold and "sheet in by 540 ms" are met.

**Capture provenance.** Scored against my own captures, prefix `c3_`, in `v1_critic/screens/` (109 files saved, 55 opened), plus 2 Designer frames opened (`rebuild2_draft_390en.png`, `rebuild2_cut_390.png`; both newer than the build and both agree with my own captures). Captured independently because the build file changed and motion, first screen and reduced motion cannot be taken from anyone else's stills: the opening in real time at 390 in both languages (`c3_rt390zh_f00-03` to `f76-79`, `c3_rt390en_*`, key frames in `c3_rt390zh_key`, `c3_rt390en_key`); lossless stepped frames of the streak (`c3_streak_lossless_390_a`, `_b`, `c3_streak_lossless_1280`); walks of the whole page by wheel for each client and the draft (`c3_walk_390zh_a/b`, `c3_walk_tanjung390zh_a`, `c3_walk_aria390en_a`, `c3_walk_draft390zh_a`); the tear, drop and ticks while scrolling (`c3_story390zh_f056-059` to `f084-087`); language switch pairs (`c3_lang_390_pairs`); desktop 1280 and 1440 (`c3_walk_d1280zh_a` to `_d`, `c3_walk_d1440en_a`, `_c`); reduced motion and no script at both widths (`c3_walk_rm390en_a/b`, `c3_walk_rm1280zh_a/b/c`, `c3_walk_nojs390_a`, `c3_walk_nojs1280_a/b/d`); 768 and 1024 (`c3_mid_768_zh`, `c3_mid_1024_zh`); taps and states (`c3_states_draft_recut`, `_client_recut`, `_import_a`, `_taps`).

## Hard limits

| # | Limit | Result | Evidence |
|---|---|---|---|
| 1 | No claims beyond `facts.md` | PASS | Full visible text of both languages dumped (`tools/c3_audit.js`, 301 lines each) and read line by line against `facts.md`: plan lists, the 50 a batch limit, "nothing is saved until you review and approve", "AI never edits records directly", token and scope wording, storage, isolation, registration 003357155-P and the support line all match. Nothing from the "Unknown" list. No testimonial, logo, count or statistic. 14 links: `#hero`, `#top`, sign-in x2, sign-up x5, trust, contact, terms, privacy, cookies; all match the routes. The cycle 2 risk is gone: ticks now report the chat only, and SIS states are words on tape (未保存, 已保存, 已连接, 已撤销). |
| 2 | Exact prices; sample data labelled | PASS | 7 days, RM 199 / year, RM 399 / year and nothing else in either language, including the meta description. Yellow sample tape on `#sheet`, the leaf, the report, import and Pro attachments; plain "示例聊天 / sample chat" on three chat headers and "示例资料 / sample data" on the client page; `.sample-note` covers chat lines, past invoices and report figures. |
| 3 | No QR, none of the forbidden words | PASS | `grep -n -i -E 'LHDN\|IRBM\|MyInvois\|\be[- ]?invoic\|einvois\|validat\|\bQR\b\|qrcode\|电子发票\|內陸稅收局\|内陆税收局\|税务局\|已验证\|验证通过'` returns nothing. In pixels `.record-block .mark` is "1/1" in a plain ruled square (`c3_story390zh_f064-067`). |
| 4 | No cheque, bank, account, payment claim | PASS | The limit 4 grep returns nothing. A second search for paid, 已付, 收款, payment received, pay now, credit card, refund, SST, user counts and "trusted by" returns nothing. The leaf prints "Bank details: not shown in this sample." and a terms line, both allowed. Crossing: "INV-014 · 开好了" and "INV-014 · READY". Machine line groups are labelled NO, DATE, SEN. |
| 5 | No photographs or generated images | PASS | Hits: three sample file names (`receipt-aug.jpg`, `screenshot-2.png`, `IMG_2291.jpg`), one inline SVG data URI, `url(#doodle)`, `url(#grain)`. No `<img>`, no raster data. |
| 6 | No long dashes | PASS | `LC_ALL=C.UTF-8 grep -n -P '[\x{2012}\x{2013}\x{2014}\x{2015}\x{2E3A}\x{2E3B}\x{FE31}\x{FE58}]'` returns nothing. |
| 7 | Trial button, both prices, invoice in the first screen at 390 | PASS | Identical in zh and en, at rest and under reduced motion: `#hero .hero-cta` y 575 to 631; `.trial-terms` 608 to 620, 12.5 px, weight 600, "Basic RM 199/年 · Pro RM 399/年"; `#sheet` 181 to 473 (280 x 292, all of it in view); toggle 4 to 48; top-bar button 4 to 48; none covered. At 390 x 700 all four stay in view. Load: the button and prices are readable on the first frame; the sheet is there at about 0.53 s with empty slots, the total at about 2.05 s, the whole sheet with its record block at about 2.65 s after first paint. |
| 8 | Complete still under reduced motion | PASS | `c3_walk_rm390en_a/b`, `c3_walk_rm1280zh_a/b/c`: leaf in the reply with two blue ticks, stub filed, six months of bars with 014, five files read, three fields read, both plans. No script: the same finished page with fixed sample times (`c3_walk_nojs390_a`, `c3_walk_nojs1280_a/b/d`). The Designer listed the desktop reduced-motion and no-script walks as unverified; they are complete. |
| 9 | Nothing depends on sound | PASS | No audio or video element, no audio API. The only grep hit is the class `.wave` in CSS. The voice note is 16 bars, a duration and a line of text; no control on it. |
| 10 | Both languages | PASS, one note | 301 text lines in each state; no Chinese left in English except the toggle's own "中文" and the two-language `aria-label`s; Latin left in Chinese is product names, sample data and file names. `lang`, `<title>` and the description switch. Avatars are 陈 and 杰 in Chinese, C and J in English. Note: with scripts off the toggle does nothing (tapped it: `data-lang` stays `zh`), so English cannot be reached there. Rebuild item 5. |

Other guardrails. One external request (the Google Fonts stylesheet and its font files). `scrollWidth` equals the viewport at 320, 390, 768, 1280 and 1440 in both languages; a sideways wheel leaves `scrollX` at 0; no unclipped element passes the edge. No text under 11 px; no target under 44 px. Contrast, computed for 312 visible text runs on the three grounds: none below AA (computed, not sampled from pixels). No scroll snap, no wheel or touch listener; one `preventDefault` on the rail's arrow keys. Small breach: the hero thread's bubbles sit 12 px from the screen edge at 390 (`.set-end .bubble` x 12 to 95; the outgoing one ends at 378), inside the full-width stage; the gutter rule says 16.

**Flashing: safe.** `tools/c3_flashcap.js` and `c3_flash.py`: 146 lossless frames of the stage, 1/60 s apart on the page clock; a transition is a move of 0.10 or more in relative luminance away from the last peak or trough with the darker state under 0.80; a flash is a pair of opposing transitions. Pixels with more than three flashes in any one second (7 or more opposing transitions) cover 0.3% of the worst 341 x 256 box at 390 zh, 0.7% at 390 en and 0.4% at 1280. The limit is 25%. The Designer's 26 to 31% is real and I reproduce it (26.2%, 30.7%, 30.7%), but it counts pixels with four or more transitions, which is two flashes a second. Two is under the line of three. So: a quarter to a third of the stage changes brightness about twice a second for 1.8 s, once, on load, and not at all under reduced motion. No saturated red is involved. Keep the step rate at 12 a second or below and do not add a second colour inversion; a faster band would cross the line.

## Status of the 11 cycle-2 rebuild items

| # | Item | Status | Evidence |
|---|---|---|---|
| 1 | The streak | Closed | `c3_streak_lossless_390_a`, `_b`, `c3_rt390zh_key`, `c3_rt390en_key`: while the band runs no bubble and no text is drawn. What passes is square slabs in bubble grey and thread green with the trailing edge torn into tines, and thin tapered bars in tick blue, green and pale grey. No rounded translucent card exists. Once the sheet is in, the sheet and one hanging message ("抬头写 Lumen Events Sdn Bhd") are the only readable things and the rest is vertical drag. A refinement remains, rebuild item 2. |
| 2 | Draft and client state downstream | Closed | `tools/c3_follow.js` after wheeling the whole page down, up and down again: Tanjung gives "M Mei Ling · Tanjung Bakery", the TANJUNG client page, stub and leaf, past rows 012, 009, 005 and a new ranking; Aria gives "A Aria Lim", "Individual client", RM 1,200.00. With no rate: red DRAFT tape on sheet and leaf, no crossing, record block or machine line, "STUB · NEEDS A RATE", "PDF · NEEDS A RATE", no ticks, no 014, November RM 9,700, ranking without the draft. `c3_states_client_recut`, `c3_walk_draft390zh_a`, `rebuild2_draft_390en`. |
| 3 | Ticks | Partly closed | One meaning: closed. Room: 76 px each at 390, all while the file bar is on screen. But measured while wheeling (`tools/c3_story.js`): at 600 px a second "已发出" is held 99 ms and "已送达" 151 ms; at 800 px a second at 1280, 52 ms and 130 ms; at 1,500 px a second neither is shown at all, the state goes from empty to read. `c3_story390zh_f080-083`, `f084-087`. |
| 4 | Opening hold | Closed | Measured above: 180 to 273 ms, sheet in at 509 to 536 ms after first paint. |
| 5 | Tear and drop | Closed | The leaf slides 72 px along the perforation under the thumb, then falls 136 px in 167 ms across 10 sampled frames, lands with a one-frame settle; the stub turns over to a filed row. At 1280: 97 px and 182 px. `c3_story390zh_f056-059` to `f076-079`. |
| 6 | Sample times | Closed | At 10:43 the hero thread reads 10:02, 10:19, 10:23, 10:24 and the asker 10:23; the reply is read at the present minute. Without script the fixed set (22:41 to 23:41:07) is consistent with itself. |
| 7 | Language switch | Closed | `tools/c3_lang.js`, every 350 px: scroll position is restored exactly on the way back at every position; the block on the reading line keeps its top edge within 1 px, except where the block itself grows in English (the plans: 12 px at 3,800 and 76 px at 4,150). In the pair at 4,150 the receipt line sits at y 318 before and 317 after (`c3_lang_390_pairs`). At 1280 the largest move is 10 px. |
| 8 | Desktop below the hero | Closed, with a remainder | 480 px thread lane at x 80 to 560, heading and a sticky note in the margin at x 632, chips centred on the lane, footer on the same two columns; pickers and transport in one row under the stage (`c3_walk_d1280zh_a` to `_d`, `c3_walk_d1440en_a`, `_c`). It is no longer a phone column on wallpaper. Remainder under "drifted". |
| 9 | Grounds | Closed | `#0B1216`, `#0B2346`, `#2A1606`: three hues, cut on one frame with the top bar and the chip (`rebuild2_cut_390`, `c3_walk_d1280zh_b`, `_c`). |
| 10 | Manifest and CSS | Closed | Computed weights now equal the stated ones (Chinese 700 on 2 runs, 500 on 134, 400 on 36; Instrument Sans 400 to 700; `.record-block .mark b` 700). Grounds, notice black and neutrals bound; the beam's hue traced (198 degrees, checked); the lean moved; "only" dropped. Every one of the 33 hex values in the file is named in the borrowings file. |
| 11 | Small | Closed | "INV-014 · READY"; top-bar button 44 px; C and J; five yellow tapes. |

Closed: 10. Partly closed: 1 (item 3). Open: 0.

## What's borrowed correctly

- **Framing.** A forwarded label, then the thread alone as the opening shot; below it three chats, each with a header, a date chip that cuts the ground, the asker's grey bubble, the product view as a forwarded attachment in outgoing green with a file bar and a receipt, and a composer whose send button is the trial button. The chat is the picked client's chat. The voice note is bars, 1:05 and a line of text. The screenshot is a phone inside a phone, 2 degrees off.
- **Wong Kar-wai.** Two speeds in one frame from 0.53 s: a sheet that never moves, a band that steps 64 px every 84 ms (`c3_streak_lossless_390_b`). Hard cuts between three nights. INV-014 in eight places. Time to the second on the caption, the record block, each note and the green wrap; "你在这页待了 9 秒。轮到你回了。"
- **Night Mail.** A message hangs still under the sheet and the name is taken out of it by one hard-stopped translate with thin bars trailing it (`c3_streak_lossless_390_b`, third frame); six labelled slots; intervals 460, 340, 260, 200, 160, 120 and a hold, drawn again as the spacing of ten marks on the rail (.124 to 1); the drop.
- **Crossed cheque.** Two pen strokes, 2 px and 1.7 px, drawn in turn; a strike through the replaced client; figures over words; a stub across the head of the leaf on a 4 px perforation; a labelled numeral line.
- **Camera tape.** Tape labels 3 degrees off level; the lock position on the picked tile; five numbered slots that take five files; the green band "已核对 · 10:51:35" laid only after the tap (`c3_states_taps`); the stub's flip.
- **Return block.** Wiped in last, "1/1", identifier, date and time.
- **Type.** Chinese headline 700; English 800 at `opsz` 27 (phone) and 37 (desktop), Chinese at 31 and 40; Instrument Sans in thread and sheet; Kanit 700 on the readout and on amounts in flight; tabular figures; width 100; four families.

## What's missing per factor

### fits framing
The framing named "a tick turning from one to two" as the small precise motion he would judge like an edit. It is still tied to scroll position, so its length is whatever his thumb makes it: a tenth of a second at a slow scroll and nothing at a flick (item 3 above). Then the same receipt, two blue ticks and "已读 10:41", sits fixed under four more attachments and never does anything; the Designer says so himself. Five identical receipts is the tick as wallpaper.

### fits sampled inputs
- **Two speeds, first third of a second.** From the start of the run until the sheet is cut in (200 to 530 ms) there is no still subject, and what fills the stage is solid slabs up to 170 px wide with evenly spaced rectangular teeth (`c3_rt390zh_key`, first three frames; `c3_streak_lossless_1280`, top). Frozen, they read as hanging combs, not as drag. The slab bodies carry more of the picture than the bars. After the cut it works.
- Everything else asked for in cycle 2 under this factor is in the pixels: the drop, the tear, the times, the weights.

### fits competitor judgment
Both tables are complete and every location exists (`.slot-tile` is a logged rename). Two cells do not match the build:
- Bukku "Navigation depth" says the footer has four links and "nothing else leaves the page". The footer has six (Trust, Contact, Terms, Privacy, Cookies, Sign in).
- Bukku "Language switch" is a `borrow` at `header.topbar .lang-toggle`. Without script that control is dead, on a page whose every other part was built to stand without script. The row does not say so and the build offers no other route to English.

### fits axis manifestation
88 entries, ten axes, framing cited in 40%. I checked 45 entries against computed values and pixels (`tools/c3_manifest.js`); the list is in the next paragraph. One deduction and one warning:
- `motion[5]` gives one value per move ("stroke 110, wipe 170, flip 200, drop 160"). The build also runs strokes of 80 and 90 ms, wipes of 100, 120, 160 and 217 ms, a 160 ms flip that waits 150 ms, and drops of 137 and 157 ms. The sequence sheet has them; the manifest entry does not (minus 1).
- Not deducted, to tighten: `motion[3]` derives the stepped band from "a thread advances one message at a time" and from the constraint. A step is 64 px, not a message, and the constraint allows continuous movement. The real source is step-printing, which this axis may not see and which `imagery[0]` already binds. Say less in `motion[3]`.

Checked and found as stated: `style_tags[1]`, `[3]`; `mood[1]`; `color_palette[0]` to `[5]`, `[7]`, `[10]` (hue 198 for both, lightness 18%), `[12]` (hue 216 for both, luminance ratio 1.21), `[13]`, `[14]`, `[15]`; `typography[0]` to `[5]`; `key_visual_elements[2]`, `[4]`, `[5]`, `[6]`, `[8]`, `[9]`, `[11]`, `[15]`; `imagery[1]` (bar widths 2.6 to 10 px, lengths 70 to 175 px, alpha .6 and .42), `[2]`, `[3]`, `[7]`; `surface_treatment[0]`, `[1]`, `[4]`, `[6]`; `ornament[0]` to `[4]`, `[6]`; `motion[2]`, `[6]`, `[7]`, `[10]`; `inspirations[5]`. Quoted phrases from the two seed entries exist in those files.

## What's drifted into the attractor

- **Anti-default 10 and 12, desktop only.** At 900 and up each episode gains a margin heading: "PDF 和记录", "月报表", "价格", "Pricing", "Monthly report". On the phone the asker's question does that job ("多少钱？"). On desktop the page now has both, and the heading is the generic one. At 1440 the right fifth of every screen below the first is empty, and in the tall episodes the margin holds one short note against 700 px of attachment (`c3_walk_d1440en_c`).
- **Desktop first screen.** Claim and button left, product right is the stock arrangement, and it puts the sheet at x 815 where the lane below puts the leaf at x 80, so the sheet he watched being made is on the other side of the screen when it tears off.
- **The framing's own stock device.** Five identical read receipts (see fits framing).
- Cleared since cycle 2: anti-default 9 in motion (no translucent rounded card is left in the streak), anti-default 3 (200 ms hold), anti-default 12 (five sample tapes, was twelve). Anti-defaults 1, 2, 5, 6, 7, 8, 11, 13: no match.

## Rebuild list (specific moves)

1. **Ticks on the clock (`story()`, `.doc-bubble[data-state]`; framing).** Start the receipt from the frame the leaf lands, not from scroll position: sent at landing, delivered at +260 ms, read at +520 ms, each a cut. Scrolling back above the drop threshold still undoes all three. Then make the other four receipts earn their place or remove three of them: either each cuts from one grey tick to two blue 260 ms after its attachment's first full frame on screen, or only the PDF and the plans carry one.
2. **Streak heads (`addSmear`, `.smear .hd`; Wong Kar-wai).** Cut the slab body down so the bars carry the picture: cap the untorn part of `.hd` at about 1.2em, make the tines uneven in width as well as length (now 3 to 15% each, read as teeth), and let two or three bars run past the head by 2 to 4em. Check the three frames between 200 and 530 ms at 390 and at 1280. Keep the step rate and the flash figure where they are.
3. **Desktop margin (`.tc>h2`, `.tc>.notice`).** Drop the generic headings or replace each with the fact it stands beside (the note already states it); let the margin carry something per episode at its own height, for example the note for the stub beside the stub and the note for the PDF beside the file bar. Consider putting the hero stage on the lane's side so the sheet and the leaf share an edge.
4. **`motion[5]` and `motion[3]` in `borrowings_v3_body.md`.** Give ranges (stroke 80 to 110, wipe 100 to 217, flip 160 to 200, drop 137 to 160) or point to section 6; trim `motion[3]` to what its two inputs can carry.
5. **Language without script, and two table cells.** Make the toggle a real link that works with scripts off (for example an anchor to `#en` with `html:has(#en:target)` rules, or hide the control in a `<noscript>` style and say so in the row). Correct "four links" in Bukku "Navigation depth" to six and name them.
6. **Gutter.** `.set-start .bubble`, `.set-end .bubble` and the hanging message: 16 px from the stage edge at 390, not 12.

## Honest take

I came in expecting to be shown the same deck of tinted cards with the text scraped off, and that is not what is on the screen. The crowd has no faces now: slabs and bars go past a sheet that does not move, the name is lifted out of a message that hangs still, and at half a second the cut lands when the Designer said it would. Two taps no longer file a zero-ringgit invoice or send Tanjung's bill to Lumen; I walked every client and the draft to the footer and the record holds. Nothing fades in several thousand sampled frames. So the scores move, and by more than a point on the manifest, which finally describes the page that exists. What keeps this off ten is small and it is all in the timing and the edges, which is exactly where this visitor looks. The tick, the one motion the framing singled out, lasts a tenth of a second if he scrolls slowly and does not happen if he flicks, and then it is stamped five times as decoration. The first third of a second of the streak is combs. The desktop margin has been filled with the word "Pricing". One more pass, a short one.

## Not verified

- Real motion on a phone at 60 frames a second. Everything here is headless Chromium: video at 25 frames a second, lossless frames stepped on the page clock, and per-frame logs. Whether the streak reads as speed in the hand, nobody has watched.
- Safari and Firefox. The smear relies on a visible child inside a hidden parent and on `clip-path` polygons with `calc()`.
- Flashing on a real display; the count is from stepped lossless frames.
- Contrast was computed from colour values, not sampled from rendered pixels on the two new grounds.
- Saved and not opened (their content is covered by the DOM read-back or by a sibling frame, but I did not look at them): `c3_walk_rm390zh_a/b`, `c3_walk_nojs390_b`, `c3_walk_nojs1280_c`, `c3_walk_rm1280zh_d`, `c3_walk_d1440en_b/d`, `c3_walk_tanjung390zh_b`, `c3_walk_draft390zh_b`, `c3_walk_aria390en_b`, `c3_first_*`, `c3_mid_900_zh`, the `c3_rt390en_*` sheets other than three, `c3_lang_1280_*`. 320 px was measured for overflow, not looked at. 1440 was looked at in English only.
- Hover and focus were sampled per frame, not photographed.
- Competitor behaviour marked "not verified today" in `sampling.md` is accepted as recorded.
