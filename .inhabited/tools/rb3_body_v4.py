# Rebuild 3: writes tools/borrowings_v4_body.md from tools/borrowings_v3_body.md (which is not edited).
# Sections that describe things the third rebuild changed are replaced whole; the rest is carried over with its frame
# references moved to the rebuild3_ set. Numbers that come from the capture run are passed in from rb3_capture_log.txt
# by hand (see the constants below) so that the body states what was measured on the final file.
import io, re
R = '/home/user/Mad/.inhabited/'
s = io.open(R + 'tools/borrowings_v3_body.md', encoding='utf-8').read()
s = s.replace('rebuild2_', 'rebuild3_')

# ---- measured on the final file (tools/rb3_capture_log.txt)
OPEN_BAND = '@@OPEN_BAND@@'      # thread starts, ms after first contentful paint
OPEN_SHEET = '@@OPEN_SHEET@@'    # sheet cut in, ms after first contentful paint
OPEN_SHEET_T0 = '@@OPEN_SHEET_T0@@'
FL7 = '@@FL7@@'; FL4 = '@@FL4@@'; DOCH = '@@DOCH@@'
VAL = {
 '@@OPEN_BAND@@': '176 to 281',
 '@@OPEN_SHEET@@': '481 to 522',
 '@@OPEN_SHEET_T0@@': '522 to 552',
 '@@FL7@@': '0.3% at 390 in Chinese, 0.1% at 390 in English and 0.7% at 1280 (the v3 build by the same count on the same machine, which are also the critic\'s figures for it: 0.3%, 0.7%, 0.4%). The largest of the three is 0.7% before and after; one condition fell and one rose',
 '@@FL4@@': '26.0%, 30.8% and 30.7% (v3: 26.2%, 30.7%, 30.7%)',
 '@@DOCH@@': '5,141 px (Chinese), 5,161 px (English)',
}

def rep(a, b, n=1):
    global s
    assert s.count(a) == n, (a[:100], s.count(a))
    s = s.replace(a, b)
def block(start, end, new):
    """replace from the line that starts with `start` up to (not including) the line that starts with `end`"""
    global s
    i = s.index('\n' + start) + 1; j = s.index('\n' + end, i) + 1
    s = s[:i] + new.rstrip('\n') + '\n\n' + s[j:]

