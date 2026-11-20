# Borrowings: v2 (rebuild after critic cycle 1), SIS home page version 2

Written 2026-11-16 after the rebuild of `designer/index.html` in answer to `v1_critic/critic_verdict_1.md`. It replaces `borrowings_v1.md` as the attribute-binding manifest and borrowing summary for the page as it now stands. `borrowings_v1.md` is unchanged and remains the record of the first build.

Every evidence cell below names a place in the build (a selector) and a saved frame. Frames are in `v1_critic/screens/`, prefix `rebuild1_`; the `rebuild1_sheet_*.png` files paste the individual frames side by side at full resolution with no scaling. Bank entries are written stand-ins for images that could not be downloaded (accepted deviation), so "reference evidence" cites the written entry.

What is in this file, in order:

0. What the rebuild changed, item by item against the verdict
1. Palette (carried from v1, with the v2 changes in 1.5)
2. Per-reference borrowing log (7 anchors), every element with its build location and frame
3. Competitor judgment tables, every row with a verdict, a rationale and a build location; hook notes and renames
4. Attribute-binding manifest (10 axes)
5. Assembly: where things sit at 390 x 844
6. Sequence sheet, S1 to S12
7. States
8. Global motion rules, stills and the constraint
9. Hard limits carried into the build
10. Open items

---

## 0. What the rebuild changed

| Verdict item | What was re-decided | Where |
|---|---|---|
| 1. The stage is too small (thread a 122 px gutter, 10 px text, sheet type 6 to 13 px, catch 129 x 14 px) | The thread now runs across the whole stage (390 x 370) at message size (13 px) and the sheet is laid over it; the opening shot is the thread alone, full stage, and the sheet arrives by a cut at 340 ms. Sheet 280 x 292 with nothing under 11 px (name 14, rows 12, total 18). Catches are 12 to 14 px chips that travel 150 to 250 px up the sheet, each with two trailing copies. The caption moved inside the stage as a subtitle bar; the terms line moved inside the trial button. The 252 px sheet of v1 section 5 is abandoned. | `#hero .hero-stage`, section 5, S1 |
| 2. The smear does not read as a streak | Copies moved off the step grid (22 and 47 px against a 64 px step), stretched 2.6 and 3.6 times along the travel, in tick blue and a saturated thread green at fixed 0.6 and 0.42; the passing bubbles themselves stretch to 1.5 | `.ghost`, `.thread-band.running`, R03.2 |
| 3. First paint flashes the ending | A script in `<head>` sets the start frame before first paint when motion is allowed; the main script takes that frame over and starts the clock from it. No script, reduced motion and `?autoplay=0` get the finished frame. A sampler on every animation frame found 0 frames of the finished sheet before the run | `html.s1-pre`, S1 "Trigger" |
| 4. Hard limit 2 | A sample tape label on every place sample figures appear: `#sheet`, `.leaf`, `.sis-card`, the header of `#report-msg`, `#import-msg`, `#pro-msg`, each `.chat-head`; `.sample-note` widened to past invoices and report figures | section 9, limit 5 |
| 5. Below the hero the thread is a caption track | Each episode is a chat: a date chip, a chat header naming the sample contact, the asker's grey bubble, the product view as an attachment in an outgoing green bubble with a forwarded header, a file bar and ticks, then one centred notice that carries the facts. The ticks are the end signal of each episode | `main.thread`, section 5, S4 to S10 |
| 6. Finish is flatter than the live page | One hard-edged shaft of light across the hero thread, a hard shadow under the sheet, saturated streak colours, wallpaper over the whole page, and three night grounds that change by a cut | `.beam`, `body[data-ep]`, S7 |
| 7. Tear-off timing and the 213 px void | Progress starts when the whole leaf is on screen. The leaf stays at reading size, slides 40 px along the perforation and becomes the outgoing PDF message where it stands; the stub travels down the chat margin into the client page. No dashed outlines remain in the end state | `#story-stage`, S4, S5 |
| 8. Even stagger in import and reports | Unequal, shortening intervals and a hold: months at 0, .20, .37, .51, .62, .70 then 014 at .92; files at .06, .25, .40, .51, .59, hold, fields at .72, .80, .86 | S6, S8 |
| 9. Three `diverge` rows not executed; N/A build locations | One object at reading size (0 text runs under 11 px); one month's three figures at reading size and none under the bars; four blocks in the first 640 px. Every row now has a build location | section 3 |
| 10. Manifest | `motion[3]` no longer carries the frame rate; `motion[9]` and `surface_treatment[0]` re-derived; `ornament[3]` now drawn (hook and flick) | section 4 |
| 11. Copy | The trial phrase is said once in the first screen (the button), the English headline is "Pick a client. Pick a rate. / Invoice done.", "PDF, one record" is said once (on the record block) | `#hero` |
| 12. The PDF bubble's ticks | The notice under it says that sending is done by him in his own chat and that the ticks belong to his chat app, not to SIS | `#story .notice` |
| 13. Small | `.tape-label.sample` ends at x 366; `.signin` is 44 px wide; the lock is a 12 x 36 px track with a knob and a padlock at its lower end; the machine line's three groups are labelled NO, DATE, SEN | `#sheet`, `.tile .lock` |

---

{{PALETTE}}
### 1.5 What changed in the palette for v2

- **Removed:** `--counter #121C22` and the slab it coloured. Product views now sit inside message bubbles, so the slab has no job.
- **Added, from the `color_palette` and `surface_treatment` sub-passes (not from a bank anchor; starting values, not measured):** `#0F394B` on `.beam`, laid over the hero thread with a fixed `mix-blend-mode: screen`, so whatever passes under it is lit by the same amount (`cp[10]`); `#12A07E` on the second streak copy (`cp[11]`); two more grounds, `#081530` (month end) and `#1B1208` (day one), set on `body[data-ep]` and changed by a cut (`su[1]`); `#05090B` behind the subtitle bar and the notices; `#B9D3CC` for times and unread ticks on the outgoing green.
- **Tape colours:** unchanged, still the entry's estimates. Tape white now also colours the file-kind chip; tape red the PDF chip.
- **Contrast added (computed):** `--text` on `#081530` 16.6, on `#1B1208` 16.4, on `#05090B` 17.6; `--meta` on `#081530` 6.4, on `#1B1208` 6.3; `#B9D3CC` on `--bubble-out` 5.8; `--text` on a bubble under the light, about 6. No text sits on a gradient or a picture. Text does pass under the light while the band runs; those bubbles are not meant to be read in motion, and the still ones were checked.
- **Fixed transparency in use, all unchanging:** streak copies 0.6 and 0.42 (`.ghost`, `.catch.g1`, `.catch.g2`), wallpaper stroke 0.045, hero grain 0.07.
- **Palette gate:** still provisional, for the reason given in 1.1.

