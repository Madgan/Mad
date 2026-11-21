# Critic verdict — cycle 2

## Scores
- fits framing: 8 / 10
- fits sampled inputs: 8 / 10
- fits competitor judgment: 8 / 10
- fits axis manifestation: 6 / 10
- Constraint honored: PASS (per-frame sampler, `getAnimations()`, code search and recorded frames: only `transform`, `clip-path`, `stroke-dashoffset` and `visibility` animate; every colour change, including the three episode grounds, is one cut)
- Slop gate: (not run; the rubric is below 10)
- Hard limits: PASS (none fail; residual risks noted under 1 and 4)

Caps applied: none. No gate fails, so the numbers are the scores as judged.

## Gates

**ms-sample replay (all match `sampling.md`; the file and the persona table agree; each index is the recorded row in its pool table):**

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

No further audit block exists. Gate: PASS.

**Persona discipline: PASS.** `claude_designer.md` is unchanged since cycle 1. No heading prescribes page anatomy and the file sends placement to the borrowings file and the build. No `layout_sketch` file exists.

**Constraint tests.** Test 1: in-page `requestAnimationFrame` sampler on every element (computed `opacity`, `color`, `background-color`, `border-top-color`, `outline-color`, `fill`, `stroke`, `fill-opacity`, `stroke-opacity`, `filter`, `backdrop-filter`, `mix-blend-mode`) with `document.getAnimations()` polled on the same frames, in both motion modes, across: load with the opening, language toggle both ways, replay, rail by keyboard and by drag, three client taps, rate add, remove, none left and re-add, wheel scroll down and up, a jump to the bottom and back, month tap, approve and undo, token revoke and create, hover, focus and press on all 31 interactive elements. Result: no element holds an intermediate value. The only elements with three values are `body` and `header.topbar`, which step through `rgb(11,18,22)`, `rgb(8,21,48)`, `rgb(27,18,8)`, each held for 24 to 277 frames with nothing between. Animations seen: `transform`, `clipPath`, `strokeDashoffset`, `visibility`, and two CSS transitions on `transform`. I also recorded the page at 25 frames a second (Playwright video, frames extracted with ffmpeg) and read 60 consecutive frames of the opening and the taps. Script: `tools/c2_sampler.js`. Test 2: `opacity` occurs five times, all fixed (`.ghost` .6 and .42, `.catch.g1`, `.catch.g2`, wallpaper `stroke-opacity` .045); no `rgba`, no `@keyframes`, no `transition: all`, no view transition, no canvas. Test 3: states change by underline, a 1 px drop, an inset border or an outline. Test 4: under `reducedMotion: 'reduce'` the sheet is finished from the first sampled frame.

Stricter readings taken and still passed: the trailing copies sit at fixed .6 and .42 and are cut on and off with their bubble; because they are now off the 64 px step, no screen pixel runs through a falling sequence. `.beam` and the toggle labels use fixed blend modes.

Where the constraint forced a change of habit: the sheet arrives by a cut; the episode ground changes on one frame; ticks, captions and the language strings cut; the green wrap and the record block wipe; reduced motion is the finished frame.

**Capture provenance.** Scored against Designer screens at `v1_critic/screens/` (2 files read: `rebuild1_rest_390_zh.png`, `rebuild1_rest_390_en.png`). Every `rebuild1_sheet_*.png` is older than the final `index.html` (17:43 against 17:44:59), so I did not rely on them. Captured independently, prefix `c2_`, 65 files saved and 47 read: real-time opening at 390 (`c2_rt390zh_*`, 15 sheets of consecutive frames), because the streak and the first paint need wall-clock frames; walks at 390 in both languages with motion (`c2_walk390zh_a/b`, `c2_walk390en_a/b`); reduced motion in both languages and no script (`c2_walk_rmzh390_a`, `c2_walk_rmen390_a/b`, `c2_walk_nojs390_a/b`) for hard limits 7 and 8; 1280 x 800 in both languages below the hero (`c2_d1280_*`, `c2_walk_en1280_b/c`, `c2_walk_zh1280_d`), which the Designer never opened; scroll sequences (`c2_scroll_story_a/b`, `_month_a/b`, `_import_a/b`); taps (`c2_tap_client_*`, `c2_tap_rate_*`, `c2_sheet_approve_token_zh`); the draft state (`c2_sheet_draft_zh`); the stage at double density (`c2_zoom2x_stage_zh/en`).

## Hard limits

