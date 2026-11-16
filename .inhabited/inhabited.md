# Inhabited design context — SIS home page (sistudio.app)

> Stable per-project context. Sampling is fresh per session; this file is not.

## App X
- **What is being designed**: the public home page of SIS (sistudio.app), version 2. One page. Not the signed-in app.
- **Purpose** (one sentence): Show a Malaysian videographer or photographer, in under a minute, that SIS turns invoicing into "pick a client, pick a rate, done", and get them to start the 7-day free trial.
- **What SIS is**: an invoicing and records SaaS for freelance videographers, photographers and small studios in Malaysia. Clients, rate card, invoices with PDF, project records, monthly reports with CSV export, AI that reads old invoices into a client list (the owner approves before anything is saved), and on Pro a connection to the owner's own AI through API / MCP.
- **The single most important user moment**: A peer sends the link in WhatsApp or on Instagram. The visitor opens it on a phone, between other things, and decides within about 30 seconds whether this is worth trying.
- **Out-of-scope guardrails**:
  - No feature, number or claim that is not on the live page today. Facts allowed are listed in `context/facts.md`.
  - Prices are exactly: 7-day free trial, Basic RM 199 / year, Pro RM 399 / year.
  - Every studio, client, rate and figure shown in a mock screen is fictional and labelled as sample data.
  - No testimonials, logos, user counts or statistics (none exist yet).
  - No stock photos and no AI-generated images of people. Visuals are built in code (CSS, SVG, canvas, WebGL) or are product UI.
  - Do not redesign the signed-in app, the sign-up flow, or the legal pages. Links go to the existing routes.
  - No long dash characters anywhere in copy.

## ICP
- **Identity**: Jun Hao, 31, freelance videographer in the Klang Valley. Shoots corporate events on weekdays and weddings on weekends, usually alone, hires one or two freelancers for bigger jobs. Edits his own footage. Mandarin first, English for clients, Malay when needed. He is the admin department. (He stands in for three overlapping visitors the owner named: the solo shooter, the owner of a 2 to 5 person studio, and the wedding or event photographer.)
- **Context**: On his phone, usually at night after an edit or in a car between locations. His invoices are last month's Word file edited by hand, client details live in WhatsApp chats, PDFs are in folders by date. He has seen plenty of dark, glossy SaaS pages and scrolls past them.
- **Emotional state at moment of use**: Tired, mildly sceptical, curious because a peer sent it. He judges craft instantly: he makes moving images for a living, so cheap or generic motion reads as amateur, and good motion earns respect.
- **What success looks like for him**: He understands what the tool does without reading paragraphs, sees what an invoice from it looks like, believes it was made by someone who does his job, and taps "start free trial".

## Accessibility
- **WCAG level**: AA.
- **Specific user needs**: Phone first (390 px wide). Nothing may depend on sound: the owner is deaf in one ear and treats captions and visual cues as essential.
- **Reduced motion / color blindness**: Every animated sequence must have a complete, readable still state under `prefers-reduced-motion`. State is never carried by colour alone.

## Scoring rubric

Fixed at the 7 defaults (Usability, Flare, Personality, Visual Design, Originality, Visual Impressiveness, Wow Factor). No per-project modifications.

## Notes

Owner's direction for this version, in his words (binding, overrides any sampled input that conflicts):
- Version 1 (`sis-web/landing-v1.html`, light amber, static sections, one small interactive invoice demo) "is nothing special".
- The live page "has animation, and its colours and fonts look better". The live page is dark and cinematic. Captures are in `context/`.
- The goal of version 2 is to surpass the live page.
- "The main thing is the way it is presented, not the fonts and colours." So the lever is presentation: motion, narrative, staging, interaction. Colour and type should be at least as good as the live page but are not where the effort goes.

Known weaknesses of the live page (from our own audit), which version 2 must fix while beating it on presentation:
1. No trial button in the first screen; the first sign-up button is at the bottom in pricing.
2. Hero text sits on top of the image and is hard to read; the second button is nearly invisible.
3. No real view of the product or of an invoice anywhere; only abstract 3D renders.
4. Repetition: AI reading old files appears four times, bring-your-own-AI twice. About 8,700 px tall on desktop, 10,500 px on phone.
5. One card shows eight empty squares with text overlapping.

Delivery constraints:
- Output is one self-contained HTML file, Chinese by default with an English toggle.
- It will be published as a claude.ai artifact, whose content policy allows scripts only from cdnjs.cloudflare.com, cdn.jsdelivr.net/npm, unpkg.com (exact pinned versions), fonts only from Google Fonts, and no other external requests. Images must be inline SVG, canvas, or data URIs.
- Build environment network: only sistudio.app and package registries (npm, PyPI) are reachable. Google Fonts cannot be fetched here, so for local screenshots install the same family from npm `@fontsource/*` and point a local-only @font-face at it. Reference images from the open web cannot be downloaded; inspiration-bank entries are written descriptions with their source URL.

---

Last updated: 2026-11-16
