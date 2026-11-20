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

## 1. Palette

### 1.1 Palette gate: what can and cannot be closed from the bank

Stated plainly:

- The two seeds carry almost no colour: a pale printed cheque leaf and a black-and-white film. `sampling.md` records that the palette gate cannot be closed from the seeds.
- Domain anchor 07 (the return block) is black on white. It contributes nothing chromatic.
- The Designer anchor (03) and the two competitor anchors (04, 05) have written descriptions with no colour values. *Chungking Express* is described only as "dark, saturated, neon at night"; no hue can honestly be taken from that sentence.
- The only chromatic anchor is 06, card labels and camera tape. It names five flat tape colours and marker black, and it says in its own text that the hex values are **estimates of common tape colours, not measured from an image**.

Resolution, in the way the protocols allow:

1. The palette-source reference is named: anchor 06, `references/domain_card_labels_camera_tape.md`. Four colours beyond neutrals are borrowed from it (green, red, yellow, blue), each with hex, role in the reference, role in the build and selector, in 1.2. That meets the gate's count (three or more beyond neutrals, from one anchor).
2. The gate is closed **provisionally**. The values are the entry's estimates. They are used unchanged so that the build matches the entry, and the caveat is repeated wherever they are cited. If the critic judges that estimated values cannot close the gate, the remedy the protocol provides is the iteration extension: up to +2 domain references per iteration (+6 in total, none used) through a fresh 20-pool and a new ms-sample, with the owner's confirmation, aimed at a chromatic anchor. That is not done at this step and no colour is invented to stand in for it.
3. This is not "monochrome plus one accent": the build carries four tape hues plus the thread's own green and tick blue. The lean is toward more colour than the two seeds and the same number of hues as the tape entry.
4. The owner's note still governs: the live page's dark, cinematic colour is the bar, and colour is not where the effort goes. The ground is a tinted night tone with one bright sheet and saturated flat colours on it. No pink to violet gradient, no coloured fog, no glass (anti-defaults 8 and 9). Whether this reads at least as rich as the live captures is for the critic and the ICP to judge in pixels; it is listed under open items.

### 1.2 Palette borrowed from: Card labels and camera tape (`references/domain_card_labels_camera_tape.md`)

**Full palette (4 colours beyond pure neutrals, plus 2 neutrals from the same entry):**

| Hex | Role in reference | Role in build | Selector |
|---|---|---|---|
| `#1E9E4A` tape green | the wrap put round a card only after a person has checked the backup | what a person commits: the approval band, the trial button, the composer's send button | `#import .wrap-checked`, `.cta-trial`, `.composer-send` |
| `#D4262C` tape red | red paper or cloth tape, sold beside the others (no fixed meaning confirmed) | "not yet" states, always with a word: not saved, revoked | `.tape-label[data-tone="red"]` on `#import .review-state` and `#pro .token-state` |
| `#F2C418` tape yellow | the strip of paper tape with a code in marker | the strip that names an object: the sample label, client codes, the "014" tag | `.tape-label` (default tone) |
| `#1F5FBF` tape blue | cloth tape, one colour assigned per stock | the Pro plan's label and the token strip (one colour per plan, as per stock) | `#pricing .plan[data-plan="pro"] .tape-label`, `#pro .token-strip` |
| `#F3F1EA` tape white (neutral) | white tape | the Basic plan's label; lettering on red and blue tape | `#pricing .plan[data-plan="basic"] .tape-label` |
| `#111111` marker black (neutral) | marker ink on tape | lettering on yellow, green and white tape | `.tape-label` text, `.cta-trial` text |

**Distinct hues used (saturation above 10%) from this anchor:** 4. **Distinct hues in the source reference:** 4 chromatic tape colours named with values (green, red, yellow, blue), plus white and black. **Lean direction:** same as the reference. All six values are the entry's estimates.

### 1.3 Stage palette (from the `color_palette` sub-pass; not from a bank anchor)

The `color_palette` axis may see only the framing, the seeds and the constraint, so it cannot cite the tape entry. What it produced is the stage the tape colours sit on: the night ground, the bubbles, the tick, the paper and the ink. Entries `cp[0]` to `cp[9]` in section 4. The hex values for the thread colours are recalled from the app the framing names; they were not measured and are treated as starting values.

| Token | Hex | Used on |
|---|---|---|
| `--night` | `#0B1216` | `body`, `.thread-band` ground |
| `--counter` | `#121C22` | the hard-edged slab behind each stage (see `su[1]`) |
| `--bubble` | `#1F2C33` | incoming bubbles, `.msg` |
| `--bubble-out` | `#0F5345` | the outgoing document bubble |
| `--tick` | `#53BDEB` | read ticks, system time stamps on dark, focus outline |
| `--text` | `#E9EEF0` | text on night and on bubbles |
| `--meta` | `#8A9AA3` | time stamps, secondary lines |
| `--sheet` | `#F5F2E9` | `.invoice-sheet`, stub, tiles, review card |
| `--ink` | `#14181B` | text and rules on the sheet |
| `--pen` | `#1F5FBF` | crossing strokes and strike-throughs on the sheet (same value as tape blue on purpose, so the page has two blues, one on paper and one on night, not three) |

### 1.4 Contrast (computed, WCAG relative luminance)

