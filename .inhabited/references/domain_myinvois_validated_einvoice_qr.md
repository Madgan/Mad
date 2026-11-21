# Domain anchor: LHDN MyInvois validated e-invoice QR

> WRITTEN STAND-IN. This file takes the place of an image that could not be downloaded: the build environment's network policy blocks image downloads and arbitrary web fetches (deviation recorded in pipeline_status.md, Resume notes). There is no picture to Read. Re-open this file wherever the protocol says to re-open the anchor image.

- Slot: brief-domain domain research, anchor 2 of 2
- Source of the pick: sampling.md, Domain research VS, idx 13 (band: long-tail, kind: material and technical, Malaysia), SEED=1794799252914, PICKS=[10, 13]
- Grounded by web search on 2026-11-16. Pages were read through search summaries only, not opened or viewed. No sample document was seen. Nothing below was measured from a picture.

## READ FIRST: a hard limit from the brief

`context/facts.md` lists "LHDN e-invoice support" under "Unknown, do not state". The build must therefore not show, say or imply that SIS issues, submits or validates LHDN e-invoices. Concretely, the build must not use: the words LHDN, IRBM, MyInvois, e-Invoice or "validated"; a QR code on the sample invoice (on a Malaysian invoice a QR reads either as tax validation or as a DuitNow payment code, and neither is a stated fact); or anything that looks like a government mark. What this anchor lends is a formal pattern only, listed under "Named elements" below. If the owner later confirms e-invoice support, this limit can be lifted by him and by nobody else.

## What the artefact is

Since Malaysia's e-invoicing mandate began phasing in, an invoice is submitted to the tax authority's MyInvois system, validated there, and sent back with three things added by the authority: a unique identifier number, the date and time of validation, and a QR code that links to the validated record. The human-readable copy of the invoice (a PDF, called the visual representation) carries these. It is the newest piece of paperwork in a Malaysian freelancer's working life and the one most likely to be on his mind when he hears the word "invoice".

The single image this would be, if it could be saved: one A4 portrait invoice page, the visual representation of a validated e-invoice, seen whole, with the block holding the identifier, the validation date and time, and the QR code clearly legible.

## Sources

- EY Malaysia, Tax Alert No. 2 2024 special edition, on the Inland Revenue Board's e-Invoice Guideline: https://www.ey.com/content/dam/ey-unified-site/ey-com/en-my/technical/tax-alerts/documents/ey-tax-alert-no-2-2024-special-edition-the-inland-revenue-board.pdf
- KPMG Malaysia, e-Invoicing Tax Whiz, guidelines update: https://assets.kpmg.com/content/dam/kpmg/my/pdf/e-invoicing-tax-whiz-guidelines-update.pdf
- ClearTax Malaysia, e-invoicing FAQs: https://cleartax.com/my/e-invoicing-faqs-malaysia
- ClearTax Malaysia, QR code on the e-invoice (Malay): https://www.cleartax.com/my/kod-qr-pada-e-invois-di-malaysia
- SQL Account (E Stream MSC), e-Invoice guideline and submission pages: https://sql.com.my/e-invoice-guideline and https://sql.com.my/submit-e-invoice
- Fastlane, "QR Code Requirements For Malaysia E-Invoicing": https://fastlane-global.com/my/blog/malaysia-e-invoicing-qr-code-requirements
- ecosio, compliance for Malaysia: https://connect.ecosio.com/docs/compliance-for-malaysia
- Avalara, Malaysia e-invoicing FAQs: https://www.avalara.com/blog/en/north-america/2023/07/malaysia-e-invoicing-faqs.html
- LHDN MyInvois SDK documentation (document type pages; found in search, not opened): https://sdk.myinvois.hasil.gov.my/documents/debit-v1-1/

These are mostly advisory-firm and vendor summaries of the official guideline. The official guideline's own appendix could not be opened from here.

## What the sources say (verified through search)

