# Builds borrowings_v2.md from borrowings_v1.md: the palette section and the two competitor tables are carried
# over from v1 (tables with every build-location cell filled), everything else is rewritten for the rebuilt page.
import re, io
R = '/home/user/Mad/.inhabited/'
v1 = io.open(R + 'borrowings_v1.md', encoding='utf-8').read()

def between(a, b):
    i = v1.index(a); j = v1.index(b, i)
    return v1[i:j]

SCR = 'v1_critic/screens/'

# ---------------------------------------------------------------- competitor tables
BUKKU = {
 'Hero staging': '`#hero .hero-stage`: S1 (`.mover`, `.ghost`, `.hang`, `.catch`, `#sheet`). Frames: `rebuild1_sheet_s1_a.png` to `_f.png`, `rebuild1_sheet_rt_a.png`, `_b.png`',
 '"No credit card" promise': '`#hero .hero-cta .trial-terms` and `#pricing .notice`: the offer is stated as the trial and the two prices and nothing else. No card wording exists in the file. `rebuild1_rest_390_zh.png`',
 'Product framing on a phone': '`#sheet` (280 px wide at 390, no text under 11 px: name 14, rows 12, total 18), `#story .leaf` at full size, `#report .detail`. Audit: 0 visible text runs under 11 px on the page. `rebuild1_rest_390_zh.png`, `rebuild1_sheet_story_a.png`',
 'Motion': 'S1 to S12 in section 6: `.mover`, `.catch`, `.leaf`, `.stub`, `.bar`, `.old-file`, `.wrap-checked`, `.token-strip`. `rebuild1_sheet_s1_*.png`, `rebuild1_sheet_story_*.png`, `rebuild1_sheet_import_*.png`',
 'Narrative order': '`main.thread`: `#hero`, then `#story` (today), `#reports` (month end), `#import`, `#pro`, `#pricing` (day one), each opened by a `.msg.in` question and closed by a `.notice`. `rebuild1_sheet_walk390zh_a.png`, `_b.png`',
 'Interaction': '`.picker-client .tile`, `.picker-rate .rstrip`, `.cut-rail`, `#report .mcol`, `#import .approve`, `#pro .token-btn`. `rebuild1_sheet_taps.png`, `rebuild1_sheet_import_b.png`',
 'Compliance badge': '`footer .trust-line`: what is true stands where a badge would (storage region, isolation, registration number). No badge element exists. `rebuild1_sheet_walk390zh_b.png`',
 'User count': 'no element; nothing in the file carries a count. In its place: `#sheet` and the product views, and `footer .trust-line`',
 'Navigation depth': '`header.topbar`: four items (wordmark, `.lang-toggle`, `.signin`, `.cta-compact`); `footer .legal`: four links. Nothing else leaves the page. `rebuild1_rest_390_zh.png`',
 'Typography': '`.hero-claim h1` (Noto Sans SC 700, Bricolage Grotesque 800, `opsz` 31), `.invoice-sheet` and `.msg` (Instrument Sans), `.readout` and `.catch.amt` (Kanit). `rebuild1_rest_1280_zh.png`',
 'Color': '`body` grounds `#0B1216`, `#081530`, `#1B1208`; `.beam`; `.invoice-sheet` as the one light object. `rebuild1_rest_1280_zh.png`, `rebuild1_walk1280zh_03.png`',
 'Layout': 'one column (`.col`); the first 640 px at 390 hold four blocks (`.fwd-label`, `.hero-claim`, `.hero-stage`, `.hero-cta`); `.cut-rail` starts at y 645. Total 5,057 px in Chinese. `rebuild1_rest_390_zh.png`',
 'Pricing tactics': '`#pricing .plan` x 2: one annual price each, no promotion, no per-day figure. `rebuild1_sheet_walk390zh_b.png`',
 'Data density': '`#report .detail`: one month at a time, three figures (14 px, 14 px, 26 px). Nothing is printed under the bars; the ranking shows order and count only. `rebuild1_sheet_month.png`',
 'Empty and error states': '`#sheet .slot-empty` (S1), `.invoice-sheet.is-draft` (`rebuild1_sheet_focus.png`, third frame), `#import .review-state.rs-wait` with `#import-msg[data-state="sent"]` (`rebuild1_sheet_import_b.png`)',
}
IG = {
 'Claim in the first screen': '`#hero .hero-claim`, y 77 to 167, above the stage (173 to 567) and never on it. `rebuild1_rest_390_zh.png`',
 'Starting state of the invoice': '`#sheet .slot-empty[data-slot]`: the blank sheet exists only from 340 ms of S1 until each slot is filled; the still is the filled sheet. `rebuild1_sheet_s1_a.png`, fourth frame',
 'Motion': 'S1 in `#hero .hero-stage`. `rebuild1_sheet_s1_b.png` to `_e.png`',
 'Narrative': '`main.thread`, six episodes; see the Bukku row "Narrative order". `rebuild1_sheet_walk390zh_a.png`',
 'Interaction: input method': '`.picker-client .tile` (3) and `.picker-rate .rstrip` (3): taps only; there is no text field on the page. `rebuild1_sheet_taps.png`',
 'Page color': '`body` and its three grounds; only `.invoice-sheet`, `.report-screen`, `.review-card` and the tiles are light',
 'Typography on the page': '`.hero-claim h1`, `.msg`, `.notice`. `rebuild1_rest_390_en.png`',
 'Primary button': '`.cta-trial` and `.composer` are the only calls to action and both go to sign-up. `.doc-bubble .file-bar` and `#report-msg .file-bar` are labels inside a message, not controls; no download control exists',
 'Layout': '`.cut-rail`, `.picker-client`, `.picker-rate` sit under the sheet in one column. `rebuild1_sheet_walk390zh_a.png`, first frame',
 'Sample data': '`.tape-label.sample` on `#sheet` and on `.leaf`; `.sis-card .tape-label`; `.at-head .tape-label` on `#report-msg`, `#import-msg`, `#pro-msg`; `.chat-head .tape-label` x 3; `.sample-note`. `rebuild1_sheet_walk390zh_a.png`',
 'Empty and error states': 'same places as the Bukku row "Empty and error states"',
 'Social proof': 'no element; nothing in the file carries a count or a quote',
 'Price': '`#hero .trial-terms` (first screen) and `#pricing .plan` x 2. `rebuild1_rest_390_zh.png`',
 'Text under the tool': 'one `.notice` per episode (five in all), each fact from `facts.md` once. `rebuild1_sheet_walk390zh_b.png`',
}
def fill(table, mp, extra):
    out = []
    for line in table.split('\n'):
        if line.startswith('| ') and line.rstrip().endswith('| N/A |'):
            key = line.split('|')[1].strip()
            assert key in mp, key
            line = line.rstrip()[:-len('N/A |')] + mp[key] + ' |'
        for a, b in extra:
            line = line.replace(a, b)
        out.append(line)
    return '\n'.join(out)