# ===================================================================== head and section 0
i = s.index('\n## 1. Palette')
s = '''# Borrowings: v4 (rebuild 3, the finishing pass after critic cycle 3), SIS home page version 2

Written 2026-11-20 after the third rebuild of `designer/index.html`, in answer to `v1_critic/critic_verdict_3.md` (9, 9, 9, 9; the constraint gate and all ten hard limits passing). It replaces `borrowings_v3.md` as the attribute-binding manifest and borrowing summary for the page as it now stands. `borrowings_v1.md`, `borrowings_v2.md` and `borrowings_v3.md` are unchanged.

Every evidence cell names a place in the build (a selector) and, where a picture helps, a saved frame. Frames are in `v1_critic/screens/`, prefix `rebuild3_`; all of them were taken by `tools/rb3_capture_all.sh` after the last change to the build, and the same run wrote every measurement quoted here to `tools/rb3_capture_log.txt`. Sheets paste frames side by side (phone) or stack two (desktop) with no scaling. Which frames were opened is stated exactly in `designer/build_notes_v4.md`, section 4; a frame cited here and not opened there is marked unverified there. Bank entries are written stand-ins for images that could not be downloaded (accepted deviation), so "reference evidence" cites the written entry.

In order: 0 what the rebuild changed; 1 palette; 2 per-reference log (7 anchors); 3 competitor tables and hooks; 4 attribute-binding manifest (10 axes); 5 assembly; 6 sequence sheet; 7 states; 8 motion rules and the constraint; 9 hard limits; 10 open items.

---

## 0. What the rebuild changed

| Verdict 3 item | What was re-decided | Where |
|---|---|---|
| 1. The tick's length is whatever the thumb makes it; then five identical fixed receipts | The receipt of the PDF message is on a clock, and the clock starts on the frame the leaf lands: one grey tick and "已发出 / Sent" on that frame, two grey and "已送达 / Delivered" 260 ms later, two blue, "已读 / Read" and the minute at 520 ms, each a cut. It is no longer a function of scroll position. Going back above the drop takes the leaf out of the message, and the receipt with it. Logged on every frame while wheeling at 300, 600 and 1,500 px a second (390) and 800 (1280): sent at 0, delivered at 266, read at 534 ms in every run (the timers are set for 260 and 520; the log is one frame behind them), the file bar wholly on screen at each cut at every speed. The four other receipts stay, and each now does its one thing once: one grey tick and "已发出" until its line has been wholly on screen for 260 ms, then two blue and "已读" with the minute (logged: 266 to 271 ms). It then stays read. Reduced motion and no script: all five stand at read | `landed()`, `story()`, `receipts()`, `.doc-bubble[data-state]`, `.msg.attach[data-state]`; S4, S13; `motion[1]`, `ornament[0]` |
| 2. For the first third of a second the streak is slabs with even teeth, and nothing is still | The slab is gone. In a bubble's place stand 5 to 12 separate tines, 2 to 22 px wide at 390 (1 to 12% of the bubble), a little over half of them starting on the bubble's leading edge and the rest 0.3 to 2.5em behind it, each cut off on a slant at its own length; at most four scraps of that edge, 0.5 to 1.1em deep, join neighbours that both start on it. Over that the same three to five bars as before (2.6 to 8.5 px wide, 76 to 185 px long at 390), of which two or three now start 2 to 4em ahead of the edge. And the first hanging message ("抬头写 Lumen Events Sdn Bhd") now hangs from the first step of the run, so there is one still, readable thing on the stage before the sheet is cut in. Step rate unchanged (22 steps in 1,839 ms). Flash by the critic's count: ''' + FL7 + ''' | `addSmear()`, `.smear .hd`, `.smear .tr`, `hanger()`; R03.2, R02.2; `imagery[1]`, `imagery[7]`; S1 |
| 3. Desktop: a generic heading in the margin; one short note against a tall attachment; the sheet on one side of the screen and the leaf on the other | The headings are not drawn at any width (they stay for screen readers). At 900 and up the page is two columns all the way down: the page's own voice on the left (the claim and the trial button, then the notes), the thread on the right (the stage, then a 480 px lane that ends on the stage's right edge). At 1280 the sheet's left edge is at x 816.5 and the leaf lands in his reply at x 816.5. Each episode's note is cut into the facts it holds (three for each of the four product episodes, one for the plans), and each stands in the margin at the height of the thing it is about, on a perforated leader that runs across to the lane: measured within 1 px of its target at 900, 1024, 1280 and 1440 in both languages. The page's last line stands beside the composer in the same way | `.tc`, `.tc>.notice`, `.nt`, `.tail>.elapsed`, `.hero-stage .invoice-sheet`; section 5; `key_visual_elements[15]`, `ornament[2]`, `surface_treatment[6]` |
| 4. `motion[5]` gives one value for moves that run at several; `motion[3]` claims more than its inputs hold | Every `animate()` call the page makes was logged with its duration (`tools/rb3_durations.js`) and `motion[5]` now gives the ranges found. `motion[3]` says only that the band's travel is a row of cuts, which is all the constraint carries; the reason and the rate are the step-print's, bound in `imagery[0]` | section 4 |
| 5. The language switch does nothing with scripts off; two cells of the Bukku table do not match the build | The switch is a native checkbox (`#lang-en`, `role="switch"`), and the stylesheet reads it with `:has()`, so every string changes with scripts off; with script the thumb still travels 80 ms, the strings are cut on the frame it stops and the reader's place is held. "Navigation depth" now says six footer links and names them. "Language switch" says what works without script and what does not | `label.lang-toggle`, `#lang-en`; section 3; S11; section 9, limit 8 |
| 6. Hero thread bubbles 12 px from the stage edge | 16 px at 390 and at 320 (`max(16px, 1.231em)`), the hanging message the same | `.bubble`, `.bubble.out`, `.hang.in`, `.hang.out` |
| Found on the way | The opening's clock was stopped for the length of a rebuild whenever the web fonts arrived mid-run (the run ended 30 to 75 ms late). The rebuilt timeline now starts where the wall clock stands: sheet cut in ''' + OPEN_SHEET_T0 + ''' ms after the page's own first-frame stamp in 8 cold runs. The language hold now anchors on a single sentence of a note where the reading line is on one | `TL.prototype.play`, the `fonts.ready` branch; `ANCH`; S1, S11 |

---
''' + s[i:]

# ===================================================================== 1 palette
rep('''### 1.5 What changed in the palette for v3

- **Grounds:** `#081530` and `#1B1208` replaced by `#0B2346` and `#2A1606`, each now bound to an input (`color_palette[12]`, `[13]`). `#05090B` and the working neutrals are bound (`[14]`, `[15]`).
- **The beam:** unchanged value; its hue is now traced (`color_palette[10]`).
- **Streak:** the same three colours, now on thin bars instead of whole copies of a bubble; `--soft` added as the third bar colour.
- **Tape colours:** unchanged, still the entry's estimates. Tape red now also colours the draft label; yellow sample tapes reduced to five.
- **Fixed transparency in use, all unchanging:** `.smear .tr` 0.6 and 0.42, `.catch-tr` 0.6 and 0.42, wallpaper stroke 0.045, hero grain 0.07.
- **Palette gate:** still provisional, for the reason given in 1.1.''',
'''### 1.5 What changed in the palette for v4

- **No value changed.** The file holds the same 33 hex values as the v3 build, each named in 1.2, 1.3 or `color_palette[15]`.
- **Streak:** the tines of a smear are in the bubble's own colour (`--bubble`, `--bubble-out`, opaque); the bars over them are the same three streak colours at the same fixed 0.6 and 0.42.
- **Notice black `#05090B`:** behind `.stage-caption` at every width and behind `.notice` on a phone; at 900 and up the notes stand on the ground itself.
- **Receipts:** an unread receipt is `--soft` on the outgoing green (5.7 to 1), a read one `--tick`; the word beside it changes with it, so the state is not carried by colour alone.
- **Fixed transparency in use, all unchanging:** `.smear .tr` 0.6 and 0.42, `.catch-tr` 0.6 and 0.42, wallpaper stroke 0.045, hero grain 0.07.
- **Palette gate:** still provisional, for the reason given in 1.1.''')
rep('| notice black | `#05090B` | `.stage-caption`, `.notice` on a phone |', '| notice black | `#05090B` | `.stage-caption`; `.notice` and `.elapsed` on a phone |')
rep('The critic\'s sampler in cycle 2 found no text failure on rendered pixels; the grounds have changed since, and the table above is computed, not sampled from pixels.',
    'The critic computed 312 visible text runs on the three grounds in cycle 3 and found none below AA; no colour has changed since. The table above is computed, not sampled from pixels.')