| Pair | Ratio | Use |
|---|---|---|
| `--text` on `--night` | 16.1 | body copy |
| `--meta` on `--night` | 6.5 | time stamps |
| `--text` on `--bubble` | 12.2 | messages |
| `--meta` on `--bubble` | 4.9 | time inside a bubble |
| `--text` on `--bubble-out` | 7.7 | document bubble |
| `--tick` on `--night` / on `--bubble-out` | 8.9 / 4.2 | tick glyph (graphic, 3:1 needed; never the only carrier) |
| `--ink` on `--sheet` | 16.0 | invoice text |
| `--pen` on `--sheet` | 5.4 | strokes and the phrase between them |
| marker black on tape green | 5.4 | trial button label (white on this green is 3.1 and is not used) |
| marker black on tape yellow | 11.4 | tape labels |
| tape white on tape red | 4.5 | "not saved", "revoked" labels (marker black on red is 3.7 and is not used) |
| tape white on tape blue | 5.4 | Pro label, token strip |
| tape red / tape blue as shapes on `--night` | 3.7 / 3.1 | graphic only, always with a word |

Sheet labels use `#5A6268` on `--sheet` (5.6). No text sits on a gradient, a moving layer or a picture.

---

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

#### vs Bukku (idx 6)

Observed from search results: hero headline, subhead, badge, trial terms, starting price, user count, feature areas. From prior knowledge and not verified today: light surface, a static dashboard screenshot beside the claim, long feature sections, neutral sans type.

| Element | What Bukku does | verdict | rationale | build location |
|---|---|---|---|---|
| Hero staging | A claim headline, a compliance badge, the trial offer, and the product beside it as a still image. Everything arrives at once and nothing changes. | diverge | A still claim plus a still screenshot is what Jun Hao scrolls past. The live page already beats this on atmosphere; version 2 must beat both by making the first screen an event: the invoice assembles while he watches. | `#hero .hero-stage`: S1 (`.mover`, `.ghost`, `.hang`, `.catch`, `#sheet`). Frames: `rebuild1_sheet_s1_a.png` to `_f.png`, `rebuild1_sheet_rt_a.png`, `_b.png` |
| Trial offer in the first screen | The trial button and its terms (30 days, no credit card) sit in the hero, above any scrolling. | borrow | Table-stakes for local software and the live page's first known weakness. A visitor with 30 seconds must be able to start the trial without scrolling. | `#hero .cta-trial` (y 575 to 631 at 390), `header.topbar .cta-trial`. `rebuild1_rest_390_zh.png` |
| Trial terms line | A short line under the button states the length of the trial. | borrow | Stating the offer next to the button removes a question. SIS states only what is true: 7-day free trial, Basic RM 199 a year, Pro RM 399 a year. | `#hero .trial-terms` (the second line inside the trial button). `rebuild1_rest_390_zh.png` |
| "No credit card" promise | Printed under the trial button. | diverge | Whether SIS needs a card for the trial is unknown (`facts.md`), so the claim cannot be made. | `#hero .hero-cta .trial-terms` and `#pricing .notice`: the offer is stated as the trial and the two prices and nothing else. No card wording exists in the file. `rebuild1_rest_390_zh.png` |
| How the product is shown | Real product screens, not abstract renders. | borrow | The principle is table-stakes and fixes the live page's third weakness (only 3D renders, no product, no invoice). A buyer of business software expects to see the software. | `.invoice-sheet`, `#import .review-state`, `#reports .month-bars` |
| Product framing on a phone | A wide desktop dashboard scaled down (not verified today). | diverge | A desktop dashboard at 390 px is unreadable texture. SIS shows one object at reading size, the invoice, then one screen per idea. | `#sheet` (280 px wide at 390, no text under 11 px: name 14, rows 12, total 18), `#story .leaf` at full size, `#report .detail`. Audit: 0 visible text runs under 11 px on the page. `rebuild1_rest_390_zh.png`, `rebuild1_sheet_story_a.png` |
| Motion | Effectively none: a static page with standard hover states (not verified today). | diverge | Motion is the owner's stated lever and the visitor judges motion for a living. Here motion carries meaning: fields arriving on the invoice are the claim "pick a client, pick a rate, done". | S1 to S12 in section 6: `.mover`, `.catch`, `.leaf`, `.stub`, `.bar`, `.old-file`, `.wrap-checked`, `.token-strip`. `rebuild1_sheet_s1_*.png`, `rebuild1_sheet_story_*.png`, `rebuild1_sheet_import_*.png` |
| Narrative order | Organised by module (invoicing, inventory, bank, e-invoice), an inventory of what exists. | diverge | A module list has no beginning or end and caused the live page's repetition. Version 2 is one sequence told once: the old mess, a client picked, a rate picked, the invoice, the record, the month. | `main.thread`: `#hero`, then `#story` (today), `#reports` (month end), `#import`, `#pro`, `#pricing` (day one), each opened by a `.msg.in` question and closed by a `.notice`. `rebuild1_sheet_walk390zh_a.png`, `_b.png` |
| Interaction | Links and buttons only; nothing to try on the page (not verified today). | diverge | He believes what he can touch. One small tap-driven demo does more in 30 seconds than any feature paragraph. | `.picker-client .tile`, `.picker-rate .rstrip`, `.cut-rail`, `#report .mcol`, `#import .approve`, `#pro .token-btn`. `rebuild1_sheet_taps.png`, `rebuild1_sheet_import_b.png` |
| Local grounding in the headline | "for Malaysia" is in the headline itself. | borrow | A Malaysian freelancer trusts a tool made for his market over an imported one. Saying it early, in his language, is expected. | `#hero .hero-claim` (names Malaysian videographers and photographers), `footer .trust-line` |
| Compliance badge | "LHDN MyInvois ready" badge and SST in the subhead. | diverge | LHDN e-invoice support and SST handling are unknown for SIS and must not be stated. Trust is built from what is true: Singapore-region storage, row-level isolation, the Malaysian business registration. | `footer .trust-line`: what is true stands where a badge would (storage region, isolation, registration number). No badge element exists. `rebuild1_sheet_walk390zh_b.png` |
| User count | "120,000+ Malaysian businesses". | diverge | No user numbers exist and the brief forbids them. Credibility comes from craft and from showing the product. | no element; nothing in the file carries a count. In its place: `#sheet` and the product views, and `footer .trust-line` |
| Navigation | Top bar with product, pricing, sign-in and a trial button (structure not verified today). | borrow | A slim top bar with sign in and the trial button is what every software buyer looks for. Kept to the minimum: logo, language, sign in, trial. | `header.topbar` |
| Navigation depth | Many links, solution and partner pages. | diverge | One page, one job. Extra links leak a 30-second visitor away from the trial. | `header.topbar`: four items (wordmark, `.lang-toggle`, `.signin`, `.cta-compact`); `footer .legal`: four links. Nothing else leaves the page. `rebuild1_rest_390_zh.png` |
| Language switch | Visible language choice for a multilingual market (not verified today). | borrow | Malaysian visitors expect to choose a language. SIS is Chinese by default with an English toggle, reachable in the first screen. | `header.topbar .lang-toggle` |
| Typography | Neutral, interchangeable SaaS sans. | diverge | The owner requires type at least as good as the live page, and neutral SaaS type signals "one more dashboard". The face is set by the Typography VS step; this row only records that Bukku's default is not followed. | `.hero-claim h1` (Noto Sans SC 700, Bricolage Grotesque 800, `opsz` 31), `.invoice-sheet` and `.msg` (Instrument Sans), `.readout` and `.catch.amt` (Kanit). `rebuild1_rest_1280_zh.png` |
| Color | Light surface with a single brand color (not verified today). | diverge | The owner judges the dark live page as better looking than the light version 1. Version 2 stays at or above the live page's dark, cinematic finish. | `body` grounds `#0B1216`, `#081530`, `#1B1208`; `.beam`; `.invoice-sheet` as the one light object. `rebuild1_rest_1280_zh.png`, `rebuild1_walk1280zh_03.png` |
| Layout | Long page of feature sections in a multi-column grid. | diverge | The live page is already 10,500 px on a phone and repeats itself. Version 2 is short, single column on a phone, one idea per screen. | one column (`.col`); the first 640 px at 390 hold four blocks (`.fwd-label`, `.hero-claim`, `.hero-stage`, `.hero-cta`); `.cut-rail` starts at y 645. Total 5,057 px in Chinese. `rebuild1_rest_390_zh.png` |
| Primary button label | "Start free trial" style label, verb first. | borrow | The label a buyer scans for. SIS uses the same verb-first form with the length stated nearby. | `.cta-trial` |
| Pricing display | Plans named, price in RM with the period, what each includes. | borrow | Plain RM figures with the period are expected locally. Two plans side by side, each with its list from `facts.md`. | `#pricing .plan[data-plan="basic"]`, `#pricing .plan[data-plan="pro"]` |
| Pricing tactics | A time-limited promotion (first 3 months, ends 31 Dec 2026), a per-day reframing, SST added on top. | diverge | SIS has one honest annual price and no promotion. Urgency devices and price reframing would contradict the peer-to-peer register. | `#pricing .plan` x 2: one annual price each, no promotion, no per-day figure. `rebuild1_sheet_walk390zh_b.png` |
| Data display | Dashboards and charts: sales, expenses, profit by period, with labelled axes. | borrow | Month-by-month sales, expenses and net profit is the domain's standard report and a real SIS feature. Shown once, with labels and values, never colour alone. | `#reports .month-bars` |
| Data density | Accounting density: ledgers, charts of accounts, inventory tables. | diverge | He is not a bookkeeper. Bookkeeping density is the reason he has not adopted accounting software. One number per moment. | `#report .detail`: one month at a time, three figures (14 px, 14 px, 26 px). Nothing is printed under the bars; the ranking shows order and count only. `rebuild1_sheet_month.png` |
| Empty and error states | None visible on the marketing page. | diverge | The build's own demo needs states the competitor never shows: before a client is picked, the sheet shows sample data marked as sample, and the import moment shows "nothing saved until you approve" as a visible state. | `#sheet .slot-empty` (S1), `.invoice-sheet.is-draft` (`rebuild1_sheet_focus.png`, third frame), `#import .review-state.rs-wait` with `#import-msg[data-state="sent"]` (`rebuild1_sheet_import_b.png`) |
| Support channel | A local contact route for a local product (form not verified today). | borrow | Malaysian buyers expect to reach a person on WhatsApp. SIS names WhatsApp as the fastest route, as a link, not a floating bubble over the content. | `footer .support-whatsapp` |

