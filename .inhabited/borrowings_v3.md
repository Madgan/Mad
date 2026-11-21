# Borrowings: v3 (rebuild after critic cycle 2), SIS home page version 2

Written 2026-11-20 after the rebuild of `designer/index.html` in answer to `v1_critic/critic_verdict_2.md` (8, 8, 8, 6). It replaces `borrowings_v2.md` as the attribute-binding manifest and borrowing summary for the page as it now stands. `borrowings_v1.md` and `borrowings_v2.md` are unchanged.

Every evidence cell names a place in the build (a selector) and, where a picture helps, a saved frame. Frames are in `v1_critic/screens/`, prefix `rebuild2_`; sheets paste frames side by side (phone) or stack two (1280 x 800) with no scaling. Which of them were opened, and in which state, is stated exactly in `designer/build_notes_v3.md`, section 4; a frame cited here and not opened there is marked unverified there. Bank entries are written stand-ins for images that could not be downloaded (accepted deviation), so "reference evidence" cites the written entry.

In order: 0 what the rebuild changed; 1 palette; 2 per-reference log (7 anchors); 3 competitor tables and hooks; 4 attribute-binding manifest (10 axes); 5 assembly; 6 sequence sheet; 7 states; 8 motion rules and the constraint; 9 hard limits; 10 open items.

---

## 0. What the rebuild changed

| Verdict item | What was re-decided | Where |
|---|---|---|
| 1. The streak reads as translucent rounded cards; passing text stays sharp | The copies of the bubble are gone. While the band runs, a bubble is not drawn at all and neither is its text: `.thread-band.running .strip .bubble{visibility:hidden}`. What is drawn in its place is its drag (`.smear`): a square-cornered slab in the bubble's own colour with its trailing edge torn into tines, and three to five thin tapered bars along the travel at fixed 0.6 and 0.42, inside the bubble's width, changing length on alternate steps by a cut. The catch trails are three thin tapered bars along the travel (`.catch-tr`). Readable during the run: the sheet and the hanging message, nothing else | `.smear`, `.smear .hd`, `.smear .tr`, `.catch-tr`; R03.1, R03.2; S1 |
| 2. State downstream: client and draft | `syncLater()` carries the picked client into the chat header (avatar letter and name), the leaf, the client page, the stub and the ranking. With no rate picked: the leaf is a draft (red tape, no crossing, no record block), it stays on its stub place, the stub and the PDF message are labelled empty slots, there are no ticks, number 014 does not reach the month, the draft is left out of the ranking | `#story .chat-head`, `.story-stage.is-draft`, `month()`; section 7 |
| 3. Ticks: room, and chat receipts only | Sent, delivered and read are 76 px of scroll apart at 390 x 844 (72 at 1280 x 800; v2: 30), each cut in while the file bar is on screen. The messages that carry the report, the import, the token and the plans have one fixed receipt ("已读 / Read" and the minute they came on screen) that never changes with an SIS state; saved, not saved, connected and revoked are carried by the tape labels. Single check glyphs on tiles are gone (words only) | `storyBeat()`, `.doc-bubble .st`, `.review-state`, `.token-state`; `ornament[0]` |
| 4. Opening hold | The head script stamps the first painted frame; the clock starts a fixed 200 ms after it and never waits for fonts. Measured in the page on every frame: thread starts 201 to 275 ms after the first painted frame, sheet cut in at 521 to 552 ms (fonts normal, delayed 1.2 s and refused; 390 and 1280; both languages) | `window.SIS_T0`, `CUTIN=300`; S1 |
| 5. Tear-off and drop | The stub is a strip across the head of the leaf on the client page. The leaf tears sideways along the perforation, 72 px under the thumb, then drops 136 px into the reply slot in one linear translate of 160 ms with a hard stop and a one-frame settle (96 and 182 px at 1280). The stub turns over to its filed face where it is | `#story-stage`, `story()`; R01.4, R02.5; S4, S5 |
| 6. Sample times | Hero thread and the asker's bubble are his clock minus 41, 24, 20 and 19 minutes (never before midnight); every other time is the minute or second the thing came on screen | `[data-ago]`, `ago()`; S12 |
| 7. Language switch | The block on the reading line (40% down the screen) is held where it is, by proportion if it reflows; a block is a whole message, stage or note, never a language span. Measured every 100 px down the page: the point under the reading line moves 0.5 px at most at 390 and 1.0 px at 1280; scroll position after Chinese, English, Chinese is restored exactly at every position. At scroll 700 (v2: 193 px): 0 | `setLang()`, `ANCH`; S11 |
| 8. Desktop | First screen: claim and trial button left, stage right with 265 px of thread beside the sheet, and one console row under the stage (transport, clients, rates). Below it: a 480 px thread lane left of centre; each episode's heading and note in the right margin; date chips on the lane's centre; footer on the same two columns | `.hero-grid`, `.console`, `.tc`, `footer .col`; section 5 |
| 9. Grounds | `#0B1216`, `#0B2346`, `#2A1606`: three hues (teal-black, pen-blue, lamp-brown), luminance 1.21 to 1 across the first cut (v2: 1.03). The chip of the episode he is in is cut to paper white on the same frame. AA holds on each | `body[data-ep]`, `.date-chip`; `color_palette[12]`, `[13]`; S7 |
| 10. Manifest and CSS | Control labels at the locked weights (600 Latin, 500 Chinese); Chinese 700 on headlines only, 500 in thread and product, 400 in copy; `b{font-weight:700}` so nothing computes above 700; palette entries for the three grounds, the notice black and every working neutral; the beam's hue traced to the tick blue; the lean moved from `motion[2]` to `typography[4]` (the Kanit italic); "only" dropped from `ornament[0]` and `[2]` | section 4; `rb2_audit.js` |
| 11. Small | English crossing "INV-014 · READY" and the last subtitle "Invoice ready."; top-bar trial button 44 px; avatar initials C and J in English; the meta description switches with the language; one yellow sample tape per episode (5 in all; v2: 12) | `.crossing .phrase`, `.cta-compact`, `.chat-head .av`, `.smp` |

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
| notice black | `#05090B` | `.stage-caption`, `.notice` on a phone |
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

Ground against ground, as a cut: first to second 1.21, second to third 1.10 (and a change of hue from 216 to 27 degrees). The critic's sampler in cycle 2 found no text failure on rendered pixels; the grounds have changed since, and the table above is computed, not sampled from pixels.

### 1.5 What changed in the palette for v3

- **Grounds:** `#081530` and `#1B1208` replaced by `#0B2346` and `#2A1606`, each now bound to an input (`color_palette[12]`, `[13]`). `#05090B` and the working neutrals are bound (`[14]`, `[15]`).
- **The beam:** unchanged value; its hue is now traced (`color_palette[10]`).
- **Streak:** the same three colours, now on thin bars instead of whole copies of a bubble; `--soft` added as the third bar colour.
- **Tape colours:** unchanged, still the entry's estimates. Tape red now also colours the draft label; yellow sample tapes reduced to five.
- **Fixed transparency in use, all unchanging:** `.smear .tr` 0.6 and 0.42, `.catch-tr` 0.6 and 0.42, wallpaper stroke 0.045, hero grain 0.07.
- **Palette gate:** still provisional, for the reason given in 1.1.

---

## 2. Per-reference borrowing log (7 anchors)

Each element is named and specific, with the place it lands, the sequence that carries it and a frame. `R01.4` means Reference 01, element 4.

### Reference 01: Malaysian crossed cheque leaf (`references/seed_crossed_cheque_ac_payee.md`)

**Visual elements borrowed:**
1. The crossing: two parallel diagonal pen strokes across the top-left corner with a phrase between them → `#sheet .crossing` (`.s1` 2 px with a hook, `.s2` 1.7 px with a flick, both bowed; "INV-014 · 开好了" or "INV-014 · READY" at 11 px). Drawn in S1 at 1,900 and 2,030 ms by `stroke-dashoffset` → `rebuild2_s1_390zh_f.png` (no stroke, one, two with the phrase), `rebuild2_rest_390_en.png`.
2. The strike-through that narrows → `#sheet .bill-to .strike`, `#sheet .row .strike` (S3), `#pro .token-strip .strike` (S10) → `rebuild2_client_tanjung_390zh_a.png` (first frame: the old client struck), `rebuild2_taps_390zh.png` (fourth frame: after the strip is struck and wiped away).
3. Amount in words and in figures → `#sheet .total` (18 px) over `#sheet .total-words` (11 px), cut in at 1,770 and 1,820 ms → `rebuild2_s1_390zh_e.png`.
4. Tear-off with a counterfoil: "the finished invoice leaves the frame by sliding away from a perforated edge while a narrow stub stays behind with the record (number, client, amount, date)" → `#story .stub` (358 x 50: number, client code, amount, date, the word 存根 / Stub) stays on the client page; `#story .leaf` hangs from it at `#story .perforation`, slides 72 px along the perforation and leaves (S4); the stub turns over to its filed face (S5) → `rebuild2_story390zh_a.png` (joined, tearing, torn), `rebuild2_story390zh_b.png` (gone; stub filed).
5. A machine line of fixed-width numerals along the foot → `#sheet .machine-line` ("NO 2026014 DATE 20112026 SEN 270000", 11 px, tracked 0.1em, labels in the label grey) → `rebuild2_rest_390_zh.png`.
6. The leaf's fixed zones → the zone plan of `.invoice-sheet` → `rebuild2_rest_390_zh.png`.
7. Pale printed paper → `--sheet #F5F2E9` (an estimate; the entry gives no number). The pen's blue is carried into the second ground (`color_palette[12]`).