# ===================================================================== 2 per-reference log
rep('''stays on the client page; `#story .leaf` hangs from it at `#story .perforation`, slides 72 px along the perforation and leaves (S4); the stub turns over to its filed face (S5) → `rebuild3_story390zh_a.png` (joined, tearing, torn), `rebuild3_story390zh_b.png` (gone; stub filed).''',
    '''stays on the client page; `#story .leaf` hangs from it at `#story .perforation`, slides 72 px along the perforation and leaves (S4); the stub turns over to its filed face (S5) → `rebuild3_story390zh_a.png` (joined, tear starting, half torn, torn), `rebuild3_story390zh_b.png` (first frame: gone, stub filed; second frame: back above the drop, torn again and the slot empty).''')
rep('''2. The pouch that hangs still while the train streaks → `.hang`: the source message is cut into the band under the sheet 190 to 260 ms before its catch and holds there, sharp, the only readable thing in the band → `rebuild3_s1_390zh_b.png` (first two frames), `rebuild3_rt390zh_f20-23.png` (four consecutive wall-clock frames), `rebuild3_live_390zh.png` (fourth frame).''',
    '''2. The pouch that hangs still while the train streaks: "a leather mail pouch, which a moment ago hung still from a trackside post, is caught" → `.hang`: the first source message, "抬头写 Lumen Events Sdn Bhd", hangs in the band from the first step of the run, 760 ms before its catch. Until the sheet is cut in at 300 ms it is the one still, readable thing on the stage; after that it hangs under the sheet. The two later ones are cut in 220 and 190 ms before their catches → `rebuild3_s1_390zh_first600.png` (four steps of the run before the sheet: the message does not move), `rebuild3_s1_390zh_a.png` (second to fourth frames), `rebuild3_s1_1280zh_a.png`, `rebuild3_rt390zh_f08-11.png` (four consecutive wall-clock frames), `rebuild3_live_390zh.png`.''')
rep('''falls 136 px from the client page into `#story .doc-bubble`, 160 ms, linear, hard stop, one frame of settle; the outline becomes his outgoing message on the frame it lands (S4) → `rebuild3_story390zh_a.png` (fourth frame: torn, slot empty), `rebuild3_story390zh_b.png` (first frame: landed). Wall-clock positions in `tools/rb2_capture_log.txt` ("drop on the wall clock").''',
    '''falls 136 px from the client page into `#story .doc-bubble`, 160 ms, linear, hard stop, one frame of settle; the outline becomes his outgoing message on the frame it lands, and that frame starts the receipt's clock (S4) → `rebuild3_story390zh_a.png` (fourth frame: torn, slot empty), `rebuild3_ticks_390zh_a.png` (first frame: in flight; second: landed, one grey tick), `rebuild3_story390zh_b.png` (first frame: landed and read). Logged on every frame in `tools/rb3_capture_log.txt` ("the receipt clock: per-frame log"): first moved frame to landing frame 167 to 168 ms, 10 frames.''')
rep('''1. Two speeds in one frame: "one person stands still at the counter, sharp and slow, while the crowd passes in front as streaked, step-printed blur" → `#sheet` (never transformed, every glyph sharp) over `.mover` (22 steps of 64 px, 12 a second), in which no passing message can be read → `.hero-stage` during S1 → `rebuild3_rt390zh_f04-07.png` (the last still frame, then the first streak), `rebuild3_rt390zh_f08-11.png`, `rebuild3_rt390zh_f12-15.png` (the sheet cut in over it), `rebuild3_live_390zh.png` (lossless).''',
    '''1. Two speeds in one frame: "one person stands still at the counter, sharp and slow, while the crowd passes in front as streaked, step-printed blur" → from the first step of the run one message hangs still and sharp in a band in which no passing message can be read; from 300 ms `#sheet` (never transformed, every glyph sharp) stands over `.mover` (22 steps of 64 px, 12 a second) → `.hero-stage` during S1 → `rebuild3_s1_390zh_first600.png`, `rebuild3_s1_390zh_first600b.png` (the page clock from 1 to 600 ms, eight frames), `rebuild3_s1_1280zh_a.png`, `_b.png`, `_c.png`; on the wall clock `rebuild3_rt390zh_f04-07.png`, `rebuild3_rt390zh_f08-11.png`, `rebuild3_rt390zh_f12-15.png`, `rebuild3_live_390zh.png` (lossless).''')
