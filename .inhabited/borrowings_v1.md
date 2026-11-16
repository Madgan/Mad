# Borrowings: v1 (critic cycle 1), SIS home page version 2

Written 2026-11-16T04:06Z at Step 12, **before any design code exists** (`designer/` had not been created when this file was saved; the build step follows it). This is the attribute-binding manifest for the first build, with the per-reference log, the two competitor judgment tables and the motion and staging specification the build must follow.

What is in this file, in order:

1. Palette: the gate, the borrowed tape palette, the stage palette, contrast
2. Per-reference borrowing log (7 anchors)
3. Competitor judgment tables (copied from `sampling.md`) and hook notes
4. Attribute-binding manifest (10 axes, one restricted-context sub-pass each)
5. Assembly: where things sit at 390 x 844
6. Sequence sheet: every motion and staging sequence, S1 to S12
7. States
8. Global motion rules, stills and the constraint
9. Hard limits carried into the build
10. Open items

Evidence columns that need pixels ("visible at") are marked **pending build**. The build step fills them with screenshot paths; nothing here claims a pixel that does not exist yet.

Bank entries are written stand-ins for images that could not be downloaded (accepted deviation). "Reference evidence" below therefore cites the written entry by file name and the named element in it.

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

## 2. Per-reference borrowing log (7 anchors)

Each element is named and specific, with the place it lands and the sequence that carries it. Sequence numbers refer to section 6.

### Reference 01: Malaysian crossed cheque leaf (`references/seed_crossed_cheque_ac_payee.md`)

**Visual elements borrowed:**
1. The crossing: two parallel diagonal strokes across the top-left corner, a short phrase between them → `.invoice-sheet .crossing` (two SVG lines in `--pen`, 2 px, 34 px apart, at -38 degrees, with "INV-014 · 开好了 / DONE" between). Drawn in S1 beat 7; redrawn in S3 → visible at: pending build.
2. The strike-through that narrows: one horizontal stroke through the option being dropped → `.invoice-sheet .strike` (S3, when a client or rate is replaced or removed) and `#pro .token-strip .strike` (S10) → pending build.
3. Amount in words and in figures → `.invoice-sheet .total` and `.invoice-sheet .total-words`, two cuts 120 ms apart in S1 beat 5 → pending build.
4. Tear-off with a counterfoil: the leaf leaves along a perforated dashed rule, the stub stays with number, client, amount, date → `#story .leaf`, `#story .stub`, `#story .perforation` (S4) → pending build.
5. A machine line of fixed-width numerals along the foot → `.invoice-sheet .machine-line` ("2026014  16112026  270000", tabular, tracked 0.18em) → pending build.
6. The leaf's fixed zones (date top right, payee and words across the middle, figures in a box at right, code line on the bottom edge) → the zone plan of `.invoice-sheet` → pending build.
7. Pale printed paper → `--sheet #F5F2E9` (value is an estimate; the entry gives no number).

