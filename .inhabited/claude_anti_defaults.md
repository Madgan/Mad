# Anti-Defaults: Current AI-Design Tells

Generated from web research on 2026-11-16. Re-research if this file is older than 6 months or the project shifts domain.

Project: SIS home page v2 (sistudio.app). Motion, narrative, staging and interaction are this project's main lever, so six of the thirteen entries are motion tells.

## How this was researched (read before trusting any entry)

- 6 web searches were run with the WebSearch tool on 2026-11-16. Queries:
  1. `signs of AI generated web design 2026 tells`
  2. `overused scroll animation patterns landing pages 2026 fade-in on scroll cliché`
  3. `AI slop design patterns landing page vibe coded look`
  4. `AI-generated landing page motion tells: fade-up stagger, whileInView, animated gradient blob, pulsing badge, marquee, "looks AI generated" animation 2026`
  5. `dark mode SaaS landing page clichés 2026 Linear clone glow gradient text bento grid glassmorphism "every SaaS site looks the same"`
  6. `scrollytelling scroll-jacking pinned sections parallax overused 2026 criticism designers Awwwards-style fatigue`
- The network policy here blocks fetching the pages themselves, so every entry rests on what the search results reported about each page, not on a full read of it. Where a result summary did not pin a claim to one URL, the entry says so.
- Most sources are agency blogs, tool vendors and developer posts with a commercial interest. Their statistics (conversion lifts, exit rates, share of Show HN launches) are not relied on here. Only the named patterns are used.
- Things the searches looked for and did not find, so they are NOT listed as tells: gradient text fill on headline words as a named tell, animated gradient blobs, bento grids as a complaint (one vendor recommends them), "Linear clone" as a named complaint, and any 2026 survey ranking scroll patterns. The scroll-jacking critiques found are mostly older (2014 to 2016, plus Nielsen Norman Group); they are kept because 2026 posts still raise the same complaint.

## Sources consulted

Motion and scroll
- https://dev.to/kenimo49/framer-motion-view-transitions-api-4-ui-motion-patterns-that-stop-looking-ai-generated-25gg : developer post. Motion is one of the loudest tells in AI-generated front ends; the default is a fade-in on everything.
- https://www.nngroup.com/articles/scroll-fading-101/ : Nielsen Norman Group. A scroll fade longer than 500 ms is perceived as too slow; some users scroll past elements before they finish fading in.
- https://feedbagel.com/post/critique-of-scroll-fade-animations-in-web-design and https://datadaily.pages.dev/scroll-fade-ux-antipattern : critiques calling scroll fade one of the most ubiquitous patterns on the web; many implementations ignore `prefers-reduced-motion`. (The search summary did not say which of the two made which point. The exit-rate and parallax timing figures on the second are unverified and not used.)
- https://smithery.ai/skills/khaliqgant/creating-landing-pages : a published agent skill for landing pages. Shows the stock recipe: blur-and-translate entrance, children staggered at 0.1 s increments.
- https://eliteaiadvantage.com/blog/create-scroll-animated-websites-ai-no-code : guide to AI-built scroll sites. AI tools default to firing an animation when an element is about 20% visible; its sample prompt asks for a hero headline fade and a gently pulsing button.
- https://eldoraui.vercel.app/blog/animated-landing-pages : component library tutorial that builds a continuously shimmering button into its landing template.
- https://contra.com/p/ZZErel7M-ai-landing-page-studio-concept : an "AI landing page studio" concept that advertises staggered GSAP animations, a pinned section and a horizontal marquee as its feature list.
- https://www.framer.com/blog/website-animation-examples/ : Framer blog. Entrance animations feel tacky when overused.
- https://www.nngroup.com/articles/scrolljacking-101/ : Nielsen Norman Group. With scroll-jacking, going back to the top means scrolling through the animations again; the pattern is defensible only when it does a job, such as progressive disclosure of supporting information.
- https://webdesignerdepot.com/how-scrolljacking-breaks-ux-fundamentals/ : argues against the "it is storytelling" defence: a web page is not a movie.
- https://sarahmchappell.substack.com/p/why-do-all-the-websites-move and https://yomotherboard.com/?p=525062 : current complaints about scroll-jacking, heavy parallax and excessive scroll animation spreading on promotional pages.