**NOT applied:** the cheque itself, a bank name, account or code-line numbers, the words of the printed crossing, "or bearer", any signature line, any word about payment. The phrase between the strokes says that the sheet is made, in both languages, and nothing about money.

**Reference evidence:** the entry's "The commitment gestures", "Layout and proportion", "What the build may borrow", items 1 to 5.

### Reference 02: *Night Mail* (1936) (`references/seed_night_mail_1936.md`)

**Visual elements borrowed:**
1. The catch: one fragment snapped onto the still sheet by a single translate with a hard stop → `.catch` chips at 760, 1,100 and 1,360 ms, 12 to 14 px text, travel about 150 to 250 px, each trailing three thin tapered bars (`.catch-tr`) → `rebuild2_s1_390zh_b.png` (third and fourth frames), `rebuild2_s1_390zh_c.png`, `rebuild2_s1_390zh_d.png`.
2. The pouch that hangs still while the train streaks → `.hang`: the source message is cut into the band under the sheet 190 to 260 ms before its catch and holds there, sharp, the only readable thing in the band → `rebuild2_s1_390zh_b.png` (first two frames), `rebuild2_rt390zh_f20-23.png` (four consecutive wall-clock frames), `rebuild2_live_390zh.png` (fourth frame).
3. The pigeon-hole grid: six labelled slots that fill one at a time → `#sheet .slot-empty[data-slot]`, from the cut at 300 ms → `rebuild2_s1_390zh_a.png`, fourth frame.
4. Cut length as tempo: intervals shorten, then a long hold → S1 beats at 300, 760, 1,100, 1,360, 1,560, 1,720, 1,840 (intervals 460, 340, 260, 200, 160, 120), drawn as the ten marks on `.cut-rail .marks`; the same idea in S6 (`MT`) and S8 (`FT`, `DT`) → `rebuild2_rest_390_zh.png` (rail), `rebuild2_cut_390.png` (months part way), `rebuild2_sec390zh_02.png`.
5. The drop: "the PDF bubble is put out of the moving frame into the visitor's thread (a slide out along the travel direction to a fixed position)" → `#story .leaf` falls 136 px from the client page into `#story .doc-bubble`, 160 ms, linear, hard stop, one frame of settle; the outline becomes his outgoing message on the frame it lands (S4) → `rebuild2_story390zh_a.png` (fourth frame: torn, slot empty), `rebuild2_story390zh_b.png` (first frame: landed). Wall-clock positions in `tools/rb2_capture_log.txt` ("drop on the wall clock").
6. The sorting wall as a row that fills → `#import .slot-row` (S8), shared with anchor 06 → `rebuild2_sec390zh_02.png` (third and fourth frames), `rebuild2_sec390zh_03.png`.

**NOT applied:** sound, verse, stills, people, the train as an image.

**Reference evidence:** "Two speeds in one frame", "Sorting as a grid that fills", "Rhythm by cutting", the description of the pick-up shot, "What the build may borrow", items 1 to 4.

### Reference 03: Wong Kar-wai, *Chungking Express* (1994) (`sampling.md`, "## Designer locked", lines 250 to 267)

