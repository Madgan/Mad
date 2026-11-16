# Build notes: v1 (first build of SIS home page version 2)

Built 2026-11-16 from `borrowings_v1.md`. Output: `/home/user/Mad/.inhabited/designer/index.html`, one self-contained file (110,570 bytes, about 1,330 lines), plain HTML, CSS and JavaScript, no library. The only external request is the recorded Google Fonts stylesheet; every other URL is a link to sistudio.app.

## 1. What is built

The page is one vertical thread at night with one white sheet on it.

- **Top bar** (`header.topbar`): wordmark, `.lang-toggle`, sign in, compact `.cta-trial`. Sticky, solid, no blur.
- **Hero** (`#hero`): `.fwd-label`, `.hero-claim`, `.hero-stage` (`.thread-band` with `.strip`, two `.ghost` copies, wallpaper and still grain; `.invoice-sheet` with `.crossing`, `.from`, `.meta`, `.bill-to`, `.lines`, `.total`, `.total-words`, `.terms`, `.record-block`, `.machine-line`, six `.slot-empty[data-slot]`, the sample `.tape-label`), `.stage-caption`, `.cta-trial`, `.trial-terms`, `.cut-rail`, `.picker-client`, `.picker-rate`, `.sample-note`.
- **Story** (`#story`): `.msg[data-beat="pdf"]`, stage with `.stub`, `.leaf`, `.perforation`, `.doc-bubble` (with `.ticks`), `.client-head`, `.slot-row` of four `.slot-tile`; `.msg[data-beat="record"]`.
- **Month end** (`#reports`, after `.date-chip`): `.report-screen` with `.month-bars`, detail row, ranked clients, CSV tab.
- **Day one** (`#import`, after `.date-chip`): five `.old-file`, `.slot-row`, `.review-card`, `.wrap-checked`, `.review-state`, `.approve`. Then `#pro`: `.sis-plate`, `.token-strip`, `.ai-list`, `.token-state`.
- **Pricing** (`#pricing`): two `.plan[data-plan]`, then `.elapsed` and `.composer` with `.composer-send`.
- **Footer**: `.trust-line`, `.support-whatsapp`, legal links.

All twelve sequences of section 6 are built:

| # | Built as | Checked in |
|---|---|---|
| S1 The Catch | 2,420 ms. Web Animations created paused and seeked from one master clock (`TL`), text cuts written by the same clock. Band: 21 steps of 6 em (60 px), `steps(21, end)`, 1,820 ms; two ghosts at fixed 0.38 and 0.2, one and two steps behind. Catches at 420, 860, 1,200, 1,460 (140, 140, 120, 120 ms, linear, 12 degree lean, 2 px settle for one frame). Total cuts at 1,660, 1,720, 1,780. Strokes 1,900 and 2,040 (110 ms each), phrase cut at 2,150, record block wipe 2,240 to 2,420. | `sheet_s1_a/b/c.png`, `sheet_s1_en.png`, `sheet_rt_a/b.png` (wall clock), `s1_1280_t1250.png` |
| S2 Shuttle | Native range input restyled; sets the S1 clock both ways; arrows step 42 ms, Home and End jump; readout in Kanit, italic while moving; `touch-action: pan-y`; replay resumes from the current frame. Reduced motion snaps to the nine marks. | `sheet_s2.png`, `sheet_rt_drag.png`, `sheet_rm2.png` |
| S3 Re-cut | Client 420 ms, rate added 400 ms (440 from an empty sheet), rate removed 330 ms, no rate left. Interrupts S1 by a cut. | `sheet_s3_*.png` (held on the page clock), log in section 5 |
| S4 Tear-off and drop, S5 Filed | Pure function of scroll position, both directions; thresholds as specified; flip at 0.94, 200 ms linear. | `sheet_s4_down_a/b.png`, `sheet_s4_up.png` |
| S6 Month | Bars by `scaleY` from scroll position; tag "014" drops at 0.9 and the figures step in two cuts; month tap is a cut with an 80 ms bracket move. | `sheet_s6.png`, `sheet_s6_up.png` |
| S7 Episode cut | `.date-chip` sitting on the line where the ground tone changes. Nothing moves. | walks |
| S8 Sort | Five files at 0.12 to 0.68 (157 ms travel with settle, then a 160 ms flip), three field wipes at 0.78, 0.85, 0.92 (100 ms). Reverses. | `sheet_s8_down.png`, `sheet_s8_up.png` |
| S9 Green wrap | 217 ms clip wipe with 12 px travel and settle; state line and button cut on the last frame; second tap wipes it off in 160 ms. | `sheet_s9.png` |
| S10 Token | Strike 90 ms, wipe back to the plate 180 ms after a 120 ms hold; create 180 ms. | `sheet_s10.png` |
| S11 Language cut | Thumb travels 36 px in 80 ms, every string is cut on the frame it stops. Document height is identical in both languages (4,530 px at 390, 4,432 px at 1280), so nothing below a string jumps. | `sheet_lang.png` |
| S12 Clock stamps | `.msg .time` and `.elapsed` are cut once when first on screen. | walks |