| # | Limit | Result | Evidence |
|---|---|---|---|
| 1 | No claims beyond `facts.md` | PASS, one residual risk | All strings in both languages trace to `facts.md`; seven link targets match its routes. The notice under the PDF now says sending is done in his own chat and that the ticks belong to the chat app. Residual: two messages later the same ticks report SIS states ("还没保存", "你批准了，已保存", "令牌有效"), and on `#report-msg` the tick turns to 已读 when the 014 tag lands. No sentence claims SIS sends or tracks, but the page contradicts its own disclaimer. Rebuild item 3. |
| 2 | Exact prices; sample data labelled | PASS | 7 days, RM 199 / year, RM 399 / year, nothing else; plan lists match. Sample tape on `#sheet`, the leaf, `.sis-card`, `#report-msg`, `#import-msg`, `#pro-msg` and three chat headers, in both languages; `.sample-note` covers chat lines, past invoices and report figures. |
| 3 | No QR, no LHDN wording | PASS | grep returns nothing. `.record-block .mark` holds "1/1" in a plain square. |
| 4 | No cheque, bank, account, payment claim | PASS, one wording note | grep returns nothing. Machine line groups are labelled NO, DATE, SEN. The crossing reads "INV-014 · 开好了" and "INV-014 · DONE". See the ruling below. |
| 5 | No photographs or generated images | PASS | Hits are one inline SVG data URI, `url(#doodle)`, `url(#grain)` and three sample file names. |
| 6 | No long dashes | PASS | grep returns nothing. |
| 7 | Trial button, both prices, invoice in the first screen at 390 | PASS | Identical in zh and en, at rest and under reduced motion: `#hero .cta-trial` y 575 to 631, `.trial-terms` 608 to 620 (12.5 px, weight 600, black on green), `#sheet` 181 to 473 (280 x 292, all in view), toggle 4 to 48; none covered. At 390 x 700 all four remain in view. Load sequence, measured: no sheet for 879 ms after the first frame on a warm load and 1,061 ms with fonts delayed; the code allows 660 to 1,040 ms. Client on the sheet at about 1.5 s, total at about 2.4 s, record block at about 2.8 s after first paint. The trial button and both prices are readable from the first frame. |
| 8 | Complete still under reduced motion | PASS | `c2_walk_rmzh390_a`, `c2_walk_rmen390_a/b`: every sequence at its end state, all facts and prices present. No script: same (`c2_walk_nojs390_a/b`). |
| 9 | Nothing depends on sound | PASS | No audio or video; `.play(` hits are the timeline. The voice note is bars, a duration and a text line. |
| 10 | Both languages | PASS, nits | All visible strings paired; `lang` and `<title>` switch; no overflow at 320, 360, 390, 430. Nits: avatar initials 陈 and 杰 stay Chinese beside "Ms Chan" and "Jay"; the meta description does not switch. |

Other guardrails. One external request (Google Fonts). `scrollWidth` equals the viewport at four widths. Text contrast: about 305 visible runs in each language sampled against rendered pixels on all three grounds, no failure (the only hits are screen-reader spans). Flashing: during the streak some pixels change more than three times a second, but the largest such area inside a 341 x 256 box is about 12%, under the 25% threshold; keep it there. Broken: `header.topbar .cta-trial` is 36 px high (the notes say no target is under 44). Broken: the language switch moves the page. At scroll 700 it jumped 193 px (700 to 507), and 20 px at three other positions. `setLang` anchors on `elementFromPoint`, and when that element is a `.zh` or `.en` span it collapses to 0.

## Rulings asked for

