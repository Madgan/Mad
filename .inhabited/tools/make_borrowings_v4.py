# Builds borrowings_v4.md from borrowings_v2.md (which is not edited) and tools/borrowings_v4_body.md. Carried over unchanged:
# palette 1.1 and 1.2, the verdicts and rationales of both competitor tables, the table summary. The build-location cells
# and the manifest entries below are those of make_borrowings_v3.py with the changes of rebuild 3 (marked "v4").
# Every frame cited is checked to exist on disk and to be newer than the build.
import io, re, os
R = '/home/user/Mad/.inhabited/'
v2 = io.open(R + 'borrowings_v2.md', encoding='utf-8').read()
def between(a, b):
    i = v2.index(a); j = v2.index(b, i); return v2[i:j]

# ------------------------------------------------------------------ competitor tables: new build-location cells
B = {
 'Hero staging': '`#hero .hero-stage`: S1 (`.mover`, `.smear`, `.hang`, `.catch`, `.catch-tr`, `#sheet`). Frames: `rebuild3_s1_390zh_a.png` to `_g.png` (page clock), `rebuild3_rt390zh_f04-07.png` to `rebuild3_rt390zh_f12-15.png` (wall clock, consecutive)',
 'Trial offer in the first screen': '`#hero .cta-trial` (y 575 to 631 at 390), `header.topbar .cta-trial` (44 px high). `rebuild3_rest_390_zh.png`, `rebuild3_rest_390_en.png`',
 'Trial terms line': '`#hero .trial-terms` (the second line inside the trial button, y 608 to 620). `rebuild3_rest_390_zh.png`',
 '"No credit card" promise': '`#hero .hero-cta .trial-terms` and the note of `#pricing`: the offer is stated as the trial and the two prices and nothing else. No card wording exists in the file. `rebuild3_rest_390_zh.png`',
 'How the product is shown': '`.invoice-sheet` (`#sheet`, `#story .leaf`), `#story .sis-card`, `#import .review-card` with `#import .review-state`, `#reports .month-bars`. `rebuild3_sec390zh_01.png` to `_03.png`',
 'Product framing on a phone': '`#sheet` (280 px wide at 390, no text under 11 px: name 14, rows 12, total 18), `#story .leaf` at the same size, `#report .detail`. Audit: 0 visible text runs under 11 px. `rebuild3_rest_390_zh.png`, `rebuild3_story390zh_a.png`',
 'Motion': 'S1 to S13 in section 6: `.mover`, `.smear`, `.catch`, `.leaf`, `.stub`, `.bar`, `.old-file`, `.wrap-checked`, `.token-strip`. `rebuild3_s1_390zh_*.png`, `rebuild3_story390zh_a.png`, `_b.png`, `rebuild3_sec390zh_02.png`, `_03.png`',
 'Narrative order': '`main.thread`: `#hero`, then `#story` (today), `#reports` (month end), `#import`, `#pro`, `#pricing` (day one), each opened by a `.msg.in` question and closed by a `.notice`. `rebuild3_sec390zh_01.png` to `_04.png`',
 'Interaction': '`.picker-client .tile`, `.picker-rate .rstrip`, `.cut-rail`, `#report .mcol`, `#import .approve`, `#pro .token-btn`. `rebuild3_client_tanjung_390zh_a.png`, `rebuild3_taps_390zh.png`',
 'Compliance badge': '`footer .trust-line`: what is true stands where a badge would (storage region, isolation, registration number). No badge element exists. `rebuild3_sec390zh_04.png`, fourth frame',
 'User count': 'no element; nothing in the file carries a count. In its place: `#sheet` and the product views, and `footer .trust-line`',
 # v4: the footer has six links; they are named
 'Navigation depth': '`header.topbar`: four items (wordmark, `.lang-toggle`, `.signin`, `.cta-compact`). `footer`: six links, each to an existing route: Trust (`footer .trust-line a`), Contact (`footer .support-whatsapp a`), and Terms, Privacy, Cookies and Sign in (`footer .legal a` x 4). No product, solution, partner or blog link exists; the 14 links on the page are these six, sign in once more in the top bar, sign up five times, and two in-page anchors (`#top`, `#hero`). `rebuild3_rest_390_zh.png`, `rebuild3_m390zh_b.png` (last frame)',
 # v4: what the control is, and what it does with scripts off
 'Language switch': '`header.topbar label.lang-toggle`, holding a native checkbox `#lang-en` with `role="switch"`, 72 x 44, in the first screen. With script it is S11 (thumb travel, the strings cut on one frame, the reader\'s place held): `rebuild3_rest_390_en.png`, `rebuild3_lang_390_a.png`. With scripts off it still switches every visible string, because the stylesheet reads the checkbox with `html:has(#lang-en:checked)`: checked in a no-script context at 390 and 1280, by click and by the Space key (`rebuild3_nojs_lang_390_a.png`, `rebuild3_nojs_lang_1280_a.png`). Not changed without script: the `lang` attribute, the title, the description, and the place on the page is not held. A browser with neither script nor `:has()` stays in Chinese',
 'Typography': '`.hero-claim h1` (Noto Sans SC 700; Bricolage Grotesque 800, `opsz` 27 to 40), `.notice` and at 900 and up `.nt` (Bricolage Grotesque 400, 18 px), `.invoice-sheet` and `.msg` (Instrument Sans), `.readout` and `.catch.amt` (Kanit). `rebuild3_rest_1280_zh.png`, `rebuild3_rest_1280_en.png`, `rebuild3_d1280en_b.png`',
 'Color': '`body` grounds `#0B1216`, `#0B2346`, `#2A1606`; `.beam`; `.invoice-sheet` as the one light object. `rebuild3_rest_1280_zh.png`, `rebuild3_cut_390.png`, `rebuild3_cut_1280_dayone.png`',
 'Layout': 'one lane (`.col`); the first 640 px at 390 hold four blocks (`.fwd-label`, `.hero-claim`, `.hero-stage`, `.hero-cta`); `.cut-rail` starts at y 645. Total 5,079 px in Chinese at 390. At 900 and up the lane is 480 px, under the stage on the right, with one margin column on its left (`.tc`) in which each note stands at the height of the thing it is about (`.nt`); not a feature grid. `rebuild3_rest_390_zh.png`, `rebuild3_d1280zh_b.png`, `rebuild3_d1280zh_c.png`',
 'Pricing display': '`#pricing .plan[data-plan="basic"]`, `#pricing .plan[data-plan="pro"]`. `rebuild3_sec390zh_04.png`',
 'Pricing tactics': '`#pricing .plan` x 2: one annual price each, no promotion, no per-day figure. `rebuild3_sec390zh_04.png`',
 'Data display': '`#reports .month-bars`, `#report .detail`. `rebuild3_sec390zh_02.png`',
 'Data density': '`#report .detail`: one month at a time, three figures (14 px, 14 px, 26 px). Nothing is printed under the bars; the ranking shows order and count only. `rebuild3_sec390zh_02.png`, `rebuild3_taps_390zh.png` (a month tapped)',
 'Empty and error states': 'designed all the way down. `#sheet .slot-empty` (S1). Draft with no rate: `#sheet.is-draft` (red `.draft-tape`, one dashed slot, no crossing, no record block), `#story .leaf.is-draft` still on its stub place, `.stub-slot` ("存根 · 选了价目才有"), `.doc-bubble[data-state="empty"]` ("PDF · 选了价目才有"), no ticks, no 014 on the month, the draft left out of the ranking: `rebuild3_draft_390zh.png` (four frames), `rebuild3_draft_390en.png`. Import waiting: `#import .review-state.rs-wait` under a red tape label: `rebuild3_taps_390zh.png`, second frame',
 'Support channel': '`footer .support-whatsapp`. `rebuild3_sec390zh_04.png`, fourth frame',
}
I = {
 'Hero staging': '`#hero .hero-stage .invoice-sheet` (y 181 to 473 at 390). `rebuild3_rest_390_zh.png`',
 'Claim in the first screen': '`#hero .hero-claim`, y 77 to 167, above the stage (173 to 567) and never on it; at 900 and up beside it, at the head of the column that the notes then run down. `rebuild3_rest_390_zh.png`, `rebuild3_rest_1280_zh.png`',
 'Starting state of the invoice': '`#sheet .slot-empty[data-slot]`: the blank sheet exists only from 300 ms of S1 until each slot is filled; the still is the filled sheet. `rebuild3_s1_390zh_a.png`, fourth frame',
 'Motion': 'S1 in `#hero .hero-stage`. `rebuild3_s1_390zh_b.png` to `_f.png`',
 'Narrative': '`main.thread`, six episodes; see the Bukku row "Narrative order". `rebuild3_sec390zh_01.png`',
 'Interaction: try it without an account': '`.picker-client`, `.picker-rate`, `.invoice-sheet .total`; what he picks is carried down the page (`#story .chat-head`, `.leaf`, `.sis-card`, `.stub`, `#report .rank`). `rebuild3_client_tanjung_390zh_a.png`, `_b.png`',
 'Interaction: input method': '`.picker-client .tile` (3) and `.picker-rate .rstrip` (3): taps only; there is no text field on the page. `rebuild3_client_tanjung_390zh_a.png`',
 'Page color': '`body` and its three grounds; only `.invoice-sheet`, `.report-screen`, `.review-card`, the stub and the tiles are light. `rebuild3_cut_390.png`',
 'Typography on the page': '`.hero-claim h1`, `.notice`, and at 900 and up `.nt` in the margin. `rebuild3_rest_390_en.png`, `rebuild3_d1280en_b.png`',
 'The payoff: PDF': '`#story [data-beat="pdf"]` (the `.doc-bubble`, with the leaf dropped into it). `rebuild3_story390zh_b.png`',
 'Primary button': '`.cta-trial` and `.composer` are the only calls to action and both go to sign-up. `.doc-bubble .file-bar` and `#report-msg .file-bar` are labels inside a message, not controls; no download control exists',
 'Layout': 'at 390: `.cut-rail`, `.picker-client`, `.picker-rate` under the sheet in one column (`rebuild3_rest_390_zh.png`). At 900 and up: `.console` is a row under the stage (transport, clients, rates), full width of the first screen; nothing sits in a column beside the sheet except the claim and the trial button (`rebuild3_rest_1280_zh.png`, `rebuild3_rest_1280_en.png`)',
 'Sample data': 'one yellow `.tape-label` per episode, on the thing that carries the figures: `#sheet`, `#story .leaf`, the header of `#report-msg`, `#import-msg`, `#pro-msg`; plain small labels where a second one would repeat it: `.chat-head .smp` x 3 ("示例聊天 / sample chat"), `.sc-head .smp` ("示例资料 / sample data"); `.sample-note`. `rebuild3_sec390zh_01.png`, `rebuild3_sec390en_01.png`',
 'Empty and error states': 'same places as the Bukku row "Empty and error states"',
 'Social proof': 'no element; nothing in the file carries a count or a quote',
 'Price': '`#hero .trial-terms` (first screen) and `#pricing .plan` x 2. `rebuild3_rest_390_zh.png`, `rebuild3_sec390zh_04.png`',
 'Text under the tool': 'one `.notice` per episode (five in all), each fact from `facts.md` once; on a phone it is one short paragraph under the attachment, at 900 and up its sentences stand beside the things they are about. `rebuild3_sec390zh_04.png`, `rebuild3_d1280zh_c.png`',
 'Sound': 'global (no audio or video element); captions on `#hero .stage-caption` and one `.notice` per episode',
}
def retable(table, mp):
    out = []
    for line in table.split('\n'):
        if line.startswith('| ') and not line.startswith('| Element') and not line.startswith('|---'):
            cells = line.split(' | ')
            key = cells[0][2:].strip()
            if key in mp:
                cells[-1] = mp[key] + ' |'
                line = ' | '.join(cells)
        out.append(line)
    return '\n'.join(out)
