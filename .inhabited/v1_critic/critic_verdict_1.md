# Critic verdict — cycle 1

## Scores
- fits framing: 6 / 10
- fits sampled inputs: 7 / 10
- fits competitor judgment: 7 / 10
- fits axis manifestation: 5 / 10
- Constraint honored: PASS (no opacity, alpha or colour ramp found in code, in a per-frame sampler, in `getAnimations()` or in frames; only `transform`, `clip-path`, `stroke-dashoffset` and `visibility` animate)
- Slop gate: (not run; the rubric is below 10 and a hard limit fails)
- Hard limits: FAIL (2)

Caps applied: none changed a number. Hard limit 2 fails, which caps every factor at 7; no factor scored above 7 before the cap.

## Gates

**ms-sample replay (all match `sampling.md`; the file and the persona table agree):**

```
Framing      1794798837238 40 1 -> [37]        recorded [37]        MATCH  (idx 37 = WhatsApp forwarded-message vernacular)
Designer     1794799205550 20 1 -> [14]        recorded [14]        MATCH  (idx 14 = Wong Kar-wai)
Seeds        1794800480856 40 2 -> [12, 20]    recorded [12, 20]    MATCH  (crossed cheque leaf; Night Mail)
Constraint   1794799080271  8 1 -> [1]         recorded [1]         MATCH  (No cross-fades)
Competitors  1794799137895 20 2 -> [6, 19]     recorded [6, 19]     MATCH  (Bukku; Invoice-Generator.com)
Domain       1794799252914 20 2 -> [10, 13]    recorded [10, 13]    MATCH  (camera tape; e-invoice return block)
Typography   1794799835954 15 3 -> [4, 8, 10]  recorded [4, 8, 10]  MATCH  (Bricolage Grotesque; Instrument Sans; Kanit)
Typography K random.Random(1794799831142).randint(2,4) -> 3   recorded 3   MATCH
```

No further audit block exists in `sampling.md`. Gate: PASS.

**Persona discipline: PASS.** `claude_designer.md` headings are Who you are, What you do not negotiate, Brand personality, Theme, Aesthetic direction, Design principles, How you think, How you work, Voice and tone, Things you do not do, Distinctive vocabulary, In summary. None prescribes page anatomy; the search terms return nothing. No `layout_sketch_v1.md` exists; the assembly table is `borrowings_v1.md` section 5 and every region in it cites a bank entry.

**Constraint tests.** Test 1 used the in-page `requestAnimationFrame` sampler (computed `opacity`, `color`, `background-color`, `border-top-color`, `fill`, `stroke`, `filter`, `backdrop-filter` on every element, every frame) plus `document.getAnimations()` polled on the same frames, plus screenshot loops with real elapsed ms; no video was recorded. Sequences: load with S1, language toggle both ways, replay, rail by keyboard and by drag, three client taps, rate add, remove, none left and re-add, wheel scroll down and up, a jump to the bottom and back, month tap, approve and undo, token revoke and create, hover, focus and press on all 31 interactive elements. Result in both motion modes: 0 elements with three or more distinct values of any watched property; every colour change is one cut. Animated properties seen: `transform`, `visibility`, `strokeDashoffset`, `clipPath`, and two CSS transitions on `transform` (tile flips). Test 2: `opacity` appears twice, both fixed (`.ghost` .38 and .2); no `rgba`, no `@keyframes`, no `transition: all`, no view transition, no canvas. Test 3: hover is an underline, pressed is a 1 px drop with a thinner inset border, focus is an outline; all cuts. Test 4: under `reducedMotion: 'reduce'` nothing travels and the finished frame is there from first paint. Script: `tools/critic_sampler.js`.

Cases where I took the stricter reading and still pass, named so the Designer can answer in pixels: (a) the two ghost strips trail the band at fixed .38 and .2 and are cut on and off by `visibility`; a stack of copies at falling fixed alpha is close to a decay trail, but no pixel's alpha changes over time. (b) `mix-blend-mode: difference` on the toggle labels inverts them as the thumb's edge passes; that is a travelling edge.

Where the constraint forced a change of habit: language switch (36 px thumb slide, strings cut on the stop frame), hover and press (shape only), product arrivals (caught, wiped or already there), ticks grey to blue (cut), captions (cut), reduced motion (finished frame).

