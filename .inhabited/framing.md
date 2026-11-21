# framing.md: SIS home page (sistudio.app), version 2

The chosen framing and the framing-seed references, extracted from `sampling.md` at Step 12 (2026-11-16). `sampling.md` wins on any difference. Nothing here is new sampling.

## The framing (locked at Step 4)

- **Framing, verbatim:** WhatsApp forwarded-message vernacular: grey bubbles, double ticks, voice notes, screenshots of screenshots
- **Pole:** vernacular / found
- **Pool index:** 37 of 0 to 39 (40 candidates after the brief-fitness gate)
- **Seed:** `SEED=1794798837238`, `PICKS=[37]`
- **Condition carried from the gate:** voice notes appear only as a visual; nothing depends on sound.
- **Recorded role:** narrative and motion logic. Found, messy, time-based material that resolves into one clean invoice and its PDF. Finish, colour and type stay at or above the dark, cinematic live page (owner's binding Notes in `inhabited.md`).
- **Recorded risk:** a chat mock-up is a familiar page device. A row of bubbles alone does not satisfy the framing. The Designer, the seeds and the constraint are responsible for lifting the staging beyond that.

## Why it was accepted (from the Step 4 justification)

The link reaches Jun Hao inside WhatsApp, and WhatsApp is also where his client details, rate negotiations and "can you send the invoice again" requests live. So the page can open in the medium he has just left and show the "before" with material he recognises without a word of explanation. The vernacular supplies a staging grammar and not a skin: messages arrive in time, a thread is a vertical, thumb-native narrative that fits 390 px, a tick turning from one to two and a file landing in the thread are small precise motions he can judge the way he judges an edit, and the turn of the story is the scattered thread resolving into one clean invoice whose PDF goes back as an attachment. It is sound-free by construction, because the vernacular itself draws a voice note as a waveform.

## What "structural" means for this framing

The critic asks whether someone who has never seen the brief would name the framing within 30 seconds. For that to be true the thread has to decide order, interaction and motion, and each of its four named artefacts has to do work. The planned places are specified in `borrowings_v1.md`; this table is the short form.

| Artefact in the framing | What it does on the page (not decoration) | Where (hook in `borrowings_v1.md`) |
|---|---|---|
| Forwarded message | The page opens marked as forwarded, and "forwarding" is the page's basic move: a fragment leaves one place and lands in another by one translate with a hard stop | `.fwd-label`; sequences S1, S3, S4, S6 |
| Grey bubbles | The source material. Client name, rate and date are caught out of streaking grey bubbles onto the invoice. Later bubbles carry the short captions, each with the real time it was reached | `.thread-band .bubble`; `.msg` |
| Double ticks | The state signal of the one message that goes out: the invoice PDF. One grey tick, two grey, two blue, always with a word and a time, changed by cut | `.doc-bubble .ticks`; sequence S4 |
| Voice notes | Part of the mess, drawn as a waveform with a duration and a line of text saying what is buried in it. Never playable, no control that invites listening | `.bubble[data-kind="voice"]` |
| Screenshots of screenshots | The "before" of the invoice: last month's Word invoice inside a phone frame inside a phone frame, each generation offset. Also the pile of old files in the import beat | `.bubble[data-kind="shot"]`; `#import .old-file` |
| The thread itself | The whole page is one vertical thread: time-stamped messages, attachments that are the product views, date chips as the cuts between episodes, and a message composer as the last thing, whose send button is the trial button | `main.thread`, `.date-chip`, `.composer` |

## Framing-seed references (locked at Step 6)

`SEED=1794800480856`, `PICKS=[12, 20]`, pool of 40 (10 categories x 4). Both are written stand-ins for images that could not be downloaded; re-open the file wherever a protocol says to re-open the image.

### Seed 1: Malaysian crossed cheque leaf, "A/C Payee Only" (idx 12, document / procedural)

- **Entry:** `references/seed_crossed_cheque_ac_payee.md`
- **What it lends (named elements):** (1) the crossing as the "done" gesture: two parallel diagonal strokes drawn across the invoice corner by `stroke-dashoffset`, a short status phrase between them; (2) the strike-through that narrows: an unchosen option cancelled by one horizontal stroke; (3) the amount in words and in figures, as two cuts that agree; (4) the tear-off with a counterfoil: the invoice leaves along a perforated rule, the record stub stays; (5) a machine line of fixed-width numerals along the foot.
- **Limit:** formal borrowing only. No cheque, bank name, account number or payment claim on the page. The crossing carries the invoice number and a neutral status phrase, never the cheque's own words.
- **Role next to the framing:** the marks that end each move. After the smear of the thread, one exact stroke.

### Seed 2: *Night Mail* (1936), GPO Film Unit (idx 20, institutional production)

- **Entry:** `references/seed_night_mail_1936.md`
- **What it lends (named elements):** (1) the catch: one still object snapped out of a streaking band by a single hard-stopped translate; (2) the pigeon-hole grid: labelled slots (client, rate, date, item, total, PDF) that fill one piece at a time, the filled grid being the still state; (3) cut length as tempo: shots shorten toward completion, then a long final hold, with no sound; (4) the drop: the finished PDF put out into the thread at a fixed position.
- **Limit:** none of its sound, no stills, no people. Smear is drawn from stretched and offset copies at fixed transparency, never an alpha ramp.
- **Role next to the framing:** how the material moves and arrives. Off-genre for an invoicing page; it stays in.

## Conditions that travel with the framing into every later step

1. Voice notes are a visual only; nothing depends on sound.
2. The framing is the logic of the story and of the motion. It is not a WhatsApp skin, and the page must not read as a clone of the app: finish, colour and type are held at or above the live page.
3. The locked constraint applies to every thread behaviour: a message is there or not there, a tick changes by cut, nothing fades in, and no typing indicator runs on a loop.
4. All thread content is fictional sample data and is labelled as sample data.