t_b = retable(between('\n#### vs Bukku (idx 6)\n', '\n#### vs Invoice-Generator.com (idx 19)\n'), B).strip() + '\n'
t_i = retable(between('\n#### vs Invoice-Generator.com (idx 19)\n', '\n#### What the two tables say together'), I).strip() + '\n'
t_two = between('\n#### What the two tables say together', '\n### Hook notes for the build').strip() + '\n'
pal_keep = between('### 1.1 Palette gate', '### 1.3 Stage palette').rstrip() + '\n'

# ------------------------------------------------------------------ manifest: v2 entries, with overrides and additions
man_src = between('### style_tags', '## 5. Assembly')
axes = []
for blk in re.split(r'\n(?=### )', man_src.strip().rstrip('-').strip()):
    lines = blk.split('\n'); name = lines[0][4:].strip(); saw = lines[1]
    ents = re.findall(r'- %s\[(\d+)\] = (.*)\n  derived from: (.*)' % re.escape(name), blk)
    axes.append([name, saw, [[v, d] for _, v, d in ents]])
AX = {a[0]: a for a in axes}
def setv(axis, i, val=None, der=None):
    e = AX[axis][2][i]
    if val is not None: e[0] = val
    if der is not None: e[1] = der
def add(axis, val, der): AX[axis][2].append([val, der])

