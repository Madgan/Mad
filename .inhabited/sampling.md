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


---

## Constraint VS

### Conditioning (what every candidate was generated against)

Constraints are brief-conditioned, not framing-conditioned (sampling-protocol.md, §Constraint VS). None of the candidates below refers to the locked framing. Each is grounded in the problem as stated in inhabited.md:

- A phone-first (390 px) public home page for SIS, an invoicing and records SaaS for Malaysian freelance videographers, photographers and small studios. One self-contained HTML file, Chinese by default with an English toggle.
- The visitor opens a link from a peer, on a phone, between other things, and decides in about 30 seconds. He makes moving images for a living and judges motion craft instantly.
- The owner's binding Notes: the lever is presentation (motion, narrative, staging, interaction). The page must surpass a dark, cinematic, animated live page. Colour and type must be at least as good as the live page but are not where the effort goes.
- Known weaknesses of the live page that version 2 must fix: no trial button in the first screen; hero text on top of the render; no real view of the product or an invoice; repetition and length (about 10,500 px on a phone); a broken card.
- Version 1 (light amber, static sections, a small interactive invoice builder in the hero) was rejected as "nothing special".

Validity rules applied while generating. A candidate had to be a specific rule that a reviewer can check on the finished page without interpreting intent. A candidate was not allowed to contradict the binding Notes or the guardrails: none forbids motion, none forces a light theme or discards the cinematic register, none requires stock photography or generated people, none requires sound, none adds a fact that is not in context/facts.md. Every candidate is compatible with a complete still state under `prefers-reduced-motion` and with WCAG AA.

Reference viewport for all tests: 390 x 844 CSS px, portrait.

### Candidate pool (20 generated, brief-conditioned)

| idx | type | constraint (the rule) | how a reviewer tests it | brief-fitness reason | verdict |
|---|---|---|---|---|---|
| 0 | motion | One mover at a time. At any instant no more than one element, or one rigid group moving as a single body, is in motion on screen. Ordinary scrolling of the page under the finger is not counted. | Screen-record at 60 fps while scrolling and tapping; step through frames. Any frame pair in which two independently moving things both change is a fail. | A videographer reads simultaneous movement as noise and a single directed move as authorship. It rules out stagger-everything and parallax-everywhere, the two cheapest motion habits, and forces real choreography. Fully compatible with a still state. | keep |
| 1 | motion | No cross-fades. Opacity never animates anywhere on the page: no CSS transition or animation on opacity, and no JavaScript, canvas or WebGL alpha ramp over time. An element fading to or from the background colour counts as the same thing. Everything is either there or not there; every change of state happens as a cut or through movement, scale, clipping or masking. A fixed, unchanging transparency value is allowed. | Step through a 60 fps recording: any element that appears or disappears through intermediate transparency over two or more frames is a fail. Code check: no `opacity` in any transition or keyframe, no time-varying alpha in scripts. | The fade-up reveal is the most recognisable generic web motion, and the live page leans on it. Banning the dissolve leaves the vocabulary of an edit: cuts, wipes, slides, masks. That is the visitor's own grammar, so he can judge the timing as he judges a cut. It removes nothing cinematic and it makes the reduced-motion state a clean cut instead of a slow fade. | keep |
| 2 | motion | Idle stillness. Nothing moves on its own clock. All motion finishes within 5 seconds of the page load or the visitor input (scroll, tap, drag) that started it, after which every pixel is still until the next input. No loops. | Load the page, wait 5 seconds, then record 10 seconds without touching it: any changed pixel is a fail. Repeat after each interaction. | The live page's motion is ambient and decorative, which is exactly what this visitor scrolls past. Making every movement an answer to something he did turns motion into interaction. The 5 second limit matches WCAG 2.2.2, and a phone held in a car is not animating a background for nobody. | keep |
| 3 | motion | Scroll-scrubbed both ways. Every animation that scrolling starts is driven by scroll position, not by a timer: stop scrolling and it stops mid-move, scroll back and it runs backwards to its first frame. No scroll-triggered animation plays on its own clock. Native scrolling is never intercepted. | Scroll slowly through each sequence, stop halfway (motion must freeze), reverse (motion must reverse). Any sequence that completes by itself once triggered is a fail. | He shuttles footage back and forth all day; a page that scrubs under his thumb is speaking his language and lets him inspect the craft frame by frame. It also removes the failure where content does not exist until an entrance animation has fired. | keep |
| 4 | motion | Nothing enters from nowhere. Any element that animates into existence or into place must come out of the bounding box of an element already visible (it unfolds, splits, slides out or grows from it). Nothing animates in from a viewport edge or from empty space. Content brought into view by ordinary scrolling is not counted. | For each element that appears after first paint, pause on its first visible frame: its box must overlap the box of an element that was already on screen. | Forces continuity of objects from top to bottom: the scattered details, the record and the invoice have to be the same things transforming, which is the product's story ("the same record continues through every step"). It is the opposite of sections that each fade in their own unrelated props. | keep |
| 5 | sequencing | The 30 second cut. Within the first two viewport heights (the first 1,688 px of the page at 390 x 844) the visitor has been shown all four of: what SIS does in one sentence, a real invoice view, both prices with the 7-day trial, and a trial button. | Scroll to y = 844 and screenshot both screens: tick off the sentence, the invoice, "RM 199", "RM 399", the trial wording, the button. Any missing item is a fail. | The brief's single most important moment is a 30 second decision. This turns it into a measurable edit: the whole argument is in the first two screens and the rest of the page is supporting detail. It fixes the live page's missing first-screen button and missing invoice in one rule. | keep |
| 6 | sequencing | Page length cap. From the top of the page to the bottom of the footer is at most five viewport heights: 4,220 px at 390 x 844, in both languages. | Read `document.documentElement.scrollHeight` at 390 x 844 in Chinese and in English. | The live page is about 10,500 px on a phone; a hard cap removes the repetition by force. | drop: it fixes length but says nothing about how the content is presented, and candidate 5 secures the same benefit from the visitor's side. It could also force pricing detail to be cut for reasons that have nothing to do with craft. |
| 7 | sequencing | No eyebrow labels, and at most three lines of headline-size text on the entire page. | Count small uppercase or tinted label lines above headings (must be zero) and count lines set at the largest two type sizes (must be three or fewer). | The live page repeats one unit eleven times: tinted eyebrow, big headline, grey paragraph. Removing the unit forces the narrative to be carried by staging. | drop: a real improvement, but narrower than candidate 12, which removes the same unit by limiting words on screen and reaches further. |
| 8 | sequencing | Each feature is named once. Outside the plan lists in pricing, no feature or benefit is stated in more than one place. | List every feature mention with its position; any feature with two positions outside pricing is a fail. | Answers the audit finding that AI reading old files appears four times and bring-your-own-AI twice. | drop: this is a known weakness that the build has to fix whatever is sampled. As a binding constraint it adds nothing new and does not touch presentation. |
| 9 | staging | The invoice never leaves the screen. At every scroll position from first paint to the last pixel of the page, part of the same invoice document is visible, at least 96 px wide and 96 px tall. | Scroll in 100 px steps from top to bottom, screenshot each step: any step with no recognisable part of the invoice is a fail. | The live page never shows an invoice at all. This makes the invoice the one persistent subject, so everything else (clients, rates, reports, AI import, pricing) has to be staged around it, onto it or out of it. It is a strong staging rule that a phone page almost never has. | keep |
| 10 | staging | Every claim sits with its proof. Each statement about what the product does is in the same viewport as the product screen that shows it. No claim is carried by text alone or by text and an icon. | For each product statement, screenshot the viewport where it is fully readable: a product screen showing that function must be in the same screenshot. | Directly answers "no real view of the product anywhere; only abstract 3D renders". | drop: judging what counts as a claim and which screen proves it needs interpretation, so it is less cleanly testable than candidate 9, which secures a real product view at all times. |
| 11 | staging | No text on top of imagery. Every line of text sits on a flat, unmoving fill. No picture, gradient, canvas or animated layer lies beneath any text box. | Inspect what is painted behind each text box; any non-flat or moving pixel is a fail. | Answers the audit finding that the live hero text sits on the render and is hard to read. | drop: legibility of the hero is a known weakness that must be fixed regardless and is already covered by the WCAG AA requirement. As a constraint it is hygiene and does not generate presentation. |
| 12 | staging | Fifty characters on screen. At any scroll position, a single viewport shows at most 50 Chinese characters, or 30 English words, of page copy. Text inside product screens, text on the invoice document, the sample-data label and the legal footer are not counted. | Screenshot in 200 px steps in each language and count the page copy in each screenshot. | The brief says success is that he "understands what the tool does without reading paragraphs". A hard word budget per screen makes showing the only option, which pushes the work into staging and motion, where the owner wants it. It also ends the eyebrow, headline, paragraph unit. | keep |
| 13 | staging | No card containers. The only bounded rectangles on the page (bordered or filled boxes) are product screens, the invoice document and buttons. | Inspect for bordered or filled containers; any that is not one of the three allowed kinds is a fail. | The live page is a stack of dark rounded panels and an eight-card grid; removing them removes its skeleton. | drop: it acts on the skin of the layout more than on presentation, and on a narrow phone the two plans in pricing have a legitimate need for a boundary. The benefit is smaller than the staging rules kept. |
| 14 | interaction | Native scroll is never intercepted. No listener cancels wheel or touch scrolling, there is no mandatory scroll snapping, and the page always moves one for one with the finger. | Code check for `preventDefault` on wheel or touch events and for `scroll-snap-type: mandatory`; drag test on a phone. | A tired visitor on a phone abandons a page that fights his thumb. | drop: this is a guard that has to hold in any case. It prevents a failure but produces no presentation idea. It is written into candidate 3 where it matters. |
| 15 | interaction | The visitor makes the invoice. Within the first two viewport heights there is an interaction in which the visitor's own taps (pick a client, pick a rate) produce the invoice, and it completes in three taps or fewer. | Count the taps from first touch to a complete invoice; check the control's position. | "Pick a client, pick a rate, done" is the purpose sentence of the brief. | drop: version 1 already had exactly this in its first screen and the owner called it nothing special. It is a feature decision that may well return in the build, but as the binding constraint it would steer version 2 back toward version 1. |
| 16 | interaction | A trial button in every viewport. At every scroll position a "start free trial" control is on screen, in the lower half of the display. | Scroll in 200 px steps; any screenshot without the control in its lower half is a fail. | Answers the audit finding that the first sign-up button is at the very bottom. | drop: the first-screen button is a known weakness that must be fixed regardless, and this rule would most likely be met by a stock sticky bar, which adds nothing to presentation. |
| 17 | visual | Colour only inside the product. Everything that is not a product screen, the invoice or the trial button is neutral, with zero chroma. | Sample pixels outside the three allowed areas: any pixel with chroma is a fail. | The product becomes the only lit, coloured thing in a dark frame, which is a staging idea carried by colour. | drop: the Notes say colour is not the lever and must be at least as good as the live page. A page that is grey everywhere outside the product risks reading as less rich than the live page, on the one axis where the owner already prefers the live page. |
| 18 | visual | No icons. No pictogram or icon set appears anywhere outside product screens. Every idea is shown as words or as the real product screen. | Inspect for icon glyphs and decorative SVG pictograms outside product screens. | The live page's feature grid is eight small icons in tinted squares, the standard filler where a product view should be. | drop: correct but narrow. It removes one filler device and leaves presentation otherwise untouched. |
| 19 | visual | One typeface family and at most three type sizes outside product screens. | Read computed font family and size for every text node outside product screens. | Limiting size steps forces hierarchy to come from position, timing and scale of objects, not from a type ramp. | drop: the Notes say type is not where the effort goes, product screens need their own small sizes, and this rule would pre-empt the Typography VS step for little gain in presentation. |

### Brief-fitness filter (20 to 8)

Test applied to every candidate: (a) can a reviewer check it on the finished page without interpreting intent; (b) does it act on the lever the owner named, presentation, meaning motion, narrative, staging or interaction; (c) does it create productive tension, or is it only hygiene that the build must deliver whatever is sampled; (d) can it be met at 390 px, in two languages, in one HTML file, with a complete still state under reduced motion; (e) does it leave room to surpass the live page instead of capping impressiveness. The verbalized reason for each candidate is in the last two columns of the table above.

Result: 8 kept, 12 dropped. Kept: 0, 1, 2, 3, 4, 5, 9, 12. Five of the eight are motion rules, one is a sequencing rule and two are staging rules, which reflects the owner's direction that presentation is the lever. The dropped twelve fall into three groups: hygiene the build owes anyway (8, 11, 14, 16), rules that act on colour, type or skin where the owner said the effort does not go (13, 17, 18, 19), and rules that are weaker versions of a kept rule or that steer back to version 1 (6, 7, 10, 15).

### Filtered pool (8, indexed for the gate)

| pool idx | from candidate | type | constraint |
|---|---|---|---|
| 0 | 0 | motion | One mover at a time. At any instant no more than one element, or one rigid group moving as a single body, is in motion on screen. Ordinary scrolling of the page under the finger is not counted. |
| 1 | 1 | motion | No cross-fades. Opacity never animates anywhere on the page: no CSS transition or animation on opacity, and no JavaScript, canvas or WebGL alpha ramp over time. An element fading to or from the background colour counts as the same thing. Everything is either there or not there; every change of state happens as a cut or through movement, scale, clipping or masking. A fixed, unchanging transparency value is allowed. |
| 2 | 2 | motion | Idle stillness. Nothing moves on its own clock. All motion finishes within 5 seconds of the page load or the visitor input (scroll, tap, drag) that started it, after which every pixel is still until the next input. No loops. |
| 3 | 3 | motion | Scroll-scrubbed both ways. Every animation that scrolling starts is driven by scroll position, not by a timer: stop scrolling and it stops mid-move, scroll back and it runs backwards to its first frame. No scroll-triggered animation plays on its own clock. Native scrolling is never intercepted. |
| 4 | 4 | motion | Nothing enters from nowhere. Any element that animates into existence or into place must come out of the bounding box of an element already visible (it unfolds, splits, slides out or grows from it). Nothing animates in from a viewport edge or from empty space. Content brought into view by ordinary scrolling is not counted. |
| 5 | 5 | sequencing | The 30 second cut. Within the first two viewport heights (the first 1,688 px of the page at 390 x 844) the visitor has been shown all four of: what SIS does in one sentence, a real invoice view, both prices with the 7-day trial, and a trial button. |
| 6 | 9 | staging | The invoice never leaves the screen. At every scroll position from first paint to the last pixel of the page, part of the same invoice document is visible, at least 96 px wide and 96 px tall. |
| 7 | 12 | staging | Fifty characters on screen. At any scroll position, a single viewport shows at most 50 Chinese characters, or 30 English words, of page copy. Text inside product screens, text on the invoice document, the sample-data label and the legal footer are not counted. |

