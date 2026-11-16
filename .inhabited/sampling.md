# sampling.md — SIS home page (sistudio.app), version 2

mode: auto
invoked: 2026-11-16T03:11:32Z
brief-ref: inhabited.md

---

## Framing VS

### Conditioning (what every candidate was generated against)

- **App X**: the public home page of SIS, version 2. One page, one self-contained HTML file, Chinese by default with an English toggle. Its job: show a Malaysian videographer or photographer in under a minute that invoicing becomes "pick a client, pick a rate, done", and get a tap on "start free trial".
- **ICP**: Jun Hao, 31, freelance videographer, Klang Valley. On a 390 px phone, at night after an edit or in a car between locations, opened from a WhatsApp or Instagram link, about 30 seconds of attention. Tired, mildly sceptical. He makes moving images for a living, so generic motion reads as amateur and good motion earns respect.
- **Register**: confident, crafted, peer to peer. Made by someone who does his job. Not corporate, not cute.
- **Owner's binding direction** (inhabited.md, Notes): the lever for this version is presentation, meaning motion, narrative, staging and interaction. It must surpass a dark, cinematic, animated live page. Colour and type must be at least as good as the live page but are not where the effort goes. A real view of the product and of an invoice must appear. Nothing may depend on sound. Every animated sequence needs a complete still state under reduced motion.
- **What "surpass the live page" means, from the captures**: the live page is near-black with a rose to violet gradient accent, large tight grotesque headlines, abstract 3D renders (a glass aperture ring over flying paper, glass jars of documents), a looping import mock and a tabbed panel. Its motion is ambient and decorative. It never shows an invoice, has no trial button in the first screen, sets hero text on top of the render, and repeats itself over roughly 10,500 px on a phone. Version 1 (light amber, clapper-striped invoice builder, static sections) was rejected by the owner as "nothing special".

Each candidate below is a conceptual lens of 6 to 15 words, tagged with its pole, with a verbalized note on how it would carry motion or staging on a phone for this visitor and where it is at risk.

### Candidate pool (40 generated to pole quotas)