AX['color_palette'][1] = 'Saw: framing + seeds (anchors 01, 02) + constraint. Hidden: designer, competitors, domain anchors, typography. (The tape colours come from a domain anchor and are not claimed here; see 1.2 and `inspirations[5]`.) Every fill on the page that is not a tape colour is bound in this axis, the three grounds included.'
setv('color_palette', 0, '"`#0B1216` night ground" on `body` (today), `.hero-stage`, `.plan`')
setv('color_palette', 3, '"`#53BDEB` tick blue" on `[data-state="read"] .ticks`, `.ck`, and the blue bars of the smear (`.smear .tr`, `.catch-tr`)')
setv('color_palette', 8, '"colour changes state by cut only: a tick goes grey to blue in one frame; the ground of a whole episode, the top bar and the chip that names the episode change in one frame"')
setv('color_palette', 9, '"transparency is fixed wherever it is used (the bars of the smear at 0.6 and 0.42); no colour ever interpolates toward the ground"')
setv('color_palette', 10, '"`#0F394B` light, laid over the thread as one flat band with hard edges" on `.beam`. Its hue is 198 degrees, which is the hue of the tick blue `#53BDEB` (198 degrees) taken down to 18% lightness; it is not a hue of its own',
     'framing "double ticks" (the hue: the read tick\'s blue) + seed *Night Mail* "exteriors where the train is a band of light against dark country" (the form: a band; the film gives no hue, and none is taken from it) + constraint "Everything is either there or not there" (a light with an edge, not a fall-off)')