1. The order of events. The supplier submits the invoice; the authority validates it in real time; if accepted, a unique identifier and a QR code are generated and returned. (Fastlane; ecosio; EY)
2. What comes back. Upon validation the authority assigns a unique identifier, the date and time of validation, and the information needed to build the validation link (ecosio). "Date and Time of Validation" and the "IRBM Unique Identifier Number" are listed data fields of the e-invoice (EY; KPMG).
3. What the QR is. It contains a link to the validated e-invoice, and anyone with a phone can scan it to check that the invoice exists and what its status is on the MyInvois portal. (EY; Avalara)
4. The visual copy. The supplier receives a PDF visual representation of the validated e-invoice from the portal. If the supplier shares a visual copy with the buyer, the QR code must be embedded in it. (EY)
5. Layout is not fixed. Taxpayers may use any visual format for the human-readable copy, provided the QR code is embedded correctly and the required particulars are present. (ClearTax; EY) So there is no single official position for the QR on the page. Search found no source that specifies size or placement.
6. The QR is the mark of clearance. Cleared invoices display the QR as proof; it is stamped on the human-readable version. (Fastlane; search summaries of Basware and Flick, not opened)

## Visual and motion properties

Marked [S] where it follows directly from the sources above, [G] where it is general knowledge of the object and was not checked against a picture here.

Layout and proportion
- [S] An ordinary invoice page to which a small block has been added after the fact. The block has three parts: a square QR code, a long identifier string, and a date and time. Its position varies by software because the format is free.
- [G] A QR code is a square, with three larger square finder marks in three of its corners and a quiet margin around it. On an A4 invoice it typically prints at about 25 to 35 mm a side, which is a small fraction of the page width. It is commonly put near the top right, beside the invoice number, or at the foot of the page beside the totals.
- [G] The identifier is a long unbroken run of capitals and digits, much longer than an invoice number, usually set small on one line with its label in front. The validation date and time sit on the next line in the form of a full date followed by hours, minutes and seconds.

Colour
- [G] Black on white only. The QR is the densest, darkest object on an otherwise light page of rules and text. There is no colour in the block. For the palette gate, this anchor contributes nothing chromatic; the palette has to come from another anchor.

Typography
- [G] The identifier and the timestamp read as machine output next to the human-written parts of the invoice: fixed-width or tabular figures, capitals, no word spacing in the identifier, seconds shown in the time. The invoice above it is written by a person (client, description, amount); the block below it is written by a system.

How it sequences information (the part that matters for this build)
- [S] The document is finished in two beats, by two different hands. First the person completes the invoice. Then something outside the person answers, and the answer is printed onto the same document: an identifier, an exact moment, a mark. The invoice does not change; it gains a last block.
- [S] The added block is evidence of an event, with its time recorded to the second. It turns a page that could have been typed by anyone into a record with a moment attached.
- [S] The block is the handle for everything that happens to the document afterwards: the identifier is what is searched for, the mark is what is scanned to check status. One compact block stands for the whole record.
- [S] There is a clear before and after that reads in a still: the same page without the block, the same page with it.

## Named elements the build may borrow (positive borrowings)

All of these are formal. None of them may carry the forbidden words or a QR code (see "READ FIRST").

1. The return stamp, as a two-beat sequence. The sample invoice is assembled first (client, rate, total). Then, as a separate and later beat, one compact block is printed onto the foot of the same document by the system, not by the user. In the build this block holds only things SIS is stated to do and sample data: a sample invoice number, the date and time it was generated, and a short note that the PDF exists, worded only from what `context/facts.md` allows (it states that the invoice and its PDF are generated from the same record). The reduced-motion state is the invoice with the block already on it. Borrowed from: the invoice that comes back with a block added.
2. The record block. A fixed, three-part block at the foot of the invoice: one square mark at the left, one long identifier line, one date and time line with seconds, set in tabular or fixed-width capitals at a size clearly smaller than the invoice text. The square mark must be something that is not a QR code and not a government mark (for example a plain square holding the page count). Borrowed from: the QR, identifier and validation time block.
3. Two hands, two type voices. Everything a person chose (client name, service, rate) set in the reading face; everything the system produced (number, timestamp, totals) set in tabular figures. The contrast shows, without a sentence of copy, which parts the visitor would no longer have to type. Borrowed from: human-written invoice above, machine-written block below.
4. Before and after on one page. The same invoice shown without and then with its record block, as the page's proof that something happened, in place of a paragraph saying so. Borrowed from: the unvalidated and validated states of one document.

## Limits

- No QR code, no forbidden words, no government mark, no compliance claim. Repeated here because it is the easiest mistake to make with this anchor.
- Every number, name and time in the block is sample data and labelled as such.
- This anchor is monochrome. Do not let it pull the page toward a black-and-white document look; it lends a sequence and a block, not a colour scheme.