**Visual elements borrowed:**
1. Two speeds in one frame: "one person stands still at the counter, sharp and slow, while the crowd passes in front as streaked, step-printed blur" → `#sheet` (never transformed, every glyph sharp) over `.mover` (22 steps of 64 px, 12 a second), in which no passing message can be read → `.hero-stage` during S1 → `rebuild2_rt390zh_f04-07.png` (the last still frame, then the first streak), `rebuild2_rt390zh_f08-11.png`, `rebuild2_rt390zh_f12-15.png` (the sheet cut in over it), `rebuild2_live_390zh.png` (lossless).
2. Step-printing as a drawn treatment: "movement drags and colour bleeds between frames" → `.smear`: per bubble, a slab with a torn trailing edge (`.hd`, a `clip-path` polygon of up to six tines) and three to five bars (`.tr`: 2.6, 3.4, 4.4, 6 or 10 px wide, 70 to 175 px long, pointed at the trailing end, at 5, 24, 44, 63 and 82% of the bubble's width) in `--tick` at 0.6 and `--streak` or `--soft` at 0.42; `[data-ph]` cuts the bars between two lengths on alternate steps; all cut on at the first step and off at 1,840 ms. In-page count during the run: bubbles drawn 0, text runs drawn 0, smears 7 to 9 → `rebuild2_s1_zoom2x.png` (double density), `rebuild2_rt390zh_f08-11.png`.
3. Exact time as a repeated mark: to the second on `.record-block .when`, `.stage-caption .ck`, `.wrap-checked`, every `.notice .ck`; to the minute on message times, all from his clock → `rebuild2_sec390zh_01.png`.
4. One small object repeated: INV-014 in seven places (`ornament[4]`) → `rebuild2_story390zh_b.png`, `rebuild2_sec390zh_02.png`.
5. Hard cuts between short episodes → S7: as each `.date-chip` passes mid-screen the ground, the top bar and the chip change on one frame; back when he scrolls back → `rebuild2_cut_390.png` (6 px before and after each boundary), `rebuild2_cut_1280_dayone.png`.
6. A lit counter at night: one hard-edged light and one white sheet in it → `.beam`, `#sheet` and its hard shadow → `rebuild2_rest_1280_zh.png`.
7. The cut as an arrival → `#sheet` at 300 ms of S1 → `rebuild2_rt390zh_f12-15.png` (frames 13 and 14).
8. Faces you cannot read: the passing crowd has no legible face → passing messages have no legible text (`.thread-band.running .strip .bubble{visibility:hidden}`) → same frames as element 1.

**NOT applied:** film stills, people, neon lettering, any sound. Smear over text or UI at rest (condition 1): at rest the band is ordinary sharp bubbles.

**Reference evidence:** the signature-work description, the justification's "hard cuts between short self-contained episodes", conditions 1 to 4.

### Reference 04: Bukku (`sampling.md`, "#### vs Bukku (idx 6)", lines 478 to 508)

**Visual elements borrowed (the `borrow` rows):**
1. Trial button with its true terms in the first screen → `#hero .cta-trial` (y 575 to 631) with `#hero .trial-terms`; `header.topbar .cta-trial` → `rebuild2_rest_390_zh.png`, `rebuild2_rest_390_en.png`.
2. Verb-first trial label → `.cta-trial` ("免费试用 7 天" / "Start 7-day free trial").
3. Real product screens → `.invoice-sheet`, `#story .sis-card`, `#import .review-card`, `#reports .month-bars` → `rebuild2_sec390zh_01.png` to `_03.png`.
4. Slim top bar and a visible language choice → `header.topbar`, `.lang-toggle` → `rebuild2_rest_390_en.png`.
5. Named plans, RM price with the period, what each includes, side by side → `#pricing .plan` x 2 → `rebuild2_sec390zh_04.png`.
6. Month-by-month sales, expenses and net profit, labelled → `#reports .month-bars`, `#report .detail` → `rebuild2_sec390zh_02.png`.
7. The market named in the claim; a local support route → `#hero .hero-claim`, `footer .trust-line`, `footer .support-whatsapp` → `rebuild2_rest_390_zh.png`, `rebuild2_sec390zh_04.png`.

**NOT applied (the `diverge` rows):** see section 3; each names where the alternative can be seen.

**Reference evidence:** the table rows; Bukku's page itself was not seen (search summaries only).

### Reference 05: Invoice-Generator.com (`sampling.md`, "#### vs Invoice-Generator.com (idx 19)", lines 510 to 538)

**Visual elements borrowed (the `borrow` rows):**
1. The invoice itself in the first screen → `#hero .hero-stage .invoice-sheet` (y 181 to 473) → `rebuild2_rest_390_zh.png`.
2. Invoice anatomy → `.invoice-sheet` with `.from`, `.bill-to`, `.meta`, `.lines`, `.total`; `.terms` on the full leaf in `#story` → `rebuild2_story390zh_a.png`.
3. Line-item table, amounts right-aligned in tabular figures, in RM → `.invoice-sheet .lines`, `.total`.
4. A light sheet on a plain ground, set plainly → `.invoice-sheet` (own type scale in Instrument Sans).
5. Try it with no account → `.picker-client`, `.picker-rate`, and what he picks is what the rest of the page shows → `rebuild2_client_tanjung_390zh_a.png`, `rebuild2_client_tanjung_390zh_b.png`.
6. The PDF as the end of the task → `#story [data-beat="pdf"]` → `rebuild2_story390zh_b.png`.
7. Almost no navigation; no sound → `header.topbar`; no audio or video element.

**NOT applied (the `diverge` rows):** see section 3. "Layout" is now carried through at desktop width as well (`.console` under the stage).

**Reference evidence:** the table rows.

### Reference 06: Card labels and camera tape (`references/domain_card_labels_camera_tape.md`)

**Visual elements borrowed:**
1. Flip to mark done: "done is the other face of the same object" → `#story .stub` turns over on its long axis from the stub face (paper, client code, 存根) to the filed face (dark, 已归档) and takes its place among the filed rows (S5); `.old-file` in `#import .slot-row` turns from its picture face to its read face (S8) → `rebuild2_story390zh_b.png` (first frame stub, second frame filed), `rebuild2_sec390zh_03.png`.
2. The tape label → `.tape-label` (sample labels, client codes, "014", plan names, "AI 读到", draft, saved, not saved, connected, revoked) → `rebuild2_rest_1280_zh.png`, `rebuild2_draft_390zh.png`.
3. The row of slots as a progress readout, no bar and no percentage → `#import .slot-row` → `rebuild2_cut_390.png` (third frame: one file in, four to come).
4. Green wrap means checked: a band laid across the object only after a person has reviewed it, covering part of it → `#import .wrap-checked` (S9) with the tape label under the card cut from 未保存 to 已保存 → `rebuild2_taps_390zh.png` (second and third frames).
5. The lock switch as a physical position → `.picker-client .tile .lock` (track, knob, padlock, the word 已选) → `rebuild2_client_tanjung_390zh_a.png`.
6. The identifier travels with the object → the code on the picker tile's tape is the code on the sheet, the stub, the leaf and the client page, for whichever client is picked → `rebuild2_client_tanjung_390zh_b.png`.
7. State is carried by tape, with a word: SIS states on the page (draft, not saved, saved, connected, revoked) are tape labels; the chat's ticks carry none of them.
8. Tape palette: see 1.2 and 1.5.

**NOT applied:** any camera or card brand, a real product label, a meaning for red tape (red always carries its own word).

**Reference evidence:** "How it sequences information", "Named elements the build may borrow", items 1 to 5, the colour list.

### Reference 07: The return block, formal borrowing only (`references/domain_myinvois_validated_einvoice_qr.md`)

**Visual elements borrowed:**
1. The return stamp as a second, later beat → `#sheet .record-block`, S1 at 2,230 ms, a left-to-right clip wipe of 170 ms → `rebuild2_s1_390zh_f.png` (fourth frame: before), `rebuild2_s1_390zh_g.png` (during, after).
2. The record block's three parts: a plain square mark holding the page count "1/1" (weight 700), an identifier line, a date and time line with seconds from his clock, in 11 px tabular capitals → `.record-block .mark`, `.id`, `.when` → `rebuild2_rest_390_zh.png`.
3. Two hands, two type voices: what the person chose in Instrument Sans 600 and by translate; what the system wrote in tabular figures and by wipe or cut → `#sheet` → `rebuild2_s1_390zh_d.png` (fourth frame: number and date wiped in).
4. Before and after on one page: the sheet without its block, and with it. Now also in the draft: a sheet with no rate has no block, on the first screen and on the leaf below → `rebuild2_draft_390zh.png`.

**NOT applied, and never to be applied without the owner:** a matrix code or anything like one, the entry's forbidden words or their Chinese equivalents, a government mark, any compliance claim.

**Reference evidence:** "How it sequences information", "Named elements the build may borrow", items 1 to 4.

---

## 3. Competitor judgment tables

The verdicts and rationales are those written at Step 8 in `sampling.md`, unchanged. Every row has a build location. Changed in v3: the two "Empty and error states" rows (the draft is designed down the whole page), Invoice-Generator.com "Layout" (true at desktop width too), "Sample data" (one tape per episode), and every frame reference.

#### vs Bukku (idx 6)

Observed from search results: hero headline, subhead, badge, trial terms, starting price, user count, feature areas. From prior knowledge and not verified today: light surface, a static dashboard screenshot beside the claim, long feature sections, neutral sans type.

| Element | What Bukku does | verdict | rationale | build location |
|---|---|---|---|---|
| Hero staging | A claim headline, a compliance badge, the trial offer, and the product beside it as a still image. Everything arrives at once and nothing changes. | diverge | A still claim plus a still screenshot is what Jun Hao scrolls past. The live page already beats this on atmosphere; version 2 must beat both by making the first screen an event: the invoice assembles while he watches. | `#hero .hero-stage`: S1 (`.mover`, `.smear`, `.hang`, `.catch`, `.catch-tr`, `#sheet`). Frames: `rebuild2_s1_390zh_a.png` to `_g.png` (page clock), `rebuild2_rt390zh_f04-07.png` to `rebuild2_rt390zh_f12-15.png` (wall clock, consecutive) |
| Trial offer in the first screen | The trial button and its terms (30 days, no credit card) sit in the hero, above any scrolling. | borrow | Table-stakes for local software and the live page's first known weakness. A visitor with 30 seconds must be able to start the trial without scrolling. | `#hero .cta-trial` (y 575 to 631 at 390), `header.topbar .cta-trial` (44 px high). `rebuild2_rest_390_zh.png`, `rebuild2_rest_390_en.png` |
| Trial terms line | A short line under the button states the length of the trial. | borrow | Stating the offer next to the button removes a question. SIS states only what is true: 7-day free trial, Basic RM 199 a year, Pro RM 399 a year. | `#hero .trial-terms` (the second line inside the trial button, y 608 to 620). `rebuild2_rest_390_zh.png` |
| "No credit card" promise | Printed under the trial button. | diverge | Whether SIS needs a card for the trial is unknown (`facts.md`), so the claim cannot be made. | `#hero .hero-cta .trial-terms` and the note of `#pricing`: the offer is stated as the trial and the two prices and nothing else. No card wording exists in the file. `rebuild2_rest_390_zh.png` |
| How the product is shown | Real product screens, not abstract renders. | borrow | The principle is table-stakes and fixes the live page's third weakness (only 3D renders, no product, no invoice). A buyer of business software expects to see the software. | `.invoice-sheet` (`#sheet`, `#story .leaf`), `#story .sis-card`, `#import .review-card` with `#import .review-state`, `#reports .month-bars`. `rebuild2_sec390zh_01.png` to `_03.png` |
| Product framing on a phone | A wide desktop dashboard scaled down (not verified today). | diverge | A desktop dashboard at 390 px is unreadable texture. SIS shows one object at reading size, the invoice, then one screen per idea. | `#sheet` (280 px wide at 390, no text under 11 px: name 14, rows 12, total 18), `#story .leaf` at the same size, `#report .detail`. Audit: 0 visible text runs under 11 px. `rebuild2_rest_390_zh.png`, `rebuild2_story390zh_a.png` |
| Motion | Effectively none: a static page with standard hover states (not verified today). | diverge | Motion is the owner's stated lever and the visitor judges motion for a living. Here motion carries meaning: fields arriving on the invoice are the claim "pick a client, pick a rate, done". | S1 to S12 in section 6: `.mover`, `.smear`, `.catch`, `.leaf`, `.stub`, `.bar`, `.old-file`, `.wrap-checked`, `.token-strip`. `rebuild2_s1_390zh_*.png`, `rebuild2_story390zh_a.png`, `_b.png`, `rebuild2_sec390zh_02.png`, `_03.png` |
| Narrative order | Organised by module (invoicing, inventory, bank, e-invoice), an inventory of what exists. | diverge | A module list has no beginning or end and caused the live page's repetition. Version 2 is one sequence told once: the old mess, a client picked, a rate picked, the invoice, the record, the month. | `main.thread`: `#hero`, then `#story` (today), `#reports` (month end), `#import`, `#pro`, `#pricing` (day one), each opened by a `.msg.in` question and closed by a `.notice`. `rebuild2_sec390zh_01.png` to `_04.png` |
| Interaction | Links and buttons only; nothing to try on the page (not verified today). | diverge | He believes what he can touch. One small tap-driven demo does more in 30 seconds than any feature paragraph. | `.picker-client .tile`, `.picker-rate .rstrip`, `.cut-rail`, `#report .mcol`, `#import .approve`, `#pro .token-btn`. `rebuild2_client_tanjung_390zh_a.png`, `rebuild2_taps_390zh.png` |
| Local grounding in the headline | "for Malaysia" is in the headline itself. | borrow | A Malaysian freelancer trusts a tool made for his market over an imported one. Saying it early, in his language, is expected. | `#hero .hero-claim` (names Malaysian videographers and photographers), `footer .trust-line` |
| Compliance badge | "LHDN MyInvois ready" badge and SST in the subhead. | diverge | LHDN e-invoice support and SST handling are unknown for SIS and must not be stated. Trust is built from what is true: Singapore-region storage, row-level isolation, the Malaysian business registration. | `footer .trust-line`: what is true stands where a badge would (storage region, isolation, registration number). No badge element exists. `rebuild2_sec390zh_04.png`, fourth frame |
| User count | "120,000+ Malaysian businesses". | diverge | No user numbers exist and the brief forbids them. Credibility comes from craft and from showing the product. | no element; nothing in the file carries a count. In its place: `#sheet` and the product views, and `footer .trust-line` |
| Navigation | Top bar with product, pricing, sign-in and a trial button (structure not verified today). | borrow | A slim top bar with sign in and the trial button is what every software buyer looks for. Kept to the minimum: logo, language, sign in, trial. | `header.topbar` |
| Navigation depth | Many links, solution and partner pages. | diverge | One page, one job. Extra links leak a 30-second visitor away from the trial. | `header.topbar`: four items (wordmark, `.lang-toggle`, `.signin`, `.cta-compact`); `footer .legal`: four links. Nothing else leaves the page. `rebuild2_rest_390_zh.png` |
| Language switch | Visible language choice for a multilingual market (not verified today). | borrow | Malaysian visitors expect to choose a language. SIS is Chinese by default with an English toggle, reachable in the first screen. | `header.topbar .lang-toggle` |
| Typography | Neutral, interchangeable SaaS sans. | diverge | The owner requires type at least as good as the live page, and neutral SaaS type signals "one more dashboard". The face is set by the Typography VS step; this row only records that Bukku's default is not followed. | `.hero-claim h1` (Noto Sans SC 700; Bricolage Grotesque 800, `opsz` 27 to 40), `.tc>h2` at 900 and up, `.invoice-sheet` and `.msg` (Instrument Sans), `.readout` and `.catch.amt` (Kanit). `rebuild2_rest_1280_zh.png`, `rebuild2_rest_1280_en.png` |
| Color | Light surface with a single brand color (not verified today). | diverge | The owner judges the dark live page as better looking than the light version 1. Version 2 stays at or above the live page's dark, cinematic finish. | `body` grounds `#0B1216`, `#0B2346`, `#2A1606`; `.beam`; `.invoice-sheet` as the one light object. `rebuild2_rest_1280_zh.png`, `rebuild2_cut_390.png`, `rebuild2_cut_1280_dayone.png` |
| Layout | Long page of feature sections in a multi-column grid. | diverge | The live page is already 10,500 px on a phone and repeats itself. Version 2 is short, single column on a phone, one idea per screen. | one lane (`.col`); the first 640 px at 390 hold four blocks (`.fwd-label`, `.hero-claim`, `.hero-stage`, `.hero-cta`); `.cut-rail` starts at y 645. Total 5,079 px in Chinese at 390. At 900 and up the lane is 480 px, left of centre, with one margin column of notes (`.tc`), not a feature grid. `rebuild2_rest_390_zh.png`, `rebuild2_sec1280zh_05.png` |
| Primary button label | "Start free trial" style label, verb first. | borrow | The label a buyer scans for. SIS uses the same verb-first form with the length stated nearby. | `.cta-trial` |
| Pricing display | Plans named, price in RM with the period, what each includes. | borrow | Plain RM figures with the period are expected locally. Two plans side by side, each with its list from `facts.md`. | `#pricing .plan[data-plan="basic"]`, `#pricing .plan[data-plan="pro"]`. `rebuild2_sec390zh_04.png` |
| Pricing tactics | A time-limited promotion (first 3 months, ends 31 Dec 2026), a per-day reframing, SST added on top. | diverge | SIS has one honest annual price and no promotion. Urgency devices and price reframing would contradict the peer-to-peer register. | `#pricing .plan` x 2: one annual price each, no promotion, no per-day figure. `rebuild2_sec390zh_04.png` |
| Data display | Dashboards and charts: sales, expenses, profit by period, with labelled axes. | borrow | Month-by-month sales, expenses and net profit is the domain's standard report and a real SIS feature. Shown once, with labels and values, never colour alone. | `#reports .month-bars`, `#report .detail`. `rebuild2_sec390zh_02.png` |
| Data density | Accounting density: ledgers, charts of accounts, inventory tables. | diverge | He is not a bookkeeper. Bookkeeping density is the reason he has not adopted accounting software. One number per moment. | `#report .detail`: one month at a time, three figures (14 px, 14 px, 26 px). Nothing is printed under the bars; the ranking shows order and count only. `rebuild2_sec390zh_02.png`, `rebuild2_taps_390zh.png` (a month tapped) |
| Empty and error states | None visible on the marketing page. | diverge | The build's own demo needs states the competitor never shows: before a client is picked, the sheet shows sample data marked as sample, and the import moment shows "nothing saved until you approve" as a visible state. | designed all the way down. `#sheet .slot-empty` (S1). Draft with no rate: `#sheet.is-draft` (red `.draft-tape`, one dashed slot, no crossing, no record block), `#story .leaf.is-draft` still on its stub place, `.stub-slot` ("存根 · 选了价目才有"), `.doc-bubble[data-state="empty"]` ("PDF · 选了价目才有"), no ticks, no 014 on the month, the draft left out of the ranking: `rebuild2_draft_390zh.png` (four frames), `rebuild2_draft_390en.png`. Import waiting: `#import .review-state.rs-wait` under a red tape label: `rebuild2_taps_390zh.png`, second frame |
| Support channel | A local contact route for a local product (form not verified today). | borrow | Malaysian buyers expect to reach a person on WhatsApp. SIS names WhatsApp as the fastest route, as a link, not a floating bubble over the content. | `footer .support-whatsapp`. `rebuild2_sec390zh_04.png`, fourth frame |

#### vs Invoice-Generator.com (idx 19)

Observed from search results: no sign-up, editable labels, logo, currency, line items, tax and discount, PDF download, "original free invoice maker", "4 million businesses". From prior knowledge and not verified today: the exact field names (From, Bill To, Ship To), the light grey page with a white sheet, a green download button in a side column.

| Element | What Invoice-Generator.com does | verdict | rationale | build location |
|---|---|---|---|---|
| Hero staging | There is no hero. The first screen is the invoice itself, with no claim above it. | borrow | The strongest convention in the category: an invoice tool shows an invoice at once. It fixes the live page's worst gap. In version 2 the invoice is the staged object in the first screen, not an illustration of one. | `#hero .hero-stage .invoice-sheet` (y 181 to 473 at 390). `rebuild2_rest_390_zh.png` |
| Claim in the first screen | None. The form speaks for itself. | diverge | A blank form says "free tool". SIS has a claim to make (pick a client, pick a rate, done) and must say it in a short readable line next to the object, never on top of it (live weakness 2). | `#hero .hero-claim`, y 77 to 167, above the stage (173 to 567) and never on it; beside it at 900 and up. `rebuild2_rest_390_zh.png`, `rebuild2_rest_1280_zh.png` |
| Starting state of the invoice | Blank, with placeholder prompts. Every invoice starts from nothing. | diverge | This is the exact difference SIS sells. The SIS invoice is never blank: it fills from a saved client and a saved rate. The blank sheet may appear only as the "before" beat. | `#sheet .slot-empty[data-slot]`: the blank sheet exists only from 300 ms of S1 until each slot is filled; the still is the filled sheet. `rebuild2_s1_390zh_a.png`, fourth frame |
| Motion | None. A static form; change happens only when the user types. | diverge | The contrast between typing every field and watching fields arrive by themselves can only be shown in time. This is where the owner's lever does the persuading. | S1 in `#hero .hero-stage`. `rebuild2_s1_390zh_b.png` to `_f.png` |
| Narrative | None. One state, one action. | diverge | Without a sequence there is no before and after. SIS needs a short one: mess, pick, pick, invoice, record, month. | `main.thread`, six episodes; see the Bukku row "Narrative order". `rebuild2_sec390zh_01.png` |
| Interaction: try it without an account | The visitor can make an invoice immediately, no sign-up. | borrow | Immediacy is what he expects from a free tool, and trying beats reading. Version 2 lets him change the invoice on the page, before any sign-up. | `.picker-client`, `.picker-rate`, `.invoice-sheet .total`; what he picks is carried down the page (`#story .chat-head`, `.leaf`, `.sis-card`, `.stub`, `#report .rank`). `rebuild2_client_tanjung_390zh_a.png`, `_b.png` |
| Interaction: input method | Free typing in a dozen fields. | diverge | Typing on a phone, tired, in 30 seconds, will not happen. SIS interaction is two taps (a client, a rate), which is also the product's claim. | `.picker-client .tile` (3) and `.picker-rate .rstrip` (3): taps only; there is no text field on the page. `rebuild2_client_tanjung_390zh_a.png` |
| Invoice anatomy | The recognisable parts: sender, recipient, number, date, due date, line items, subtotal, tax, total, notes and terms. | borrow | This is what an invoice is. He must recognise the object in one glance. Diverging would make the mock look like decoration. | `.invoice-sheet` (`.from`, `.bill-to`, `.meta`, `.lines`, `.total`, `.terms`) |
| Data display: line items | A table: item, quantity, rate, amount; amounts right-aligned; currency shown. | borrow | The universal convention for reading money. Amounts right-aligned in tabular figures, in RM. | `.invoice-sheet .lines`, `.invoice-sheet .total` |
| The invoice as a light sheet | A white page on a plain ground. | borrow | An invoice is paper. A white sheet on the dark stage becomes the brightest thing on screen, which is good staging and matches the print-ready PDF. | `.invoice-sheet` |
| Page color | Light grey utility page. | diverge | The owner wants at least the dark, cinematic finish of the live page. Only the sheet is light. | `body` and its three grounds; only `.invoice-sheet`, `.report-screen`, `.review-card`, the stub and the tiles are light. `rebuild2_cut_390.png` |
| Typography on the page | Plain utility sans throughout. | diverge | Page type must be at least as good as the live page; set by the Typography VS step. | `.hero-claim h1`, `.notice`, `.tc>h2`. `rebuild2_rest_390_en.png`, `rebuild2_sec1280en_03.png` |
| Typography on the sheet | Plain, legible, no display type on the document itself. | borrow | A real invoice is set plainly. If the mock invoice is styled like the marketing page it stops looking real. | `.invoice-sheet` (own plain type scale, tabular figures) |
| The payoff: PDF | The end of the task is a PDF you can send. | borrow | The PDF is what his client receives, so it is the moment that matters. The sequence ends on the invoice becoming a PDF, shown as a visible state with a text label. | `#story [data-beat="pdf"]` (the `.doc-bubble`, with the leaf dropped into it). `rebuild2_story390zh_b.png` |
| Primary button | "Download", green, beside the form. | diverge | The SIS page has one job, the trial. The demo does not offer a real download, so no button may promise one. | `.cta-trial` and `.composer` are the only calls to action and both go to sign-up. `.doc-bubble .file-bar` and `#report-msg .file-bar` are labels inside a message, not controls; no download control exists |
| Navigation | Almost none: a few text links. | borrow | Few links keep a 30-second visitor on task. The build keeps only logo, language, sign in and trial. | `header.topbar` |
| Layout | One object in the centre, controls in a side column. | diverge | The single-object focus is right, the side column is not: at 390 px there is no side. Controls sit under the sheet, within thumb reach. | at 390: `.cut-rail`, `.picker-client`, `.picker-rate` under the sheet in one column (`rebuild2_rest_390_zh.png`). At 900 and up: `.console` is a row under the stage (transport, clients, rates), full width of the first screen; nothing sits in a column beside the sheet except the claim and the trial button (`rebuild2_rest_1280_zh.png`, `rebuild2_rest_1280_en.png`) |
| Sample data | The visitor's own data; nothing is pre-filled. | diverge | The build pre-fills fictional studios, clients and rates, and the brief requires them to be labelled as sample data. | one yellow `.tape-label` per episode, on the thing that carries the figures: `#sheet`, `#story .leaf`, the header of `#report-msg`, `#import-msg`, `#pro-msg`; plain small labels where a second one would repeat it: `.chat-head .smp` x 3 ("示例聊天 / sample chat"), `.sc-head .smp` ("示例资料 / sample data"); `.sample-note`. `rebuild2_sec390zh_01.png`, `rebuild2_sec390en_01.png` |
| Empty and error states | The page is one large empty state; errors appear only on download. | diverge | The build shows a filled state by default. Its own states (nothing picked yet, import waiting for approval) are designed, readable and never rely on colour alone. | same places as the Bukku row "Empty and error states" |
| Social proof | "Trusted by over 4 million businesses". | diverge | No numbers exist for SIS and the brief forbids them. | no element; nothing in the file carries a count or a quote |
| Price | Free, no account. | diverge | SIS is paid and says so plainly. The answer to "free" is not to hide the price but to show what the free tool cannot do: remember. | `#hero .trial-terms` (first screen) and `#pricing .plan` x 2. `rebuild2_rest_390_zh.png`, `rebuild2_sec390zh_04.png` |
| Text under the tool | Long explanatory and search-oriented copy below the form. | diverge | Long copy under the product is the repetition the live page suffers from. Each fact appears once. | one `.notice` per episode (five in all), each fact from `facts.md` once. `rebuild2_sec390zh_04.png` |
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

Added hooks:

| Added hook | What it is | Row or anchor that covers it |
|---|---|---|
| `.draft-tape`, `.story-stage.is-draft`, `.stub-slot`, `.empty-label .l-draft` | the draft, downstream | both "Empty and error states" rows (diverge) |
| `.console` | transport and pickers as one row under the stage at 1120 and up | Invoice-Generator.com "Layout" (diverge) |
| `.tc`, `.tc>h2`, `.tc.nh` | thread lane and margin column at 900 and up | Bukku "Layout" (diverge); `key_visual_elements[15]` |
| `[data-ago]`, `#meta-desc`, `?lang=en` | sample times from his clock; description in both languages; a test handle that opens the page in English | verdict items 6 and 11 |
| `window.SIS.beat()` | test handle that forces a story beat | none (not visible) |

---

## 4. Attribute-binding manifest

Ten sub-passes. Each saw the brief (App X and ICP from `inhabited.md`) plus only the inputs the protocol permits for that axis. The line under each heading records what the sub-pass saw and what was hidden. Where an element on the page comes from an input the axis was not allowed to see, it is **not claimed in that axis**; it is logged in section 2 and under `inspirations`.

Corrections made in v3 to the entries the critic marked: `typography[0]`, `[2]`, `[3]` now state the weights the page computes (checked run by run in `tools/rb2_audit.js`), and the stylesheet was changed to the locked weights where it had drifted; `color_palette[12]` to `[15]` bind the three grounds, the notice black and the working neutrals, and `[10]` says where the beam's hue comes from; the 12 degree lean has left `motion[2]` and is bound in `typography[4]`, the one axis whose input (the Typography VS record of Kanit's italic) contains it; `ornament[0]` and `[2]` no longer say "only", and the page was also changed so that the single blue checks on tiles are gone.