## 2. Where the constraint forced a change of habit

- A product object arriving is caught, wiped or already there. No element fades in.
- The language switch is a cut on the frame the thumb stops.
- Hover is an underline; pressed is a 1 px drop and a border going 2 px to 1 px; focus is an outline (on the paper tiles an inset ring, because their corner clip would cut an outline off).
- A tick changes colour by a cut. A caption changes by a cut. A state line changes on the last frame of the move that caused it.
- Reduced motion and scripts disabled both give the finished frame.
- The word `opacity` occurs twice in the file, both as fixed values on the two ghost strips (0.38 and 0.2). Other fixed transparency: the alpha row of the still grain filter (0.07, never animated). No colour in the file uses an alpha channel.
- CSS transitions: two, both on `transform` only (the tile flips). No `transition: all`, no `@keyframes`, no CSS animation.

## 3. Deviations from `borrowings_v1.md`, and why

1. **Scroll-linked progress uses the `requestAnimationFrame` reader only.** `animation-timeline: view()` is not used. One code path, the same in every browser, and it can be captured deterministically.
2. **Mechanism of S1.** Section 8.1 allows Web Animations with backward fill. That is what moves; the text cuts (caption, total figure) are written by the same clock in script, because a cut of text is not an animatable property.
3. **Band stretch is applied to each bubble** (scaleY 1.2 about its own centre), not to the strip as a whole, so a bubble keeps its position and the catch leaves from the right place.
4. **Ghost arrival.** Both ghosts hold one step after the band stops and are then cut under the strip (the spec says "1 step").
5. **Totals and the no-script frame.** The markup carries the default finished frame (RM 2,700.00 and the figures that follow from it) so the page is complete with scripts disabled. On load, script recomputes every figure from the line amounts and overwrites the markup: sheet total, amount in words, machine line, stub, filed tile, earlier tiles, the month bar and net profit, client ranking. Two rules meet here (finished frame without script; totals computed, never typed) and this is how both are kept.
6. **Story stage end frame.** Two dashed, labelled outlines (`.origin`) mark where the stub and the leaf were. Without them the finished frame had 213 px of nothing. Not in the spec.
7. **Green wrap placement.** A 30 px band at 4 degrees across a 358 px card cannot cover the last tag without cutting through a line of text unless the card has room. The card is 202 px tall (was implied shorter), the tags sit on the value line, the sample address is shortened to "Puchong, Selangor", and a dashed labelled slot (`.wrap-slot`) shows where the wrap will go. The band covers the last tag and the slot, and no text is cut.
8. **Stage heights.** Import stage 428 px (spec 410). Pro stage 294 px including the state line and the button (spec 200 for the stage alone). Report screen 310 px (spec 300).
9. **Report figures are printed under the columns**, not on the bars, so twelve figures fit at 390 px without touching.
10. **Months come from the visitor's clock** (the last six months ending this month). The spec names November; the invoice date also comes from the clock, so the two now agree in any month.
11. **A removed rate also re-wipes the record block** with the new time (the spec lists the re-wipe for add and client change only).
12. **English hero line** is "Pick a client, a rate. / Invoice done." so it holds two lines at 30 px. English rate strips use short forms ("Event video, 1/2 day"); the sheet carries the full service name.
13. **A line next to the client tiles** (`.pk-hint`): "saved once, picked on your next bill". From `facts.md`. Hidden under 380 px.
14. **Footer trust line** leaves out the word "payments" from the list of stored data, to stay clear of hard limit 2.
15. **Flips use a CSS transition on `transform`** (200 ms and 160 ms, linear). Every other timed move is a Web Animation.
16. **Test handles.** `?autoplay=0` stops the opening sequence from starting by itself, and `window.SIS` (`seek`, `play`, `end`, `hold`, `recut`, `flush`) steps the sequences on the page's own clock. Used for the frame captures.
17. **Thresholds under 380 px** (not in the spec): the claim is set smaller and wraps, the trial button ends at y 585 and the terms at y 627, still above 640.
18. **English wording avoids the word "invoice" directly after a word ending in "e"** (open item 7), which is why the lane says "bill" in two places.

