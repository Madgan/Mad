# Build notes: v2 (rebuild after critic cycle 1)

Rebuilt 2026-11-16 in answer to `v1_critic/critic_verdict_1.md` (scores 6, 7, 7, 5; hard limit 2 failed). Output: `/home/user/Mad/.inhabited/designer/index.html`, one self-contained file, 127 KB, 1,494 lines, plain HTML, CSS and JavaScript, no library. The only external request is the recorded Google Fonts stylesheet. The pre-rebuild file is untouched at `designer/history/index_build1_before_critic1.html`. The manifest for this build is `borrowings_v2.md` (`borrowings_v1.md` was not edited).

Entries re-opened from disk before deciding: `references/seed_night_mail_1936.md`, `references/seed_crossed_cheque_ac_payee.md`, `references/domain_card_labels_camera_tape.md`, `references/domain_myinvois_validated_einvoice_qr.md`, and in `sampling.md` the sections Designer locked, Constraint locked, both competitor tables, Typography locked and Synthesis; also `framing.md`, `inspiration.md`, `claude_anti_defaults.md`, the critic's frames `zoom3x_s1_t0900_stage.png`, `sheet_rt_zh_a.png`, `sheet_walk_zh_a.png`, and `context/live-mobile-sheet.jpg`.

## 1. What was rebuilt, factor by factor

### Fits framing (6)

- **The first screen.** The thread now runs across the whole stage (390 x 370) at message size, 13 px, and the sheet is laid over it. The opening shot is the thread alone, full stage: a question, a forwarded message, a voice note with its line of text, a reply with ticks, a screenshot of a screenshot. At 340 ms the sheet arrives by a cut. At rest the thread shows on the sheet's left (87 px: the ends of five bubbles, the nested screenshot whole), in a 70 px band under it (two whole messages: "发票呢？ 23:02" and "等下，我找找 23:02" with ticks) and in the right gutter.
- **Below the hero.** The caption track is gone. Each episode is a chat: date chip, a chat header naming a sample contact, the asker's grey bubble, the product view as an attachment in an outgoing green bubble with a forwarded header ("↪ SIS · 报表"), a file bar and ticks, then one centred notice on near-black that carries the facts. Three chats: a client ("发票呢？"), an accountant ("这个月的数字呢？"), a fellow shooter ("你那堆旧单怎么办", "我自己的 AI 能接进去吗？", "多少钱？"). The last episode has him answering a peer, which closes the forwarded loop the page opens with.
- **Ticks do work.** On each attachment they are the episode's end signal: the PDF goes sent, delivered, read as he scrolls; the report's tick turns blue when number 014 lands on the month; the import's stays one grey tick, "还没保存", until he taps approve; the token's follows the token.
- **Finish.** One hard-edged shaft of light across the hero thread (`.beam`, a flat colour with a fixed screen blend, so bubbles passing under it are lit and leave it by a hard edge), a hard shadow under the sheet, saturated streak colours, wallpaper over the whole page, and three night grounds. No gradient, no glow, no glass.

### Fits sampled inputs (7)

- **Two speeds (R03.1, R03.2).** While the band runs every bubble stretches to 1.5 and trails two copies, 22 and 47 px off the 64 px step, stretched 2.6 and 3.6 times along the travel, in tick blue and thread green at fixed 0.6 and 0.42, cut on and cut off. The sheet is never transformed.
- **Hard cuts between episodes (R03.5).** No longer a static chip: as a date chip passes mid-screen the whole ground and the top bar change on one frame (`#0B1216`, `#081530`, `#1B1208`), and back.
- **The cut as arrival (R03.7).** The sheet itself arrives by a cut.
- **The catch (R02.1).** Chips are 12 to 14 px and travel roughly 150 to 250 px up the sheet in 120 to 140 ms, each with two trailing copies; amounts are Kanit italic in flight.
- **The pouch that hangs still (R02.2, new).** Each source message is cut into the band under the sheet and holds there, sharp, for 190 to 260 ms while the thread streaks behind it; then its fragment is taken. The client's name comes from her grey message, the rates from his own green ones.
- **Tempo (R02.4).** S1 intervals 420, 340, 260, 200, 160, 120, then two long beats and the hold. The same idea now runs S6 and S8.
- **Lock switch (R06.5).** A 12 x 36 px track with an 18 px knob and a padlock drawn at the lower end.
- **Log.** All 21 pending evidence cells are filled in `borrowings_v2.md` section 2.