### One pick or two

The protocol samples 1 constraint, or 2 "if the framing is otherwise generic". The locked framing (WhatsApp forwarded-message vernacular: grey bubbles, double ticks, voice notes, screenshots of screenshots) is not generic: it is a named, concrete vernacular with specific artefacts, drawn from the vernacular / found pole of a 40-candidate pool. Its justification records that a chat mock-up is a familiar page device, but familiar is not the same as generic, and that risk is assigned to the Designer, Seeds and Constraint steps together, not to a doubled constraint. The condition for sampling 2 does not apply, so K = 1. This was decided before the gate was run.

### Bash ms-sample

```bash
python3 -c "import random,time,sys; n,k=int(sys.argv[1]),int(sys.argv[2]); s=int(time.time()*1000); print(f'SEED={s}'); print(f'PICKS={sorted(random.Random(s).sample(range(n),k))}')" 8 1
```

**ms-sample command:** `python3 -c "import random,time,sys; n,k=int(sys.argv[1]),int(sys.argv[2]); s=int(time.time()*1000); print(f'SEED={s}'); print(f'PICKS={sorted(random.Random(s).sample(range(n),k))}')" 8 1`
**stdout:**
```
SEED=1794799080271
PICKS=[1]
```

**resolved pick:** pool index 1 → candidate 1 (motion) → No cross-fades
**user action:** continue (auto mode)
**final accepted:** No cross-fades. Opacity never animates anywhere on the page: no CSS transition or animation on opacity, and no JavaScript, canvas or WebGL alpha ramp over time. An element fading to or from the background colour counts as the same thing. Everything is either there or not there; every change of state happens as a cut or through movement, scale, clipping or masking. A fixed, unchanging transparency value is allowed.

The gate was run once. No resample, no override, no adjustment, no substitution. Replay check: `random.Random(1794799080271).sample(range(8), 1)` returns `[1]`.

## Constraint locked

- **Constraint (verbatim, binding for the build):** No cross-fades. Opacity never animates anywhere on the page: no CSS transition or animation on opacity, and no JavaScript, canvas or WebGL alpha ramp over time. An element fading to or from the background colour counts as the same thing. Everything is either there or not there; every change of state happens as a cut or through movement, scale, clipping or masking. A fixed, unchanging transparency value is allowed.
- **Type:** motion
- **Pool index:** 1 of 0 to 7 (filtered pool size 8, from 20 generated)
- **Seed:** 1794799080271
- **Picks sampled:** 1 (the condition for 2 did not apply)
- **How the Critic tests it:**
  1. Record the page at 60 fps on a 390 x 844 viewport through a full scroll down and up, the language toggle, and every tap interaction. Step through the recording. Any element that appears, disappears or changes through intermediate transparency across two or more frames is a fail.
  2. Code check: no `opacity` (and no alpha channel of a colour) in any CSS `transition`, `animation` or `@keyframes`; no script that changes `opacity`, `globalAlpha`, a colour's alpha or a shader's alpha uniform over time; no element whose colour interpolates to or from the colour behind it as a way of appearing or leaving.
  3. Hover, focus, pressed and disabled states are included: they change by cut or by shape, never by a fade.
  4. The `prefers-reduced-motion` state is included: it is reached by a cut to the finished still, not by a slow fade.
- **What stays allowed:** fixed transparency that does not change (a translucent border or overlay at rest); cuts; slides; scale; wipes made with `clip-path` or masks; reveal by an edge travelling across an element; changes of position, size and shape. Motion itself is not restricted in amount.

Justification: This constraint earns its place because it acts exactly where the owner pointed, on how the page moves, and it does so in the visitor's own professional language. Jun Hao edits footage: a cut, a wipe, a slide and a mask are decisions he makes all day, and a dissolve is the transition editors learn to distrust because it hides the lack of a decision. On the web the equivalent is the fade-up reveal, the single most common piece of generic motion, which the live page uses throughout and which claude_anti_defaults.md lists first. Taking opacity away does not reduce the amount of motion or the cinematic register that the Notes protect; it changes the vocabulary to one where every appearance has to be authored as a cut on a beat or as a physical move with a start, a direction and an end, which is where "good motion earns respect" from this visitor. It is also kind to the accessibility requirements: a hard cut to a finished frame is the natural still state under reduced motion, and nothing on the page can sit half-visible and unreadable while an entrance animation runs. The tension it creates is real and is meant to be productive. Designers reach for a fade to soften almost every state change (menus, the language toggle, hover states, the arrival of a product screen), and each of those now needs a deliberate alternative. The Designer persona may not soften this rule to taste; the Critic records each place where it forced a deviation from habit.


---

## Competitor VS

Step 8, run 2026-11-16. Protocol: `competitor-vs-protocol.md`. Pool is conditioned on the brief (product category, market, visitor), not on the sampled framing.

### Conditioning (what every candidate was generated against)

- **Product category**: invoicing and records software for freelance videographers, photographers and small studios. One public home page.
- **Market**: Malaysia. Prices in RM per year. The visitor reaches the page from a WhatsApp or Instagram link, on a 390 px phone.
- **Visitor**: Jun Hao, 31, Klang Valley videographer. Today his invoice is last month's Word file. His real comparison set is whatever he has seen in creator videos, what an accountant friend names, what a Google search for "invoice" returns, and the free tool he could use tonight.
- **Owner's lever**: presentation (motion, narrative, staging, interaction). So each candidate's note says how its home page stages the hero, whether it moves, and how it shows the product.

### How the candidates were checked

Every candidate was checked with WebSearch on 2026-11-16 to confirm that it exists and how it describes itself today. Other sites cannot be loaded or captured from this environment (network policy), so nothing below comes from looking at a rendered page. Where a detail of a home page comes from prior knowledge and was not confirmed by a search result today, the note says "not verified today". No product in the pool is invented. Source URLs are listed at the end of this section.

### Candidate pool (20 = 10 positioning categories x 2)

| idx | category | competitor | descriptor | verbalized note: positioning, how its home page presents, verification |
|---|---|---|---|---|
| 0 | canon incumbent | HoneyBook | clientflow platform for independent businesses | The name every photographer and videographer creator video mentions. Describes itself as an AI-powered business management platform for independent service professionals; directories use "clientflow". Home page from prior knowledge: light and warm, product UI cards floating in the hero, short looping UI clips per feature, heavy testimonials (not verified today). Sign-up is limited to a few countries (its own blog asks if the reader is in the U.S., Canada, UK or Australia), so he cannot buy it, but it sets what "software for creatives" looks like. Exists: confirmed. |
| 1 | canon incumbent | Studio Ninja | photographer CRM, invoices, automatic booking | The photography-specific incumbent. Its home page title in search is "AUTOMATICALLY BOOK CLIENTS"; features are online invoicing, card payments, automated invoice reminders, workflows. Home page from prior knowledge: bright, friendly, screenshot-led with award badges and a product video (not verified today). Exists: confirmed. |
| 2 | disruptor / oppositional | Maroo | free-core rival to photo CRMs | Defines itself by what it refuses: publishes "Maroo vs Studio Ninja", "Maroo vs Táve", "Maroo vs Pixieset" pages and says most features are free. Has a dedicated page titled "The business software for Videographers" (contracts, invoices, retainers, paying second shooters and editors). Hero staging not verified today. Exists: confirmed. |
| 3 | disruptor / oppositional | Invoice Ninja | open-source, self-hostable invoicing | Opposes subscription lock-in: open source, self-host on your own server, free forever for up to 5 clients, and its own page prints a price comparison (Pro USD 140 a year against USD 450 to 1,200 a year for rivals). Spec and comparison-table presentation; product screenshots, little motion (motion not verified today). Exists: confirmed. |
| 4 | premium / scarcity | VSCO Workspace (formerly Táve) | photographer CRM inside VSCO membership | Táve's Studio Manager was bought by VSCO in May 2025 and relaunched as Workspace in August 2025; page headline "Grow your business, not your to-do list". One competitor's blog says that since June 23 the full product is no longer sold standalone to new customers (single source, not verified). Access through a membership is the nearest thing to scarcity in this category. VSCO's photographic, editorial staging is from prior knowledge (not verified today). Exists: confirmed. |
| 5 | premium / scarcity | Sprout Studio | top-priced all-in-one studio suite | Studio management plus galleries, album proofing and sales in one; the top tier is listed at USD 69 to 89 a month, the highest in the category. Flag: it is price-positioned, not scarcity-positioned; kept as the best available second entry for this cell. Hero staging not verified today. Exists: confirmed. |
| 6 | functional / clinical | Bukku | Malaysian cloud accounting, LHDN e-invoice | The name a Malaysian accountant friend gives. Official hero headline: "A Cloud Accounting Software for Malaysia, Finally." Subhead lists invoicing, inventory, SST and LHDN e-Invoice compliance; badge "LHDN MyInvois ready"; 30-day free trial with no credit card; from RM 35 a month plus 8% SST; "120,000+ Malaysian businesses"; invoicing "free forever". Compliance and numbers are the hero. Exists: confirmed, home page copy confirmed. |
| 7 | functional / clinical | Zoho Invoice | forever-free, feature-list invoicing | Zoho describes it as forever-free invoicing software for small businesses; every guide to invoicing in Malaysia lists it. Presentation is a feature inventory with app screenshots, in the Zoho house style (staging not verified today). Exists: confirmed. |
| 8 | lifestyle / aspirational | Pixieset Studio Manager | photographer suite, galleries first | Photographers know Pixieset for client galleries; Studio Manager adds invoices, contracts, bookings and a mobile app. Sells belonging to a photographer brand: full-bleed client photography, soft neutral palette, product UI second (staging from prior knowledge, not verified today). Exists: confirmed. |
| 9 | lifestyle / aspirational | Bloom | design-led CRM for creative pros | Its own home page: an all-in-one platform for creative pros (client management, instant booking, contracts, invoicing, payments, scheduling, image delivery). A 2026 review calls it the best-looking client-management platform built for creatives. Identity is "the good-looking one". Also runs a free invoice generator for photographers. Motion not verified today. Exists: confirmed. |
| 10 | legacy / unmodified traditional | SQL Account | Malaysian desktop accounting incumbent | E Stream MSC's desktop accounting package, sold through resellers and webinars; cites over 270,000 businesses. Site is dense, banner-driven, promotion-led (a free e-invoice module to 2028 with a new licence), with many text links and no product story (visual density from prior knowledge, not verified today). The package accountants were trained on. Exists: confirmed. |
| 11 | legacy / unmodified traditional | Express Invoice (NCH Software) | downloadable Windows invoicing program | A downloadable program with a "free version for fewer than 5 staff"; the official page still lists Windows XP, Vista, 7, 8 among requirements. Page is a product box shot, a download button and bullet lists, unchanged in style for well over a decade. Exists: confirmed. |
| 12 | adjacent-category encroacher | Canva invoice maker | design tool with invoice templates | A design tool moving into invoicing: free invoice maker, industry templates, drag and drop, a shareable link and a payment link. For a visual freelancer this is the real step up from Word. Presentation is a template gallery: rows of finished invoice thumbnails. Exists: confirmed. |
| 13 | adjacent-category encroacher | HitPay | payments platform with free invoicing | A South-East Asian payments company whose invoices carry a pay button (FPX, DuitNow, cards, e-wallets) with no monthly fee in Malaysia. Brings payment-gateway conventions: fee tables, payment-method logo rows, checkout mockups. Exists: confirmed. |
| 14 | indie / DIY / long-tail | Light Blue | UK photographers-only business software | Founded 2008, small UK team; "built by photographers, for photographers, to run photography businesses (and nothing else)". Plain, text-forward site, screenshots of a desktop-style app, personal support as the pitch. Known inside the UK wedding and portrait scene, not outside it. Exists: confirmed. |
| 15 | indie / DIY / long-tail | Niagawan | Malay-first accounting and POS | A Malaysian company founded 2016; home page calls it an all-in-one POS and accounting system for small and medium businesses in Malaysia; e-Invoice built in; listed at RM 497 a year (annual RM pricing, like SIS). Flag: regional long-tail, not a one-person operation (it reports 40,000+ businesses); kept as the best studiable entry for this cell, see fitness rounds. Hero staging not verified today. Exists: confirmed. |
| 16 | international / non-Western | Paper.id | Indonesian invoicing plus payments | Indonesia's invoicing platform for small businesses (UMKM): free tier, 30+ payment methods, digital stamp duty (e-Meterai), 600,000+ business owners reported in 2025. Bahasa Indonesia is readable to a Malay speaker. Indonesian SaaS conventions: illustration, mascot-like friendliness, WhatsApp contact (staging not verified today). Exists: confirmed. |
| 17 | international / non-Western | Refrens | Indian freelancer invoicing, Malaysia pages | An Indian invoicing tool that publishes Malaysia-specific pages (an en-my free invoice generator, "Contoh Invoice" samples) and ranks for "top invoicing software in Malaysia". Presentation is SEO-first: long pages, template samples, generator embedded in the page (staging not verified today). Exists: confirmed. |
| 18 | aesthetic anti-pole | MyInvois Portal (LHDN) | government e-invoice portal, free | The tax authority's own free portal: log in with MyTax credentials, key in an invoice by form or upload a spreadsheet. Guides say that for freelancers with simple billing the free portal "should work fine". Government form UI, no marketing, no persuasion at all. Studied for contrast: what an invoice tool looks like when nobody is selling it. Exists: confirmed. |
| 19 | aesthetic anti-pole | Invoice-Generator.com | the home page is the form | The page a search for "invoice" returns. Calls itself the original free invoice maker, trusted by over 4 million businesses; no sign-up; edit labels, add a logo, change currency, adjust line items, download a PDF. There is no hero: the first screen is a blank invoice you type into. Studied for contrast: zero staging, the product as the entire page. Exists: confirmed, behaviour confirmed. |

Quota check: 2 per category, 20 total. Cells 8, 9 and 10 of the protocol (indie, international, anti-pole) hold a UK scene-only tool, a Malay-first regional tool, an Indonesian tool, an Indian tool, a government portal and a bare utility; none is a Western mid-tier default.

