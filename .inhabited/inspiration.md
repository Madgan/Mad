# inspiration.md: the 7-anchor bank, SIS home page version 2

Assembled at Step 12 (2026-11-16) from the locked picks in `sampling.md`. Composition per `inspiration-bank-protocol.md`: 2 framing-seeds, 1 designer signature work, 2 brief-domain competitors, 2 brief-domain domain research. Total 7, locked. Iteration extensions used: 0 of 6.

## Read this first: what "anchor file" means here

Reference images cannot be downloaded in this environment (network allowlist, recorded in `pipeline_status.md` and accepted as a deviation). Every anchor is therefore a written stand-in. Wherever a protocol says "open the image", open the written entry at the path below and read it.

- Anchors 1, 2, 6 and 7 each have their own file in `references/`.
- Anchors 3, 4 and 5 have no separate file. Their written descriptions were produced at their own sampling steps and are held in `sampling.md`; the path column gives the section and the line range (line numbers as of 2026-11-16; the section headings are stable if the numbers drift). No file was added for them at Step 12. If the orchestrator wants one file per anchor, these three sections can be copied out without change.
- The single-clean-image rule, the `NN_<source>_<what>.png` naming and the 1600 px size guard cannot apply to written entries.
- Photography: none. The brief forbids stock and generated images and stock sources are unreachable, so there are no `IMAGE_INTENT` slots and nothing to fill at the end of an iteration.

## The bank

| # | Slot | Anchor | Written entry (path) | ms-seed |
|---|---|---|---|---|
| 01 | Framing-seed | Malaysian crossed cheque leaf, "A/C Payee Only" | `references/seed_crossed_cheque_ac_payee.md` | 1794800480856 (idx 12 of 40) |
| 02 | Framing-seed | *Night Mail* (1936), GPO Film Unit | `references/seed_night_mail_1936.md` | 1794800480856 (idx 20 of 40) |
| 03 | Designer signature work | Wong Kar-wai, *Chungking Express* (1994) | `sampling.md`, "## Designer locked", lines 250 to 267 (the signature-work description is at lines 256 to 259) | 1794799205550 (idx 14 of 20) |
| 04 | Competitor | Bukku | `sampling.md`, "#### vs Bukku (idx 6)", lines 478 to 508, with the justification at line 468 | 1794799137895 (idx 6 of 20) |
| 05 | Competitor | Invoice-Generator.com | `sampling.md`, "#### vs Invoice-Generator.com (idx 19)", lines 510 to 538, with the justification at line 470 | 1794799137895 (idx 19 of 20) |
| 06 | Domain research | Card labels and camera tape | `references/domain_card_labels_camera_tape.md` | 1794799252914 (idx 10 of 20) |
| 07 | Domain research | The validated e-invoice return block (formal borrowing only) | `references/domain_myinvois_validated_einvoice_qr.md` | 1794799252914 (idx 13 of 20) |

## Borrowing lines (what each anchor lends, named and specific)

Each line names the element and the place it is planned to appear. The full log, with selectors and sequence numbers, is in `borrowings_v1.md`.

### 01 Crossed cheque leaf: borrowing the marks that end a move

1. The crossing: two parallel diagonal pen strokes across the top-left corner of the invoice sheet, drawn by `stroke-dashoffset`, with the invoice number and a neutral status phrase between them. On `.invoice-sheet .crossing`.
2. The strike-through that narrows: one horizontal pen stroke through the value being replaced, before it is cut away. On `.invoice-sheet .strike` when a client or a rate is changed, and on the token strip when it is revoked.
3. Amount in words and in figures: `.invoice-sheet .total` and `.invoice-sheet .total-words`, arriving as two cuts.
4. Tear-off with a counterfoil: the leaf leaves along a perforated dashed rule, the stub stays with number, client, amount and date. In `#story [data-beat="pdf"]`.
5. Machine line: one line of fixed-width numerals along the foot of the sheet (number, date, amount). On `.invoice-sheet .machine-line`.
Limit: no cheque, no bank name, no account number, no payment claim.

### 02 *Night Mail*: borrowing how the material moves and arrives

1. The catch: a fragment snapped out of the streaking thread band onto the still sheet by one translate with a hard stop. Opening sequence S1.
2. The pigeon-hole grid: six labelled slots on the sheet (client, item, rate, date, total, PDF) that are empty at the start of S1 and fill one at a time; the filled sheet is the still state.
3. Cut length as tempo: the interval between catches shortens (440, 340, 260, 200, 160 ms), then a long hold. Drawn as the spacing of the marks on `.cut-rail`.
4. The drop: the finished leaf put out into the thread as a PDF document bubble at a fixed position. Sequence S4.
Limit: none of its sound, no film stills, no people.

### 03 *Chungking Express*: borrowing two speeds in one frame