### Fits competitor judgment (7)

- "Product framing on a phone": the sheet's smallest text is 11 px (name 14, rows 12, total 18); the leaf in `#story` is the same sheet at full size. The page-wide audit finds 0 visible text runs under 11 px (v1: about 150).
- "Data density": the report prints nothing under the bars; one month's three figures at 14, 14 and 26 px; the ranking shows order and count.
- "Layout": four blocks above the 640 px line; the transport starts at 645.
- Every row in both tables has a build location, `diverge` rows included.

### Fits axis manifestation (5)

`motion[3]` no longer carries the frame rate; `motion[9]` re-derived from the thumb-native thread and the constraint; `surface_treatment[0]` rewritten with its designer source, and the anti-defaults rule moved to section 8 as a rule; `ornament[3]` is now true of the pixels (bowed strokes, a hook, a flick, two widths). Entries were also updated where the build changed. 82 entries, framing cited in 30 (37%).

### Hard limits

- **Limit 2 (failed in cycle 1).** A visible sample label, in both languages, on `#sheet`, the leaf, the client page card, the report message, the import message, the Pro message and each chat header; `.sample-note` widened.
- **Limit 1 risk.** The notice under the PDF says sending is something he does in his own chat and that the ticks belong to his chat app, not to SIS.
- **Limit 4 watch.** The machine line's groups are labelled NO, DATE, SEN.

### Attractor items

- **First paint.** `<head>` script sets `s1-pre` before first paint when motion is allowed; the stylesheet draws the start frame; the main script takes it over. Failsafe: the class is removed after 1.5 s if the main script never runs.
- **Even stagger.** Months at p 0, .20, .37, .51, .62, .70 then 014 at .92; files at .06, .25, .40, .51, .59, a hold, fields at .72, .80, .86.
- **Story.** Progress starts when the leaf's bottom edge is on screen. The leaf slides 40 px along the perforation and becomes the outgoing message where it stands; the stub travels down the chat margin. No dashed outlines in the end state.
- **Copy.** Trial said once in the first screen; English headline "Pick a client. Pick a rate. / Invoice done."; "PDF, one record" once, on the record block.
- **Small.** Sample label ends at x 366; `.signin` 44 px wide.

## 2. Deviations from the borrowings

1. **The 252 px sheet of v1 section 5 is abandoned.** Sheet 280 x 292 over a full-stage thread; stage 394 px (was 304). Height came from putting the caption inside the stage and the terms inside the button.
2. **The sheet is absent from the opening shot** and arrives by a cut at 340 ms. v1 had it present with empty slots from t = 0. The pigeon-holes still appear, from the cut.
3. **Terms, the attention line and the bank-details line are not on the first-screen sheet.** They are on the full leaf in `#story`.
4. **Date and number arrive by a wipe**, not a catch (the system writes them). Three catches, not four.
5. **The trial terms are the second line of the trial button**, not a line under it. Hook `.trial-terms` kept.
6. **Grey caption messages became notices**; hooks renamed as logged in `borrowings_v2.md` section 3. `.slab`, `.origin`, `.csv-tab`, `.client-head` removed.
7. **The PDF in the thread is the leaf at full size**, not a 0.24 thumbnail.
8. **Language heights are no longer equalised.** Chinese bubbles had blank lines. The reader's place is held by a scroll correction in the same frame as the language cut (measured 0 to 1 px).
9. **Plans sit inside one outgoing message**, unequal in length; their buttons read "试用 Basic" and "试用 Pro".
10. **The first S1 interval (0 to the cut, 340 ms) is shorter than the next (420).** The shortening run starts at the cut.
11. **Bubbles in the hero thread start 12 px from the edge**, as scenery behind the sheet; the two whole messages under the sheet also start at 12 and end at 378.
12. **Desktop.** Below the hero the thread stays one centred column of 510 px; v1 used two columns.
13. **Test handles** kept: `?autoplay=0`, `window.SIS` (`seek`, `play`, `end`, `hold`, `recut`, `flush`, `pickClient`, `toggleRate`, `total`), plus `SIS.progress`.

## 3. Mechanical checks (final file)