Look, layout and copy
- https://www.gigazine.net/gsc_news/en/20260423-design-slop and https://hyper.ai/en/stories/87f7113ad962c94b2b8f9da986afda49 : coverage of an audit of Show HN launches: many share one fingerprint of Inter everywhere, a lavender accent and glassmorphism. (The search summary also credits a Developers Digest teardown; which URL carries which part was not pinned.)
- https://zeli.app/story/49867038 : mirror of the discussion "AI's UI slop is taking over the web, and it's painfully obvious". Names purple gradients, pulsing badges and redundant text.
- https://www.925studios.co/blog/ai-slop-design-tells : agency post. The font and the gradient are the quickest tells; the cause is that the median web design since 2019 is Tailwind's default palette.
- https://news.lavx.hu/article/how-tailwind-became-the-tell-for-llm-generated-slop-apps : models reach for Tailwind by default and use a small set of layout patterns inside it.
- https://instagit.com/Nutlope/hallmark/what-are-the-common-ai-design-patterns-hallmark-aims-to-avoid/ : the ban list of the Hallmark anti-slop tool. Full hero, three equal-width feature cards, call-to-action block, footer; mixed icon sets or emoji used as feature icons.
- https://www.mindstudio.ai/blog/avoid-vibecoded-landing-pages : the same skeleton described as gradient hero, three-column grid, rounded cards.
- https://aismells.pages.dev/gradient-fog.html : a catalogue of AI "smells" with a page titled "Gradient Fog". Only the title was visible in results.
- https://www.saashero.net/design/top-landing-page-design-trends/ : vendor post stating that dark mode with glassmorphism UI is now the design standard for SaaS landing pages. Used as evidence that this skin is the default, not as advice.
- https://merge.rocks/blog/we-reviewed-dozens-of-saas-landing-pages-here-are-the-5-mistakes-we-keep-seeing : agency review. If the headline could work for five competitors without changing a word, it is too generic.
- https://originality.ai/pt/blog/how-to-identify-ai-generated-websites and https://aiwebsitedetector.com/blog/10-signs-ai-landing-page : detector vendors. The results for query 1 reported stock phrases ("Boost Your Workflow", "Streamline Your Experience", "Unlock Productivity"), default section headings ("About Us", "Our Mission", "Why Choose Us", "How It Works") and the point that AI-generated images are easier to spot than text. The summary did not say which of these two pages (or a neighbouring result) carried each point.
- https://adminlte.io/?p=7077 and https://departmentofproduct.substack.com/p/deep-homepage-ux-explored : describe the counter-example: a two-line value proposition with the real product interface directly beneath, and a product demo that works without signing up.
- https://codemyspec.com/blog/vibe-coded-websites-look-the-same and https://noqta.tn/en/blog/ai-design-slop-overused-ui-patterns-fix-2026 : explain the cause: a vague request returns the median of every landing page the model has seen.

## Patterns to avoid

### 1. Fade-up on everything
**Tell:** Every block on the page (headline, paragraph, card, image) enters the same way as it scrolls into view: opacity 0 to 1 with a short upward slide. One animation, applied uniformly, from top of page to footer.
**Why it reads as AI:** It is the animation a model reaches for when asked for "some motion", so it is now the single loudest motion tell; it decorates arrival and says nothing about the product.
**Instead:** Motion should show something happening (a client picked, a rate added, a total changing, a PDF produced). If a block has nothing to show by moving, it stays still. A section that only fades in should count as unanimated.
**Source:** dev.to (Ken Imoto); feedbagel.com / datadaily.pages.dev critiques; framer.com blog.

### 2. The 0.1 second stagger with blur and rise, fired at 20% visible
**Tell:** Lists and card grids where children appear one after another at a fixed 0.1 s step, each with blur plus translate, triggered when the container is roughly 20% inside the viewport. Often sold together with a pinned section and a horizontal marquee as one kit.
**Why it reads as AI:** The delay, the easing and the trigger are library defaults nobody chose; the same numbers appear on thousands of generated pages, and a videographer reads uniform timing as a preset, the way he would spot a stock transition.
**Instead:** Timing is authored per sequence, like an edit: beats of different length, holds, a cut where a cut is right. Order follows meaning (cause before effect), not DOM order. No blur as an entrance garnish.
**Source:** smithery.ai landing-page skill; eliteaiadvantage.com; contra.com concept page.

### 3. Reveals slower than the reader
**Tell:** Entrance animations longer than about 500 ms, or with delays long enough that a normal scroll passes the element before it has finished appearing. On a phone flick the visitor sees half-faded text or empty space.
**Why it reads as AI:** Durations are set for how the animation looks in isolation, not tested against real scrolling; the visitor waits for the page instead of the page keeping up.
**Instead:** Anything the visitor needs to read is readable the moment it is on screen. Long sequences belong to staged pieces the visitor chooses to watch or scrub, never to body text. Test with a fast thumb flick at 390 px.
**Source:** nngroup.com scroll-fading article.