### Competitor fitness rounds

Test applied to each: would this visitor actively compare it before deciding, and would studying its conventions inform a real design decision (to borrow or to diverge)? All replacements below were made before the sample was drawn.

```
Round 1:
  0.  [canon incumbent] "HoneyBook" → PASS (not sold in Malaysia, but it is the reference point in the creator content he watches; it sets the convention)
  1.  [canon incumbent] "Studio Ninja" → PASS
  2.  [disruptor] "Wave" → FAIL (general small-business accounting with no position against the creative tools; from prior knowledge it no longer takes new businesses outside North America, not verified today, so he cannot weigh it and it rejects nothing in this category)
      Replacement 2a: [disruptor] "Maroo" → PASS (built on naming and rejecting Táve, Studio Ninja and Pixieset; has a videographer page)
  3.  [disruptor] "Invoice Ninja" → PASS
  4.  [premium] "VSCO Workspace (formerly Táve)" → PASS
  5.  [premium] "Sprout Studio" → PASS (flag: price-positioned, not scarcity; no true scarcity player exists in this category)
  6.  [functional] "Bukku" → PASS
  7.  [functional] "Zoho Invoice" → PASS
  8.  [lifestyle] "Pixieset Studio Manager" → PASS
  9.  [lifestyle] "Bloom" → PASS
  10. [legacy] "SQL Account" → PASS
  11. [legacy] "Express Invoice (NCH Software)" → PASS
  12. [adjacent] "Canva invoice maker" → PASS
  13. [adjacent] "StudioBinder" → FAIL (production management: call sheets, shot lists, schedules; from prior knowledge it does not issue client invoices, not verified today; an adjacent tool he may already use, not a rival for the invoicing decision)
      Replacement 13a: [adjacent] "HitPay" → PASS (payments company encroaching with free invoices and Malaysian payment rails)
  14. [indie] "Light Blue" → PASS
  15. [indie] "Invois" → FAIL (a Malaysian freelancer invoice app that is a direct rival on paper, but it could be confirmed only through one third-party directory listing; no official page was found, so its conventions cannot be studied and cannot inform a design decision)
      Replacement 15a: [indie] "Niagawan" → PASS (flag: regional long-tail rather than one-person; Malay-first, annual RM pricing, studiable)
  16. [international] "Paper.id" → PASS
  17. [international] "Misoca" → FAIL (Yayoi's Japanese freelancer invoice service is real and well positioned, but Japanese-only with no presence in Malaysia; it would never enter his comparison set)
      Replacement 17a: [international] "Refrens" → PASS (Indian tool that publishes Malaysia pages and ranks in Malaysian searches)
  18. [anti-pole] "MyInvois Portal (LHDN)" → PASS
  19. [anti-pole] "Invoice-Generator.com" → PASS

Round 2: all four replacements PASS. 20 passing, 2 per category. No category needed a second replacement.
```

### Bash ms-sample

**ms-sample command:** `python3 -c "import random,time,sys; n,k=int(sys.argv[1]),int(sys.argv[2]); s=int(time.time()*1000); print(f'SEED={s}'); print(f'PICKS={sorted(random.Random(s).sample(range(n),k))}')" 20 2`

**stdout:**
```
SEED=1794799137895
PICKS=[6, 19]
```

**resolved picks:** index 6 → functional / clinical → *Bukku*; index 19 → aesthetic anti-pole → *Invoice-Generator.com*
**user action:** continue (auto mode)
**final accepted:** Bukku (functional / clinical) and Invoice-Generator.com (aesthetic anti-pole)

No re-roll, no substitution. The gate was run once.

### Justification

**Bukku.** It carries the conventions of Malaysian business software as a Malaysian buyer meets them: the country named in the headline, a compliance badge, a trial offer with its terms in the first screen, RM prices, a user count, and the product shown as software, not as atmosphere. These are the expectations the visitor brings from anything local an accountant has pointed him to: say what it is, say what it costs in RM, let me try it. The live SIS page fails several of them (no trial button in the first screen, no view of the product). Studying Bukku is productive in two directions. It tells us which plain, local, trust-building moves are table-stakes and must be in the first screen. And it marks the register SIS must leave: Bukku is built for bookkeeping and for accountants, it is static and inventory-like, and it gives a videographer no reason to feel it was made by someone who does his job.

**Invoice-Generator.com.** It is the thing he would actually use tonight instead of SIS: free, no account, the invoice is already on screen, type and download. It sets the hardest expectation in the category, which is immediacy: an invoice tool should show an invoice, at once, and let you touch it. The live SIS page never shows an invoice at all. As the aesthetic anti-pole it has no staging, no motion and no story, so it isolates what staging is for. Everything it does well is the object (the invoice sheet and its anatomy) and the absence of friction. Everything it lacks is memory: every invoice starts blank and every field is typed again. That gap is exactly the SIS pitch (save once, then pick a client, pick a rate, done), and it is a pitch that can only be made by showing change over time, which is the owner's lever.

### Converge / diverge judgment tables

Each row is a design element that will exist in the build. Verdict is `borrow` or `diverge` only. Build locations are the planned hooks for version 2; the Designer must use these names (or record the rename in `borrowings_v1.md`) so the Critic can check each borrow. Elements not in the build (search, breadcrumbs, left rail) are omitted. These tables are to be copied into `borrowings_v1.md` under "Competitor judgment tables" at Step 12.

Presentation rows (hero staging, motion, how the product is shown, narrative, interaction) come first because presentation is the owner's lever for this version.

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

### Sources (WebSearch, 2026-11-16)

- Bukku: https://bukku.my/ , https://bukku.my/bukku-for-smes , https://bukku.my/i/rms , https://bukku.my/free-e-invoice-software-malaysia-lhdn-myinvois-peppol-network-cn , https://makerstack.co/reviews/bukku-review/
- Invoice-Generator.com: https://invoice-generator.com/
- HoneyBook: https://www.honeybook.com/ai-information , https://www.honeybook.com/blog/honeybook-vs-tave
- Studio Ninja: https://studioninja.co , https://www.capterra.com/p/143855/Studio-Ninja
- Maroo: https://www.maroo.us/videographers , https://www.maroo.us/blogs/maroo-vs-tave , https://www.maroo.us/blogs/maroo-vs-studio-ninja
- Invoice Ninja: https://invoiceninja.com/?p=849 , https://openalternative.co/invoice-ninja
- VSCO Workspace (formerly Táve): https://www.vsco.co/workspace , https://hello.tave.com/blog/taves-studio-manager-is-joining-vsco , https://petapixel.com/2025/08/19/vsco-workspace-aims-to-alleviate-frustrations-of-running-a-photo-business
- Sprout Studio: https://www.capterra.com/p/147969/Sprout-Studio/ , https://frontdeskreview.com/software/photography-studio-software/sprout-studio/
- Zoho Invoice: https://zoho.com/invoice/kb/general/zoho-invoice-free.html , https://refrens.com/grow/top-invoicing-software-in-malaysia
- Pixieset Studio Manager: https://blog.pixieset.com/blog/meet-studio-manager/ , https://shotkit.com/pixieset-studio-manager-review/
- Bloom: https://bloom.io/index.md , https://agiled.app/blog/bloom-review
- SQL Account: https://sql.com.my/e-invoice , https://cdn.sql.com.my/malaysia-e-invoice
- Express Invoice (NCH Software): https://www.nchsoftware.com/invoice/index_b.html
- Canva invoice maker: https://www.canva.com/invoice/ , https://www.canva.com/create/invoices/
- HitPay: https://hitpayapp.com/my/payment-links , https://hitpayapp.com/my/blog/invoice-payment-gateway-malaysia
- Light Blue: https://lightbluesoftware.com/features , https://www.lightbluesoftware.com/pricing/ , https://www.capterra.com/p/106272/Light-Blue/
- Niagawan: https://niagawan.com/ , https://niagawan.com/en/price , https://niagawan.com/about
- Paper.id: https://inet.detik.com/business/d-7823601/paper-id-tawarkan-solusi-digitalisasi-invoice-untuk-umkm , https://selular.id/2025/03/paper-id-dorong-umkm-cerdas-dalam-digitalisasi-dan-pengelolaan-keuangan/
- Refrens: https://refrens.com/en-my/free-online-invoice-generator , https://refrens.com/grow/top-invoicing-software-in-malaysia
- MyInvois Portal (LHDN): https://www.thestar.com.my/news/nation/2024/07/31/lhdn-launches-myinvois-portal-ahead-of-e-invoicing-implementation-on-aug-1 , https://ringgitplus.com/en/blog/the-experts-corner/malaysias-e-invoice-system-what-it-means-for-your-tax-filing.html
- Failed in fitness rounds: Wave https://tech.co/accounting-software/wave-invoicing ; Invois https://slashdot.org/software/p/Invois/ ; Misoca https://www.yayoi-kk.co.jp/products/misoca/index.html ; StudioBinder (prior knowledge only, not searched today)


---

## Domain research VS

Protocol: `domain-research-vs-protocol.md`. Pool of 20, band-tagged 4 / 8 / 8, uniform ms-sample of 2 without replacement through the external Bash gate.

### Conditioning (what every candidate was generated against)

Domain research is brief-conditioned, not framing-conditioned, and is not competitors. None of the candidates below refers to the locked framing, the sampled designer, the seeds or the constraint, and none is an invoicing or studio-management product (those belong to the Competitor VS step). Each is drawn from the domain as stated in inhabited.md:

- The working world of freelance videographers and photographers in Malaysia who are their own admin department: the paperwork and tools of production (slate, call sheet, camera report, card labels, edit timeline, timecode, edit lists), the invoice and payment conventions they meet in Malaysia, the places they actually spend time (WhatsApp, Instagram, editing software, camera menus), and the history of the craft's paperwork.
- The owner's binding Notes say the lever for this version is presentation: motion, narrative, staging, interaction, judged on a phone by someone who makes moving images for a living. So, inside the brief's domain, preference was given to references that carry a usable way of moving, sequencing or staging information, while the 4 / 8 / 8 band spread was kept.

The four kinds of domain material the protocol names are all present in the pool: adjacent crafts (idx 16, 17, 19), audience habit (idx 12, 14, 15, 18), material and technical (idx 0, 1, 2, 4, 5, 6, 7, 10, 11, 13), archival (idx 3, 8, 9, 16, 19).

### Brief-fitness filter (verbalized, applied before the pool was closed)

Twenty-six candidates were drafted. Each had to pass all four tests to enter the pool. The filter was applied before sampling and has no effect on the draw: the sample is uniform over the 20 survivors, and band tags are not used at sampling time.

1. It belongs to the brief's domain, not to the framing and not to the competitor set.
2. It resolves to one nameable artefact that can stand as a single clean image (inspiration-bank-protocol.md, single clean image rule). A board, a search grid or a collage fails.
3. It can lend at least one named, specific visual or motion element (positive-borrowings gate). A reference that could only be cited as "what not to do" fails.
4. The element it lends is usable on a 390 px phone page, has a complete still state under `prefers-reduced-motion`, and does not depend on sound.

Dropped at the filter (6 of 26), with the reason:

| drafted candidate | band | reason dropped |
|---|---|---|
| Shot list spreadsheet | mid | Fails test 3 in practice: a generic table. Everything it could lend (rows ordered by time, a status column) is lent more specifically by the call sheet (idx 1) and the camera report (idx 6). |
| Waveform and vectorscope scopes | mid | Fails test 3: the only thing to take is a glowing trace used as decoration, which organises no information on a sales page. |
| Invoice-app PDF templates | mid | Fails test 1: these are competitors' output and belong to Competitor VS. |
| Wedding photography Pinterest boards | long-tail | Fails test 2: a board is a grid of thumbnails, which the bank rejects by rule. |
| Kelantan wayang kulit screen | long-tail | Fails test 1: an off-genre conceptual lens, not paperwork, a tool or a habit of this working world. It would behave as a framing seed. |
| Malaysian Chinese wedding day rundown | long-tail | Passes, but duplicates the call sheet (idx 1): a time-ordered page of the day. Replaced so the long-tail band is not two versions of one idea. |

### Candidate pool (20, written before sampling)

