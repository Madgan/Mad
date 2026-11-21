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

{{PAL_KEEP}}
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

{{BUKKU}}
{{IG}}
{{TWO}}
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

{{COUNT}}

{{MANIFEST}}
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