| idx | pole | framing | brief-fitness note |
|---|---|---|---|
| 0 | period | Hong Kong 1994 theatrical prints: burned-in bilingual subtitles stacked under every moving frame | Two languages on screen at once is native to this register and to this visitor (Mandarin first, English for clients). Subtitles are timed text, so the page's narrative can be cut like dialogue, and captions carry everything without sound. Risk: the bilingual stack must not fight the zh/en toggle; treat one line as primary. |
| 1 | period | 1960s Shaw Brothers Shawscope title cards: wide-screen lettering sweeps announcing each act in colour | Regional cinema history he will recognise. Gives a staging rule: each section opens with an act card that sweeps in, then the product plays. Wide-screen letterbox bands work on a tall phone as a framing device. Risk: saturated period colour must stay at or above the live page's finish. |
| 2 | period | 1980s Malaysian VHS rental tapes: tracking lines, tape-counter digits, handwritten spine labels | Tape counter and tracking roll are real motion devices; handwritten spines map to clients and jobs filed on a shelf. Risk: glitch effects are the cheapest motion cliche a videographer knows, so it only passes if the tracking artefact is used once and precisely, not as a filter. |
| 3 | period | 1970s Japanese broadcast telop cards: hand-lettered caption slides wiping over the live programme | Caption cards wiping over a running picture is a staging grammar: product UI is the programme, claims are the telops. Sound-free by construction. Risk: needs a continuous "programme" underneath, which must be the real invoice flow and not decoration. |
| 4 | period | 2003 wedding DVD menus: looping chapter screens, a highlight sliding between scene thumbnails | He, or the person who taught him, authored these for wedding clients. Chapter select is an interaction model: sections as chapters, a sliding highlight as navigation, short loops as previews. Risk: nostalgia could tip into parody; the loops have to be well made. |
| 5 | practitioner | Christopher Doyle's step-printed smear: motion dragged at low shutter, colour bleeding between frames | A motion signature every Asian videographer knows and has tried to imitate. Usable as the transition language between states (mess smears, then snaps sharp into an invoice). Risk: legibility; the smear may only live in transitions, never over text at rest. |
| 6 | practitioner | Lotte Reiniger's cut-paper silhouette animation: jointed black shapes moving across backlit coloured glass | Flat jointed silhouettes over glowing colour are cheap to build in SVG and read instantly at phone size. Gives a way to stage the "before" (person buried in paper) without photos. Risk: silhouettes of people must be drawn in code and stay stylised; product UI still has to appear in full. |
| 7 | practitioner | Norman McLaren's drawn-on-film animation: lines scratched directly onto the strip, dancing frame by frame | Hand-scratched line that moves with intent is the opposite of generic easing curves, which is exactly what this visitor judges. Line can draw the invoice into being. Risk: jitter must be deliberate (on twos) and the still state must be a finished drawing. |
| 8 | practitioner | Satyajit Ray's hand-lettered title sequences: brush calligraphy animating into the film's first image | Lettering that becomes picture suits a Chinese-first page where the headline characters can be the animated object. Strong first-screen idea. Risk: brush lettering in code is hard to do well; needs stroke-order animation, not a font pretending. |
| 9 | practitioner | Bong Joon-ho's storyboards: every shot pre-drawn in panels, read strictly in shooting order | A working method he respects. The page becomes a board of numbered shots, each panel coming alive as it is reached; narrative order is enforced, which cuts the live page's repetition. Risk: sketch roughness must not make the product look unfinished. |
| 10 | subcultural | Malaysian wedding-dinner banquet stagecraft: LED backdrop, march-in spotlight, yum seng timed between courses | He films this room most weekends. It supplies a run-of-show: entrance, courses, toast, send-off, each with a lighting cue. Spotlight and LED wall are motion and staging ideas that work in a dark page. Risk: could read as wedding-only and lose the corporate shooter. |
| 11 | subcultural | Tokyo VJ club-visual scene: looped clips triggered on beats, layered and mixed live | Loop craft and live triggering give an interaction model: taps trigger clips, layers mix. Risk: strobing is out (WCAG 2.3.1, and nothing may rely on sound), so the beat has to be visual and slow enough; needs discipline to stay readable in 30 seconds. |
| 12 | subcultural | Demoscene 64-kilobyte intros: everything generated in code, scrolling greetings, effects flaunting tight constraint | The delivery constraint (one file, no images, visuals in CSS, SVG, canvas, WebGL) is this scene's whole ethic. Real-time generated visuals can out-class the live page's pre-rendered stills. Risk: effects for their own sake; each effect must stage a product fact. |
| 13 | subcultural | Karaoke lounge lyric videos: words lighting up syllable by syllable across looping scenery | KTV is shared ground in Malaysia and is bilingual by habit. Text that fills in time is motion carried by the copy itself, fully sound-independent, and tells the reader exactly where to look. Risk: the looping scenery cliche; the scenery must be the product. |
| 14 | spatial | Single-screen cinema projection booth: dark room, one beam, dust, reel changeover cues | One light source in a dark room is a staging rule that beats ambient gradients: whatever the beam hits is the subject. Changeover cue dots give section breaks he will recognise. Risk: a beam with nothing concrete in it would repeat the live page's abstraction. |
| 15 | spatial | Japanese engawa veranda sequence: sliding screens opening rooms one layer at a time | Sliding panels are a transition system: each scroll step slides a screen aside to reveal the next room (client, rate, invoice, report). Calm, precise, works at 390 px. Risk: could become polite and quiet where the brief wants wow. |
| 16 | spatial | Night LRT carriage through Klang Valley: window reflections sliding over a lit interior | (Replacement, see gate log.) His own commute and his own city at the hour he opens the link. Two image layers moving at different speeds (interior fixed, reflections streaming past) is a staging rule for a dark page, and stations give stops in the narrative. Risk: must show product on the lit layer, not just atmosphere. |
| 17 | spatial | Penang clan-house courtyards: thresholds crossed in sequence, each gate revealing a deeper hall | Procession through gates gives depth staging on a vertical scroll: each threshold frames the next space, with light changing as you go in. Regional and specific. Risk: ornament must be abstracted, and the innermost hall has to be the trial button. |
| 18 | cross-cultural | Wayang kulit shadow screen: one lamp, stretched cloth, figures sharpening as they approach | A screen, a lamp and focus that changes with distance: this is a moving-image tradition from his own peninsula with a built-in motion rule (blur to sharp equals far to near). Dark by nature. Risk: figure style must be abstracted with care, and UI must stay crisp. |
| 19 | cross-cultural | Chinese handscroll painting: one continuous scene unrolled sideways, time passing as you travel | Turns the page into one unbroken travelling shot: vertical scroll drives a horizontal pan through a single continuous scene from mess to invoice to report. Continuous staging is rare on SaaS pages. Risk: horizontal travel on a phone must never trap or confuse the scroll. |
| 20 | cross-cultural | Rajasthani Kaavad storytelling shrine: hinged painted doors unfolding panel after panel as the tale deepens | A physical story machine: doors hinge open in order and the teller points. Gives a tactile unfold interaction that suits a narrow screen (panels open left and right from a centre spine). Risk: must be translated to structure, not copied as decoration. |
| 21 | cross-cultural | Malay songket weaving: gold supplementary weft appearing row by row across a dark ground | (Replacement, see gate log.) Dark ground with metallic thread is cinematic on its own terms, and weaving is sequential: each pass of the shuttle adds a row. Invoice lines, client rows and report months can be woven in row by row. Risk: motifs must be abstracted to structure; no pastiche of ceremonial cloth. |
| 22 | material | Thermal receipt printer: paper feeding out line by line, torn at a serrated edge | The invoice can literally print itself out as the visitor picks client and rate: line by line feed is motion with meaning, vertical like a phone. Shows a real document, which the live page never does. Risk: receipt paper could cheapen a professional invoice; keep the invoice itself proper. |
| 23 | material | Risograph two-colour overprint: misregistered layers sliding into alignment, soy-ink grain on uncoated stock | Registration is a motion idea: two plates drift, then lock. Scattered details snapping into one aligned record is the product story. Risk: riso is a familiar design-scene look and usually light; on its own it does not reach cinematic. |
| 24 | material | Cel animation on a multiplane: painted acetate layers stacked in depth, each drifting separately | True layered depth driven by scroll or device tilt, built from flat code-drawn layers. Gives the dimensional quality of the live page's 3D renders while showing real UI on the layers. Risk: parallax is common; it needs authored depth, not a default effect. |
| 25 | material | NCR carbonless bill book: handwriting pressed through white, yellow and pink duplicate sheets | The bill book is how small Malaysian businesses still invoice, so it names the "before" precisely. Sheets peeling apart (white to client, pink kept) can explain "one record, invoice and PDF and report". Risk: must end on the modern result, not stay in the old world. |
| 26 | brief-canon | Non-linear editing timeline: stacked tracks, a scrubbing playhead, clips trimmed and snapped into place | His daily instrument. Scroll becomes the playhead; clients, rates and invoices are clips on tracks that snap together. He can judge the snapping and easing against software he uses all day. Risk: an editor UI imitation must be exact or it reads as costume. |
| 27 | brief-canon | Film title sequence: the page as opening credits, one statement per card, cut precisely | Forces one idea per screen and hard edits instead of scroll-fade, which fixes the live page's repetition and length. Typography in motion is the hero. Risk: titles without picture; product views must be the shots between cards. |
| 28 | brief-canon | Camera viewfinder overlay: frame lines, record dot, focus peaking and zebras guiding the eye | Frame guides and focus peaking are attention tools he trusts: peaking can outline exactly the part of the invoice being talked about. Record dot gives state. Risk: the HUD look is a known trope; state must not rely on the red dot's colour alone. |
| 29 | brief-canon | Colour grading pass: flat log footage wiped into its finished grade, before against after | The before and after wipe is the most satisfying gesture in his trade and maps directly to before SIS and after SIS. A draggable wipe is a phone-native interaction. Risk: the "flat" side must still be legible, and the difference cannot be colour only. |
| 30 | sensory | Rhythm made visible: every cut lands on a silent beat grid you can see pulsing | Editing rhythm as the composition rule, with the beat shown, not heard, which respects the no-sound requirement. Timing discipline is what he judges first. Risk: a pulsing grid must stay subtle and must stop under reduced motion with nothing lost. |
| 31 | sensory | Temperature shift: the page warms from blue-hour cold to golden-hour calm as admin resolves | A lighting arc he knows from shooting: the page's light changes as the story moves from scattered chats to a finished invoice. Gives narrative direction to an otherwise static dark theme. Risk: colour cannot carry state alone, so the arc needs a structural change too. |
| 32 | sensory | Touch of a jog wheel: weighted, detented scrolling where each notch clicks content into place | Makes the scroll itself the crafted thing: content advances in notches with weight and settle, like shuttling footage. Interaction quality is felt in the thumb within two seconds. Risk: scroll hijacking is dangerous on phones; detents must assist, never block. |
| 33 | domestic | Wedding tea ceremony order: elders served in strict turn, each cup answered with a packet | A sequence he films and knows by heart: serve, receive, answer. Maps to client, rate, invoice, payment as an exchange in fixed order, and gives each step a give-and-return motion. Risk: must stay structural; literal red-and-gold wedding styling would narrow the audience. |
| 34 | domestic | Mahjong table reset: tiles shuffled into noise, walls built square, the next round dealt fast | (Replacement, see gate log.) A household ritual he knows in his hands: disorder, then four straight walls, then a fast deal. That is the product story (scattered details, ordered record, quick invoice) as three distinct motion phases, and tiles are easy to draw in code. Risk: gambling connotation must stay out of the copy; keep it to the reset gesture. |
| 35 | domestic | Packing the camera bag the night before: every item laid out, checked, slotted | His own ritual, so it says "made by someone who does your job". Items sliding into fitted slots is a clear motion metaphor for clients, rates and bank details saved once. Risk: gear drawn in code must be good enough for someone who owns the gear. |
| 36 | vernacular | Hand-painted Malaysian cinema hoardings: giant brushed bilingual lettering, paint built up in passes | Big, local, bilingual and made by hand. Paint going on in passes (ground, block, highlight) is a reveal sequence, and the scale suits a first screen. Risk: brush texture in code must be convincing; no painted portraits of people. |
| 37 | vernacular | WhatsApp forwarded-message vernacular: grey bubbles, double ticks, voice notes, screenshots of screenshots | (Replacement, see gate log.) The link arrives in WhatsApp and his client details live there, so the page can begin in the medium he just left: messages arriving in time are staging, and the mess of screenshots is the "before". Risk: chat mock-ups are a common page device; voice notes may appear only as a visual, never as audio. |
| 38 | scientific | Waveform and vectorscope monitors: signal traces drawing live as the picture changes | Scopes are the honest readout he checks on every grade; traces that redraw as the page state changes give live, generated motion. Risk: the documented collapse attractor for this pipeline, and scopes describe pictures, not invoices, so the mapping needs work. |
| 39 | scientific | Light-meter and exposure readouts: a needle settling, stops clicking, one correct reading reached | A needle that overshoots and settles is a physical easing curve with meaning: many inputs, one correct reading, like a total on an invoice. Small enough for a phone. Risk: one instrument cannot carry a whole page; it would need to be a recurring device. |