setv('color_palette', 11, '"`#12A07E` streak green and `#B9D3CC` pale grey, beside tick blue, on the bars of the smear" on `.smear .tr[data-c]`, `.catch-tr[data-c]`',
     'framing (the outgoing green of the thread raised in saturation, and the pale tick grey of cp[4]) + seed *Night Mail* "the side of the speeding mail van is a streak of lit windows"')
add('color_palette', '"`#0B2346` month-end ground" on `body[data-ep="month"]`, `.ep[data-ep="month"]`. Hue 216 degrees: the ballpoint blue of cp[7] (`#1F5FBF`, 216 degrees) taken down to night. Against the first ground its luminance stands at 1.21 to 1 (v2: 1.03)',
    'seed crossed cheque "the drawer\'s handwriting in pen" (the pen\'s blue, already chosen in cp[7]) + constraint "every change of state happens as a cut" (an episode has a ground, and the ground is cut)')
add('color_palette', '"`#2A1606` day-one ground" on `body[data-ep="dayone"]`, `.ep[data-ep="dayone"]`, `footer`. A lamp-warm dark; the value is this sub-pass\'s choice and was not measured from anything',
    'seed *Night Mail* "night interiors lit by work lamps" + constraint "every change of state happens as a cut"')
add('color_palette', '"`#05090B` near-black" behind `.stage-caption` and, on a phone, `.notice`',
    'framing (the thread\'s centred system notices sit in their own darker box)')
add('color_palette', '"working neutrals, each a tint of cp[0], cp[5] or cp[6], listed so that no fill is unlogged: `#020507` hard shadow under the sheet; `#17242C` wallpaper stroke on the stage; `#3A464D` edge of filed rows; `#AEB8BD` dates on filed rows; `#5A6268` labels on paper; `#95ACB9` unpicked language label; `#50626C` and `#0E171C` phone frames of the nested screenshot; `#C9C4B4`, `#8E8A7D`, `#DAD6C8`, `#9AA3A8`, `#D9D5C8` paper greys on the old files and the ranking rules"',
    'framing "screenshots of screenshots" (phone frames, thread wallpaper) + seed crossed cheque "pale printed security background" and "small … caps for the printed labels"')