**Capture provenance.** Scored against Designer screens at `designer/screens/` (6 files read: `rest_390_zh`, `sheet_s1_a`, `sheet_s1_b`, `sheet_rt_a`, `sheet_s8_down`, `sheet_s9`). Captured independently into `v1_critic/screens/` and read 18 files: real-time load at 390 (`sheet_rt_zh_a`, `sheet_rt_zh_d`, two strips of consecutive stage frames) because motion needs wall-clock frames; cold load with delayed fonts (`sheet_cold_flash`) to check first paint; default-motion walk (`sheet_walk_zh_a`, `_b`); story scroll (`sheet_story_a`, `_b`); client tap (`sheet_tap_client`); reduced motion in both languages (`sheet_rm_zh_a`, `_b`, `sheet_rm_en_a`) for hard limits 7 and 8; 1280 x 800 (`d1280_rest_zh`, `d1280_s1_t1250`, `d1280_walk_02`); 3x zooms of the stage (`zoom3x_rest_stage`, `zoom3x_s1_t0900_stage`) to judge it at phone density. The Designer's screens are not fabricated.

## Hard limits

| # | Limit | Result | Evidence |
|---|---|---|---|
| 1 | No claims beyond `facts.md` | PASS, with one risk | Every string in both languages traces to `facts.md`; links match its routes. Risk: `#story .doc-bubble` shows 已发送, 已送达, 已读 with ticks under a caption about what the client receives. `facts.md` says SIS generates the invoice and its PDF; it does not say SIS sends anything or reports delivery. Nothing says whose chat this is. See rebuild item 12. |
| 2 | Exact prices; sample data labelled | **FAIL** | Prices are exact (`#hero .trial-terms`, `#pricing .plan`) and plan lists match. But two mock screens carry figures with no sample label: `#report` (six months of sales and expenses, net RM 9,250, a client ranking with RM 14,400) and `#story-stage` (INV-011 RM 1,200.00, INV-008, INV-006). The only labels are on the hero sheet, `.sample-note` (which names studio, clients, rates and chat lines, not report figures), `.review-card` and `.sis-plate`. `sheet_walk_zh_a.png`, frames 2 and 3. |
| 3 | No QR, no LHDN wording | PASS | grep returns nothing. `.record-block .mark` is a 28 px square holding "1/1"; it does not read as a code. |
| 4 | No cheque, bank, account, payment claim | PASS, with a watch item | grep returns nothing. The sheet says 银行资料：示例里不显示. Watch: `.machine-line` "2026014  16112026  270000" is 21 unlabelled digits at the foot, two lines under the bank-details line. |
| 5 | No photographs or generated images | PASS | Hits are `url(#doodle)`, `url(#grain)` and three sample file names. |
| 6 | No long dashes | PASS | grep returns nothing. |
| 7 | Trial button, both prices, invoice in the first screen at 390 | PASS | Identical in zh and en, at rest and under reduced motion: `.hero-cta` y 515 to 567, `.trial-terms` 573 to 609, `#sheet` 185 to 481 (252 x 296, all in view), toggle 4 to 48; none covered. At 390 x 700 all four are still in view. Load: `.hero-stage` is in its finished state at first paint, is emptied when S1 starts (about 150 ms warm, later on a cold font load), has client and lines back by about 1.9 s and is complete at about 2.6 s. Note, not gating: 12 text runs on the sheet are 8 px or smaller and nothing in the stage exceeds 13 px. At 700 px tall the pickers (y 677 on) are below the fold. |
| 8 | Complete still under reduced motion | PASS | `sheet_rm_zh_a/b`, `sheet_rm_en_a`: every sequence at its end state, all facts and prices present, text in the DOM at load. The story stage's end state is two labelled dashed boxes over 213 px (item 7). |
| 9 | Nothing depends on sound | PASS | No audio or video; `.play(` hits are the timeline. The voice note is bars, a duration and a text line; the rail says 无声. |
| 10 | Both languages | PASS | 240 `.zh` and 240 `.en` nodes, all paired; `lang` and `<title>` switch; the only CJK left in English is the toggle's own 中文; no overflow; document height 4,530 px in both. |

Other guardrails: one external request (the Google Fonts stylesheet); `scrollWidth` 390 and 1280; no low-contrast text found. Broken, minor: `.tape-label.sample` ends at x 379 (11 px gutter); `.signin` is 36 px wide.

## What's borrowed correctly

