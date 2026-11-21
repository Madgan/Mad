# Borrowings: v4 (rebuild 3, the finishing pass after critic cycle 3), SIS home page version 2

Written 2026-11-20 after the third rebuild of `designer/index.html`, in answer to `v1_critic/critic_verdict_3.md` (9, 9, 9, 9; the constraint gate and all ten hard limits passing). It replaces `borrowings_v3.md` as the attribute-binding manifest and borrowing summary for the page as it now stands. `borrowings_v1.md`, `borrowings_v2.md` and `borrowings_v3.md` are unchanged.

Every evidence cell names a place in the build (a selector) and, where a picture helps, a saved frame. Frames are in `v1_critic/screens/`, prefix `rebuild3_`; all of them were taken by `tools/rb3_capture_all.sh` after the last change to the build, and the same run wrote every measurement quoted here to `tools/rb3_capture_log.txt`. Sheets paste frames side by side (phone) or stack two (desktop) with no scaling. Which frames were opened is stated exactly in `designer/build_notes_v4.md`, section 4; a frame cited here and not opened there is marked unverified there. Bank entries are written stand-ins for images that could not be downloaded (accepted deviation), so "reference evidence" cites the written entry.

In order: 0 what the rebuild changed; 1 palette; 2 per-reference log (7 anchors); 3 competitor tables and hooks; 4 attribute-binding manifest (10 axes); 5 assembly; 6 sequence sheet; 7 states; 8 motion rules and the constraint; 9 hard limits; 10 open items.

---

## 0. What the rebuild changed

| Verdict 3 item | What was re-decided | Where |
|---|---|---|
| 1. The tick's length is whatever the thumb makes it; then five identical fixed receipts | The receipt of the PDF message is on a clock, and the clock starts on the frame the leaf lands: one grey tick and "已发出 / Sent" on that frame, two grey and "已送达 / Delivered" 260 ms later, two blue, "已读 / Read" and the minute at 520 ms, each a cut. It is no longer a function of scroll position. Going back above the drop takes the leaf out of the message, and the receipt with it. Logged on every frame while wheeling at 300, 600 and 1,500 px a second (390) and 800 (1280): sent at 0, delivered at 266, read at 534 ms in every run (the timers are set for 260 and 520; the log is one frame behind them), the file bar wholly on screen at each cut at every speed. The four other receipts stay, and each now does its one thing once: one grey tick and "已发出" until its line has been wholly on screen for 260 ms, then two blue and "已读" with the minute (logged: 266 to 271 ms). It then stays read. Reduced motion and no script: all five stand at read | `landed()`, `story()`, `receipts()`, `.doc-bubble[data-state]`, `.msg.attach[data-state]`; S4, S13; `motion[1]`, `ornament[0]` |
| 2. For the first third of a second the streak is slabs with even teeth, and nothing is still | The slab is gone. In a bubble's place stand 5 to 12 separate tines, 2 to 22 px wide at 390 (1 to 12% of the bubble), a little over half of them starting on the bubble's leading edge and the rest 0.3 to 2.5em behind it, each cut off on a slant at its own length; at most four scraps of that edge, 0.5 to 1.1em deep, join neighbours that both start on it. Over that the same three to five bars as before (2.6 to 8.5 px wide, 76 to 185 px long at 390), of which two or three now start 2 to 4em ahead of the edge. And the first hanging message ("抬头写 Lumen Events Sdn Bhd") now hangs from the first step of the run, so there is one still, readable thing on the stage before the sheet is cut in. Step rate unchanged (22 steps in 1,839 ms). Flash by the critic's count: 0.3% at 390 in Chinese, 0.1% at 390 in English and 0.7% at 1280 (the v3 build by the same count on the same machine, which are also the critic's figures for it: 0.3%, 0.7%, 0.4%). The largest of the three is 0.7% before and after; one condition fell and one rose | `addSmear()`, `.smear .hd`, `.smear .tr`, `hanger()`; R03.2, R02.2; `imagery[1]`, `imagery[7]`; S1 |
| 3. Desktop: a generic heading in the margin; one short note against a tall attachment; the sheet on one side of the screen and the leaf on the other | The headings are not drawn at any width (they stay for screen readers). At 900 and up the page is two columns all the way down: the page's own voice on the left (the claim and the trial button, then the notes), the thread on the right (the stage, then a 480 px lane that ends on the stage's right edge). At 1280 the sheet's left edge is at x 816.5 and the leaf lands in his reply at x 816.5. Each episode's note is cut into the facts it holds (three for each of the four product episodes, one for the plans), and each stands in the margin at the height of the thing it is about, on a perforated leader that runs across to the lane: measured within 1 px of its target at 900, 1024, 1280 and 1440 in both languages. The page's last line stands beside the composer in the same way | `.tc`, `.tc>.notice`, `.nt`, `.tail>.elapsed`, `.hero-stage .invoice-sheet`; section 5; `key_visual_elements[15]`, `ornament[2]`, `surface_treatment[6]` |
| 4. `motion[5]` gives one value for moves that run at several; `motion[3]` claims more than its inputs hold | Every `animate()` call the page makes was logged with its duration (`tools/rb3_durations.js`) and `motion[5]` now gives the ranges found. `motion[3]` says only that the band's travel is a row of cuts, which is all the constraint carries; the reason and the rate are the step-print's, bound in `imagery[0]` | section 4 |
| 5. The language switch does nothing with scripts off; two cells of the Bukku table do not match the build | The switch is a native checkbox (`#lang-en`, `role="switch"`), and the stylesheet reads it with `:has()`, so every string changes with scripts off; with script the thumb still travels 80 ms, the strings are cut on the frame it stops and the reader's place is held. "Navigation depth" now says six footer links and names them. "Language switch" says what works without script and what does not | `label.lang-toggle`, `#lang-en`; section 3; S11; section 9, limit 8 |
| 6. Hero thread bubbles 12 px from the stage edge | 16 px at 390 and at 320 (`max(16px, 1.231em)`), the hanging message the same | `.bubble`, `.bubble.out`, `.hang.in`, `.hang.out` |
| Found on the way | The opening's clock was stopped for the length of a rebuild whenever the web fonts arrived mid-run (the run ended 30 to 75 ms late). The rebuilt timeline now starts where the wall clock stands: sheet cut in 522 to 552 ms after the page's own first-frame stamp in 8 cold runs. The language hold now anchors on a single sentence of a note where the reading line is on one | `TL.prototype.play`, the `fonts.ready` branch; `ANCH`; S1, S11 |

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

The `color_palette` axis may see only the framing, the seeds and the constraint, so it cannot cite the tape entry. What it produced is the stage the tape colours sit on. Entries `color_palette[0]` to `[15]` in section 4. Values for the thread colours are recalled from the app the framing names; none was measured; all are starting values.

| Token | Hex | Used on |
|---|---|---|
| `--stage`, first ground | `#0B1216` | `body` (today), `.hero-stage`, `.plan` |
| month-end ground | `#0B2346` | `body[data-ep="month"]`, `.ep[data-ep="month"]` |
| day-one ground | `#2A1606` | `body[data-ep="dayone"]`, `.ep[data-ep="dayone"]`, `footer` |
| notice black | `#05090B` | `.stage-caption`; `.notice` and `.elapsed` on a phone |
| `--bubble` | `#1F2C33` | incoming bubbles, `.msg.in`, `.composer`, unlit `.date-chip` |
| `--bubble-out` | `#0F5345` | outgoing bubbles, `.msg.out`, `.doc-bubble` |
| `--tick` | `#53BDEB` | read ticks, time stamps on dark, focus outline, blue bars of the smear |
| `--streak` | `#12A07E` | green bars of the smear |
| `--soft` | `#B9D3CC` | times and unread ticks on green, pale bars of the smear |
| beam | `#0F394B` | `.beam` (fixed `screen` blend) |
| `--text`, `--meta` | `#E9EEF0`, `#8A9AA3` | text; time stamps and secondary lines |
| `--sheet`, `--ink`, `--label` | `#F5F2E9`, `#14181B`, `#5A6268` | paper, ink and rules, labels on paper |
| `--pen` | `#1F5FBF` | crossing strokes, strike-throughs, focus on paper (same value as tape blue on purpose) |

### 1.4 Contrast (computed, WCAG relative luminance; `tools/rb2_contrast.py`)

| Pair | Ratio | Use |
|---|---|---|
| `--text` on `#0B1216` / `#0B2346` / `#2A1606` / `#05090B` | 16.1 / 13.4 / 14.8 / 17.1 | copy, headings, notes on each ground |
| `--meta` on the same four | 6.5 / 5.4 / 5.9 / 6.9 | time stamps, small labels |
| `--tick` on the same four | 8.9 / 7.3 / 8.1 / 9.4 | clock stamps on notes |
| `--text` / `--meta` on `--bubble` | 12.2 / 4.9 | messages; time inside a bubble |
| `--text` / `--soft` on `--bubble-out` | 7.7 / 5.7 | outgoing messages; receipt word and time |
| `--ink` / `--label` / `--pen` on `--sheet` | 15.9 / 5.5 / 5.4 | invoice text, labels, the phrase between the strokes |
| `--sheet` / `#AEB8BD` on `--ink` | 15.9 / 8.8 | filed rows |
| marker black on tape green / tape yellow | 5.4 / 11.4 | trial button; tape labels |
| tape white on tape red / tape blue | 4.5 / 5.4 | draft, not saved, revoked; Pro, token, connected |

Ground against ground, as a cut: first to second 1.21, second to third 1.10 (and a change of hue from 216 to 27 degrees). The critic computed 312 visible text runs on the three grounds in cycle 3 and found none below AA; no colour has changed since. The table above is computed, not sampled from pixels.

### 1.5 What changed in the palette for v4

- **No value changed.** The file holds the same 33 hex values as the v3 build, each named in 1.2, 1.3 or `color_palette[15]`.
- **Streak:** the tines of a smear are in the bubble's own colour (`--bubble`, `--bubble-out`, opaque); the bars over them are the same three streak colours at the same fixed 0.6 and 0.42.
- **Notice black `#05090B`:** behind `.stage-caption` at every width and behind `.notice` on a phone; at 900 and up the notes stand on the ground itself.
- **Receipts:** an unread receipt is `--soft` on the outgoing green (5.7 to 1), a read one `--tick`; the word beside it changes with it, so the state is not carried by colour alone.
- **Fixed transparency in use, all unchanging:** `.smear .tr` 0.6 and 0.42, `.catch-tr` 0.6 and 0.42, wallpaper stroke 0.045, hero grain 0.07.
- **Palette gate:** still provisional, for the reason given in 1.1.

---

## 2. Per-reference borrowing log (7 anchors)

Each element is named and specific, with the place it lands, the sequence that carries it and a frame. `R01.4` means Reference 01, element 4.

### Reference 01: Malaysian crossed cheque leaf (`references/seed_crossed_cheque_ac_payee.md`)

**Visual elements borrowed:**
1. The crossing: two parallel diagonal pen strokes across the top-left corner with a phrase between them → `#sheet .crossing` (`.s1` 2 px with a hook, `.s2` 1.7 px with a flick, both bowed; "INV-014 · 开好了" or "INV-014 · READY" at 11 px). Drawn in S1 at 1,900 and 2,030 ms by `stroke-dashoffset` → `rebuild3_s1_390zh_f.png` (no stroke, one, two with the phrase), `rebuild3_rest_390_en.png`.
2. The strike-through that narrows → `#sheet .bill-to .strike`, `#sheet .row .strike` (S3), `#pro .token-strip .strike` (S10) → `rebuild3_client_tanjung_390zh_a.png` (first frame: the old client struck), `rebuild3_taps_390zh.png` (fourth frame: after the strip is struck and wiped away).
3. Amount in words and in figures → `#sheet .total` (18 px) over `#sheet .total-words` (11 px), cut in at 1,770 and 1,820 ms → `rebuild3_s1_390zh_e.png`.
4. Tear-off with a counterfoil: "the finished invoice leaves the frame by sliding away from a perforated edge while a narrow stub stays behind with the record (number, client, amount, date)" → `#story .stub` (358 x 50: number, client code, amount, date, the word 存根 / Stub) stays on the client page; `#story .leaf` hangs from it at `#story .perforation`, slides 72 px along the perforation and leaves (S4); the stub turns over to its filed face (S5) → `rebuild3_story390zh_a.png` (joined, tear starting, half torn, torn), `rebuild3_story390zh_b.png` (first frame: gone, stub filed; second frame: back above the drop, torn again and the slot empty).
5. A machine line of fixed-width numerals along the foot → `#sheet .machine-line` ("NO 2026014 DATE 20112026 SEN 270000", 11 px, tracked 0.1em, labels in the label grey) → `rebuild3_rest_390_zh.png`.
6. The leaf's fixed zones → the zone plan of `.invoice-sheet` → `rebuild3_rest_390_zh.png`.
7. Pale printed paper → `--sheet #F5F2E9` (an estimate; the entry gives no number). The pen's blue is carried into the second ground (`color_palette[12]`).