Citation count across all 88 entries: the framing is cited in 35 (40%). Per axis: style_tags 4 of 4, mood 4 of 4, color_palette 9 of 16, typography 0 of 7, key_visual_elements 6 of 16, imagery 2 of 8, surface_treatment 2 of 7, ornament 2 of 8, motion 6 of 11, inspirations 0 of 7.

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

- typography[0] = "Bricolage Grotesque, primary Latin: headlines 800 (`h1 .en`, `.tc>h2`, `.wordmark`, `.price b`), page copy 400 (`.hero-sub`, `.notice`, `.plan li`, `.sample-note`, `footer`), controls and emphasis 600 (`.cta-trial`, `.trial-terms`, `.signin`, `.lt-track`, `.replay`, `.composer`, `.pk-label b`, `.plan h3`); a Latin run inside a Chinese string takes that string's weight (500 in a control, 400 in copy); width fixed at 100". Computed on the page at 390: 800, 600, 500 and 400 only
  derived from: Typography locked, role table, pick idx 4; condition 1
- typography[1] = "Bricolage Grotesque optical size held low, set at or near the font size and never above 40: 31 and 27 on the phone headline, 40 and 37 on the desktop headline, 30 on the desktop section headings, 32 on prices"
  derived from: Typography locked, condition 2