- **Opacity:** the word occurs 5 times, all fixed values: `.ghost` .6 and .42, `.catch.g1` .6, `.catch.g2` .42, and `stroke-opacity` .045 in the wallpaper tile. Also fixed: grain alpha .07 in an SVG filter. `@keyframes` 0. `transition: all` 0. CSS transitions: 2, both on `transform` (the flips); 2 more rules set `transition: none`. Animated by script: `transform`, `clip-path`, `stroke-dashoffset`, `visibility` only. Two fixed blend modes (`.beam` screen, toggle labels difference).
- **Forbidden words, case-insensitive, whole file including comments and class names:** LHDN 0, IRBM 0, MyInvois 0, "e" plus optional hyphen or space plus "invoic" 0, "validated" 0, "qr" 0 (a `Math.sqrt` was replaced by `Math.hypot` to keep it at 0), cheque 0, payee 0, bearer 0, paid 0, the three Chinese equivalents 0, long dashes 0, credit 0, `<img` 0, `<audio` 0, `<video` 0, raster data URIs 0, `rgba` 0, scroll snap 0, wheel or touchmove listeners 0. One `preventDefault`, on the rail's arrow keys.
- **Overflow:** `scrollWidth` equals the viewport at 320, 360, 390, 430, 768, 1280 and 1440, in both languages.
- **Console and page errors:** none in any run.
- **First screen at 390 x 844, Chinese and English identical:** claim 77 to 167; stage 173 to 567; sheet 181 to 473 (x 94 to 374); subtitle bar 543 to 567; trial button 575 to 631 with the prices line at 608 to 620; rail from 645. Top-bar trial button 8 to 44. Document height 5,057 px (Chinese), 5,195 px (English).
- **Text size:** 296 visible text runs at 390, 0 under 11 px, both languages.
- **Touch targets under 44 px:** none. **Readable blocks outside the 16 px gutter:** none (thread scenery excluded, see deviation 11).
- **Totals read back after each change:** 2,700.00 default; 2,700.00 after a client change; 3,900.00 after adding RM 1,200; 3,000.00 after removing RM 900; 0.00 with no rate (draft); 900.00 after adding one. Each equals `SIS.total()`; words, machine line (SEN), stub and leaf agree.
- **First paint:** an in-page sampler on every animation frame, with the web fonts refused so nothing waits: sheet hidden from the first frame (199 ms after navigation in this run), band starts at 540 ms, sheet cut in at 873 ms, done at about 2.95 s. Frames showing the finished sheet before the run: 0 of 208.
- **Reduced motion:** no autoplay, finished frame from first paint, scroll sequences at their end states. **No script:** the finished frame throughout, each episode with its own ground.
- **Keyboard:** focus marks seen on the trial button and a client tile.

## 4. Screenshots

Folder `/home/user/Mad/.inhabited/v1_critic/screens/`, prefix `rebuild1_`, 200 files, all viewport-bounded (390 x 844 or clipped to 640 or 700 high; 1280 x 800). `tools/rb1_capture_all.sh` regenerates them. The `rebuild1_sheet_*.png` files paste individual frames side by side at full resolution; frames at 390 were read through those sheets.

Required set and where it is:

| Required | Files |
|---|---|
| First screen at rest, 390 and 1280, both languages | `rebuild1_rest_390_zh.png`, `rebuild1_rest_390_en.png`, `rebuild1_rest_1280_zh.png`, `rebuild1_rest_1280_en.png` |
| First paint | `rebuild1_firstpaint_0000.png`, `_0050`, `_0150`, `_0400`, `_0800`, `_1200` (sheet: `rebuild1_sheet_firstpaint.png`). Actual capture times in that run: 18 to 297, 297 to 376, 376 to 465, 465 to 542 ms: a screenshot takes 60 to 280 ms here, so the 0, 50, 150 targets could not be hit exactly. The frame-by-frame sampler in section 3 is the exact record. |
| Opening sequence at 390 | stepped on the page clock: `rebuild1_s1_390zh_t0000.png` to `_t2420.png` (23 frames; sheets `rebuild1_sheet_s1_a.png` to `_f.png`); English `rebuild1_sheet_s1_en_a.png`, `_b.png`; wall clock: `rebuild1_rt_zh_00.png` to `_38.png` |
| The streak in three consecutive frames | wall clock `rebuild1_rt_zh_01.png` to `_05.png` (sheets `rebuild1_sheet_rt_a.png`, `_b.png`) |
| Each rebuilt section at three scroll positions | story, 8 positions: `rebuild1_sheet_story_a.png`, `_b.png`; month, 4: `rebuild1_sheet_month.png`; import, 5, plus approve and token: `rebuild1_sheet_import_a.png`, `_b.png` |
| Reduced motion and no script | `rebuild1_sheet_rm_a.png`, `_b.png` (Chinese walk, English first screen); `rebuild1_sheet_nojs_a.png` |
| Also | walks `rebuild1_sheet_walk390zh_a.png`, `_b.png`, `rebuild1_sheet_walk390en_a.png`, `_b.png`; `rebuild1_walk1280zh_00.png` to `_07.png`; taps `rebuild1_sheet_taps.png`; focus and draft `rebuild1_sheet_focus.png`; desktop S1 `rebuild1_s1_1280zh_t1150.png` |