Hooks: every hook named in the spec is used unchanged. Added hooks: `.strip`, `.rest`, `.bubble.pass`, `.catch-layer`, `.fly-layer`, `.fly`, `.origin`, `.wrap-slot`, `.pk-hint`, `.rstrip`, `.tile`, `.tile-in`, `.face`, `.mcol`, `.bracket`, `.tag014`, `.act`, `.slab`, `.stack`.

## 4. Known weaknesses, stated plainly

1. **The sheet's small print.** At 390 px the sheet is 252 px wide, as specified. Labels are 8 px, sub-lines 7.6 to 8 px, body 9.5 to 11 px. Sharp at phone pixel density, rough in a 1x screenshot. The leaf at 0.72 and the PDF thumbnail at 0.24 are pictures of the same sheet and are not meant to be read (`aria-hidden`).
2. **Blank lines inside Chinese messages.** Each message keeps the height of its longer language, and English runs longer, so several Chinese bubbles carry one empty line. The plan cards carry empty space under their Chinese lists for the same reason.
3. **The story stage's finished frame** still has a large dashed area at the top.
4. **The smear is judged from stills.** Two tinted ghosts and a 1.2 stretch in a 122 px lane. Whether it reads as step-printing at 12 frames a second on a real phone has not been seen by a person.
5. **Colour.** Flat night ground, paper, four tape colours, thread green and tick blue. It may read plainer than the live page's renders (open item 2).
6. **First paint.** The finished frame shows for up to 400 ms before S1 cuts to its start frame. That is the specified trigger; on a fast connection it reads as a single flash of the finished sheet.
7. **Desktop.** The message column is short beside tall stages, so the left side of each later beat is empty below the message.
8. **English passing bubbles** can overlap one another during the 1.8 s run.
9. **Chromium only.** Not opened in Safari or Firefox. The file uses Web Animations with `visibility`, `clip-path` and `stroke-dashoffset` keyframes, `steps()` per keyframe, 3D flips with `backface-visibility`, and one static `mix-blend-mode` on the toggle labels.
10. **Short viewports.** Under about 700 px of height the top of the sheet is under the top bar while the rate strips are on screen.
11. **Sample data scale.** Monthly sales are a sample series; the client ranking is summed from each sample client's listed invoices. The two are not reconciled to one ledger.
12. **Palette gate** remains provisional (estimated tape values), as recorded in section 1 of the borrowings.

## 5. Mechanical checks (run on the final file)

- `document.documentElement.scrollWidth`: 390 at 390 x 844 and 1280 at 1280 x 800, in both languages. Also equal at 320, 360, 430, 768 and 1440.
- Console errors and page errors: none in any run (rest, S1 stepped and in real time, S3, scroll sequences, taps, reduced motion, keyboard).
- First screen at 390 px, Chinese and English identical: claim y 81 to 173; stage 181 to 485; sheet 185 to 481 (x 122 to 374); caption 489 to 507; trial button 515 to 567; terms with both prices 573 to 609; rail 621 to 665; clients 677 to 807; rates 819 to 881; sample note 889 to 907. Compact trial button in the top bar y 8 to 44.
- Text searches, case-insensitive, whole file: LHDN 0, IRBM 0, MyInvois 0, "e" plus optional hyphen or space plus "invoic" 0, "validated" 0, "qr" 0, cheque 0, payee 0, bearer 0, PAID 0, long dashes 0, the three Chinese equivalents 0, audio, video, img and raster data URIs 0.
- `opacity`: 2 occurrences, both fixed. `transition: all` 0. `@keyframes` 0. Scroll snapping 0. Wheel or touchmove listeners 0. The one `preventDefault` is on the rail's arrow keys.
- Touch targets under 44 px at 390: none.
- Keyboard: every control shows a focus mark (`sheet_focus_a/b.png`); Enter and Space operate the pickers.
- Totals, read back from the page after each change: 2,700.00 (default), 2,700.00 after a client change, 3,900.00 after adding RM 1,200, 3,000.00 after removing RM 900, 0.00 with no rate (draft state), 1,800.00 after adding one. In each case the figure equals `SIS.total()`, and the words and the machine line agree.
- Reduced motion: no autoplay; first screen is the finished frame; taps are cuts; scroll sequences show their end state (`sheet_rm.png`, `sheet_walk390rm_a/b.png`). Scripts disabled: the finished frame throughout (`sheet_nojs_a/b.png`).