**NOT applied:** the cheque itself, a bank name, account or code-line numbers, the words of the printed crossing, "or bearer", any signature line, any word about payment. The phrase between the strokes says that the sheet is made, in both languages, and nothing about money.

**Reference evidence:** the entry's "The commitment gestures", "Layout and proportion", "What the build may borrow", items 1 to 5.

### Reference 02: *Night Mail* (1936) (`references/seed_night_mail_1936.md`)

**Visual elements borrowed:**
1. The catch: one fragment snapped onto the still sheet by a single translate with a hard stop → `.catch` chips at 760, 1,100 and 1,360 ms, 12 to 14 px text, travel about 150 to 250 px, each trailing three thin tapered bars (`.catch-tr`) → `rebuild3_s1_390zh_b.png` (third and fourth frames), `rebuild3_s1_390zh_c.png`, `rebuild3_s1_390zh_d.png`.
2. The pouch that hangs still while the train streaks: "a leather mail pouch, which a moment ago hung still from a trackside post, is caught" → `.hang`: the first source message, "抬头写 Lumen Events Sdn Bhd", hangs in the band from the first step of the run, 760 ms before its catch. Until the sheet is cut in at 300 ms it is the one still, readable thing on the stage; after that it hangs under the sheet. The two later ones are cut in 220 and 190 ms before their catches → `rebuild3_s1_390zh_first600.png` (four steps of the run before the sheet: the message does not move), `rebuild3_s1_390zh_a.png` (second to fourth frames), `rebuild3_s1_1280zh_a.png`, `rebuild3_rt390zh_f08-11.png` (four consecutive wall-clock frames), `rebuild3_live_390zh.png`.
3. The pigeon-hole grid: six labelled slots that fill one at a time → `#sheet .slot-empty[data-slot]`, from the cut at 300 ms → `rebuild3_s1_390zh_a.png`, fourth frame.
4. Cut length as tempo: intervals shorten, then a long hold → S1 beats at 300, 760, 1,100, 1,360, 1,560, 1,720, 1,840 (intervals 460, 340, 260, 200, 160, 120), drawn as the ten marks on `.cut-rail .marks`; the same idea in S6 (`MT`) and S8 (`FT`, `DT`) → `rebuild3_rest_390_zh.png` (rail), `rebuild3_cut_390.png` (months part way), `rebuild3_sec390zh_02.png`.
5. The drop: "the PDF bubble is put out of the moving frame into the visitor's thread (a slide out along the travel direction to a fixed position)" → `#story .leaf` falls 136 px from the client page into `#story .doc-bubble`, 160 ms, linear, hard stop, one frame of settle; the outline becomes his outgoing message on the frame it lands, and that frame starts the receipt's clock (S4) → `rebuild3_story390zh_a.png` (fourth frame: torn, slot empty), `rebuild3_ticks_390zh_a.png` (first frame: in flight; second: landed, one grey tick), `rebuild3_story390zh_b.png` (first frame: landed and read). Logged on every frame in `tools/rb3_capture_log.txt` ("the receipt clock: per-frame log"): first moved frame to landing frame 167 to 168 ms, 10 frames.
6. The sorting wall as a row that fills → `#import .slot-row` (S8), shared with anchor 06 → `rebuild3_sec390zh_02.png` (third and fourth frames), `rebuild3_sec390zh_03.png`.

**NOT applied:** sound, verse, stills, people, the train as an image.

**Reference evidence:** "Two speeds in one frame", "Sorting as a grid that fills", "Rhythm by cutting", the description of the pick-up shot, "What the build may borrow", items 1 to 4.

### Reference 03: Wong Kar-wai, *Chungking Express* (1994) (`sampling.md`, "## Designer locked", lines 250 to 267)

**Visual elements borrowed:**
1. Two speeds in one frame: "one person stands still at the counter, sharp and slow, while the crowd passes in front as streaked, step-printed blur" → from the first step of the run one message hangs still and sharp in a band in which no passing message can be read; from 300 ms `#sheet` (never transformed, every glyph sharp) stands over `.mover` (22 steps of 64 px, 12 a second) → `.hero-stage` during S1 → `rebuild3_s1_390zh_first600.png`, `rebuild3_s1_390zh_first600b.png` (the page clock from 1 to 600 ms, eight frames), `rebuild3_s1_1280zh_a.png`, `_b.png`, `_c.png`; on the wall clock `rebuild3_rt390zh_f04-07.png`, `rebuild3_rt390zh_f08-11.png`, `rebuild3_rt390zh_f12-15.png`, `rebuild3_live_390zh.png` (lossless).
2. Step-printing as a drawn treatment: "movement drags and colour bleeds between frames" → `.smear`: per bubble, no slab. `.hd` is one `clip-path` polygon of separate four-cornered tines in the bubble's own colour: 5 to 12 of them, 1 to 12% of the bubble wide and never under 2 px (2 to 22 px at 390), 56% starting on the bubble's leading edge and the rest 0.3 to 2.5em behind it, each cut off on a slant at its own length (inside the bubble's depth, or up to 5.5 to 10em beyond its foot); at most four scraps of the leading edge, 0.5 to 1.1em deep, join neighbours that both start on it. Over that, three to five bars (`.tr`: 2.6, 3.4, 4.4, 6 or 8.5 px wide, 76 to 185 px long at 390, pointed at the trailing end, at 5, 24, 44, 63 and 82% of the bubble's width) in `--tick` at 0.6 and `--streak` or `--soft` at 0.42; two or three of the bars of each smear start 2 to 4em ahead of the leading edge, so no smear ends on a level line at either end. `[data-ph]` cuts the bars between two lengths on alternate steps; all of it is cut on at the first step and off at 1,840 ms. Measured as built in `tools/rb3_capture_log.txt` ("smear geometry") → `rebuild3_s1_zoom2x.png` (double density), `rebuild3_s1_390zh_first600.png`, `rebuild3_s1_1280zh_a.png`.
3. Exact time as a repeated mark: to the second on `.record-block .when`, `.stage-caption .ck`, `.wrap-checked`, every `.notice .ck`; to the minute on message times, all from his clock → `rebuild3_sec390zh_01.png`.
4. One small object repeated: INV-014 in seven places (`ornament[4]`) → `rebuild3_story390zh_b.png`, `rebuild3_sec390zh_02.png`.
5. Hard cuts between short episodes → S7: as each `.date-chip` passes mid-screen the ground, the top bar and the chip change on one frame; back when he scrolls back → `rebuild3_cut_390.png` (6 px before and after each boundary), `rebuild3_cut_1280_dayone.png`.
6. A lit counter at night: one hard-edged light and one white sheet in it → `.beam`, `#sheet` and its hard shadow → `rebuild3_rest_1280_zh.png`.
7. The cut as an arrival → `#sheet` at 300 ms of S1 → `rebuild3_s1_390zh_first600.png` (fourth frame, 255 ms: no sheet) and `rebuild3_s1_390zh_first600b.png` (first frame, 300 ms: the sheet, with six empty slots); on the wall clock `rebuild3_rt390zh_f12-15.png`.
8. Faces you cannot read: the passing crowd has no legible face → passing messages have no legible text (`.thread-band.running .strip .bubble{visibility:hidden}`) → same frames as element 1.

**NOT applied:** film stills, people, neon lettering, any sound. Smear over text or UI at rest (condition 1): at rest the band is ordinary sharp bubbles.

**Reference evidence:** the signature-work description, the justification's "hard cuts between short self-contained episodes", conditions 1 to 4.

### Reference 04: Bukku (`sampling.md`, "#### vs Bukku (idx 6)", lines 478 to 508)

**Visual elements borrowed (the `borrow` rows):**
1. Trial button with its true terms in the first screen → `#hero .cta-trial` (y 575 to 631) with `#hero .trial-terms`; `header.topbar .cta-trial` → `rebuild3_rest_390_zh.png`, `rebuild3_rest_390_en.png`.
2. Verb-first trial label → `.cta-trial` ("免费试用 7 天" / "Start 7-day free trial").
3. Real product screens → `.invoice-sheet`, `#story .sis-card`, `#import .review-card`, `#reports .month-bars` → `rebuild3_sec390zh_01.png` to `_03.png`.
4. Slim top bar and a visible language choice → `header.topbar`, `label.lang-toggle` holding the native checkbox `#lang-en` → `rebuild3_rest_390_en.png`; with scripts off `rebuild3_nojs_lang_390_a.png`.
5. Named plans, RM price with the period, what each includes, side by side → `#pricing .plan` x 2 → `rebuild3_sec390zh_04.png`.
6. Month-by-month sales, expenses and net profit, labelled → `#reports .month-bars`, `#report .detail` → `rebuild3_sec390zh_02.png`.
7. The market named in the claim; a local support route → `#hero .hero-claim`, `footer .trust-line`, `footer .support-whatsapp` → `rebuild3_rest_390_zh.png`, `rebuild3_sec390zh_04.png`.

**NOT applied (the `diverge` rows):** see section 3; each names where the alternative can be seen.

**Reference evidence:** the table rows; Bukku's page itself was not seen (search summaries only).

### Reference 05: Invoice-Generator.com (`sampling.md`, "#### vs Invoice-Generator.com (idx 19)", lines 510 to 538)

**Visual elements borrowed (the `borrow` rows):**
1. The invoice itself in the first screen → `#hero .hero-stage .invoice-sheet` (y 181 to 473) → `rebuild3_rest_390_zh.png`.
2. Invoice anatomy → `.invoice-sheet` with `.from`, `.bill-to`, `.meta`, `.lines`, `.total`; `.terms` on the full leaf in `#story` → `rebuild3_story390zh_a.png`.
3. Line-item table, amounts right-aligned in tabular figures, in RM → `.invoice-sheet .lines`, `.total`.
4. A light sheet on a plain ground, set plainly → `.invoice-sheet` (own type scale in Instrument Sans).
5. Try it with no account → `.picker-client`, `.picker-rate`, and what he picks is what the rest of the page shows → `rebuild3_client_tanjung_390zh_a.png`, `rebuild3_client_tanjung_390zh_b.png`.
6. The PDF as the end of the task → `#story [data-beat="pdf"]` → `rebuild3_story390zh_b.png`.
7. Almost no navigation; no sound → `header.topbar`; no audio or video element.

**NOT applied (the `diverge` rows):** see section 3. "Layout" is carried through at desktop width as well (`.console` under the stage; nothing beside the sheet but the claim and the trial button).

**Reference evidence:** the table rows.

### Reference 06: Card labels and camera tape (`references/domain_card_labels_camera_tape.md`)

**Visual elements borrowed:**
1. Flip to mark done: "done is the other face of the same object" → `#story .stub` turns over on its long axis from the stub face (paper, client code, 存根) to the filed face (dark, 已归档) and takes its place among the filed rows (S5); `.old-file` in `#import .slot-row` turns from its picture face to its read face (S8) → `rebuild3_story390zh_a.png` (stub face), `rebuild3_ticks_390zh_a.png` (first frame: the strip part way over), `rebuild3_story390zh_b.png` (first frame: filed face), `rebuild3_sec390zh_03.png`.
2. The tape label → `.tape-label` (sample labels, client codes, "014", plan names, "AI 读到", draft, saved, not saved, connected, revoked) → `rebuild3_rest_1280_zh.png`, `rebuild3_draft_390zh.png`.
3. The row of slots as a progress readout, no bar and no percentage → `#import .slot-row` → `rebuild3_cut_390.png` (third frame: one file in, four to come).
4. Green wrap means checked: a band laid across the object only after a person has reviewed it, covering part of it → `#import .wrap-checked` (S9) with the tape label under the card cut from 未保存 to 已保存 → `rebuild3_taps_390zh.png` (second and third frames).
5. The lock switch as a physical position → `.picker-client .tile .lock` (track, knob, padlock, the word 已选) → `rebuild3_client_tanjung_390zh_a.png`.
6. The identifier travels with the object → the code on the picker tile's tape is the code on the sheet, the stub, the leaf and the client page, for whichever client is picked → `rebuild3_client_tanjung_390zh_b.png`.
7. State is carried by tape, with a word: SIS states on the page (draft, not saved, saved, connected, revoked) are tape labels; the chat's ticks carry none of them.
8. Tape palette: see 1.2 and 1.5.

**NOT applied:** any camera or card brand, a real product label, a meaning for red tape (red always carries its own word).

**Reference evidence:** "How it sequences information", "Named elements the build may borrow", items 1 to 5, the colour list.

### Reference 07: The return block, formal borrowing only (`references/domain_myinvois_validated_einvoice_qr.md`)

**Visual elements borrowed:**
1. The return stamp as a second, later beat → `#sheet .record-block`, S1 at 2,230 ms, a left-to-right clip wipe of 170 ms → `rebuild3_s1_390zh_f.png` (fourth frame: before), `rebuild3_s1_390zh_g.png` (during, after).
2. The record block's three parts: a plain square mark holding the page count "1/1" (weight 700), an identifier line, a date and time line with seconds from his clock, in 11 px tabular capitals → `.record-block .mark`, `.id`, `.when` → `rebuild3_rest_390_zh.png`.
3. Two hands, two type voices: what the person chose in Instrument Sans 600 and by translate; what the system wrote in tabular figures and by wipe or cut → `#sheet` → `rebuild3_s1_390zh_d.png` (fourth frame: number and date wiped in).
4. Before and after on one page: the sheet without its block, and with it. Now also in the draft: a sheet with no rate has no block, on the first screen and on the leaf below → `rebuild3_draft_390zh.png`.