1. One sharp still subject while the world streaks: the white invoice sheet at full frame rate and never smeared, over a thread band that runs step-printed at 12 frames a second with trailing copies. `.hero-stage`.
2. Step-printing as a drawn treatment: stretched bubbles and two lagging copies at fixed transparency, which coincide with the original and vanish behind it at rest. `.thread-band`, `.ghost`.
3. Exact time as a repeated small object: the clock time to the second on the record block, the real time on each message, and one invoice number (INV-014) that reappears on the sheet, the crossing, the stub, the PDF name, the filed tile and the month bar.
4. Hard cuts between short episodes: date chips as the cut between "today", "month end" and "day one". `.date-chip`.
Conditions: smear only in transitions and in the "before"; nothing depends on sound; no photographs of people; the owner's Notes override.

### 04 Bukku: borrowing what a Malaysian buyer expects to find at once

1. Trial button and its true terms in the first screen: `#hero .cta-trial`, `#hero .trial-terms`, `header.topbar .cta-trial`.
2. Plain RM prices with the period, two plans side by side: `#pricing .plan`.
3. A slim top bar with language, sign in and trial: `header.topbar`, `.lang-toggle`.
4. Month-by-month sales, expenses and net profit with labels and values: `#reports .month-bars`.
5. Local grounding in the claim and a WhatsApp support route as a link: `#hero .hero-claim`, `footer .support-whatsapp`.
Everything else (still claim, compliance badge, user count, promotion, module order, light surface) is a recorded `diverge`.

### 05 Invoice-Generator.com: borrowing the invoice as the first thing on screen

1. The invoice itself in the first screen, as a light sheet on a plain ground: `#hero .hero-stage .invoice-sheet`.
2. Invoice anatomy he recognises in one glance: `.from`, `.bill-to`, `.meta`, `.lines`, `.total`, `.terms`, amounts right-aligned in tabular figures.
3. Try it with no account: `.picker-client`, `.picker-rate`, two taps instead of typing.
4. The PDF as the payoff: `#story [data-beat="pdf"]`.
Everything else (blank start, typing, download button, long copy, user count) is a recorded `diverge`.

### 06 Card labels and camera tape: borrowing state as position, and the tape palette

1. Flip to mark done: a card-shaped tile that turns over on its vertical axis; done is its other face. `.slot-tile` in `#story` and `#import`.
2. The tape label: a short flat-coloured strip, ragged short ends, a few degrees off level, one short code in heavy capitals. `.tape-label` names objects in place of eyebrow lines and pill badges.
3. The row of slots as a progress readout: `.slot-row`.
4. Green wrap means checked: a green band laid across the review card only after the visitor approves. `#import .wrap-checked`.
5. The lock switch as a physical position: the picked client tile has its switch slid down. `.picker-client .lock`.
6. Tape palette: green `#1E9E4A`, red `#D4262C`, yellow `#F2C418`, blue `#1F5FBF`, white `#F3F1EA`, marker black `#111111` (estimates, not measured). This is the bank's only chromatic anchor and the source for the palette gate.
Limit: no camera or card brand; codes on labels are sample data.

### 07 The validated e-invoice return block: borrowing a sequence and a block, nothing else

1. The return stamp as a second beat: after the invoice is assembled by the person, one compact block is printed onto its foot by the system. End of S1, `.invoice-sheet .record-block`.
2. The record block: one plain square mark holding the page count, one identifier line, one date and time line with seconds, in small tabular capitals.
3. Two hands, two type voices: what the person chose in the reading weight, what the system wrote in tabular figures.
4. Before and after on one page: the sheet without and then with its block.
Hard limit: no QR code, none of the words LHDN, MyInvois, e-Invoice or "validated" (or their Chinese equivalents), no government mark, no compliance claim. Only the owner can lift this.

## Component-to-anchor map (which entry to re-open before which decision)

| Decision zone | Re-open |
|---|---|
| Opening sequence: band, catches, tempo | 02 *Night Mail*, 03 *Chungking Express* |
| Marks on the sheet: crossing, strike, words and figures, machine line | 01 Crossed cheque |
| Record block and the two type voices | 07 Return block |
| Sheet anatomy, pickers, first-screen offer | 05 Invoice-Generator.com, 04 Bukku |
| Tiles, slots, tape labels, green wrap, every saturated colour | 06 Camera tape |
| PDF leaving, stub staying | 01 Crossed cheque, 02 *Night Mail* |
| Reports and pricing | 04 Bukku |
| Any smear, lean or stepped motion | 03 *Chungking Express* (and its condition 1) |

## Typography in the bank (from Typography VS, locked)

Bricolage Grotesque (primary Latin), Noto Sans SC (Chinese companion, never above 700), Instrument Sans (thread, product and invoice text), Kanit 700 and 700 italic (accent, movement only). Roles, conditions and the one tested Google Fonts request are in `sampling.md`, "## Typography locked".

## Palette gate

The seeds are not chromatic and anchor 07 is black on white. Anchor 06 is the only chromatic entry and its hex values are estimates. The gate is closed provisionally from anchor 06, with the caveat stated in `borrowings_v1.md`, section 1. The iteration extension (+2 domain references per iteration, up to +6) is unused and is the remedy if the critic does not accept estimated values.

## What changed

- 2026-11-16, Step 12: bank assembled. No anchor added, removed or swapped.