rep('''2. Step-printing as a drawn treatment: "movement drags and colour bleeds between frames" → `.smear`: per bubble, a slab with a torn trailing edge (`.hd`, a `clip-path` polygon of up to six tines) and three to five bars (`.tr`: 2.6, 3.4, 4.4, 6 or 10 px wide, 70 to 175 px long, pointed at the trailing end, at 5, 24, 44, 63 and 82% of the bubble's width) in `--tick` at 0.6 and `--streak` or `--soft` at 0.42; `[data-ph]` cuts the bars between two lengths on alternate steps; all cut on at the first step and off at 1,840 ms. In-page count during the run: bubbles drawn 0, text runs drawn 0, smears 7 to 9 → `rebuild3_s1_zoom2x.png` (double density), `rebuild3_rt390zh_f08-11.png`.''',
    '''2. Step-printing as a drawn treatment: "movement drags and colour bleeds between frames" → `.smear`: per bubble, no slab. `.hd` is one `clip-path` polygon of separate four-cornered tines in the bubble's own colour: 5 to 12 of them, 1 to 12% of the bubble wide and never under 2 px (2 to 22 px at 390), 56% starting on the bubble's leading edge and the rest 0.3 to 2.5em behind it, each cut off on a slant at its own length (inside the bubble's depth, or up to 5.5 to 10em beyond its foot); at most four scraps of the leading edge, 0.5 to 1.1em deep, join neighbours that both start on it. Over that, three to five bars (`.tr`: 2.6, 3.4, 4.4, 6 or 8.5 px wide, 76 to 185 px long at 390, pointed at the trailing end, at 5, 24, 44, 63 and 82% of the bubble's width) in `--tick` at 0.6 and `--streak` or `--soft` at 0.42; two or three of the bars of each smear start 2 to 4em ahead of the leading edge, so no smear ends on a level line at either end. `[data-ph]` cuts the bars between two lengths on alternate steps; all of it is cut on at the first step and off at 1,840 ms. Measured as built in `tools/rb3_capture_log.txt` ("smear geometry") → `rebuild3_s1_zoom2x.png` (double density), `rebuild3_s1_390zh_first600.png`, `rebuild3_s1_1280zh_a.png`.''')
rep('''7. The cut as an arrival → `#sheet` at 300 ms of S1 → `rebuild3_rt390zh_f12-15.png` (frames 13 and 14).''',
    '''7. The cut as an arrival → `#sheet` at 300 ms of S1 → `rebuild3_s1_390zh_first600.png` (fourth frame, 255 ms: no sheet) and `rebuild3_s1_390zh_first600b.png` (first frame, 300 ms: the sheet, with six empty slots); on the wall clock `rebuild3_rt390zh_f12-15.png`.''')
rep('''4. Slim top bar and a visible language choice → `header.topbar`, `.lang-toggle` → `rebuild3_rest_390_en.png`.''',
    '''4. Slim top bar and a visible language choice → `header.topbar`, `label.lang-toggle` holding the native checkbox `#lang-en` → `rebuild3_rest_390_en.png`; with scripts off `rebuild3_nojs_lang_390_a.png`.''')
rep('''**NOT applied (the `diverge` rows):** see section 3. "Layout" is now carried through at desktop width as well (`.console` under the stage).''',
    '''**NOT applied (the `diverge` rows):** see section 3. "Layout" is carried through at desktop width as well (`.console` under the stage; nothing beside the sheet but the claim and the trial button).''')
rep('''turns over on its long axis from the stub face (paper, client code, 存根) to the filed face (dark, 已归档) and takes its place among the filed rows (S5); `.old-file` in `#import .slot-row` turns from its picture face to its read face (S8) → `rebuild3_story390zh_b.png` (first frame stub, second frame filed), `rebuild3_sec390zh_03.png`.''',
    '''turns over on its long axis from the stub face (paper, client code, 存根) to the filed face (dark, 已归档) and takes its place among the filed rows (S5); `.old-file` in `#import .slot-row` turns from its picture face to its read face (S8) → `rebuild3_story390zh_a.png` (stub face), `rebuild3_ticks_390zh_a.png` (first frame: the strip part way over), `rebuild3_story390zh_b.png` (first frame: filed face), `rebuild3_sec390zh_03.png`.''')

# ===================================================================== 3 competitor tables: intro and hook notes
rep('''The verdicts and rationales are those written at Step 8 in `sampling.md`, unchanged. Every row has a build location. Changed in v3: the two "Empty and error states" rows (the draft is designed down the whole page), Invoice-Generator.com "Layout" (true at desktop width too), "Sample data" (one tape per episode), and every frame reference.''',
    '''The verdicts and rationales are those written at Step 8 in `sampling.md`, unchanged. Every row has a build location. Changed in v4: Bukku "Navigation depth" (the footer has six links, named), Bukku "Language switch" (what the control is, that it works with scripts off, and what does not change without script), Bukku "Layout" and "Typography" and Invoice-Generator.com "Typography on the page" and "Claim in the first screen" (the desktop margin holds notes and no headings; which side things stand on), and every frame reference.''')