| idx | reference | band | kind | what it carries (named element it could lend) | fitness |
|---|---|---|---|---|---|
| 0 | Clapperboard slate face fields | canonical | material | The engraved field grid (PROD, ROLL, SCENE, TAKE, DIRECTOR, CAMERA, DATE) filled in by hand, the black and white diagonal clap sticks, and the clap itself as a one-frame hard sync point. A form that is also a cut. | pass |
| 1 | Daily call sheet page | canonical | material | One page that is a whole day: a header block with the general call time in the largest type, then rows ordered by clock time. Time runs down the page, which is the direction a phone scrolls. | pass |
| 2 | Editing timeline with playhead | canonical | material | Horizontal track lanes, clips as labelled blocks whose width is their duration, one vertical playhead, and scrubbing. The visitor's daily screen. | pass |
| 3 | Marked-up photographic contact sheet | canonical | archival | A strip of numbered frames with one frame boxed in grease pencil and others crossed out. Choosing shown as a mark drawn over the sequence. (The artefact is one sheet photographed whole, not a grid of search thumbnails.) | pass |
| 4 | SMPTE timecode burn-in window | mid | material | An HH:MM:SS:FF counter in fixed-width numerals inside a small opaque box, sitting in the picture and running with it. A position readout tied to progress. | pass |
| 5 | Camera monitor recording overlay | mid | material | Status kept on the edges of the frame with the centre left clear: REC shown as a red dot plus the word, timecode, battery, media remaining, audio level bars. | pass |
| 6 | Camera report sheet circled takes | mid | material | A ruled log of takes (roll, scene, take, lens, notes) where the good take number is circled by hand. Selection shown by a drawn circle, not by colour alone. | pass |
| 7 | CMX3600 edit decision list | mid | material | A plain-text list where every row is one cut: event number, reel, track, transition, then four timecodes. An edit expressed as a column of numbers. | pass |
| 8 | SMPTE universal leader countdown | mid | archival | The numerals 8 down to 2, each held for a second inside a circle and crosshair with a sweeping clock hand, then black before picture. A pre-roll with a built-in sense of time. | pass |
| 9 | SMPTE colour bars test card | mid | archival | Seven vertical bars in a fixed order (grey, yellow, cyan, green, magenta, red, blue) over a short strip and a block row. A named palette of six chromatic colours with fixed proportions. | pass |
| 10 | Card labels and camera tape | mid | material | Hand-written tape on card cases and the red-tape or flipped-card habit for "shot, do not format". State shown by position and a written word together. | pass |
| 11 | Frame guides and title-safe markers | mid | material | Corner brackets, a centre cross, and nested action-safe and title-safe rectangles drawn over the picture. A frame that shows where content is allowed to sit. | pass |
| 12 | WhatsApp document and voice bubbles | long-tail | audience habit | The PDF attachment bubble (first-page thumbnail, file name, page count, size, time, double tick) and the voice-note bubble with its waveform and scrub dot. Where a Malaysian freelancer's invoices actually travel. | pass |
| 13 | LHDN MyInvois validated e-invoice QR | long-tail | material, Malaysia | The validated Malaysian e-invoice: a QR code and a long unique identifier printed in a fixed block on the invoice, plus the validation date and time. The local mark of "this invoice is real". | pass |
| 14 | DuitNow transfer receipt screenshot | long-tail | audience habit, Malaysia | The bank-app success screen clients screenshot and send as proof of payment: a status line, the RM amount in the largest numerals, then label and value rows (reference number, date, recipient). | pass |
| 15 | Instagram Stories segmented progress bar | long-tail | audience habit | A thin bar across the top cut into one segment per story, the current one filling left to right; tap right to advance, tap left to go back, hold to pause. Sequence and position shown in 2 px of height. | pass |
| 16 | Malay Film Productions title cards | long-tail | archival, Malaya and Singapore | Hand-lettered opening credit cards of the 1950s and 1960s Jalan Ampas studio films: one card held full frame, then a cut or dissolve to the next. Credits staged one statement at a time. | pass |
| 17 | Japanese anime e-konte storyboard sheets | long-tail | adjacent craft, Japan | A vertical sheet with fixed columns: cut number, picture panel, action notes, dialogue, and seconds. Time runs down the page and each cut carries its own duration figure. | pass |
| 18 | Malaysian dual-language cinema subtitles | long-tail | audience habit, Malaysia | Two stacked subtitle lines burnt into the lower part of the frame, Malay above and Chinese below, both visible at once. Two languages shown together without a toggle. | pass |
| 19 | Indian CBFC censor certificate card | long-tail | archival, India | The certificate held on screen before every Indian film: a ruled form with the title, category letter, running length and signatures. Paperwork used as the first frame of a moving picture. | pass |

Band check: canonical 4 (idx 0 to 3), mid 8 (idx 4 to 11), long-tail 8 (idx 12 to 19). Six of the eight long-tail entries are non-Western in origin (idx 13, 14, 16, 17, 18, 19); the other two (idx 12, 15) are ambient audience-habit references, not prestige sources. No long-tail entry is a Western boutique studio.

### Bash ms-sample

```bash
python3 -c "import random,time,sys; n,k=int(sys.argv[1]),int(sys.argv[2]); s=int(time.time()*1000); print(f'SEED={s}'); print(f'PICKS={sorted(random.Random(s).sample(range(n),k))}')" 20 2
```

**stdout:**
```
SEED=1794799252914
PICKS=[10, 13]
```

**resolved picks:** index 10 → mid → *Card labels and camera tape*; index 13 → long-tail → *LHDN MyInvois validated e-invoice QR*
**user action:** continue (auto mode)
**final accepted:** Card labels and camera tape (mid, material); LHDN MyInvois validated e-invoice QR (long-tail, material, Malaysia)

One draw, no re-roll. The pool above was written to disk before the command was run.

### Justification

**Index 10, Card labels and camera tape.** This is the paperwork the visitor performs with his hands on every job: a number in marker on a strip of tape, a card turned face down once it has been shot, a band of green tape wrapped round a card only after the footage has been checked. What it carries for this brief is a complete way of showing state by position and by one physical move at a time, which is exactly the owner's lever (presentation, staging, interaction) and is readable in a still, so it satisfies the reduced-motion and no-colour-alone requirements by construction. It also carries a chromatic palette (flat tape colours on a dark object), which the other domain pick does not. The audience context is strong: a solo wedding and event shooter recognises a turned card and a tape label without being told what they are, and reads them as made by someone who does his job.

**Index 13, LHDN MyInvois validated e-invoice QR.** This is the local, current form of "an invoice that counts": the invoice goes out, and comes back with a block added by someone else (an identifier, a date and time to the second, a mark that can be checked). What it carries for this brief is a sequence, not a look: a document completed in two beats by two hands, the human part first and the system's answer printed onto it afterwards, with a clear before and after. That is a usable way to stage the product's one-line promise (pick a client, pick a rate, done), where "done" is something that arrives on the invoice. The register it brings is plain Malaysian tax paperwork, which is the opposite of glossy and keeps the page honest about what the product is.

A binding limit comes with this pick. `context/facts.md` lists "LHDN e-invoice support" as unknown and not to be stated. The build may therefore borrow only the formal pattern (the two-beat return stamp and the three-part record block) and must not show a QR code on the sample invoice, use the words LHDN, MyInvois, e-Invoice or "validated", or imply tax compliance. The bank entry opens with this limit. The pick was not re-rolled because of it: the sample stands, and the positive-borrowings gate is met by the named formal elements.

The pairing is productive in the way the protocol describes: one mid-band material reference from the shooting side of the job and one long-tail Malaysian reference from the admin side, which are the two halves of the visitor's working life that the page has to join.

### Grounding (WebSearch, 2026-11-16)

Pages were read through search summaries. Fetching pages and downloading images is blocked by the network policy here, so no source was opened or viewed and no image was saved.

Index 10:
- https://www.premiumbeat.com/blog/4-simple-tricks-to-keep-track-of-memory-cards-on-set/ (face up before, face down after; X on the back of the case; gaff tape over the contacts; lock switch)
- https://theblackandblue.com/2010/07/14/digital-media-management-best-practices/ (each card is a numbered roll, A1 or A43; a tag with that number on the camera)
- https://www.theblackandblue.com/?p=6748 (green tape wrapped round a card only after its backup is verified; no wrap, no format)
- https://theblackandblue.com/2011/03/07/the-two-types-of-camera-tape-you-need/ (paper tape in 1/2 inch and 1 inch; cloth tape and colour per stock on magazines)
- https://www.dvinfo.net/forum/wedding-event-videography-techniques/509955-best-kind-tape-stickers-use-memory-cards.html (wedding and event shooters labelling cards by number or colour, marker straight on the card)
- https://www.abelcine.com/buy/expendables/tape/paper-tape-1-choose-color (colours in which 1 inch paper tape is sold)

Index 13:
- https://www.ey.com/content/dam/ey-unified-site/ey-com/en-my/technical/tax-alerts/documents/ey-tax-alert-no-2-2024-special-edition-the-inland-revenue-board.pdf (visual representation PDF from the portal; QR must be embedded if shared; QR checks existence and status; validation fields)
- https://assets.kpmg.com/content/dam/kpmg/my/pdf/e-invoicing-tax-whiz-guidelines-update.pdf (date and time of validation and unique identifier number as data fields)
- https://cleartax.com/my/e-invoicing-faqs-malaysia (any layout allowed for the visual copy provided the QR is embedded)
- https://connect.ecosio.com/docs/compliance-for-malaysia (on validation: unique identifier, date and time of validation, link information returned)
- https://fastlane-global.com/my/blog/malaysia-e-invoicing-qr-code-requirements (identifier and QR generated on acceptance)
- https://www.avalara.com/blog/en/north-america/2023/07/malaysia-e-invoicing-faqs.html (the QR contains only a link to the validated invoice)

What search could not establish, stated so nobody assumes it: no source specifies the size or position of the QR on the page (the layout is free), no sample of the official visual representation was seen, and no source confirmed a fixed meaning for red tape on cards (the pool note for idx 10 mentioned a red-tape habit; the bank entry uses only the conventions that were confirmed: orientation, the X, tape over the contacts, the lock switch, the roll number, the green wrap).

### Inspiration bank entries (domain research, 2 anchors)

Written stand-ins for images, per the recorded environment deviation. Each file states at its top that it replaces an image that could not be downloaded.

| anchor | file | named elements it lends |
|---|---|---|
| Card labels and camera tape | `references/domain_card_labels_camera_tape.md` | (1) Flip to mark done: a card-shaped tile turns over when a step is complete, done is the other face of the same object. (2) The tape label: a short flat-coloured strip with ragged short ends, a few degrees off level, one short code in heavy capitals. (3) The row of slots as a progress readout. (4) Green wrap means checked: a band laid across an object only after a person has reviewed it. (5) Tape palette: green, red, yellow, blue, white on dark, with marker black (hex values in the file are estimates, not measured). |
| LHDN MyInvois validated e-invoice QR | `references/domain_myinvois_validated_einvoice_qr.md` | (1) The return stamp as a two-beat sequence: the invoice is assembled, then a compact block is printed onto its foot by the system. (2) The record block: a square mark, one long identifier line, one date and time line with seconds, in small tabular capitals. (3) Two hands, two type voices: what the person chose in the reading face, what the system produced in tabular figures. (4) Before and after on one page. Formal borrowings only; no QR code and no e-invoice wording (see the limit above). |

Palette note for the bank: the first anchor is chromatic, the second is black on white. The palette gate cannot be closed from the second anchor.

### Notes for the audit

- Count of domain references. `domain-research-vs-protocol.md` and `inspiration-bank-protocol.md` both specify exactly 2 domain anchors from a uniform 2-of-20 draw. The skeleton in `sampling-protocol.md` and the completion line in `pipeline-status-protocol.md` say "3 to 5 selected refs". The step's own protocol was followed: 2 anchors. The brief-fitness reasoning the status line asks for is logged above, per candidate.
- Single clean image rule. Not satisfiable in this environment (no image downloads). Each anchor is a written description of the one image it would be, with source URLs. The file names follow the orchestrator's instruction (`domain_<slug>.md`) and not the `NN_<source>_<what>.png` convention.
- Iteration extension budget. Unused. Up to +2 domain references per iteration and +6 in total remain available, each through a fresh 20-pool and a new ms-sample, and only against a specific piece of critic or ICP feedback.


---

## Typography VS

→ `typography-vs-protocol.md`

### Conditioning (what every candidate was generated against)

- **Locked framing (verbatim):** WhatsApp forwarded-message vernacular: grey bubbles, double ticks, voice notes, screenshots of screenshots.
- **Locked Designer:** Wong Kar-wai, signature work *Chungking Express* (1994). Conditions carried: smear and colour bleed live in transitions and in the "before" only, text and product UI at rest are sharp; nothing depends on sound; the owner's Notes override the persona; no photographs of people.
- **Locked constraint:** No cross-fades. Opacity never animates. State changes happen as a cut or through movement, scale, clipping or masking.
- **Owner's binding Notes (inhabited.md):** the live page's "colours and fonts look better" than version 1's. "The main thing is the way it is presented, not the fonts and colours." So the typeface must be at least as good as the live page's type in his eyes. It does not need to be the star, and it must not make itself the subject.
- **Delivery:** Simplified Chinese by default with an English toggle. Fonts load only from Google Fonts in the published page.

**What the live page's type actually is (measured, 2026-11-16).** The live landing stylesheet sets `font-family: SF Pro Display, PingFang SC, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif`. It loads no web font for the landing page. On the owner's Apple devices that is SF Pro Display with PingFang SC; on Android it falls back to Roboto with Noto Sans CJK; in our Linux captures it fell back to Inter, which is why anti-defaults entry 7 read the captures as Inter. Headline weights requested are 700 to 800 with letter-spacing of -0.045em to -0.055em. PingFang SC has no weight above Semibold, so the Chinese headlines the owner likes are rendered at about 600, not at Black. So "the live page's fonts" means: a neutral neo-grotesque at heavy weight, set tight, beside a modern Chinese hei at semibold. Version 1 was condensed Archivo with Noto Sans SC at Black.

**Also measured:** the SIS site's shared stylesheet already loads Plus Jakarta Sans, DM Sans and Geist Mono for the signed-in app (CSS variables `--font-jakarta`, `--font-dm-sans`, `--font-geist-mono`).

### Brand voice (3 words) and physical-object anchor

Derived from the framing and the Designer, not from the product category.

- **Plain-spoken.** From the framing: the page arrives as a peer's forwarded message and opens in that medium. Register recorded at the framing step: confident, crafted, peer to peer, not corporate, not cute. Type test: would this face look at home in a message from someone who does his job, or does it sound like a pitch?
- **Exact.** From the Designer: *Chungking Express* states times, dates and distances to the minute and the centimetre, and it cuts on the frame. An invoice is also a document of exact figures. Type test: are the numerals clear, even and trustworthy at small size, and do heavy weights keep sharp edges at rest?
- **After-hours.** From the Designer and the visitor's moment: neon at night, a lit counter in a dark street, and a phone opened after an edit. The owner prefers the dark, cinematic live page. Type test: does the face hold at heavy weight, light on dark, without glow or softening doing the work?

**Physical-object anchor: the tin of pineapple with a best-before date of 1 May, on a Hong Kong convenience-store shelf in 1994.** It is the film's own object, and it carries two kinds of lettering on one thing:

1. **The printed label.** Heavy, tight, bilingual lettering, Chinese and English side by side at the same visual weight, made to be read across an aisle under fluorescent light. This anchors the primary typeface and its Chinese companion.
2. **The date stamped on the lid by machine.** Small, exact, unstyled numerals put there by a coder, not by a designer. This anchors the page's data voice: message timestamps, the invoice number, the date, RM figures.

Every candidate below is verbalized against the three words and against the question "could this have been on the label, or on the lid?" A face that belongs on neither (a literary serif, a script) was not generated.

### Chinese companion and role rules (fixed before the gate)