setv('typography', 0, '"Bricolage Grotesque, primary Latin: headlines 800 (`h1 .en`, `.wordmark`, `.price b`), page copy 400 (`.hero-sub`, `.notice` and its `.nt`, `.plan li`, `.sample-note`, `footer`), controls and emphasis 600 (`.cta-trial`, `.trial-terms`, `.signin`, `.lt-track`, `.replay`, `.composer`, `.pk-label b`, `.plan h3`); a Latin run inside a Chinese string takes that string\'s weight (500 in a control, 400 in copy); width fixed at 100". Computed on the page at 390: 800, 600, 500 and 400 only')
setv('typography', 1, '"Bricolage Grotesque optical size held low, set at or near the font size and never above 40: 31 and 27 on the phone headline, 40 and 37 on the desktop headline, 32 on prices"')
setv('typography', 2, '"Noto Sans SC, Chinese companion: headlines 700 (`h1`), controls, thread and product text 500, page copy 400, never above 700". Computed at 390: 700 on 2 runs, 500 on 134, 400 on 44, nothing else')
setv('typography', 3, '"Instrument Sans, Latin text inside the thread, the product screens and the invoice, 400 to 700 (computed maximum 700, `.record-block .mark b` included), width 100; nothing on the sheet below 11 px at 390"')
setv('typography', 4, '"Kanit 700 italic on an amount while it is in flight (`.catch.amt`, `.fly.amt`); every fragment in flight leans 12 degrees (`skewX(-12deg)`), the lean of that italic, and is cut upright where it lands; Kanit 700 upright on the `.cut-rail` readout, the one figure that travels with a knob; nowhere else, never copy"',
     'Typography locked, role table, pick idx 10 ("true italics that lean like speed"; "an accent for the few moments where something moves"); condition 5')

setv('key_visual_elements', 5, '"two rows of tap targets under the sheet: three clients, three rates; at 1120 and up they stand in one row under the stage with the transport" at `.picker-client`, `.picker-rate`, `.console`')
setv('key_visual_elements', 6, '"a record stub across the head of the leaf, joined to it by a perforated dashed rule" at `#story .stub`, `.perforation`')
setv('key_visual_elements', 7, '"the leaf itself, at reading size, dropped into an outgoing document bubble: file bar, page count, ticks, word, time" at `#story .doc-bubble`, `#story .leaf`')
setv('key_visual_elements', 13, '"each product view arrives as an attachment in an outgoing message, with a forwarded header and a file bar; each episode opens with the asker\'s grey bubble and a chat header, and the first chat is the chat of whichever client he picked" at `.msg.in`, `.msg.out.attach`, `.at-head`, `.file-bar`, `.chat-head`, `.date-chip`')
# v4: the margin as built
add('key_visual_elements', '"at 900 and up, two columns all the way down: the thread is one 480 px lane that ends on the stage\'s right edge, so the sheet in the first screen and the leaf that lands in his reply share their left edge; on its left, at the height of the thing each is about, stand the sentences of that episode\'s note, and no heading; the footer keeps the same two columns" at `.hero-grid`, `.tc`, `.tc>.notice`, `.nt`, `.tail>.elapsed`, `footer .col`',
    'framing (a thread is one lane; what is said about a message stands beside it, not inside it; "a file landing in the thread": the thing that lands is the thing he watched) + seed crossed cheque, element 4 (the leaf that leaves is the same leaf, so it keeps its edge) + competitor Invoice-Generator.com row "Layout" (diverge: controls under the object, not in a side column) + competitor Bukku row "Layout" (diverge: not a grid of feature sections)')
setv('key_visual_elements', 14, '"a slim top bar: wordmark, language (a switch that is a native checkbox, so it works with scripts off), sign in, trial" at `header.topbar`, `label.lang-toggle`, `#lang-en`')