rep('''Added hooks:

| Added hook | What it is | Row or anchor that covers it |
|---|---|---|''',
'''Renames and removals against `borrowings_v3.md`:

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
| `.st .w-sent` on the four attachment messages | the word of an unread receipt | `ornament[0]`; framing |''')
rep('''| `.tc`, `.tc>h2`, `.tc.nh` | thread lane and margin column at 900 and up | Bukku "Layout" (diverge); `key_visual_elements[15]` |''',
    '''| `.tc`, `.tc.nh` | margin column and thread lane at 900 and up | Bukku "Layout" (diverge); `key_visual_elements[15]` |''')

# ===================================================================== 4 manifest: the paragraph of corrections
rep('''Corrections made in v3 to the entries the critic marked: `typography[0]`, `[2]`, `[3]` now state the weights the page computes (checked run by run in `tools/rb2_audit.js`), and the stylesheet was changed to the locked weights where it had drifted; `color_palette[12]` to `[15]` bind the three grounds, the notice black and the working neutrals, and `[10]` says where the beam's hue comes from; the 12 degree lean has left `motion[2]` and is bound in `typography[4]`, the one axis whose input (the Typography VS record of Kanit's italic) contains it; `ornament[0]` and `[2]` no longer say "only", and the page was also changed so that the single blue checks on tiles are gone.''',
    '''Corrections made in v4. The two entries the critic marked: `motion[5]` now gives the range each kind of move runs at, taken from a log of every `animate()` call the page makes and of its three CSS transitions (`tools/rb3_durations.js`); `motion[3]` says only what the constraint carries (the band's travel is a row of cuts) and no longer derives the step from the framing; the step-print stays bound where its source may be seen, in `imagery[0]`. Entries the rebuild touched: `motion[1]` and `[4]` (the receipt is a clock, not a scroll position), `motion[2]` (measured drop), `motion[6]` (the opening's clock is not stopped for the fonts), `motion[10]`; `imagery[1]` and `[7]` (the smear and the hanging message as built); `key_visual_elements[14]` and `[15]`, `surface_treatment[6]`, `ornament[0]` and `[2]` (the switch, the margin and its leaders, the receipts); `typography[0]`, `[1]`, `[2]` (the desktop section headings are no longer drawn, so they are no longer listed).''')

# ===================================================================== 5 assembly
rep('''Chinese is the default. The y values are measured from the built page at 390 x 844 (`tools/rb2_audit.js`; identical in English down to the picker rows).''',
    '''Chinese is the default. The y values are measured from the built page at 390 x 844 (`tools/rb3_audit.js`, in `tools/rb3_capture_log.txt`; identical in English down to the picker rows, and unchanged from v3).''')
rep('''| `header.topbar` (sticky, takes the episode's ground) | 0 to 52 | wordmark; `.lang-toggle`; `.signin`; compact `.cta-trial`, 84 x 44 | 04 "Navigation", "Language switch" |''',
    '''| `header.topbar` (sticky, takes the episode's ground) | 0 to 52 | wordmark; `label.lang-toggle` with the native checkbox `#lang-en`, 72 x 44; `.signin`; compact `.cta-trial`, 84 x 44 | 04 "Navigation", "Language switch" |''')
rep('''`#sheet` x 94 to 374, y 181 to 473. Left of the sheet 87 px of thread; under it two whole messages with times 20 and 19 minutes before his clock.''',
    '''`#sheet` x 94 to 374, y 181 to 473. Left of the sheet 87 px of thread, its bubbles 16 px from the stage edge on both sides; under it two whole messages with times 20 and 19 minutes before his clock.''')
rep('''`#story-stage` 358 x 664: `.sis-card` (SIS chip, 客户页, client line, `.stub` 358 x 50, `.perforation`, three `.past-row` 358 x 36), `.leaf` 280 x 362 hanging from the stub, `.doc-bubble` 292 x 418 below; `.notice` |''',
    '''`#story-stage` 358 x 664: `.sis-card` (SIS chip, 客户页, client line, `.stub` 358 x 50, `.perforation`, three `.past-row` 358 x 36), `.leaf` 280 x 362 hanging from the stub, `.doc-bubble` 292 x 418 below; `.notice` (three sentences, in the order of the stage: stub, leaf, sending) |''')