- **Chinese companion for every candidate: Noto Sans SC** (Google Fonts family `Noto Sans SC`, variable weight 100 to 900). Reasons: (a) it is the only Simplified Chinese family on Google Fonts with full GB coverage and a continuous weight axis, so its weight can be matched to any Latin pick; the other Simplified options are single-weight display faces (ZCOOL family, Ma Shan Zheng) or a serif (Noto Serif SC), and no serif Latin reached this pool; (b) it is Source Han Sans, the Chinese letterform of WhatsApp on Android, so it is true to the framing; (c) it is the closest Google Fonts equivalent to the PingFang SC the owner sees on the live page, both being modern low-contrast hei designs. Condition: Chinese headlines are set at 700, not 900, to land near PingFang Semibold's colour and away from version 1's Black. The "why it pairs" line for each Latin candidate is in the pool table.
- **Role resolution.** Candidates marked P are primary-capable: a Latin text family with at least weights 400 and 700. The primary typeface is the lowest-index pick marked P; it sets headlines, page copy and controls in English and all Latin runs inside Chinese text. A pick not marked P keeps its labelled role (mono for figures and timestamps, caption for stamped labels, accent for one sign). A second pick marked P sets the text inside the product screens and the invoice document, so product and page speak in two distinct voices. A third pick marked P is held as an accent at the Designer's discretion. If no pick is marked P, the lowest-index pick sets headlines within its recorded condition and Latin running text falls to Noto Sans SC's own Latin glyphs. No face outside the picks and the companion is introduced.

### Generation pass and brief-fitness filter

15 candidates were generated to the band spread (3 canonical, 6 mid, 6 long-tail), then tested before sampling. Brief-fitness test, from the brief:

1. On Google Fonts today, and on npm as `@fontsource/<family>` or `@fontsource-variable/<family>` for local screenshots. Fail on either is a drop.
2. At least as good as the live page's type in the owner's eyes: it can carry a heavy, tight headline or a clear data role on a dark page. It must not return to version 1's condensed register, which the owner compared and ranked below the live page.
3. Does not make type the subject. The owner said type is not the lever.
4. Sits beside Noto Sans SC without a visible seam in weight, height or texture.
5. Not the fingerprint in anti-defaults entry 7 (one neutral Inter-like grotesque at every level).

**First pass: 15 generated, 11 passed, 4 dropped.** Each drop was replaced by a new candidate in the same band, which took the same index and was tested in turn.

| idx | band | dropped candidate | reason for drop | replacement (same band) | verdict |
|---|---|---|---|---|---|
| 1 | canonical | Roboto — body | The Latin of WhatsApp on Android, so the most literal serve of the framing. Fails tests 2 and 5: it is what the live page already falls back to on Android, so it cannot read as a decision or as equal to the SF Pro Display the owner sees, and it is the neutral default that entry 7 names. | Hanken Grotesk — headline | pass |
| 7 | mid | Archivo — headline | Fails test 2 outright. It is version 1's typeface. The owner compared it with the live page and preferred the live page. | Mona Sans — headline | pass, with condition |
| 8 | mid | Courier Prime — accent | The screenplay typewriter face. Fails test 3: it puts a costume on the page and brings the slow, nostalgic mood the Designer's justification says to leave behind. No heavy weight. | Instrument Sans — subhead | pass, with condition |
| 14 | long-tail | Dela Gothic One — display | Ultra-black Japanese display gothic with the energy of a Hong Kong hoarding. Fails tests 3 and 4: one weight only, a loud Latin that makes type the star, and its CJK glyphs are Japanese forms without Simplified coverage, so the Chinese headline beside it would be a different face at a different colour. | Anybody — display | pass, with condition |

None was dropped for availability: all four dropped families are on Google Fonts.

### Candidate pool (15, post-filter, indexed for the gate)

P = primary-capable. "Label" and "lid" refer to the object anchor.

| idx | typeface — role | band | P | maker | against the three words | against the object | beside Noto Sans SC |
|---|---|---|---|---|---|---|---|
| 0 | Plus Jakarta Sans — headline | canonical | P | Tokotype, Indonesia (Gumpita Rahayu), drawn for the city of Jakarta | Plain-spoken: yes, and it is already the voice of the signed-in SIS app, so page and product speak alike. Exact: clear numerals, slightly geometric. After-hours: 800 holds on dark. | Label. | Tall x-height and open counters match the hei's large face; 800 Latin beside 700 Chinese. |
| 1 | Hanken Grotesk — headline | canonical | P | Hanken Design Co., Philippines (Alfredo Marco Pradil) | Plain-spoken: the most neutral voice in the pool. Exact: even, tabular-friendly numerals. After-hours: 100 to 900, takes -0.04em tracking at 800. The nearest Google Fonts stand-in for the SF Pro Display the owner sees on the live page. | Label. | Neutral neo-grotesque beside neutral hei, the same relationship as SF Pro beside PingFang. |
| 2 | Geist Mono — mono | canonical |  | Vercel with Basement Studio | Exact: its whole job. Plain-spoken: reads as software, not as decoration. Already loaded by the SIS app. | Lid. | Used for Latin figures only, so it never has to match Chinese weight. |
| 3 | Schibsted Grotesk — headline | mid | P | Bakken & Bæck with Henrik Kongsvoll, Norway, for a news group | Plain-spoken: a newsroom voice, direct. Exact: sharp joins and flat terminals at 800 and 900. After-hours: its Black is dense on dark. Friction: a little colder than peer to peer. | Label. | Flat terminals echo the hei's square stroke ends. |
| 4 | Bricolage Grotesque — display | mid | P | Mathieu Triay | Plain-spoken: partly; its optical-size quirks at large sizes have more personality than a message has. Exact: fine at text sizes. After-hours: strong at 800. | Label, a hand-cut one. | Works at 700 to 800 beside Chinese 700; the quirky terminals are a visible difference in texture. |
| 5 | Onest — body | mid | P | Dmitri Voloshin and Andrey Kudryavtsev | Plain-spoken: drawn for interface text at message size. Exact: steady numerals. After-hours: 100 to 900. Friction: friendlier and rounder than the live page. | Label, small print. | Round bowls sit comfortably with hei at text sizes. |
| 6 | Martian Mono — mono | mid |  | Evil Martians (Roman Shamin) | Exact: wide, square numerals that read like a slate or a timecode. After-hours: 800 available. Friction: its width takes room on a 390 px screen. | Lid. | Figures only. Its square, full-width feel is close to the Chinese em-square rhythm. |
| 7 | Mona Sans — headline | mid | P | GitHub with Degarism | Plain-spoken: an industrial grotesque, direct. Exact: sharp at heavy weights. After-hours: 200 to 900, and a width axis that goes wider than normal, the opposite direction from version 1. Friction: it is a software company's brand face. | Label. | At width 100 to 112 its wide, square letters match the hei's full-width characters well. |
| 8 | Instrument Sans — subhead | mid | P | Rodrigo Fuenzalida with Instrument | Plain-spoken: clean and quiet. Exact: precise at small sizes. After-hours: tops out at 700, so it is the lightest headline voice in the pool. | Label, small print. | 700 Latin beside 700 Chinese is an exact weight match. |
| 9 | Murecho — body | long-tail | P | Neil Summerour (Positype), Latin drawn inside a Japanese gothic | Plain-spoken: yes. Exact: yes. After-hours: 100 to 900. Its Latin was designed from the start to share a line with East Asian characters, which is the page's default condition. | Label. | Built for this: Latin height, weight and spacing were drawn against CJK proportions. Only its Latin subset is loaded. |
| 10 | Kanit — headline | long-tail | P | Cadson Demak, Thailand | Plain-spoken: the voice of Southeast Asian shopfronts and sports broadcasts. Exact: square, firm numerals. After-hours: 100 to 900 with true italics that lean like speed. Friction: sportier than the live page. | Label, a regional one. | Squared curves agree with hei structure; Thai glyphs are not loaded. |
| 11 | Radio Canada Big — headline | long-tail | P | Coppers and Brasses, Montreal, for a public broadcaster | Plain-spoken: made for on-screen broadcast titles, which is the visitor's own trade. Exact: clear at a glance. After-hours: tops out at 700. | Label. | Compact, sturdy letters at 700 beside Chinese 700. |
| 12 | Handjet — caption | long-tail |  | Rosetta (David Březina), originally drawn for hand-held inkjet coders | Exact: this is the machine-stamped date itself. Plain-spoken: unstyled by nature. After-hours: its dots read as lit points on dark. | Lid, literally. | Latin numerals and short Latin labels only; never set beside running Chinese. |
| 13 | Tilt Neon — accent | long-tail |  | Andy Clymer, modelled on bent neon tube | After-hours: the street sign outside the snack bar. Plain-spoken and exact: no, it is a sign, not a voice. | Neither label nor lid: the sign above the shop. | One Latin word at most; never beside running Chinese. |
| 14 | Anybody — display | long-tail | P | Tyler Finck (Etcetera Type Co), a Eurostile-like design made with 1990s culture in mind | After-hours: close to the square lettering of 1990s consumer electronics, pagers and video gear. Exact: square and firm. Plain-spoken: partly. Its width axis runs 50 to 150, so a headline can stretch during a transition and settle sharp at rest, which serves the Designer's two-speed staging and the no-cross-fades constraint without opacity. | Label on the pager's box. | At width 100 to 125 its square, wide letters sit close to the hei's full-width rhythm. |

**Conditions that travel with a candidate if sampled:**
- idx 4, 7, 8, 14 (families with a width axis): width is never set below 100 at rest. Condensed is version 1's register.
- idx 8 and 11: maximum weight is 700; headlines rely on size and tracking, not on extra weight.
- idx 10: italics are for short moments of movement only; Thai subset not loaded.
- idx 12: numerals, dates, timestamps and short labels only, at a size where the dots resolve, and at AA contrast. Never page copy, never a headline.
- idx 13: one word, one place, static. No flicker or glow loop (anti-defaults entry 6, and the constraint forbids animated opacity).
- idx 14: width change happens only in transitions; the resting state is a fixed width of 100 or more.
- All: tracking and weight are chosen for the pick, not copied from a default; no lavender accent travels with the type (anti-defaults entry 7).

### Self-check before the gate

- **Count and bands:** 15 candidates. Canonical 3 (idx 0 to 2), mid 6 (idx 3 to 8), long-tail 6 (idx 9 to 14).
- **Banned long-tail list:** none of Söhne, GT America, GT Sectra, GT Alpina, Inter, Roboto, Arial, Tiempos Text, Akzidenz, ABC Diatype, Suisse Int'l, Founders Grotesk, IBM Plex Mono, Berkeley Mono, JetBrains Mono is in the pool in any band. Roboto was generated in the canonical band and dropped at the filter.
- **Long-tail quality:** six makers, no foundry repeated (Positype, Cadson Demak, Coppers and Brasses, Rosetta, Andy Clymer, Etcetera Type Co). The long-tail reaches for a Latin drawn inside a Japanese gothic, a Thai foundry, a broadcast identity face, an inkjet-coder face, a neon-tube face and a 1990s-minded square grotesque, not for a second row of prestige faces. The protocol's suggested non-canon foundries (Pangram Pangram, Or Type, Schick Toikka, Velvetyne, Studio Triple) have nothing on Google Fonts, so the same intent was met from the open catalogue.
- **Role spread:** headline 6, display 2, body 2, subhead 1, mono 2, caption 1, accent 1. Primary-capable 11 of 15.
- **Framing-conditioned:** the pool is built on message-size screen grotesques, a Latin made to sit with CJK, Southeast Asian vernacular, broadcast titling, a machine date stamp and a neon sign. A different framing would not produce it.
- **Availability:** all 15 and the Chinese companion verified, table below.

### Availability check (2026-11-16)

Google Fonts was checked directly: `https://fonts.googleapis.com/css2?family=<Family>` returned HTTP 200 with `@font-face` rules pointing at `fonts.gstatic.com` for every family below, and HTTP 400 for a made-up control name. npm versions are from `npm view <package> version`. Weights and axes are from each fontsource package's `metadata.json` (all `type: google`).

| idx | Google Fonts family | weights and axes on Google Fonts | npm static | npm variable |
|---|---|---|---|---|
| 0 | Plus Jakarta Sans | wght 200 to 800, italic | @fontsource/plus-jakarta-sans 5.3.0 | @fontsource-variable/plus-jakarta-sans 5.3.0 |
| 1 | Hanken Grotesk | wght 100 to 900, italic | @fontsource/hanken-grotesk 5.3.0 | @fontsource-variable/hanken-grotesk 5.3.0 |
| 2 | Geist Mono | wght 100 to 900, italic | @fontsource/geist-mono 5.3.0 | @fontsource-variable/geist-mono 5.3.0 |
| 3 | Schibsted Grotesk | wght 400 to 900, italic | @fontsource/schibsted-grotesk 5.3.0 | @fontsource-variable/schibsted-grotesk 5.3.0 |
| 4 | Bricolage Grotesque | wght 200 to 800, wdth 75 to 100, opsz 12 to 96 | @fontsource/bricolage-grotesque 5.3.0 | @fontsource-variable/bricolage-grotesque 5.3.0 |
| 5 | Onest | wght 100 to 900 | @fontsource/onest 5.3.1 | @fontsource-variable/onest 5.3.1 |
| 6 | Martian Mono | wght 100 to 800, wdth 75 to 112.5 | @fontsource/martian-mono 5.3.0 | @fontsource-variable/martian-mono 5.3.0 |
| 7 | Mona Sans | wght 200 to 900, wdth 75 to 125, italic | @fontsource/mona-sans 5.3.0 | @fontsource-variable/mona-sans 5.3.0 |
| 8 | Instrument Sans | wght 400 to 700, wdth 75 to 100, italic | @fontsource/instrument-sans 5.3.0 | @fontsource-variable/instrument-sans 5.3.0 |
| 9 | Murecho | wght 100 to 900 | @fontsource/murecho 5.3.1 | @fontsource-variable/murecho 5.3.1 |
| 10 | Kanit | static 100 to 900, italic, no variable axis | @fontsource/kanit 5.3.0 | none |
| 11 | Radio Canada Big | wght 400 to 700, italic | @fontsource/radio-canada-big 5.3.0 | @fontsource-variable/radio-canada-big 5.3.0 |
| 12 | Handjet | wght 100 to 900, ELGR 1 to 2, ELSH 0 to 16 | @fontsource/handjet 5.3.1 | @fontsource-variable/handjet 5.3.1 |
| 13 | Tilt Neon | weight 400, XROT and YROT -45 to 45 | @fontsource/tilt-neon 5.3.0 | @fontsource-variable/tilt-neon 5.3.0 |
| 14 | Anybody | wght 100 to 900, wdth 50 to 150, italic | @fontsource/anybody 5.3.0 | @fontsource-variable/anybody 5.3.0 |
| companion | Noto Sans SC | wght 100 to 900, subset chinese-simplified | @fontsource/noto-sans-sc 5.3.1 | @fontsource-variable/noto-sans-sc 5.3.1 |