- **Crossed cheque:** all five elements are in pixels on `#sheet`: `.crossing` (two 2 px blue strokes drawn by `stroke-dashoffset`, "INV-014 · 开好了" between), `.strike` on a replaced client (`sheet_tap_client`), `.total` over `.total-words`, `.machine-line`, and the stub left behind at `#story .stub`. It reads as an invoice, not a cheque.
- ***Night Mail*:** six labelled `.slot-empty` pigeon-holes at t = 0; catches at 420, 860, 1,200, 1,460 ms; intervals 440, 340, 260, 200, 160 then a hold, drawn as nine unevenly spaced marks on `.cut-rail`; the drop into `.doc-bubble`, scrubbed by scroll both ways (`sheet_story_a/b`).
- **Camera tape:** `.tape-label` (ragged ends, off level, heavy capitals) replaces eyebrows and pills everywhere; `.wrap-checked` wipes across the review card and covers the last AI 读到 tag (`sheet_s9`); slot rows and flips in `#story` and `#import`.
- **Return block:** `.record-block` wiped in as the last beat with the real time to the second.
- **Wong Kar-wai:** one number, INV-014, in seven places; clock times to the second; the sheet never moves while the lane steps.
- **Type:** computed styles confirm the roles. Chinese h1 700, English h1 800 with `opsz` 31, Instrument Sans in thread and sheet, Kanit only on `.readout` and on amounts in flight, tabular figures, width 100 throughout, no fifth family.
- **Competitor borrows:** every `borrow` hook exists in the DOM and in pixels.
- **Anti-defaults 1, 4, 5, 6:** no shared entrance, no hidden content, nothing pinned, nothing loops.

## What's missing per factor

### fits framing
The thread is a 122 px gutter. At 390 the lane's bubbles are 100 px wide with 10 px text, beside a sheet that takes the other 252 px. The synthesis says "a WhatsApp thread at night with a sheet of paper laid over it"; the build puts a sheet next to a sidebar. A cold viewer of the first screen sees a dark product page with an invoice and a strip of chat, and the turn from mess to invoice plays for 2.4 s in that strip. Below the hero the thread is a caption track: six `.msg` bubbles, all incoming, all grey, all the same shape, one voice, no sender, each sitting above a card (`.slab`) that is outside the thread. `framing.md` promised "attachments that are the product views"; only the PDF is an attachment. Strip the bubble skin and the order is hero, four feature sections, two price cards, call to action, footer. Finish is below the live page, not at or above it: one flat ground, a `--counter` slab at 1.1:1 against it, no light anywhere.

### fits sampled inputs
- **Wong Kar-wai, two speeds:** present in code, weak in pixels. In every captured frame each lane bubble is sharp and readable; the ghosts sit exactly one and two 60 px steps behind, so they land under neighbouring bubbles and show only as teal under-shapes (`zoom3x_s1_t0900_stage`). It reads as a chat column hopping, not as a world streaking past a still subject. "Dark, saturated, neon at night" has no element in the build.
- **Hard cuts between episodes** is claimed for `.date-chip`. A static chip is a thread separator. As a cut it is a principle, not an element.
- **The catch** is a 129 x 14 px chip with 11 px text crossing about 150 px in 140 ms. It is the central event of the page and it is the size of a footnote.
- **Lock switch (R06.5):** a 6 x 14 px nub. The word 已选 carries the state; the switch does not.
- **Log:** 21 "visible at: pending build" markers in `borrowings_v1.md` were never filled.