#### vs Invoice-Generator.com (idx 19)

Observed from search results: no sign-up, editable labels, logo, currency, line items, tax and discount, PDF download, "original free invoice maker", "4 million businesses". From prior knowledge and not verified today: the exact field names (From, Bill To, Ship To), the light grey page with a white sheet, a green download button in a side column.

| Element | What Invoice-Generator.com does | verdict | rationale | build location |
|---|---|---|---|---|
| Hero staging | There is no hero. The first screen is the invoice itself, with no claim above it. | borrow | The strongest convention in the category: an invoice tool shows an invoice at once. It fixes the live page's worst gap. In version 2 the invoice is the staged object in the first screen, not an illustration of one. | `#hero .hero-stage .invoice-sheet` |
| Claim in the first screen | None. The form speaks for itself. | diverge | A blank form says "free tool". SIS has a claim to make (pick a client, pick a rate, done) and must say it in a short readable line next to the object, never on top of it (live weakness 2). | `#hero .hero-claim`, y 77 to 167, above the stage (173 to 567) and never on it. `rebuild1_rest_390_zh.png` |
| Starting state of the invoice | Blank, with placeholder prompts. Every invoice starts from nothing. | diverge | This is the exact difference SIS sells. The SIS invoice is never blank: it fills from a saved client and a saved rate. The blank sheet may appear only as the "before" beat. | `#sheet .slot-empty[data-slot]`: the blank sheet exists only from 340 ms of S1 until each slot is filled; the still is the filled sheet. `rebuild1_sheet_s1_a.png`, fourth frame |
| Motion | None. A static form; change happens only when the user types. | diverge | The contrast between typing every field and watching fields arrive by themselves can only be shown in time. This is where the owner's lever does the persuading. | S1 in `#hero .hero-stage`. `rebuild1_sheet_s1_b.png` to `_e.png` |
| Narrative | None. One state, one action. | diverge | Without a sequence there is no before and after. SIS needs a short one: mess, pick, pick, invoice, record, month. | `main.thread`, six episodes; see the Bukku row "Narrative order". `rebuild1_sheet_walk390zh_a.png` |
| Interaction: try it without an account | The visitor can make an invoice immediately, no sign-up. | borrow | Immediacy is what he expects from a free tool, and trying beats reading. Version 2 lets him change the invoice on the page, before any sign-up. | `.picker-client`, `.picker-rate`, `.invoice-sheet .total` |
| Interaction: input method | Free typing in a dozen fields. | diverge | Typing on a phone, tired, in 30 seconds, will not happen. SIS interaction is two taps (a client, a rate), which is also the product's claim. | `.picker-client .tile` (3) and `.picker-rate .rstrip` (3): taps only; there is no text field on the page. `rebuild1_sheet_taps.png` |
| Invoice anatomy | The recognisable parts: sender, recipient, number, date, due date, line items, subtotal, tax, total, notes and terms. | borrow | This is what an invoice is. He must recognise the object in one glance. Diverging would make the mock look like decoration. | `.invoice-sheet` (`.from`, `.bill-to`, `.meta`, `.lines`, `.total`, `.terms`) |
| Data display: line items | A table: item, quantity, rate, amount; amounts right-aligned; currency shown. | borrow | The universal convention for reading money. Amounts right-aligned in tabular figures, in RM. | `.invoice-sheet .lines`, `.invoice-sheet .total` |
| The invoice as a light sheet | A white page on a plain ground. | borrow | An invoice is paper. A white sheet on the dark stage becomes the brightest thing on screen, which is good staging and matches the print-ready PDF. | `.invoice-sheet` |
| Page color | Light grey utility page. | diverge | The owner wants at least the dark, cinematic finish of the live page. Only the sheet is light. | `body` and its three grounds; only `.invoice-sheet`, `.report-screen`, `.review-card` and the tiles are light |
| Typography on the page | Plain utility sans throughout. | diverge | Page type must be at least as good as the live page; set by the Typography VS step. | `.hero-claim h1`, `.msg`, `.notice`. `rebuild1_rest_390_en.png` |
| Typography on the sheet | Plain, legible, no display type on the document itself. | borrow | A real invoice is set plainly. If the mock invoice is styled like the marketing page it stops looking real. | `.invoice-sheet` (own plain type scale, tabular figures) |
| The payoff: PDF | The end of the task is a PDF you can send. | borrow | The PDF is what his client receives, so it is the moment that matters. The sequence ends on the invoice becoming a PDF, shown as a visible state with a text label. | `#story [data-beat="pdf"]` (the `.doc-bubble`). `rebuild1_sheet_story_b.png` |
| Primary button | "Download", green, beside the form. | diverge | The SIS page has one job, the trial. The demo does not offer a real download, so no button may promise one. | `.cta-trial` and `.composer` are the only calls to action and both go to sign-up. `.doc-bubble .file-bar` and `#report-msg .file-bar` are labels inside a message, not controls; no download control exists |
| Navigation | Almost none: a few text links. | borrow | Few links keep a 30-second visitor on task. The build keeps only logo, language, sign in and trial. | `header.topbar` |
| Layout | One object in the centre, controls in a side column. | diverge | The single-object focus is right, the side column is not: at 390 px there is no side. Controls sit under the sheet, within thumb reach. | `.cut-rail`, `.picker-client`, `.picker-rate` sit under the sheet in one column. `rebuild1_sheet_walk390zh_a.png`, first frame |
| Sample data | The visitor's own data; nothing is pre-filled. | diverge | The build pre-fills fictional studios, clients and rates, and the brief requires them to be labelled as sample data. | `.tape-label.sample` on `#sheet` and on `.leaf`; `.sis-card .tape-label`; `.at-head .tape-label` on `#report-msg`, `#import-msg`, `#pro-msg`; `.chat-head .tape-label` x 3; `.sample-note`. `rebuild1_sheet_walk390zh_a.png` |
| Empty and error states | The page is one large empty state; errors appear only on download. | diverge | The build shows a filled state by default. Its own states (nothing picked yet, import waiting for approval) are designed, readable and never rely on colour alone. | same places as the Bukku row "Empty and error states" |
| Social proof | "Trusted by over 4 million businesses". | diverge | No numbers exist for SIS and the brief forbids them. | no element; nothing in the file carries a count or a quote |
| Price | Free, no account. | diverge | SIS is paid and says so plainly. The answer to "free" is not to hide the price but to show what the free tool cannot do: remember. | `#hero .trial-terms` (first screen) and `#pricing .plan` x 2. `rebuild1_rest_390_zh.png` |
| Text under the tool | Long explanatory and search-oriented copy below the form. | diverge | Long copy under the product is the repetition the live page suffers from. Each fact appears once. | one `.notice` per episode (five in all), each fact from `facts.md` once. `rebuild1_sheet_walk390zh_b.png` |
| Sound | None on either page. | borrow | Nothing may depend on sound (owner requirement). Every beat is carried by picture and caption. | global (no audio or video element); captions on `#hero .stage-caption` and one `.notice` per episode (rename logged below) |