## 6. Screenshots

Folder: `/home/user/Mad/.inhabited/designer/screens/` (178 files). Scripts: `/home/user/Mad/.inhabited/tools/` (`capture_all.sh` regenerates everything).

How they were read: the 390 px frames were opened as contact sheets (`sheet_*.png`), which place the saved frames side by side at full resolution with no downscaling; the 1280 px files were opened one by one. Desktop frames that were captured but not opened were deleted, so the desktop sequences are sampled at fewer positions than the phone ones. Two small changes came after the last full capture: one footer line (the registration number no longer breaks across lines) and the colour of the toggle labels while the thumb travels (at rest the toggle looks the same). `walk390zh_*` and `walk1280zh_*` were retaken after the footer change; `lang_*` and `sheet_lang.png` after the toggle change. Every other file predates those two changes and is otherwise the final build.

Contact sheets:
- `sheet_focus_a.png`
- `sheet_focus_b.png`
- `sheet_lang.png`
- `sheet_nojs_a.png`
- `sheet_nojs_b.png`
- `sheet_rest_390.png`
- `sheet_rm.png`
- `sheet_rm2.png`
- `sheet_rt_a.png`
- `sheet_rt_b.png`
- `sheet_rt_drag.png`
- `sheet_s10.png`
- `sheet_s1_a.png`
- `sheet_s1_b.png`
- `sheet_s1_c.png`
- `sheet_s1_en.png`
- `sheet_s2.png`
- `sheet_s3_client.png`
- `sheet_s3_client2.png`
- `sheet_s3_none.png`
- `sheet_s3_rate.png`
- `sheet_s3_rate2.png`
- `sheet_s4_down_a.png`
- `sheet_s4_down_b.png`
- `sheet_s4_up.png`
- `sheet_s6.png`
- `sheet_s6_up.png`
- `sheet_s8_down.png`
- `sheet_s8_up.png`
- `sheet_s9.png`
- `sheet_walk390en_a.png`
- `sheet_walk390en_b.png`
- `sheet_walk390rm_a.png`
- `sheet_walk390rm_b.png`
- `sheet_walk390zh_a.png`
- `sheet_walk390zh_b.png`