What was opened, stated exactly. Opened as they now stand: `rebuild1_sheet_s1_b`, `_s1_e`, `_s1_f`, `rebuild1_sheet_final_check` (t 0, 860, 1,150 and the Chinese rest frame), `rebuild1_sheet_import_a`, `rebuild1_sheet_s1_en_b`, `rebuild1_sheet_rm_b`, `rebuild1_sheet_focus`. Opened, then regenerated after small changes that do not touch what they show except as noted (subtitle bar 31 to 24 px, the draft slot's height, the desktop column width, the desktop English headline's leading) and not reopened: `rebuild1_sheet_s1_a`, `_s1_c`, `_s1_d`, `_s1_en_a`, `rebuild1_sheet_rt_a`, `_rt_b`, `_rt_c`, `rebuild1_sheet_firstpaint`, `rebuild1_sheet_story_a`, `_story_b`, `rebuild1_sheet_month`, `rebuild1_sheet_import_b`, `rebuild1_sheet_walk390zh_a`, `_b`, `rebuild1_sheet_walk390en_a`, `_b`, `rebuild1_sheet_rm_a`, `rebuild1_sheet_nojs_a`, `rebuild1_sheet_taps`, `rebuild1_rest_1280_zh`, `rebuild1_rest_1280_en`, `rebuild1_s1_1280zh_t1150`, `rebuild1_walk1280zh_02`, `_03`. **Saved but never opened:** `rebuild1_sheet_rt_d`, `_rt_e`, the wall-clock frames not in a sheet, `rebuild1_s1_1280zh_t0000`, `_t0260`, `_t0860`, `rebuild1_walk1280zh_00`, `_01`, `_04` to `_07`, all nine `rebuild1_walk1280en_*`, `rebuild1_rm390en_01` to `_06`, `rebuild1_nojs390_04` to `_07`. I did not delete them; they should be treated as unverified.

What the pixels made me fix along the way: the client slot let the tape code show before the catch; the leaf's small print ran into its record block; month names sat on the detail rule; the token strip covered a name in the AI list; the client tile's name wrapped onto the lock; the subtitle bar cut the last message; the report panel did not fill its bubble on desktop; two labels were under 11 px.

## 5. Known weaknesses, stated plainly

1. **The streak has been judged from frames only.** In stills the two copies read as large translucent blocks behind stretched bubbles. At 12 steps a second on a phone they should read as a streak; nobody has watched it at speed.
2. **The opening shot has no invoice** for the hold (about 320 ms) plus 340 ms. Hard limit 7 is met at rest, under reduced motion and without script. A strict reading may still object.
3. **Desktop below the hero is thinly verified.** Two walk frames were opened; the English desktop walk was not opened at all.
4. **The stage on desktop is the phone stage enlarged**, not a recomposition.
5. **Document height differs by language**; the scroll correction depends on `elementFromPoint` and was tested at one position only.
6. **Draft state leaks downstream.** With no rate picked, the stub and the leaf in `#story` read RM 0.00 and the stub still says filed.
7. **Chromium only.** Not opened in Safari or Firefox. The file relies on Web Animations with `visibility`, `clip-path` and `stroke-dashoffset` keyframes, `steps()`, 3D flips, and `mix-blend-mode: screen` inside an isolated stacking context.
8. **Colours added in this pass are starting values** (the light, the streak green, the two extra grounds). The palette gate is still provisional.
9. **Asker times** in the story's grey bubble ("23:02") are sample text; elsewhere they take the visitor's clock. The mix is deliberate (the hero thread is a fixed sample) but uneven.
10. **Whose green is it.** On the page, green is him answering clients and peers with SIS output; the critic's wording proposed the same colours and I followed it, but the notices (the page's own voice) are a third voice a cold reader has to learn.
11. **Sample ledger.** Monthly sales are a sample series and the client ranking is summed from listed sample invoices; the two are not reconciled.
12. **Page is 500 px longer than v1** (5,057 against 4,530 at 390), because product views are at reading size.