### 4. Content that does not exist until it animates
**Tell:** Text and images sit at opacity 0 until a script fires. With `prefers-reduced-motion` on, with the script slow, or in a screenshot, sections are blank or stuck mid-state. No still version was designed.
**Why it reads as AI:** The animation was generated as the content's only state; nobody designed the frame you see when motion is off.
**Instead:** Design the still frame first: every sequence has a complete, readable resting state that is the default, and motion is added on top of it. Under reduced motion the page shows that frame, with nothing missing. (This is also a hard requirement in the brief.)
**Source:** feedbagel.com / datadaily.pages.dev critiques (many scroll-fade implementations ignore `prefers-reduced-motion`); nngroup.com scroll-fading article.

### 5. The scroll-jacked "film"
**Tell:** Sections that pin and take over the scroll wheel or thumb so a fixed animation plays out over several screens of scrolling; heavy parallax layers; getting back to the top or to pricing means scrolling back through all of it.
**Why it reads as AI:** It is "cinematic" by formula: the storytelling defence is used to justify motion the visitor cannot skip, and it lengthens a page that is already too long (the live page is about 10,500 px on a phone).
**Instead:** The visitor's thumb stays in charge. A staged or pinned piece is allowed only where each step discloses real product information (Nielsen Norman Group's one accepted use), it is short, it can be skipped and reversed, and the trial button and pricing never sit behind it. Prefer direct manipulation (tap, drag, scrub) to hijacked scroll.
**Source:** nngroup.com scroll-jacking article; webdesignerdepot.com; sarahmchappell.substack.com; yomotherboard.com.

### 6. Ambient attention loops
**Tell:** Things that move forever for no reason: a pulsing dot inside a pill badge above the headline, a shimmer sweeping across the main button on a loop, a button that gently pulses.
**Why it reads as AI:** They come bundled in component libraries and in the prompts people paste, so they appear by default; the loop signals "alive" without anything actually happening.
**Instead:** Nothing loops unless it reports a real state (recording, generating, saving). The main button earns attention through placement and contrast. A looping element must stop on its own or on interaction.
**Source:** zeli.app discussion (pulsing badges); eliteaiadvantage.com (pulsing button in sample prompt); eldoraui.vercel.app (shimmer button in template).

### 7. Inter everywhere with a lavender accent
**Tell:** One neutral grotesque (Inter or a near twin) for every level of text, tight tracking on large headings, and a single lavender or violet accent colour.
**Why it reads as AI:** It is the measured fingerprint of vibe-coded launches: font and accent are the two fastest tells.
**Instead:** Type and accent come from the sampled typography step and the videographer's own world (slates, timecode, monitors, invoices), not from the default. The owner has said colour and type are not where effort goes, so the bar is simply: not this fingerprint.
**Source:** gigazine.net / hyper.ai coverage of the Show HN audit; 925studios.co.

### 8. Purple gradient as the sign of "premium"
**Tell:** A pink to purple or violet to blue gradient used as the page's signature: in the hero background, as soft coloured fog behind cards, or across the accent.
**Why it reads as AI:** Purple gradients are the most cited single colour tell; they are the average of the last several years of SaaS pages.
**Instead:** If light or colour moves on this page it should behave like something the visitor knows from work (exposure, a monitor in a dark room, a tally light), and be tied to an event, not laid on as atmosphere.
**Source:** zeli.app discussion; mindstudio.ai; 925studios.co; aismells.pages.dev ("Gradient Fog", title only).