Note for the build: inhabited.md says Google Fonts cannot be fetched in the build environment. On 2026-11-16 at 03:28Z both `fonts.googleapis.com` and `fonts.gstatic.com` answered HTTP 200 from here. The fontsource packages above remain the verified fallback if that changes.

### Bash ms-sample

The number of picks is itself sampled, so the gate is two Bash calls, each run once, after the pool, the companion rule and the role rule above were already written to this file.

**ms-sample command (k):** `python3 -c "import random,time; s=int(time.time()*1000); print(f'SEED_K={s}'); print(f'K={random.Random(s).randint(2,4)}')"`
**stdout:**
```
SEED_K=1794799831142
K=3
```

**ms-sample command (picks):** `python3 -c "import random,time,sys; n,k=int(sys.argv[1]),int(sys.argv[2]); s=int(time.time()*1000); print(f'SEED={s}'); print(f'PICKS={sorted(random.Random(s).sample(range(n),k))}')" 15 3`
**stdout:**
```
SEED=1794799835954
PICKS=[4, 8, 10]
```

**resolved picks:** index 4 → *Bricolage Grotesque* (mid, display), index 8 → *Instrument Sans* (mid, subhead), index 10 → *Kanit* (long-tail, headline)

### Sampled picks

```
ms-sample (k):     SEED_K=1794799831142 / K=3
ms-sample (picks): SEED=1794799835954 / PICKS=[4, 8, 10]
chosen typefaces:  Bricolage Grotesque, Instrument Sans, Kanit
```

**user action:** continue (auto mode)
**final accepted:** Bricolage Grotesque (primary), Instrument Sans (product and invoice text), Kanit (accent), with Noto Sans SC as the Chinese companion.

Each call was run once. No resample, no override, no adjustment, no substitution. Replay check: `random.Random(1794799831142).randint(2,4)` returns `3`, and `random.Random(1794799835954).sample(range(15), 3)` sorted returns `[4, 8, 10]`.

**Banned-canon repool log:** not triggered. None of the three picks is on the banned long-tail list, and no banned family was in the pool.

## Typography locked

Roles follow the rule fixed before the gate (lowest-index primary-capable pick is primary; a second sets product and invoice text; a third is an accent).

| role | typeface | pool idx | Google Fonts family | load | where it is used |
|---|---|---|---|---|---|
| Primary (Latin) | Bricolage Grotesque | 4 | `Bricolage Grotesque` | variable, wght 400 to 800, opsz 12 to 96, width fixed at 100 | English headlines (800), page copy (400), controls and emphasis (600), and every Latin run inside Chinese page text (SIS, RM 199, PDF) |
| Chinese companion | Noto Sans SC | fixed before the gate | `Noto Sans SC` | variable, wght 400 to 700 | all Chinese: headlines at 700, controls and product text at 500, page copy at 400. Never above 700. |
| Product and invoice text | Instrument Sans | 8 | `Instrument Sans` | variable, wght 400 to 700, width fixed at 100 | Latin text inside the product screens, the chat thread and the invoice document, so the product speaks in a quieter voice than the page |
| Accent | Kanit | 10 | `Kanit` | static 700 and 700 italic, Latin subset only | short moments of movement at the Designer's discretion (a figure or a word that travels). Not for copy. |

- **One tested Google Fonts request for the published page** (HTTP 200 on 2026-11-16, returns all four families):
  `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Instrument+Sans:wght@400..700&family=Kanit:ital,wght@0,700;1,700&family=Noto+Sans+SC:wght@400..700&display=swap`
- **npm packages for local screenshots (versions verified with `npm view`):** `@fontsource-variable/bricolage-grotesque` 5.3.0 (use its `opsz.css` to get the optical-size axis; static `@fontsource/bricolage-grotesque` 5.3.0 also exists), `@fontsource-variable/instrument-sans` 5.3.0 (static `@fontsource/instrument-sans` 5.3.0), `@fontsource/kanit` 5.3.0 (static only, no variable package), `@fontsource-variable/noto-sans-sc` 5.3.1 (static `@fontsource/noto-sans-sc` 5.3.1).
- **Font stack order:** Latin family first, then `Noto Sans SC`, then system fallbacks, so Latin characters inside Chinese text take the Latin face and Chinese characters fall through to Noto Sans SC. Example for page text: `"Bricolage Grotesque", "Noto Sans SC", "PingFang SC", system-ui, sans-serif`.
- **Conditions carried into Step 12:**
  1. Bricolage Grotesque and Instrument Sans are never set at a width below 100. Condensed is version 1's register, which the owner ranked below the live page.
  2. Bricolage Grotesque changes character with optical size: at high `opsz` its heavy weights are tight and visibly quirky, at low `opsz` they are calmer and more regular. The owner said type is not the lever, so the Designer picks the `opsz` value for headlines deliberately and keeps the quirk from becoming the subject. If the large-size forms read louder than the live page's headline, lower `opsz` before changing anything else.
  3. Chinese headlines are 700, not 900, to sit near the PingFang Semibold the owner sees on the live page.
  4. Instrument Sans stops at 700. Inside product screens hierarchy comes from size and position, not from heavier weight.
  5. Kanit italics are for short moments of movement only. Thai subset is not loaded. If the Designer finds no place where it earns its keep, it may go unused; it may not be replaced by a face outside this section.
  6. Anti-defaults entry 7 still applies: tracking and weight are chosen for these faces, and no lavender accent travels with the type.
  7. Numerals in amounts and dates use tabular figures (`font-variant-numeric: tabular-nums`) so figures do not shift when a total changes.

**Why each pick serves the framing and the brief:**
- **Bricolage Grotesque** was in the pool as the hand-cut label: a grotesque that is plain at message size and has a human, slightly irregular cut at headline size, which suits a page that opens as a forwarded message from a peer and must still land a heavy, tight headline on a dark ground like the live page's. It is not Inter or a near twin, so it clears anti-defaults entry 7 while staying in the heavy grotesque register the owner preferred. Its risk was recorded before the draw: at large optical sizes it has more personality than a message has, which is why condition 2 gives the Designer the optical-size axis as the control.
- **Instrument Sans** was in the pool as the label's small print: clean, quiet and precise at small sizes, with 700 as an exact weight match for Chinese at 700. Drawn second, it takes the product screens, the thread and the invoice, where the page finally shows the real product view the live page never shows. A quieter voice inside the product than on the page keeps the invoice reading as a document and not as a headline.
- **Kanit** was in the pool as the regional label: the Latin of a Thai foundry whose letters are on Southeast Asian shopfronts and sports broadcasts, with true italics that lean like speed. Drawn third, it is an accent for the few moments where something moves, which is where the Designer's two-speed staging lives. It is a legible, deliberate pick for a Malaysian visitor and an unusual one for a SaaS page.
- **Noto Sans SC** pairs with all three because it is the Chinese letterform already in the visitor's WhatsApp thread on Android, the closest Google Fonts equivalent to the PingFang SC on the live page, and the only Simplified Chinese family on Google Fonts whose weight can be tuned to match each Latin role. Bricolage Grotesque at 800 beside it at 700 gives a Latin and a Chinese headline of similar colour; Instrument Sans at 400 to 700 matches it weight for weight inside the product.


---

## Seeds VS

Protocol: `seeds-vs-protocol.md`. 10 artifact-origin categories x 4 candidates = 40-pool, brief-fitness (borrowing-productivity) gate, uniform ms-sample of 2 without replacement through the external Bash gate. This section was re-run from scratch on 2026-11-16 at the owner's request; the earlier failed attempt left nothing on disk.

### Conditioning (what every candidate was generated against)

- **Locked framing (verbatim):** WhatsApp forwarded-message vernacular: grey bubbles, double ticks, voice notes, screenshots of screenshots. Role recorded at Step 4: narrative and motion logic. Found, messy, time-based material that resolves into one clean invoice and its PDF.
- **Locked Designer:** Wong Kar-wai, signature work *Chungking Express* (1994). The move carried forward: one sharp still subject while everything else streaks past; hard cuts between short self-contained episodes; exactness about times and dates; repetition of one small object until it means something.
- **Locked constraint (binding):** No cross-fades. Opacity never animates; every change of state happens as a cut or through movement, scale, clipping or masking.
- **Owner's lever (inhabited.md, Notes):** presentation (motion, narrative, staging, interaction) for a working videographer on a 390 px phone. Nothing may depend on sound. Every sequence needs a complete still state under `prefers-reduced-motion`.
- **What the borrowing-productivity test means here:** the protocol's question ("could a Designer identify a specific visual move they could borrow and have the result improve?") is applied with the owner's lever. A candidate passes if it lends a concrete way of moving, cutting, sequencing or staging that can be built in code (CSS, SVG, canvas, WebGL) on a phone page and that survives the no-cross-fade rule without being bent. A candidate whose only move is a fade, a mood or a surface texture fails. Off-genre register is not a reason to fail.
- **Avoided on purpose:** *Chungking Express* and other Wong Kar-wai films (already the Designer anchor), the two competitor products, and the two domain anchors (camera tape and card labels; the validated e-invoice block), so the seeds add new material to the bank rather than repeat it.

### Candidate pool (40 = 10 categories x 4, post-gate, written before sampling)

Descriptors are 10 words or fewer. The note says which concrete move the artifact lends and how it sits with the constraint.