---

## 2. Per-reference borrowing log (7 anchors)

Each element is named and specific, with the place it lands, the sequence that carries it and a frame in which it can be seen. `R01.4` means Reference 01, element 4.

### Reference 01: Malaysian crossed cheque leaf (`references/seed_crossed_cheque_ac_payee.md`)

**Visual elements borrowed:**
1. The crossing: two parallel diagonal pen strokes across the top-left corner with a phrase between them → `#sheet .crossing` (`.s1` 2 px with a hook where the pen lands, `.s2` 1.7 px with a flick where it lifts, both bowed; "INV-014 · 开好了 / DONE" at 11 px between). Drawn in S1 at 1,900 and 2,030 ms by `stroke-dashoffset` → visible at: `rebuild1_sheet_s1_e.png` (one stroke, then two), `rebuild1_sheet_s1_f.png`, `rebuild1_rest_1280_zh.png`.
2. The strike-through that narrows → `#sheet .bill-to .strike`, `#sheet .row .strike` (S3) and `#pro .token-strip .strike` (S10) → `rebuild1_sheet_taps.png` (client replaced), `rebuild1_sheet_import_b.png` (token revoked).
3. Amount in words and in figures → `#sheet .total` (18 px) over `#sheet .total-words` (11 px), cut in at 1,770 and 1,820 ms → `rebuild1_sheet_s1_d.png`, fourth frame, and `_e.png`.
4. Tear-off with a counterfoil → `#story .leaf` leaves `#story .stub` along `#story .perforation`; the stub stays and is filed (S4, S5) → `rebuild1_sheet_story_a.png`, `rebuild1_sheet_story_b.png`.
5. A machine line of fixed-width numerals along the foot → `#sheet .machine-line` ("NO 2026014 DATE 16112026 SEN 270000", 11 px, tracked 0.1em, the three labels in the label grey) → `rebuild1_rest_390_zh.png`.
6. The leaf's fixed zones → the zone plan of `.invoice-sheet` (meta top right, client and lines across the middle, figures ranged right, numeral line on the bottom edge) → `rebuild1_rest_390_zh.png`.
7. Pale printed paper → `--sheet #F5F2E9` on `.invoice-sheet` (an estimate; the entry gives no number).

**NOT applied:** the cheque itself, a bank name, account or code-line numbers, the words of the printed crossing, "or bearer", any signature line.

**Reference evidence:** the entry's sections "The commitment gestures", "Layout and proportion" and "What the build may borrow", items 1 to 5.

### Reference 02: *Night Mail* (1936) (`references/seed_night_mail_1936.md`)