#### What the two tables say together, for presentation

1. **Converge on showing the real thing, at once.** Both competitors put the product in the first screen (Bukku as a screenshot, Invoice-Generator as the tool itself). The live SIS page does not. Version 2 puts a real invoice in the first screen.
2. **Converge on the offer being in the first screen.** Trial button plus its true terms, above any scroll.
3. **Diverge on time.** Neither competitor moves. Bukku is a still claim; Invoice-Generator is a still form. Neither can show "it remembers, so the invoice makes itself". Motion in version 2 is therefore not atmosphere (which is all the live page uses it for) but the argument itself.
4. **Diverge on the blank start.** Invoice-Generator's blank sheet is the "before"; SIS's pre-filled sheet from a saved client and rate is the "after". The page should stage that contrast once.
5. **Converge on immediacy, diverge on effort.** Let him change the invoice on the page with no account (as Invoice-Generator does), but with two taps, not typing.
6. **Diverge on proof by numbers and badges.** Bukku and Invoice-Generator both lean on user counts; Bukku adds a compliance badge. SIS has neither and may not claim them. Proof comes from craft, from the product being visible, and from the true trust facts.

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

Citation count across all 82 entries: the framing is cited in 30 (37%). Per axis: style_tags 4 of 4, mood 4 of 4, color_palette 6 of 12, typography 0 of 7, key_visual_elements 5 of 15, imagery 2 of 8, surface_treatment 2 of 7, ornament 2 of 8, motion 5 of 10, inspirations 0 of 7.