# v4: no slab; separate tines; bars that start ahead of the edge
setv('imagery', 1, '"the smear is drawn, not filtered. While the band runs no bubble is drawn as a bubble and none of its text is drawn. In its place stand 5 to 12 separate tines in the bubble\'s own colour, uneven in width (2 to 22 px at 390), in where they start (on the bubble\'s leading edge, or 0.3 to 2.5em behind it) and in length, each cut off on a slant; at most four scraps of that edge, none deeper than 1.2em (0.5 to 1.1em as built), join neighbours; there is no slab. Over them, three to five thin bars along the travel (2.6 to 8.5 px wide, 76 to 185 px long at 390, cut to a point at the trailing end, inside the bubble\'s own width) in tick blue, thread green and pale grey at fixed 0.6 and 0.42, two or three of them starting 2 to 4em ahead of the edge. Alternate steps print the bars at a different length. All of it is cut on with the first step and cut off with the last; no blur filter"')
setv('imagery', 7, '"a message that hangs still in the band while the thread streaks behind it, and from which the fragment is taken; the first one hangs from the first step of the run, before the sheet is there, so that some one thing is sharp and still in every frame of the run"')
setv('imagery', 5, '"the PDF in the thread is the real sheet at full size, moved there by two transforms (a tear sideways along the perforation, then a drop), so the thing that lands in the thread is visibly the thing he just watched being made"')

setv('surface_treatment', 1, '"each episode has its own night (values bound in `color_palette[0]`, `[12]`, `[13]`). The whole ground and the top bar change on one frame as the episode\'s date chip passes mid-screen, and on that frame the chip itself is cut from grey to paper white"')
setv('surface_treatment', 6, '"bubbles are flat fills with a 9 px radius and a tail; on a phone the page\'s own narration sits in centred notices on near-black; at 900 and up the same sentences stand on the ground itself in the left margin, each under a dashed rule"')

setv('ornament', 0, '"double ticks as the chat\'s receipt glyph, on his own five outgoing messages and nowhere else: one grey, two grey, two blue, always beside a word, with a time once read. Each receipt is seen to change, once (S4, S13). They report nothing about SIS; SIS states are carried by tape labels"')
setv('ornament', 1, '"a forwarded label with its arrow, italic: once at the very top (`.fwd-label`), on two messages of the hero thread (`.bubble .fw`), and as the header of each product attachment (`.at-head`)"')
setv('ornament', 2, '"a perforated rule (4 px dash, 4 px gap): between stub and leaf, above the footer, and at 900 and up as the leader that runs from each margin note across to the thing it is about" (solid 1 px rules remain on the paper and under the top bar)')
setv('ornament', 4, '"one number, INV-014, repeated in seven places: the sheet\'s meta line, between the crossing strokes, the record block, the machine line, the stub (both faces), the PDF file name, the tag on the month\'s bar"')

# v4: the receipt is a clock
setv('motion', 1, '"arrival by cut: a message, a caption, a digit, a tick or a whole sheet of paper is not there and then is, on one frame. A receipt advances by cuts on a clock and never with the thumb: the PDF\'s from the frame the leaf lands (one grey tick; two grey 260 ms later; two blue at 520 ms), each of the other four from one grey to two blue 260 ms after the first frame on which its line is wholly on screen"',
     'framing ("a tick turning from one to two", one of the "small precise motions he can judge the way he judges an edit", recorded at Step 4: an edit is timed, so the tick is timed) + constraint "Everything is either there or not there"')
setv('motion', 2, '"forwarding is the basic move: a fragment leaves one place and lands in another by one linear translate (a catch 120 to 140 ms, a re-cut 160 ms, the leaf\'s drop 160 ms over 136 px), stops dead and settles in a single frame of 17 ms"',
     'framing "forwarded-message" (content moved from one place to another; "a file landing in the thread") + constraint "movement"')
setv('motion', 4, '"scrolling is the thread\'s own scroll: never intercepted, pinned or snapped; a move tied to it is a function of scroll position and runs backwards (the tear follows the thumb; the drop is set off by a position and undone by going back above it, and the receipt in that message goes with it)"')
# v4: trimmed to what the constraint carries
setv('motion', 3, '"the band\'s travel in the opening is a row of cuts, not a glide: each position is held, then replaced on one frame, and no place between two positions is drawn". (Why this band is cut where a continuous translate would also be allowed, and its rate of 12 a second, are not this axis\'s to say: that is the step-print, which comes from an input this axis may not see and is bound in `imagery[0]` and R03.1.)',
     'constraint "every change of state happens as a cut or through movement" (a cut of position is the constraint\'s own first move)')