- typography[2] = "Noto Sans SC, Chinese companion: headlines 700 (`h1`, `.tc>h2`), controls, thread and product text 500, page copy 400, never above 700". Computed at 390: 700 on 2 runs, 500 on 134, 400 on 36, nothing else
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
- key_visual_elements[14] = "a slim top bar: wordmark, language, sign in, trial" at `header.topbar`
  derived from: competitor Bukku rows "Navigation", "Language switch" (borrow), "Navigation depth" (diverge); competitor Invoice-Generator.com row "Navigation" (borrow)
- key_visual_elements[15] = "at 900 and up the thread is one 480 px lane left of centre, and each episode's heading and note stand in the margin on its right, beside the thing they describe; the footer keeps the same two columns" at `.tc`, `.tc>h2`, `.tc>.notice`, `footer .col`
  derived from: framing (a thread is one lane; what is said about a message stands beside it, not inside it) + competitor Invoice-Generator.com row "Layout" (diverge: controls under the object, not in a side column) + competitor Bukku row "Layout" (diverge: not a grid of feature sections)

### imagery
Saw: framing + seeds (01, 02) + designer + constraint. Hidden: competitors, domain anchors, typography.

- imagery[0] = "first-screen treatment: two speeds in one frame. The sheet is still and sharp; behind it and round it the thread streaks upward in whole steps, 12 a second"
  derived from: designer signature work, the snack-bar shot ("one person stands still … sharp and slow, while the crowd passes … as streaked, step-printed blur") + seed *Night Mail* ("the pouch is the one sharp, legible object; the train and the landscape are smear")