### style_tags
Saw: the framing's category only (vernacular / found). Hidden: everything else.

- style_tags[0] = "found-vernacular"
  derived from: framing pole "vernacular / found", the category itself
- style_tags[1] = "thread-native"
  derived from: framing category, "forwarded-message vernacular": the found format is a message thread
- style_tags[2] = "copy-of-a-copy"
  derived from: framing category, "forwarded" and "screenshots of screenshots": found material that has been passed on and re-captured
- style_tags[3] = "time-stamped"
  derived from: framing category, "double ticks": found messages carry their own delivery marks and times

### mood
Saw: the framing's emotional register only. Hidden: designer, seeds, typography, competitors, constraint.

- mood[0] = "mid-thread, after hours"
  derived from: framing register, a message that arrives inside an ongoing thread, opened on a phone between other things
- mood[1] = "nagged, then answered"
  derived from: framing register, the "can you send the invoice again" request that sits unanswered until the reply lands
- mood[2] = "between peers"
  derived from: framing register, a forwarded message comes from someone you know, not from a company
- mood[3] = "found, not staged"
  derived from: framing register, grey bubbles, voice notes and screenshots of screenshots are ordinary and slightly messy

### color_palette
Saw: framing + seeds (anchors 01, 02) + constraint. Hidden: designer, competitors, domain anchors, typography. (The tape colours come from a domain anchor and are not claimed here; see 1.2 and `inspirations[5]`.)

- color_palette[0] = "`#0B1216` night ground" on `body`, `.hero-stage`
  derived from: framing "WhatsApp … vernacular" (the thread as it looks at night) + seed *Night Mail* "the train is a band of light against dark country"
- color_palette[1] = "`#1F2C33` bubble grey" on `.bubble`, `.msg.in`
  derived from: framing "grey bubbles"
