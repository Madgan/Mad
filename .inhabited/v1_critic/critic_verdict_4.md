# Critic verdict: cycle 4

## Scores
- fits framing: 9 / 10
- fits sampled inputs: 9 / 10
- fits competitor judgment: 10 / 10
- fits axis manifestation: 9 / 10
- Constraint honored: PASS (per-frame sampler and `getAnimations()` in both motion modes, code search, frames: only `transform`, `clip-path`, `stroke-dashoffset` and `visibility` animate; no opacity or alpha value changes anywhere)
- Slop gate: not run (three factors are below 10)
- Hard limits: PASS (10 of 10; none fail)

Caps applied: none. Cycle 3 for comparison: 9, 9, 9, 9; constraint PASS; hard limits 10 of 10.

| Factor | Cycle 3 | Cycle 4 |
|---|---|---|
| fits framing | 9 | 9 |
| fits sampled inputs | 9 | 9 |
| fits competitor judgment | 9 | 10 |
| fits axis manifestation | 9 | 9 |

## Gates

**ms-sample replay (re-run this cycle; all match `sampling.md`; no further audit block exists):**

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

**Persona discipline: PASS.** `claude_designer.md` mtime 2026-11-16 04:03, unchanged since cycle 1, read end to end again. No heading prescribes page anatomy. No `layout_sketch` file exists.

**Constraint tests, all four re-run.**
- Test 1, frames. `tools/c4_sampler.js` (the cycle 3 sampler, copied), log `tools/c4_sampler_log.txt`. On every animation frame it records computed `opacity`, `color`, `background-color`, `border-top-color`, `outline-color`, `fill`, `stroke`, `fill-opacity`, `stroke-opacity`, `stop-opacity`, `flood-opacity`, `filter`, `backdrop-filter`, `mix-blend-mode` for every element and polls `document.getAnimations()`. Sequences at 390 x 844, normal and reduced motion: load and opening, the switch both ways, replay, rail by keyboard and drag, three client taps, rate add, remove, none left, re-add, wheel down and up the whole page (this covers the PDF receipt clock and the four receipt timers), a jump to the bottom and back, month tap, approve and undo, token revoke and create, hover, focus and press on all 31 interactive elements. The word opacity appears in no line of the log. The only elements with three values of a watched property are `body` and `header.topbar` (`#0B1216`, `#0B2346`, `#2A1606`, each held 26 to 509 frames, nothing between). Animation kinds seen: `transform`, `clipPath`, `strokeDashoffset`, `visibility`, CSS transitions on `transform`. Reduced motion: no animation at all except `visibility` holds. Page errors: none.
- Test 2, code. Every `opacity` in the file: line 42 `stroke-opacity='.045'` in the wallpaper data URI; lines 173 to 175 `.smear .tr` .6, .42, .42; lines 207 and 208 `.catch-tr` .6, .42. All fixed. Also fixed: `mix-blend-mode` on `.lt-zh`, `.lt-en` (line 96) and `.beam` (196); `transparent` in borders and dash gradients; line 47 `.cuts .ep{background-color:transparent}` (static). None of: `rgba(`, `hsla(`, 8 or 4 digit hex, `@keyframes`, CSS `animation`, `transition: all`, `startViewTransition`, `<animate>`, canvas, scroll timelines, `globalAlpha`. Transitions: three, all `transform ... linear` (357, 396, 441), and two `transition:none` rules (57, 608).
- Test 3, states: hover, focus and press on 31 elements, single cuts only. The switch's focus ring is a 2 px tick-blue outline, drawn at once (`c4_focus_390_toggle.png`).
- Test 4, reduced motion: finished frame from the first sample; `*{transition:none!important}` under the media query.

Where the constraint forced a change of habit, as before: the sheet arrives by a cut, the three grounds and the chip cut on one frame, ticks and both languages cut (with scripts off the switch is a pure CSS cut), the record block, the green wrap and the AI fields wipe.