**NOT applied, and never to be applied without the owner:** a matrix code or anything like one, the entry's forbidden words or their Chinese equivalents, a government mark, any compliance claim.

**Reference evidence:** "How it sequences information", "Named elements the build may borrow", items 1 to 4.

---

## 3. Competitor judgment tables

The verdicts and rationales are those written at Step 8 in `sampling.md`, unchanged. Every row has a build location. Changed in v4: Bukku "Navigation depth" (the footer has six links, named), Bukku "Language switch" (what the control is, that it works with scripts off, and what does not change without script), Bukku "Layout" and "Typography" and Invoice-Generator.com "Typography on the page" and "Claim in the first screen" (the desktop margin holds notes and no headings; which side things stand on), and every frame reference.

#### vs Bukku (idx 6)

Observed from search results: hero headline, subhead, badge, trial terms, starting price, user count, feature areas. From prior knowledge and not verified today: light surface, a static dashboard screenshot beside the claim, long feature sections, neutral sans type.

| Element | What Bukku does | verdict | rationale | build location |
|---|---|---|---|---|
| Hero staging | A claim headline, a compliance badge, the trial offer, and the product beside it as a still image. Everything arrives at once and nothing changes. | diverge | A still claim plus a still screenshot is what Jun Hao scrolls past. The live page already beats this on atmosphere; version 2 must beat both by making the first screen an event: the invoice assembles while he watches. | `#hero .hero-stage`: S1 (`.mover`, `.smear`, `.hang`, `.catch`, `.catch-tr`, `#sheet`). Frames: `rebuild3_s1_390zh_a.png` to `_g.png` (page clock), `rebuild3_rt390zh_f04-07.png` to `rebuild3_rt390zh_f12-15.png` (wall clock, consecutive) |
| Trial offer in the first screen | The trial button and its terms (30 days, no credit card) sit in the hero, above any scrolling. | borrow | Table-stakes for local software and the live page's first known weakness. A visitor with 30 seconds must be able to start the trial without scrolling. | `#hero .cta-trial` (y 575 to 631 at 390), `header.topbar .cta-trial` (44 px high). `rebuild3_rest_390_zh.png`, `rebuild3_rest_390_en.png` |
| Trial terms line | A short line under the button states the length of the trial. | borrow | Stating the offer next to the button removes a question. SIS states only what is true: 7-day free trial, Basic RM 199 a year, Pro RM 399 a year. | `#hero .trial-terms` (the second line inside the trial button, y 608 to 620). `rebuild3_rest_390_zh.png` |
| "No credit card" promise | Printed under the trial button. | diverge | Whether SIS needs a card for the trial is unknown (`facts.md`), so the claim cannot be made. | `#hero .hero-cta .trial-terms` and the note of `#pricing`: the offer is stated as the trial and the two prices and nothing else. No card wording exists in the file. `rebuild3_rest_390_zh.png` |
| How the product is shown | Real product screens, not abstract renders. | borrow | The principle is table-stakes and fixes the live page's third weakness (only 3D renders, no product, no invoice). A buyer of business software expects to see the software. | `.invoice-sheet` (`#sheet`, `#story .leaf`), `#story .sis-card`, `#import .review-card` with `#import .review-state`, `#reports .month-bars`. `rebuild3_sec390zh_01.png` to `_03.png` |
| Product framing on a phone | A wide desktop dashboard scaled down (not verified today). | diverge | A desktop dashboard at 390 px is unreadable texture. SIS shows one object at reading size, the invoice, then one screen per idea. | `#sheet` (280 px wide at 390, no text under 11 px: name 14, rows 12, total 18), `#story .leaf` at the same size, `#report .detail`. Audit: 0 visible text runs under 11 px. `rebuild3_rest_390_zh.png`, `rebuild3_story390zh_a.png` |
| Motion | Effectively none: a static page with standard hover states (not verified today). | diverge | Motion is the owner's stated lever and the visitor judges motion for a living. Here motion carries meaning: fields arriving on the invoice are the claim "pick a client, pick a rate, done". | S1 to S13 in section 6: `.mover`, `.smear`, `.catch`, `.leaf`, `.stub`, `.bar`, `.old-file`, `.wrap-checked`, `.token-strip`. `rebuild3_s1_390zh_*.png`, `rebuild3_story390zh_a.png`, `_b.png`, `rebuild3_sec390zh_02.png`, `_03.png` |
| Narrative order | Organised by module (invoicing, inventory, bank, e-invoice), an inventory of what exists. | diverge | A module list has no beginning or end and caused the live page's repetition. Version 2 is one sequence told once: the old mess, a client picked, a rate picked, the invoice, the record, the month. | `main.thread`: `#hero`, then `#story` (today), `#reports` (month end), `#import`, `#pro`, `#pricing` (day one), each opened by a `.msg.in` question and closed by a `.notice`. `rebuild3_sec390zh_01.png` to `_04.png` |
| Interaction | Links and buttons only; nothing to try on the page (not verified today). | diverge | He believes what he can touch. One small tap-driven demo does more in 30 seconds than any feature paragraph. | `.picker-client .tile`, `.picker-rate .rstrip`, `.cut-rail`, `#report .mcol`, `#import .approve`, `#pro .token-btn`. `rebuild3_client_tanjung_390zh_a.png`, `rebuild3_taps_390zh.png` |
| Local grounding in the headline | "for Malaysia" is in the headline itself. | borrow | A Malaysian freelancer trusts a tool made for his market over an imported one. Saying it early, in his language, is expected. | `#hero .hero-claim` (names Malaysian videographers and photographers), `footer .trust-line` |
| Compliance badge | "LHDN MyInvois ready" badge and SST in the subhead. | diverge | LHDN e-invoice support and SST handling are unknown for SIS and must not be stated. Trust is built from what is true: Singapore-region storage, row-level isolation, the Malaysian business registration. | `footer .trust-line`: what is true stands where a badge would (storage region, isolation, registration number). No badge element exists. `rebuild3_sec390zh_04.png`, fourth frame |
| User count | "120,000+ Malaysian businesses". | diverge | No user numbers exist and the brief forbids them. Credibility comes from craft and from showing the product. | no element; nothing in the file carries a count. In its place: `#sheet` and the product views, and `footer .trust-line` |
| Navigation | Top bar with product, pricing, sign-in and a trial button (structure not verified today). | borrow | A slim top bar with sign in and the trial button is what every software buyer looks for. Kept to the minimum: logo, language, sign in, trial. | `header.topbar` |
| Navigation depth | Many links, solution and partner pages. | diverge | One page, one job. Extra links leak a 30-second visitor away from the trial. | `header.topbar`: four items (wordmark, `.lang-toggle`, `.signin`, `.cta-compact`). `footer`: six links, each to an existing route: Trust (`footer .trust-line a`), Contact (`footer .support-whatsapp a`), and Terms, Privacy, Cookies and Sign in (`footer .legal a` x 4). No product, solution, partner or blog link exists; the 14 links on the page are these six, sign in once more in the top bar, sign up five times, and two in-page anchors (`#top`, `#hero`). `rebuild3_rest_390_zh.png`, `rebuild3_m390zh_b.png` (last frame) |
| Language switch | Visible language choice for a multilingual market (not verified today). | borrow | Malaysian visitors expect to choose a language. SIS is Chinese by default with an English toggle, reachable in the first screen. | `header.topbar label.lang-toggle`, holding a native checkbox `#lang-en` with `role="switch"`, 72 x 44, in the first screen. With script it is S11 (thumb travel, the strings cut on one frame, the reader's place held): `rebuild3_rest_390_en.png`, `rebuild3_lang_390_a.png`. With scripts off it still switches every visible string, because the stylesheet reads the checkbox with `html:has(#lang-en:checked)`: checked in a no-script context at 390 and 1280, by click and by the Space key (`rebuild3_nojs_lang_390_a.png`, `rebuild3_nojs_lang_1280_a.png`). Not changed without script: the `lang` attribute, the title, the description, and the place on the page is not held. A browser with neither script nor `:has()` stays in Chinese |
| Typography | Neutral, interchangeable SaaS sans. | diverge | The owner requires type at least as good as the live page, and neutral SaaS type signals "one more dashboard". The face is set by the Typography VS step; this row only records that Bukku's default is not followed. | `.hero-claim h1` (Noto Sans SC 700; Bricolage Grotesque 800, `opsz` 27 to 40), `.notice` and at 900 and up `.nt` (Bricolage Grotesque 400, 18 px), `.invoice-sheet` and `.msg` (Instrument Sans), `.readout` and `.catch.amt` (Kanit). `rebuild3_rest_1280_zh.png`, `rebuild3_rest_1280_en.png`, `rebuild3_d1280en_b.png` |
| Color | Light surface with a single brand color (not verified today). | diverge | The owner judges the dark live page as better looking than the light version 1. Version 2 stays at or above the live page's dark, cinematic finish. | `body` grounds `#0B1216`, `#0B2346`, `#2A1606`; `.beam`; `.invoice-sheet` as the one light object. `rebuild3_rest_1280_zh.png`, `rebuild3_cut_390.png`, `rebuild3_cut_1280_dayone.png` |
| Layout | Long page of feature sections in a multi-column grid. | diverge | The live page is already 10,500 px on a phone and repeats itself. Version 2 is short, single column on a phone, one idea per screen. | one lane (`.col`); the first 640 px at 390 hold four blocks (`.fwd-label`, `.hero-claim`, `.hero-stage`, `.hero-cta`); `.cut-rail` starts at y 645. Total 5,079 px in Chinese at 390. At 900 and up the lane is 480 px, under the stage on the right, with one margin column on its left (`.tc`) in which each note stands at the height of the thing it is about (`.nt`); not a feature grid. `rebuild3_rest_390_zh.png`, `rebuild3_d1280zh_b.png`, `rebuild3_d1280zh_c.png` |
| Primary button label | "Start free trial" style label, verb first. | borrow | The label a buyer scans for. SIS uses the same verb-first form with the length stated nearby. | `.cta-trial` |
| Pricing display | Plans named, price in RM with the period, what each includes. | borrow | Plain RM figures with the period are expected locally. Two plans side by side, each with its list from `facts.md`. | `#pricing .plan[data-plan="basic"]`, `#pricing .plan[data-plan="pro"]`. `rebuild3_sec390zh_04.png` |
| Pricing tactics | A time-limited promotion (first 3 months, ends 31 Dec 2026), a per-day reframing, SST added on top. | diverge | SIS has one honest annual price and no promotion. Urgency devices and price reframing would contradict the peer-to-peer register. | `#pricing .plan` x 2: one annual price each, no promotion, no per-day figure. `rebuild3_sec390zh_04.png` |
| Data display | Dashboards and charts: sales, expenses, profit by period, with labelled axes. | borrow | Month-by-month sales, expenses and net profit is the domain's standard report and a real SIS feature. Shown once, with labels and values, never colour alone. | `#reports .month-bars`, `#report .detail`. `rebuild3_sec390zh_02.png` |
| Data density | Accounting density: ledgers, charts of accounts, inventory tables. | diverge | He is not a bookkeeper. Bookkeeping density is the reason he has not adopted accounting software. One number per moment. | `#report .detail`: one month at a time, three figures (14 px, 14 px, 26 px). Nothing is printed under the bars; the ranking shows order and count only. `rebuild3_sec390zh_02.png`, `rebuild3_taps_390zh.png` (a month tapped) |
| Empty and error states | None visible on the marketing page. | diverge | The build's own demo needs states the competitor never shows: before a client is picked, the sheet shows sample data marked as sample, and the import moment shows "nothing saved until you approve" as a visible state. | designed all the way down. `#sheet .slot-empty` (S1). Draft with no rate: `#sheet.is-draft` (red `.draft-tape`, one dashed slot, no crossing, no record block), `#story .leaf.is-draft` still on its stub place, `.stub-slot` ("存根 · 选了价目才有"), `.doc-bubble[data-state="empty"]` ("PDF · 选了价目才有"), no ticks, no 014 on the month, the draft left out of the ranking: `rebuild3_draft_390zh.png` (four frames), `rebuild3_draft_390en.png`. Import waiting: `#import .review-state.rs-wait` under a red tape label: `rebuild3_taps_390zh.png`, second frame |
| Support channel | A local contact route for a local product (form not verified today). | borrow | Malaysian buyers expect to reach a person on WhatsApp. SIS names WhatsApp as the fastest route, as a link, not a floating bubble over the content. | `footer .support-whatsapp`. `rebuild3_sec390zh_04.png`, fourth frame |

#### vs Invoice-Generator.com (idx 19)

Observed from search results: no sign-up, editable labels, logo, currency, line items, tax and discount, PDF download, "original free invoice maker", "4 million businesses". From prior knowledge and not verified today: the exact field names (From, Bill To, Ship To), the light grey page with a white sheet, a green download button in a side column.

| Element | What Invoice-Generator.com does | verdict | rationale | build location |
|---|---|---|---|---|
| Hero staging | There is no hero. The first screen is the invoice itself, with no claim above it. | borrow | The strongest convention in the category: an invoice tool shows an invoice at once. It fixes the live page's worst gap. In version 2 the invoice is the staged object in the first screen, not an illustration of one. | `#hero .hero-stage .invoice-sheet` (y 181 to 473 at 390). `rebuild3_rest_390_zh.png` |
| Claim in the first screen | None. The form speaks for itself. | diverge | A blank form says "free tool". SIS has a claim to make (pick a client, pick a rate, done) and must say it in a short readable line next to the object, never on top of it (live weakness 2). | `#hero .hero-claim`, y 77 to 167, above the stage (173 to 567) and never on it; at 900 and up beside it, at the head of the column that the notes then run down. `rebuild3_rest_390_zh.png`, `rebuild3_rest_1280_zh.png` |
| Starting state of the invoice | Blank, with placeholder prompts. Every invoice starts from nothing. | diverge | This is the exact difference SIS sells. The SIS invoice is never blank: it fills from a saved client and a saved rate. The blank sheet may appear only as the "before" beat. | `#sheet .slot-empty[data-slot]`: the blank sheet exists only from 300 ms of S1 until each slot is filled; the still is the filled sheet. `rebuild3_s1_390zh_a.png`, fourth frame |
| Motion | None. A static form; change happens only when the user types. | diverge | The contrast between typing every field and watching fields arrive by themselves can only be shown in time. This is where the owner's lever does the persuading. | S1 in `#hero .hero-stage`. `rebuild3_s1_390zh_b.png` to `_f.png` |
| Narrative | None. One state, one action. | diverge | Without a sequence there is no before and after. SIS needs a short one: mess, pick, pick, invoice, record, month. | `main.thread`, six episodes; see the Bukku row "Narrative order". `rebuild3_sec390zh_01.png` |
| Interaction: try it without an account | The visitor can make an invoice immediately, no sign-up. | borrow | Immediacy is what he expects from a free tool, and trying beats reading. Version 2 lets him change the invoice on the page, before any sign-up. | `.picker-client`, `.picker-rate`, `.invoice-sheet .total`; what he picks is carried down the page (`#story .chat-head`, `.leaf`, `.sis-card`, `.stub`, `#report .rank`). `rebuild3_client_tanjung_390zh_a.png`, `_b.png` |
| Interaction: input method | Free typing in a dozen fields. | diverge | Typing on a phone, tired, in 30 seconds, will not happen. SIS interaction is two taps (a client, a rate), which is also the product's claim. | `.picker-client .tile` (3) and `.picker-rate .rstrip` (3): taps only; there is no text field on the page. `rebuild3_client_tanjung_390zh_a.png` |
| Invoice anatomy | The recognisable parts: sender, recipient, number, date, due date, line items, subtotal, tax, total, notes and terms. | borrow | This is what an invoice is. He must recognise the object in one glance. Diverging would make the mock look like decoration. | `.invoice-sheet` (`.from`, `.bill-to`, `.meta`, `.lines`, `.total`, `.terms`) |
| Data display: line items | A table: item, quantity, rate, amount; amounts right-aligned; currency shown. | borrow | The universal convention for reading money. Amounts right-aligned in tabular figures, in RM. | `.invoice-sheet .lines`, `.invoice-sheet .total` |
| The invoice as a light sheet | A white page on a plain ground. | borrow | An invoice is paper. A white sheet on the dark stage becomes the brightest thing on screen, which is good staging and matches the print-ready PDF. | `.invoice-sheet` |
| Page color | Light grey utility page. | diverge | The owner wants at least the dark, cinematic finish of the live page. Only the sheet is light. | `body` and its three grounds; only `.invoice-sheet`, `.report-screen`, `.review-card`, the stub and the tiles are light. `rebuild3_cut_390.png` |
| Typography on the page | Plain utility sans throughout. | diverge | Page type must be at least as good as the live page; set by the Typography VS step. | `.hero-claim h1`, `.notice`, and at 900 and up `.nt` in the margin. `rebuild3_rest_390_en.png`, `rebuild3_d1280en_b.png` |
| Typography on the sheet | Plain, legible, no display type on the document itself. | borrow | A real invoice is set plainly. If the mock invoice is styled like the marketing page it stops looking real. | `.invoice-sheet` (own plain type scale, tabular figures) |
| The payoff: PDF | The end of the task is a PDF you can send. | borrow | The PDF is what his client receives, so it is the moment that matters. The sequence ends on the invoice becoming a PDF, shown as a visible state with a text label. | `#story [data-beat="pdf"]` (the `.doc-bubble`, with the leaf dropped into it). `rebuild3_story390zh_b.png` |
| Primary button | "Download", green, beside the form. | diverge | The SIS page has one job, the trial. The demo does not offer a real download, so no button may promise one. | `.cta-trial` and `.composer` are the only calls to action and both go to sign-up. `.doc-bubble .file-bar` and `#report-msg .file-bar` are labels inside a message, not controls; no download control exists |
| Navigation | Almost none: a few text links. | borrow | Few links keep a 30-second visitor on task. The build keeps only logo, language, sign in and trial. | `header.topbar` |
| Layout | One object in the centre, controls in a side column. | diverge | The single-object focus is right, the side column is not: at 390 px there is no side. Controls sit under the sheet, within thumb reach. | at 390: `.cut-rail`, `.picker-client`, `.picker-rate` under the sheet in one column (`rebuild3_rest_390_zh.png`). At 900 and up: `.console` is a row under the stage (transport, clients, rates), full width of the first screen; nothing sits in a column beside the sheet except the claim and the trial button (`rebuild3_rest_1280_zh.png`, `rebuild3_rest_1280_en.png`) |
| Sample data | The visitor's own data; nothing is pre-filled. | diverge | The build pre-fills fictional studios, clients and rates, and the brief requires them to be labelled as sample data. | one yellow `.tape-label` per episode, on the thing that carries the figures: `#sheet`, `#story .leaf`, the header of `#report-msg`, `#import-msg`, `#pro-msg`; plain small labels where a second one would repeat it: `.chat-head .smp` x 3 ("示例聊天 / sample chat"), `.sc-head .smp` ("示例资料 / sample data"); `.sample-note`. `rebuild3_sec390zh_01.png`, `rebuild3_sec390en_01.png` |
| Empty and error states | The page is one large empty state; errors appear only on download. | diverge | The build shows a filled state by default. Its own states (nothing picked yet, import waiting for approval) are designed, readable and never rely on colour alone. | same places as the Bukku row "Empty and error states" |
| Social proof | "Trusted by over 4 million businesses". | diverge | No numbers exist for SIS and the brief forbids them. | no element; nothing in the file carries a count or a quote |
| Price | Free, no account. | diverge | SIS is paid and says so plainly. The answer to "free" is not to hide the price but to show what the free tool cannot do: remember. | `#hero .trial-terms` (first screen) and `#pricing .plan` x 2. `rebuild3_rest_390_zh.png`, `rebuild3_sec390zh_04.png` |
| Text under the tool | Long explanatory and search-oriented copy below the form. | diverge | Long copy under the product is the repetition the live page suffers from. Each fact appears once. | one `.notice` per episode (five in all), each fact from `facts.md` once; on a phone it is one short paragraph under the attachment, at 900 and up its sentences stand beside the things they are about. `rebuild3_sec390zh_04.png`, `rebuild3_d1280zh_c.png` |
| Sound | None on either page. | borrow | Nothing may depend on sound (owner requirement). Every beat is carried by picture and caption. | global (no audio or video element); captions on `#hero .stage-caption` and one `.notice` per episode |

#### What the two tables say together, for presentation

1. **Converge on showing the real thing, at once.** Both competitors put the product in the first screen (Bukku as a screenshot, Invoice-Generator as the tool itself). The live SIS page does not. Version 2 puts a real invoice in the first screen.
2. **Converge on the offer being in the first screen.** Trial button plus its true terms, above any scroll.
3. **Diverge on time.** Neither competitor moves. Bukku is a still claim; Invoice-Generator is a still form. Neither can show "it remembers, so the invoice makes itself". Motion in version 2 is therefore not atmosphere (which is all the live page uses it for) but the argument itself.
4. **Diverge on the blank start.** Invoice-Generator's blank sheet is the "before"; SIS's pre-filled sheet from a saved client and rate is the "after". The page should stage that contrast once.
5. **Converge on immediacy, diverge on effort.** Let him change the invoice on the page with no account (as Invoice-Generator does), but with two taps, not typing.
6. **Diverge on proof by numbers and badges.** Bukku and Invoice-Generator both lean on user counts; Bukku adds a compliance badge. SIS has neither and may not claim them. Proof comes from craft, from the product being visible, and from the true trust facts.

### Hook notes for the build

Hooks from the two tables are used with the names recorded there, with the rename logged in v2 (captions are `#hero .stage-caption` and one `.notice` per episode).

Renames and removals against `borrowings_v2.md`:

| v2 hook | v3 | Why |
|---|---|---|
| `.ghost[data-n]` (two copies of the strip) | `.smear` inside each bubble (`.hd`, `.tr`) | verdict item 1 |
| `.catch.g1`, `.catch.g2` | `.catch-tr` x 3 | verdict item 1 |
| `.slot-tile.stub`, `.slot-tile.past`, `#story .slot-row`, `#story .slot` | `.stub` in `.stub-row`, `.stub-slot`, `.past .past-row` | the stub is a strip across the head of the leaf (item 5) |
| `.face.done`, `.face.front` on the stub | `.sface.done`, `.sface.front` | same |
| `.chat-head .tape-label`, `.sc-head .tape-label` | `.chat-head .smp`, `.sc-head .smp` | one yellow sample tape per episode (item 11) |
| `.st .w-wait`, `.st .w-done` | removed | ticks are chat receipts only (item 3) |
| `.cta-compact::after` (hit area) | removed; the button is 44 px high | item 11 |

Renames and removals against `borrowings_v3.md`:

| v3 hook | v4 | Why |
|---|---|---|
| `button.lang-toggle[role="switch"][aria-checked]` | `label.lang-toggle` holding `input#lang-en[type="checkbox"][role="switch"]`; the same `.lt-track`, `.lt-thumb`, `.lt-zh`, `.lt-en` inside | verdict 3, item 5: a native control that works with scripts off |
| `.tc>h2` drawn at 900 and up | `h2.sr` at every width (present for screen readers, never drawn) | item 3: no generic heading in the margin |
| `.tc>.notice` (one sticky block) | `.tc>.notice` holding `.nt` x 3 (x 1 in `#pricing`), each on its own track of the notice's grid | item 3: each fact at the height of its thing |
| `.doc-bubble[data-state="file"]` | removed; the states are `empty`, `sent`, `delivered`, `read` | item 1: the first tick is cut on the landing frame |
| `.msg.attach[data-state="read"]` fixed | `data-state` `sent` then `read`, set by `receipts()` | item 1 |

Added hooks:

| Added hook | What it is | Row or anchor that covers it |
|---|---|---|
| `.nt`, `.nt::before` | one sentence of a note; at 900 and up a block with a perforated leader to the lane | Bukku "Layout" (diverge); `key_visual_elements[15]`, `ornament[2]` |
| `.tail>.elapsed` at 900 and up | the page's last line, in the margin beside the composer | `key_visual_elements[11]`, `[15]` |
| `.st .w-sent` on the four attachment messages | the word of an unread receipt | `ornament[0]`; framing |
| `.draft-tape`, `.story-stage.is-draft`, `.stub-slot`, `.empty-label .l-draft` | the draft, downstream | both "Empty and error states" rows (diverge) |
| `.console` | transport and pickers as one row under the stage at 1120 and up | Invoice-Generator.com "Layout" (diverge) |
| `.tc`, `.tc.nh` | margin column and thread lane at 900 and up | Bukku "Layout" (diverge); `key_visual_elements[15]` |
| `[data-ago]`, `#meta-desc`, `?lang=en` | sample times from his clock; description in both languages; a test handle that opens the page in English | verdict items 6 and 11 |
| `window.SIS.beat()` | test handle that forces a story beat | none (not visible) |

---

## 4. Attribute-binding manifest

Ten sub-passes. Each saw the brief (App X and ICP from `inhabited.md`) plus only the inputs the protocol permits for that axis. The line under each heading records what the sub-pass saw and what was hidden. Where an element on the page comes from an input the axis was not allowed to see, it is **not claimed in that axis**; it is logged in section 2 and under `inspirations`.

Corrections made in v4. The two entries the critic marked: `motion[5]` now gives the range each kind of move runs at, taken from a log of every `animate()` call the page makes and of its three CSS transitions (`tools/rb3_durations.js`); `motion[3]` says only what the constraint carries (the band's travel is a row of cuts) and no longer derives the step from the framing; the step-print stays bound where its source may be seen, in `imagery[0]`. Entries the rebuild touched: `motion[1]` and `[4]` (the receipt is a clock, not a scroll position), `motion[2]` (measured drop), `motion[6]` (the opening's clock is not stopped for the fonts), `motion[10]`; `imagery[1]` and `[7]` (the smear and the hanging message as built); `key_visual_elements[14]` and `[15]`, `surface_treatment[6]`, `ornament[0]` and `[2]` (the switch, the margin and its leaders, the receipts); `typography[0]`, `[1]`, `[2]` (the desktop section headings are no longer drawn, so they are no longer listed).

Citation count across all 88 entries: the framing is cited in 34 (39%). Per axis: style_tags 4 of 4, mood 4 of 4, color_palette 9 of 16, typography 0 of 7, key_visual_elements 6 of 16, imagery 2 of 8, surface_treatment 2 of 7, ornament 2 of 8, motion 5 of 11, inspirations 0 of 7.

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
Saw: framing + seeds (anchors 01, 02) + constraint. Hidden: designer, competitors, domain anchors, typography. (The tape colours come from a domain anchor and are not claimed here; see 1.2 and `inspirations[5]`.) Every fill on the page that is not a tape colour is bound in this axis, the three grounds included.

- color_palette[0] = "`#0B1216` night ground" on `body` (today), `.hero-stage`, `.plan`
  derived from: framing "WhatsApp … vernacular" (the thread as it looks at night) + seed *Night Mail* "the train is a band of light against dark country"
- color_palette[1] = "`#1F2C33` bubble grey" on `.bubble`, `.msg.in`
  derived from: framing "grey bubbles"
- color_palette[2] = "`#0F5345` outgoing green" on `.bubble.out`, `.msg.out`, `.doc-bubble`
  derived from: framing "double ticks" (ticks belong to the sender's own messages, which the thread colours green)
- color_palette[3] = "`#53BDEB` tick blue" on `[data-state="read"] .ticks`, `.ck`, and the blue bars of the smear (`.smear .tr`, `.catch-tr`)
  derived from: framing "double ticks" (the read state)
- color_palette[4] = "`#E9EEF0` message text, `#8A9AA3` time-stamp grey, `#B9D3CC` time and tick grey on green" on text, `.mt`, `.st`
  derived from: framing "forwarded-message vernacular" (message text with a smaller grey time beneath)
- color_palette[5] = "`#F5F2E9` pale printed paper" on `.invoice-sheet`
  derived from: seed crossed cheque "pale printed security background"
- color_palette[6] = "`#14181B` document ink" on sheet text and rules
  derived from: seed crossed cheque "small … caps for the printed labels" + seed *Night Mail* "black-and-white"
- color_palette[7] = "`#1F5FBF` ballpoint blue" on `.crossing`, `.strike`
  derived from: seed crossed cheque "the drawer's handwriting in pen" and "two parallel diagonal strokes" (the entry does not state the pen's colour; blue is this sub-pass's choice and is recorded as such)
- color_palette[8] = "colour changes state by cut only: a tick goes grey to blue in one frame; the ground of a whole episode, the top bar and the chip that names the episode change in one frame"
  derived from: constraint "every change of state happens as a cut or through movement, scale, clipping or masking"
- color_palette[9] = "transparency is fixed wherever it is used (the bars of the smear at 0.6 and 0.42); no colour ever interpolates toward the ground"
  derived from: constraint "A fixed, unchanging transparency value is allowed" and "An element fading to or from the background colour counts as the same thing"
- color_palette[10] = "`#0F394B` light, laid over the thread as one flat band with hard edges" on `.beam`. Its hue is 198 degrees, which is the hue of the tick blue `#53BDEB` (198 degrees) taken down to 18% lightness; it is not a hue of its own
  derived from: framing "double ticks" (the hue: the read tick's blue) + seed *Night Mail* "exteriors where the train is a band of light against dark country" (the form: a band; the film gives no hue, and none is taken from it) + constraint "Everything is either there or not there" (a light with an edge, not a fall-off)
- color_palette[11] = "`#12A07E` streak green and `#B9D3CC` pale grey, beside tick blue, on the bars of the smear" on `.smear .tr[data-c]`, `.catch-tr[data-c]`
  derived from: framing (the outgoing green of the thread raised in saturation, and the pale tick grey of cp[4]) + seed *Night Mail* "the side of the speeding mail van is a streak of lit windows"
- color_palette[12] = "`#0B2346` month-end ground" on `body[data-ep="month"]`, `.ep[data-ep="month"]`. Hue 216 degrees: the ballpoint blue of cp[7] (`#1F5FBF`, 216 degrees) taken down to night. Against the first ground its luminance stands at 1.21 to 1 (v2: 1.03)
  derived from: seed crossed cheque "the drawer's handwriting in pen" (the pen's blue, already chosen in cp[7]) + constraint "every change of state happens as a cut" (an episode has a ground, and the ground is cut)
- color_palette[13] = "`#2A1606` day-one ground" on `body[data-ep="dayone"]`, `.ep[data-ep="dayone"]`, `footer`. A lamp-warm dark; the value is this sub-pass's choice and was not measured from anything
  derived from: seed *Night Mail* "night interiors lit by work lamps" + constraint "every change of state happens as a cut"
- color_palette[14] = "`#05090B` near-black" behind `.stage-caption` and, on a phone, `.notice`
  derived from: framing (the thread's centred system notices sit in their own darker box)
- color_palette[15] = "working neutrals, each a tint of cp[0], cp[5] or cp[6], listed so that no fill is unlogged: `#020507` hard shadow under the sheet; `#17242C` wallpaper stroke on the stage; `#3A464D` edge of filed rows; `#AEB8BD` dates on filed rows; `#5A6268` labels on paper; `#95ACB9` unpicked language label; `#50626C` and `#0E171C` phone frames of the nested screenshot; `#C9C4B4`, `#8E8A7D`, `#DAD6C8`, `#9AA3A8`, `#D9D5C8` paper greys on the old files and the ranking rules"
  derived from: framing "screenshots of screenshots" (phone frames, thread wallpaper) + seed crossed cheque "pale printed security background" and "small … caps for the printed labels"

### typography
Saw: the Typography VS record in `sampling.md` only. No new generation; transcribed.

- typography[0] = "Bricolage Grotesque, primary Latin: headlines 800 (`h1 .en`, `.wordmark`, `.price b`), page copy 400 (`.hero-sub`, `.notice` and its `.nt`, `.plan li`, `.sample-note`, `footer`), controls and emphasis 600 (`.cta-trial`, `.trial-terms`, `.signin`, `.lt-track`, `.replay`, `.composer`, `.pk-label b`, `.plan h3`); a Latin run inside a Chinese string takes that string's weight (500 in a control, 400 in copy); width fixed at 100". Computed on the page at 390: 800, 600, 500 and 400 only
  derived from: Typography locked, role table, pick idx 4; condition 1
- typography[1] = "Bricolage Grotesque optical size held low, set at or near the font size and never above 40: 31 and 27 on the phone headline, 40 and 37 on the desktop headline, 32 on prices"
  derived from: Typography locked, condition 2
- typography[2] = "Noto Sans SC, Chinese companion: headlines 700 (`h1`), controls, thread and product text 500, page copy 400, never above 700". Computed at 390: 700 on 2 runs, 500 on 134, 400 on 44, nothing else
  derived from: Typography locked, role table and condition 3
- typography[3] = "Instrument Sans, Latin text inside the thread, the product screens and the invoice, 400 to 700 (computed maximum 700, `.record-block .mark b` included), width 100; nothing on the sheet below 11 px at 390"
  derived from: Typography locked, role table, pick idx 8; conditions 1 and 4
- typography[4] = "Kanit 700 italic on an amount while it is in flight (`.catch.amt`, `.fly.amt`); every fragment in flight leans 12 degrees (`skewX(-12deg)`), the lean of that italic, and is cut upright where it lands; Kanit 700 upright on the `.cut-rail` readout, the one figure that travels with a knob; nowhere else, never copy"
  derived from: Typography locked, role table, pick idx 10 ("true italics that lean like speed"; "an accent for the few moments where something moves"); condition 5
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
- key_visual_elements[5] = "two rows of tap targets under the sheet: three clients, three rates; at 1120 and up they stand in one row under the stage with the transport" at `.picker-client`, `.picker-rate`, `.console`
  derived from: competitor Invoice-Generator.com rows "Interaction: try it without an account" (borrow) and "Interaction: input method" (diverge: two taps, not typing)
- key_visual_elements[6] = "a record stub across the head of the leaf, joined to it by a perforated dashed rule" at `#story .stub`, `.perforation`
  derived from: seed crossed cheque, element 4, "tear-off with a counterfoil"
- key_visual_elements[7] = "the leaf itself, at reading size, dropped into an outgoing document bubble: file bar, page count, ticks, word, time" at `#story .doc-bubble`, `#story .leaf`
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
- key_visual_elements[13] = "each product view arrives as an attachment in an outgoing message, with a forwarded header and a file bar; each episode opens with the asker's grey bubble and a chat header, and the first chat is the chat of whichever client he picked" at `.msg.in`, `.msg.out.attach`, `.at-head`, `.file-bar`, `.chat-head`, `.date-chip`
  derived from: framing "forwarded-message vernacular: grey bubbles, double ticks" (a thread has two voices, attachments and its own date chips)
- key_visual_elements[14] = "a slim top bar: wordmark, language (a switch that is a native checkbox, so it works with scripts off), sign in, trial" at `header.topbar`, `label.lang-toggle`, `#lang-en`
  derived from: competitor Bukku rows "Navigation", "Language switch" (borrow), "Navigation depth" (diverge); competitor Invoice-Generator.com row "Navigation" (borrow)
- key_visual_elements[15] = "at 900 and up, two columns all the way down: the thread is one 480 px lane that ends on the stage's right edge, so the sheet in the first screen and the leaf that lands in his reply share their left edge; on its left, at the height of the thing each is about, stand the sentences of that episode's note, and no heading; the footer keeps the same two columns" at `.hero-grid`, `.tc`, `.tc>.notice`, `.nt`, `.tail>.elapsed`, `footer .col`
  derived from: framing (a thread is one lane; what is said about a message stands beside it, not inside it; "a file landing in the thread": the thing that lands is the thing he watched) + seed crossed cheque, element 4 (the leaf that leaves is the same leaf, so it keeps its edge) + competitor Invoice-Generator.com row "Layout" (diverge: controls under the object, not in a side column) + competitor Bukku row "Layout" (diverge: not a grid of feature sections)

### imagery
Saw: framing + seeds (01, 02) + designer + constraint. Hidden: competitors, domain anchors, typography.

- imagery[0] = "first-screen treatment: two speeds in one frame. The sheet is still and sharp; behind it and round it the thread streaks upward in whole steps, 12 a second"
  derived from: designer signature work, the snack-bar shot ("one person stands still … sharp and slow, while the crowd passes … as streaked, step-printed blur") + seed *Night Mail* ("the pouch is the one sharp, legible object; the train and the landscape are smear")
- imagery[1] = "the smear is drawn, not filtered. While the band runs no bubble is drawn as a bubble and none of its text is drawn. In its place stand 5 to 12 separate tines in the bubble's own colour, uneven in width (2 to 22 px at 390), in where they start (on the bubble's leading edge, or 0.3 to 2.5em behind it) and in length, each cut off on a slant; at most four scraps of that edge, none deeper than 1.2em (0.5 to 1.1em as built), join neighbours; there is no slab. Over them, three to five thin bars along the travel (2.6 to 8.5 px wide, 76 to 185 px long at 390, cut to a point at the trailing end, inside the bubble's own width) in tick blue, thread green and pale grey at fixed 0.6 and 0.42, two or three of them starting 2 to 4em ahead of the edge. Alternate steps print the bars at a different length. All of it is cut on with the first step and cut off with the last; no blur filter"
  derived from: designer "step-printed so that movement drags and colour bleeds between frames" + constraint "A fixed, unchanging transparency value is allowed" + seed *Night Mail* limit "smear … is drawn (stretched shapes, repeated offset copies at fixed transparency)"
- imagery[2] = "screenshots of screenshots drawn in code: last month's Word invoice inside a phone frame inside a phone frame, each generation offset and 2 degrees off the last"
  derived from: framing "screenshots of screenshots" + designer condition 4 (his look translated into code-drawn UI, no photographs)
- imagery[3] = "a voice note drawn as 16 still bars, a duration and one line of text saying what is buried in it; no play control"
  derived from: framing condition "voice notes appear only as a visual; nothing depends on sound"
- imagery[4] = "no photographs, no film stills, no people, no generated images; every picture is product UI or inline SVG and CSS"
  derived from: designer condition 4 + seed *Night Mail* limit ("no photographs, film stills or images of people")
- imagery[5] = "the PDF in the thread is the real sheet at full size, moved there by two transforms (a tear sideways along the perforation, then a drop), so the thing that lands in the thread is visibly the thing he just watched being made"
  derived from: constraint (movement is a permitted change of state) + seed crossed cheque, element 4 (the leaf that leaves is the same leaf)
- imagery[6] = "the sheet's zones are fixed like a printed leaf: meta top right, client and lines across the middle, figures ranged right, a numeral line on the bottom edge"
  derived from: seed crossed cheque "Information sits in fixed zones"
- imagery[7] = "a message that hangs still in the band while the thread streaks behind it, and from which the fragment is taken; the first one hangs from the first step of the run, before the sheet is there, so that some one thing is sharp and still in every frame of the run"
  derived from: seed *Night Mail* ("a leather mail pouch, which a moment ago hung still from a trackside post, is caught") + designer (one still, sharp thing against a moving world)

### surface_treatment
Saw: framing + constraint + designer voice. Hidden: seeds, competitors, domain anchors, typography.

- surface_treatment[0] = "light is one flat shaft with hard edges across the thread, and the sheet throws one flat, hard shadow away from it; there is no soft fall-off anywhere"
  derived from: designer voice ("dark, saturated, neon at night"; the lit counter where the still subject stands) + constraint "Everything is either there or not there" (read here as: a light has an edge). The ban on fog, glow and glass that sits beside this entry comes from `claude_anti_defaults.md`, which this axis may not cite; it is recorded in section 8, rule 10, and not claimed here.
- surface_treatment[1] = "each episode has its own night (values bound in `color_palette[0]`, `[12]`, `[13]`). The whole ground and the top bar change on one frame as the episode's date chip passes mid-screen, and on that frame the chip itself is cut from grey to paper white"
  derived from: designer voice "hard cuts between short self-contained episodes" + constraint "every change of state happens as a cut"
- surface_treatment[2] = "thread wallpaper across the whole page: a small code-drawn doodle tile at fixed low contrast"
  derived from: framing "WhatsApp … vernacular" (the wallpaper behind a thread)
- surface_treatment[3] = "paper is opaque: 1 px ink rules, square corners; nothing on it is translucent"
  derived from: constraint "Everything is either there or not there" + designer condition 1 ("text and product UI at rest are sharp")
- surface_treatment[4] = "still grain on the hero thread only (one SVG turbulence tile at fixed transparency), never animated and never over the sheet"
  derived from: designer condition 1 (roughness lives in the "before" only)
- surface_treatment[5] = "every wipe has a hard travelling edge; no feathered masks"
  derived from: constraint "clipping or masking"
- surface_treatment[6] = "bubbles are flat fills with a 9 px radius and a tail; on a phone the page's own narration sits in centred notices on near-black; at 900 and up the same sentences stand on the ground itself in the left margin, each under a dashed rule"
  derived from: framing "grey bubbles" (and the thread's centred system notices)

### ornament
Saw: framing + designer + seeds (01, 02). Hidden: competitors, domain anchors, constraint, typography.

- ornament[0] = "double ticks as the chat's receipt glyph, on his own five outgoing messages and nowhere else: one grey, two grey, two blue, always beside a word, with a time once read. Each receipt is seen to change, once (S4, S13). They report nothing about SIS; SIS states are carried by tape labels"
  derived from: framing "double ticks"
- ornament[1] = "a forwarded label with its arrow, italic: once at the very top (`.fwd-label`), on two messages of the hero thread (`.bubble .fw`), and as the header of each product attachment (`.at-head`)"
  derived from: framing "forwarded-message"
- ornament[2] = "a perforated rule (4 px dash, 4 px gap): between stub and leaf, above the footer, and at 900 and up as the leader that runs from each margin note across to the thing it is about" (solid 1 px rules remain on the paper and under the top bar)
  derived from: seed crossed cheque "tearing the leaf out along the perforated edge"
- ornament[3] = "ballpoint strokes for the crossing and every strike-through: 2 px and 1.7 px, each bowed, the first with a hook where the pen lands and the second with a flick where it lifts"
  derived from: seed crossed cheque, elements 1 and 2 ("two parallel diagonal strokes"; "cancelled by a single horizontal stroke"; "the drawer's handwriting in pen")
- ornament[4] = "one number, INV-014, repeated in seven places: the sheet's meta line, between the crossing strokes, the record block, the machine line, the stub (both faces), the PDF file name, the tag on the month's bar"
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
- motion[1] = "arrival by cut: a message, a caption, a digit, a tick or a whole sheet of paper is not there and then is, on one frame. A receipt advances by cuts on a clock and never with the thumb: the PDF's from the frame the leaf lands (one grey tick; two grey 260 ms later; two blue at 520 ms), each of the other four from one grey to two blue 260 ms after the first frame on which its line is wholly on screen"
  derived from: framing ("a tick turning from one to two", one of the "small precise motions he can judge the way he judges an edit", recorded at Step 4: an edit is timed, so the tick is timed) + constraint "Everything is either there or not there"
- motion[2] = "forwarding is the basic move: a fragment leaves one place and lands in another by one linear translate (a catch 120 to 140 ms, a re-cut 160 ms, the leaf's drop 160 ms over 136 px), stops dead and settles in a single frame of 17 ms"
  derived from: framing "forwarded-message" (content moved from one place to another; "a file landing in the thread") + constraint "movement"
- motion[3] = "the band's travel in the opening is a row of cuts, not a glide: each position is held, then replaced on one frame, and no place between two positions is drawn". (Why this band is cut where a continuous translate would also be allowed, and its rate of 12 a second, are not this axis's to say: that is the step-print, which comes from an input this axis may not see and is bound in `imagery[0]` and R03.1.)
  derived from: constraint "every change of state happens as a cut or through movement" (a cut of position is the constraint's own first move)
- motion[4] = "scrolling is the thread's own scroll: never intercepted, pinned or snapped; a move tied to it is a function of scroll position and runs backwards (the tear follows the thumb; the drop is set off by a position and undone by going back above it, and the receipt in that message goes with it)"
  derived from: framing ("a thread is a vertical, thumb-native narrative", recorded at Step 4)
- motion[5] = "timing table, as measured from the page: linear travel and hard stops only, no ease-out tail, no spring. Cut 0 ms. Stroke 80 to 110 (crossing 110 in the opening, 80 when a draft is completed, 90 when it is taken back; every strike-through 90). Catch 120 to 140, flight of a re-cut 160, each plus one settle frame of 17. Drop 137 to 177 with its settle frame (the 014 tag 137, an old file 157, the leaf 177); the same things lifted back 140. Wipe 100 to 217 (a field 100; number and date and every re-stamp 120; the record block 170 in the opening; the green wrap off 160; the token 180; the green wrap on 217 with its settle). Flip 160 to 200 (an old file 160 after a wait of 150; the stub 200). Knob, bracket and language thumb 80; rows closing up 100. One step of the band 84. A receipt's clock 260 between cuts. Only the opening sequence (2,420) and the PDF's receipt (three cuts over 520) last longer than 440 ms". The full list by sequence is section 6
  derived from: constraint ("either there or not there": a tail that eases toward rest is the positional form of a fade and is left out by the same reasoning)
- motion[6] = "the stylesheet draws the finished frame; every animation plays from an earlier state into it; reduced motion is that frame, reached by a cut. When motion is allowed the earlier state is set before first paint and held for a fixed 200 ms from the first painted frame; nothing waits for the web fonts, and when they arrive mid-run the clock is not stopped for them"
  derived from: constraint, test 4 ("reached by a cut to the finished still, not by a slow fade")
- motion[7] = "hover, focus, pressed and disabled change by cut or by shape: a 1 px drop, a border weight, an outline, a dashed edge"
  derived from: constraint, test 3
- motion[8] = "whatever the system writes arrives by a left-to-right clip wipe with a hard edge; whatever a person chooses arrives by a translate"
  derived from: constraint "clipping or masking" and "movement"
- motion[9] = "hand transport: the thumb drags a knob along a rail, the knob's position sets where the opening sequence stands, and it runs backwards under the thumb"
  derived from: framing ("a vertical, thumb-native narrative", recorded at Step 4: in a thread the thumb is what moves time) + constraint "movement" (the only thing that changes is position). The rail's uneven marks are not claimed here: they come from seed *Night Mail*, which this axis may not see, and are bound in `key_visual_elements[8]` and R02.3.
- motion[10] = "the language cut keeps the reader's place: the block on the reading line (40% down the screen), or the one sentence of a note, stays on the reading line, whatever the scroll position"
  derived from: framing ("a thread is a vertical, thumb-native narrative", recorded at Step 4: only the thumb moves the thread) + constraint (the switch is a cut of the strings; a cut that also moved the page would be a second, unauthored move)

### inspirations
Saw: all 7 bank anchors. Ran last. This is the cross-anchor summary; it is also where elements from the two domain anchors are bound, since no other axis may see them.

- inspirations[0] = "Malaysian crossed cheque leaf: the crossing, the strike, words and figures, the stub that stays while the leaf tears off along the perforation, the machine line"
  derived from: anchor 01, `references/seed_crossed_cheque_ac_payee.md`, elements 1 to 5
- inspirations[1] = "*Night Mail* (1936): the catch, the pouch that hangs still (from the first step of the run), the pigeon-holes, cut length as tempo (in S1, S6 and S8), the drop (a hard-stopped fall of 136 px into the thread)"
  derived from: anchor 02, `references/seed_night_mail_1936.md`, elements 1 to 4 and the description of the pick-up shot
- inspirations[2] = "*Chungking Express* (1994): one sharp subject against a step-printed world whose passing figures are streaks without faces or outlines; exact times; one object repeated; hard cuts between episodes; a lit counter at night"
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

## 5. Assembly: where things sit

Chinese is the default. The y values are measured from the built page at 390 x 844 (`tools/rb3_audit.js`, in `tools/rb3_capture_log.txt`; identical in English down to the picker rows, and unchanged from v3). The fold-safe line is **y = 640**. Total height at 390: 5,079 px in Chinese, 5,217 px in English.

| Region (hook) | y at 390 | What is there | Cites |
|---|---|---|---|
| `header.topbar` (sticky, takes the episode's ground) | 0 to 52 | wordmark; `label.lang-toggle` with the native checkbox `#lang-en`, 72 x 44; `.signin`; compact `.cta-trial`, 84 x 44 | 04 "Navigation", "Language switch" |
| `.fwd-label` | 59 to 75 | "↪ 已转发 / Forwarded" | framing; `ornament[1]` |
| `#hero .hero-claim` | 77 to 167 | h1 in two lines; one line naming Malaysian videographers, photographers and small studios | 04 "Local grounding"; 05 "Claim in the first screen" |
| `#hero .hero-stage` (full bleed, 390 x 394) | 173 to 567 | `.thread-band`: wallpaper, grain, `.mover`, `.beam`, `.hang-layer`. `#sheet` x 94 to 374, y 181 to 473. Left of the sheet 87 px of thread, its bubbles 16 px from the stage edge on both sides; under it two whole messages with times 20 and 19 minutes before his clock. `.stage-caption` 543 to 567 | 03, 02, 05, 01, 07, 06 |
| `#hero .cta-trial` with `.trial-terms` | 575 to 631 | "免费试用 7 天" (17 px) over "Basic RM 199/年 · Pro RM 399/年" (12.5 px, y 608 to 620) | 04 "Trial offer", "Trial terms line" |
| `.console`: `.cut-rail` | 645 to 689 | replay, rail with ten marks, knob, readout | 02 element 3 |
| `.picker-client` | 703 to 854 | three tiles | 05; 06 |
| `.picker-rate` | 868 to 932 | three tape strips | 05; 06 |
| `.sample-note` | 942 to 978 | what is made up | 05 "Sample data" |
| `.date-chip` 今天, `#story` | 1,000 to 1,940 | `.chat-head` (the picked client's contact, "示例聊天"); `.msg.in` "发票呢？" 20 minutes before his clock; `#story-stage` 358 x 664: `.sis-card` (SIS chip, 客户页, client line, `.stub` 358 x 50, `.perforation`, three `.past-row` 358 x 36), `.leaf` 280 x 362 hanging from the stub, `.doc-bubble` 292 x 418 below; `.notice` (three sentences, in the order of the stage: stub, leaf, sending) | 01 element 4; 02 element 4; 05 "The payoff: PDF"; 06 |
| `.date-chip` 月底, `#reports` | 1,940 to 2,599 | `.chat-head`; `.msg.in`; `#report-msg` (header, `#report`, `.file-bar` with CSV chip and receipt); `.notice` | 04 "Data display", "Data density" |
| `.date-chip` 第一天, `#import` | 2,599 to 3,365 | `.chat-head`; `.msg.in`; `#import-msg` (`.slot-row` with five `.old-file`, `.review-card`, `.review-state`, `.approve`, receipt); `.notice` | 06; 02 element 6; 04 "Empty and error states" |
| `#pro` | 3,365 to 3,953 | `.msg.in`; `#pro-msg` (`.sis-plate`, `.token-strip`, `.ai-list`, `.token-state`, button, receipt); `.notice` | 06; 01 element 2 |
| `#pricing` | 3,953 to 4,693 | `.msg.in` "多少钱？"; one outgoing message with two `.plan`; `.notice`; `.elapsed`; `.composer` | 04 "Pricing display"; framing |
| `footer` | 4,693 to 5,079 | `.trust-line`, `.support-whatsapp`, `.legal` | 04 "Local grounding", "Support channel" |

First-screen check at y under 640, identical in both languages, at rest, under reduced motion and without script: claim 77 to 167; a complete invoice 181 to 473; trial button 575 to 631 carrying the 7-day trial and both prices; language toggle 4 to 48; a second trial button in the top bar. During the opening the invoice is absent for the 200 ms hold and the first 300 ms of the run (measured 521 to 552 ms after the first painted frame); the claim, the button and both prices are there from the first frame.

At 900 and up (measured at 1280 x 800; `rebuild3_rest_1280_zh.png`, `rebuild3_d1280zh_a.png` to `_d.png`, `rebuild3_d1280en_a.png` to `_d.png`; also photographed at 900, 1024 and 1440): `.col` is 1,120 px and holds two columns all the way down. On the left the page's own voice, on the right the thread.

- **First screen.** `.hero-grid`: the forwarded label, the claim (x 80 to 494) and the trial button (x 80 to 470, y 421 to 481) centred on the stage's height; the stage x 538 to 1,200, y 77 to 589 (662 x 512, type at 13 px) with the sheet at x 816.5 to 1,180.5 and 278 px of thread to its left; under both, `.console` in one row (transport, clients, rates; two rows from 900 to 1,119) and the sample note; the first screen ends at 800.
- **Below it.** `.tc` is a grid of a margin column (x 80 to 648) and a 480 px lane (x 720 to 1,200), whose right edge is the stage's right edge. The leaf hangs from its stub at x 720 and lands in his reply at x 816.5: the left edge of the sheet he watched being made. Date chips are centred on the lane (x 960).
- **The margin.** No heading. `.tc>.notice` is a grid in the row of the attachment; its first track is the distance down to the first thing a note is about and each later track is at least the distance to the next. In `#story`: the stub (84 px below the top of the stage), the reply the leaf lands in (326), its file bar (840). In `#reports`: the bars (82), the ranking (388), the CSV line (506). In `#import`: the row of files (33), the review card (175), the saved state (481). In `#pro`: the plate and the list (30), the scope line (281), the token button (392). In `#pricing`: the prices (30). Each `.nt` is set at 18 px (16 px from 900 to 1,119), no wider than 28rem, under a perforated leader that starts at x 80 and runs to the lane's edge at the height of that thing. Measured (`tools/rb3_measure.js`): every note within 1 px of its target at 900, 1,024, 1,280 and 1,440, in both languages. The page's last line (`.tail>.elapsed`) stands the same way beside the composer.
- **Footer.** The same two columns: contact and legal links under the margin, the trust paragraph under the lane.

Document height 5,141 px (Chinese), 5,161 px (English). No sequence changes its timing.

Sample data (fictional, labelled): studio Kite & Reel Studio; clients Lumen Events Sdn Bhd (company; contact Farah), Tanjung Bakery (company; contact Mei Ling), Aria Lim (individual); rates RM 1,800, RM 1,200, RM 900; default total RM 2,700.00; number INV-{year}-014; dates and times from the visitor's clock; chat contacts Ms Chan and Jay.

---

## 6. Sequence sheet

**Cut** = one frame, by a stepped `visibility`, class or attribute change, never opacity. **Hard stop** = linear travel that ends on a frame. **Settle** = on the landing frame the object sits 2 px past its place, on the next it is in place. **Step** = one 64 px jump of the band, every 84 ms.

### S1. The Catch (opening sequence)

- **Trigger:** page load, once. A script in `<head>` adds `s1-pre` before first paint and stamps the time of the first painted frame. The main script builds the timeline, seeks it to 0 (the same frame), removes the class, and starts the clock a fixed 200 ms after that stamp. Fonts are not waited for; if they arrive during the run, the catches are re-measured and the new timeline is started where the wall clock stands, so the run does not lose the time the re-measuring took (v3 lost 30 to 75 ms there). Measured in 8 cold runs against the browser's first contentful paint: thread starts 176 to 281 ms after it, sheet cut in 481 to 522 ms after it (522 to 552 after the page's own stamp). If the main script never runs, the head script removes the class after 1.5 s. Replayed by the button on `.cut-rail`.
- **Length:** 2,420 ms. **Start frame (held 200 ms):** the thread alone, no sheet. Subtitle: "聊天记录里，资料到处都是。"

| # | t (ms) | Interval | What happens | Duration | Tags |
|---|---|---|---|---|---|
| 0 | 0 | | The thread runs: 22 steps of 64 px. No bubble or text is drawn; each is its smear. On the first step one message is cut in and hangs still in the band: "抬头写 Lumen Events Sdn Bhd" | 1,840 | `imagery[0]`, `imagery[1]`, `imagery[7]`, `motion[3]`, R03.1, R03.2, R03.8, R02.2 |
| 1 | 300 | 300 | **Cut:** the sheet is there, with six labelled empty slots, over the hanging message | 1 frame | `motion[1]`, R03.7, R02.3 |
| 2 | 760 | 460 | Catch: "抬头写 Lumen Events Sdn Bhd" has hung in the band since the first step; the name leaves it and lands in `.bill-to`, leaning 12 degrees in flight, three bars behind it | 140, hard stop, settle | `motion[2]`, `typography[4]`, R02.1, R02.2, `imagery[7]` |
| 3 | 1,100 | 340 | Catch: his own old message has hung since 880; service and amount leave it for row 1, the amount in Kanit italic until it lands | 140 | same |
| 4 | 1,360 | 260 | Catch: the second rate, for row 2 | 120 | same |
| 5 | 1,560 | 200 | Number and date are wiped in from the left | 120 | `motion[8]`, R07.3 |
| 6 | 1,720 | 160 | Total: RM 0.00, then 1,800.00 at 1,770, then 2,700.00 with the words at 1,820 | 3 cuts | `motion[1]`, R01.3 |
| 7 | 1,840 | 120 | The smear is cut off; the still, readable thread lies round the sheet | 1 frame | `motion[3]`, R03.2 |
| 8 | 1,900 | 60 | The crossing: first stroke, the second at 2,030; the phrase cut in at 2,150 | 110 + 110 | `ornament[3]`, R01.1 |
| 9 | 2,230 | 330 | The return stamp: `.record-block` and `.machine-line` wiped in, with the time to the second | 170 | `motion[8]`, `ornament[5]`, R07.1 |
| 10 | 2,420 | 190 | Hold | | R02.4 |

- **Subtitle, by cut:** "聊天记录里，资料到处都是。", "一张空单。", "客户，抓到。", "价目，抓到。", "单号和日期，系统填。", "合计 RM 2,700.00。", "划线。", "单开好了。" (English: "Invoice ready."), each with the clock time.
- **Interruptions:** a tap on a picker jumps S1 to its end by a cut and runs S3. **Reduced motion and no script:** the end frame from first paint; the rail steps between stills.
- **Flash:** the critic's own count (`tools/c3_flash.py`: 146 lossless frames 1/60 s apart; a flash is a pair of opposing luminance moves of 0.10 or more), run on the v3 build and on this one on the same machine. Pixels with more than three flashes in any one second (7 or more opposing transitions), as a share of the worst 341 x 256 box: 0.3% at 390 in Chinese, 0.1% at 390 in English and 0.7% at 1280 (the v3 build by the same count on the same machine, which are also the critic's figures for it: 0.3%, 0.7%, 0.4%). The largest of the three is 0.7% before and after; one condition fell and one rose. The limit is 25%. Pixels with two flashes a second (4 or more transitions): 26.0%, 30.8% and 30.7% (v3: 26.2%, 30.7%, 30.7%). The step rate is unchanged at 22 steps in 1,839 ms and no second colour inversion was added.

### S2. Shuttle (hand transport on `.cut-rail`)

Unchanged: a native range control; dragging sets the time of every animation in S1, both ways; arrow keys step 42 ms; `touch-action: pan-y`. Marks at 12.4, 31.4, 45.5, 56.2, 64.5, 71.1, 76, 78.5, 92.1 and 100%. Tags: `motion[9]`, `key_visual_elements[8]`, `typography[4]`, R02.4.

### S3. Re-cut (the pickers)

Timing unchanged (client 420 ms, rate added 400 or 440, rate removed 330). New: when it ends, everything further down is rewritten for the picked client and the present rates (`renderAll()` calls `syncLater()` and the scroll frame). With no rate the sheet shows the red 草稿 / DRAFT tape, one dashed slot, RM 0.00, no crossing, no block, no machine line. Frames: `rebuild3_client_tanjung_390zh_a.png`, `rebuild3_draft_390zh.png`. Tags: `motion[2]`, `motion[1]`, `motion[8]`, `ornament[3]`, R01.2, R06.5, R06.6.

### S4. Tear-off, drop and receipt (`#story-stage`)

- **Trigger:** where the stage stands on the screen (S = its top edge, in px). At 390 x 844: tear from S 339 to 249; drop at S 225 (the reply slot's file bar is then 8 px inside the screen). Tear and drop are functions of position, so they run backwards.
- **Start:** the client page. The stub (paper face) with the leaf hanging from it at the perforation, over the earlier filed rows. Below, a dashed outline labelled "PDF".
- **Tear:** over 90 px of scroll the leaf slides 72 px sideways along the perforation, under the thumb.
- **Drop:** at S 225, one linear translate of 136 px down into the outline: 160 ms, hard stop, 2 px past and back on the next frame (177 ms in all; logged 167 to 168 ms from the first moved frame to the landing frame, 10 frames). Scrolling back above S 225 lifts it back in 140 ms.
- **Receipt, on a clock:** the clock starts on the frame the leaf comes to rest. On that frame the outline is cut to his outgoing message with a tail and a file bar ("INV-{year}-014.pdf", "1 页 · PDF") and the receipt reads one grey tick, "已发出 / Sent". 260 ms later: two grey ticks, "已送达 / Delivered". At 520 ms: two blue ticks, "已读 / Read" and the minute. Each is a cut. Nothing about it depends on how he scrolls after the drop. Logged on every frame while wheeling at 300, 600 and 1,500 px a second at 390 and 800 at 1,280: sent at 0, delivered at 266, read at 534 ms, the file bar wholly on screen at each cut in every run (at 1,500 px a second it is 87 px from the top of the screen when read is cut in). As a sequence of cuts this lasts 520 ms, 100 ms over the 420 ms the fourth design principle allows a clocked move; the figures are the critic's (verdict 3, item 1) and no single move in it is longer than the 177 ms drop.
- **Back:** scrolling back above S 225 takes the leaf out of the message: the outline is empty again and the receipt is gone with it, whatever it had reached. Coming down again plays the drop and the clock again.
- **Where the drop is not played** (reduced motion, no script, a page opened below it): the leaf is in the message and the receipt stands at read.
- **At 1,280 x 800:** tear 96 px, drop 182 px; the same clock.
- **Draft:** none of it happens; see section 7.
- **Frames:** `rebuild3_story390zh_a.png`, `_b.png`; `rebuild3_ticks_390zh_a.png` (in flight; sent; delivered; read, each with the measured time since landing printed on it), `rebuild3_ticks_390zh_b.png` (back above the drop); `rebuild3_ticks_1280en_a.png` to `_c.png`; `rebuild3_story1280zh_a.png` to `_c.png`. **Tags:** `motion[1]`, `motion[2]`, `motion[4]`, `imagery[5]`, `key_visual_elements[6]`, `[7]`, `ornament[0]`, `ornament[2]`, R01.4, R02.5.

### S5. Filed (`#story .stub`)

At S 195 (30 px of scroll after the drop is set off) the stub turns over on its long axis (200 ms, linear) from its paper face to "INV-014 · RM 2,700.00 · date · 已归档", the same dark row as the earlier invoices beneath it. Above S 195 it turns back. Tags: `motion[4]`, R06.1, `ornament[4]`.

### S6. Month (`#reports .month-bars`)

Scroll position; each month's two bars grow from the baseline at p = 0, .20, .37, .51, .62, .70, then a hold. At .92 the "014" tag drops onto the current month's bar (137 ms, hard stop, settle) and its figures step in two cuts, but only if the sheet is not a draft. The message's receipt is not touched by any of it (S13). A tap on a month is a cut of the three figures and an 80 ms move of the bracket. Tags: `motion[4]`, `motion[1]`, `key_visual_elements[9]`, R02.4, R04.6.

### S7. Episode cut (`body[data-ep]`)

When an episode's first line passes the middle of the screen, the ground of the whole page and the top bar change on one frame (`#0B1216`, `#0B2346`, `#2A1606`), and the date chip of the episode he is now in is cut from bubble grey to paper white. Scrolling back cuts back. Without script each section carries its own ground. Frames: `rebuild3_cut_390.png`, `rebuild3_cut_1280_dayone.png`. Tags: `surface_treatment[1]`, `color_palette[8]`, `[12]`, `[13]`, R03.5.

### S8. Sort (`#import`)

Unchanged in timing: five files leave the heap at p = .06, .25, .40, .51, .59, each 157 ms with a settle and a 160 ms flip to its read face ("读完"); a hold; three fields wiped in at .72, .80, .86. End: "未保存 · 等你核对" under a red tape label. The message's receipt is not touched by any of it (S13). Tags: `motion[4]`, `motion[2]`, `motion[8]`, R06.1, R06.3, R02.4, R02.6.

### S9. Green wrap (`#import .approve`)

A tap wipes the green band across the card (217 ms, settle). On its last frame the tape label under the card is cut from red 未保存 to green 已保存 and the button to 撤销. A second tap wipes it off (160 ms). The ticks are not touched. Frame: `rebuild3_taps_390zh.png`. Tags: `motion[8]`, `motion[7]`, R06.4, R06.7, `ornament[5]`.

### S10. Token (`#pro`)

Revoke (300 ms): one pen stroke through the strip, then the strip is wiped back; the tape label is cut from blue 已连接 to red 已撤销. Create (180 ms): the strip is wiped out again. The ticks are not touched. Tags: `motion[8]`, `motion[1]`, R01.2, R06.2, R06.7.

### S11. Language cut (`label.lang-toggle`, `#lang-en`)

The control is a native checkbox with `role="switch"`, 72 x 44, laid invisibly over the drawn track. With script: the click's own change is cancelled, the thumb travels 36 px in 80 ms, and on the frame it stops every string is replaced, the checkbox is set, and `lang`, the title and the description are updated. Before the cut the block nearest the reading line (40% down the screen) is found among whole blocks (`ANCH`: a message, a stage, a note or one sentence of it, the plans, a footer paragraph; at 900 and up the lane, not the margin); after it, the page is scrolled so that the same point of that block is on the reading line again. Measured every 100 px down the page (`tools/rb3_audit.js`): the point moves at most 0.5 px at 390 and 1.0 px at 1,280; scroll position is restored exactly after two switches at every position; the block's top edge moves by up to 74 px where the block itself grows in English (the plans at scroll 4,100). The critic's own tool (`c3_lang.js`, run again as `rb3_lang.js`) gives the same figures as in cycle 3: 12 and 76 px at the plans at 390, 9 px at most at 1,280.

With scripts off the checkbox is simply checked, and the stylesheet does the cut: every rule that hides one language reads `html:has(#lang-en:checked)` beside `data-lang`. Checked in a context with JavaScript disabled at 390 and 1,280: a click on the switch and the Space key both change every string, the thumb stands on EN, and the state survives the wordmark's `#top` link (`rebuild3_nojs_lang_390_a.png`, `_b.png`, `rebuild3_nojs_lang_1280_a.png`, `_b.png`, `_c.png`). What does not change without script: the `lang` attribute, the title and the description stay Chinese, there is no thumb travel, and the place on the page is not held (the page keeps its scroll offset). A browser without `:has()` and without script stays in Chinese.

Frames with script: `rebuild3_lang_390_a.png`, `_b.png`. Tags: `motion[10]`, `motion[7]`, `motion[1]`.

### S12. Clock stamps and the last line

At load, each `[data-ago]` time is written as his clock minus its minutes (41, 24, 20, 19 in the hero thread; 20 on the asker's "发票呢？"), never earlier than midnight. The first time a note comes on screen its time is cut in to the second (at 900 and up it stands over the first sentence of the episode's note); an asker's bubble gets the minute; a receipt gets the minute it is read. When the page's last line comes on screen (above the composer on a phone, beside it at 900 and up) it is cut once to how long he has been on the page. On a phone everything under that line is still below the edge of the screen on that frame, and at 900 and up the line's place is reserved, so nothing in view moves (`tools/rb3_shift.js`, `rb3_shift2.js`). Tags: `motion[1]`, `ornament[5]`, R03.3.

### S13. The four other receipts (`#report-msg`, `#import-msg`, `#pro-msg`, the plans message)

Each of his other four messages carries one receipt on the last line of its attachment. With script and motion it stands at one grey tick and "已发出 / Sent". On the first frame that line is wholly on screen (below the top bar, above the bottom edge) a 260 ms clock starts; when it ends the receipt is cut to two blue ticks, "已读 / Read" and the minute, and it stays read whatever he does next. Each of the four attachments fits on the screen at 390 x 844 and at 1,280 x 800, so that frame is the first on which the whole attachment has been on screen. A receipt that is already on or above the screen when the page opens, or that has gone past the top without ever standing wholly on screen, is cut to read at once, unseen. Logged on every frame while wheeling at 600 and 1,500 px a second (390) and 800 (1,280): 266 to 271 ms from that first frame to the cut, the receipt on screen at the cut in every case. No tap changes it. Reduced motion and no script: read from the first frame. Frames: `rebuild3_sec390zh_02.png` to `_04.png` (read, at rest). Tags: `motion[1]`, `ornament[0]`.

---

## 7. States

| Element | States, each with a shape or a word, never colour alone |
|---|---|
| `.cta-trial`, `.composer` | rest; pressed (1 px drop); focus (outline) |
| `#lang-en` in `label.lang-toggle` | 中文 picked; EN picked (thumb position, label lit; the checkbox's own checked state for assistive technology); focus (outline round the whole control) |
| `.picker-client .tile` | available (knob up); picked (knob down beside the padlock, "已选", 2 px inset edge); pressed; focus |
| `.picker-rate .rstrip` | available (solid tape); added (dashed outline, "已加"); pressed; focus |
| `#sheet`, `#story .leaf` | made (crossing, record block, machine line); draft (red 草稿 / DRAFT tape, one dashed slot "选一个价目", RM 0.00, none of the three marks) |
| `#story .chat-head`, `.sc-client`, `.stub`, `.past-row` | one set per client: Lumen (F, Farah), Tanjung (M, Mei Ling), Aria (A); company or individual |
| `.stub` | stub face (paper, client code, 存根); filed face (dark, 已归档); in a draft, absent, its place a dashed slot "存根 · 选了价目才有 / STUB · NEEDS A RATE" |
| `.doc-bubble` | empty outline "PDF"; in a draft "PDF · 选了价目才有 / PDF · NEEDS A RATE"; sent (one grey tick, word); delivered (two grey, word); read (two blue, word, time) |
| `#report-msg`, `#import-msg`, `#pro-msg`, the plans message | sent (one grey tick, "已发出 / Sent"); read (two blue ticks, "已读 / Read", the minute it was read) |
| `.review-state`, `.review-card` | not saved (red tape label, dashed place for the wrap); saved (green band across the card, green tape label) |
| `.token-state`, `.token-strip` | connected (blue strip in place, blue tape label); revoked (no strip, red tape label) |
| `.old-file` | in the heap (picture face); in its slot (read face, "读完") |
| `.month-bars` | one month picked (bracket, its figures in `.detail`); with or without the 014 tag on the current month |
| `body`, `.date-chip` | `data-ep` today, month, dayone; the current episode's chip lit |
| `[data-stamp]`, `[data-clock]`, `[data-ago]`, `.elapsed` | sample text without script; his clock with it |

---

## 8. Global motion rules, stills and the constraint

1. **Finished frame first.** Markup and stylesheet alone draw every end state (the leaf in his message, read; the stub filed; 014 on the month). The one guarded exception is S1's start frame, asked for before first paint and dropped by the head script if the main script does not take over.
2. **Only five moves** (`motion[0]`). Animated properties: `transform`, `clip-path`, `stroke-dashoffset`, `visibility`. `opacity`, colour alpha, `filter` and `backdrop-filter` are never animated or transitioned. No `@keyframes`, no `transition: all`, no view transition, no canvas. Three CSS transitions exist, all on `transform` (the stub's flip, the tiles' flip, the old files' flip).
3. **Fixed transparency in use:** `.smear .tr` 0.6 and 0.42; `.catch-tr` 0.6 and 0.42; the wallpaper stroke 0.045; the hero grain 0.07. None changes. The bars are cut on and off by `visibility` or by being created and removed; their change of length on alternate steps is a `transform` set by an attribute, with no transition.
4. **Fixed blend in use:** `.beam` (`screen`) and the toggle labels (`difference`).
5. **Scroll.** No listener cancels wheel or touch events; no snapping; nothing is pinned except the top bar (the margin notes are no longer sticky). Two `preventDefault` calls exist: the rail's arrow keys and the language checkbox's own click.
6. **Nothing loops.** S1 is 2,420 ms. Every other timed move is 217 ms or less and every re-cut 440 ms or less. A receipt is cuts on a clock: 260 ms to its one cut for the four attachment messages, 260 and 520 ms for the PDF's two, once, and then it stops.
7. **One entrance is never applied to every block.** Messages, notes, headings, prices and lists do not animate.
8. **Reduced motion:** no autoplay; every sequence at its end state from first paint; taps are cuts; the ground still cuts.
9. **No flashing above three a second** over more than a quarter of a 341 x 256 box: by the critic's count, 0.3% at 390 in Chinese, 0.1% at 390 in English and 0.7% at 1280 (the v3 build by the same count on the same machine, which are also the critic's figures for it: 0.3%, 0.7%, 0.4%). The largest of the three is 0.7% before and after; one condition fell and one rose (S1).
10. **Rules taken from `claude_anti_defaults.md` and not claimed as derivations in section 4:** no gradient fog, glow, blur or translucent panels (8, 9); no equal feature cards (10); no fade-up or its slide equivalent on every block (1); no even stagger (2); nothing readable waits more than 200 ms for an entrance except the sheet in S1 (3).
11. **Where the constraint forces a change of habit:** a passing message → not drawn, its drag drawn in its place by a cut; the sheet arriving → a cut; the leaf leaving → a slide and a fall; a receipt changing → a cut on a clock; an episode changing → a cut of ground and chip; the language → a cut with the reader's place held; reduced motion → the finished frame.

---

## 9. Hard limits carried into the build

1. No matrix code or anything like one, and none of the words the return-block entry forbids, or their Chinese equivalents, anywhere in the file. The record block's square holds a page count.
2. No cheque, no bank name, no account number or unlabelled digit string shaped like one, no mark or word about payment on the sheet. The phrase between the strokes is "开好了" or "READY". The machine line's groups are labelled.
3. No claim that SIS sends anything or reports delivery or reading. Ticks appear only on his own chat messages, as that chat's receipt; no tick changes with any SIS state; the note under the PDF says whose ticks they are.
4. No photographs, no generated images, no raster data URIs. Inline SVG and CSS only.
5. Nothing depends on sound.
6. No claim beyond `context/facts.md`; exact prices only. **Every place sample figures appear carries a visible sample label in both languages:** yellow tape on `#sheet`, `.leaf`, `#report-msg`, `#import-msg`, `#pro-msg`; a plain label on `.sis-card` and on the three `.chat-head` rows; `.sample-note`.
7. No long dash characters in copy.
8. Simplified Chinese by default with an English toggle; every string in both, avatar initials and the meta description included. The toggle is a native control and changes every visible string with scripts off as well (not `lang`, the title or the description).
9. Trial button, both prices and a complete invoice inside the first 640 px at 390, at rest and under reduced motion, in both languages.
10. One self-contained file; one external request (the recorded Google Fonts stylesheet); no sideways scroll from 320 to 1,440.
11. WCAG AA contrast on all three grounds, state never by colour alone, touch targets at least 44 px (the top-bar button included), visible focus.

---

## 10. Open items

1. **Palette gate is still provisional** (estimated tape values).
2. **Thread colours, the light, the streak colours and the two later grounds are starting values.**
3. **Three anchors have no file of their own** (03, 04, 05).
4. **The streak has been judged from frames** (page-clock stills, video at 25 a second, lossless stills, a 60 a second flash count), not by a person on a phone. Frozen, a smear is now a loose row of tapering strokes; whether twelve of them a second read as speed is a judgment about motion that frames only approximate.
5. **The opening has no invoice for about half a second** after first paint (measured in section 6, S1). From the first step there is one still message; the sheet is not there until 300 ms into the run.
6. **Heights differ between the two languages**; the reader's place is held by the anchor of S11.
7. **The receipt's clock is 520 ms long**, over the 420 ms of the fourth design principle (S4).
8. **Four receipts make the same cut.** Each does it once, on its own clock, while he is looking at it; it is still one small move seen four times down the page.
9. **Without script the language switch changes the strings and nothing else**: `lang`, the title and the description stay Chinese, and it needs `:has()` (S11).
10. **Margin notes are placed by measured distances** written into the stylesheet (five `--rows` values in px). They were checked at 900, 1,024, 1,280 and 1,440 in both languages with the web fonts loaded. If a note wraps to more lines than its track allows (a fallback face, a much larger text size), the track grows and the notes below it stand lower than the things they are about; nothing overlaps.
11. **Chromium only.** `:has()`, `display: contents` on `.tail`, `clip-path` polygons with `calc()` and a visible child inside a hidden parent were not tried in Safari or Firefox.

