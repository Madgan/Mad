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

---

## Designer VS

### Conditioning (what every candidate was generated against)

- **Locked framing (verbatim):** WhatsApp forwarded-message vernacular: grey bubbles, double ticks, voice notes, screenshots of screenshots.
- **Recorded role of the framing:** narrative and motion logic. Found, messy, time-based material that resolves into one clean invoice and its PDF. Finish, colour and type stay at or above the dark, cinematic live page.
- **Owner's binding lever (inhabited.md, Notes):** presentation, meaning motion, narrative, staging and interaction, judged on a 390 px phone by a working videographer who reads motion craft instantly. Nothing may depend on sound.
- **How framing-fit was judged for a practitioner:** by how their way of working would stage and move this material in time, not by how their work looks. Within each discipline's roster, practitioners who think in sequence, cut, reveal or performance were preferred. Slot A is the strongest fit for the framing in that discipline. Slot B is the non-canon counter-weight drawn from the reach-into roster in designer-disciplines.md (under-represented, non-Western or contemporary-working).
- **Pool shape:** 10 disciplines x 2 slots = 20 candidates, indexed 0 to 19. Graphic design honours the Swiss/Dutch ban-list in both slots. Every candidate is a real person with a citable work.

### Candidate pool (20: 10 disciplines x 2 slots, post-gate)