- color_palette[2] = "`#0F5345` outgoing green" on `.bubble.out`, `.msg.out`, `.doc-bubble`
  derived from: framing "double ticks" (ticks belong to the sender's own messages, which the thread colours green)
- color_palette[3] = "`#53BDEB` tick blue" on `[data-state="read"] .ticks`, `.ck`, the first streak copy
  derived from: framing "double ticks" (the read state)
- color_palette[4] = "`#E9EEF0` message text, `#8A9AA3` time-stamp grey, `#B9D3CC` time and tick grey on green" on text, `.mt`, `.st`
  derived from: framing "forwarded-message vernacular" (message text with a smaller grey time beneath)
- color_palette[5] = "`#F5F2E9` pale printed paper" on `.invoice-sheet`
  derived from: seed crossed cheque "pale printed security background"
- color_palette[6] = "`#14181B` document ink" on sheet text and rules
  derived from: seed crossed cheque "small … caps for the printed labels" + seed *Night Mail* "black-and-white"
- color_palette[7] = "`#1F5FBF` ballpoint blue" on `.crossing`, `.strike`
  derived from: seed crossed cheque "the drawer's handwriting in pen" and "two parallel diagonal strokes" (the entry does not state the pen's colour; blue is this sub-pass's choice and is recorded as such)
- color_palette[8] = "colour changes state by cut only: a tick goes grey to blue in one frame, and the ground of a whole episode changes in one frame"
  derived from: constraint "every change of state happens as a cut or through movement, scale, clipping or masking"
- color_palette[9] = "transparency is fixed wherever it is used (streak copies at 0.6 and 0.42); no colour ever interpolates toward the ground"
  derived from: constraint "A fixed, unchanging transparency value is allowed" and "An element fading to or from the background colour counts as the same thing"
- color_palette[10] = "`#0F394B` light, laid over the thread as one flat band with hard edges" on `.beam`
  derived from: seed *Night Mail* "exteriors where the train is a band of light against dark country" + constraint "Everything is either there or not there" (a light with an edge, not a fall-off)
- color_palette[11] = "`#12A07E` second streak copy" on `.ghost[data-n='2']`, `.catch.g2`
  derived from: framing (the outgoing green of the thread, raised in saturation for the moving copy) + seed *Night Mail* "the side of the speeding mail van is a streak of lit windows"

### typography
Saw: the Typography VS record in `sampling.md` only. No new generation; transcribed.

- typography[0] = "Bricolage Grotesque, primary Latin: headlines 800, page copy 400, controls and emphasis 600, every Latin run inside Chinese page text; width fixed at 100"
  derived from: Typography locked, role table, pick idx 4; condition 1
- typography[1] = "Bricolage Grotesque optical size held low: `opsz` equals the font size up to a ceiling of 40"
  derived from: Typography locked, condition 2
- typography[2] = "Noto Sans SC, Chinese companion: headlines 700, controls and product text 500 to 600, page copy 400, never above 700"
  derived from: Typography locked, role table and condition 3
- typography[3] = "Instrument Sans, Latin text inside the thread, the product screens and the invoice, 400 to 700, width 100; nothing on the sheet below 11 px at 390"
  derived from: Typography locked, role table, pick idx 8; conditions 1 and 4
- typography[4] = "Kanit 700 italic on an amount while it is in flight; Kanit 700 upright on the `.cut-rail` readout, the one figure that travels with a knob; nowhere else, never copy"
  derived from: Typography locked, role table, pick idx 10; condition 5
- typography[5] = "tabular figures on every amount, date and time stamp"
  derived from: Typography locked, condition 7
- typography[6] = "stack order Latin family, then Noto Sans SC, then system; the single recorded Google Fonts request; no fifth family; no lavender accent"
  derived from: Typography locked, "Font stack order", the tested request, condition 6

### key_visual_elements
Saw: framing + seeds (01, 02) + competitors (04, 05). Hidden: designer, domain anchors, typography, constraint.

- key_visual_elements[0] = "a white invoice sheet with full anatomy, in the first screen, as the brightest object on the page" at `#hero .hero-stage .invoice-sheet`
  derived from: competitor Invoice-Generator.com rows "Hero staging", "Invoice anatomy", "The invoice as a light sheet" (borrow)
- key_visual_elements[1] = "the thread across the whole stage at message size, with the sheet laid over it: bubbles show on its left, in a band under it and in the gutter on its right: a forwarded label, a voice-note waveform, a screenshot of a screenshot, a question and a reply with ticks" at `.thread-band`, `.set-start`, `.set-end`
  derived from: framing "grey bubbles, double ticks, voice notes, screenshots of screenshots"
- key_visual_elements[2] = "six labelled pigeon-hole slots on the sheet (client, item, rate, date, total, PDF)" at `.slot-empty[data-slot]`
  derived from: seed *Night Mail*, element 2, "labelled slots … that fill one piece at a time"
- key_visual_elements[3] = "two diagonal pen strokes with a phrase between them across the sheet's corner" at `.crossing`
  derived from: seed crossed cheque, element 1, "the crossing as the done gesture"
- key_visual_elements[4] = "one trial button in the first screen whose second line is the two prices, and the same button again in the top bar" at `#hero .cta-trial`, `#hero .trial-terms`, `header.topbar .cta-trial`
  derived from: competitor Bukku rows "Trial offer in the first screen", "Trial terms line", "Primary button label" (borrow)
- key_visual_elements[5] = "two rows of tap targets under the sheet: three clients, three rates" at `.picker-client`, `.picker-rate`
  derived from: competitor Invoice-Generator.com rows "Interaction: try it without an account" (borrow) and "Interaction: input method" (diverge: two taps, not typing)
- key_visual_elements[6] = "a record stub joined to the leaf by a perforated dashed rule" at `#story .stub`, `.perforation`
  derived from: seed crossed cheque, element 4, "tear-off with a counterfoil"
- key_visual_elements[7] = "the leaf itself, at reading size, inside an outgoing document bubble: file bar, page count, time, ticks" at `#story .doc-bubble`, `#story .leaf`
  derived from: framing "double ticks" (and the thread's document attachment) + competitor Invoice-Generator.com row "The payoff: PDF" + seed *Night Mail*, element 4, "the drop"
- key_visual_elements[8] = "a rail of ten cut marks whose spacing shortens toward the end" at `.cut-rail`
  derived from: seed *Night Mail*, element 3, "cut length as tempo: shots shorten toward completion, then a long final hold"
- key_visual_elements[9] = "six months of sales and expenses bars, and under them one month's three figures at reading size" at `#reports .month-bars`, `#report .detail`
  derived from: competitor Bukku row "Data display" (borrow) and "Data density" (diverge: one number per moment)
- key_visual_elements[10] = "two plans side by side inside one outgoing message, RM price with the period, each with its list" at `#pricing .plan`
  derived from: competitor Bukku row "Pricing display" (borrow) and "Pricing tactics" (diverge) + framing (a reply to "how much?")
- key_visual_elements[11] = "a message composer as the last thing on the page, its send button being the trial button" at `.composer`, `.composer-send`
  derived from: framing "forwarded-message vernacular" (a thread ends in the box where you reply) + competitor Bukku row "Primary button label"
- key_visual_elements[12] = "the total in figures with the same amount in words beneath, and one labelled line of wide-set numerals on the sheet's bottom edge" at `.total`, `.total-words`, `.machine-line`
  derived from: seed crossed cheque, elements 3 and 5
- key_visual_elements[13] = "each product view arrives as an attachment in an outgoing message, with a forwarded header and a file bar; each episode opens with the asker's grey bubble and a chat header" at `.msg.in`, `.msg.out.attach`, `.at-head`, `.file-bar`, `.chat-head`, `.date-chip`
  derived from: framing "forwarded-message vernacular: grey bubbles, double ticks" (a thread has two voices, attachments and its own date chips)
- key_visual_elements[14] = "a slim top bar: wordmark, language, sign in, trial" at `header.topbar`
  derived from: competitor Bukku rows "Navigation", "Language switch" (borrow), "Navigation depth" (diverge); competitor Invoice-Generator.com row "Navigation" (borrow)

### imagery
Saw: framing + seeds (01, 02) + designer + constraint. Hidden: competitors, domain anchors, typography.

- imagery[0] = "first-screen treatment: two speeds in one frame. The sheet is still and sharp; behind it and round it the thread streaks upward in whole steps, 12 a second"
  derived from: designer signature work, the snack-bar shot ("one person stands still … sharp and slow, while the crowd passes … as streaked, step-printed blur") + seed *Night Mail* ("the pouch is the one sharp, legible object; the train and the landscape are smear")
- imagery[1] = "the smear is drawn, not filtered: every passing bubble stretched to scaleY 1.5, with two copies behind it placed 22 and 47 px off the 64 px step, stretched 2.6 and 3.6 times along the travel, in tick blue and thread green at fixed transparency; no blur filter"
  derived from: designer "step-printed so that movement drags and colour bleeds between frames" + constraint "A fixed, unchanging transparency value is allowed" + seed *Night Mail* limit "smear … is drawn (stretched shapes, repeated offset copies at fixed transparency)"
- imagery[2] = "screenshots of screenshots drawn in code: last month's Word invoice inside a phone frame inside a phone frame, each generation offset and 2 degrees off the last"
  derived from: framing "screenshots of screenshots" + designer condition 4 (his look translated into code-drawn UI, no photographs)
- imagery[3] = "a voice note drawn as 16 still bars, a duration and one line of text saying what is buried in it; no play control"
  derived from: framing condition "voice notes appear only as a visual; nothing depends on sound"
- imagery[4] = "no photographs, no film stills, no people, no generated images; every picture is product UI or inline SVG and CSS"
  derived from: designer condition 4 + seed *Night Mail* limit ("no photographs, film stills or images of people")
- imagery[5] = "the PDF in the thread is the real sheet at full size, moved there by a transform, so the thing that lands in the thread is visibly the thing he just watched being made"
  derived from: constraint (movement is a permitted change of state) + seed crossed cheque, element 4 (the leaf that leaves is the same leaf)
- imagery[6] = "the sheet's zones are fixed like a printed leaf: meta top right, client and lines across the middle, figures ranged right, a numeral line on the bottom edge"
  derived from: seed crossed cheque "Information sits in fixed zones"
- imagery[7] = "a message that hangs still in the band under the sheet while the thread streaks behind it, and from which the fragment is taken"
  derived from: seed *Night Mail* ("a leather mail pouch, which a moment ago hung still from a trackside post, is caught") + designer (one still, sharp thing against a moving world)

### surface_treatment
Saw: framing + constraint + designer voice. Hidden: seeds, competitors, domain anchors, typography.

- surface_treatment[0] = "light is one flat shaft with hard edges across the thread, and the sheet throws one flat, hard shadow away from it; there is no soft fall-off anywhere"
  derived from: designer voice ("dark, saturated, neon at night"; the lit counter where the still subject stands) + constraint "Everything is either there or not there" (read here as: a light has an edge). The ban on fog, glow and glass that sits beside this entry comes from `claude_anti_defaults.md`, which this axis may not cite; it is recorded in section 8, rule 10, and not claimed here.
- surface_treatment[1] = "each episode has its own night: teal-black, deep blue, warm brown-black. The whole ground changes on one frame as the episode's date chip passes mid-screen"
  derived from: designer voice "hard cuts between short self-contained episodes" + constraint "every change of state happens as a cut"
- surface_treatment[2] = "thread wallpaper across the whole page: a small code-drawn doodle tile at fixed low contrast"
  derived from: framing "WhatsApp … vernacular" (the wallpaper behind a thread)
- surface_treatment[3] = "paper is opaque: 1 px ink rules, square corners; nothing on it is translucent"
  derived from: constraint "Everything is either there or not there" + designer condition 1 ("text and product UI at rest are sharp")
- surface_treatment[4] = "still grain on the hero thread only (one SVG turbulence tile at fixed transparency), never animated and never over the sheet"
  derived from: designer condition 1 (roughness lives in the "before" only)
- surface_treatment[5] = "every wipe has a hard travelling edge; no feathered masks"
  derived from: constraint "clipping or masking"
- surface_treatment[6] = "bubbles are flat fills with a 9 px radius and a tail; the page's own narration sits in centred notices on near-black"
  derived from: framing "grey bubbles" (and the thread's centred system notices)

### ornament
Saw: framing + designer + seeds (01, 02). Hidden: competitors, domain anchors, constraint, typography.

- ornament[0] = "double ticks as the only status glyph: one grey, two grey, two blue, always beside a word and a time; on each attachment they are the episode's end signal"
  derived from: framing "double ticks"
- ornament[1] = "a forwarded label with its arrow, italic: once at the very top, and as the header of every attachment"
  derived from: framing "forwarded-message"
- ornament[2] = "a perforated rule (4 px dash, 4 px gap) as the only divider"
  derived from: seed crossed cheque "tearing the leaf out along the perforated edge"
- ornament[3] = "ballpoint strokes for the crossing and every strike-through: 2 px and 1.7 px, each bowed, the first with a hook where the pen lands and the second with a flick where it lifts"
  derived from: seed crossed cheque, elements 1 and 2 ("two parallel diagonal strokes"; "cancelled by a single horizontal stroke"; "the drawer's handwriting in pen")
- ornament[4] = "one number, INV-014, repeated in seven places"
  derived from: designer "repetition of one small object until it means something" (the dated tins)
- ornament[5] = "clock time to the second on every mark the system makes"
  derived from: designer "its voice-over gives time and distance in exact figures"
- ornament[6] = "a line of wide-tracked numerals along the sheet's foot, in three labelled groups (NO, DATE, SEN)"
  derived from: seed crossed cheque, element 5, "a machine line along the foot"
- ornament[7] = "labels on empty slots"
  derived from: seed *Night Mail*, element 2, "each labelled with a destination"

### motion
Saw: framing + constraint. Hidden: designer, seeds, competitors, domain anchors, typography. (Moves that come from the hidden inputs, such as the catch, the hanging message, the frame rate, the crossing, the tear-off, the flip and the wrap, are logged in section 2 against their anchors. Section 6 assembles them and tags each component with its source.)

- motion[0] = "the whole vocabulary is five moves: a cut, a translate that stops dead, a scale, a clip wipe with a hard edge, a drawn stroke"
  derived from: constraint "every change of state happens as a cut or through movement, scale, clipping or masking"
- motion[1] = "arrival by cut: a message, a caption, a digit, a tick or a whole sheet of paper is not there and then is, on one frame; ticks advance one grey, two grey, two blue"
  derived from: framing ("a tick turning from one to two", recorded at Step 4) + constraint "Everything is either there or not there"
- motion[2] = "forwarding is the basic move: a fragment leaves one place and lands in another by one linear translate of 120 to 160 ms, stops dead, settles in a single frame; it leans 12 degrees while moving and is cut upright where it lands"
  derived from: framing "forwarded-message" (content moved from one place to another; "a file landing in the thread") + constraint "movement"
- motion[3] = "thread travel is stepped: the band moves in whole jumps of one step and stops on a step; no position between two steps is ever shown"
  derived from: framing (a thread advances one message at a time) + constraint (no blending between positions; a position is held or it is not)
- motion[4] = "scrolling is the thread's own scroll: never intercepted, pinned or snapped; a move tied to it is a pure function of scroll position and runs backwards"
  derived from: framing ("a thread is a vertical, thumb-native narrative", recorded at Step 4)
- motion[5] = "timing table: linear travel and hard stops only, no ease-out tail, no spring. Cut 0 ms, stroke 110, catch 120 to 140, wipe 170, flip 200. Only the opening sequence runs longer than 420 ms"
  derived from: constraint ("either there or not there": a tail that eases toward rest is the positional form of a fade and is left out by the same reasoning)
- motion[6] = "the stylesheet draws the finished frame; every animation plays from an earlier state into it with backward fill; reduced motion is that frame, reached by a cut. When motion is allowed the earlier state is set before first paint, so the finished frame is never shown and then taken away"
  derived from: constraint, test 4 ("reached by a cut to the finished still, not by a slow fade")
- motion[7] = "hover, focus, pressed and disabled change by cut or by shape: a 1 px drop, a border weight, an outline, a dashed edge"
  derived from: constraint, test 3
- motion[8] = "whatever the system writes arrives by a left-to-right clip wipe with a hard edge; whatever a person chooses arrives by a translate"
  derived from: constraint "clipping or masking" and "movement"
- motion[9] = "hand transport: the thumb drags a knob along a rail, the knob's position sets where the opening sequence stands, and it runs backwards under the thumb"
  derived from: framing ("a vertical, thumb-native narrative", recorded at Step 4: in a thread the thumb is what moves time) + constraint "movement" (the only thing that changes is position). The rail's uneven marks are not claimed here: they come from seed *Night Mail*, which this axis may not see, and are bound in `key_visual_elements[8]` and R02.3.

### inspirations
Saw: all 7 bank anchors. Ran last. This is the cross-anchor summary; it is also where elements from the two domain anchors are bound, since no other axis may see them.

- inspirations[0] = "Malaysian crossed cheque leaf: the crossing, the strike, words and figures, the tear-off stub, the machine line"
  derived from: anchor 01, `references/seed_crossed_cheque_ac_payee.md`, elements 1 to 5
- inspirations[1] = "*Night Mail* (1936): the catch, the pouch that hangs still, the pigeon-holes, cut length as tempo (in S1, S6 and S8), the drop"
  derived from: anchor 02, `references/seed_night_mail_1936.md`, elements 1 to 4 and the description of the pick-up shot
- inspirations[2] = "*Chungking Express* (1994): one sharp subject against a step-printed world; exact times; one object repeated; hard cuts between episodes; a lit counter at night"
  derived from: anchor 03, `sampling.md` "## Designer locked"
- inspirations[3] = "Bukku: trial and true terms in the first screen, RM plans side by side, slim top bar, labelled month report"
  derived from: anchor 04, `sampling.md` "#### vs Bukku (idx 6)", borrow rows
- inspirations[4] = "Invoice-Generator.com: the invoice first, its anatomy, a light sheet, try it with no account, the PDF as payoff"
  derived from: anchor 05, `sampling.md` "#### vs Invoice-Generator.com (idx 19)", borrow rows
- inspirations[5] = "Card labels and camera tape: the flip, the tape label, the row of slots, the green wrap, the lock switch, and the tape palette `#1E9E4A`, `#D4262C`, `#F2C418`, `#1F5FBF`, `#F3F1EA`, `#111111` (estimates)"
  derived from: anchor 06, `references/domain_card_labels_camera_tape.md`, elements 1 to 5 and "Colour"
- inspirations[6] = "The return block, formal only: the second-beat stamp, the three-part record block, two type voices, before and after on one sheet"
  derived from: anchor 07, `references/domain_myinvois_validated_einvoice_qr.md`, elements 1 to 4

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