t_b = between('\n#### vs Bukku (idx 6)', '\n#### vs Invoice-Generator.com (idx 19)').lstrip('\n')
t_i = between('\n#### vs Invoice-Generator.com (idx 19)', '\n#### What the two tables say together').lstrip('\n')
t_two = between('\n#### What the two tables say together', '\n### Hook notes for the build').lstrip('\n')
extra_b = [('| `#hero .cta-trial`, `header.topbar .cta-trial` |', '| `#hero .cta-trial` (y 575 to 631 at 390), `header.topbar .cta-trial`. `rebuild1_rest_390_zh.png` |'),
           ('| `#hero .trial-terms` |', '| `#hero .trial-terms` (the second line inside the trial button). `rebuild1_rest_390_zh.png` |')]
extra_i = [('| global (no audio elements); captions on `#story [data-beat]` |', '| global (no audio or video element); captions on `#hero .stage-caption` and one `.notice` per episode (rename logged below) |'),
           ('| `#story [data-beat="pdf"]` |', '| `#story [data-beat="pdf"]` (the `.doc-bubble`). `rebuild1_sheet_story_b.png` |')]
t_b = fill(t_b, BUKKU, extra_b); t_i = fill(t_i, IG, extra_i)
assert 'N/A' not in t_b and 'N/A' not in t_i

palette = between('## 1. Palette', '## 2. Per-reference borrowing log')