| idx | discipline | slot | practitioner | era and place | signature work | verbalized fit note |
|---|---|---|---|---|---|---|
| 0 | graphic | fit | Kyle Cooper | b. 1962, United States, working | Main title sequence for *Se7en* (1995) | Film-title art direction made from found, handmade, damaged material (notebooks, scratched film, mismatched type) cut to a precise rhythm. That is the framing's own move: mess with timing. He would cut the thread like a title sequence and land on one clean card. Risk: his grit must stay in the "before" and not coat the invoice. |
| 1 | graphic | noncanon | Tadanori Yokoo | b. 1936, Japan, working | Poster *Made in Japan, Tadanori Yokoo, Having Reached a Climax at the Age of 29, I Was Dead* (1965) | Collage of found popular print (ads, postcards, stamps, rising sun) held together by flat, exact composition, and he also animated his collages in the 1960s. He treats vernacular scraps as the subject, not as texture. Tension: his density pushes against a 30 second read, which forces a strict order of reveal. |
| 2 | type | fit | Matthew Carter | b. 1937, United Kingdom and United States, working | Verdana (1996) | Designed type for the screen at message size, from the pixel up. A chat bubble is small text read in a hurry, which is his home ground, and he thinks about rhythm of text across a line. Tension: his voice is about letters at rest, so motion and staging would have to come from how text arrives, line by line. |
| 3 | type | noncanon | Ryoko Nishizuka | Japan, working (Adobe, Tokyo) | Source Han Sans (2014), the open pan-CJK family also released as Noto Sans CJK | The family she led is the default Chinese text on Android, so it is literally the letterform of Jun Hao's WhatsApp messages. Her discipline is making Chinese and Latin sit together evenly, which this bilingual page needs. Tension: same as Carter, the motion must come from text arriving in time. |
| 4 | industrial | fit | Naoto Fukasawa | b. 1956, Japan, working | INFOBAR mobile phone for au by KDDI (2003) | Designs from unthinking habit ("without thought"), and designed a phone. He would start from what the thumb already does in a chat thread and remove everything else, so the resolve into one invoice is his natural ending. Tension: his reduction could flatten the messy "before" that the framing needs. |
| 5 | industrial | noncanon | Oki Sato (Nendo) | b. 1977, Japan, working | *50 Manga Chairs* (2016) | (Replacement, see fitness rounds.) Fifty chairs that carry manga's motion lines, speech bubbles and effect marks as physical form, shown as a sequence. He turns the grammar of a popular reading medium, including the speech bubble, into staged objects with a small surprise in each. That is the framing translated one step sideways. |
| 6 | architecture | fit | Lina Bo Bardi | 1914 to 1992, Italy and Brazil | SESC Pompéia, São Paulo (1977 to 1986) | Kept a found factory and popular, everyday material and staged public life inside it, and her exhibition design let visitors walk a sequence of objects. She dignifies vernacular without cleaning it up. She would stage the thread as a place to walk through, ending in one clear room. Tension: architecture moves the visitor, not the object, so scroll becomes the walk. |
| 7 | architecture | noncanon | Wang Shu | b. 1963, China, working | Ningbo History Museum (2008) | Walls built from salvaged tiles and bricks of demolished villages: thousands of found fragments resolved into one calm mass. He describes buildings as routes to be walked like a handscroll. Fits "found mess becomes one record" exactly. Tension: slow and heavy by temperament against a 30 second visit. |
| 8 | fine art | fit | Christian Marclay | b. 1955, United States and Switzerland, working | *The Clock* (2010) | Thousands of found film fragments cut into one continuous 24 hour piece synchronised to real time, and earlier *Telephones* (1995), a single phone call built from many films. He is an editor of found material, which is the visitor's own job. Risk: his work often leans on sound; here every cut must read silently. |
| 9 | fine art | noncanon | Camille Henrot | b. 1978, France, working | *Grosse Fatigue* (2013) | A video staged entirely as desktop windows opening on top of each other at speed: screens inside screens, found images, piled and then ordered. That is "screenshots of screenshots" as a composed, timed sequence with high finish. Risk: its pace comes from a spoken track; the page must carry rhythm visually. |
| 10 | photography | fit | Daido Moriyama | b. 1938, Japan, working | *Shashin yo Sayonara* (Farewell Photography, 1972) | Rough, blurred, rephotographed pictures of posters, screens and scraps, sequenced in books. Generational loss (a copy of a copy) is his subject, which is what a forwarded screenshot is. Tension: his grain belongs only in the "before"; the invoice must come out sharp. |
| 11 | photography | noncanon | Dayanita Singh | b. 1961, India, working | *File Room* (2013) | Photographs of Indian paper archives, bundles and ledgers, and a practice built on editing and re-sequencing prints in movable structures. She knows both the paper mess and the act of ordering it, and she thinks as a book maker: what comes after what. Tension: quiet, still images against a brief that wants wow. |
| 12 | fashion | fit | Hussein Chalayan | b. 1970, Cyprus and United Kingdom, working | *Afterwords*, autumn/winter 2000 | A living room staged on a runway that the models turn into clothes and carry off, a table becoming a skirt. He stages transformation in real time as narrative, with engineering under it. Scattered household things resolve into one wearable object: the product story as performance. |
| 13 | fashion | noncanon | Issey Miyake | 1938 to 2022, Japan | A-POC, A Piece of Cloth (1998, with Dai Fujiwara) | (Replacement, see fitness rounds.) One continuous knitted tube from which the wearer cuts finished garments along marked lines, presented as a process, often animated. One long strip turning into a finished thing with a few cuts maps onto a thread turning into an invoice with a few taps. |
| 14 | film | fit | Wong Kar-wai | b. 1958, Hong Kong, working | *Chungking Express* (1994) | A film about people waiting on pagers, answering services and dated tins: messages, timestamps and missed replies as the drama, shot with step-printed motion against sharp stillness. The visitor knows this film as a peer reference. He would stage the thread as longing and the invoice as the reply that finally lands. |
| 15 | film | noncanon | Yasmin Ahmad | 1958 to 2009, Malaysia | *Sepet* (2004) | Malaysian director and advertising creative whose films mix Malay, Cantonese, Mandarin and English in ordinary speech, and whose festive television commercials tell a complete story in about a minute. Short-form persuasion through everyday talk, in the visitor's own country and languages. Tension: her warmth is carried by voices; here it must be carried by timing and text. |
| 16 | digital | fit | Ken Wong | Australia, working | *Florence* (2018, Mountains) | A phone-first interactive story told in vertical panels where conversation is played by fitting speech-bubble pieces together, and the pieces get simpler as the two people get closer. Chat bubbles as an interaction with meaning, built for a thumb, readable without sound. The closest existing practice to this framing on this device. |
| 17 | digital | noncanon | Olia Lialina | b. 1971, Russia and Germany, working | *My Boyfriend Came Back from the War* (1996) | A story told by browser frames that split again and again as the reader clicks, by an artist who also documents the vernacular web. Narrative carried by the interface's own behaviour, and frames inside frames. Tension: her deliberately low-fi surface against the finish this page needs. |
| 18 | craft | fit | Tintoy Chuo | Malaysia, working | *Peperangan Bintang* (Fusion Wayang Kulit, founded 2012, premiered 2013) | (Replacement, see fitness rounds.) A Malaysian character designer who restaged a mass-culture story as Kelantanese shadow play with master puppeteer Pak Dain. Found popular material, performed in time on one lit screen in a dark room, by a regional craft the visitor recognises. A screen, a lamp and a sequence are a staging system. |
| 19 | craft | noncanon | Swarna Chitrakar | West Bengal, India, working | Coronavirus pata scroll and song (2020) | A Bengal patua who paints vertical scrolls of current events and unrolls them frame by frame while narrating. A vertical scroll revealed in time with a pointing finger is the phone's own gesture. Risk: the tradition narrates in song; here the caption must do that work. |