- imagery[1] = "the smear is drawn, not filtered. While the band runs no bubble is drawn as a bubble and none of its text is drawn. In its place stands a square-cornered slab in the bubble's own colour whose trailing edge is torn into tines of uneven width and length, and three to five thin bars along the travel (2.6 to 10 px wide, 70 to 175 px long, cut to a point at the trailing end, inside the bubble's own width) in tick blue, thread green and pale grey at fixed 0.6 and 0.42. Alternate steps print the bars at a different length. All of it is cut on with the first step and cut off with the last; no blur filter"
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
- imagery[7] = "a message that hangs still in the band under the sheet while the thread streaks behind it, and from which the fragment is taken"
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
- surface_treatment[6] = "bubbles are flat fills with a 9 px radius and a tail; on a phone the page's own narration sits in centred notices on near-black; at 900 and up the same notes stand in the right margin under a dashed rule"
  derived from: framing "grey bubbles" (and the thread's centred system notices)

### ornament
Saw: framing + designer + seeds (01, 02). Hidden: competitors, domain anchors, constraint, typography.

- ornament[0] = "double ticks as the chat's receipt glyph, on his own outgoing messages and nowhere else: one grey, two grey, two blue, always beside a word, with a time once read. They report nothing about SIS; SIS states are carried by tape labels"
  derived from: framing "double ticks"
- ornament[1] = "a forwarded label with its arrow, italic: once at the very top (`.fwd-label`), on two messages of the hero thread (`.bubble .fw`), and as the header of each product attachment (`.at-head`)"
  derived from: framing "forwarded-message"
- ornament[2] = "a perforated rule (4 px dash, 4 px gap): between stub and leaf, above the footer, and above each margin note on desktop" (solid 1 px rules remain on the paper and under the top bar)
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
- motion[1] = "arrival by cut: a message, a caption, a digit, a tick or a whole sheet of paper is not there and then is, on one frame; the PDF's ticks advance one grey, two grey, two blue, each a thumb's move apart"
  derived from: framing ("a tick turning from one to two", recorded at Step 4) + constraint "Everything is either there or not there"
- motion[2] = "forwarding is the basic move: a fragment leaves one place and lands in another by one linear translate (a catch 120 to 140 ms, a re-cut 160 ms, the leaf's drop 160 ms over 136 px), stops dead and settles in a single frame"
  derived from: framing "forwarded-message" (content moved from one place to another; "a file landing in the thread") + constraint "movement"
- motion[3] = "thread travel is stepped: the band moves in whole jumps of one step and stops on a step; no position between two steps is ever shown"
  derived from: framing (a thread advances one message at a time) + constraint (no blending between positions; a position is held or it is not)
- motion[4] = "scrolling is the thread's own scroll: never intercepted, pinned or snapped; a move tied to it is a function of scroll position and runs backwards (the tear follows the thumb; the drop and each tick are set off by a position and undone by going back above it)"
  derived from: framing ("a thread is a vertical, thumb-native narrative", recorded at Step 4)
- motion[5] = "timing table: linear travel and hard stops only, no ease-out tail, no spring. Cut 0 ms, stroke 110, catch 120 to 140, drop 160, wipe 170, flip 200. Only the opening sequence runs longer than 440 ms"
  derived from: constraint ("either there or not there": a tail that eases toward rest is the positional form of a fade and is left out by the same reasoning)
- motion[6] = "the stylesheet draws the finished frame; every animation plays from an earlier state into it; reduced motion is that frame, reached by a cut. When motion is allowed the earlier state is set before first paint and held for a fixed 200 ms from the first painted frame; nothing waits for the web fonts"
  derived from: constraint, test 4 ("reached by a cut to the finished still, not by a slow fade")
- motion[7] = "hover, focus, pressed and disabled change by cut or by shape: a 1 px drop, a border weight, an outline, a dashed edge"
  derived from: constraint, test 3
- motion[8] = "whatever the system writes arrives by a left-to-right clip wipe with a hard edge; whatever a person chooses arrives by a translate"
  derived from: constraint "clipping or masking" and "movement"
- motion[9] = "hand transport: the thumb drags a knob along a rail, the knob's position sets where the opening sequence stands, and it runs backwards under the thumb"
  derived from: framing ("a vertical, thumb-native narrative", recorded at Step 4: in a thread the thumb is what moves time) + constraint "movement" (the only thing that changes is position). The rail's uneven marks are not claimed here: they come from seed *Night Mail*, which this axis may not see, and are bound in `key_visual_elements[8]` and R02.3.
- motion[10] = "the language cut keeps the reader's place: the block on the reading line (40% down the screen) stays on the reading line, whatever the scroll position"
  derived from: framing ("a thread is a vertical, thumb-native narrative", recorded at Step 4: only the thumb moves the thread) + constraint (the switch is a cut of the strings; a cut that also moved the page would be a second, unauthored move)

### inspirations
Saw: all 7 bank anchors. Ran last. This is the cross-anchor summary; it is also where elements from the two domain anchors are bound, since no other axis may see them.

- inspirations[0] = "Malaysian crossed cheque leaf: the crossing, the strike, words and figures, the stub that stays while the leaf tears off along the perforation, the machine line"
  derived from: anchor 01, `references/seed_crossed_cheque_ac_payee.md`, elements 1 to 5
- inspirations[1] = "*Night Mail* (1936): the catch, the pouch that hangs still, the pigeon-holes, cut length as tempo (in S1, S6 and S8), the drop (a hard-stopped fall of 136 px into the thread)"
  derived from: anchor 02, `references/seed_night_mail_1936.md`, elements 1 to 4 and the description of the pick-up shot
- inspirations[2] = "*Chungking Express* (1994): one sharp subject against a step-printed world whose passing figures are streaks without faces; exact times; one object repeated; hard cuts between episodes; a lit counter at night"
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

Chinese is the default. The y values are measured from the built page at 390 x 844 (`tools/rb2_audit.js`; identical in English down to the picker rows). The fold-safe line is **y = 640**. Total height at 390: 5,079 px in Chinese, 5,217 px in English.

| Region (hook) | y at 390 | What is there | Cites |
|---|---|---|---|
| `header.topbar` (sticky, takes the episode's ground) | 0 to 52 | wordmark; `.lang-toggle`; `.signin`; compact `.cta-trial`, 84 x 44 | 04 "Navigation", "Language switch" |
| `.fwd-label` | 59 to 75 | "↪ 已转发 / Forwarded" | framing; `ornament[1]` |
| `#hero .hero-claim` | 77 to 167 | h1 in two lines; one line naming Malaysian videographers, photographers and small studios | 04 "Local grounding"; 05 "Claim in the first screen" |
| `#hero .hero-stage` (full bleed, 390 x 394) | 173 to 567 | `.thread-band`: wallpaper, grain, `.mover`, `.beam`, `.hang-layer`. `#sheet` x 94 to 374, y 181 to 473. Left of the sheet 87 px of thread; under it two whole messages with times 20 and 19 minutes before his clock. `.stage-caption` 543 to 567 | 03, 02, 05, 01, 07, 06 |
| `#hero .cta-trial` with `.trial-terms` | 575 to 631 | "免费试用 7 天" (17 px) over "Basic RM 199/年 · Pro RM 399/年" (12.5 px, y 608 to 620) | 04 "Trial offer", "Trial terms line" |
| `.console`: `.cut-rail` | 645 to 689 | replay, rail with ten marks, knob, readout | 02 element 3 |
| `.picker-client` | 703 to 854 | three tiles | 05; 06 |
| `.picker-rate` | 868 to 932 | three tape strips | 05; 06 |
| `.sample-note` | 942 to 978 | what is made up | 05 "Sample data" |
| `.date-chip` 今天, `#story` | 1,000 to 1,940 | `.chat-head` (the picked client's contact, "示例聊天"); `.msg.in` "发票呢？" 20 minutes before his clock; `#story-stage` 358 x 664: `.sis-card` (SIS chip, 客户页, client line, `.stub` 358 x 50, `.perforation`, three `.past-row` 358 x 36), `.leaf` 280 x 362 hanging from the stub, `.doc-bubble` 292 x 418 below; `.notice` | 01 element 4; 02 element 4; 05 "The payoff: PDF"; 06 |
| `.date-chip` 月底, `#reports` | 1,940 to 2,599 | `.chat-head`; `.msg.in`; `#report-msg` (header, `#report`, `.file-bar` with CSV chip and receipt); `.notice` | 04 "Data display", "Data density" |
| `.date-chip` 第一天, `#import` | 2,599 to 3,365 | `.chat-head`; `.msg.in`; `#import-msg` (`.slot-row` with five `.old-file`, `.review-card`, `.review-state`, `.approve`, receipt); `.notice` | 06; 02 element 6; 04 "Empty and error states" |
| `#pro` | 3,365 to 3,953 | `.msg.in`; `#pro-msg` (`.sis-plate`, `.token-strip`, `.ai-list`, `.token-state`, button, receipt); `.notice` | 06; 01 element 2 |
| `#pricing` | 3,953 to 4,693 | `.msg.in` "多少钱？"; one outgoing message with two `.plan`; `.notice`; `.elapsed`; `.composer` | 04 "Pricing display"; framing |
| `footer` | 4,693 to 5,079 | `.trust-line`, `.support-whatsapp`, `.legal` | 04 "Local grounding", "Support channel" |

First-screen check at y under 640, identical in both languages, at rest, under reduced motion and without script: claim 77 to 167; a complete invoice 181 to 473; trial button 575 to 631 carrying the 7-day trial and both prices; language toggle 4 to 48; a second trial button in the top bar. During the opening the invoice is absent for the 200 ms hold and the first 300 ms of the run (measured 521 to 552 ms after the first painted frame); the claim, the button and both prices are there from the first frame.

At 900 and up (measured at 1280 x 800; `rebuild2_rest_1280_zh.png`, `rebuild2_sec1280zh_03.png`, `_05.png`, `_08.png`): `.col` is 1,120 px. First screen: `.hero-grid` in two columns, claim and trial button centred on the stage's height at x 80 to 470; stage x 538 to 1,200, y 77 to 589 (662 x 512, type at 13 px), sheet x 815 to 1,179, with 265 px of thread to its left; under both, `.console` in one row (transport, clients, rates; two rows from 900 to 1,119) and the sample note; the first screen ends at 800. Below: `.tc` is a grid of a 480 px lane (x 80 to 560) and a margin column from x 632. In the margin, level with the asker's question, the episode's heading (`h2`, 30 px, 800; Chinese 700), and under it the note, sticky at 84 px from the top so that it stays beside the attachment while he scrolls through it. Date chips are centred on the lane. The footer keeps the lane and the margin. Document height 5,131 px (Chinese), 5,152 px (English). No sequence changes its timing.

Sample data (fictional, labelled): studio Kite & Reel Studio; clients Lumen Events Sdn Bhd (company; contact Farah), Tanjung Bakery (company; contact Mei Ling), Aria Lim (individual); rates RM 1,800, RM 1,200, RM 900; default total RM 2,700.00; number INV-{year}-014; dates and times from the visitor's clock; chat contacts Ms Chan and Jay.

---

## 6. Sequence sheet

**Cut** = one frame, by a stepped `visibility`, class or attribute change, never opacity. **Hard stop** = linear travel that ends on a frame. **Settle** = on the landing frame the object sits 2 px past its place, on the next it is in place. **Step** = one 64 px jump of the band, every 84 ms.

### S1. The Catch (opening sequence)

- **Trigger:** page load, once. A script in `<head>` adds `s1-pre` before first paint and stamps the time of the first painted frame. The main script builds the timeline, seeks it to 0 (the same frame), removes the class, and starts the clock a fixed 200 ms after that stamp. Fonts are not waited for; if they arrive during the run, the catches are re-measured at the same clock time. If the main script never runs, the head script removes the class after 1.5 s. Replayed by the button on `.cut-rail`.
- **Length:** 2,420 ms. **Start frame (held 200 ms):** the thread alone, no sheet. Subtitle: "聊天记录里，资料到处都是。"

| # | t (ms) | Interval | What happens | Duration | Tags |
|---|---|---|---|---|---|
| 0 | 0 | | The thread runs: 22 steps of 64 px. No bubble or text is drawn; each is its smear | 1,840 | `imagery[0]`, `imagery[1]`, `motion[3]`, R03.1, R03.2, R03.8 |
| 1 | 300 | 300 | **Cut:** the sheet is there, with six labelled empty slots | 1 frame | `motion[1]`, R03.7, R02.3 |
| 2 | 760 | 460 | Catch: "抬头写 Lumen Events Sdn Bhd" has hung in the band since 500; the name leaves it and lands in `.bill-to`, leaning 12 degrees in flight, three bars behind it | 140, hard stop, settle | `motion[2]`, `typography[4]`, R02.1, R02.2, `imagery[7]` |
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
- **Flash:** `tools/rb2_flash.py` on 146 lossless frames at 60 a second: pixels with more than three flashes in a second cover 0.1% of the worst 341 x 256 box (390 and 1280). By a harsher count (more than three luminance changes of 0.10 in a second, opposing or not) 25.7% at 390 and 30.7% at 1,280; the same count on the v2 build gave 65.0%.

### S2. Shuttle (hand transport on `.cut-rail`)

Unchanged: a native range control; dragging sets the time of every animation in S1, both ways; arrow keys step 42 ms; `touch-action: pan-y`. Marks at 12.4, 31.4, 45.5, 56.2, 64.5, 71.1, 76, 78.5, 92.1 and 100%. Tags: `motion[9]`, `key_visual_elements[8]`, `typography[4]`, R02.4.

### S3. Re-cut (the pickers)

Timing unchanged (client 420 ms, rate added 400 or 440, rate removed 330). New: when it ends, everything further down is rewritten for the picked client and the present rates (`renderAll()` calls `syncLater()` and the scroll frame). With no rate the sheet shows the red 草稿 / DRAFT tape, one dashed slot, RM 0.00, no crossing, no block, no machine line. Frames: `rebuild2_client_tanjung_390zh_a.png`, `rebuild2_draft_390zh.png`. Tags: `motion[2]`, `motion[1]`, `motion[8]`, `ornament[3]`, R01.2, R06.5, R06.6.

### S4. Tear-off and drop (`#story-stage`)

- **Trigger:** where the stage stands on the screen (S = its top edge, in px). At 390 x 844: tear from S 339 to 249; drop at S 225 (the reply slot's file bar is then 8 px inside the screen); a pure function of position, so it runs backwards.
- **Start:** the client page. The stub (paper face) with the leaf hanging from it at the perforation, over the earlier filed rows. Below, a dashed outline labelled "PDF".
- **Tear:** over 90 px of scroll the leaf slides 72 px sideways along the perforation, under the thumb.
- **Drop:** at S 225, one linear translate of 136 px down into the outline: 160 ms, hard stop, 2 px past and back on the next frame. On the frame it lands the outline is cut to his outgoing message with a tail and a file bar ("INV-{year}-014.pdf", "1 页 · PDF"). Scrolling back above S 225 lifts it back in 140 ms.
- **Receipt:** at S 171 one grey tick and "已发出"; at S 95 two grey and "已送达"; at S 19 two blue, "已读" and the minute. 76 px between them (9% of the screen height, held between 56 and 84).
- **At 1,280 x 800:** tear 96 px, drop 182 px; the receipts come at S -98, -170 and -242 (72 px apart), all while the file bar is on screen.
- **Draft:** none of it happens; see section 7.
- **Frames:** `rebuild2_story390zh_a.png`, `_b.png`, `_c.png`; `rebuild2_sec1280en_02.png`, `rebuild2_sec1280en_03.png`. **Tags:** `motion[4]`, `motion[1]`, `motion[2]`, `imagery[5]`, `key_visual_elements[6]`, `[7]`, `ornament[0]`, `ornament[2]`, R01.4, R02.5.

### S5. Filed (`#story .stub`)

At S 195 (30 px after the drop) the stub turns over on its long axis (200 ms, linear) from its paper face to "INV-014 · RM 2,700.00 · date · 已归档", the same dark row as the earlier invoices beneath it. Above S 195 it turns back. Tags: `motion[4]`, R06.1, `ornament[4]`.

### S6. Month (`#reports .month-bars`)

Scroll position; each month's two bars grow from the baseline at p = 0, .20, .37, .51, .62, .70, then a hold. At .92 the "014" tag drops onto the current month's bar (137 ms, hard stop, settle) and its figures step in two cuts, but only if the sheet is not a draft. The message's receipt does not change. A tap on a month is a cut of the three figures and an 80 ms move of the bracket. Tags: `motion[4]`, `motion[1]`, `key_visual_elements[9]`, R02.4, R04.6.

### S7. Episode cut (`body[data-ep]`)

When an episode's first line passes the middle of the screen, the ground of the whole page and the top bar change on one frame (`#0B1216`, `#0B2346`, `#2A1606`), and the date chip of the episode he is now in is cut from bubble grey to paper white. Scrolling back cuts back. Without script each section carries its own ground. Frames: `rebuild2_cut_390.png`, `rebuild2_cut_1280_dayone.png`. Tags: `surface_treatment[1]`, `color_palette[8]`, `[12]`, `[13]`, R03.5.

### S8. Sort (`#import`)

Unchanged in timing: five files leave the heap at p = .06, .25, .40, .51, .59, each 157 ms with a settle and a 160 ms flip to its read face ("读完"); a hold; three fields wiped in at .72, .80, .86. End: "未保存 · 等你核对" under a red tape label. The message's receipt does not change. Tags: `motion[4]`, `motion[2]`, `motion[8]`, R06.1, R06.3, R02.4, R02.6.

### S9. Green wrap (`#import .approve`)

A tap wipes the green band across the card (217 ms, settle). On its last frame the tape label under the card is cut from red 未保存 to green 已保存 and the button to 撤销. A second tap wipes it off (160 ms). The ticks are not touched. Frame: `rebuild2_taps_390zh.png`. Tags: `motion[8]`, `motion[7]`, R06.4, R06.7, `ornament[5]`.

### S10. Token (`#pro`)

Revoke (300 ms): one pen stroke through the strip, then the strip is wiped back; the tape label is cut from blue 已连接 to red 已撤销. Create (180 ms): the strip is wiped out again. The ticks are not touched. Tags: `motion[8]`, `motion[1]`, R01.2, R06.2, R06.7.

### S11. Language cut (`.lang-toggle`)

The thumb travels 36 px in 80 ms; on the frame it stops every string is replaced and `lang`, the title and the description are updated. Before the cut the block nearest the reading line (40% down the screen) is found among whole blocks (`ANCH`: a message, a stage, a note, the plans, a footer paragraph); after it, the page is scrolled so that the same point of that block is on the reading line again. Measured (`tools/rb2_audit.js`, every 100 px): at 390 the point moves at most 0.5 px and at 1,280 at most 1.0 px; the block's top edge can move up to 74 px where the block itself grows in English (the plans); scroll position is restored exactly after two switches at every position. Frames: `rebuild2_lang_390_a.png`, `_b.png`. Tags: `motion[10]`, `motion[7]`, `motion[1]`.

### S12. Clock stamps and the last line

At load, each `[data-ago]` time is written as his clock minus its minutes (41, 24, 20, 19 in the hero thread; 20 on the asker's "发票呢？"), never earlier than midnight. The first time a note comes on screen its time is cut in to the second; an asker's bubble and a receipt get the minute. When the composer comes on screen the line above it is cut once to how long he has been on the page. Tags: `motion[1]`, `ornament[5]`, R03.3.

---

## 7. States

| Element | States, each with a shape or a word, never colour alone |
|---|---|
| `.cta-trial`, `.composer` | rest; pressed (1 px drop); focus (outline) |
| `.lang-toggle` | 中文 picked; EN picked (thumb position) |
| `.picker-client .tile` | available (knob up); picked (knob down beside the padlock, "已选", 2 px inset edge); pressed; focus |
| `.picker-rate .rstrip` | available (solid tape); added (dashed outline, "已加"); pressed; focus |
| `#sheet`, `#story .leaf` | made (crossing, record block, machine line); draft (red 草稿 / DRAFT tape, one dashed slot "选一个价目", RM 0.00, none of the three marks) |
| `#story .chat-head`, `.sc-client`, `.stub`, `.past-row` | one set per client: Lumen (F, Farah), Tanjung (M, Mei Ling), Aria (A); company or individual |
| `.stub` | stub face (paper, client code, 存根); filed face (dark, 已归档); in a draft, absent, its place a dashed slot "存根 · 选了价目才有 / STUB · NEEDS A RATE" |
| `.doc-bubble` | empty outline "PDF"; in a draft "PDF · 选了价目才有 / PDF · NEEDS A RATE"; file; sent (one grey tick, word); delivered (two grey, word); read (two blue, word, time) |
| `#report-msg`, `#import-msg`, `#pro-msg`, the plans message | one receipt, fixed: two blue ticks, "已读 / Read", the minute it came on screen |
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
5. **Scroll.** No listener cancels wheel or touch events; no snapping; nothing is pinned except the top bar (and, at 900 and up, each margin note is sticky inside its own episode, which moves no content and takes no scroll).
6. **Nothing runs on its own clock after it lands.** No loops. S1 is 2,420 ms; every other timed move is 440 ms or less.
7. **One entrance is never applied to every block.** Messages, notes, headings, prices and lists do not animate.
8. **Reduced motion:** no autoplay; every sequence at its end state from first paint; taps are cuts; the ground still cuts.
9. **No flashing above three a second** over more than a quarter of a 341 x 256 box: measured 0.1% (S1).
10. **Rules taken from `claude_anti_defaults.md` and not claimed as derivations in section 4:** no gradient fog, glow, blur or translucent panels (8, 9); no equal feature cards (10); no fade-up or its slide equivalent on every block (1); no even stagger (2); nothing readable waits more than 200 ms for an entrance except the sheet in S1 (3).
11. **Where the constraint forces a change of habit:** a passing message → not drawn, its drag drawn in its place by a cut; the sheet arriving → a cut; the leaf leaving → a slide and a fall; a receipt changing → a cut; an episode changing → a cut of ground and chip; the language → a cut with the reader's place held; reduced motion → the finished frame.

---

## 9. Hard limits carried into the build

1. No matrix code or anything like one, and none of the words the return-block entry forbids, or their Chinese equivalents, anywhere in the file. The record block's square holds a page count.
2. No cheque, no bank name, no account number or unlabelled digit string shaped like one, no mark or word about payment on the sheet. The phrase between the strokes is "开好了" or "READY". The machine line's groups are labelled.
3. No claim that SIS sends anything or reports delivery or reading. Ticks appear only on his own chat messages, as that chat's receipt; no tick changes with any SIS state; the note under the PDF says whose ticks they are.
4. No photographs, no generated images, no raster data URIs. Inline SVG and CSS only.
5. Nothing depends on sound.
6. No claim beyond `context/facts.md`; exact prices only. **Every place sample figures appear carries a visible sample label in both languages:** yellow tape on `#sheet`, `.leaf`, `#report-msg`, `#import-msg`, `#pro-msg`; a plain label on `.sis-card` and on the three `.chat-head` rows; `.sample-note`.
7. No long dash characters in copy.
8. Simplified Chinese by default with an English toggle; every string in both, avatar initials and the meta description included.
9. Trial button, both prices and a complete invoice inside the first 640 px at 390, at rest and under reduced motion, in both languages.
10. One self-contained file; one external request (the recorded Google Fonts stylesheet); no sideways scroll from 320 to 1,440.
11. WCAG AA contrast on all three grounds, state never by colour alone, touch targets at least 44 px (the top-bar button included), visible focus.

---

## 10. Open items

1. **Palette gate is still provisional** (estimated tape values).
2. **Thread colours, the light, the streak colours and the two later grounds are starting values.** The grounds now have sources and a visible difference of hue; whether a videographer reads 1.21 to 1 as a cut is for the critic and the ICP to judge in pixels.
3. **Three anchors have no file of their own** (03, 04, 05).
4. **The streak has been judged from frames** (video at 25 a second, lossless stills, a 60 a second flash count), not by a person on a phone. In a still, a smear is a hanging comb of bars; whether twelve of them a second read as speed is a judgment about motion that frames only approximate.
5. **The opening has no invoice for about 520 to 550 ms** after the first painted frame.
6. **Heights differ between the two languages**; the reader's place is held by the anchor of S11.
7. **Ticks under the report, the import, the token and the plans are fixed at "read".** They no longer signal anything; they are there because an answered message in that app has them.
8. **Desktop was composed and photographed at 1,280, 1,024 and 900**, not at 1,440 or wider (overflow was measured at 1,440).