- **Streak.** Not yet a streak. In consecutive frames (`c2_rt390zh_f12-15` to `f20-23`) each bubble carries two full-width rounded rectangles in flat blue and flat green. They read as translucent blocks stacked behind a card. The bubbles' own text stays sharp and readable on every step.
- **Catch.** Watchable now. A 13 px italic chip in a dark pill crosses about 210 px in four frames with two bars behind it and lands as 14 px bold (`c2_rt390zh_f32-35`, `f36-39`).
- **First paint.** The finished sheet never shows before the opening: 0 frames in the in-page log and in the video, warm and cold.
- **Hard limit 7.** Met. The limit is about what is in the first screen at rest and under reduced motion, and it asks for the load time to be stated: 0.9 to 1.06 s with no invoice. That is legal and too long; item 4.
- **Trial terms in the button.** Legible in both languages (`c2_zoom2x_stage_zh/en`), and it is still plainly a button: a full-width green block with a ruled edge, the same green as the top-bar button.
- **Crossing.** Not "void" or "cancelled": two blue pen strokes confined to the top-left corner, crossing no field. Not "paid" in Chinese. English "DONE" on an invoice can be read as settled; change the word.
- **Ticks.** See hard limit 1: no claim, one contradiction.
- **Draft state.** A defect, and it must be fixed. With no rate picked the hero shows a designed draft, but the leaf below still wears "INV-014 · 开好了", reads RM 0.00 and SEN 000000, sits in a PDF message marked 已读, its stub says 已归档, and 014 drops on November with no change (`c2_sheet_draft_zh`). Second fault in the same frame: pick Tanjung Bakery and the chat is still "Farah · Lumen Events", so he sends one client's invoice to another.
- **Ground cuts.** They are true one-frame cuts and every text pair holds AA on all three grounds. As staging they are timid: three near-blacks whose luminance differs by about 1.03 to 1.

## What's borrowed correctly

- **Framing.** The page is now a thread. Opening shot is the thread alone, full stage, at 13 px (`c2_rt390zh_a_f00-03`). Below it, three chats with date chips, a chat header, the asker's grey bubble, the product view as a forwarded attachment in outgoing green with a file bar and ticks, a centred notice, and a composer whose send button is the trial button (`c2_walk390zh_a/b`).
- **Wong Kar-wai.** The sheet arrives by a cut and never moves while the band steps round it; INV-014 in at least seven places; clock time to the second on the record block, the wrap and each notice; "你在这页待了 10 秒。轮到你回了。"
- **Night Mail.** `.hang` holds a source message still under the sheet; three catches; six labelled slots on the sheet; intervals 420, 340, 260, 200, 160, 120 then a hold, repeated in `#reports` (0, .20, .37, .51, .62, .70) and `#import`.
- **Crossed cheque.** Crossing drawn stroke by stroke (`c2_rt390zh_f60-63`), strike on a replaced client (`c2_tap_client_f46-52`), figures over words, stub on the perforation, labelled machine line.
- **Camera tape.** Tape labels, flipped file tiles sorted into five slots, the green wrap "已核对 · 04:37:08" laid only after the tap, the lock track.
- **Return block.** Wiped in as the last beat.
- **Type.** Chinese headline 700, English 800 at `opsz` 27 and 31, Instrument Sans in thread and sheet, Kanit on the readout and on figures in flight, tabular figures, width 100, no fifth family.
- **Cycle 1 items closed:** 1, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13. Partly closed: 2 (the streak) and 6 (one flat light and three grounds, still quiet).

## What's missing per factor

### fits framing
The framing named one small motion above the others, "a tick turning from one to two". In `#story` sent, delivered and read are 30 px of scroll apart (p .47, .54, .61 of 422 px); between scroll 900 and 950 all three are gone (`c2_scroll_story_b`). Nobody sees it. The ticks then change meaning between episodes. The chat does not follow the picked client. On desktop the thread is a 510 px column in a 1280 px field with the footer on a third alignment (`c2_d1280_zh_bottom`); 60% of the screen is wallpaper.

### fits sampled inputs
- **Two speeds:** the frame exists, the smear does not. See the streak ruling. After the cut the moving world is an 87 px strip and a 70 px band.
- **The drop** (Night Mail element 4, cheque element 4): the leaf moves 3 px sideways and 40 px down and a green bubble is cut in round it. Nothing is put out and nothing tears.
- **Exactness about time:** the asker's "23:02" and the hero thread's 22:41, 22:58, 23:02 are fixed while every other stamp is the visitor's clock. At my capture the client asks at 23:02 and reads the reply at 04:23 under a chip that says 今天. It only works near 23:41.
- **Type conditions:** `.cta-trial` and the plan buttons are 700 where the locked role says 600 (500 for Chinese); `.record-block .mark b` computes to 900 on Instrument Sans, which stops at 700.

### fits competitor judgment
Tables are complete and every row has a location that exists in the DOM. Two rows are not carried through. "Empty and error states" (both tables) promises designed states; the draft is designed for 394 px and undesigned for the next 1,500. Invoice-Generator.com "Layout" is `diverge` from "controls in a side column"; at 1280 the rail and both pickers sit in a side column beside the sheet (`c2_d1280_zh_top`) and the row cites only a 390 frame.