### Designer fitness rounds

Test applied to every candidate, per designer-vs-protocol.md: "If this practitioner were the Designer persona for this brief + framing, would the result be coherently conditioned on the framing, or would the practitioner's voice fight the framing so hard the build becomes generic?" A voice that productively tensions against the framing passes. A discipline so far from the brief that the framing collapses fails. Because the owner's Notes are binding, "the framing collapses" includes a voice that gives no way to stage or move the material in time.

```
Round 1:
  0.  [graphic / fit]          Kyle Cooper → PASS (found material cut to rhythm; grit held to the "before")
  1.  [graphic / noncanon]     Tadanori Yokoo → PASS (vernacular collage with exact composition; density forces an order of reveal)
  2.  [type / fit]             Matthew Carter → PASS (message-size screen text; motion comes from text arriving)
  3.  [type / noncanon]        Ryoko Nishizuka → PASS (the Chinese letterform of the thread itself; same condition as 2)
  4.  [industrial / fit]       Naoto Fukasawa → PASS (thumb habit and a phone; reduction tensions with the mess, productively)
  5.  [industrial / noncanon]  Hella Jongerius → FAIL (her voice is colour and imperfect surface research; the owner named colour as not the lever, and she offers no sequence or reveal, so the build would fall back to a generic chat mock in nicer colours)
  6.  [architecture / fit]     Lina Bo Bardi → PASS (stages vernacular as a place walked in order)
  7.  [architecture / noncanon] Wang Shu → PASS (found fragments into one mass; route thinking)
  8.  [fine art / fit]         Christian Marclay → PASS (editor of found fragments; condition: silent cuts)
  9.  [fine art / noncanon]    Camille Henrot → PASS (screens within screens as timed sequence; condition: visual rhythm only)
  10. [photography / fit]      Daido Moriyama → PASS (copy-of-a-copy as subject; grain only in the "before")
  11. [photography / noncanon] Dayanita Singh → PASS (paper archive plus sequencing practice)
  12. [fashion / fit]          Hussein Chalayan → PASS (staged transformation in real time)
  13. [fashion / noncanon]     Rei Kawakubo → FAIL (her voice refuses legibility and resolution on principle; the framing's whole arc is mess resolving into one plain, readable invoice in 30 seconds, so her voice would fight the ending and the product view)
  14. [film / fit]             Wong Kar-wai → PASS (messages and timestamps as drama; smear against stillness)
  15. [film / noncanon]        Yasmin Ahmad → PASS (one-minute stories in mixed everyday speech; condition: carried by timing and text)
  16. [digital / fit]          Ken Wong → PASS (speech bubbles as phone interaction)
  17. [digital / noncanon]     Olia Lialina → PASS (interface behaviour as narrative; low-fi surface is a productive tension)
  18. [craft / fit]            Sōetsu Yanagi → FAIL (Mingei honours the anonymous everyday object, which suits "vernacular", but it is contemplation of a thing at rest; no time, cut or reveal, so the framing would collapse into a quiet still life)
  19. [craft / noncanon]       Swarna Chitrakar → PASS (vertical scroll revealed in time; condition: captions replace song)

Round 2 (replacements, same discipline and same slot):
  Replacement 5a:  [industrial / noncanon] Oki Sato (Nendo) → PASS (50 Manga Chairs: speech bubbles and motion lines as staged, sequenced objects)
  Replacement 13a: [fashion / noncanon]    Issey Miyake → PASS (A-POC: one continuous strip cut into a finished garment, shown as process)
  Replacement 18a: [craft / fit]           Tintoy Chuo → PASS (Fusion Wayang Kulit: found popular story performed in time on one lit screen)
```