block('At 900 and up (measured at 1280 x 800;', 'Sample data (fictional, labelled):',
'''At 900 and up (measured at 1280 x 800; `rebuild3_rest_1280_zh.png`, `rebuild3_d1280zh_a.png` to `_d.png`, `rebuild3_d1280en_a.png` to `_d.png`; also photographed at 900, 1024 and 1440): `.col` is 1,120 px and holds two columns all the way down. On the left the page's own voice, on the right the thread.

- **First screen.** `.hero-grid`: the forwarded label, the claim (x 80 to 494) and the trial button (x 80 to 470, y 421 to 481) centred on the stage's height; the stage x 538 to 1,200, y 77 to 589 (662 x 512, type at 13 px) with the sheet at x 816.5 to 1,180.5 and 278 px of thread to its left; under both, `.console` in one row (transport, clients, rates; two rows from 900 to 1,119) and the sample note; the first screen ends at 800.
- **Below it.** `.tc` is a grid of a margin column (x 80 to 648) and a 480 px lane (x 720 to 1,200), whose right edge is the stage's right edge. The leaf hangs from its stub at x 720 and lands in his reply at x 816.5: the left edge of the sheet he watched being made. Date chips are centred on the lane (x 960).
- **The margin.** No heading. `.tc>.notice` is a grid in the row of the attachment; its first track is the distance down to the first thing a note is about and each later track is at least the distance to the next. In `#story`: the stub (84 px below the top of the stage), the reply the leaf lands in (326), its file bar (840). In `#reports`: the bars (82), the ranking (388), the CSV line (506). In `#import`: the row of files (33), the review card (175), the saved state (481). In `#pro`: the plate and the list (30), the scope line (281), the token button (392). In `#pricing`: the prices (30). Each `.nt` is set at 18 px (16 px from 900 to 1,119), no wider than 28rem, under a perforated leader that starts at x 80 and runs to the lane's edge at the height of that thing. Measured (`tools/rb3_measure.js`): every note within 1 px of its target at 900, 1,024, 1,280 and 1,440, in both languages. The page's last line (`.tail>.elapsed`) stands the same way beside the composer.
- **Footer.** The same two columns: contact and legal links under the margin, the trust paragraph under the lane.

Document height @@DOCH@@. No sequence changes its timing.''')

# ===================================================================== 6 sequence sheet
rep('''- **Trigger:** page load, once. A script in `<head>` adds `s1-pre` before first paint and stamps the time of the first painted frame. The main script builds the timeline, seeks it to 0 (the same frame), removes the class, and starts the clock a fixed 200 ms after that stamp. Fonts are not waited for; if they arrive during the run, the catches are re-measured at the same clock time.''',
    '''- **Trigger:** page load, once. A script in `<head>` adds `s1-pre` before first paint and stamps the time of the first painted frame. The main script builds the timeline, seeks it to 0 (the same frame), removes the class, and starts the clock a fixed 200 ms after that stamp. Fonts are not waited for; if they arrive during the run, the catches are re-measured and the new timeline is started where the wall clock stands, so the run does not lose the time the re-measuring took (v3 lost 30 to 75 ms there). Measured in 8 cold runs against the browser's first contentful paint: thread starts ''' + OPEN_BAND + ''' ms after it, sheet cut in ''' + OPEN_SHEET + ''' ms after it (''' + OPEN_SHEET_T0 + ''' after the page's own stamp).''')
rep('''| 0 | 0 | | The thread runs: 22 steps of 64 px. No bubble or text is drawn; each is its smear | 1,840 | `imagery[0]`, `imagery[1]`, `motion[3]`, R03.1, R03.2, R03.8 |''',
    '''| 0 | 0 | | The thread runs: 22 steps of 64 px. No bubble or text is drawn; each is its smear. On the first step one message is cut in and hangs still in the band: "抬头写 Lumen Events Sdn Bhd" | 1,840 | `imagery[0]`, `imagery[1]`, `imagery[7]`, `motion[3]`, R03.1, R03.2, R03.8, R02.2 |''')
rep('''| 1 | 300 | 300 | **Cut:** the sheet is there, with six labelled empty slots | 1 frame | `motion[1]`, R03.7, R02.3 |''',
    '''| 1 | 300 | 300 | **Cut:** the sheet is there, with six labelled empty slots, over the hanging message | 1 frame | `motion[1]`, R03.7, R02.3 |''')
rep('''| 2 | 760 | 460 | Catch: "抬头写 Lumen Events Sdn Bhd" has hung in the band since 500; the name leaves it''',
    '''| 2 | 760 | 460 | Catch: "抬头写 Lumen Events Sdn Bhd" has hung in the band since the first step; the name leaves it''')
rep('''- **Flash:** `tools/rb2_flash.py` on 146 lossless frames at 60 a second: pixels with more than three flashes in a second cover 0.1% of the worst 341 x 256 box (390 and 1280). By a harsher count (more than three luminance changes of 0.10 in a second, opposing or not) 25.7% at 390 and 30.7% at 1,280; the same count on the v2 build gave 65.0%.''',
    '''- **Flash:** the critic's own count (`tools/c3_flash.py`: 146 lossless frames 1/60 s apart; a flash is a pair of opposing luminance moves of 0.10 or more), run on the v3 build and on this one on the same machine. Pixels with more than three flashes in any one second (7 or more opposing transitions), as a share of the worst 341 x 256 box: ''' + FL7 + '''. The limit is 25%. Pixels with two flashes a second (4 or more transitions): ''' + FL4 + '''. The step rate is unchanged at 22 steps in 1,839 ms and no second colour inversion was added.''')