# ---------------------------------------------------------------- manifest
M = [
('style_tags', 'Saw: the framing\'s category only (vernacular / found). Hidden: everything else.', [
 ('"found-vernacular"', 'framing pole "vernacular / found", the category itself'),
 ('"thread-native"', 'framing category, "forwarded-message vernacular": the found format is a message thread'),
 ('"copy-of-a-copy"', 'framing category, "forwarded" and "screenshots of screenshots": found material that has been passed on and re-captured'),
 ('"time-stamped"', 'framing category, "double ticks": found messages carry their own delivery marks and times'),
]),
('mood', 'Saw: the framing\'s emotional register only. Hidden: designer, seeds, typography, competitors, constraint.', [
 ('"mid-thread, after hours"', 'framing register, a message that arrives inside an ongoing thread, opened on a phone between other things'),
 ('"nagged, then answered"', 'framing register, the "can you send the invoice again" request that sits unanswered until the reply lands'),
 ('"between peers"', 'framing register, a forwarded message comes from someone you know, not from a company'),
 ('"found, not staged"', 'framing register, grey bubbles, voice notes and screenshots of screenshots are ordinary and slightly messy'),
]),
('color_palette', 'Saw: framing + seeds (anchors 01, 02) + constraint. Hidden: designer, competitors, domain anchors, typography. (The tape colours come from a domain anchor and are not claimed here; see 1.2 and `inspirations[5]`.)', [
 ('"`#0B1216` night ground" on `body`, `.hero-stage`', 'framing "WhatsApp … vernacular" (the thread as it looks at night) + seed *Night Mail* "the train is a band of light against dark country"'),
 ('"`#1F2C33` bubble grey" on `.bubble`, `.msg.in`', 'framing "grey bubbles"'),
 ('"`#0F5345` outgoing green" on `.bubble.out`, `.msg.out`, `.doc-bubble`', 'framing "double ticks" (ticks belong to the sender\'s own messages, which the thread colours green)'),
 ('"`#53BDEB` tick blue" on `[data-state="read"] .ticks`, `.ck`, the first streak copy', 'framing "double ticks" (the read state)'),
 ('"`#E9EEF0` message text, `#8A9AA3` time-stamp grey, `#B9D3CC` time and tick grey on green" on text, `.mt`, `.st`', 'framing "forwarded-message vernacular" (message text with a smaller grey time beneath)'),
 ('"`#F5F2E9` pale printed paper" on `.invoice-sheet`', 'seed crossed cheque "pale printed security background"'),
 ('"`#14181B` document ink" on sheet text and rules', 'seed crossed cheque "small … caps for the printed labels" + seed *Night Mail* "black-and-white"'),
 ('"`#1F5FBF` ballpoint blue" on `.crossing`, `.strike`', 'seed crossed cheque "the drawer\'s handwriting in pen" and "two parallel diagonal strokes" (the entry does not state the pen\'s colour; blue is this sub-pass\'s choice and is recorded as such)'),
 ('"colour changes state by cut only: a tick goes grey to blue in one frame, and the ground of a whole episode changes in one frame"', 'constraint "every change of state happens as a cut or through movement, scale, clipping or masking"'),
 ('"transparency is fixed wherever it is used (streak copies at 0.6 and 0.42); no colour ever interpolates toward the ground"', 'constraint "A fixed, unchanging transparency value is allowed" and "An element fading to or from the background colour counts as the same thing"'),
 ('"`#0F394B` light, laid over the thread as one flat band with hard edges" on `.beam`', 'seed *Night Mail* "exteriors where the train is a band of light against dark country" + constraint "Everything is either there or not there" (a light with an edge, not a fall-off)'),
 ('"`#12A07E` second streak copy" on `.ghost[data-n=\'2\']`, `.catch.g2`', 'framing (the outgoing green of the thread, raised in saturation for the moving copy) + seed *Night Mail* "the side of the speeding mail van is a streak of lit windows"'),
]),
('typography', 'Saw: the Typography VS record in `sampling.md` only. No new generation; transcribed.', [
 ('"Bricolage Grotesque, primary Latin: headlines 800, page copy 400, controls and emphasis 600, every Latin run inside Chinese page text; width fixed at 100"', 'Typography locked, role table, pick idx 4; condition 1'),
 ('"Bricolage Grotesque optical size held low: `opsz` equals the font size up to a ceiling of 40"', 'Typography locked, condition 2'),
 ('"Noto Sans SC, Chinese companion: headlines 700, controls and product text 500 to 600, page copy 400, never above 700"', 'Typography locked, role table and condition 3'),
 ('"Instrument Sans, Latin text inside the thread, the product screens and the invoice, 400 to 700, width 100; nothing on the sheet below 11 px at 390"', 'Typography locked, role table, pick idx 8; conditions 1 and 4'),
 ('"Kanit 700 italic on an amount while it is in flight; Kanit 700 upright on the `.cut-rail` readout, the one figure that travels with a knob; nowhere else, never copy"', 'Typography locked, role table, pick idx 10; condition 5'),
 ('"tabular figures on every amount, date and time stamp"', 'Typography locked, condition 7'),
 ('"stack order Latin family, then Noto Sans SC, then system; the single recorded Google Fonts request; no fifth family; no lavender accent"', 'Typography locked, "Font stack order", the tested request, condition 6'),
]),
('key_visual_elements', 'Saw: framing + seeds (01, 02) + competitors (04, 05). Hidden: designer, domain anchors, typography, constraint.', [
 ('"a white invoice sheet with full anatomy, in the first screen, as the brightest object on the page" at `#hero .hero-stage .invoice-sheet`', 'competitor Invoice-Generator.com rows "Hero staging", "Invoice anatomy", "The invoice as a light sheet" (borrow)'),
 ('"the thread across the whole stage at message size, with the sheet laid over it: bubbles show on its left, in a band under it and in the gutter on its right: a forwarded label, a voice-note waveform, a screenshot of a screenshot, a question and a reply with ticks" at `.thread-band`, `.set-start`, `.set-end`', 'framing "grey bubbles, double ticks, voice notes, screenshots of screenshots"'),
 ('"six labelled pigeon-hole slots on the sheet (client, item, rate, date, total, PDF)" at `.slot-empty[data-slot]`', 'seed *Night Mail*, element 2, "labelled slots … that fill one piece at a time"'),
 ('"two diagonal pen strokes with a phrase between them across the sheet\'s corner" at `.crossing`', 'seed crossed cheque, element 1, "the crossing as the done gesture"'),
 ('"one trial button in the first screen whose second line is the two prices, and the same button again in the top bar" at `#hero .cta-trial`, `#hero .trial-terms`, `header.topbar .cta-trial`', 'competitor Bukku rows "Trial offer in the first screen", "Trial terms line", "Primary button label" (borrow)'),
 ('"two rows of tap targets under the sheet: three clients, three rates" at `.picker-client`, `.picker-rate`', 'competitor Invoice-Generator.com rows "Interaction: try it without an account" (borrow) and "Interaction: input method" (diverge: two taps, not typing)'),
 ('"a record stub joined to the leaf by a perforated dashed rule" at `#story .stub`, `.perforation`', 'seed crossed cheque, element 4, "tear-off with a counterfoil"'),
 ('"the leaf itself, at reading size, inside an outgoing document bubble: file bar, page count, time, ticks" at `#story .doc-bubble`, `#story .leaf`', 'framing "double ticks" (and the thread\'s document attachment) + competitor Invoice-Generator.com row "The payoff: PDF" + seed *Night Mail*, element 4, "the drop"'),
 ('"a rail of ten cut marks whose spacing shortens toward the end" at `.cut-rail`', 'seed *Night Mail*, element 3, "cut length as tempo: shots shorten toward completion, then a long final hold"'),
 ('"six months of sales and expenses bars, and under them one month\'s three figures at reading size" at `#reports .month-bars`, `#report .detail`', 'competitor Bukku row "Data display" (borrow) and "Data density" (diverge: one number per moment)'),
 ('"two plans side by side inside one outgoing message, RM price with the period, each with its list" at `#pricing .plan`', 'competitor Bukku row "Pricing display" (borrow) and "Pricing tactics" (diverge) + framing (a reply to "how much?")'),
 ('"a message composer as the last thing on the page, its send button being the trial button" at `.composer`, `.composer-send`', 'framing "forwarded-message vernacular" (a thread ends in the box where you reply) + competitor Bukku row "Primary button label"'),
 ('"the total in figures with the same amount in words beneath, and one labelled line of wide-set numerals on the sheet\'s bottom edge" at `.total`, `.total-words`, `.machine-line`', 'seed crossed cheque, elements 3 and 5'),
 ('"each product view arrives as an attachment in an outgoing message, with a forwarded header and a file bar; each episode opens with the asker\'s grey bubble and a chat header" at `.msg.in`, `.msg.out.attach`, `.at-head`, `.file-bar`, `.chat-head`, `.date-chip`', 'framing "forwarded-message vernacular: grey bubbles, double ticks" (a thread has two voices, attachments and its own date chips)'),
 ('"a slim top bar: wordmark, language, sign in, trial" at `header.topbar`', 'competitor Bukku rows "Navigation", "Language switch" (borrow), "Navigation depth" (diverge); competitor Invoice-Generator.com row "Navigation" (borrow)'),
]),
('imagery', 'Saw: framing + seeds (01, 02) + designer + constraint. Hidden: competitors, domain anchors, typography.', [
 ('"first-screen treatment: two speeds in one frame. The sheet is still and sharp; behind it and round it the thread streaks upward in whole steps, 12 a second"', 'designer signature work, the snack-bar shot ("one person stands still … sharp and slow, while the crowd passes … as streaked, step-printed blur") + seed *Night Mail* ("the pouch is the one sharp, legible object; the train and the landscape are smear")'),
 ('"the smear is drawn, not filtered: every passing bubble stretched to scaleY 1.5, with two copies behind it placed 22 and 47 px off the 64 px step, stretched 2.6 and 3.6 times along the travel, in tick blue and thread green at fixed transparency; no blur filter"', 'designer "step-printed so that movement drags and colour bleeds between frames" + constraint "A fixed, unchanging transparency value is allowed" + seed *Night Mail* limit "smear … is drawn (stretched shapes, repeated offset copies at fixed transparency)"'),
 ('"screenshots of screenshots drawn in code: last month\'s Word invoice inside a phone frame inside a phone frame, each generation offset and 2 degrees off the last"', 'framing "screenshots of screenshots" + designer condition 4 (his look translated into code-drawn UI, no photographs)'),
 ('"a voice note drawn as 16 still bars, a duration and one line of text saying what is buried in it; no play control"', 'framing condition "voice notes appear only as a visual; nothing depends on sound"'),
 ('"no photographs, no film stills, no people, no generated images; every picture is product UI or inline SVG and CSS"', 'designer condition 4 + seed *Night Mail* limit ("no photographs, film stills or images of people")'),
 ('"the PDF in the thread is the real sheet at full size, moved there by a transform, so the thing that lands in the thread is visibly the thing he just watched being made"', 'constraint (movement is a permitted change of state) + seed crossed cheque, element 4 (the leaf that leaves is the same leaf)'),
 ('"the sheet\'s zones are fixed like a printed leaf: meta top right, client and lines across the middle, figures ranged right, a numeral line on the bottom edge"', 'seed crossed cheque "Information sits in fixed zones"'),
 ('"a message that hangs still in the band under the sheet while the thread streaks behind it, and from which the fragment is taken"', 'seed *Night Mail* ("a leather mail pouch, which a moment ago hung still from a trackside post, is caught") + designer (one still, sharp thing against a moving world)'),
]),
('surface_treatment', 'Saw: framing + constraint + designer voice. Hidden: seeds, competitors, domain anchors, typography.', [
 ('"light is one flat shaft with hard edges across the thread, and the sheet throws one flat, hard shadow away from it; there is no soft fall-off anywhere"', 'designer voice ("dark, saturated, neon at night"; the lit counter where the still subject stands) + constraint "Everything is either there or not there" (read here as: a light has an edge). The ban on fog, glow and glass that sits beside this entry comes from `claude_anti_defaults.md`, which this axis may not cite; it is recorded in section 8, rule 10, and not claimed here.'),
 ('"each episode has its own night: teal-black, deep blue, warm brown-black. The whole ground changes on one frame as the episode\'s date chip passes mid-screen"', 'designer voice "hard cuts between short self-contained episodes" + constraint "every change of state happens as a cut"'),
 ('"thread wallpaper across the whole page: a small code-drawn doodle tile at fixed low contrast"', 'framing "WhatsApp … vernacular" (the wallpaper behind a thread)'),
 ('"paper is opaque: 1 px ink rules, square corners; nothing on it is translucent"', 'constraint "Everything is either there or not there" + designer condition 1 ("text and product UI at rest are sharp")'),
 ('"still grain on the hero thread only (one SVG turbulence tile at fixed transparency), never animated and never over the sheet"', 'designer condition 1 (roughness lives in the "before" only)'),
 ('"every wipe has a hard travelling edge; no feathered masks"', 'constraint "clipping or masking"'),
 ('"bubbles are flat fills with a 9 px radius and a tail; the page\'s own narration sits in centred notices on near-black"', 'framing "grey bubbles" (and the thread\'s centred system notices)'),
]),
('ornament', 'Saw: framing + designer + seeds (01, 02). Hidden: competitors, domain anchors, constraint, typography.', [
 ('"double ticks as the only status glyph: one grey, two grey, two blue, always beside a word and a time; on each attachment they are the episode\'s end signal"', 'framing "double ticks"'),
 ('"a forwarded label with its arrow, italic: once at the very top, and as the header of every attachment"', 'framing "forwarded-message"'),
 ('"a perforated rule (4 px dash, 4 px gap) as the only divider"', 'seed crossed cheque "tearing the leaf out along the perforated edge"'),
 ('"ballpoint strokes for the crossing and every strike-through: 2 px and 1.7 px, each bowed, the first with a hook where the pen lands and the second with a flick where it lifts"', 'seed crossed cheque, elements 1 and 2 ("two parallel diagonal strokes"; "cancelled by a single horizontal stroke"; "the drawer\'s handwriting in pen")'),
 ('"one number, INV-014, repeated in seven places"', 'designer "repetition of one small object until it means something" (the dated tins)'),
 ('"clock time to the second on every mark the system makes"', 'designer "its voice-over gives time and distance in exact figures"'),
 ('"a line of wide-tracked numerals along the sheet\'s foot, in three labelled groups (NO, DATE, SEN)"', 'seed crossed cheque, element 5, "a machine line along the foot"'),
 ('"labels on empty slots"', 'seed *Night Mail*, element 2, "each labelled with a destination"'),
]),
('motion', 'Saw: framing + constraint. Hidden: designer, seeds, competitors, domain anchors, typography. (Moves that come from the hidden inputs, such as the catch, the hanging message, the frame rate, the crossing, the tear-off, the flip and the wrap, are logged in section 2 against their anchors. Section 6 assembles them and tags each component with its source.)', [
 ('"the whole vocabulary is five moves: a cut, a translate that stops dead, a scale, a clip wipe with a hard edge, a drawn stroke"', 'constraint "every change of state happens as a cut or through movement, scale, clipping or masking"'),
 ('"arrival by cut: a message, a caption, a digit, a tick or a whole sheet of paper is not there and then is, on one frame; ticks advance one grey, two grey, two blue"', 'framing ("a tick turning from one to two", recorded at Step 4) + constraint "Everything is either there or not there"'),
 ('"forwarding is the basic move: a fragment leaves one place and lands in another by one linear translate of 120 to 160 ms, stops dead, settles in a single frame; it leans 12 degrees while moving and is cut upright where it lands"', 'framing "forwarded-message" (content moved from one place to another; "a file landing in the thread") + constraint "movement"'),
 ('"thread travel is stepped: the band moves in whole jumps of one step and stops on a step; no position between two steps is ever shown"', 'framing (a thread advances one message at a time) + constraint (no blending between positions; a position is held or it is not)'),
 ('"scrolling is the thread\'s own scroll: never intercepted, pinned or snapped; a move tied to it is a pure function of scroll position and runs backwards"', 'framing ("a thread is a vertical, thumb-native narrative", recorded at Step 4)'),
 ('"timing table: linear travel and hard stops only, no ease-out tail, no spring. Cut 0 ms, stroke 110, catch 120 to 140, wipe 170, flip 200. Only the opening sequence runs longer than 420 ms"', 'constraint ("either there or not there": a tail that eases toward rest is the positional form of a fade and is left out by the same reasoning)'),
 ('"the stylesheet draws the finished frame; every animation plays from an earlier state into it with backward fill; reduced motion is that frame, reached by a cut. When motion is allowed the earlier state is set before first paint, so the finished frame is never shown and then taken away"', 'constraint, test 4 ("reached by a cut to the finished still, not by a slow fade")'),
 ('"hover, focus, pressed and disabled change by cut or by shape: a 1 px drop, a border weight, an outline, a dashed edge"', 'constraint, test 3'),
 ('"whatever the system writes arrives by a left-to-right clip wipe with a hard edge; whatever a person chooses arrives by a translate"', 'constraint "clipping or masking" and "movement"'),
 ('"hand transport: the thumb drags a knob along a rail, the knob\'s position sets where the opening sequence stands, and it runs backwards under the thumb"', 'framing ("a vertical, thumb-native narrative", recorded at Step 4: in a thread the thumb is what moves time) + constraint "movement" (the only thing that changes is position). The rail\'s uneven marks are not claimed here: they come from seed *Night Mail*, which this axis may not see, and are bound in `key_visual_elements[8]` and R02.3.'),
]),
('inspirations', 'Saw: all 7 bank anchors. Ran last. This is the cross-anchor summary; it is also where elements from the two domain anchors are bound, since no other axis may see them.', [
 ('"Malaysian crossed cheque leaf: the crossing, the strike, words and figures, the tear-off stub, the machine line"', 'anchor 01, `references/seed_crossed_cheque_ac_payee.md`, elements 1 to 5'),
 ('"*Night Mail* (1936): the catch, the pouch that hangs still, the pigeon-holes, cut length as tempo (in S1, S6 and S8), the drop"', 'anchor 02, `references/seed_night_mail_1936.md`, elements 1 to 4 and the description of the pick-up shot'),
 ('"*Chungking Express* (1994): one sharp subject against a step-printed world; exact times; one object repeated; hard cuts between episodes; a lit counter at night"', 'anchor 03, `sampling.md` "## Designer locked"'),
 ('"Bukku: trial and true terms in the first screen, RM plans side by side, slim top bar, labelled month report"', 'anchor 04, `sampling.md` "#### vs Bukku (idx 6)", borrow rows'),
 ('"Invoice-Generator.com: the invoice first, its anatomy, a light sheet, try it with no account, the PDF as payoff"', 'anchor 05, `sampling.md` "#### vs Invoice-Generator.com (idx 19)", borrow rows'),
 ('"Card labels and camera tape: the flip, the tape label, the row of slots, the green wrap, the lock switch, and the tape palette `#1E9E4A`, `#D4262C`, `#F2C418`, `#1F5FBF`, `#F3F1EA`, `#111111` (estimates)"', 'anchor 06, `references/domain_card_labels_camera_tape.md`, elements 1 to 5 and "Colour"'),
 ('"The return block, formal only: the second-beat stamp, the three-part record block, two type voices, before and after on one sheet"', 'anchor 07, `references/domain_myinvois_validated_einvoice_qr.md`, elements 1 to 4'),
]),
]
man = []
tot = 0; fr = 0; per = []
for axis, saw, ents in M:
    man.append('### ' + axis + '\n' + saw + '\n')
    c = 0
    for i, (val, der) in enumerate(ents):
        man.append('- %s[%d] = %s\n  derived from: %s' % (axis, i, val, der))
        tot += 1
        if der.lower().startswith('framing') or ' framing ' in (' ' + der.lower()) or '+ framing' in der.lower():
            c += 1
    fr += c; per.append('%s %d of %d' % (axis, c, len(ents)))
    man.append('')
count_line = 'Citation count across all %d entries: the framing is cited in %d (%d%%). Per axis: %s.' % (tot, fr, round(100.0 * fr / tot), ', '.join(per))

body = io.open(R + 'tools/borrowings_v2_body.md', encoding='utf-8').read()
out = body.replace('{{PALETTE}}', palette.rstrip() + '\n').replace('{{BUKKU}}', t_b.rstrip() + '\n').replace('{{IG}}', t_i.rstrip() + '\n').replace('{{TWO}}', t_two.rstrip() + '\n').replace('{{COUNT}}', count_line).replace('{{MANIFEST}}', '\n'.join(man).rstrip() + '\n')
assert '{{' not in out
assert 'pending build' not in out.replace('"pending build"', '')
io.open(R + 'borrowings_v2.md', 'w', encoding='utf-8').write(out)
print(count_line); print(len(out), 'bytes')