Rounds used: 2 of a maximum 3. Three slots replaced once each; none needed a second replacement. All 20 PASS. The pool table above shows the replacements in place at idx 5, 13 and 18; the failed originals are preserved only in this log.

**Conditions that travel with a candidate if sampled:** idx 0 and 10, roughness belongs to the "before" only and the invoice is sharp. idx 8, 9, 15 and 19, rhythm and narration are visual, since nothing may depend on sound. idx 2 and 3, motion comes from text arriving in time. idx 17, low-fi surface is not carried into the finish.

### Self-check (ban-list and reach-beyond)

- **Graphic ban-list:** neither graphic candidate (Kyle Cooper, Tadanori Yokoo) is on the Swiss/Dutch list. No Pentagram or agency-celebrity designer anywhere in the pool. No placeholder: every row names a person and a citable work.
- **Slot counts:** 10 disciplines, each with exactly one fit and one noncanon. Total 20.
- **Women:** 7 of 20 (Nishizuka, Bo Bardi, Henrot, Singh, Ahmad, Lialina, Chitrakar).
- **Born or working outside Europe and North America:** 14 of 20 (Yokoo, Nishizuka, Fukasawa, Sato, Bo Bardi, Wang Shu, Moriyama, Singh, Chalayan, Miyake, Wong Kar-wai, Ahmad, Chuo, Chitrakar). Two are Malaysian (Ahmad, Chuo).
- **Contemporary-working:** 17 of 20. The three who are not (Bo Bardi, Miyake, Ahmad) are a Brazilian woman architect, a Japanese designer and a Malaysian woman director.
- **Mid-century Western men:** none. Western men in total: 3 of 20 (Cooper, Carter, Marclay), all in fit slots where they are the direct match for the framing.
- **Time and sequence bias, within the rosters:** 13 of 20 work in an explicitly time-based or sequenced form (idx 0, 5, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19). The pool was not collapsed to film: every discipline keeps both slots.

### Bash ms-sample

```bash
python3 -c "import random,time,sys; n,k=int(sys.argv[1]),int(sys.argv[2]); s=int(time.time()*1000); print(f'SEED={s}'); print(f'PICKS={sorted(random.Random(s).sample(range(n),k))}')" 20 1
```

**ms-sample command:** `python3 -c "import random,time,sys; n,k=int(sys.argv[1]),int(sys.argv[2]); s=int(time.time()*1000); print(f'SEED={s}'); print(f'PICKS={sorted(random.Random(s).sample(range(n),k))}')" 20 1`
**stdout:**
```
SEED=1794799205550
PICKS=[14]
```

**resolved pick:** index 14 → film / fit → *Wong Kar-wai*
**user action:** continue (auto mode)
**final accepted:** Wong Kar-wai (film + cinematic, Hong Kong)