### 9. Dark glass panels as the default skin
**Tell:** Near-black page, content in translucent rounded panels with a 1 px light border, soft glow behind them, panel inside panel inside panel.
**Why it reads as AI:** Vendors now describe dark mode plus glassmorphism as the SaaS standard, and glassmorphism is part of the audited vibe-coded fingerprint. The brief's visitor "has seen plenty of dark, glossy SaaS pages and scrolls past them".
**Instead:** Dark is allowed (the owner prefers the live page's colours), but surfaces should be things, not glass: the invoice is paper, the product is the product UI. Depth comes from staging and what is in front of what, not from blur and borders.
**Source:** saashero.net; gigazine.net / hyper.ai coverage of the Show HN audit.

### 10. Hero, equal cards, call-to-action block, footer
**Tell:** The page skeleton: full-height centred hero, then a grid of equal-width rounded feature cards (three across, or the same idea at four by two), each with a small icon on top, a title and two lines of text, then a centred closing block with one button, then the footer. Icons drawn from mixed sets or emoji.
**Why it reads as AI:** It is the median landing page; any product could be dropped into it, and every card has the same weight so nothing is said about what matters.
**Instead:** Structure follows the one story (pick a client, pick a rate, done). Features appear where they happen in that story, at unequal sizes, and a feature with nothing to show gets a line of text, not a card.
**Source:** Hallmark ban list (instagit.com); mindstudio.ai; codemyspec.com / noqta.tn on the cause.

### 11. Tailwind defaults left untouched
**Tell:** Colours, radii, shadows and spacing straight from a framework's default scale, combined in the small set of layout patterns models use inside it.
**Why it reads as AI:** The default palette is the statistical middle of web design since 2019, and models reach for it unprompted.
**Instead:** This page is one hand-written HTML file. Every colour, radius and spacing value should trace to the sampled inputs in `sampling.md`, and none should be a framework default.
**Source:** news.lavx.hu; 925studios.co.

### 12. Copy any product could wear
**Tell:** Headlines built from "boost", "streamline", "unlock", "all in one place", "everything you need"; sections named "How It Works", "Why Choose Us"; a small uppercase label above every heading; the same point restated in several sections.
**Why it reads as AI:** Test: if the headline works for five competitors without changing a word, it is generic. Redundant text is a named tell.
**Instead:** Say the concrete thing in the visitor's own words ("pick a client, pick a rate, done"), name his real objects (Word file, WhatsApp chats, PDF folders), and say each thing once.
**Source:** merge.rocks; zeli.app discussion (redundant text); stock phrases and default headings as reported in query 1 results (originality.ai / aiwebsitedetector.com, exact page not pinned).

### 13. Generated atmosphere where the product should be
**Tell:** The hero and feature panels show abstract rendered objects (glass shapes, floating papers, glowing capsules, light trails) and the actual product or its output never appears.
**Why it reads as AI:** Generated images are easier to spot than generated text, and they are interchangeable between products; the pages people hold up as good do the opposite and put the real interface directly under a two-line promise, usable without signing up.
**Instead:** The thing on screen is the product: a real invoice being made from sample data, built in code, which the visitor can operate. This is already a rule in the brief (no AI-generated images; show the product) and it is the live page's weakness 3.
**Source:** query 1 results (AI images easier to spot than text; exact page not pinned, see Sources); adminlte.io and departmentofproduct.substack.com for the counter-example.

## Where the two existing pages match these entries

Checked against the captures in `context/`. Stills cannot show motion, so entries 1 to 6 could not be confirmed or ruled out for the live page from the captures; whoever inspects the live page in a browser should check them.

Live page (`live-desktop-0.jpg` to `live-desktop-4.jpg`)
- Entry 7: one Inter-like grotesque at every level with tight tracking; the accent on headline phrases runs pink to lavender.
- Entry 8: pink to lavender to blue gradient on "clears the admin out of your way", "with your" and "More work worth remembering"; coloured fog behind the cards in the "Less searching" and pricing sections. (Gradient text fill itself was not named by any source; the purple gradient and the fog were.)
- Entry 9: near-black page, translucent bordered rounded panels throughout, panels nested in panels (tabs card, AI card, pricing).
- Entry 10: centred hero; a four by two grid of eight equal feature cards, each with an icon in a tinted square, title and two lines; a centred closing block with a logo chip, headline and one button; footer.
- Entry 12: nav item "How it works"; "Everything daily invoicing needs, in one place."; "Invoices, clients and reports. All connected."; a small uppercase coral label above every section heading; AI reading old files stated four times and bring-your-own-AI twice (our own audit).
- Entry 13: abstract 3D renders (glass aperture over papers and light trails, files flying into a rack, glowing capsule and sphere) and no view of the product or an invoice (audit weakness 3).
- Entry 6, possible: the pill badge above the headline has a red dot of the kind that usually pulses. Not confirmable from a still.

Version 1 (`v1-hero-light-zh_dark-en.jpg`)
- The research does not catch version 1 on look: it has no Inter and lavender fingerprint, no purple gradient, no glass panels, no generated imagery, and its headline is specific to the product.
- Its failure is the owner's verdict ("nothing special": static sections, one small demo), which is an absence of presentation, not a researched tell. The relevant warning for version 2 is the reverse of entries 1 to 6: do not answer "too static" by adding fade-ups, staggers, loops or a scroll-jacked film, because those are the motions that now read as generated.