**NOT applied:** the cheque itself, the bank name, account or code-line numbers, the words of the printed crossing, "or bearer", any signature line (forbidden by the entry's own limit and by the hard limits in section 9).

**Reference evidence:** the entry's sections "The commitment gestures", "Layout and proportion" and "What the build may borrow", items 1 to 5.

### Reference 02: *Night Mail* (1936) (`references/seed_night_mail_1936.md`)

**Visual elements borrowed:**
1. The catch: one fragment snapped out of a streaking band by a single translate with a hard stop → `.catch` chips in S1 beats 1 to 4 → pending build.
2. The pigeon-hole grid: six labelled slots (client, item, rate, date, total, PDF) that fill one at a time; the filled grid is the still → `.invoice-sheet .slot-empty[data-slot]`, visible only at the start of S1 → pending build.
3. Cut length as tempo: intervals between beats shorten (440, 340, 260, 200, 160 ms), then a long hold → the S1 timing table, and drawn as the spacing of the nine marks on `.cut-rail` → pending build.
4. The drop: the finished document put out into the thread at a fixed position → the leaf landing in `#story .doc-bubble` (S4) → pending build.
5. The sorting wall as a row that fills → `#import .slot-row` (S8), shared with anchor 06.

**NOT applied:** sound, verse, stills, people, the train as an image.

**Reference evidence:** the entry's "Two speeds in one frame", "Sorting as a grid that fills", "Rhythm by cutting" and "What the build may borrow", items 1 to 4.

### Reference 03: Wong Kar-wai, *Chungking Express* (1994) (`sampling.md`, "## Designer locked", lines 250 to 267)

**Visual elements borrowed:**
1. Two speeds in one frame, as a composition: one sharp subject held still (the sheet, full frame rate, never transformed while at rest) in front of a world that streaks (the thread band, stepped at 12 frames a second) → `.hero-stage` during S1 → pending build.
2. Step-printing, as an image treatment: the moving strip stretched to `scaleY(1.2)` with two lagging copies behind it at fixed transparency 0.38 and 0.2, tinted `--tick` and `--bubble-out` (colour bleeding between frames). The copies end exactly under the opaque strip, so at rest they cannot be seen → `.thread-band`, `.ghost[data-n="1"]`, `.ghost[data-n="2"]` → pending build.
3. Exact time as a repeated mark: clock time to the second on `.record-block`, on the wrap, in the last line; real time on every `.msg`.
4. One small object repeated: the number INV-014 on the sheet's meta line, between the crossing strokes, on the machine line, on the stub, in the PDF file name, on the filed tile and on the tag of the November bar (seven places).
5. Hard cuts between short episodes → `.date-chip` ("月底", "第一天"), each a plain cut with no transition.

**NOT applied:** film stills, people, neon lettering, any sound. Smear over text or UI at rest (condition 1).

**Reference evidence:** the signature-work description (the snack-bar shot and the step-printed chase) and the four conditions at lines 256 to 265.

### Reference 04: Bukku (`sampling.md`, "#### vs Bukku (idx 6)", lines 478 to 508)

**Visual elements borrowed (the `borrow` rows):**
1. Trial button with its true terms in the first screen → `#hero .cta-trial`, `#hero .trial-terms`, `header.topbar .cta-trial`.
2. Verb-first trial label → `.cta-trial` ("免费试用 7 天" / "Start 7-day free trial").
3. Real product screens → `.invoice-sheet`, `#import .review-state`, `#reports .month-bars`.
4. Slim top bar and a visible language choice → `header.topbar`, `header.topbar .lang-toggle`.
5. Named plans, RM price with the period, what each includes, side by side → `#pricing .plan[data-plan="basic"]`, `#pricing .plan[data-plan="pro"]`.
6. Month-by-month sales, expenses and net profit, labelled → `#reports .month-bars`.
7. The market named in the claim; a local support route → `#hero .hero-claim`, `footer .trust-line`, `footer .support-whatsapp`.

**NOT applied (the `diverge` rows):** still claim plus still screenshot, the "no credit card" line, a desktop dashboard scaled down, module order, compliance badge, user count, deep navigation, neutral type, light surface, promotion and per-day price, accounting density.

**Reference evidence:** the table rows named above; Bukku's page itself was not seen (search summaries only, recorded in `sampling.md`).

### Reference 05: Invoice-Generator.com (`sampling.md`, "#### vs Invoice-Generator.com (idx 19)", lines 510 to 538)

**Visual elements borrowed (the `borrow` rows):**
1. The invoice itself in the first screen → `#hero .hero-stage .invoice-sheet`.
2. Invoice anatomy → `.invoice-sheet` with `.from`, `.bill-to`, `.meta`, `.lines`, `.total`, `.terms`.
3. Line-item table, amounts right-aligned in tabular figures, in RM → `.invoice-sheet .lines`, `.invoice-sheet .total`.
4. A light sheet on a plain ground, set plainly → `.invoice-sheet` (own type scale in Instrument Sans).
5. Try it with no account → `.picker-client`, `.picker-rate`.
6. The PDF as the end of the task → `#story [data-beat="pdf"]`.
7. Almost no navigation; no sound → `header.topbar`; no audio element anywhere.

**NOT applied (the `diverge` rows):** no claim, blank start, typing in fields, a download button, the side column, the visitor's own data, user count, long copy under the tool, a light page.

**Reference evidence:** the table rows named above.

### Reference 06: Card labels and camera tape (`references/domain_card_labels_camera_tape.md`)

**Visual elements borrowed:**
1. Flip to mark done: a card-shaped tile (3:4 portrait, clipped top-right corner) turns over on its vertical axis; done is its other face → `.slot-tile` in `#story .slot-row` (S5) and `#import .slot-row` (S8) → pending build.
2. The tape label: a strip about 1:3.5, straight long edges, ragged short ends, 3 to 5 degrees off level, one short code in heavy capitals → `.tape-label` (sample label "示例 SAMPLE" on the sheet; client codes LUMEN, TANJUNG, ARIA; "014"; plan names) → pending build.
3. The row of slots as a progress readout, no bar and no percentage → `.slot-row` → pending build.
4. Green wrap means checked: a band laid across the object only after a person has reviewed it, covering part of it → `#import .wrap-checked` (S9) → pending build.
5. The lock switch as a physical position → `.picker-client .lock` (a 6 x 14 px nub on the tile's left edge that sits 12 px lower on the picked tile, with the word "已选 / Picked") (S3) → pending build.
6. The identifier travels with the object → the code on the tape label is the same code that lands on the sheet.
7. Tape palette: see 1.2.

**NOT applied:** any camera or card brand, a real product label, a meaning for red tape (the entry could not confirm one; red here always carries its own word).

**Reference evidence:** the entry's "How it sequences information" and "Named elements the build may borrow", items 1 to 5, and the colour list under "Colour".

### Reference 07: The validated e-invoice return block, formal borrowing only (`references/domain_myinvois_validated_einvoice_qr.md`)

**Visual elements borrowed:**
1. The return stamp as a second, later beat: after the person's part is complete, one compact block is printed onto the foot of the same sheet by the system → `.invoice-sheet .record-block`, S1 beat 8, a left-to-right clip wipe → pending build.
2. The record block's three parts: one plain square mark at the left (a 28 px square holding the page count "1/1"), one identifier line ("INV-2026-014 · PDF 出自同一份记录"), one date and time line with seconds ("16 NOV 2026 23:41:07", the real clock), in tabular capitals smaller than the invoice text → `.record-block .mark`, `.record-block .id`, `.record-block .when` → pending build.
3. Two hands, two type voices: what the person chose (client, service) in Instrument Sans 600; what the system wrote (number, time, totals, machine line) in tabular figures, `--ink` at regular weight, tracked → throughout `.invoice-sheet` → pending build.
4. Before and after on one page: the sheet with empty slots and no block (start of S1) and the same sheet with the block (the still) → S1 and the cut rail.

**NOT applied, and never to be applied without the owner:** a QR code or anything matrix-like, the words LHDN, IRBM, MyInvois, e-Invoice, "validated" or their Chinese equivalents, a government mark, any compliance claim.

**Reference evidence:** the entry's "How it sequences information" and "Named elements the build may borrow", items 1 to 4.

---

## 3. Competitor judgment tables

Copied without change from `sampling.md`, "### Converge / diverge judgment tables" (written at Step 8, before this file and before any design code). Column order is the one recorded there; it adds a "what the competitor does" column to the four the protocol requires.

#### vs Bukku (idx 6)

Observed from search results: hero headline, subhead, badge, trial terms, starting price, user count, feature areas. From prior knowledge and not verified today: light surface, a static dashboard screenshot beside the claim, long feature sections, neutral sans type.

| Element | What Bukku does | verdict | rationale | build location |
|---|---|---|---|---|
| Hero staging | A claim headline, a compliance badge, the trial offer, and the product beside it as a still image. Everything arrives at once and nothing changes. | diverge | A still claim plus a still screenshot is what Jun Hao scrolls past. The live page already beats this on atmosphere; version 2 must beat both by making the first screen an event: the invoice assembles while he watches. | N/A |
| Trial offer in the first screen | The trial button and its terms (30 days, no credit card) sit in the hero, above any scrolling. | borrow | Table-stakes for local software and the live page's first known weakness. A visitor with 30 seconds must be able to start the trial without scrolling. | `#hero .cta-trial`, `header.topbar .cta-trial` |
| Trial terms line | A short line under the button states the length of the trial. | borrow | Stating the offer next to the button removes a question. SIS states only what is true: 7-day free trial, Basic RM 199 a year, Pro RM 399 a year. | `#hero .trial-terms` |
| "No credit card" promise | Printed under the trial button. | diverge | Whether SIS needs a card for the trial is unknown (`facts.md`), so the claim cannot be made. | N/A |
| How the product is shown | Real product screens, not abstract renders. | borrow | The principle is table-stakes and fixes the live page's third weakness (only 3D renders, no product, no invoice). A buyer of business software expects to see the software. | `.invoice-sheet`, `#import .review-state`, `#reports .month-bars` |
| Product framing on a phone | A wide desktop dashboard scaled down (not verified today). | diverge | A desktop dashboard at 390 px is unreadable texture. SIS shows one object at reading size, the invoice, then one screen per idea. | N/A |
| Motion | Effectively none: a static page with standard hover states (not verified today). | diverge | Motion is the owner's stated lever and the visitor judges motion for a living. Here motion carries meaning: fields arriving on the invoice are the claim "pick a client, pick a rate, done". | N/A |
| Narrative order | Organised by module (invoicing, inventory, bank, e-invoice), an inventory of what exists. | diverge | A module list has no beginning or end and caused the live page's repetition. Version 2 is one sequence told once: the old mess, a client picked, a rate picked, the invoice, the record, the month. | N/A |
| Interaction | Links and buttons only; nothing to try on the page (not verified today). | diverge | He believes what he can touch. One small tap-driven demo does more in 30 seconds than any feature paragraph. | N/A |
| Local grounding in the headline | "for Malaysia" is in the headline itself. | borrow | A Malaysian freelancer trusts a tool made for his market over an imported one. Saying it early, in his language, is expected. | `#hero .hero-claim` (names Malaysian videographers and photographers), `footer .trust-line` |
| Compliance badge | "LHDN MyInvois ready" badge and SST in the subhead. | diverge | LHDN e-invoice support and SST handling are unknown for SIS and must not be stated. Trust is built from what is true: Singapore-region storage, row-level isolation, the Malaysian business registration. | N/A |
| User count | "120,000+ Malaysian businesses". | diverge | No user numbers exist and the brief forbids them. Credibility comes from craft and from showing the product. | N/A |
| Navigation | Top bar with product, pricing, sign-in and a trial button (structure not verified today). | borrow | A slim top bar with sign in and the trial button is what every software buyer looks for. Kept to the minimum: logo, language, sign in, trial. | `header.topbar` |
| Navigation depth | Many links, solution and partner pages. | diverge | One page, one job. Extra links leak a 30-second visitor away from the trial. | N/A |
| Language switch | Visible language choice for a multilingual market (not verified today). | borrow | Malaysian visitors expect to choose a language. SIS is Chinese by default with an English toggle, reachable in the first screen. | `header.topbar .lang-toggle` |
| Typography | Neutral, interchangeable SaaS sans. | diverge | The owner requires type at least as good as the live page, and neutral SaaS type signals "one more dashboard". The face is set by the Typography VS step; this row only records that Bukku's default is not followed. | N/A |
| Color | Light surface with a single brand color (not verified today). | diverge | The owner judges the dark live page as better looking than the light version 1. Version 2 stays at or above the live page's dark, cinematic finish. | N/A |
| Layout | Long page of feature sections in a multi-column grid. | diverge | The live page is already 10,500 px on a phone and repeats itself. Version 2 is short, single column on a phone, one idea per screen. | N/A |
| Primary button label | "Start free trial" style label, verb first. | borrow | The label a buyer scans for. SIS uses the same verb-first form with the length stated nearby. | `.cta-trial` |
| Pricing display | Plans named, price in RM with the period, what each includes. | borrow | Plain RM figures with the period are expected locally. Two plans side by side, each with its list from `facts.md`. | `#pricing .plan[data-plan="basic"]`, `#pricing .plan[data-plan="pro"]` |
| Pricing tactics | A time-limited promotion (first 3 months, ends 31 Dec 2026), a per-day reframing, SST added on top. | diverge | SIS has one honest annual price and no promotion. Urgency devices and price reframing would contradict the peer-to-peer register. | N/A |
| Data display | Dashboards and charts: sales, expenses, profit by period, with labelled axes. | borrow | Month-by-month sales, expenses and net profit is the domain's standard report and a real SIS feature. Shown once, with labels and values, never colour alone. | `#reports .month-bars` |
| Data density | Accounting density: ledgers, charts of accounts, inventory tables. | diverge | He is not a bookkeeper. Bookkeeping density is the reason he has not adopted accounting software. One number per moment. | N/A |
| Empty and error states | None visible on the marketing page. | diverge | The build's own demo needs states the competitor never shows: before a client is picked, the sheet shows sample data marked as sample, and the import moment shows "nothing saved until you approve" as a visible state. | N/A |
| Support channel | A local contact route for a local product (form not verified today). | borrow | Malaysian buyers expect to reach a person on WhatsApp. SIS names WhatsApp as the fastest route, as a link, not a floating bubble over the content. | `footer .support-whatsapp` |

#### vs Invoice-Generator.com (idx 19)

Observed from search results: no sign-up, editable labels, logo, currency, line items, tax and discount, PDF download, "original free invoice maker", "4 million businesses". From prior knowledge and not verified today: the exact field names (From, Bill To, Ship To), the light grey page with a white sheet, a green download button in a side column.

| Element | What Invoice-Generator.com does | verdict | rationale | build location |
|---|---|---|---|---|
| Hero staging | There is no hero. The first screen is the invoice itself, with no claim above it. | borrow | The strongest convention in the category: an invoice tool shows an invoice at once. It fixes the live page's worst gap. In version 2 the invoice is the staged object in the first screen, not an illustration of one. | `#hero .hero-stage .invoice-sheet` |
| Claim in the first screen | None. The form speaks for itself. | diverge | A blank form says "free tool". SIS has a claim to make (pick a client, pick a rate, done) and must say it in a short readable line next to the object, never on top of it (live weakness 2). | N/A |
| Starting state of the invoice | Blank, with placeholder prompts. Every invoice starts from nothing. | diverge | This is the exact difference SIS sells. The SIS invoice is never blank: it fills from a saved client and a saved rate. The blank sheet may appear only as the "before" beat. | N/A |
| Motion | None. A static form; change happens only when the user types. | diverge | The contrast between typing every field and watching fields arrive by themselves can only be shown in time. This is where the owner's lever does the persuading. | N/A |
| Narrative | None. One state, one action. | diverge | Without a sequence there is no before and after. SIS needs a short one: mess, pick, pick, invoice, record, month. | N/A |
| Interaction: try it without an account | The visitor can make an invoice immediately, no sign-up. | borrow | Immediacy is what he expects from a free tool, and trying beats reading. Version 2 lets him change the invoice on the page, before any sign-up. | `.picker-client`, `.picker-rate`, `.invoice-sheet .total` |
| Interaction: input method | Free typing in a dozen fields. | diverge | Typing on a phone, tired, in 30 seconds, will not happen. SIS interaction is two taps (a client, a rate), which is also the product's claim. | N/A |
| Invoice anatomy | The recognisable parts: sender, recipient, number, date, due date, line items, subtotal, tax, total, notes and terms. | borrow | This is what an invoice is. He must recognise the object in one glance. Diverging would make the mock look like decoration. | `.invoice-sheet` (`.from`, `.bill-to`, `.meta`, `.lines`, `.total`, `.terms`) |
| Data display: line items | A table: item, quantity, rate, amount; amounts right-aligned; currency shown. | borrow | The universal convention for reading money. Amounts right-aligned in tabular figures, in RM. | `.invoice-sheet .lines`, `.invoice-sheet .total` |
| The invoice as a light sheet | A white page on a plain ground. | borrow | An invoice is paper. A white sheet on the dark stage becomes the brightest thing on screen, which is good staging and matches the print-ready PDF. | `.invoice-sheet` |
| Page color | Light grey utility page. | diverge | The owner wants at least the dark, cinematic finish of the live page. Only the sheet is light. | N/A |
| Typography on the page | Plain utility sans throughout. | diverge | Page type must be at least as good as the live page; set by the Typography VS step. | N/A |
| Typography on the sheet | Plain, legible, no display type on the document itself. | borrow | A real invoice is set plainly. If the mock invoice is styled like the marketing page it stops looking real. | `.invoice-sheet` (own plain type scale, tabular figures) |
| The payoff: PDF | The end of the task is a PDF you can send. | borrow | The PDF is what his client receives, so it is the moment that matters. The sequence ends on the invoice becoming a PDF, shown as a visible state with a text label. | `#story [data-beat="pdf"]` |
| Primary button | "Download", green, beside the form. | diverge | The SIS page has one job, the trial. The demo does not offer a real download, so no button may promise one. | N/A |
| Navigation | Almost none: a few text links. | borrow | Few links keep a 30-second visitor on task. The build keeps only logo, language, sign in and trial. | `header.topbar` |
| Layout | One object in the centre, controls in a side column. | diverge | The single-object focus is right, the side column is not: at 390 px there is no side. Controls sit under the sheet, within thumb reach. | N/A |
| Sample data | The visitor's own data; nothing is pre-filled. | diverge | The build pre-fills fictional studios, clients and rates, and the brief requires them to be labelled as sample data. | N/A |
| Empty and error states | The page is one large empty state; errors appear only on download. | diverge | The build shows a filled state by default. Its own states (nothing picked yet, import waiting for approval) are designed, readable and never rely on colour alone. | N/A |
| Social proof | "Trusted by over 4 million businesses". | diverge | No numbers exist for SIS and the brief forbids them. | N/A |
| Price | Free, no account. | diverge | SIS is paid and says so plainly. The answer to "free" is not to hide the price but to show what the free tool cannot do: remember. | N/A |
| Text under the tool | Long explanatory and search-oriented copy below the form. | diverge | Long copy under the product is the repetition the live page suffers from. Each fact appears once. | N/A |
| Sound | None on either page. | borrow | Nothing may depend on sound (owner requirement). Every beat is carried by picture and caption. | global (no audio elements); captions on `#story [data-beat]` |

#### What the two tables say together, for presentation

1. **Converge on showing the real thing, at once.** Both competitors put the product in the first screen (Bukku as a screenshot, Invoice-Generator as the tool itself). The live SIS page does not. Version 2 puts a real invoice in the first screen.
2. **Converge on the offer being in the first screen.** Trial button plus its true terms, above any scroll.
3. **Diverge on time.** Neither competitor moves. Bukku is a still claim; Invoice-Generator is a still form. Neither can show "it remembers, so the invoice makes itself". Motion in version 2 is therefore not atmosphere (which is all the live page uses it for) but the argument itself.
4. **Diverge on the blank start.** Invoice-Generator's blank sheet is the "before"; SIS's pre-filled sheet from a saved client and rate is the "after". The page should stage that contrast once.
5. **Converge on immediacy, diverge on effort.** Let him change the invoice on the page with no account (as Invoice-Generator does), but with two taps, not typing.
6. **Diverge on proof by numbers and badges.** Bukku and Invoice-Generator both lean on user counts; Bukku adds a compliance badge. SIS has neither and may not claim them. Proof comes from craft, from the product being visible, and from the true trust facts.

### Hook notes for the build (no renames)

Every build location in the two tables is used with the name recorded there. No hook is renamed. The following hooks are **added** by this file and are not in the tables; they are listed so that nothing in the build is unnamed:

| Added hook | What it is | Why it is not a silent default or divergence |
|---|---|---|
| `main.thread`, `.msg`, `.date-chip`, `.composer`, `.composer-send`, `.fwd-label` | the thread as the page's spine, time-stamped caption messages, date chips, the composer as the last call to action | covered by the rows "Narrative order" (diverge: one sequence told once) and "Hero staging" (diverge: an event, not a still claim) in both tables; neither competitor has a thread |
| `.thread-band`, `.ghost`, `.catch`, `.slot-empty`, `.stage-caption` | the opening sequence | rows "Motion" (diverge, both tables) and "Starting state of the invoice" (diverge: the blank sheet appears only as the "before" beat) |
| `.cut-rail` | the hand transport for the opening sequence | row "Interaction" (Bukku, diverge: something to try on the page) |
| `.crossing`, `.strike`, `.total-words`, `.machine-line`, `.record-block` | marks on the sheet | row "Invoice anatomy" is borrowed in full; these are additions on top of it from anchors 01 and 07 and are logged in section 2 |
| `#story .leaf`, `.stub`, `.perforation`, `.doc-bubble`, `.ticks`, `.slot-row`, `.slot-tile`, `.client-head` | PDF and record beat | row "The payoff: PDF" (borrow) |
| `#import .old-file`, `.review-card`, `.approve`, `.wrap-checked` | import beat | Bukku row "Empty and error states" (diverge: "nothing saved until you approve" as a visible state) |
| `#pro`, `.sis-plate`, `.token-strip`, `.token-state`, `.ai-list` | Pro connection beat | Bukku row "Interaction" (diverge) |
| `.tape-label`, `.sample-note`, `.elapsed` | labels and the last line | Invoice-Generator row "Sample data" (diverge: pre-filled and labelled as sample) |

Captions: the table for Invoice-Generator.com places captions on `#story [data-beat]`. This file also puts a caption on the opening sequence (`#hero .stage-caption`, one line per beat) and gives every later beat one `.msg[data-beat]`. That extends the borrow "Sound: none; every beat carried by picture and caption"; it does not rename it.

---

## 4. Attribute-binding manifest

Ten sub-passes, run separately at Step 12. Each sub-pass was given the brief (App X and ICP from `inhabited.md`) plus only the inputs the protocol permits for that axis, and the instruction to generate only that field. The line under each heading records what the sub-pass saw and what was hidden from it. Where an element on the page comes from an input the axis was not allowed to see, it is **not claimed in that axis**; it is logged in the per-reference log (section 2) and under `inspirations`, the one axis that sees all seven anchors.

Citation count across all 79 entries: the framing is cited in 28 (35%). Per axis: style_tags 4 of 4, mood 4 of 4, color_palette 5 of 10, typography 0 of 7, key_visual_elements 4 of 15, imagery 2 of 7, surface_treatment 2 of 7, ornament 2 of 8, motion 5 of 10, inspirations 0 of 7.

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
Saw: framing + seeds (anchors 01, 02) + constraint. Hidden: designer, competitors, domain anchors, typography. (The tape colours come from a domain anchor and are therefore not claimed here; see 1.2 and `inspirations[5]`.)

- color_palette[0] = "`#0B1216` night ground" on `body`, `.thread-band`
  derived from: framing "WhatsApp … vernacular" (the thread as it looks at night) + seed *Night Mail* "the train is a band of light against dark country"
- color_palette[1] = "`#1F2C33` bubble grey" on `.bubble`, `.msg`
  derived from: framing "grey bubbles"
- color_palette[2] = "`#0F5345` outgoing bubble green" on `.doc-bubble`
  derived from: framing "double ticks" (ticks belong to the sender's own messages, which the thread colours green)
- color_palette[3] = "`#53BDEB` tick blue" on `.ticks[data-state="read"]`
  derived from: framing "double ticks" (the read state)
- color_palette[4] = "`#E9EEF0` message text and `#8A9AA3` time-stamp grey" on text and `.time`
  derived from: framing "forwarded-message vernacular" (message text with a smaller grey time beneath)
- color_palette[5] = "`#F5F2E9` pale printed paper" on `.invoice-sheet`
  derived from: seed crossed cheque "pale printed security background"
- color_palette[6] = "`#14181B` document ink" on sheet text and rules
  derived from: seed crossed cheque "small … caps for the printed labels" + seed *Night Mail* "black-and-white"
- color_palette[7] = "`#1F5FBF` ballpoint blue" on `.crossing`, `.strike`
  derived from: seed crossed cheque "the drawer's handwriting in pen" and "two parallel diagonal strokes" (the entry does not state the pen's colour; blue is this sub-pass's choice and is recorded as such)
- color_palette[8] = "colour changes state by cut only: a tick goes grey to blue in one frame"
  derived from: constraint "every change of state happens as a cut or through movement, scale, clipping or masking"
- color_palette[9] = "transparency is fixed wherever it is used (ghost copies at 0.38 and 0.2); no colour ever interpolates toward the ground"
  derived from: constraint "A fixed, unchanging transparency value is allowed" and "An element fading to or from the background colour counts as the same thing"

### typography
Saw: the Typography VS record in `sampling.md` only. No new generation; transcribed.

- typography[0] = "Bricolage Grotesque, primary Latin: headlines 800, page copy 400, controls and emphasis 600, every Latin run inside Chinese page text; width fixed at 100"
  derived from: Typography locked, role table, pick idx 4; condition 1
- typography[1] = "Bricolage Grotesque optical size held low: `opsz` equals the font size up to a ceiling of 40"
  derived from: Typography locked, condition 2 (the Designer picks `opsz` deliberately; lower it before changing anything else)
- typography[2] = "Noto Sans SC, Chinese companion: headlines 700, controls and product text 500, page copy 400, never above 700"
  derived from: Typography locked, role table and condition 3
- typography[3] = "Instrument Sans, Latin text inside the thread, the product screens and the invoice, 400 to 700, width 100"
  derived from: Typography locked, role table, pick idx 8; conditions 1 and 4
- typography[4] = "Kanit 700 italic on a figure while it is in flight; Kanit 700 upright on the `.cut-rail` readout, the one figure that travels with a knob; nowhere else, never copy"
  derived from: Typography locked, role table, pick idx 10 ("a figure or a word that travels"); condition 5
- typography[5] = "tabular figures on every amount, date and time stamp"
  derived from: Typography locked, condition 7
- typography[6] = "stack order Latin family, then Noto Sans SC, then system; the single recorded Google Fonts request; no fifth family; no lavender accent"
  derived from: Typography locked, "Font stack order", the tested request, condition 6

### key_visual_elements
Saw: framing + seeds (01, 02) + competitors (04, 05). Hidden: designer, domain anchors, typography, constraint.

- key_visual_elements[0] = "a white invoice sheet with full anatomy, in the first screen, as the brightest object on the page" at `#hero .hero-stage .invoice-sheet`
  derived from: competitor Invoice-Generator.com rows "Hero staging", "Invoice anatomy", "The invoice as a light sheet" (borrow)
- key_visual_elements[1] = "a thread lane of forwarded grey bubbles running beside and under the sheet: a forwarded label, a voice-note waveform, a screenshot of a screenshot" at `.thread-band`
  derived from: framing "grey bubbles … voice notes, screenshots of screenshots"
- key_visual_elements[2] = "six labelled pigeon-hole slots on the sheet (client, item, rate, date, total, PDF)" at `.slot-empty[data-slot]`
  derived from: seed *Night Mail*, element 2, "labelled slots … that fill one piece at a time"
- key_visual_elements[3] = "two diagonal pen strokes with a phrase between them across the sheet's corner" at `.crossing`
  derived from: seed crossed cheque, element 1, "the crossing as the done gesture"
- key_visual_elements[4] = "the trial button with its true terms line directly under it, in the first screen, and again in the top bar" at `#hero .cta-trial`, `#hero .trial-terms`, `header.topbar .cta-trial`
  derived from: competitor Bukku rows "Trial offer in the first screen", "Trial terms line", "Primary button label" (borrow)
- key_visual_elements[5] = "two rows of tap targets under the sheet: three clients, three rates" at `.picker-client`, `.picker-rate`
  derived from: competitor Invoice-Generator.com rows "Interaction: try it without an account" (borrow) and "Interaction: input method" (diverge: two taps, not typing)
- key_visual_elements[6] = "a record stub joined to the sheet by a perforated dashed rule" at `#story .stub`, `.perforation`
  derived from: seed crossed cheque, element 4, "tear-off with a counterfoil"
- key_visual_elements[7] = "a document bubble holding the PDF: first-page thumbnail, file name, page count, time, ticks" at `#story .doc-bubble`
  derived from: framing "double ticks" (and the thread's document attachment) + competitor Invoice-Generator.com row "The payoff: PDF" + seed *Night Mail*, element 4, "the drop"
- key_visual_elements[8] = "a rail of nine cut marks whose spacing shortens toward the end" at `.cut-rail`
  derived from: seed *Night Mail*, element 3, "cut length as tempo: shots shorten toward completion, then a long final hold"
- key_visual_elements[9] = "six months of sales and expenses bars with the figures printed and net profit as a number" at `#reports .month-bars`
  derived from: competitor Bukku row "Data display" (borrow) and "Data density" (diverge: one number per moment)
- key_visual_elements[10] = "two plans side by side, RM price with the period, each with its list" at `#pricing .plan`
  derived from: competitor Bukku row "Pricing display" (borrow) and "Pricing tactics" (diverge)
- key_visual_elements[11] = "a message composer as the last thing on the page, its send button being the trial button" at `.composer`, `.composer-send`
  derived from: framing "forwarded-message vernacular" (a thread ends in the box where you reply) + competitor Bukku row "Primary button label"
- key_visual_elements[12] = "the total in figures with the same amount in words beneath, and one line of wide-set numerals on the sheet's bottom edge" at `.total`, `.total-words`, `.machine-line`
  derived from: seed crossed cheque, elements 3 and 5
- key_visual_elements[13] = "date chips between episodes" at `.date-chip`
  derived from: framing "forwarded-message vernacular" (a thread is divided by its own date chips)
- key_visual_elements[14] = "a slim top bar: wordmark, language, sign in, trial" at `header.topbar`
  derived from: competitor Bukku rows "Navigation", "Language switch" (borrow), "Navigation depth" (diverge); competitor Invoice-Generator.com row "Navigation" (borrow)

### imagery
Saw: framing + seeds (01, 02) + designer + constraint. Hidden: competitors, domain anchors, typography.

- imagery[0] = "first-screen treatment: two speeds in one frame. The sheet is still and sharp; behind and beside it the thread streaks upward in whole steps, 12 a second"
  derived from: designer signature work, the snack-bar shot ("one person stands still … sharp and slow, while the crowd passes … as streaked, step-printed blur") + seed *Night Mail* ("the pouch is the one sharp, legible object; the train and the landscape are smear")
- imagery[1] = "the smear is drawn, not filtered: the moving strip stretched to scaleY 1.2 with two lagging copies at fixed transparency, tinted so colour bleeds between frames; no blur filter"
  derived from: designer "step-printed so that movement drags and colour bleeds between frames" + constraint "A fixed, unchanging transparency value is allowed" + seed *Night Mail* limit "smear … is drawn (stretched shapes, repeated offset copies at fixed transparency)"
- imagery[2] = "screenshots of screenshots drawn in code: last month's Word invoice inside a phone frame inside a phone frame, each generation 3 px and 2 degrees off the last"
  derived from: framing "screenshots of screenshots" + designer condition 4 (his look translated into code-drawn UI, no photographs)
- imagery[3] = "a voice note drawn as 14 still bars, a duration and one line of text saying what is buried in it; no play control"
  derived from: framing condition "voice notes appear only as a visual; nothing depends on sound"
- imagery[4] = "no photographs, no film stills, no people, no generated images; every picture is product UI or inline SVG and CSS"
  derived from: designer condition 4 + seed *Night Mail* limit ("no photographs, film stills or images of people")
- imagery[5] = "the PDF thumbnail is the real sheet scaled down by a transform, so the thing that lands in the thread is visibly the thing he just watched being made"
  derived from: constraint (scale is a permitted change of state) + seed crossed cheque, element 4 (the leaf that leaves is the same leaf)
- imagery[6] = "the sheet's zones are fixed like a printed leaf: meta top right, client and lines across the middle, figures ranged right, a numeral line on the bottom edge"
  derived from: seed crossed cheque "Information sits in fixed zones"

### surface_treatment
Saw: framing + constraint + designer voice. Hidden: seeds, competitors, domain anchors, typography.

- surface_treatment[0] = "flat night ground: no gradient fog, no glow, no blur, no translucent panels"
  derived from: constraint "An element fading to or from the background colour counts as the same thing" (taken as a rule for surfaces too: hard edges, no soft fall-off) + designer "a dark, saturated, neon-at-night finish"
- surface_treatment[1] = "the lit counter: one hard-edged slab, `#121C22`, behind each stage, the only change of ground tone"
  derived from: designer signature work, the snack-bar counter where the still subject stands
- surface_treatment[2] = "thread wallpaper in the lane only: a small code-drawn doodle tile at fixed low contrast"
  derived from: framing "WhatsApp … vernacular" (the wallpaper behind a thread)
- surface_treatment[3] = "paper is opaque: 1 px ink rules, square corners, one hard offset shadow with fixed values; nothing on it is translucent"
  derived from: constraint "Everything is either there or not there" + designer condition 1 ("text and product UI at rest are sharp")
- surface_treatment[4] = "still grain on the lane only (one SVG turbulence tile at fixed transparency), never animated and never over the sheet"
  derived from: designer condition 1 (roughness lives in the "before" only)
- surface_treatment[5] = "every wipe has a hard travelling edge; no feathered masks"
  derived from: constraint "clipping or masking"
- surface_treatment[6] = "bubbles are flat fills with an 8 px radius and a tail on the first of a group"
  derived from: framing "grey bubbles"

### ornament
Saw: framing + designer + seeds (01, 02). Hidden: competitors, domain anchors, constraint, typography.

- ornament[0] = "double ticks as the only status glyph: one grey, two grey, two blue, always beside a word and a time"
  derived from: framing "double ticks"
- ornament[1] = "one forwarded label with its arrow, italic, at the very top"
  derived from: framing "forwarded-message"
- ornament[2] = "a perforated rule (4 px dash, 4 px gap) as the only divider"
  derived from: seed crossed cheque "tearing the leaf out along the perforated edge"
- ornament[3] = "2 px ballpoint strokes with slightly uneven ends for the crossing and every strike-through"
  derived from: seed crossed cheque, elements 1 and 2
- ornament[4] = "one number, INV-014, repeated in seven places"
  derived from: designer "repetition of one small object until it means something" (the dated tins)
- ornament[5] = "clock time to the second on every mark the system makes"
  derived from: designer "its voice-over gives time and distance in exact figures"
- ornament[6] = "a line of wide-tracked numerals along the sheet's foot"
  derived from: seed crossed cheque, element 5, "a machine line along the foot"
- ornament[7] = "small-cap labels on empty slots"
  derived from: seed *Night Mail*, element 2, "each labelled with a destination"

### motion
Saw: framing + constraint. Hidden: designer, seeds, competitors, domain anchors, typography. (Moves that come from the hidden inputs, such as the catch, the two frame rates, the crossing, the tear-off, the flip and the wrap, are logged in section 2 against their anchors. Section 6 assembles them and tags each component with its source.)

- motion[0] = "the whole vocabulary is five moves: a cut, a translate that stops dead, a scale, a clip wipe with a hard edge, a drawn stroke"
  derived from: constraint "every change of state happens as a cut or through movement, scale, clipping or masking"
- motion[1] = "arrival by cut: a message, a caption, a digit or a tick is not there and then is, on one frame; ticks advance one grey, two grey, two blue"
  derived from: framing ("a tick turning from one to two", recorded at Step 4) + constraint "Everything is either there or not there"
- motion[2] = "forwarding is the basic move: a fragment leaves one place and lands in another by one linear translate of 120 to 160 ms, stops dead, settles in a single frame; it leans 12 degrees while moving and is cut upright where it lands"
  derived from: framing "forwarded-message" (content moved from one place to another; "a file landing in the thread") + constraint "movement"
- motion[3] = "thread travel is stepped: the band moves in whole 60 px jumps, 12 a second, and stops on a step"
  derived from: framing (a thread advances one message at a time) + constraint (no blending between positions; a position is held or it is not)
- motion[4] = "scrolling is the thread's own scroll: never intercepted, pinned or snapped; a move tied to it is a pure function of scroll position and runs backwards"
  derived from: framing ("a thread is a vertical, thumb-native narrative", recorded at Step 4)
- motion[5] = "timing table: linear travel and hard stops only, no ease-out tail, no spring. Cut 0 ms, stroke 110, catch 120 to 160, wipe 180, flip 200. Only the opening sequence runs longer than 420 ms"
  derived from: constraint ("either there or not there": a tail that eases toward rest is the positional form of a fade and is left out by the same reasoning)
- motion[6] = "the stylesheet draws the finished frame; every animation plays from an earlier state into it with backward fill; reduced motion is that frame, reached by a cut"
  derived from: constraint, test 4 ("reached by a cut to the finished still, not by a slow fade")
- motion[7] = "hover, focus, pressed and disabled change by cut or by shape: a 1 px drop, a border weight, an outline, a dashed edge"
  derived from: constraint, test 3
- motion[8] = "whatever the system writes arrives by a left-to-right clip wipe with a hard edge; whatever a person chooses arrives by a translate"
  derived from: constraint "clipping or masking" and "movement"
- motion[9] = "hand transport: dragging a knob along a rail of time marks sets the time of the opening sequence; arrow keys step one frame"
  derived from: framing "double ticks" (every event in a thread carries its time, so the sequence can be laid out as times) + constraint "movement"

### inspirations
Saw: all 7 bank anchors. Ran last. This is the cross-anchor summary; it is also where elements from the two domain anchors are bound, since no other axis may see them.

- inspirations[0] = "Malaysian crossed cheque leaf: the crossing, the strike, words and figures, the tear-off stub, the machine line"
  derived from: anchor 01, `references/seed_crossed_cheque_ac_payee.md`, elements 1 to 5
- inspirations[1] = "*Night Mail* (1936): the catch, the pigeon-holes, cut length as tempo, the drop"
  derived from: anchor 02, `references/seed_night_mail_1936.md`, elements 1 to 4
- inspirations[2] = "*Chungking Express* (1994): one sharp subject against a step-printed world; exact times; one object repeated; hard cuts between episodes"
  derived from: anchor 03, `sampling.md` "## Designer locked"
- inspirations[3] = "Bukku: trial and true terms in the first screen, RM plans side by side, slim top bar, labelled month report"
  derived from: anchor 04, `sampling.md` "#### vs Bukku (idx 6)", borrow rows
- inspirations[4] = "Invoice-Generator.com: the invoice first, its anatomy, a light sheet, try it with no account, the PDF as payoff"
  derived from: anchor 05, `sampling.md` "#### vs Invoice-Generator.com (idx 19)", borrow rows
- inspirations[5] = "Card labels and camera tape: the flip, the tape label, the row of slots, the green wrap, the lock switch, and the tape palette `#1E9E4A`, `#D4262C`, `#F2C418`, `#1F5FBF`, `#F3F1EA`, `#111111` (estimates)"
  derived from: anchor 06, `references/domain_card_labels_camera_tape.md`, elements 1 to 5 and "Colour"
- inspirations[6] = "The validated e-invoice return block, formal only: the second-beat stamp, the three-part record block, two type voices, before and after on one sheet"
  derived from: anchor 07, `references/domain_myinvois_validated_einvoice_qr.md`, elements 1 to 4

---

## 5. Assembly: where things sit at 390 x 844

Chinese is the default; all y values are targets within 8 px, measured from the top of the document. The fold-safe line is **y = 640** (a real phone shows less than 844; the critic also reports 390 x 700). Total height target: about 4,200 px in Chinese, against about 10,500 px for the live page. Each region cites the bank entry it takes its form from.

| Region (hook) | y | What is there | Cites |
|---|---|---|---|
| `header.topbar` (sticky, solid `--night`, no blur) | 0 to 52 | wordmark SIS; `.lang-toggle` 中文 / EN (72 x 32); sign in (text link); compact `.cta-trial` (84 x 36, tape green) | 04 Bukku "Navigation", "Language switch"; 05 "Navigation" |
| `.fwd-label` | 60 to 76 | "↪ 已转发 / Forwarded", italic 12 px, once | framing artefact; `ornament[1]` |
| `#hero .hero-claim` | 80 to 172 | h1, two lines (Chinese 31/35 at 700; English 30/34 at 800), then one 13 px line naming Malaysian videographers, photographers and small studios | 04 Bukku "Local grounding in the headline"; 05 "Claim in the first screen" (diverge: a short line next to the object, never on it) |
| `#hero .hero-stage` (full bleed) | 180 to 484 | `.thread-band` lane, visible x 0 to 122, its bubbles between x 16 and x 116 (longer bubbles run on under the sheet); `.invoice-sheet` x 122 to 374, 252 x 296, in front; `.tape-label` "示例 SAMPLE" on the sheet's top-right corner at +4 degrees; `--counter` slab behind | 03 *Chungking Express* (two speeds, one frame); 02 *Night Mail* (catch, pigeon-holes); 05 (the invoice first, anatomy); 01 (marks); 07 (record block); 06 (tape label) |
| `#hero .stage-caption` | 488 to 506 | one time-stamped line; at rest "23:41:07 单开好了。" with the real clock time | 05 "Sound" (every beat carried by picture and caption); 03 (exact time) |
| `#hero .cta-trial` | 514 to 566 | full width inside the gutters, 52 px tall, tape green, marker-black label | 04 Bukku "Trial offer in the first screen" |
| `#hero .trial-terms` | 572 to 608 | "7 天免费试用 · Basic RM 199/年 · Pro RM 399/年" | 04 Bukku "Trial terms line" |
| `.cut-rail` | 620 to 664 | replay button (44 x 44, "↺ 重看 / Replay"), a 2 px rail with nine marks, a draggable knob, a readout in Kanit, and the words "无声 · 拖动逐格看 / Silent. Drag to step through." | 02 *Night Mail* element 3 |
| `.picker-client` | 676 to 806 | label strip "客户"; three card tiles 84 x 112 (3:4, clipped corner), each with a yellow tape label (LUMEN, TANJUNG, ARIA), the word 公司 or 个人, and a lock nub | 05 "Interaction: try it without an account"; 06 (tile, tape label, lock switch) |
| `.picker-rate` | 818 to 880 | label strip "价目"; three tape strips 114 x 44, two lines each (service, RM amount) | 05 (same row); 06 (tape label) |
| `.sample-note` | 888 to 906 | "示例资料：工作室、客户、价目都是虚构的。" | 05 "Sample data" (diverge) |
| `#story`: `.msg[data-beat="pdf"]`, then the stage | 930 to 1,520 | caption message; stage 358 x 500: `.stub` (78 x 104) and `.leaf` (the sheet at 0.72) joined at `.perforation`; `.doc-bubble` (240 x 88, right-aligned); `.client-head` (tape label LUMEN, full name, 公司); `.slot-row` of four slots 78 x 104 | 01 element 4; 02 element 4; 05 "The payoff: PDF"; 06 (slots, flip) |
| `.msg[data-beat="record"]` | 1,530 to 1,600 | caption: the stub stays on the client's page with the earlier invoices; company and individual clients are kept apart | facts.md "A client page holds…"; 06 |
| `.date-chip` "月底" then `#reports` | 1,620 to 2,080 | `.msg[data-beat="month"]`; `.report-screen` 358 x 300: `.month-bars` (six months, sales solid, expenses hatched), a detail row for the picked month, three ranked clients, a paper tab "CSV · 给会计" | 04 Bukku "Data display"; 03 (hard cut between episodes) |
| `.date-chip` "第一天" then `#import` | 2,100 to 2,760 | `.msg[data-beat="import"]`; stage 358 x 410: five `.old-file` tiles (two PDF, two JPG, one PNG screenshot of a screenshot) over a `.slot-row` of five; `.review-card` (company, contact, address, each tagged "AI 读到"); `.review-state`; `.approve` button 48 px | 06 (row of slots, flip, green wrap); 02 element 5; 04 "Empty and error states" (diverge) |
| `#pro` | 2,780 to 3,140 | `.msg[data-beat="pro"]`; stage 358 x 200: `.sis-plate`, `.token-strip` (tape blue), `.ai-list` (six names as text, no logos); `.token-state`; button 48 px | 06 (tape as a physical state); 01 element 2 |
| `#pricing` | 3,160 to 3,800 | one `.msg`; `.plan[data-plan="basic"]` and `.plan[data-plan="pro"]` side by side (171 px each), each with a tape label (white for Basic, blue for Pro), the price at 34 px 800, the period, its list from `facts.md`, and a `.cta-trial` | 04 Bukku "Pricing display"; 06 (one tape colour per stock) |
| `.composer`, `.elapsed` | 3,820 to 3,930 | `.elapsed` line; then one row shaped like the thread's reply box holding "开始 7 天免费试用", with `.composer-send` (48 px round, tape green, arrow). The whole row is one link to sign-up | framing; 04 "Primary button label" |
| `footer` | 3,950 to 4,200 | `.trust-line` (Singapore-region storage; each studio isolated at the database; not sold; Madvengers Production 003357155-P); `.support-whatsapp` (WhatsApp is fastest, email also works: link to /contact); terms, privacy, cookies; sign in | 04 Bukku "Local grounding", "Support channel" |

First-screen check against the owner's requirement, at y under 640: claim (80 to 172), a real invoice (184 to 480, all 296 px of it), trial button (514 to 566, and in the top bar), both prices with the trial (572 to 608), language toggle (top bar). The claim never overlaps the stage.

At 1440 px: the thread column is at most 1,120 px wide. The first screen becomes two columns: claim, button, terms, rail and pickers on the left (5 of 12), the stage on the right (7 of 12) at 1.6 times its phone size. Each later beat sets its `.msg` in columns 1 to 4 and its stage in columns 5 to 12 at 1.4 times. Plans sit side by side at 400 px each. No sequence changes its timing.

Sample data used throughout (fictional, labelled): studio Kite & Reel Studio; clients Lumen Events Sdn Bhd (company), Tanjung Bakery (company), Aria Lim (individual); rates Event video half day RM 1,800, Event photography half day RM 1,200, Highlight edit 1 video RM 900; default selection Lumen Events with the first and third rates, total RM 2,700.00; invoice number INV-{year}-014, date and times from the visitor's real clock. The sheet's `.terms` shows payment terms only, and where a bank line would be it says "银行资料：示例里不显示 / Bank details: not shown in this sample".

---

## 6. Sequence sheet

Twelve sequences. For each: the trigger, what moves from where to where, how long, how it ends, and the still that reduced motion shows. Component tags point to the manifest (`motion[n]`, `imagery[n]`, `ornament[n]`, `key_visual_elements[n]`) or to the per-reference log (`R01.4` means Reference 01, element 4).

Timing words used below: **cut** = one frame, done with a stepped `visibility` or `clip-path` change, never with opacity. **Hard stop** = linear travel that ends on a frame with no ease-out. **Settle** = on the landing frame the object sits 2 px past its place, on the next frame it is in place. **Step** = one 60 px jump of the band, 87 ms.

### S1. The Catch (opening sequence)

- **Trigger:** page load, once, when fonts are ready or after 400 ms, whichever is first, if the stage is on screen and motion is allowed. Replayed by the button on `.cut-rail`.
- **Length:** 2,420 ms, then everything is still.
- **Start frame (t = 0), by cut:** the sheet is in place with the studio's own details, labels and rules, but its six slots are empty: dashed boxes with small-cap labels (CLIENT, ITEM, RATE, DATE, TOTAL, PDF). No crossing, no record block. The band is running.
- **What moves:**

| # | t (ms) | Interval | What happens | From → to | Duration | Tags |
|---|---|---|---|---|---|---|
| 0 | 0 | | The band runs upward in steps: 21 steps of 60 px, stretched to scaleY 1.2, two ghost copies one and two steps behind | strip y 0 → -1,260 px | 1,820 | `imagery[0]`, `imagery[1]`, `motion[3]`, R03.1, R03.2 |
| 1 | 420 | 420 | Catch: the client name leaves a passing bubble and lands in `.bill-to` | lane x 16 → slot, about 150 px right, leaning 12 degrees | 140, hard stop, settle | `motion[2]`, R02.1, `key_visual_elements[2]` |
| 2 | 860 | 440 | Catch: first line item and its amount land in `.lines` row 1; the amount is Kanit italic in flight and is cut to upright Instrument Sans on landing | lane → row 1 | 140 | `motion[2]`, `typography[4]`, R02.1 |
| 3 | 1,200 | 340 | Catch: second line item lands in row 2 | lane → row 2 | 120 | same |
| 4 | 1,460 | 260 | Catch: date and number land in `.meta` | lane → `.meta` | 120 | same |
| 5 | 1,660 | 200 | Total: the figure steps 0.00 → 1,800.00 → 2,700.00 in three cuts 60 ms apart; at 1,780 the amount in words is cut in beneath | in place | 3 cuts | `motion[1]`, `key_visual_elements[12]`, R01.3 |
| 6 | 1,820 | 160 | The band stops on a step. Stretch is cut to 1; the ghosts arrive under the strip and can no longer be seen | | 1 step | `motion[3]`, R03.2 |
| 7 | 1,900 | 80 | The crossing: first pen stroke drawn, 30 ms gap, second stroke drawn; at 2,150 the phrase between them is cut in | each stroke corner to corner, `stroke-dashoffset` full → 0 | 110 + 30 + 110 | `ornament[3]`, `key_visual_elements[3]`, R01.1 |
| 8 | 2,240 | 340 | The return stamp: `.record-block` is wiped in from left to right with a hard edge, carrying the real time to the second | `clip-path: inset(0 100% 0 0)` → `inset(0)` | 180 | `motion[8]`, `ornament[5]`, R07.1, R07.2 |
| 9 | 2,420 | 180 | Hold. | | | R02.3 |

  The intervals between beats 1 to 6 shorten (440, 340, 260, 200, 160), then the last two beats are longer and the hold has no end. That is the tempo borrowed from R02.3, and it is what the nine marks on the rail show.
- **Caption (`.stage-caption`), by cut on beats 0, 1, 2, 4, 5, 7, 8:** from "聊天记录里，资料到处都是。" through "客户，抓到。", "价目，抓到。", "日期和单号，自动填。", "合计 RM 2,700.00。", "划线。" to the final line with the real time. One line at a time, never more than 14 Chinese characters. The final line is the default text in the markup.
- **End:** the complete sheet (client, two lines, number and date, total in figures and words, crossing, record block, machine line), the band at rest showing five sharp, legible items (a forwarded bubble, a voice note with its text line, a screenshot of a screenshot, a short "发票再发一次？", a reply), the final caption.
- **Interruptions:** a tap on a picker jumps S1 to its end by a cut and runs S3. Scrolling does not cancel it.
- **Reduced motion and no script:** the end frame, from first paint. No autoplay. The rail still works but only as cuts (see S2).
- **Why it is not a tell:** the claim, the button and the prices are static from first paint and are never part of the sequence (anti-defaults 3, 4). The motion shows the product's claim happening (1). Intervals are authored and unequal, with no blur (2). It ends by itself and does not loop (6).

### S2. Shuttle (hand transport on `.cut-rail`)

- **Trigger:** dragging the knob, or arrow keys when it has focus, or the replay button.
- **What moves:** the knob follows the finger along the rail (x only). The time of every animation in S1 is set from the knob's position, so the catches run forwards and backwards under the thumb at whatever speed he drags. The readout shows the time in Kanit 700 ("0:01.46"), italic while the knob is moving and cut upright when it stops.
- **Details:** the rail is a native range control restyled (keyboard: left and right move one frame of 42 ms, Home and End jump to the ends; its text value is the current caption). `touch-action: pan-y`, so a vertical swipe that starts on it still scrolls the page. Releasing leaves the sequence paused at that frame. The replay button plays from the current time to the end. Marks sit at 17, 36, 50, 60, 69, 75, 79, 93 and 100% of the rail.
- **Length:** as long as he drags. Nothing moves when he lets go.
- **End:** wherever he leaves it; replay returns it to the end frame.
- **Reduced motion:** the knob snaps between the nine marks and each position shows that beat's still by a cut. Nothing travels.
- **Tags:** `motion[9]`, `key_visual_elements[8]`, `typography[4]`, R02.3.

### S3. Re-cut (the pickers)

- **Trigger:** a tap on a client tile or a rate strip.
- **Client, 420 ms in all:** 0 to 80, the lock nub on the old tile moves up 12 px and the one on the new tile moves down 12 px, and the word "已选" is cut from one to the other. 0 to 90, one pen stroke is drawn through the old name on the sheet. At 120 the old name is cut away. 120 to 280, the new name leaves the tile's tape label and travels to `.bill-to` (hard stop, settle; it leans in flight and is cut upright on landing). 300 to 420, the record block is wiped again with the time of this tap.
- **Rate added, 400 ms:** the strip's text leaves the strip and lands in the next free row (160 ms, the amount in Kanit italic in flight); the strip in the picker is left as a dashed outline with the word "已加"; the total steps to its new value through two cuts 40 ms apart; the amount in words is cut to match; the record block is wiped again.
- **Rate removed, 330 ms:** one pen stroke through the row (90), the row is cut away, the rows below move up by one row height (100, hard stop), the total steps down, the strip in the picker is cut back to solid.
- **No rate left:** the crossing strokes are undrawn in reverse (90 ms each), the record block is wiped off right to left (120), the row area shows one empty slot labelled "选一个价目", the total reads RM 0.00 and the caption is cut to "还没选价目。". Picking a rate draws the crossing and the block again. A sheet without a client cannot occur: one client is always picked.
- **End:** the sheet at rest in its new state.
- **Reduced motion:** every change is a single cut to the new state.
- **Tags:** `motion[2]`, `motion[1]`, `motion[8]`, `ornament[3]`, R01.2, R06.5, R06.6, `key_visual_elements[5]`.

### S4. Tear-off and drop (`#story [data-beat="pdf"]`)

- **Trigger:** scroll position. Progress p runs from 0 when the top of the stage is 78% of the way down the viewport to 1 when it is at 28% (about 420 px of scrolling at 844). It is a pure function of scroll position: stop and it stops, scroll back and it runs backwards. Nothing is pinned.
- **Start (p = 0):** the leaf is joined to the stub at the perforation; the document bubble is an empty dashed outline labelled "PDF".
- **What moves:** p 0 to 0.08, the leaf moves 6 px away from the stub and the perforation opens. p 0.08 to 0.50, the leaf travels down and right into the bubble's thumbnail slot while scaling from 0.72 to 0.24; linear in p, so his thumb is the easing. At p 0.50 it is in the slot and the bubble's outline is cut to a solid green fill with the file name "INV-{year}-014.pdf" and "1 页 · PDF". At p 0.56, one grey tick and the word "已发送". At p 0.64, two grey ticks and "已送达". At p 0.72, two blue ticks, "已读" and the time. The stub does not move during any of this.
- **End (p = 1):** stub at top left, the PDF in the thread with two blue ticks.
- **Reduced motion, no script, fast flick:** the end state.
- **Tags:** `motion[4]`, `motion[1]`, `motion[2]`, `imagery[5]`, `key_visual_elements[6]`, `key_visual_elements[7]`, `ornament[0]`, `ornament[2]`, R01.4, R02.4.

### S5. Filed (`.slot-row` in `#story`)

- **Trigger:** the same scroll progress as S4, continuing.
- **What moves:** p 0.72 to 0.92, the stub travels straight down 388 px into the first slot of the client's row (linear in p). When p passes 0.94 the tile turns over on its vertical axis in 200 ms (linear, hard stop) and shows its done face: "INV-014 · RM 2,700.00 · 已归档". If p falls back below 0.94 it turns back.
- **End:** four tiles in the row, all on their done face, the newest first.
- **Reduced motion:** the end state.
- **Tags:** `motion[4]`, R06.1, R06.3, `ornament[4]`.

### S6. Month (`#reports .month-bars`)

- **Trigger:** scroll position; p from 0 with the screen's top at 80% of the viewport to 1 at 40%. Tapping a month is a separate, tap-driven cut.
- **What moves:** each month's two bars grow from the baseline by scaleY, month by month from left to right (month i grows while p goes from 0.13 i to 0.13 i + 0.2). The figures are printed from the start; only the bars scale. When p passes 0.9, a block tagged "014" drops 36 px onto the top of November's sales bar (120 ms, hard stop, settle) and November's sales figure steps 9,700 → 11,050 → 12,400 in two cuts while net steps 6,550 → 9,250.
- **Tap on a month:** the detail row is cut to that month's sales, expenses and net profit, and a 2 px bracket under the column moves to it (80 ms translate).
- **End:** six months of bars, November picked, with the "014" block on it.
- **Colour is not the carrier:** sales bars are solid, expenses bars are hatched, both are named in a legend with words, and every figure is printed.
- **Reduced motion:** the end state; a tap is a cut.
- **Tags:** `motion[4]`, `motion[1]`, `key_visual_elements[9]`, `ornament[4]`, R04.6.

### S7. Episode cut (`.date-chip`)

- **Trigger:** none. It is a still element: a chip reading "月底" and later "第一天".
- **What happens:** nothing moves. The chip is the hard cut between episodes; the ground tone and everything else change on the line it sits on.
- **Tags:** `key_visual_elements[13]`, R03.5. It is listed as a sequence because it is a staging decision: where his films cut between short self-contained episodes, this page puts one line of time and no transition.

### S8. Sort (`#import`)

- **Trigger:** scroll thresholds; p from 0 with the stage's top at 75% of the viewport to 1 at 35%.
- **Start:** five old files lie in a heap over the row of slots, each a few degrees off and overlapping, each with two fixed offset copies behind it (the copy-of-a-copy look, still).
- **What moves:** as p passes 0.12, 0.26, 0.40, 0.54 and 0.68, one file at a time straightens and travels into its slot (140 ms, linear, hard stop, settle) and then turns over (160 ms) to its read face: file name and "已读". As p passes 0.78, 0.85 and 0.92, the three fields on the review card are wiped in from the left (100 ms each): company, contact, address, each tagged "AI 读到". Scrolling back reverses each step.
- **End:** five tiles in their slots on their read face, the card filled, the state line reading "未保存 · 等你核对" under a red tape label. That is the honest resting state: nothing is saved yet.
- **Reduced motion:** the end state.
- **Tags:** `motion[4]`, `motion[2]`, `motion[8]`, R06.1, R06.3, R02.5.

### S9. Green wrap (`#import .approve`)

- **Trigger:** a tap on "核对无误，保存".
- **What moves:** a green tape band, 30 px tall, 4 degrees off level, is wiped across the card from its left edge (clip wipe with a hard edge, plus 12 px of travel; 200 ms, hard stop, settle). It lies across the lower part of the card and covers the "AI 读到" tag of the last field, so the check is visible as something laid on top. It carries "已核对 · {HH:MM:SS}" in marker black. On its last frame the state line is cut to "已保存 · 1 位客户进了名单" and the button label is cut to "撤销". A second tap wipes the band off right to left (160 ms) and returns the state.
- **End:** the card with its band, or without it.
- **Reduced motion:** the band appears and disappears by a cut.
- **Tags:** `motion[8]`, `motion[7]`, R06.4, `ornament[5]`.

### S10. Token (`#pro`)

- **Trigger:** a tap on "撤销令牌", then on "新建令牌".
- **What moves, revoke (300 ms):** 0 to 90, one pen stroke through the strip's text. 120 to 300, the strip is wiped back into the studio plate from its far end (clip wipe toward the plate). On the last frame the state line is cut to "已撤销 · 这个 AI 进不来了" under a red tape label and the button reads "新建令牌".
- **Create (180 ms):** the strip is wiped out from the plate to the list (left to right, settle); the state line is cut to "已连接 · 只在这个工作室范围内".
- **Default and reduced motion:** connected; changes are cuts.
- **Tags:** `motion[8]`, `motion[1]`, R01.2, R06.2.

### S11. Language cut (`.lang-toggle`) and state cuts

- **Trigger:** a tap on the toggle; any hover, focus or press.
- **Language:** the toggle's thumb travels 36 px in 80 ms (linear). On the frame it stops, every string on the page is replaced at once, by a cut, and `lang` is updated. Each text container reserves the height of its longer language, so nothing below it jumps. Proper names in the sample data and figures do not change.
- **States:** pressed is a 1 px drop and a border going from 2 px to 1 px; focus is a 2 px outline in `--tick`, 2 px off the edge; hover (fine pointers only) is an underline or border weight; disabled is a dashed edge and a word. All are cuts. No element has a transition on colour or opacity, and no rule uses `transition: all`.
- **Reduced motion:** the thumb is cut as well.
- **Tags:** `motion[7]`, `motion[1]`.

### S12. Clock stamps and the last line (`.msg .time`, `.elapsed`)

- **Trigger:** the first time each caption message, and then the composer, comes on screen.
- **What happens:** the message's time stamp is cut from its default ("今天") to the real time at that moment. When the composer comes on screen, the line above it is cut once from "看到这里了。" to the real time and how long he has been on the page, to the second, and it does not tick afterwards.
- **Nothing moves.** It is a cut, made once per element.
- **Reduced motion:** the same; it is already a cut.
- **Tags:** `motion[1]`, `ornament[5]`, R03.3.

---

## 7. States

| Element | States, each with a shape or a word, never colour alone |
|---|---|
| `.cta-trial`, `.composer` | rest; pressed (1 px drop); focus (outline). Always a link to `https://sistudio.app/auth/sign-up` |
| `.lang-toggle` | 中文 picked; EN picked (thumb position and bold label) |
| `.picker-client` tile | available; picked (lock nub down, "已选", 2 px inset edge); pressed; focus |
| `.picker-rate` strip | available (solid tape); added (dashed outline, "已加"); pressed; focus. All three may be added |
| `.invoice-sheet` | done (crossing and record block present); draft with no rate (one empty slot, RM 0.00, no crossing, no block) |
| `.cut-rail` | at end; playing; paused at a frame; dragging |
| `.doc-bubble` | empty outline; sent (one tick, word); delivered (two grey ticks, word); read (two blue ticks, word, time) |
| `.slot-tile` | empty slot (dashed, labelled); filled, face up; done face |
| `.month-bars` | one month picked (bracket under it, detail row shows it) |
| `.review-state` | not saved (red tape label and words); saved (green band on the card and words) |
| `.token-state` | connected; revoked (red tape label and words) |
| `.msg .time`, `.elapsed` | default text; stamped |

---

## 8. Global motion rules, stills and the constraint

1. **Finished frame first.** The markup and stylesheet alone draw every end state listed in section 6. Animations are Web Animations or CSS animations whose first keyframe is the earlier state and whose natural end is the stylesheet value, with backward fill. Nothing is hidden by a class that a script must later remove. If a script fails, the page is complete.
2. **Only five moves** (`motion[0]`): cut, hard-stop translate, scale, clip wipe, drawn stroke. Animated properties are limited to `transform`, `clip-path`, `stroke-dashoffset`, `visibility` and discrete font or text changes. `opacity`, `fill-opacity`, `stroke-opacity`, colour alpha, `filter` and `backdrop-filter` are never animated or transitioned; `document.startViewTransition` is not used; no canvas trail.
3. **Fixed transparency in use** (allowed, and listed so the critic can walk them): the two ghost strips (0.38, 0.2), the still ghost offsets on old files, the dashed edges of empty slots, the thread wallpaper, the lane grain, the sheet's shadow. None changes over time.
4. **Scroll.** No listener cancels wheel or touch events; no mandatory scroll snapping; nothing is pinned except the top bar. Scroll-linked progress uses `animation-timeline: view()` where it is supported and a `requestAnimationFrame` reader of scroll position otherwise; both set the same animation time.
5. **Nothing runs on its own clock after it lands.** No loops, no typing dots, no pulsing or shimmer, no idle animation (anti-defaults entry 6). The longest timed sequence is S1 at 2,420 ms; every other timed move is 420 ms or less.
6. **One entrance is never applied to every block** (anti-defaults entry 1 in its post-fade form). Captions, headings, prices and lists do not animate at all. Objects move only where the move is the fact being shown.
7. **Reduced motion** (`prefers-reduced-motion: reduce`): no autoplay; every sequence shows its end state from first paint; taps change state by a cut; the rail steps between stills.
8. **No flashing.** The total and the ticks change at most three times within any second.
9. **Where the constraint forces a change of habit, and what is done instead** (the critic asks for this list): a product object arriving → it is caught, wiped or already there; the language switch → a cut on the frame the thumb stops; hover and focus → shape changes; a tick changing colour → a cut; a caption changing → a cut; a state line changing → a cut on the last frame of the move that caused it; reduced motion → the finished frame.

---

## 9. Hard limits carried into the build

1. No QR code or matrix-like mark, and none of the words LHDN, IRBM, MyInvois, e-Invoice or "validated", or their Chinese equivalents (电子发票, 已验证, 税务局), anywhere in the file, comments and identifiers included. The record block's square holds a page count and nothing else. Use "核对 / checked" for what the owner does.
2. No cheque, no bank name, no account number or digit string shaped like one, no "PAID" mark, no pay button, no claim that SIS takes, confirms or tracks payment. The sample invoice shows payment terms and says its bank details are not shown. Keep such words out of class names and comments too (no "cheque", "payee", "bearer").
3. No photographs, no generated images, no raster data URIs. Inline SVG and CSS only.
4. Nothing depends on sound. No audio or video element, no control that invites listening. The voice note is a drawing with a line of text. The rail says in words that it is silent.
5. No claim beyond `context/facts.md`, nothing from its "Unknown" list, exact prices only (7-day free trial, Basic RM 199 a year, Pro RM 399 a year), no testimonials, logos, user counts or statistics. All sample data labelled as sample in both languages.
6. No long dash characters in copy.
7. Simplified Chinese by default with an English toggle in the top bar; every string in both.
8. Trial button, both prices and a real invoice inside the first screen at 390 px, at rest and under reduced motion, in both languages.
9. One self-contained file; the only external request is the recorded Google Fonts stylesheet; no sideways scroll; gutters of at least 16 px. The stage's ground runs edge to edge, but everything readable keeps the gutter: the lane's bubbles sit between x 16 and x 116, and the sheet ends at x 374.
10. WCAG AA contrast (section 1.4), state never by colour alone, touch targets at least 44 px on every control.

---

## 10. Open items

1. **Palette gate is provisional.** Closed from anchor 06 with estimated hex values (section 1.1). The remedy, if refused, is an iteration extension with the owner's confirmation.
2. **Colour against the live page.** Whether a flat night ground with tape colours reads at least as rich as the live page's dark, cinematic colour has to be judged in pixels by the critic and the ICP. If it reads thin, the first lever is the `--counter` slab and the saturation of the ghost tints in the "before", not a gradient.
3. **Three anchors have no file of their own** (03, 04, 05). Their written descriptions are in `sampling.md`; `inspiration.md` gives the line ranges.
4. **Build pixel evidence** for every row in section 2 is pending the build.
5. **Thread colours are recalled, not measured** (`--bubble`, `--bubble-out`, `--tick`). They are starting values.
6. **Kanit is visible at rest in one place only** (the rail readout). If the critic wants a second resting use it must still be a figure that travels; it may not become copy.
7. **A pattern in the critic's word check** (`e-?\s?invoic`, case-insensitive) also matches ordinary English such as "the invoice" or "one invoice", where a word ending in e is followed by "invoice". Either that pattern is corrected by whoever owns `claude_critic.md`, or the English copy avoids the adjacency ("an invoice", "your invoice", "this invoice").
8. **Copy.** The caption lines quoted in section 6 fix what each beat says and how long it is. Final wording in both languages belongs to the build and the ICP loop.