### fits axis manifestation
82 entries, ten axes, framing in 37%. Deductions: `typography[0]`, `[2]`, `[3]` state weights the pixels do not have (minus 2). `color_palette` has no entry for `#081530`, `#1B1208` or `#05090B`, which are whole grounds; `surface_treatment[1]` names them without values, and `color_palette[10]` gives a teal light to a black-and-white film without saying where the hue came from (minus 1). `motion[2]` puts a 12 degree lean under framing and constraint; neither contains one (minus 1). Not deducted, to correct: `ornament[0]` and `ornament[2]` each say "only", and the page has single blue checks on tiles and solid rules on `.sis-card` and the top bar.

## What's drifted into the attractor

- **Anti-default 9, in motion.** The streak copies are translucent rounded rectangles layered behind rounded rectangles. Frozen, `c2_rt390zh_f16-19` is a stack of glass cards.
- **Anti-default 3.** 560 to 700 ms of a still thread before anything moves, because the clock waits for fonts, then the sheet's content takes a further 1.9 s.
- **Anti-default 10, desktop only.** A phone column centred on a desktop ground.
- **Anti-default 12.** Twelve yellow sample labels; each episode shows two within 60 px (chat header, then attachment).

## Rebuild list (specific moves)

1. **`.ghost`, `.pb` (R03.2, two speeds).** Stop copying the bubble. Draw each trail as three to five thin bars along the travel, uneven in width, tapered at the trailing end with a `clip-path` polygon, no radius, inside the bubble's x-extent, at the same fixed alpha, cut on and off. While `.thread-band.running`, clip the text out of `.pb` so passing messages are shape only; only `.hang` and the sheet are readable. Keep flashing area under the present 12%.
2. **Draft and client state downstream (competitor rows, framing).** `#story`, `#reports` and `.sis-card` take the last complete invoice; with no rate picked, the leaf loses its crossing and record block and is labelled 草稿 / Draft, the PDF message and the stub stay empty slots, 014 does not drop. `.chat-head` in `#story` and the asker's name follow `pickClient`.
3. **Ticks (framing, hard limit 1 risk).** Give sent, delivered and read room: p .47, .64, .82, or a 0, 260, 520 ms clock from the drop. Keep ticks for chat receipts only; on `#import-msg` and `#pro-msg` let the tape labels that already exist (未保存, 已保存, 已连接, 已撤销) carry SIS state.
4. **Opening hold (S1).** Start on first paint with a fixed 200 ms hold; do not wait for fonts. Sheet in by 540 ms.
5. **The drop (S4).** Let the leaf travel: tear sideways from the stub by 24 px or more along the perforation, then one hard-stopped translate of 120 px or more into the bubble slot.
6. **Sample times.** Derive the hero thread's and the asker's times from the visitor's clock (now minus 41, 24 and 20 minutes).
7. **`setLang`.** Anchor on the nearest `.msg`, `.notice` or `section`, never on a language span.
8. **Desktop below the hero.** Compose it: thread column left of centre with the notices set in the right margin, or a wider two-voice thread; align the footer to the column. Then record the desktop arrangement in the Invoice-Generator.com "Layout" row or move the pickers under the stage.
9. **Grounds.** Raise the difference between the three nights (for example `#06202A`, `#0A1B4A`, `#2A1606`) and recheck AA.
10. **Manifest and CSS.** Set control labels to the locked weights or log the deviation; `.record-block .mark b{font-weight:700}`; add `color_palette` entries for the three ground values and say where the beam's hue comes from; move the lean out of `motion[2]`; drop "only" from `ornament[0]` and `[2]`.
11. **Small.** English crossing "INV-014 · READY"; top-bar trial button to 44 px; avatar initials C and J in English; one sample label per episode where the header and the attachment are in the same screen.

## Honest take

This is a different build and I will say so: the thread is the page now, the opening is cut like someone meant it, the first paint is clean, and nothing fades anywhere I could find in several thousand sampled frames. That earns the jump from 6, 7, 7. What it does not earn is the director's name. The one image the sample turned on is a still subject with the world going past as smear, and what goes past here is a deck of tinted rounded cards with perfectly legible text on them. The tick, which the framing singled out, is spent in 30 pixels. Take two taps the page invites and it files a zero-ringgit invoice marked done and sends Tanjung's bill to Lumen. And the manifest still describes a slightly better-behaved page than the one in the pixels. None of this is a rethink. It is a week of finishing, and the streak comes first.