block('### S4. Tear-off and drop (`#story-stage`)', '### S5. Filed (`#story .stub`)',
'''### S4. Tear-off, drop and receipt (`#story-stage`)

- **Trigger:** where the stage stands on the screen (S = its top edge, in px). At 390 x 844: tear from S 339 to 249; drop at S 225 (the reply slot's file bar is then 8 px inside the screen). Tear and drop are functions of position, so they run backwards.
- **Start:** the client page. The stub (paper face) with the leaf hanging from it at the perforation, over the earlier filed rows. Below, a dashed outline labelled "PDF".
- **Tear:** over 90 px of scroll the leaf slides 72 px sideways along the perforation, under the thumb.
- **Drop:** at S 225, one linear translate of 136 px down into the outline: 160 ms, hard stop, 2 px past and back on the next frame (177 ms in all; logged 167 to 168 ms from the first moved frame to the landing frame, 10 frames). Scrolling back above S 225 lifts it back in 140 ms.
- **Receipt, on a clock:** the clock starts on the frame the leaf comes to rest. On that frame the outline is cut to his outgoing message with a tail and a file bar ("INV-{year}-014.pdf", "1 页 · PDF") and the receipt reads one grey tick, "已发出 / Sent". 260 ms later: two grey ticks, "已送达 / Delivered". At 520 ms: two blue ticks, "已读 / Read" and the minute. Each is a cut. Nothing about it depends on how he scrolls after the drop. Logged on every frame while wheeling at 300, 600 and 1,500 px a second at 390 and 800 at 1,280: sent at 0, delivered at 266, read at 534 ms, the file bar wholly on screen at each cut in every run (at 1,500 px a second it is 87 px from the top of the screen when read is cut in). As a sequence of cuts this lasts 520 ms, 100 ms over the 420 ms the fourth design principle allows a clocked move; the figures are the critic's (verdict 3, item 1) and no single move in it is longer than the 177 ms drop.
- **Back:** scrolling back above S 225 takes the leaf out of the message: the outline is empty again and the receipt is gone with it, whatever it had reached. Coming down again plays the drop and the clock again.
- **Where the drop is not played** (reduced motion, no script, a page opened below it): the leaf is in the message and the receipt stands at read.
- **At 1,280 x 800:** tear 96 px, drop 182 px; the same clock.
- **Draft:** none of it happens; see section 7.
- **Frames:** `rebuild3_story390zh_a.png`, `_b.png`; `rebuild3_ticks_390zh_a.png` (in flight; sent; delivered; read, each with the measured time since landing printed on it), `rebuild3_ticks_390zh_b.png` (back above the drop); `rebuild3_ticks_1280en_a.png` to `_c.png`; `rebuild3_story1280zh_a.png` to `_c.png`. **Tags:** `motion[1]`, `motion[2]`, `motion[4]`, `imagery[5]`, `key_visual_elements[6]`, `[7]`, `ornament[0]`, `ornament[2]`, R01.4, R02.5.''')
rep('''At S 195 (30 px after the drop) the stub turns over on its long axis (200 ms, linear)''', '''At S 195 (30 px of scroll after the drop is set off) the stub turns over on its long axis (200 ms, linear)''')
rep('''and its figures step in two cuts, but only if the sheet is not a draft. The message's receipt does not change. A tap on a month''',
    '''and its figures step in two cuts, but only if the sheet is not a draft. The message's receipt is not touched by any of it (S13). A tap on a month''')
rep('''End: "未保存 · 等你核对" under a red tape label. The message's receipt does not change. Tags:''',
    '''End: "未保存 · 等你核对" under a red tape label. The message's receipt is not touched by any of it (S13). Tags:''')
block('### S11. Language cut (`.lang-toggle`)', '### S12. Clock stamps and the last line',
'''### S11. Language cut (`label.lang-toggle`, `#lang-en`)

The control is a native checkbox with `role="switch"`, 72 x 44, laid invisibly over the drawn track. With script: the click's own change is cancelled, the thumb travels 36 px in 80 ms, and on the frame it stops every string is replaced, the checkbox is set, and `lang`, the title and the description are updated. Before the cut the block nearest the reading line (40% down the screen) is found among whole blocks (`ANCH`: a message, a stage, a note or one sentence of it, the plans, a footer paragraph; at 900 and up the lane, not the margin); after it, the page is scrolled so that the same point of that block is on the reading line again. Measured every 100 px down the page (`tools/rb3_audit.js`): the point moves at most 0.5 px at 390 and 1.0 px at 1,280; scroll position is restored exactly after two switches at every position; the block's top edge moves by up to 74 px where the block itself grows in English (the plans at scroll 4,100). The critic's own tool (`c3_lang.js`, run again as `rb3_lang.js`) gives the same figures as in cycle 3: 12 and 76 px at the plans at 390, 9 px at most at 1,280.

With scripts off the checkbox is simply checked, and the stylesheet does the cut: every rule that hides one language reads `html:has(#lang-en:checked)` beside `data-lang`. Checked in a context with JavaScript disabled at 390 and 1,280: a click on the switch and the Space key both change every string, the thumb stands on EN, and the state survives the wordmark's `#top` link (`rebuild3_nojs_lang_390_a.png`, `_b.png`, `rebuild3_nojs_lang_1280_a.png`, `_b.png`, `_c.png`). What does not change without script: the `lang` attribute, the title and the description stay Chinese, there is no thumb travel, and the place on the page is not held (the page keeps its scroll offset). A browser without `:has()` and without script stays in Chinese.

Frames with script: `rebuild3_lang_390_a.png`, `_b.png`. Tags: `motion[10]`, `motion[7]`, `motion[1]`.''')
rep('''The first time a note comes on screen its time is cut in to the second; an asker's bubble and a receipt get the minute. When the composer comes on screen the line above it is cut once to how long he has been on the page. Tags: `motion[1]`, `ornament[5]`, R03.3.''',
    '''The first time a note comes on screen its time is cut in to the second (at 900 and up it stands over the first sentence of the episode's note); an asker's bubble gets the minute; a receipt gets the minute it is read. When the page's last line comes on screen (above the composer on a phone, beside it at 900 and up) it is cut once to how long he has been on the page. On a phone everything under that line is still below the edge of the screen on that frame, and at 900 and up the line's place is reserved, so nothing in view moves (`tools/rb3_shift.js`, `rb3_shift2.js`). Tags: `motion[1]`, `ornament[5]`, R03.3.

### S13. The four other receipts (`#report-msg`, `#import-msg`, `#pro-msg`, the plans message)

Each of his other four messages carries one receipt on the last line of its attachment. With script and motion it stands at one grey tick and "已发出 / Sent". On the first frame that line is wholly on screen (below the top bar, above the bottom edge) a 260 ms clock starts; when it ends the receipt is cut to two blue ticks, "已读 / Read" and the minute, and it stays read whatever he does next. Each of the four attachments fits on the screen at 390 x 844 and at 1,280 x 800, so that frame is the first on which the whole attachment has been on screen. A receipt that is already on or above the screen when the page opens, or that has gone past the top without ever standing wholly on screen, is cut to read at once, unseen. Logged on every frame while wheeling at 600 and 1,500 px a second (390) and 800 (1,280): 266 to 271 ms from that first frame to the cut, the receipt on screen at the cut in every case. No tap changes it. Reduced motion and no script: read from the first frame. Frames: `rebuild3_sec390zh_02.png` to `_04.png` (read, at rest). Tags: `motion[1]`, `ornament[0]`.''')