The gate was run once, after the pool and fitness rounds above were already written to this file. No resample, no override, no adjustment, no substitution.

## Designer locked

- **Practitioner:** Wong Kar-wai (王家衛), b. 1958 in Shanghai, raised and working in Hong Kong. Film director and screenwriter.
- **Discipline and slot:** film + cinematic / fit.
- **Pool index:** 14 of 0 to 19 (pool size after gate: 20).
- **Seed:** 1794799205550
- **Signature work (the one representative work for the 7-anchor inspiration bank):** *Chungking Express* (重慶森林, 1994), written and directed by Wong Kar-wai, photographed by Christopher Doyle and Andrew Lau Wai-keung.
  - Why this work and not a later one: it is his film about messages. Its people live by pagers, an answering service with a spoken password ("love you for ten thousand years"), a letter left at a snack-bar counter, tins of pineapple bought for their 1 May expiry date, and a boarding pass drawn by hand on a napkin. Its voice-over gives time and distance in exact figures. The drama is waiting for a reply.
  - What the bank entry should describe (reference images cannot be downloaded in this environment, so the entry is a written description): the snack-bar shot in which one person stands still at the counter drinking coffee, sharp and slow, while the crowd passes in front as streaked, step-printed blur. Two speeds in one frame: the subject at rest and legible, the world as smear. Also the opening chase through Chungking Mansions, shot handheld and step-printed so that movement drags and colour bleeds between frames.
  - Source URLs for the bank entry: https://www.imdb.com/title/tt0109424/ and https://reverseshot.org/archive/entry/1152/chungking_express
- **Verification:** practitioner, film, year, the two credited cinematographers, the pineapple expiry date, the pager password and the step-printing technique were confirmed by web search on 2026-11-16.
- **Conditions carried into Step 12:**
  1. Smear, drag and colour bleed live in transitions and in the "before" only. Text and product UI at rest are sharp. (Same condition the framing gate recorded for the Doyle step-printing lens, which is this practitioner's own technique.)
  2. Nothing depends on sound. His films lean on voice-over and repeated songs; on this page that role goes to on-screen text and timing.
  3. The owner's Notes still override the persona: a trial button in the first screen, a real invoice and product view, no repetition, 30 seconds on a 390 px phone, full still state under reduced motion.
  4. No photographs or generated images of people. His look is translated into code-drawn light, type, UI and motion, not into film stills.

Justification: The draw landed on the practitioner whose own subject is the framing's subject. Wong Kar-wai's films of the 1990s are built from messages that arrive late, get missed, or wait to be answered, with times and dates stated to the minute, and *Chungking Express* is the clearest case: a pager, a password, an expiry date, a letter nobody opens. A WhatsApp thread of client details, voice notes and screenshots of old invoices is the same material thirty years on, so his voice does not have to be bent to carry the framing. More important for this brief, he supplies what the framing lacked and what the owner asked for: a way to stage and move it. His method gives the page two speeds in one frame (the world streaking past while one thing holds still and sharp), hard cuts between short self-contained episodes in place of scroll-fades, repetition of one small object until it means something (here the invoice number, the tick, the date), and a dark, saturated, neon-at-night finish that sits at or above the live page without colour becoming the effort. The mess of the thread can smear and pile up the way his crowds do, and the invoice can be the one still, legible thing in the frame, which is exactly the turn the framing's justification called for. He is also the right kind of authority for Jun Hao: a Hong Kong director every videographer in the Klang Valley has studied and tried to imitate, working in Cantonese and Mandarin, so borrowed craft from him reads as "made by someone who does my job" and any clumsy imitation will be caught at once, which keeps the build honest. The risks are stated in the conditions above: his mood is slow longing and this page has 30 seconds and a button to press, and his rhythm normally rides on music. The build therefore takes his cutting, his two-speed staging and his exactness about time, and leaves the languor and the soundtrack behind.