| idx | category | artifact | descriptor (≤10 words) | borrowing note (the move it lends) | fitness |
|---|---|---|---|---|---|
| 0 | historical artifact | Western Union telegram with pasted tape strips, 1930s to 1950s | message printed on gummed tape, cut, pasted onto form | Text arrives as strips laid down one at a time onto a fixed form; each strip can enter by a horizontal clip wipe, so a message assembles line by line without fading. | pass |
| 1 | historical artifact | Paris pneumatique "petit bleu" carte-télégramme | sealed folded card message, torn open along perforations | A message that is closed, travels, and is opened by tearing along a perforated edge: a clip-path tear line that reveals the inside in one directional move. | pass |
| 2 | historical artifact | Qiaopi remittance letter, Nanyang (Malaya) to Fujian, 1920s to 1940s | money and message in one envelope, chop-stamped per relay | The envelope collects a new chop at each relay point, so its journey is a sequence of stamps landing in order; money and words travel as one document, which is the invoice's own job. | pass |
| 3 | historical artifact | Bayeux Tapestry, c. 1070s | continuous embroidered narrative scroll, about 70 metres | One unbroken horizontal strip in which episodes follow each other with no frames; a scroll-driven pan along a single long band, with episodes marked by inline captions. | pass |
| 4 | contemporary practitioner's work | Christian Marclay, *The Clock* (2010) | 24-hour montage where screen time equals real time | Every cut is keyed to the visitor's actual clock time; the page can stamp its found messages with times relative to now, so the sequence plays in the visitor's own evening. | pass |
| 5 | contemporary practitioner's work | Ryoji Ikeda, *test pattern* (2008 onward) | binary data as strobing black and white barcodes | Hard-cut strobing bars and scanning stripes generated from data, no fades at all; a code-native transition vocabulary that is already pure cut. | pass |
| 6 | contemporary practitioner's work | Michel Gondry, "Star Guitar" video for The Chemical Brothers (2002) | train-window landscape whose objects pass on the beat | Objects streaking past a window arrive on a rhythmic grid, so scroll speed becomes tempo; a parallax lane where each passing item is placed on a beat. | pass |
| 7 | contemporary practitioner's work | Erik Kessels, *24 Hrs in Photos* (2011) | one day of uploaded photos printed and heaped | Overwhelm shown as a physical pile of prints that fills the room; the "before" can be a heap of screenshots dropping and stacking (translate plus rotate), out of which one sheet is lifted. | pass |
| 8 | physical object / product | Motorola Bravo numeric pager | one-line segmented LCD showing a callback number | A single-line LCD where a message steps in from the right in whole-character jumps; stepped (not eased) marquee motion with a visible, silent alert. | pass |
| 9 | physical object / product | Nokia 3310 (2000) monochrome SMS screen | blinking envelope icon, 84 x 48 pixel text | A new-message envelope that blinks on and off (a hard state toggle, not a fade) and text that scrolls by whole pixel rows; low-resolution stepped motion as a deliberate register. | pass |
| 10 | physical object / product | Malaysian NCR duplicate "bil tunai" cash bill book | handwritten top sheet copies through to carbonless duplicate | Writing on the top sheet appears on the copy underneath, then the original is torn off along the perforation and the duplicate stays; a two-layer reveal plus a tear-off exit. | pass |
| 11 | physical object / product | Epson TM-T88 thermal receipt printer | paper extrudes line by line, torn off at the blade | The document is born by sliding out of a slot one printed line at a time, then cut off; the clean invoice can emerge from an edge mask exactly this way. | pass |
| 12 | document / procedural | Malaysian crossed cheque leaf, "A/C Payee Only" | two parallel diagonal crossing lines drawn across | A confirmatory gesture drawn across the document as two strokes (SVG stroke-dashoffset), turning a draft into a committed instrument; MICR numerals along the foot. | pass |
| 13 | document / procedural | Script supervisor's lined script | vertical coverage lines drawn down script pages | A vertical line drawn down the text marks what each setup covers, straight where on camera and wavy where off; progress through a sequence shown as a line being drawn. | pass |
| 14 | document / procedural | Japanese ringi-sho approval form with hanko boxes | circulating proposal, one seal per approver in sequence | A row of empty seal boxes that fill one by one as the document circulates; each seal lands as a cut, and the full row is the state "approved". | pass |
| 15 | document / procedural | IATA multi-part paper airline ticket with flight coupons | one coupon torn out per leg flown | A stack of coupons that shrinks as each one is torn out, so progress is the stack getting thinner; each step is a tear and a slide out of frame. | pass |
| 16 | interface / instrument | Solari di Udine split-flap departure board | characters change by mechanical flaps, row by row | Every change is a flap rotating through intermediate characters, cascading along a row; a state change made of rotation and stepping, never transparency. | pass |
| 17 | interface / instrument | WhatsApp "Message info" screen | per-message Delivered and Read rows with exact times | The framing's own receipt: a message pinned at the top, below it "Read" and "Delivered" each with a time to the minute; status shown as tick count plus a word plus a time, not by colour alone. | pass |
| 18 | interface / instrument | Avid Media Composer source and record monitors | two viewers side by side, mark in and out | Source on the left, record on the right: the messy thread plays as source while the clean invoice is cut into the record side; marking an in point and an out point as the selecting gesture. | pass |
| 19 | interface / instrument | BBC Ceefax teletext page 100 | block-graphic pages, rotating subpage counter, hard page swaps | A page number that counts while the set searches, then the whole page replaces itself in one cut; subpages "1/4, 2/4" cycling by hard swaps. | pass |
| 20 | institutional production | *Night Mail* (1936), GPO Film Unit | overnight postal train, bags snatched by trackside nets | Two speeds in one move: the train streaks through while the mail pouch is caught and held still in the net; plus pigeon-hole sorting as a grid that fills. | pass |
| 21 | institutional production | Library of Congress card catalogue drawer | index cards flipped by thumb, guide tabs raised | A stack of cards riffled past at speed, stopping on one raised card that is pulled up and read; sequential flip-through ending in a single held item. | pass |
| 22 | institutional production | Hong Kong Observatory tropical cyclone warning signals | numbered symbol signals hoisted in fixed sequence | A small, fixed vocabulary of numbered symbols (1, 3, 8, 9, 10) that replace each other by being hoisted; state as discrete position changes along a mast. | pass |
| 23 | institutional production | NASA Apollo 11 Flight Plan (1969) | timeline pages with a ground elapsed time column | A left gutter of elapsed time beside events running down the page; a running time column that the scroll position advances, exact to the minute. | pass (replacement 23a, round 1) |
| 24 | vernacular / found | Sammy's Kitchen neon cow sign, Hong Kong (now in M+) | hand-bent neon cow, segments lighting in sequence | Neon segments switch on in a set order and flicker as hard on and off states; a light-up sequence that is all cuts, in the night-city register the Designer owns. | pass |
| 25 | vernacular / found | "Ah Long" moneylender stickers on Malaysian lampposts | small stickers layered over half-scraped older stickers | Layers stuck on top of layers, older ones half torn away underneath; a stacking build-up for the "before" in which each new layer slaps on at a slight angle. | pass |
| 26 | vernacular / found | Hong Kong red minibus hand-lettered route placards | swappable destination cards slotted behind the windscreen | A placard pulled out and another slotted in as the route changes; content replaced by a vertical slide into a slot, in heavy hand-lettered Chinese and English. | pass |
| 27 | vernacular / found | Chungking Mansions money-changer rate boards | stacked currency rows with stepping LED numerals | Rows of rates whose digits step to new values; a dense column of changing numbers in which each digit changes by a cut. | pass (replacement 27a, round 1) |
| 28 | natural form | Harold Edgerton, *Milk Drop Coronet* (1957) | stroboscopic photograph freezing a splash at one instant | One instant pulled sharp out of very fast motion; the page can cut from a streaking blur to a single frozen, legible frame, which is the Designer's two-speed move made literal. | pass |
| 29 | natural form | Starling murmuration over Gretna Green, Scotland | thousands of birds converging into one moving shape | Many scattered points converge and settle into a single coherent form; the framing's resolution (scattered messages becoming one invoice) as a particle convergence. | pass |
| 30 | natural form | Star-trail long exposure centred on Polaris | stars streak in arcs around one fixed point | Everything streaks in concentric arcs while one point stays sharp and still; the Designer's still-subject-in-a-moving-world move in its most diagrammatic form. | pass |
| 31 | natural form | Synchronous fireflies of Kampung Kuantan, Kuala Selangor | mangrove fireflies flashing on and off in unison | Many lights blinking as hard on and off states, drifting into one shared beat; a local, silent rhythm made only of cuts. | pass |
| 32 | craft / regional tradition | Japanese kamishibai paper theatre (butai stage) | narrator slides picture cards out of wooden frame | Each picture card is pulled sideways out of a fixed frame to reveal the next, sometimes half-pulled for suspense; scene changes as slides inside a stage, never dissolves. | pass |
| 33 | craft / regional tradition | Suanpan abacus in a Chinese sundry shop | beads slid against the beam to compute totals | A total built by beads snapping into place, position meaning value; the invoice sum can be shown as discrete pieces moving to a line rather than a number fading in. | pass |
| 34 | craft / regional tradition | Kau cim fortune sticks, Wong Tai Sin Temple, Hong Kong | shaken cylinder until one stick works out and falls | A mass of identical sticks shaken until one edges out ahead of the rest and drops; one item separating from a jostling crowd by motion. | pass (replacement 34a, round 1) |
| 35 | craft / regional tradition | Chinese seal (chop) pressed in cinnabar paste | carved stone seal leaving a red square impression | The stamp comes down (scale toward the page), lifts, and the mark is simply there; a one-beat commitment gesture with an exact square form. | pass |
| 36 | media artifact | *Searching* (2018), dir. Aneesh Chaganty | thriller told entirely on computer and phone screens | A message typed, deleted and retyped before sending; hesitation and decision shown purely through screen UI timing, with a cursor and a send moment. | pass |
| 37 | media artifact | Saul Bass, *North by Northwest* title sequence (1959) | credits slide along a building's facade grid lines | Type enters and exits by sliding along the lines of a grid in perspective; motion that follows a structure already in the frame, no fades. | pass |
| 38 | media artifact | Akira Kurosawa, *Seven Samurai* (1954) wipe transitions | hard-edged wipes sweeping one scene off another | A scene change as an edge travelling across the frame; the clip-path wipe as the page's default transition, borrowed from a source every editor knows. | pass |
| 39 | media artifact | Kyle Cooper, *Se7en* title sequence (1995) | scratched, jittery close-ups of handmade notebooks | Found, handmade paper material in stuttering jump cuts and frame-skips; a way to make the messy "before" feel physical through cut rhythm alone. | pass |

Category check: 4 candidates in each of the 10 categories (idx 0 to 3 historical, 4 to 7 practitioner, 8 to 11 physical object, 12 to 15 document, 16 to 19 interface, 20 to 23 institutional, 24 to 27 vernacular, 28 to 31 natural form, 32 to 35 craft, 36 to 39 media). Every candidate is one named, specific artifact or work. Ten are Malayan, Malaysian or Hong Kong in origin (idx 2, 10, 12, 22, 24, 25, 26, 27, 31, 34).

### Seed fitness rounds

Round 1 (all 40 first-draft candidates tested against the borrowing-productivity test as defined in Conditioning):

```
Round 1:
  0. [historical artifact] "Western Union telegram with pasted tape strips" → PASS (strip-by-strip assembly by clip wipe)
  1. [historical artifact] "Paris pneumatique petit bleu carte-télégramme" → PASS (perforated tear-open reveal)
  2. [historical artifact] "Qiaopi remittance letter, Malaya to Fujian" → PASS (stamps landing in relay order; money and message as one document)
  3. [historical artifact] "Bayeux Tapestry" → PASS (one continuous scroll-driven band with inline captions)
  4. [contemporary practitioner] "Christian Marclay, The Clock" → PASS (cuts keyed to the visitor's real clock)
  5. [contemporary practitioner] "Ryoji Ikeda, test pattern" → PASS (pure hard-cut strobe vocabulary)
  6. [contemporary practitioner] "Michel Gondry, Star Guitar" → PASS (passing objects placed on a rhythmic grid)
  7. [contemporary practitioner] "Erik Kessels, 24 Hrs in Photos" → PASS (heap of prints dropping and stacking)
  8. [physical object] "Motorola Bravo numeric pager" → PASS (stepped one-line marquee)
  9. [physical object] "Nokia 3310 SMS screen" → PASS (hard blink toggle, whole-pixel scroll)
  10. [physical object] "NCR duplicate bil tunai cash bill book" → PASS (two-layer copy-through, tear-off exit)
  11. [physical object] "Epson TM-T88 thermal receipt printer" → PASS (document extruding from a slot line by line)
  12. [document / procedural] "Malaysian crossed cheque leaf" → PASS (two drawn strokes as commitment)
  13. [document / procedural] "Script supervisor's lined script" → PASS (progress as a line drawn down text)
  14. [document / procedural] "Ringi-sho with hanko boxes" → PASS (seal boxes filling in sequence)
  15. [document / procedural] "IATA multi-part airline ticket" → PASS (stack thinning by tear-outs)
  16. [interface / instrument] "Solari split-flap departure board" → PASS (rotation cascade, never transparency)
  17. [interface / instrument] "WhatsApp Message info screen" → PASS (status as ticks plus word plus time)
  18. [interface / instrument] "Avid source and record monitors" → PASS (source / record split, mark in and out)
  19. [interface / instrument] "BBC Ceefax page 100" → PASS (counting page number, whole-page cut)
  20. [institutional production] "Night Mail (1936), GPO Film Unit" → PASS (pouch caught still while the train streaks)
  21. [institutional production] "Library of Congress card catalogue drawer" → PASS (riffle stopping on one raised card)
  22. [institutional production] "Hong Kong Observatory cyclone signals" → PASS (discrete symbol states by position)
  23. [institutional production] "Unicode emoji code charts (full emoji list)" → FAIL (a static comparison table; the only move is putting renderings in columns, which lends no way of moving, cutting or staging, and its register pulls toward a generic chat-UI skin the framing already supplies)
  Replacement 23a: [institutional production] "NASA Apollo 11 Flight Plan (1969)" → PASS (elapsed-time gutter advanced by scroll; exact times, the Designer's habit)
  24. [vernacular / found] "Sammy's Kitchen neon cow sign" → PASS (segment light-up order as hard cuts)
  25. [vernacular / found] "Ah Long moneylender stickers on lampposts" → PASS (layer slapped over layer, angled)
  26. [vernacular / found] "Hong Kong red minibus route placards" → PASS (slide-out, slot-in content swap)
  27. [vernacular / found] "WhatsApp 'good morning' forwarded greeting images" → FAIL (what it offers is compression grime and clip-art stickers, a surface texture with no move attached; and it is the framing itself restated, so it adds nothing a Designer could borrow beyond what Step 4 already gave)
  Replacement 27a: [vernacular / found] "Chungking Mansions money-changer rate boards" → PASS (digits stepping by cuts in a dense column)
  28. [natural form] "Harold Edgerton, Milk Drop Coronet" → PASS (cut from blur to one frozen frame)
  29. [natural form] "Starling murmuration over Gretna Green" → PASS (scatter converging into one form)
  30. [natural form] "Star-trail exposure centred on Polaris" → PASS (one fixed point among streaks)
  31. [natural form] "Synchronous fireflies of Kampung Kuantan" → PASS (on and off flashes drifting into one beat)
  32. [craft / regional tradition] "Kamishibai paper theatre" → PASS (card pulled sideways out of a stage)
  33. [craft / regional tradition] "Suanpan abacus in a sundry shop" → PASS (total built by beads snapping to the beam)
  34. [craft / regional tradition] "Peranakan tingkat tiffin carrier" → FAIL (its one move, lifting stacked tiers off to reveal what is inside, is lent more precisely by kamishibai (idx 32) and the bill book (idx 10); what remains is a home-cooking mood, not a borrowable move)
  Replacement 34a: [craft / regional tradition] "Kau cim fortune sticks, Wong Tai Sin Temple" → PASS (one item working out of a shaken mass)
  35. [craft / regional tradition] "Chinese seal in cinnabar paste" → PASS (one-beat stamp with an exact square mark)
  36. [media artifact] "Searching (2018)" → PASS (type, delete, retype, send as UI timing)
  37. [media artifact] "Saul Bass, North by Northwest titles" → PASS (type sliding along grid lines)
  38. [media artifact] "Kurosawa, Seven Samurai wipes" → PASS (edge-travel wipe as default transition)
  39. [media artifact] "Kyle Cooper, Se7en titles" → PASS (stutter cuts on found handmade material)
```

Result: 37 PASS and 3 FAIL in round 1; all 3 replacements (23a, 27a, 34a) PASS in the same round, from the same category. No second round was needed. No category was flagged. 40 PASSing seeds, 4 per category, feed the gate. The pool table above already shows the replacements in their slots.

### Bash ms-sample

```bash
python3 -c "import random,time,sys; n,k=int(sys.argv[1]),int(sys.argv[2]); s=int(time.time()*1000); print(f'SEED={s}'); print(f'PICKS={sorted(random.Random(s).sample(range(n),k))}')" 40 2
```

**ms-sample command:** `python3 -c "import random,time,sys; n,k=int(sys.argv[1]),int(sys.argv[2]); s=int(time.time()*1000); print(f'SEED={s}'); print(f'PICKS={sorted(random.Random(s).sample(range(n),k))}')" 40 2`
**stdout:**
```
SEED=1794800480856
PICKS=[12, 20]
```

**resolved picks:** index 12 → document / procedural → *Malaysian crossed cheque leaf, "A/C Payee Only"*; index 20 → institutional production → *Night Mail (1936), GPO Film Unit*
**user action:** continue (auto mode)
**final accepted:** Malaysian crossed cheque leaf, "A/C Payee Only" (document / procedural); *Night Mail* (1936), GPO Film Unit (institutional production)

The gate was run once, after the pool and fitness rounds above were written to disk. No resample, no override, no adjustment, no substitution. Replay check: `random.Random(1794800480856).sample(range(40), 2)`, sorted, returns `[12, 20]`.

## Seeds locked

- **Seed 1:** idx 12, document / procedural: Malaysian crossed cheque leaf, "A/C Payee Only". Bank entry: `references/seed_crossed_cheque_ac_payee.md`.
- **Seed 2:** idx 20, institutional production: *Night Mail* (1936), GPO Film Unit. Bank entry: `references/seed_night_mail_1936.md`.
- **Seed:** 1794800480856. Pool size 40 (4 per category, 3 same-category replacements in round 1).

### Justification

**Index 12, Malaysian crossed cheque leaf, "A/C Payee Only".** A cheque is the paper ancestor of the thing SIS makes: a document that says who is paid, how much, and on what date, with the amount stated once in words and once in figures so the two can be checked against each other. What it lends this brief is not a look but a set of gestures that end a sequence. Two parallel diagonal strokes drawn across a corner, with a short phrase between them, change the status of the whole document without adding a single field; a printed alternative ("or bearer") is cancelled by one horizontal stroke; the leaf is torn off along a perforation while its counterfoil stays behind as the record. Each of these is a drawn line or a single translate, which is exactly the vocabulary the no-cross-fade constraint leaves open, and each finishes in a complete still that reads under reduced motion with no colour needed. The Designer will use the crossing as the "done" mark on the sample invoice (two strokes drawn by `stroke-dashoffset`, the invoice number between them), the strike-through as the visible decision when the thread's floating clients are narrowed to one, the amount in words and figures as two cuts that agree, and the tear-off with a stub as the moment the PDF leaves while the record stays in SIS. It is the Designer's still, sharp subject turned into a gesture: after the smear of the thread, one exact mark. Search confirmed that Malaysian banks pre-print this crossing on every leaf (Maybank since 1 April 2003), which is why Jun Hao will recognise it at once, and it sets a limit: the borrowing is formal only, with no cheque, bank name, account number or payment claim on the page.

