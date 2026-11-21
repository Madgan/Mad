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