Individual frames:
- `focus_01_skip_390.png`
- `focus_03_toggle_390.png`
- `focus_05_topcta_390.png`
- `focus_06_herocta_390.png`
- `focus_07_replay_390.png`
- `focus_08_rail_390.png`
- `focus_10_tile_390.png`
- `focus_12_strip_added_390.png`
- `focus_13_strip_free_390.png`
- `focus_replay_390.png`
- `lang_0_zh_390.png`
- `lang_1_mid_390.png`
- `lang_2_en_390.png`
- `nojs_1_390.png`
- `nojs_2_390.png`
- `nojs_3_390.png`
- `nojs_4_390.png`
- `nojs_5_390.png`
- `nojs_first_390.png`
- `rest_1280_en.png`
- `rest_1280_zh.png`
- `rest_390_en.png`
- `rest_390_zh.png`
- `rm_first_390.png`
- `rm_import_early_390.png`
- `rm_import_saved_390.png`
- `rm_rail_snap_390.png`
- `rm_story_early_390.png`
- `rm_tap_client_390.png`
- `rt_drag_mid_390.png`
- `rt_drag_released_390.png`
- `rt_load_0_390.png`
- `rt_load_1_390.png`
- `rt_load_2_390.png`
- `rt_load_3_390.png`
- `rt_load_4_390.png`
- `rt_load_5_390.png`
- `rt_load_6_390.png`
- `rt_load_7_390.png`
- `rt_resume_390.png`
- `s10_0_before_390.png`
- `s10_1_during_390.png`
- `s10_2_revoked_390.png`
- `s10_3_created_390.png`
- `s1_1280_t1250.png`
- `s1_390_t0000.png`
- `s1_390_t0300.png`
- `s1_390_t0500.png`
- `s1_390_t0900.png`
- `s1_390_t1250.png`
- `s1_390_t1500.png`
- `s1_390_t1700.png`
- `s1_390_t1850.png`
- `s1_390_t2000.png`
- `s1_390_t2300.png`
- `s1_390_t2500.png`
- `s1_390en_t0500.png`
- `s1_390en_t1250.png`
- `s1_390en_t2000.png`
- `s1_390en_t2500.png`
- `s2_focus_key_390.png`
- `s2_knob_1300_390.png`
- `s2_knob_2100_390.png`
- `s2_knob_600_390.png`
- `s3_0_before_390.png`
- `s3_1_client_after_390.png`
- `s3_1_client_t060_390.png`
- `s3_1_client_t200_390.png`
- `s3_1_client_t290_390.png`
- `s3_1_client_t360_390.png`
- `s3_2_add_after_390.png`
- `s3_2_add_t080_390.png`
- `s3_2_add_t215_390.png`
- `s3_2_add_t330_390.png`
- `s3_3_remove_after_390.png`
- `s3_3_remove_t060_390.png`
- `s3_3_remove_t150_390.png`
- `s3_3_remove_t240_390.png`
- `s3_4_none_after_390.png`
- `s3_4_none_t150_390.png`
- `s3_4_none_t260_390.png`
- `s3_5_redraw_after_390.png`
- `s3_6_realtap_after_390.png`
- `s4s5_down_0_p000_390.png`
- `s4s5_down_1_p004_390.png`
- `s4s5_down_2_p030_1280.png`
- `s4s5_down_2_p030_390.png`
- `s4s5_down_3_p052_390.png`
- `s4s5_down_4_p060_390.png`
- `s4s5_down_5_p068_390.png`
- `s4s5_down_6_p082_390.png`
- `s4s5_down_7_p093_390.png`
- `s4s5_down_8_p100_390.png`
- `s4s5_up_0_p082_390.png`
- `s4s5_up_1_p030_390.png`
- `s4s5_up_2_p000_390.png`
- `s6_down_0_p010_390.png`
- `s6_down_1_p050_1280.png`
- `s6_down_1_p050_390.png`
- `s6_down_2_p086_390.png`
- `s6_down_3_p100_390.png`
- `s6_tap_after_390.png`
- `s6_tap_before_390.png`
- `s6_up_0_p050_390.png`
- `s6_up_1_p010_390.png`
- `s8_down_0_p005_390.png`
- `s8_down_1_p030_390.png`
- `s8_down_2_p060_1280.png`
- `s8_down_2_p060_390.png`
- `s8_down_3_p082_390.png`
- `s8_down_4_p100_390.png`
- `s8_up_0_p060_390.png`
- `s8_up_1_p030_390.png`
- `s8_up_2_p005_390.png`
- `s9_0_before_390.png`
- `s9_1_during_390.png`
- `s9_2_after_390.png`
- `s9_3_undone_390.png`
- `walk1280zh_00.png`
- `walk1280zh_01.png`
- `walk1280zh_02.png`
- `walk1280zh_03.png`
- `walk1280zh_04.png`
- `walk1280zh_05.png`
- `walk390en_00.png`
- `walk390en_01.png`
- `walk390en_02.png`
- `walk390en_03.png`
- `walk390en_04.png`
- `walk390en_05.png`
- `walk390rm_00.png`
- `walk390rm_01.png`
- `walk390rm_02.png`
- `walk390rm_03.png`
- `walk390rm_04.png`
- `walk390rm_05.png`
- `walk390zh_00.png`
- `walk390zh_01.png`
- `walk390zh_02.png`
- `walk390zh_03.png`
- `walk390zh_04.png`
- `walk390zh_05.png`