### Brief-fitness gate (Step 3)

Test applied to every candidate, per framing-protocol.md: "If a marketing director received this conceptual angle as a creative direction, could they see how it serves the product's actual job, even if they wouldn't have chosen it themselves?" A candidate is dropped if it inverts the emotional register, destroys positioning, or makes the brief's job impossible.

Because the owner's Notes are binding, "makes the brief's job impossible" includes one project-specific condition: the framing must be able to carry a strong motion or staging idea on a 390 px phone for a visitor who judges motion craft instantly. A lens that only supplies texture, palette or props fails. Colour and style were deliberately not used as gate criteria (light, dark, period and regional registers all remain in the pool), since the owner named presentation, not colour, as the lever.

**First pass: 40 generated, 36 passed, 4 dropped.** Each drop was replaced by a newly generated candidate from the same pole, which then took the same index and was tested in turn.

| idx | pole | dropped framing | reason for drop | replacement (same pole) | replacement verdict |
|---|---|---|---|---|---|
| 16 | spatial | Kuala Lumpur kopitiam at closing time: marble tabletops, tiled floor, bills spiked on a nail | Makes the job impossible: a room at rest gives texture and one prop but no movement logic and no sequence. Nothing here could out-stage an animated cinematic page. | Night LRT carriage through Klang Valley: window reflections sliding over a lit interior | pass |
| 21 | cross-cultural | Persian miniature stacked perspective: several moments of one story shown simultaneously on tilted planes | Makes the job impossible: its logic is simultaneity and density with no reading order, which works against a 30-second read on a narrow screen, and the motion idea is thin. | Malay songket weaving: gold supplementary weft appearing row by row across a dark ground | pass |
| 34 | domestic | Household ledger at year end: hand-ruled columns, totals carried forward from page to page | Inverts the emotional register: it stages bookkeeping as careful manual labour, the exact feeling the product promises to remove, and a ruled page is static. | Mahjong table reset: tiles shuffled into noise, walls built square, the next round dealt fast | pass |
| 37 | vernacular | Pasar malam price placards: marker-pen numerals on fluorescent card, struck through and rewritten | Destroys positioning: bargain-stall register for a tool that holds a studio's client and payment records, and the motion idea does not extend beyond the price block. | WhatsApp forwarded-message vernacular: grey bubbles, double ticks, voice notes, screenshots of screenshots | pass |