# v4: measured ranges (tools/rb3_durations.js: every animate() call and CSS transition the page makes, logged)
setv('motion', 5, '"timing table, as measured from the page: linear travel and hard stops only, no ease-out tail, no spring. Cut 0 ms. Stroke 80 to 110 (crossing 110 in the opening, 80 when a draft is completed, 90 when it is taken back; every strike-through 90). Catch 120 to 140, flight of a re-cut 160, each plus one settle frame of 17. Drop 137 to 177 with its settle frame (the 014 tag 137, an old file 157, the leaf 177); the same things lifted back 140. Wipe 100 to 217 (a field 100; number and date and every re-stamp 120; the record block 170 in the opening; the green wrap off 160; the token 180; the green wrap on 217 with its settle). Flip 160 to 200 (an old file 160 after a wait of 150; the stub 200). Knob, bracket and language thumb 80; rows closing up 100. One step of the band 84. A receipt\'s clock 260 between cuts. Only the opening sequence (2,420) and the PDF\'s receipt (three cuts over 520) last longer than 440 ms". The full list by sequence is section 6')
setv('motion', 6, '"the stylesheet draws the finished frame; every animation plays from an earlier state into it; reduced motion is that frame, reached by a cut. When motion is allowed the earlier state is set before first paint and held for a fixed 200 ms from the first painted frame; nothing waits for the web fonts, and when they arrive mid-run the clock is not stopped for them"')
add('motion', '"the language cut keeps the reader\'s place: the block on the reading line (40% down the screen), or the one sentence of a note, stays on the reading line, whatever the scroll position"',
    'framing ("a thread is a vertical, thumb-native narrative", recorded at Step 4: only the thumb moves the thread) + constraint (the switch is a cut of the strings; a cut that also moved the page would be a second, unauthored move)')

setv('inspirations', 0, '"Malaysian crossed cheque leaf: the crossing, the strike, words and figures, the stub that stays while the leaf tears off along the perforation, the machine line"')
setv('inspirations', 1, '"*Night Mail* (1936): the catch, the pouch that hangs still (from the first step of the run), the pigeon-holes, cut length as tempo (in S1, S6 and S8), the drop (a hard-stopped fall of 136 px into the thread)"')
setv('inspirations', 2, '"*Chungking Express* (1994): one sharp subject against a step-printed world whose passing figures are streaks without faces or outlines; exact times; one object repeated; hard cuts between episodes; a lit counter at night"')

man = []; tot = 0; fr = 0; per = []
for name, saw, ents in axes:
    man.append('### ' + name + '\n' + saw + '\n'); c = 0
    for i, (val, der) in enumerate(ents):
        man.append('- %s[%d] = %s\n  derived from: %s' % (name, i, val, der)); tot += 1
        if 'framing' in der.lower(): c += 1
    fr += c; per.append('%s %d of %d' % (name, c, len(ents))); man.append('')
count_line = 'Citation count across all %d entries: the framing is cited in %d (%d%%). Per axis: %s.' % (tot, fr, round(100.0 * fr / tot), ', '.join(per))

body = io.open(R + 'tools/borrowings_v4_body.md', encoding='utf-8').read()
out = (body.replace('{{PAL_KEEP}}', pal_keep).replace('{{BUKKU}}', t_b).replace('{{IG}}', t_i).replace('{{TWO}}', t_two)
           .replace('{{COUNT}}', count_line).replace('{{MANIFEST}}', '\n'.join(man).rstrip() + '\n'))
for bad in ('{{', '@@', 'rebuild1_', 'rebuild2_', 'N/A |'):
    assert bad not in out, (bad, out[max(0, out.index(bad) - 120):out.index(bad) + 80])
missing = sorted(set(f for f in re.findall(r'rebuild3_[A-Za-z0-9_\-]+\.png', out) if not os.path.exists(R + 'v1_critic/screens/' + f)))
assert not missing, missing
built = os.path.getmtime(R + 'designer/index.html')
stale = sorted(set(f for f in re.findall(r'rebuild3_[A-Za-z0-9_\-]+\.png', out) if os.path.getmtime(R + 'v1_critic/screens/' + f) < built))
assert not stale, ('older than the build', stale)
long_dash = re.findall(u'[\u2012\u2013\u2014\u2015]', out)
assert not long_dash, long_dash
io.open(R + 'borrowings_v4.md', 'w', encoding='utf-8').write(out)
print(count_line); print(len(out), 'bytes;', len(set(re.findall(r'rebuild3_[A-Za-z0-9_\-]+\.png', out))), 'distinct frames cited, all on disk')