**Index 20, *Night Mail* (1936), GPO Film Unit.** An institution filming its own paperwork in motion: the overnight mail train sorting half a million letters at full speed and exchanging mailbags with trackside posts without stopping. It is off-genre for an invoicing page and that is its use. Its central image is the Designer's own move in mechanical form: a train that is all streak and a leather pouch that hangs still until the instant it is caught. That gives the build a concrete mechanism for the framing's turn from mess to invoice. The forwarded thread streams past as the fast band, and the pieces that matter (the client, the rate, the date) are caught out of it one at a time with a single hard-stopped translate, then thrown into a wall of labelled pigeon-holes that fills until the invoice is complete; at the end the finished PDF is dropped out of the moving frame into the visitor's thread, the way the van puts a bag out at the trackside. The film's famous rhythm, cut lengths shortening toward arrival and a long final hold, carries over as a timing table for cuts, with none of its sound, which the owner's accessibility rule forbids relying on. Every part of it is movement, position and cutting, so it respects the constraint without adjustment. The two seeds pair well across categories: *Night Mail* supplies how the material moves and arrives, the cheque supplies the marks that close each move, and the poem's line about "the cheque and the postal order" happens to join them (a note for the Designer, not copy).

### Grounding (WebSearch, 2026-11-16)

Pages were read through search summaries. Fetching pages and downloading images is blocked by the network policy here, so no source was opened or viewed and no image was saved.

Index 12:
- https://maybank2u.com.my/maybank2u/malaysia/en/personal/banking_fees/cheque_encashment.page (pre-printed "A/C Payee Only" crossing on all new cheque leaves from 1 April 2003)
- https://www.bnm.gov.my/faqs-for-cheque-truncation-and-conversion-system-ctcs- (CTCS; cheques cleared from images and code line)
- https://nyaaya.org/?p=827 (crossing as two parallel lines with or without words)
- https://www.legislation.gov.uk/ukpga/Vict/45-46/61/section/81A/data.pdf (the "account payee" rule in the UK parent statute; Malaysia's Bills of Exchange Act 1949 follows the 1882 Act)

Index 20:
- https://en.wikipedia.org/wiki/Night_Mail (GPO Film Unit, released 4 February 1936, LMS London to Scotland mail train, Auden and Britten)
- https://staging1.postalmuseum.org/?p=8390 (Travelling Post Office, sorting on board)
- https://archives.stir.ac.uk/2014/04/17/the-lasting-appeal-of-night-mail/ (bags hung on trackside poles snatched at speed; bags thrown out for collection)
- https://transportationhistory.org/2025/01/13/1936-the-world-premiere-of-a-documentary-about-a-mail-delivery-train (about forty staff; half a million letters sorted, picked up or dropped at full speed)

What search could not establish: the exact position and size of the printed crossing on current Malaysian leaves, and any Malaysian rule requiring "or bearer" to be struck out (the bank entry uses only the general form). Directors' names and the poem's wording for *Night Mail* are marked as general knowledge in the bank entry, not as verified.

### Inspiration bank entries (framing-seeds, 2 anchors)

Written stand-ins for images, per the recorded environment deviation. Each file states at its top that it replaces an image that could not be downloaded.

| anchor | file | named elements it lends |
|---|---|---|
| Malaysian crossed cheque leaf, "A/C Payee Only" | `references/seed_crossed_cheque_ac_payee.md` | (1) The crossing as the "done" gesture: two parallel diagonal strokes drawn across the invoice corner by `stroke-dashoffset`, a short status phrase between them. (2) The strike-through that narrows: unchosen options cancelled by one horizontal stroke. (3) Amount in words and in figures, as two cuts that agree. (4) Tear-off with a counterfoil: the invoice slides away from a perforated rule, the record stub stays. (5) A machine line of fixed-width numerals along the foot. Formal borrowings only. |
| *Night Mail* (1936), GPO Film Unit | `references/seed_night_mail_1936.md` | (1) The catch: one still object snapped out of a streaking band by a single hard-stopped translate. (2) The pigeon-hole grid: labelled slots (client, rate, date, item, total, PDF) that fill one piece at a time; the filled grid is the still state. (3) Cut length as tempo: shots shorten toward completion, then a long final hold, with no sound. (4) The drop: the finished PDF put out of the moving frame into the visitor's thread. |

Palette note for the bank: neither seed is chromatic (a pale printed cheque, a black-and-white film). The palette gate cannot be closed from the seeds; this matches the owner's Notes, which put effort into presentation rather than colour.

### Notes for the audit

- Single clean image rule. Not satisfiable in this environment (no image downloads). Each anchor is a written description of the one image it would be, with source URLs. File names follow the orchestrator's instruction (`seed_<slug>.md`) and not the `NN_<source>_<what>.png` convention.
- Off-genre. *Night Mail* is off-genre for an invoicing page; per inspiration-bank-protocol.md it stays in, and its contribution is named above.
- Re-run. This step was run once more from scratch at the owner's request after an earlier attempt failed before writing anything. The gate in this section is the only draw made for Seeds VS.


---

## Synthesis (Step 12)

Composed 2026-11-16 after Reading from disk: the four written anchor entries in `references/` (`seed_crossed_cheque_ac_payee.md`, `seed_night_mail_1936.md`, `domain_card_labels_camera_tape.md`, `domain_myinvois_validated_einvoice_qr.md`); the written descriptions of the other three anchors, which are held in this file and have no separate entry (Designer locked, signature work *Chungking Express*; Competitor VS, the Bukku and Invoice-Generator.com judgment tables); `claude_anti_defaults.md`; this `sampling.md` in full; `inhabited.md`, `context/facts.md`, `context/build-environment.md`; and the captures of the live page and of version 1 in `context/`. All bank anchors are written stand-ins for images that could not be downloaded (recorded deviation), so "the anchor file" below always means the written entry.

### Brand personality
- Three concrete words: peer-forwarded, to-the-second, cut-on-the-frame
  - Derived from: framing idx 37 (the link reaches him as a forwarded WhatsApp message and the page continues in that medium, so it speaks as one shooter's message to another); Designer Wong Kar-wai, *Chungking Express* (times, dates and amounts stated exactly, verified habit in Designer locked; hard cuts between short episodes); ICP register in `inhabited.md` (Jun Hao edits for a living and judges a cut by the frame; "peer to peer, not corporate, not cute"). The Typography VS voice words (plain-spoken, exact, after-hours) are an earlier reading of the same three inputs and are not contradicted.
- Emotional goals: the small nag of an unanswered "发票呢？" in a thread turns into a reply that has landed, with two ticks. He should feel that the admin has been answered, and that whoever cut this page handles timing the way he does.
  - Derived from: framing justification (client details and "send the invoice again" requests live in the thread; the turn is the thread resolving into one invoice sent back as an attachment); Designer justification (the drama is waiting for a reply; the invoice is "the reply that finally lands"; the languor is left behind); ICP emotional state (tired, mildly sceptical, respects good motion).
- Tone: second person, low and short, the length of a message. Exact figures and clock times instead of adjectives. Chinese first, in the register he texts in; English as he writes to clients. No exhortation, no "轻松", "一站式", "all in one place". Nothing is said twice.
  - Derived from: framing (message-length text, bilingual by habit); Designer condition 2 (the role of his voice-over goes to on-screen text and timing, and that voice-over gives exact figures); `claude_anti_defaults.md` entry 12 (copy any product could wear; redundant text); owner's Note that the live page repeats itself.

### Theme
- Choice: dark
- Rationale: Jun Hao opens the link at night after an edit, or in a car between locations, coming straight out of a WhatsApp thread. A dark thread with one white sheet laid on it puts the invoice where his eye goes first, because it is the only bright object on the screen. The owner has already compared a light version (version 1) with the dark live page and judged the dark one better looking, and that judgment is binding.
- Derived from: owner's Notes in `inhabited.md` (live page's dark, cinematic colour is the bar; version 1's light amber was "nothing special"); ICP context (night, phone, after an edit); Designer Wong Kar-wai (neon at night, a lit counter in a dark street; one sharp subject held against a dark moving world); framing (the thread at night); `references/seed_night_mail_1936.md` (a band of light against dark country) and `references/domain_card_labels_camera_tape.md` (flat tape colours on a dark object). Converge/diverge rows "Color" (Bukku) and "Page color" and "The invoice as a light sheet" (Invoice-Generator.com) point the same way: dark page, light sheet.

### Aesthetic direction
- Visual register (1 to 2 sentences): A WhatsApp thread at night with a sheet of paper laid over it. Grey and green bubbles, ticks, a voice-note waveform and screenshots of screenshots streak past, step-printed at 12 frames a second, while one white invoice stays perfectly sharp and takes two pen strokes, a stamped record block and strips of camera tape.
- Palette starter (hex values are starting values; none was measured from an image, see the palette note below):
  - `#0B1216` night ground, on `body` and the thread lane. Source: `references/domain_card_labels_camera_tape.md` (flat colours "on a dark object", "on a dark surface") and `references/seed_night_mail_1936.md` (train as a band of light against dark country), tinted toward the dark thread of the framing.
  - `#F5F2E9` paper, on `.invoice-sheet`. Source: `references/seed_crossed_cheque_ac_payee.md` (pale printed leaf) with the competitor borrow "The invoice as a light sheet".
  - `#1E9E4A` tape green, on `.cta-trial`, `.composer-send` and `.wrap-checked`: the colour of what a person commits (approve, send, start). Source: `references/domain_card_labels_camera_tape.md` (green wrap means checked).
  - `#F2C418` tape yellow, on `.tape-label`: the strip that names an object. Source: `references/domain_card_labels_camera_tape.md` (tape label).
  - `#53BDEB` tick blue, on `.ticks[data-state="read"]` and system time stamps on the dark ground: the colour of what answers back. Source: the framing itself ("double ticks"); it is not from a bank anchor and the value is recalled, not measured.
  - Also carried in `borrowings_v1.md`: tape red `#D4262C` and tape blue `#1F5FBF` from the same camera-tape entry, and the neutral bubble, text and ink values.
- Typography spirit: the locked set, in its locked roles. Bricolage Grotesque 800 for Latin headlines with the optical size held at 40 or below so the cut of the letters does not become the subject, beside Noto Sans SC 700. Instrument Sans inside the thread, the product screens and the invoice, with tabular figures for everything the system writes. Kanit 700 italic only on a figure while it is in flight, upright 700 on the one readout that travels with the scrub knob, and nowhere else.
- Anti-references: Bukku's still claim beside a still screenshot, its compliance badge, user count, promotion and module-by-module order (diverge rows); Invoice-Generator.com's blank starting sheet, typing in a dozen fields, download button and long copy under the tool (diverge rows); the live page's pink to violet gradient headline, glass panels, abstract 3D renders, coral eyebrow label above every heading and grid of eight equal cards (`claude_anti_defaults.md` entries 7, 8, 9, 10, 12, 13); version 1's light amber ground, clapper stripes and condensed type; fade-up reveals, the even 0.1 second stagger, a pinned scroll film, pulsing badges and typing dots that run forever (entries 1 to 6); a tidy row of chat bubbles that illustrates a section and drives nothing.
- Derived from: framing idx 37 (thread, bubbles, ticks, voice notes shown only as a visual, screenshots of screenshots); seeds `references/seed_crossed_cheque_ac_payee.md` (pale leaf, pen strokes, tear-off) and `references/seed_night_mail_1936.md` (dark register, one still object against a streak); competitors, by their judgment tables in this file (Bukku: trial and RM prices in the first screen, dark instead of its light surface; Invoice-Generator.com: the invoice itself in the first screen, as a light sheet). The tape colours and the record block come from the two domain anchors and enter through the per-reference log in `borrowings_v1.md`. Palette note: neither seed is chromatic and the second domain anchor is black on white, so the bank's only chromatic source is the camera-tape entry, whose hex values are estimates. How the palette gate is handled is stated in `borrowings_v1.md`.

### Design principles
1. One thing holds still and sharp, and everything messy moves. The invoice never smears, leans or steps. Smear, lean and 12 frames a second belong only to the thread and to things in flight, and they stop the instant the thing lands.
2. Cut or move, never dissolve. Every change of state is a cut on a frame, a translate that stops dead, a scale, a clip wipe or a drawn stroke. Opacity never changes over time anywhere, and that includes hover, focus, pressed, the language switch and the reduced-motion state.
3. The finished frame is the page. Each sequence is designed first as its completed still, and that still is what the stylesheet draws. Motion only plays from an earlier state into it. With reduced motion, a slow script or no script, the visitor gets the finished frame.
4. The thumb is the transport. Scrolling is never taken away, pinned or snapped. A move tied to scrolling is scrubbed by the scroll position and runs backwards. Anything on a clock lasts 420 ms or less, except the one opening sequence (2.4 seconds), which he can replay and shuttle by hand.
5. The first 640 px at 390 wide carry the claim, a real invoice, the trial button and both prices with the 7-day trial. After that each fact from `context/facts.md` appears once, next to the thing that shows it, with times and amounts stated exactly, and nothing depends on sound.
- Derived from: ICP (30 seconds on a 390 px phone; he shuttles footage and judges cuts); framing (found, time-stamped material that resolves into one invoice); locked constraint "No cross-fades" (principle 2 restates it and extends it to every state); Designer voice (two speeds in one frame, hard cuts, exactness, conditions 1 to 4); owner's Notes and the audit of the live page (first-screen trial button and invoice, no repetition); `claude_anti_defaults.md` entries 3, 4 and 5 (principles 3 and 4).

### Notes for the audit (Step 12)
- The per-axis output (10 axes, restricted context per sub-pass), the per-reference log, both competitor tables and the full motion and staging specification are in `borrowings_v1.md`. `framing.md` and `inspiration.md` index the framing and the 7-anchor bank. `claude_designer.md` holds the persona and deliberately contains no page anatomy.
- Bank read gate: met with written entries. Four anchors have a file in `references/`. The Designer anchor and the two competitor anchors have no separate file; their written descriptions are in this file (Designer locked; Competitor VS, judgment tables) and `inspiration.md` points to those sections. No file was added for them at this step.
- Nothing in the sections above was altered by this step.