**Passes that carry a recorded condition** (kept in the pool; the condition travels with the framing if sampled):
- idx 2 (VHS): the tracking artefact is a single precise event, never a filter over the page.
- idx 5 (Doyle smear): smear lives in transitions only; text and UI at rest are sharp.
- idx 6 (Reiniger): any human figure is a code-drawn stylised silhouette; real product UI still appears.
- idx 10 (banquet) and idx 33 (tea ceremony): used as run-of-show structure, not as wedding styling, so corporate shooters are not excluded.
- idx 11 (VJ) and idx 30 (beat grid): no flashing above three per second, beat is visual only, full still state under reduced motion.
- idx 19 (handscroll) and idx 32 (jog wheel): must never trap, block or reverse the native scroll on a phone.
- idx 28 (viewfinder), idx 29 (grading wipe), idx 31 (temperature): state is never carried by colour alone.
- idx 37 (WhatsApp): voice notes are visual only; nothing depends on sound.

All 40 candidates in the table above are the post-gate pool. The table shows the replacements in place at idx 16, 21, 34 and 37; the dropped originals are preserved only in this log.

### Quota self-check

| pole | quota | count in post-gate pool | indices |
|---|---|---|---|
| Period | 5 | 5 | 0 to 4 |
| Practitioner-led | 5 | 5 | 5 to 9 |
| Subcultural / scene | 4 | 4 | 10 to 13 |
| Spatial / architectural | 4 | 4 | 14 to 17 |
| Cross-cultural / non-Western | 4 | 4 | 18 to 21 |
| Material / medium | 4 | 4 | 22 to 25 |
| Brief-canon-engaging | 4 | 4 | 26 to 29 |
| Sensory / synesthetic | 3 | 3 | 30 to 32 |
| Domestic / ritual | 3 | 3 | 33 to 35 |
| Vernacular / found | 2 | 2 | 36 to 37 |
| Scientific / instrument (CAP 2) | 2 | 2 | 38 to 39 |
| **Total** | **40** | **40** | 0 to 39 |