# ===================================================================== 7 states
rep('''| `.lang-toggle` | 中文 picked; EN picked (thumb position) |''',
    '''| `#lang-en` in `label.lang-toggle` | 中文 picked; EN picked (thumb position, label lit; the checkbox's own checked state for assistive technology); focus (outline round the whole control) |''')
rep('''| `.doc-bubble` | empty outline "PDF"; in a draft "PDF · 选了价目才有 / PDF · NEEDS A RATE"; file; sent (one grey tick, word); delivered (two grey, word); read (two blue, word, time) |
| `#report-msg`, `#import-msg`, `#pro-msg`, the plans message | one receipt, fixed: two blue ticks, "已读 / Read", the minute it came on screen |''',
    '''| `.doc-bubble` | empty outline "PDF"; in a draft "PDF · 选了价目才有 / PDF · NEEDS A RATE"; sent (one grey tick, word); delivered (two grey, word); read (two blue, word, time) |
| `#report-msg`, `#import-msg`, `#pro-msg`, the plans message | sent (one grey tick, "已发出 / Sent"); read (two blue ticks, "已读 / Read", the minute it was read) |''')

# ===================================================================== 8 rules
rep('''5. **Scroll.** No listener cancels wheel or touch events; no snapping; nothing is pinned except the top bar (and, at 900 and up, each margin note is sticky inside its own episode, which moves no content and takes no scroll).
6. **Nothing runs on its own clock after it lands.** No loops. S1 is 2,420 ms; every other timed move is 440 ms or less.''',
    '''5. **Scroll.** No listener cancels wheel or touch events; no snapping; nothing is pinned except the top bar (the margin notes are no longer sticky). Two `preventDefault` calls exist: the rail's arrow keys and the language checkbox's own click.
6. **Nothing loops.** S1 is 2,420 ms. Every other timed move is 217 ms or less and every re-cut 440 ms or less. A receipt is cuts on a clock: 260 ms to its one cut for the four attachment messages, 260 and 520 ms for the PDF's two, once, and then it stops.''')
rep('''9. **No flashing above three a second** over more than a quarter of a 341 x 256 box: measured 0.1% (S1).''',
    '''9. **No flashing above three a second** over more than a quarter of a 341 x 256 box: by the critic's count, ''' + FL7 + ''' (S1).''')
rep('''a receipt changing → a cut; an episode changing''', '''a receipt changing → a cut on a clock; an episode changing''')

# ===================================================================== 9 hard limits
rep('''8. Simplified Chinese by default with an English toggle; every string in both, avatar initials and the meta description included.''',
    '''8. Simplified Chinese by default with an English toggle; every string in both, avatar initials and the meta description included. The toggle is a native control and changes every visible string with scripts off as well (not `lang`, the title or the description).''')

# ===================================================================== 10 open items
s += '\nZZZ_END\n'
block('## 10. Open items', 'ZZZ_END',
'''## 10. Open items

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
11. **Chromium only.** `:has()`, `display: contents` on `.tail`, `clip-path` polygons with `calc()` and a visible child inside a hidden parent were not tried in Safari or Firefox.''')
s = s.replace('\nZZZ_END', '')
for k, v in VAL.items():
    assert v != 'TBD', k
    s = s.replace(k, v)
assert '@@' not in s
io.open(R + 'tools/borrowings_v4_body.md', 'w', encoding='utf-8').write(s)
print('body written', len(s))