**Visual elements borrowed:**
1. The catch: one fragment snapped onto the still sheet by a single translate with a hard stop → `.catch` chips at 760, 1,100 and 1,360 ms, 12 to 14 px text, travel about 150 to 250 px, each with two trailing copies `.catch.g1`, `.catch.g2` → `rebuild1_sheet_s1_b.png` (third and fourth frames), `rebuild1_sheet_s1_c.png`, `rebuild1_s1_1280zh_t1150.png`.
2. The pouch that hangs still while the train streaks (the entry's description of the pick-up shot) → `.hang`: the source message is cut into the band under the sheet 190 to 260 ms before its catch and holds there, sharp, while the thread streaks behind it → `rebuild1_sheet_s1_b.png` (first two frames: "抬头写 Lumen Events Sdn Bhd"), `rebuild1_sheet_s1_c.png` (first frame).
3. The pigeon-hole grid: six labelled slots that fill one at a time; the filled grid is the still → `#sheet .slot-empty[data-slot]`, shown from the cut at 340 ms → `rebuild1_sheet_s1_a.png`, fourth frame.
4. Cut length as tempo: intervals shorten, then a long hold → S1 beats at 340, 760, 1,100, 1,360, 1,560, 1,720, 1,840 (intervals 420, 340, 260, 200, 160, 120), drawn as the ten marks on `.cut-rail .marks`; and the same idea in S6 (`MT`) and S8 (`FT`, `DT`) → `rebuild1_rest_390_zh.png` (rail), `rebuild1_sheet_month.png`, `rebuild1_sheet_import_a.png`.
5. The drop: the finished document put out into the thread at a fixed position → `#story .leaf` into `#story .doc-bubble` (S4) → `rebuild1_sheet_story_a.png`, fourth frame.
6. The sorting wall as a row that fills → `#import .slot-row` (S8), shared with anchor 06 → `rebuild1_sheet_import_a.png`.

**NOT applied:** sound, verse, stills, people, the train as an image.

**Reference evidence:** the entry's "Two speeds in one frame", "Sorting as a grid that fills", "Rhythm by cutting", the description of the pick-up shot, and "What the build may borrow", items 1 to 4.

### Reference 03: Wong Kar-wai, *Chungking Express* (1994) (`sampling.md`, "## Designer locked", lines 250 to 267)

**Visual elements borrowed:**
1. Two speeds in one frame: one sharp subject held still (`#sheet`, never transformed) over a world that streaks (`.mover`, 22 steps of 64 px at 12 a second) → `.hero-stage` during S1 → `rebuild1_sheet_s1_b.png`, `rebuild1_sheet_rt_b.png` (wall clock).
2. Step-printing as a drawn treatment: every passing bubble stretched to `scaleY(1.5)`; two copies behind it, 22 and 47 px off the step grid, stretched 2.6 and 3.6 times from their leading edge, in `--tick` and `--streak` at fixed 0.6 and 0.42, shifted 3 and 4 px sideways so the colour bleeds past the bubble's edge; cut on with the first step and cut off when the band stops → `.thread-band.running .strip .bubble`, `.ghost[data-n="1"]`, `.ghost[data-n="2"]` → three consecutive wall-clock frames in `rebuild1_sheet_rt_a.png` (frames 2 to 4) and `rebuild1_sheet_rt_b.png`.
3. Exact time as a repeated mark: to the second on `.record-block .when`, `.stage-caption .ck`, `.wrap-checked`, every `.notice .ck`; to the minute on message times → `rebuild1_sheet_walk390zh_a.png`.
4. One small object repeated: INV-014 on the sheet's meta line, between the crossing strokes, on the machine line, on the stub, in the PDF file name, on the filed tile and on the tag of the current month's bar (seven places) → `rebuild1_sheet_story_b.png`, `rebuild1_sheet_month.png`.
5. Hard cuts between short episodes → S7: as each `.date-chip` passes mid-screen the whole ground (`body[data-ep]`, and the top bar with it) changes on one frame, teal-black to deep blue to warm brown-black, and back when he scrolls back → `rebuild1_walk1280zh_03.png` (month end), `rebuild1_sheet_walk390zh_a.png` (frames 3 and 4), `rebuild1_sheet_walk390zh_b.png`.
6. A lit counter at night: one hard-edged light and one white sheet in it → `.beam`, `#sheet` and its hard shadow → `rebuild1_rest_1280_zh.png`.
7. The cut as an arrival: the sheet is not there and then is → `#sheet` at 340 ms of S1 → `rebuild1_sheet_s1_a.png`, third and fourth frames.

**NOT applied:** film stills, people, neon lettering, any sound. Smear over text or UI at rest (condition 1).

**Reference evidence:** the signature-work description (the snack-bar shot and the step-printed chase), the justification's "dark, saturated, neon-at-night finish" and "hard cuts between short self-contained episodes", and the four conditions at lines 256 to 265.

### Reference 04: Bukku (`sampling.md`, "#### vs Bukku (idx 6)", lines 478 to 508)

**Visual elements borrowed (the `borrow` rows):**
1. Trial button with its true terms in the first screen → `#hero .cta-trial` (y 575 to 631) with `#hero .trial-terms` as its second line; `header.topbar .cta-trial` → `rebuild1_rest_390_zh.png`, `rebuild1_rest_390_en.png`.
2. Verb-first trial label → `.cta-trial` ("免费试用 7 天" / "Start 7-day free trial").
3. Real product screens → `.invoice-sheet`, `#import .review-state`, `#reports .month-bars` → `rebuild1_sheet_walk390zh_a.png`.
4. Slim top bar and a visible language choice → `header.topbar`, `header.topbar .lang-toggle` → `rebuild1_rest_390_en.png`.
5. Named plans, RM price with the period, what each includes, side by side → `#pricing .plan[data-plan="basic"]`, `#pricing .plan[data-plan="pro"]` → `rebuild1_sheet_walk390zh_b.png`.
6. Month-by-month sales, expenses and net profit, labelled → `#reports .month-bars`, `#report .detail` → `rebuild1_sheet_month.png`.
7. The market named in the claim; a local support route → `#hero .hero-claim`, `footer .trust-line`, `footer .support-whatsapp` → `rebuild1_rest_390_zh.png`, `rebuild1_sheet_walk390zh_b.png`.

**NOT applied (the `diverge` rows):** see the table in section 3; each now names where the alternative can be seen.

**Reference evidence:** the table rows named above; Bukku's page itself was not seen (search summaries only, recorded in `sampling.md`).

### Reference 05: Invoice-Generator.com (`sampling.md`, "#### vs Invoice-Generator.com (idx 19)", lines 510 to 538)

**Visual elements borrowed (the `borrow` rows):**
1. The invoice itself in the first screen → `#hero .hero-stage .invoice-sheet` (y 181 to 473) → `rebuild1_rest_390_zh.png`.
2. Invoice anatomy → `.invoice-sheet` with `.from`, `.bill-to`, `.meta`, `.lines`, `.total`; `.terms` on the full leaf in `#story` → `rebuild1_sheet_story_a.png`.
3. Line-item table, amounts right-aligned in tabular figures, in RM → `.invoice-sheet .lines`, `.invoice-sheet .total`.
4. A light sheet on a plain ground, set plainly → `.invoice-sheet` (own type scale in Instrument Sans).
5. Try it with no account → `.picker-client`, `.picker-rate` → `rebuild1_sheet_taps.png`.
6. The PDF as the end of the task → `#story [data-beat="pdf"]` → `rebuild1_sheet_story_b.png`.
7. Almost no navigation; no sound → `header.topbar`; no audio or video element anywhere.

**NOT applied (the `diverge` rows):** see the table in section 3.

**Reference evidence:** the table rows named above.

### Reference 06: Card labels and camera tape (`references/domain_card_labels_camera_tape.md`)

**Visual elements borrowed:**
1. Flip to mark done: a card-shaped tile (clipped top-right corner) turns over on its vertical axis; done is its other face → `.slot-tile.stub` in `#story .slot-row` (S5) and `.old-file` in `#import .slot-row` (S8) → `rebuild1_sheet_story_b.png`, `rebuild1_sheet_import_a.png`.
2. The tape label: a strip with straight long edges, ragged short ends, a few degrees off level, a short code in heavy capitals → `.tape-label` (sample labels, client codes LUMEN, TANJUNG, ARIA, "014", plan names, "AI 读到") → every frame; `rebuild1_rest_1280_zh.png`.
3. The row of slots as a progress readout, no bar and no percentage → `.slot-row` in `#story` and `#import` → `rebuild1_sheet_import_a.png`.
4. Green wrap means checked: a band laid across the object only after a person has reviewed it, covering part of it → `#import .wrap-checked` (S9), which also turns that message's tick to two blue → `rebuild1_sheet_import_b.png`.
5. The lock switch as a physical position → `.picker-client .tile .lock`: a 12 x 36 px track on the tile with an 18 px knob; on the picked tile the knob is down, beside a closed padlock drawn at the lower end (`.pad`), and the word "已选 / Picked" stands next to it → `rebuild1_sheet_taps.png`, `rebuild1_sheet_focus.png`.
6. The identifier travels with the object → the code on the picker tile's tape label is the code that lands on the sheet, the stub and the client page (S3) → `rebuild1_sheet_taps.png`.
7. Tape palette: see 1.2 and 1.5.

**NOT applied:** any camera or card brand, a real product label, a meaning for red tape (red here always carries its own word).

**Reference evidence:** the entry's "How it sequences information" and "Named elements the build may borrow", items 1 to 5, and the colour list under "Colour".

### Reference 07: The return block, formal borrowing only (`references/domain_myinvois_validated_einvoice_qr.md`)

**Visual elements borrowed:**
1. The return stamp as a second, later beat: after the person's part is complete, one compact block is printed onto the foot of the same sheet by the system → `#sheet .record-block`, S1 at 2,230 ms, a left-to-right clip wipe of 170 ms → `rebuild1_sheet_s1_f.png` (before, during, after).
2. The record block's three parts: one plain square mark (26 px, holding the page count "1/1"), one identifier line ("INV-2026-014 · PDF · 同一份记录 / ONE RECORD"), one date and time line with seconds from the real clock, in 11 px tabular capitals → `.record-block .mark`, `.record-block .id`, `.record-block .when` → `rebuild1_rest_390_zh.png`.
3. Two hands, two type voices: what the person chose (client, service) in Instrument Sans 600 and by translate; what the system wrote (number and date, total, record block, machine line) in tabular figures and by wipe or cut → throughout `#sheet` → `rebuild1_sheet_s1_d.png` (number and date wiped in, second and third frames).
4. Before and after on one page: the sheet with empty slots and no block, and the same sheet with the block → S1 and the cut rail → `rebuild1_sheet_s1_a.png`, `rebuild1_sheet_s1_f.png`.

**NOT applied, and never to be applied without the owner:** a matrix code or anything like one, the entry's forbidden words or their Chinese equivalents, a government mark, any compliance claim.

**Reference evidence:** the entry's "How it sequences information" and "Named elements the build may borrow", items 1 to 4.

---

## 3. Competitor judgment tables

The verdicts and rationales are those written at Step 8 in `sampling.md`, unchanged. What is new in v2: every row has a build location. For a `borrow` row it is where the borrowed thing is; for a `diverge` row it is where the alternative can be seen, with a frame. No row is left as N/A.

{{BUKKU}}
{{IG}}
{{TWO}}
### Hook notes for the build

Hooks from the two tables are used with the names recorded there, with one logged rename: the Invoice-Generator.com row "Sound" placed captions on `#story [data-beat]`; captions are now `#hero .stage-caption` (one line per beat of S1, inside the stage) and one `.notice` per episode. `data-beat` stays on the object each caption describes (`.doc-bubble`, `.sis-card`, `#report-msg`, `#import-msg`, `#pro-msg`).

Renames and removals against `borrowings_v1.md`:

| v1 hook | v2 | Why |
|---|---|---|
| `.msg[data-beat]` (grey caption bubbles) | `.notice` for the page's own narration; `.msg.in` for the asker; `.msg.out.attach` for the answer | the thread needed two voices and attachments (verdict item 5) |
| `.slab` | removed | product views are inside message bubbles |
| `.client-head` | `.sis-card .sc-client` | the client page is its own SIS view under the PDF message |
| `.origin`, `.stub-origin`, `.leaf-origin` | removed | the end state has no void to label (item 7) |
| `.csv-tab` | `#report-msg .file-bar .csv-name` | the CSV is the file the report message carries |
| `.strip` alone | `.mover` holding `.strip` and two `.ghost` | one stepped translate moves all three |
| `.bubble.pass`, `.bubble.src` | `.pb` (passing), `.hang` (the still source of a catch) | item 1 and R02.2 |

Added hooks, each tied to a row so that nothing in the build is an unlogged default or divergence:

| Added hook | What it is | Row or anchor that covers it |
|---|---|---|
| `main.thread`, `.date-chip`, `.chat-head`, `.msg.in`, `.msg.out`, `.attach`, `.at-head`, `.file-bar`, `.st`, `.ticks`, `.notice`, `.composer`, `.fwd-label` | the thread as the page's structure | Bukku "Narrative order", "Hero staging" (diverge); framing |
| `.thread-band`, `.mover`, `.set-start`, `.set-end`, `.pb`, `.ghost`, `.beam`, `.hang`, `.catch`, `.slot-empty`, `.stage-caption` | the opening sequence and the stage | both "Motion" rows (diverge); Invoice-Generator.com "Starting state of the invoice" (diverge); anchors 02, 03 |
| `.cut-rail` | the hand transport | Bukku "Interaction" (diverge) |
| `.crossing`, `.strike`, `.total-words`, `.machine-line`, `.record-block` | marks on the sheet | "Invoice anatomy" is borrowed in full; these are additions from anchors 01 and 07 |
| `#story .leaf`, `.stub`, `.perforation`, `.doc-bubble`, `.sis-card`, `.slot-row`, `.slot-tile` | PDF and record | Invoice-Generator.com "The payoff: PDF" (borrow) |
| `#import .old-file`, `.review-card`, `.approve`, `.wrap-checked`, `.wrap-slot` | import | Bukku "Empty and error states" (diverge) |
| `#pro`, `.sis-plate`, `.token-strip`, `.token-state`, `.ai-list` | Pro connection | Bukku "Interaction" (diverge) |
| `.tape-label`, `.sample-note`, `.elapsed` | labels and the last line | Invoice-Generator.com "Sample data" (diverge) |
| `body[data-ep]`, `html.cuts`, `html.s1-pre` | episode grounds; the start frame held before first paint | Bukku "Color" (diverge); verdict item 3 |

---

## 4. Attribute-binding manifest

Ten sub-passes. Each saw the brief (App X and ICP from `inhabited.md`) plus only the inputs the protocol permits for that axis. The line under each heading records what the sub-pass saw and what was hidden from it. Where an element on the page comes from an input the axis was not allowed to see, it is **not claimed in that axis**; it is logged in the per-reference log (section 2) and under `inspirations`, the one axis that sees all seven anchors.

Corrections made to the four entries the critic marked: `motion[3]` no longer states a frame rate (the rate is the Designer's step-print and is bound only in `imagery[0]` and R03.1); `motion[9]` is re-derived from the framing's thumb-native thread and the constraint, and no longer cites the double ticks; `surface_treatment[0]` is rewritten as what the surface now is (one hard light) with its real designer source, and the anti-defaults rule that had been dressed as a derivation is moved to section 8; `ornament[3]` now describes strokes that are drawn that way.

{{COUNT}}

{{MANIFEST}}
---

## 5. Assembly: where things sit at 390 x 844

Chinese is the default. The y values are measured from the built page at 390 x 844 (identical in English down to the picker rows). The fold-safe line is **y = 640**. Total height 5,057 px in Chinese and 5,195 px in English, against about 10,500 px for the live page.

| Region (hook) | y | What is there | Cites |
|---|---|---|---|
| `header.topbar` (sticky, solid, takes the episode's ground) | 0 to 52 | wordmark SIS; `.lang-toggle` 中文 / EN; `.signin` (44 px wide); compact `.cta-trial` | 04 "Navigation", "Language switch"; 05 "Navigation" |
| `.fwd-label` | 59 to 75 | "↪ 已转发 / Forwarded", italic 12 px | framing; `ornament[1]` |
| `#hero .hero-claim` | 77 to 167 | h1 in two lines (Chinese 31/35 at 700; English 26.5/35 at 800), one 13 px line naming Malaysian videographers, photographers and small studios | 04 "Local grounding in the headline"; 05 "Claim in the first screen" (diverge) |
| `#hero .hero-stage` (full bleed, 390 x 394) | 173 to 567 | `.thread-band` 390 x 370: wallpaper, grain, `.mover`, `.beam`, `.hang-layer`. `#sheet` x 94 to 374, y 181 to 473 (280 x 292) laid over it, hard shadow down and to the left. Left of the sheet, 87 px of thread: the ends of five grey bubbles (a question, a forwarded file, a voice-note waveform, the nested screenshot whole, "单发了吗？"). Under the sheet, a band 70 px tall with two whole messages at 13 px: "发票呢？ 23:02" in grey and "等下，我找找 23:02 ✓✓" in green. `.stage-caption` as a subtitle bar, 543 to 567 | 03 (two speeds, the lit counter); 02 (catch, hanging message, pigeon-holes); 05 (the invoice first); 01 (marks); 07 (record block); 06 (tape label) |
| `#hero .cta-trial` with `.trial-terms` inside | 575 to 631 | one green button, two lines: "免费试用 7 天" at 17 px and "Basic RM 199/年 · Pro RM 399/年" at 12.5 px | 04 "Trial offer in the first screen", "Trial terms line" |
| `.cut-rail` | 645 to 689 | replay button, a 2 px rail with ten marks, a knob, a readout in Kanit, "无声 · 拖动逐格看" | 02 element 3 |
| `.picker-client` | 703 to 854 | three card tiles 111 x 108 (clipped corner), each with a tape label, the name, the lock track with its knob and padlock, 公司 or 个人; then the line "客户存一次，下张单直接选。" | 05 "Interaction: try it without an account"; 06 (tile, tape label, lock switch) |
| `.picker-rate` | 868 to 932 | three tape strips 114 x 46 (service, RM amount) | 05; 06 |
| `.sample-note` | 942 to 978 | sample data: studio, clients, rates, chat lines, past invoices and report figures | 05 "Sample data" (diverge) |
| `.date-chip` 今天, then `#story` | 1,000 to 1,918 | `.chat-head` (F, "Farah · Lumen Events", sample tape); `.msg.in` "发票呢？"; `#story-stage` 358 x 642: `.stub` (66 x 104) and `.leaf` (280 x 362, the full sheet with terms) joined at `.perforation`; `.doc-bubble` (292 x 418, outgoing, with `.file-bar`: PDF chip, file name, page count, ticks, word, time); `.sis-card` (SIS chip, "客户页", sample tape, client line, `.slot-row` of four tiles 66 x 104); `.notice` | 01 element 4; 02 element 4; 05 "The payoff: PDF"; 06 (slots, flip) |
| `.date-chip` 月底, then `#reports` | 1,918 to 2,577 | `.chat-head` (陈小姐 · 会计); `.msg.in`; `#report-msg` (outgoing attachment: forwarded header "↪ SIS · 报表" with sample tape; `#report` 334 x 349: six months of bars, month names only, `.bracket`, `.detail` with the picked month's sales and expenses at 14 px and net profit at 26 px, three ranked clients with counts; `.file-bar` with the CSV chip, file name, ticks); `.notice` | 04 "Data display", "Data density" (diverge); 03 (cut between episodes) |
| `.date-chip` 第一天, then `#import` | 2,577 to 3,343 | `.chat-head` (阿杰 · 同行); `.msg.in`; `#import-msg` (header "↪ SIS · 读旧文件"; `#import-stage` 334 x 436: five `.old-file` tiles over a `.slot-row`, `.review-card`, `.review-state`, `.approve` 48 px; ticks); `.notice` | 06 (row of slots, flip, green wrap); 02 element 6; 04 "Empty and error states" (diverge) |
| `#pro` | 3,343 to 3,931 | `.msg.in`; `#pro-msg` (header "↪ SIS · Pro · API / MCP"; `#pro-stage` 334 x 300: `.sis-plate`, `.token-strip`, `.ai-list` with six names as text, `.token-state`, button 48 px; ticks); `.notice` | 06 (tape as a physical state); 01 element 2 |
| `#pricing` | 3,931 to 4,671 | `.msg.in` "多少钱？"; one outgoing message "↪ SIS · 两个方案" holding `.plan[data-plan="basic"]` and `.plan[data-plan="pro"]` side by side, of unequal length, each with a tape label, the price at 32 px, the period, its list and a button; `.notice`; `.elapsed` notice; `.composer` | 04 "Pricing display"; 06 (one tape colour per stock); framing |
| `footer` | 4,671 to 5,057 | `.trust-line`, `.support-whatsapp`, terms, privacy, cookies, sign in | 04 "Local grounding", "Support channel" |

First-screen check against the owner's requirement, at y under 640: claim (77 to 167), a complete invoice (181 to 473), trial button (575 to 631) carrying the 7-day trial and both prices on its two lines, language toggle and a second trial button in the top bar. The claim never overlaps the stage (the stage begins at 173). At 390 x 700 all of these are still in view. Four blocks sit above the fold line; the transport and the pickers begin at 645.

Change of staging recorded: v1 section 5 specified a 252 x 296 sheet beside a 122 px lane. That is replaced by a 280 x 292 sheet over a full-stage thread; the stage grew from 304 to 394 px and the height came from moving the caption inside the stage and the terms inside the button.

At 900 px and up: the first screen is two columns (claim, button, rail and pickers on the left; the stage on the right at 1.25 to 1.6 times its phone size). Below it the thread stays one column, 510 px wide, centred. No sequence changes its timing.

Sample data (fictional, labelled): studio Kite & Reel Studio; clients Lumen Events Sdn Bhd (company), Tanjung Bakery (company), Aria Lim (individual); rates Event video half day RM 1,800, Event photography half day RM 1,200, Highlight edit 1 video RM 900; default total RM 2,700.00; number INV-{year}-014; dates and times from the visitor's clock; chat contacts Farah, Ms Chan, Jay. The full leaf shows payment terms and says its bank details are not shown.

---

## 6. Sequence sheet

Twelve sequences. **Cut** = one frame, done with a stepped `visibility`, class or attribute change, never with opacity. **Hard stop** = linear travel that ends on a frame. **Settle** = on the landing frame the object sits 2 px past its place, on the next it is in place. **Step** = one 64 px jump of the band, 84 ms.

### S1. The Catch (opening sequence)

- **Trigger:** page load, once. A script in `<head>` adds `s1-pre` to `<html>` before first paint when motion is allowed and autoplay is on; the stylesheet then draws the start frame. The main script builds the timeline, seeks it to 0 (the same frame), removes the class, and starts the clock when fonts are ready, no sooner than 320 ms and no later than 700 ms after it ran, so the opening shot is held long enough to be read. If the main script never runs, the head script removes the class after 1.5 s and the finished frame appears by a cut. Replayed by the button on `.cut-rail`.
- **Length:** 2,420 ms, then everything is still.
- **Start frame (held):** the thread alone, across the whole stage at message size: a question, a forwarded message, a voice note with its line of text, a reply with ticks, a screenshot of a screenshot, another question, another reply. No sheet. Subtitle: "聊天记录里，资料到处都是。"

| # | t (ms) | Interval | What happens | Duration | Tags |
|---|---|---|---|---|---|
| 0 | 0 | | The thread runs upward: 22 steps of 64 px. Every bubble stretches to 1.5; two copies trail each one, off the step grid | 1,840 | `imagery[0]`, `imagery[1]`, `motion[3]`, R03.1, R03.2 |
| 1 | 340 | 340 | **Cut:** the sheet is there, with six labelled empty slots | 1 frame | `motion[1]`, R03.7, R02.3, `key_visual_elements[2]` |
| 2 | 760 | 420 | Catch: "抬头写 Lumen Events Sdn Bhd" has hung in the band since 500; the name leaves it and lands in `.bill-to` | 140, hard stop, settle | `motion[2]`, R02.1, R02.2, `imagery[7]` |
| 3 | 1,100 | 340 | Catch: his own old message (green) has hung since 880; service and amount leave it for row 1, the amount in Kanit italic until it lands | 140 | `motion[2]`, `typography[4]`, R02.1 |
| 4 | 1,360 | 260 | Catch: the second rate, for row 2 | 120 | same |
| 5 | 1,560 | 200 | The system's part: number and date are wiped in from the left | 120 | `motion[8]`, R07.3 |
| 6 | 1,720 | 160 | Total: the slot is cut away to RM 0.00, then 1,800.00 at 1,770, then 2,700.00 with the amount in words at 1,820 | 3 cuts | `motion[1]`, `key_visual_elements[12]`, R01.3 |
| 7 | 1,840 | 120 | The band stops on a step. Stretch and copies are cut off; the still thread is what lies round the sheet | 1 frame | `motion[3]`, R03.2 |
| 8 | 1,900 | 60 | The crossing: first stroke, then the second at 2,030; the phrase is cut in at 2,150 | 110 + 110 | `ornament[3]`, `key_visual_elements[3]`, R01.1 |
| 9 | 2,230 | 330 | The return stamp: `.record-block` and `.machine-line` wiped in from the left, with the real time to the second | 170 | `motion[8]`, `ornament[5]`, R07.1, R07.2 |
| 10 | 2,420 | 190 | Hold | | R02.4 |

  Intervals from the cut to the stop: 420, 340, 260, 200, 160, 120. Then the two long beats and the hold. The ten marks on the rail sit at these times.
- **Subtitle (`.stage-caption`), by cut:** "聊天记录里，资料到处都是。", "一张空单。", "客户，抓到。", "价目，抓到。", "单号和日期，系统填。", "合计 RM 2,700.00。", "划线。", "单开好了。", each with the clock time.
- **End:** the complete sheet; the thread at rest round it; the last subtitle.
- **Interruptions:** a tap on a picker jumps S1 to its end by a cut and runs S3. Scrolling does not cancel it.
- **Reduced motion and no script:** the end frame from first paint. No autoplay. The rail still works, as cuts.
- **Why it is not a tell:** claim, button and prices are static from first paint and never part of the sequence. The motion shows the product's claim happening. Intervals are authored and unequal. It ends by itself.

### S2. Shuttle (hand transport on `.cut-rail`)

Unchanged in mechanism from v1: a native range control restyled; dragging sets the time of every animation in S1, forwards and backwards; arrow keys step 42 ms; Home and End jump; `touch-action: pan-y`; releasing leaves it paused and the button reads "续播 / Resume". Readout in Kanit 700, italic while it moves. Marks at 14, 31.4, 45.5, 56.2, 64.5, 71.1, 76, 78.5, 92.1 and 100%. Reduced motion: the knob snaps between marks and each shows that beat's still by a cut. Tags: `motion[9]`, `key_visual_elements[8]`, `typography[4]`, R02.4.

### S3. Re-cut (the pickers)

Unchanged in timing from v1 (client 420 ms, rate added 400 or 440, rate removed 330, no rate left). The lock knob now travels 18 px. The sheet holds up to three rows at 12 px. With no rate the sheet shows one dashed slot "选一个价目", RM 0.00, no crossing and no block. Reduced motion: single cuts. Frames: `rebuild1_sheet_taps.png`, `rebuild1_sheet_focus.png` (third frame). Tags: `motion[2]`, `motion[1]`, `motion[8]`, `ornament[3]`, R01.2, R06.5, R06.6.

### S4. Tear-off and drop (`#story-stage`)

- **Trigger:** scroll position. Progress p is 0 until the bottom edge of the leaf is inside the screen (or, on a screen shorter than the leaf, until the stage reaches the top bar), and reaches 1 after half a screen more. A pure function of scroll position; it runs backwards.
- **Start (p = 0):** stub and leaf joined at the perforation, the leaf at full reading size; round where it will land, a dashed outline labelled "PDF".
- **What moves:** p 0 to .08, the leaf moves 3 px away from the stub and the perforation opens. p .08 to .40, it slides 40 px down along the perforation into the outgoing position. At .40 the outline is cut to a solid outgoing bubble with a tail and a file bar: "INV-{year}-014.pdf", "1 页 · PDF". At .47 one grey tick and "已发出"; at .54 two grey and "已送达"; at .61 two blue, "已读" and the time.
- **End:** the leaf, still at reading size, inside his outgoing message with two blue ticks. The notice below says he sends it himself and whose ticks they are.
- **Tags:** `motion[4]`, `motion[1]`, `motion[2]`, `imagery[5]`, `key_visual_elements[6]`, `key_visual_elements[7]`, `ornament[0]`, `ornament[2]`, R01.4, R02.5.

### S5. Filed (`.sis-card .slot-row`)

p .66 to .90: the stub travels straight down the chat's left margin, 532 px, into the first slot of the client page. At .93 it turns over (200 ms, linear) to "INV-014 · RM 2,700.00 · 已归档"; below .93 it turns back. End: four tiles on their done face. Tags: `motion[4]`, R06.1, R06.3, `ornament[4]`.

### S6. Month (`#reports .month-bars`)

Scroll position; p from 0 with the report's top at 80% of the screen to 1 at 36%. Each month's two bars grow from the baseline; month i starts at p = 0, .20, .37, .51, .62, .70 (intervals .20, .17, .14, .11, .08) and takes .14. Then a hold. At .92 the "014" tag drops onto the current month's bar (137 ms, hard stop, settle), its figures step in two cuts, and the message's tick goes from one grey to two blue with the time: the report has been answered. A tap on a month is a cut of the three figures and an 80 ms move of the bracket. Sales bars solid, expenses hatched, both named in a legend; the figures of every month are in the accessible name of its button. Tags: `motion[4]`, `motion[1]`, `key_visual_elements[9]`, R02.4, R04.6.

### S7. Episode cut (`body[data-ep]`)

When an episode's date chip passes the middle of the screen, the ground of the whole page and the top bar change on one frame: `#0B1216` (today), `#081530` (month end), `#1B1208` (day one). Scrolling back cuts back. Nothing moves and nothing blends. Without script each section carries its own ground, so the same edges are there in space. Tags: `surface_treatment[1]`, `color_palette[8]`, R03.5.

### S8. Sort (`#import`)

Scroll thresholds; p from 0 with the stage's top at 75% of the screen to 1 at 33%. Five files leave the heap for their slots at p = .06, .25, .40, .51, .59 (intervals .19, .15, .11, .08), each 157 ms with a settle and then a 160 ms flip to its read face. A hold. Then the three fields are wiped in at .72, .80, .86 (100 ms each). Scrolling back reverses each step. End: five tiles read, the card filled, "未保存 · 等你核对" under a red tape label, and one grey tick on the message with "还没保存". Tags: `motion[4]`, `motion[2]`, `motion[8]`, R06.1, R06.3, R02.4, R02.6.

### S9. Green wrap (`#import .approve`)

A tap wipes the green band across the card (217 ms, 12 px of travel, settle), covering the last "AI 读到" tag. On its last frame the state line is cut to "已保存", the button to "撤销", and the message's tick to two blue with "你批准了，已保存" and the time. A second tap wipes it off (160 ms) and returns one grey tick. Tags: `motion[8]`, `motion[7]`, R06.4, `ornament[0]`, `ornament[5]`.

### S10. Token (`#pro`)

Revoke (300 ms): one pen stroke through the strip, then the strip is wiped back to the plate; the state line is cut to "已撤销" and the message's tick to one grey with "令牌已撤销". Create (180 ms): the strip is wiped out again; two blue ticks, "令牌有效". Tags: `motion[8]`, `motion[1]`, R01.2, R06.2.

### S11. Language cut (`.lang-toggle`) and state cuts

The thumb travels 36 px in 80 ms; on the frame it stops every string is replaced at once and `lang` is updated. Change from v1: messages no longer reserve the height of the longer language (that left blank lines in Chinese bubbles); instead the element under the reader's eye is held in place by a scroll correction made in the same frame (measured: 0 to 1 px of movement). Pressed, focus, hover and disabled are cuts or shape changes as in v1. Tags: `motion[7]`, `motion[1]`.

### S12. Clock stamps and the last line

The first time a notice comes on screen its time is cut in, to the second; an asker's bubble gets the minute. When the composer comes on screen the line above it is cut once to how long he has been on the page, to the second, and "轮到你回了。". Tags: `motion[1]`, `ornament[5]`, R03.3.

---

## 7. States

| Element | States, each with a shape or a word, never colour alone |
|---|---|
| `.cta-trial`, `.composer` | rest; pressed (1 px drop); focus (outline) |
| `.lang-toggle` | 中文 picked; EN picked (thumb position and bold label) |
| `.picker-client .tile` | available (knob up); picked (knob down beside the padlock, "已选", 2 px inset edge); pressed; focus |
| `.picker-rate .rstrip` | available (solid tape); added (dashed outline, "已加"); pressed; focus |
| `.invoice-sheet` | done (crossing and record block); draft with no rate (one empty slot, RM 0.00, no crossing, no block) |
| `.cut-rail` | at end; playing; paused at a frame; dragging |
| `.doc-bubble` | empty outline; file; sent (one tick, word); delivered (two grey ticks, word); read (two blue ticks, word, time) |
| `#report-msg` | sent (one grey tick, "已发出"); read (two blue, "已读", time) |
| `#import-msg`, `.review-state` | not saved (red tape label, one grey tick, "还没保存"); saved (green band on the card, two blue ticks, "你批准了，已保存") |
| `#pro-msg`, `.token-state` | connected (two blue ticks, "令牌有效"); revoked (red tape label, one grey tick, "令牌已撤销") |
| `.slot-tile`, `.old-file` | empty slot (dashed, labelled); face up; done face |
| `.month-bars` | one month picked (bracket under it, bold name, its figures in `.detail`) |
| `body` | `data-ep` today, month, dayone |
| `[data-stamp]`, `[data-clock]`, `.elapsed` | default text; stamped |

---

## 8. Global motion rules, stills and the constraint

1. **Finished frame first.** The markup and stylesheet alone draw every end state. If a script fails, the page is complete. The one exception is deliberate and guarded: when motion is allowed, the head script asks the stylesheet for S1's start frame before first paint, and removes that request itself if the main script does not take over.
2. **Only five moves** (`motion[0]`). Animated properties: `transform`, `clip-path`, `stroke-dashoffset`, `visibility`. `opacity`, colour alpha, `filter` and `backdrop-filter` are never animated or transitioned. No `@keyframes`, no `transition: all`, no view transition, no canvas. Two CSS transitions exist, both on `transform` (the flips).
3. **Fixed transparency in use**, listed so the critic can walk them: `.ghost` 0.6 and 0.42; `.catch.g1` 0.6 and `.catch.g2` 0.42; the wallpaper stroke 0.045; the hero grain 0.07. None changes over time. The copies are cut on and off by `visibility` or by being created and removed.
4. **Fixed blend in use:** `.beam` (`screen`) and the toggle labels (`difference`). Neither changes; pixels under the beam's edge change by a travelling hard edge.
5. **Scroll.** No listener cancels wheel or touch events; no scroll snapping; nothing is pinned except the top bar. Scroll-linked progress is read on animation frames.
6. **Nothing runs on its own clock after it lands.** No loops. The longest timed sequence is S1 at 2,420 ms; every other timed move is 440 ms or less.
7. **One entrance is never applied to every block.** Messages, notices, headings, prices and lists do not animate at all. Objects move only where the move is the fact being shown.
8. **Reduced motion:** no autoplay; every sequence at its end state from first paint; taps are cuts; the rail steps between stills; the episode ground still cuts (a cut is not motion).
9. **No flashing.** The total and the ticks change at most three times in any second; a ground cut happens once per boundary crossed and between dark tones.
10. **Rules taken from `claude_anti_defaults.md` and not claimed as derivations in section 4:** no gradient fog, no glow, no blur, no translucent panels (entries 8, 9); no equal feature cards (10); no fade-up or its slide equivalent on every block (1); no even stagger (2).
11. **Where the constraint forces a change of habit:** a product object arriving → caught, wiped, cut in or already there; the sheet arriving → a cut; the language switch → a cut on the frame the thumb stops; hover and focus → shape; a tick changing → a cut; a subtitle changing → a cut; an episode changing → a cut of the ground; reduced motion → the finished frame.

---

## 9. Hard limits carried into the build

1. No matrix code or anything like one, and none of the words the return-block entry forbids, or their Chinese equivalents, anywhere in the file, comments and identifiers included. The record block's square holds a page count.
2. No cheque, no bank name, no account number or unlabelled digit string shaped like one, no paid mark, no pay button, no claim that SIS takes, confirms or tracks payment. The machine line's three groups are labelled.
3. No claim that SIS sends anything or reports delivery or reading. The ticks are drawn on his own chat messages and the notice under the PDF says so.
4. No photographs, no generated images, no raster data URIs. Inline SVG and CSS only (one SVG data URI for the wallpaper).
5. Nothing depends on sound. No audio or video element, no control that invites listening.
6. No claim beyond `context/facts.md`; exact prices only; no testimonials, logos, user counts or statistics. **Every place sample figures appear carries a visible sample label in both languages:** `#sheet`, `.leaf`, `.sis-card`, `#report-msg`, `#import-msg`, `#pro-msg`, the three `.chat-head` rows, and `.sample-note`.
7. No long dash characters in copy.
8. Simplified Chinese by default with an English toggle; every string in both.
9. Trial button, both prices and a complete invoice inside the first 640 px at 390, at rest and under reduced motion, in both languages; the claim never overlaps the stage.
10. One self-contained file; the only external request is the recorded Google Fonts stylesheet; no sideways scroll; everything meant to be read keeps a 16 px gutter (the stage's ground runs edge to edge and the thread's bubbles start at x 12 behind the sheet, as scenery; the two whole messages under the sheet sit at x 12 and end at x 378).
11. WCAG AA contrast, state never by colour alone, touch targets at least 44 px, visible focus.

---

## 10. Open items

1. **Palette gate is still provisional** (estimated tape values). The remedy remains an iteration extension with the owner's confirmation.
2. **Thread colours, the light, the streak green and the two extra grounds are starting values**, not measured from anything.
3. **Three anchors have no file of their own** (03, 04, 05); their written descriptions are in `sampling.md`.
4. **The two whole messages under the sheet and the bubbles behind it start 12 px from the edge**, 4 px inside the 16 px gutter, as a thread's bubbles do. If the critic reads them as text that must keep the gutter, they move to 16.
5. **The opening shot has no invoice in it for the first 340 ms plus the hold.** The requirement is met at rest, under reduced motion and without script; whether the held opening is acceptable under hard limit 7 is the critic's call.
6. **Heights differ between the two languages** (5,057 and 5,195 px at 390). The reader's place is held by a scroll correction on the language cut.
7. **The streak has been judged from frames**, stepped and wall-clock, not by a person on a phone.
8. **A pattern in the critic's word check** also matches a word ending in "e" followed by "invoice"; the English copy avoids that adjacency throughout.