- Scientific / instrument: 2 of 40 (5%). Cap held.
- Every pole equals its quota. Total is 40.
- Ban-list: no Swiss or Dutch graphic-design canon figure is named (the five practitioners are a cinematographer, two animators and two directors, working in Hong Kong, Germany, Canada, Bengal and Korea). No single-word style label. No framing names the brief's own category (an invoicing or SaaS landing page).
- Reach-beyond: 20 of 40 candidates draw on Malaysian, Chinese, Japanese, Indian, Korean or Hong Kong sources (idx 0, 1, 2, 3, 5, 8, 9, 10, 11, 13, 15, 16, 17, 18, 19, 20, 21, 33, 34, 36).
- Length: every framing is between 12 and 15 words (limit 6 to 15), verified by script.
- Style spread: the pool was not collapsed toward dark cinematic. It includes light and paper-based registers (idx 22, 23, 25, 36), period broadcast and video registers (idx 1 to 4), hand-drawn registers (idx 7, 8, 9) and interaction-led registers (idx 4, 29, 32).

### Bash ms-sample

```bash
python3 -c "import random,time,sys; n,k=int(sys.argv[1]),int(sys.argv[2]); s=int(time.time()*1000); print(f'SEED={s}'); print(f'PICKS={sorted(random.Random(s).sample(range(n),k))}')" 40 1
```