**Opening timing (`tools/c4_open2.js`, 8 cold runs, log `tools/c4_open_log.txt`).** Thread starts 182 to 283 ms after first contentful paint; sheet cut in 480 to 524 ms after it (519 to 549 after the page's own `SIS_T0`). No run showed a finished sheet before the opening. The 200 ms hold and "sheet in by about 540 ms" are met.

**Flashing, verified (`tools/c4_flashcap.js`, `tools/c4_flash.py`, log `tools/c4_flash_log.txt`, 146 lossless frames per condition).** Pixels with more than three flashes in one second (7 or more opposing transitions), worst 341 x 256 box: 390 zh 0.3%, 390 en 0.1%, 1280 zh 0.7%, 1280 en 0.3%. The designer's 0.7% worst case is exact. Two flashes a second: 26.0%, 30.8%, 30.7%, under the line of three. Safe.

**Capture provenance.** Scored against my own captures, prefix `c4_`, in `v1_critic/screens/` (75 files saved, 47 opened, listed under "Not verified" for the rest). Designer `rebuild3_*` frames consulted, not relied on. Captured independently because the build changed and motion, first screen, reduced motion and no script cannot be taken from anyone's stills: streak frames on the page clock (`c4_streak_390zh_a/b`, `c4_streak_390en_a`, `c4_streak_1280zh_a/b`, `c4_streak_1280en_a`); receipt logs at five speeds (`tools/c4_ticks.js`, `tools/c4_ticks_log.txt`) and the four other receipts (`c4_receipts_390zh_a`, `tools/c4_receipts_log.txt`); desktop walks (`c4_walk_d1280zh_a` to `_d`, `c4_walk_d1280en_b`, `c4_walk_d1440en_01`, `_02`, `c4_walk_d1440zh_03`); language (`c4_lang_nojs_390_a`, `c4_lang_nojs_1280_b`, `c4_lang_js_390_a`, `c4_lang_js_1280_c`, `_d`); reduced motion and no script (`c4_walk_rm390zh_a/b`, `c4_walk_rm1280en_a`, `c4_walk_nojs390_a`, `c4_walk_nojs1280_b`); states (`c4_walk_draft390zh_a`, `c4_walk_draft1280en_a`, `c4_walk_tanjung390en_a`, `c4_walk_aria1280zh_b`); 320 (`c4_w320_pair`).

## Hard limits

| # | Limit | Result | Evidence |
|---|---|---|---|
| 1 | No claims beyond `facts.md` | PASS | Full visible text dumped in both languages (`tools/c4_audit.js`, 379 lines each) and read against `facts.md`. The re-cut notes keep the same facts; the trust line drops "payments" from the stored-data list, which removes rather than adds. Nothing from the Unknown list. 14 links, all to listed routes. |
| 2 | Exact prices; sample labelled | PASS | Only 7-day trial, RM 199/year, RM 399/year as offers, in copy and meta. Five yellow sample tapes, three "示例聊天 / sample chat", one "示例资料 / sample data", the sample note. |
| 3 | No QR, no forbidden words | PASS | `grep -n -i -E 'LHDN\|IRBM\|MyInvois\|\be[- ]?invoic\|einvois\|validat\|\bQR\b\|qrcode\|电子发票\|內陸稅收局\|内陆税收局\|税务局\|已验证\|验证通过'` returns nothing. The record mark is "1/1" in a ruled square. |
| 4 | No cheque, bank, account, payment claim | PASS | Limit 4 grep returns nothing; a second grep for paid, 已付, 收款, payment received, pay now, credit card, 信用卡, refund, 退款, SST, trusted by, users returns nothing. "Bank details: not shown in this sample." and the terms line only. |
| 5 | No photographs | PASS | Hits: one SVG data URI, `url(#doodle)`, `url(#grain)`, three sample file names. No `<img>`, no raster. |
| 6 | No long dashes | PASS | `LC_ALL=C.UTF-8 grep -n -P '[\x{2012}\x{2013}\x{2014}\x{2015}\x{2E3A}\x{2E3B}\x{FE31}\x{FE58}]'` returns 0 lines. |
| 7 | First screen at 390 | PASS | zh and en, at rest and reduced: `#hero .hero-cta` y 575 to 631; `.trial-terms` 608 to 620 (12.5 px, 600); `#sheet` 181 to 473 (280 x 292, all of it); switch 4 to 48; top-bar trial 4 to 48; none covered. Same at 390 x 700. Button and prices readable on the first frame; sheet in at about 0.5 s. |
| 8 | Complete still, reduced motion | PASS | `c4_walk_rm390zh_a/b`, `c4_walk_rm1280en_a`: leaf in the reply with two blue ticks, stub filed, six months with 014, five files read, three fields read, both plans, every receipt read. No script: the same with fixed sample times (`c4_walk_nojs390_a`, `c4_walk_nojs1280_b`). |
| 9 | Nothing depends on sound | PASS | No audio or video element or API; grep hits are the `.wave` CSS and three Web Animations `.play(` calls. Voice note: 16 bars, a duration, a line of text, no control. |
| 10 | Both languages | PASS | 191 Chinese runs and their English partners (the one unmatched span is "令牌" before the shared word TOKEN). `lang`, title and description switch with script. With scripts off the switch now works (below). No overflow either way. |

Other guardrails. One external request (Google Fonts). `scrollWidth` equals the viewport at 320, 390, 768, 1280, 1440 in both languages; sideways wheel leaves `scrollX` 0; no unclipped element past the edge. At 390 and up: no visible text under 11 px, no target under 44 px. Gutter 16 px at 390 and 320 (below). No wheel or touch listener, no scroll snap.

**The two 320 px findings, ruled.** Neither "no text under 11 px" nor "44 px targets" is one of the ten hard limits, and neither appears in `claude_critic.md`, `inhabited.md` or `build-environment.md`. They are quality floors earlier critics applied at the design widths, which those files name as 390 (phone first) and 1440 (`build-environment.md`: "design at 390 px wide, then 1440 px"; `inhabited.md`: "Phone first (390 px wide)"); the only width-specific rule in the persona's guardrails is the 16 px gutter "at 390". So at 320 neither is a failure. The month columns, 41 x 92 px, pass WCAG 2.2 AA target size (24 px, 2.5.8); 44 px is the AAA figure. The 170 stage runs at 9.1 to 10.7 px sit inside a product mock that scales to fit the screen; I looked (`c4_w320_pair.png`) and the sheet reads, small. Noted, not deducted, not on the rebuild list.

## Status of the six cycle-3 rebuild items

| # | Item | Status | Evidence |
|---|---|---|---|
| 1 | Ticks on a clock | Partly closed | The PDF receipt is closed: from the landing frame, sent 0, delivered 265 to 267, read 532 to 537 ms, at 300, 600 and 1,500 px a second (390, zh and en), 800 and 2,500 (1280); the file bar on screen at every cut; back above the drop it is `empty`, down again it plays again (`tools/c4_ticks_log.txt`). The four other receipts: open, ruled below. |
| 2 | Streak heads | Closed | `c4_streak_390zh_a`, `c4_streak_390en_a`, `c4_streak_1280zh_a/b`, `c4_streak_1280en_a` at 84, 168, 252, 294 ms on the page clock (that is about 280 to 500 ms after first paint): no slab is left; loose tines and thin bars fill the band; one sharp message ("抬头写 Lumen Events Sdn Bhd" / "Bill it to Lumen Events Sdn Bhd") hangs still at the lower left from the first step until its catch. It reads as a still subject against drag. Remainder, not deducted: at 1280 the middle third of the stage is near empty in that window and the teal clusters on the right still hang like icicle combs. |
| 3 | Desktop margin | Partly closed | Headings gone; each sentence stands at the height of its thing on a perforated leader; the sheet and the landed leaf share their left edge (816.5 and 816.5 at 1280, measured). But see "fits framing". `c4_walk_d1280zh_b`, `_c`, `_d`, `c4_walk_d1440en_01`, `_02`, `c4_walk_d1440zh_03`. |
| 4 | Manifest | Closed | `motion[5]` ranges match every `animate()` duration I logged (`tools/c4_manifest2_log.txt`: 80, 90, 100, 120, 137, 157, 160, 177, 180, 217); `motion[3]` says only what the constraint carries; Bukku "Navigation depth" names six footer links, and the 14-link count is right. |
| 5 | Language without script | Closed | Scripts off, 390 and 1280: click and Space switch every visible string (zh shown 191 to 0, English 0 to 190, no CJK leaf left), the thumb moves by cut, `scrollWidth` unchanged (`tools/c4_lang2_log.txt`, `c4_lang_nojs_390_a`, `c4_lang_nojs_1280_b`). `lang` and title stay Chinese, as the row says. With script, place held exactly at 1200 and 2600 at both widths; at 3900 on the phone the plans grow in English, as in cycle 3 (`c4_lang_js_390_a`, `c4_lang_js_1280_c/d`). |
| 6 | Gutter | Closed | Nearest bubble, hanging message and block: 16.0 px left and right at 390 and 320, in both languages, at rest and mid-run (`tools/c4_gutter.js`). A 3 degree tape on a client tile overhangs its box by 0.4 px. |

Closed: 4. Partly closed: 2 (items 1 and 3). Open: 0.

**Ruling: the four other receipts.** They are a repeated pattern and do not earn their place as built. Each is the same cut (one grey tick and 已发出, then two blue, 已读 and the minute) fired by the same trigger (the line wholly on screen) after the same 268 to 270 ms (`tools/c4_receipts_log.txt`), four times down the page. That is one entrance applied uniformly, which anti-default 1 names whatever property carries it, and the same timer on every element is the preset timing of anti-default 2. None of the four reports anything the reader needs, and the designer's claim that the plans' receipt "hands him the last line" is not what the code does: `.elapsed` is cut when it comes on screen, not when that receipt turns read. A second flaw sits beside them: the asker bubbles and receipts in month end and day one carry the present minute (01:18 in `c4_receipts_390zh_a`, the same as "today"), so three nights named by three chips share one clock.

**Ruling: 520 ms.** It breaks the Designer's principle 4 as written ("Anything on a clock lasts 420 ms or less, except the one opening sequence"). Nothing waits to be read during it, so the visitor is not harmed, but the rule is exact and so is this critic; my predecessor's 260 and 520 were the wrong numbers. Send back: 0, 200, 400.

## What's borrowed correctly

- **Framing.** Forwarded label, thread as the opening shot, three chats each opened by the asker and closed by his attachment, the composer as the trial button, a voice note drawn as bars, the screenshot of a screenshot 2 degrees off (`shot_rot` matrix .0349). The PDF's tick now has a length of its own: three cuts from the frame it lands, whatever the thumb does.
- **Wong Kar-wai.** A still message against drag from the first step, then the still sheet (`c4_streak_390zh_a/b`); hard cuts between three grounds; INV-014 in eight places; times to the second on the caption, record block and notes.
- **Night Mail.** The pouch hangs still, is caught by one translate; six labelled slots; the rail's ten marks shorten then hold (x 92, 123, 160, 188, 209, 226, 239, 248, 253, 280, 296 at 390); the drop.
- **Crossed cheque.** Strokes 2 px and 1.7 px in `#1F5FBF`; strike; figures over words; stub on a 4 px perforation; labelled numeral line NO, DATE, SEN.
- **Camera tape and return block.** Tapes 3 degrees off; `#1E9E4A`, `#F2C418`, `#D4262C`, `#1F5FBF`; the wrap on approve; "1/1" block wiped last.
- **Type.** Chinese headline 700, English 800 at `opsz` 31 and 27 (phone), 40 and 37 (desktop); price 800 at `opsz` 32; Instrument Sans 400 to 700 in thread and sheet; Kanit 700 on the readout; tabular figures on amounts and stamps; four families, width 100.

## What's missing per factor

### fits framing
- The four receipts (ruled above). The framing named "a tick turning from one to two" as the small precise motion; one tick with a clock is that, four more on the same timer is the vernacular as a scroll effect.
- Month end and day one are stamped with tonight's minute.
- Desktop below the hero: composed as a system, under-filled as a picture. The leader lines tie each sentence to its thing and nothing in the margin is generic any more. But the lane is fixed at 480 px, 37% of 1280 and 33% of 1440, and the 640 to 650 px margin holds one 16 to 18 px sentence per 250 to 480 px of height: about 280 px empty above the first note of `#story`, about 400 px empty beside the plans (`c4_walk_d1280zh_d`, first frame), 230 and 260 px runs at 1440 (`c4_walk_d1440zh_03`), 390 px under "The sheet that tears off is its PDF." (`c4_walk_d1440en_01`). At a glance it reads as a column of captions beside a phone lane, not as a spread.

### fits sampled inputs
- The receipt clock runs 520 ms against the Designer's 420 ms rule.
- Everything else asked for in cycle 3 under this factor is now in the pixels (the streak).

### fits competitor judgment
Both tables complete; every location exists and matches (`.slot-tile` is a logged rename). The two cycle-3 cells are corrected and true: six footer links, named; the switch works with scripts off and the row says what does not change. Every borrow checked at its selector; every diverge has a visible alternative. Nothing to send back.

### fits axis manifestation
88 entries, ten axes, framing in 39%. Checked against computed values and pixels (`tools/c4_manifest.js`, `tools/c4_manifest2.js`): `style_tags[1]`, `[3]`; `mood[1]`; `color_palette[0]` to `[3]`, `[5]` to `[7]`, `[10]`, `[12]`, `[13]`, `[14]`; `typography[0]` to `[5]`; `key_visual_elements[2]`, `[8]`, `[14]`, `[15]`; `imagery[1]` (bars 2.6 to 8.5 px wide, 76 to 185 px long, alpha .6 and .42), `[2]`, `[3]`, `[7]`; `surface_treatment[4]`, `[6]`; `ornament[1]`, `[2]`, `[4]`, `[6]`; `motion[1]`, `[2]`, `[3]`, `[5]`; `inspirations[5]`. All as stated except one:
- `ornament[0]` says ticks sit "on his own five outgoing messages and nowhere else ... always beside a word ... each receipt is seen to change, once". The hero thread has three more outgoing bubbles with grey double ticks (`.bubble.out .tk-svg`, lines 660, 663, 673: "收到，晚点开", "在翻聊天记录", "等下，我找找"), with no word and never changing (`c4_streak_390zh_a`, first frame). "Five" was added in v4. Minus 1.

## What's drifted into the attractor

- **Anti-defaults 1 and 2, in miniature:** the four receipts, one cut on one visibility trigger with one 260 ms delay.
- **Desktop:** the sparse caption track (above). Anti-default 10 and 12 headings: cleared.
- Cleared since cycle 3: the slab comb in the streak, the generic margin headings, the sheet and leaf on opposite sides. Anti-defaults 3, 4, 5, 6, 7, 8, 9, 11, 13: no match.

## Rebuild list (specific moves)

1. **Receipts (`receipts()`, `rcpts`, `TICK`, `.msg.attach[data-state]`, `.tail>.elapsed`; framing, Designer principle 4).** Set `TICK=200`: the PDF goes sent 0, delivered 200, read 400. Stop the four visibility timers. Let the report, old-files and token messages stand at read from the first frame, each with a read time from its own night. Keep one more clocked receipt, the plans message, and make it cause the last line: cut `.elapsed` in on the frame that receipt turns read, not when the line enters the screen. Then the page has two ticks that each mean something: your client got it, and your peer read your price, now your turn.
2. **Episode clocks (`[data-clock]`, `[data-ago]` in `#reports`, `#import`, `#pro`, `#pricing`).** Month end and day one get their own sample times, set from the chip's night, not the visitor's present minute. Today keeps his clock.
3. **Desktop margin (`.tc`, `.tc>.notice`, `.nt`, `.story-stage`).** No screen below the hero at 1280 or 1440, in either language, should show a margin run of more than about 300 px with nothing in it. Ways that stay inside the sample: at 1120 and up widen the lane (`grid-template-columns:minmax(0,1fr) minmax(0,clamp(480px,40vw,580px))`) and scale `.story-stage` to it, so the product carries more of the width; set `.nt` at 22 to 24 px with a 22rem measure so the margin speaks in the page's voice instead of caption size; let each episode's date chip stand in the margin at the height of its cut, large, still cut grey to paper, as the one framing object per episode. Re-measure the `--rows` tracks afterwards.
4. **`ornament[0]` in the v5 manifest.** Count the three hero-thread outgoing bubbles (grey double ticks, no word, unchanging, part of the "before"), or drop "five", "nowhere else" and "always beside a word". Update `motion[1]`, `[5]` and S4 and S13 for item 1, and state principle 4's 420 ms where `motion[5]` says 440.

## Honest take

I came in to catch the tick lying about time and it does not, any more: the PDF lands, and two hundred and sixty milliseconds later it is delivered, whether he crawls or flings. The streak has finally lost its combs; for the first half second there is one message hanging still in a weather of strokes, which is the picture this sample asked for four cycles ago. The switch works with scripts dead, the gutter is sixteen, the competitor tables are now an audit log I could run, and nothing fades in thousands of sampled frames. So I am out of large complaints, and the small ones are exactly the kind this visitor sees. The same tick fires four more times on one stopwatch, because the critic before me shamed the static ones, and the cure is a scroll effect. Three nights share tonight's minute. On a desktop the page is a phone lane with captions floating in a dark field. And the manifest counts five ticks where the first screen shows eight. Fix the clock, give the nights their own times, fill or tighten the margin, correct one sentence. That is a short pass, and it is the last one this loop has room for.

## Not verified

- Real motion on a phone at 60 frames a second; everything here is headless Chromium (frames stepped on the page clock and per-frame logs). No video was recorded this cycle.
- Safari and Firefox: `:has()` for the no-script switch, `display: contents` for `.tail`, `clip-path` polygons, a visible child in a hidden parent.
- Flashing on a real display; contrast re-measured from pixels (no colour changed since cycle 3; computed only).
- The S1 catch durations (120 to 140 ms) were not re-logged: my `animate()` hook missed the opening because its timeline is built at load. The re-cut, drop, wipe, flip, wrap and token durations were logged.
- Tine widths: my parse of the clip polygons is approximate (median 8.6 px, 10th percentile 2.4 px; the maximum it gives, 40.7 px, is joined scraps read as one); the "2 to 22 px" figure is accepted from frames, not measured exactly.
- Screen-reader behaviour of the no-script English state, where `lang` stays `zh-Hans`.
- 768 was checked for overflow, not looked at. Saved and not opened: `c4_first_*`, `c4_lang_js_390_b`, `c4_lang_js_1280_a/b/e/f`, `c4_lang_nojs_1280_a/c`, `c4_receipts_390zh_b`, `c4_streak_1280zh_c`, `c4_walk_d1280en_a/c/d`, `c4_walk_d1440en_00/03` to `_06`, `c4_walk_d1440zh_00` to `_02`, `_04` to `_06`, `c4_walk_rm1280en_b/c/d`, `c4_walk_nojs1280_a/c/d`, `c4_walk_aria1280zh_a/c/d`, `c4_walk_draft1280en_b/c/d`, `c4_walk_draft390zh_b`, `c4_walk_tanjung390en_b`, `c4_w320_top`, `c4_w320_report` (both seen inside `c4_w320_pair`). Their state is covered by the DOM read-backs in `tools/c4_follow_log.txt` and `tools/c4_audit_log.txt`.
- Competitor behaviour marked "not verified today" in `sampling.md` is accepted as recorded.