### fits competitor judgment
Tables are complete and identical to `sampling.md`. Three `diverge` rows are not executed: Bukku "Product framing on a phone" (promises one object at reading size; the sheet's type is 6.2 to 13 px), "Data density" (promises one number per moment; `#report` prints 21 figures in 358 x 310), "Layout" (promises one idea per screen; the first 907 px hold ten blocks). Every `diverge` row has N/A as its build location, so none can be opened.

### fits axis manifestation
All ten axes present, 79 entries, framing cited in 35%. Deductions: `motion[3]` gives "12 a second" as derived from framing and constraint, but that number is the Designer's step-print (R03.1, R03.2), which the motion sub-pass could not see: phantom, minus 2. `motion[9]` derives the rail from "double ticks": forced, minus 1. `surface_treatment[0]` derives "no glow" from "neon-at-night finish" and from a constraint about change over time; its real source is the anti-defaults file: minus 1. `ornament[3]` claims "slightly uneven ends"; the strokes are straight with square ends: minus 1.

## What's drifted into the attractor

- **Anti-default 3 and a flash frame.** The finished invoice is painted, then cut to empty, then rebuilt (`sheet_cold_flash`: finished sheet in the fallback font at first paint, emptied afterwards). An editor reads that as a flash frame.
- **Anti-default 2.** S1's tempo is authored; the later sequences are not. `#import` files fire at p .12, .26, .40, .54, .68 (even .14), month bars at .13 i, field wipes at .78, .85, .92.
- **Anti-default 10.** Under the bubbles: hero, feature blocks, two equal price cards, call to action, footer.
- **Anti-default 12.** `.hero-cta` reads 免费试用 7 天 and the line directly under it opens 7 天免费试用. "PDF 出自同一份记录" is said on the record block and again in the first message. English h1 "Pick a client, a rate." is clipped.
- **Miniature product UI.** About 150 visible text runs are under 11 px (lane 32, hero sheet 26, later stages 82, page 16), not counting the hidden leaf.

## Rebuild list (specific moves)

1. **`.hero-stage` (framing, R03.1, R02.1): give the event the screen.** Run `.thread-band` across the whole stage behind `#sheet`, at message size (text 13 px or more), so the sheet lies over the thread and bubbles pass on its left and above and below it. Enlarge the sheet's client, lines and total (name and rows 11 px or more, total 16 px or more) and cut what does not fit to the leaf view. Make `.catch` chips at bubble text size with travel of 200 px or more. Recover height by moving `.stage-caption` inside the stage and merging the duplicate terms wording. Keep hard limit 7.
2. **`.ghost` (R03.2): make the smear a streak.** Offset the copies off the 60 px grid (for example 22 and 47 px) and stretch them along travel (scaleY 2.5 or more from the trailing edge) so they show in the gaps; saturate the tints. Passing bubbles need not be readable while moving; only the catch sources do. Fixed alpha, cut on and off.
3. **First paint (S1 trigger).** Set the S1 start frame before first paint with a small script in `<head>` when motion is allowed, and start the clock from that held frame. Keep the finished frame for no script and reduced motion.
4. **Hard limit 2.** Put a sample `.tape-label` on `#report` and on `#story-stage` in both languages and widen `.sample-note` to cover report figures and past invoices.
5. **`main.thread` below the hero (framing).** Make each product view an attachment inside the thread with a tail and a file or forwarded header, open each episode with the asker's grey bubble and answer in the outgoing colour with ticks, and use the tick state as the episode's end signal. All by cut.
6. **Finish (framing; borrowings open item 2).** Give the page one hard-edged source of light and real saturation in the "before": a clearly lighter slab, flat tinted blocks in tick blue and outgoing green in the lane. No gradient, no glass.
7. **`#story-stage` (R01.4).** Start progress when the whole leaf is on screen (now p = 0 at 78% of the viewport, so the tear happens at the bottom edge), and close the 213 px dashed void in the end state.
8. **`#import`, `#reports` (R02.3).** Replace the even steps with shortening intervals and a hold, as S1 has.
9. **Competitor rows.** `#report`: show the picked month's three figures large and drop the twelve under the bars, or change the row to `borrow` with a reason. First screen: move `.cut-rail` or one picker row below the fold line. Replace N/A in each `diverge` row with where the alternative is visible. Fill the 21 pending evidence cells.
10. **Manifest.** Remove "12 a second" from `motion[3]` (it is already in `imagery[0]`); re-derive or delete `motion[9]` and `surface_treatment[0]`; draw the uneven stroke ends or delete the phrase in `ornament[3]`.
11. **Copy.** `.trial-terms`: drop the repeated trial phrase. Fix the English h1. Say "PDF from one record" once.
12. **`.doc-bubble` (hard limit 1 risk).** Say in the caption that he sends the PDF in his own chat.
13. **Small.** `.tape-label.sample` inside the 16 px gutter; `.signin` to 44 px wide; `.lock` to a switch that can be read without the word; label the three groups of `.machine-line`.

## Honest take

The gates are clean and the discipline is real: nothing fades, every sample replays, the cheque marks and the camera tape are specific and I have not seen them on a page like this before. That is why the first screen is frustrating. The owner asked for presentation that beats a dark, cinematic page, and the build answered with a correct, well-set invoice 252 px wide, a 122 px strip of chat hopping beside it, and a catch the size of a footnote, all on a flat ground with no light in it. The idea is on the page at one third of the size it needs, and the first thing it does is flash its own ending. Below the hero the thread turns into section intros in grey bubbles. This is a careful build of a small idea of the brief. The sample asked for a street at night with one lit counter and a crowd going past as blur; cycle 2 has to put that on the screen at the size of the screen.