**ms-sample command:** `python3 -c "import random,time,sys; n,k=int(sys.argv[1]),int(sys.argv[2]); s=int(time.time()*1000); print(f'SEED={s}'); print(f'PICKS={sorted(random.Random(s).sample(range(n),k))}')" 40 1`
**stdout:**
```
SEED=1794798837238
PICKS=[37]
```

**resolved pick:** index 37 → vernacular / found pole → WhatsApp forwarded-message vernacular: grey bubbles, double ticks, voice notes, screenshots of screenshots
**user action:** continue (auto mode)
**final accepted:** WhatsApp forwarded-message vernacular: grey bubbles, double ticks, voice notes, screenshots of screenshots (vernacular / found)

The gate was run once. No resample, no override, no substitution.

## Framing locked

- **Pole:** vernacular / found
- **Framing (verbatim):** WhatsApp forwarded-message vernacular: grey bubbles, double ticks, voice notes, screenshots of screenshots
- **Pool index:** 37 of 0 to 39 (pool size after gate: 40)
- **Seed:** 1794798837238
- **Per-pole pool counts (for the pole-concentration audit):** period 5, practitioner 5, subcultural 4, spatial 4, cross-cultural 4, material 4, brief-canon 4, sensory 3, domestic 3, vernacular 2, scientific 2. Total 40.
- **Condition carried from the gate:** voice notes appear only as a visual; nothing depends on sound.

Justification: This lens earns its keep because it is the one register that is already on Jun Hao's screen at the moment that matters. The link reaches him inside WhatsApp, and WhatsApp is also where his client details, rate negotiations and "can you send the invoice again" requests actually live, so the page can open in the medium he has just left and stage the "before" with material he recognises without a word of explanation: forwarded bubbles, double ticks, a screenshot of a screenshot of last month's Word invoice. For a brief whose lever is presentation, the vernacular supplies a complete staging grammar, not a skin: messages arrive in time, so the story is paced like a cut sequence; a thread is a vertical, thumb-native narrative that fits 390 px with no adaptation; a typing indicator, a tick turning from one to two, a file landing in the thread are small precise motions whose timing he can judge the way he judges an edit; and the turn of the story, where the scattered thread resolves into one clean invoice and its PDF sent back as an attachment, gives the page the real product view the live page never shows. It is also sound-free by construction, since the vernacular itself renders voice notes as a visible waveform, which suits the owner's rule that captions and visual cues carry everything. The risk is plain and travels downstream: a chat mock-up is a familiar page device, so on its own this framing does not surpass a dark, cinematic, animated page. It must be treated as the narrative and motion logic (found, messy, time-based material that gets resolved), with cinematic finish, colour and type held at or above the live page per the owner's binding Notes, and with the Designer, Seeds and Constraint steps responsible for lifting the staging well beyond a row of bubbles.
