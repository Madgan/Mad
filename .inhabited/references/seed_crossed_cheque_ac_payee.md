# Seed anchor: Malaysian crossed cheque leaf, "A/C Payee Only"

> WRITTEN STAND-IN. This file takes the place of an image that could not be downloaded: the build environment's network policy blocks image downloads and arbitrary web fetches (deviation recorded in pipeline_status.md, Resume notes). There is no picture to Read. Re-open this file wherever the protocol says to re-open the anchor image.

- Slot: framing-seed, anchor 1 of 2 (the two seeds are idx 12 and idx 20)
- Source of the pick: sampling.md, Seeds VS, idx 12 (category: document / procedural), SEED=1794800480856, PICKS=[12, 20]
- Grounded by web search on 2026-11-16. Pages were read through search summaries only, not opened or viewed. Nothing below was measured from a picture. Lines marked [S] are supported by the sources; lines marked [G] are general knowledge of the object that was not checked against a source here.

## What the artifact is

A single cheque leaf from a Malaysian bank cheque book, crossed: two parallel diagonal lines across its upper left corner with the words "A/C Payee Only" between them. The crossing is the instruction that the money may only be paid into the account of the named payee, not cashed over the counter. For a freelancer in the Klang Valley the cheque is still one of the ways a corporate client pays an invoice, and the crossing is the mark that turns a piece of paper into a committed, directed payment.

The single image this would be, if it could be saved: one leaf seen flat and straight on. Pale printed security background. Bank name top left. Top right, the date boxes. A "Pay" line with a handwritten name and, at its end, the printed words "or bearer" struck through by hand. Below it the amount in words on one or two ruled lines, and to the right a boxed "RM" field with the amount in figures. Bottom right, the signature line. Across the top left corner, two parallel diagonal lines with "A/C PAYEE ONLY" set between them. Along the very bottom edge, a line of magnetic-ink machine-readable numerals (cheque number, bank and branch code, account number) in the stylised E-13B digits.

## Sources

- Maybank, cheque encashment page (pre-printed crossing on all new cheque leaves from 1 April 2003): https://maybank2u.com.my/maybank2u/malaysia/en/personal/banking_fees/cheque_encashment.page
- Bank Negara Malaysia, FAQs for the Cheque Truncation and Conversion System (CTCS): https://www.bnm.gov.my/faqs-for-cheque-truncation-and-conversion-system-ctcs-
- Bank Negara Malaysia, nationwide rollout of CTCS: https://www.bnm.gov.my/-/nationwide-rollout-of-the-cheque-truncation-and-cheque-conversion-system
- Nyaaya, "Crossed Cheque" (general explanation of crossing): https://nyaaya.org/?p=827
- UK Bills of Exchange Act 1882, s. 81A (the "account payee" rule in the parent statute Malaysia's Act follows): https://www.legislation.gov.uk/ukpga/Vict/45-46/61/section/81A/data.pdf

## What the sources say (verified through search)

1. [S] Malaysian cheques are governed by the Bills of Exchange Act 1949 (Act 204); a cheque is a bill of exchange drawn on a banker payable on demand.
2. [S] Crossing means drawing two parallel lines across the cheque, usually at the top left corner, with or without words such as "Account Payee Only" or "Not Negotiable". (Secondary source; consistent across several explanations.)
3. [S] The words "A/C Payee Only" tell the collecting bank to credit only the named payee's account.
4. [S] Maybank: all new cheque books issued from 1 April 2003 carry a pre-printed "A/C Payee Only" crossing on every leaf. So on current Malaysian leaves the crossing is usually printed, and hand-drawn crossing is the older habit and the general convention the printed version imitates.
5. [S] Under CTCS, cheques are cleared from images and the MICR code line, so the code line along the bottom and the legibility of the handwritten fields matter to the machine.
6. [S] Common advice (low-quality source, not a regulation): strike out the printed words "or bearer" so a lost cheque cannot be paid to whoever holds it.

What search could not establish: the exact position and size of the printed crossing on Malaysian leaves, and a Malaysian regulation requiring "or bearer" to be struck out. Neither is needed for the borrowing below, which uses the general form only.

## Visual and motion properties

Layout and proportion
- [G] A long, low leaf, roughly 2.3 to 2.5 times as wide as it is tall. Information sits in fixed zones: date top right, payee and amount in words across the middle, figures in a box at right, signature bottom right, code line along the bottom edge.
- [G] The amount is stated twice, in words and in figures, and the two must agree. Redundancy as a check.

The commitment gestures (the core of the seed)
- [S] Two parallel diagonal strokes plus a short phrase between them: a mark that does not add information so much as change the status of the whole document.
- [S] A printed phrase ("or bearer") cancelled by a single horizontal stroke: narrowing who can receive the money.
- [G] The signature: the last stroke, after which the leaf is complete and can leave the book.
- [G] Tearing the leaf out along the perforated edge next to the counterfoil, which stays in the book as the record.

Type and texture
- [G] Fine engraved-looking security pattern, small sans or serif caps for the printed labels, the drawer's handwriting in pen, and the E-13B MICR digits along the foot, whose odd blocky strokes are one of the most recognisable numeral forms in finance.

## What the build may borrow (named, specific elements)

1. **The crossing as the "done" gesture.** When the sample invoice is complete, two parallel diagonal strokes are drawn across its top corner (SVG lines with `stroke-dashoffset` animated from full length to zero, one after the other, each in a single fast pass), with a short status phrase set between them, for example the equivalent of "Sent" or the invoice number. The strokes are drawn, not faded. It is the sharp, still mark that closes the messy sequence, and its finished state is a complete still for reduced motion. Status is carried by the shape and the words, never by colour alone.
2. **The strike-through that narrows.** A printed alternative struck out by one horizontal stroke, used where the page narrows choices: for example, of several clients floating in the thread, the unchosen ones are struck through in one pass while the chosen one stays. A deliberate, editor-like decision made visible, in keeping with the no-cross-fade rule.
3. **Amount in words and in figures.** The invoice total shown twice, once in words and once in tabular figures, arriving as two separate cuts that agree. This lends the invoice the "this is exact" feel the Designer wants and is a legitimate invoice convention.
4. **The tear-off with a counterfoil.** The finished invoice leaves the frame by sliding away from a perforated edge (a dashed rule) while a narrow stub stays behind with the record (number, client, amount, date): the PDF goes to the client, the record stays in SIS. One translate, hard stop, the stub remains on screen as the still state.
5. **A machine line along the foot.** A single line of fixed-width numerals along the bottom of the invoice (invoice number, date, amount), set small and wide in the build's tabular face, as the machine-readable echo of the human-written fields. A formal borrowing only: no real bank, account or routing numbers, and nothing that implies SIS processes cheques or payments.

## Limits and conditions

- Formal borrowing only. SIS does not issue or process cheques; the page must not show a cheque, a bank name, account numbers, or wording that implies payment processing, and facts.md governs every claim.
- All values shown on any invoice that uses these marks are fictional and labelled as sample data.
- Every stroke is drawn by `stroke-dashoffset` or by `clip-path` reveal; nothing appears by opacity.
- The other seed (idx 20, *Night Mail*) supplies how the material moves; this one supplies the marks that end each move. The Auden line "bringing the cheque and the postal order" joins the two; that is a note for the Designer, not copy.
