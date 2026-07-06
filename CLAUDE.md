# Virginia Martínez — Portfolio

## Project Overview

Personal portfolio for Virginia Martínez, Digital Product Designer based in Saint-Malo, France. In active job search. The site must be polished and shippable, not perfect.

**Primary goals**
- Communicate her real differential: Product Designer with front-end fluency.
- Showcase 4 selected case studies (quality over quantity).
- Be sendable to recruiters in EN and FR.

**Avoid**
- Generic hero patterns like "Hi, I'm X, I design Y".
- Positioning her as a designer-plus-developer hybrid.
- Adding new product features. The job is to polish, not expand.
- Perfectionism that blocks shipping.

**Stack**
- Vite + React 19, React Router 7
- Tailwind 3 + CSS variables as design tokens (`src/styles/variables.css`)
- i18next EN/FR, JSON files in `public/locales/{en,fr}/translation.json`
- lucide-react icons via `src/components/Icon.jsx`

## Hard Rules

- Never change the "Results & Impact" section of the Design System case study.
- Use existing Tailwind token classes only: `bg-background`, `text-textDark`, `text-textMuted`, `border-divider`, `bg-primary`, `text-link`, `accent-*`. Never hardcode hex values.
- Never invent content. Reuse existing data files (`src/data/*.{en,fr}.js`) and i18n keys.
- Always update both EN and FR translations when adding or editing user-facing text.
- Never position Virginia as "designer who also codes". She is a Product Designer; front-end fluency is an advantage in that role, not a separate role on offer.
- After any change: run `npm run build` and `npm run lint`. Report results.
- Keep changes small, reversible, and grouped in logical chunks.
- No inline styles unless strictly necessary.
- No new dependencies without explicit approval.

## Preferences

- Prefer extracting small reusable components over duplicating JSX.
- Prefer editorial and minimal aesthetics over decorative or generic SaaS.
- Prefer showing visual mockups before applying significant design changes.
- Prefer closing decisions over reopening them. Virginia has decision fatigue; the goal is shipping.
- Prefer Castilian Spanish (español de España) in conversation. Code, comments and the site itself stay in English/French.

## Anti-Patterns

- Never propose hero layouts with "Hi, I'm Virginia" as the main headline.
- Never suggest a split hero with "I design / and I build" framing — it sells her as a designer-plus-developer, which she explicitly rejects.
- Never use circular avatars that crop her photo at the shoulders.
- Never use `lorem ipsum` or placeholder copy. Use her real content from CV and data files.
- Never refactor unrelated files when fixing one specific thing.
- Never bury her differential — it must be visible above the fold.
- Never use the Tailwind class `w-45` (it does not exist). Use `w-44` or `w-48`.

## Success Criteria

A good change:
- Compiles green with `npm run build`.
- Passes `npm run lint` without introducing new warnings.
- Looks intentional, not "starter template".
- Communicates Virginia's positioning as Product Designer with technical fluency, never as dev-plus-designer hybrid.
- Works equally well in EN and FR.
- Meets WCAG 2.1 AA: contrast, alt text, semantic markup, keyboard navigation.
- Reduces, not increases, perceived complexity for a recruiter scanning the page.

## Decisions Already Closed

Do not reopen these unless Virginia explicitly says so.

- **v2 (current branch `redesign-v2-editorial`)**: Editorial redesign using Claude Design's handoff as visual reference. Stays on Vite + React + Tailwind v3 — NO migration to Next.js or Astro. Tokens, fonts and palette adopted from the handoff (see Editorial system below).
- **Editorial system**: Active palette `rosso` (cool white + editorial red accent). Three alt palettes available via `<html data-palette="bone|moss|ink">`. Display font `Instrument Serif` (Google Fonts), body sans `Söhne` with fallback chain (`Helvetica Neue` → `Inter` → `system-ui`), mono `JetBrains Mono`. Use accent extremely sparingly — only for hero italic word, hovered project rows, link underlines, case-study `→` arrows.
- **Tailwind tokens**: v2 names = `bg`, `fg`, `fgSoft`, `mute`, `line`, `lineSoft`, `accent`, `accentInk`, `paper`. Legacy names (`textDark`, `textMuted`, `divider`, `primary`, `link`, `background`) still work via CSS var aliases — DO NOT use them in new code, use the v2 names. Old aliases retire as components get rewritten.
- **Stack**: Tailwind v3, not v4. `@tailwindcss/postcss` removed from devDeps.
- **Hero copy**: Tagline closed → "I design B2B digital products that ship clean. Design systems specialist with a deep understanding of what front-end can deliver." (EN) and the parallel FR version. Voice is sober, editorial. Never include "I can build them" or any dev-positioning phrasing.
- **Hero layout**: Quiet minimal with editorial photo. Asymmetric grid: left = name + role + statement + availability + three underline links (View work, Download CV, Email); right = vertical portrait photo (`w-64 h-80`, `object-top`). No badge, no buttons, no circular avatar.
- **Hero background**: Dot pattern only on solid `var(--color-bg)`. The AVIF gradient (`bg_01.avif`) is OUT. Do not bring it back.
- **Navigation (v2.4.2 final)**: Side-index editorial RETIRED. Reason: in 13" laptops it overlaps content and the compact-with-tooltip mode adds cognitive load that hurts a recruiter scanning quickly. Replaced by a standard pattern: primary nav in the fixed topbar (`Work · About · Experience · Education · Contact`) with `IntersectionObserver` tracking the active section, underline accent fades in on the current item. On `<920px` the nav collapses into a hamburger button that opens a full-screen overlay with the same sections in display serif. Esc and click-outside close the overlay. Body scroll locked while open. Component: `src/components/layout/Header.jsx`. `SideIndex.jsx` deleted.
- **Topbar left slot**: Always shows `Virginia Martínez` (link to #cover) + role label `Product Designer` at all breakpoints — including mobile. The `<span>` with `{t("topbar.role")}` is never hidden. Do not add `display: none` on `.topbar .left span` at any breakpoint.
- **CV download path**: `/Virginia_Martinez_CV.pdf` in `public/`. The CV button lives in the Hero (after HeroFoot, before the marquee) styled `.hero-cv` — NOT in the topbar.
- **Hero — Portrait Chrome (handoff Rosso, treatment "original")**: The portrait is a transparent-cutout PNG (`src/assets/images/portrait.png`) on a `--paper` figure background. Editorial chrome printed directly on the card: `VOL. 02 · MMXXVI` (top-left), `№ 002` (top-right), `● WORKING` accent pulse below the issue, a hairline caption line `SAINT-MALO, FR · PRODUCT DESIGN` (i18n `hero.portrait.caption`), then `PLATE 01` / `SELF-PORTRAIT, 2026`. NO gradient overlays, NO stripes, NO VM silhouette placeholder — those were earlier iterations and are removed.
- **Hero dot-pattern background**: Soft radial-dot grid behind hero content via `.hero::before`, faded on left/right AND bottom (two masks with `mask-composite: intersect`) so dots never sit behind the marquee. Tunable through CSS vars in `:root` (`--hero-dot-size/gap/opacity/fade/fade-bottom`). Live tuner panel `HeroDotControls.jsx` shows when URL has `?dots` — dev-only, remove before final ship once values are locked.
- **Hero responsive (three stages)**: >920px desktop — `.hero` es CSS Grid con `grid-template-areas`; manifesto en área `body` (izquierda), portrait en área `portrait` (derecha, spanning body+foot rows), hero-foot en área `foot` (3 cols). 621–920px tablet — `body` ocupa las dos columnas (headline full-width), `foot` (col izquierda, 1 col interna) y `portrait` (col derecha) comparten la fila inferior; manifesto encoge a `clamp(40px,7vw,88px)`. ≤620px mobile — columna única, portrait centrado (`max-width:300px`) entre headline y hero-foot. `portrait-wrap` es hijo directo de `.hero`, NO de `.hero-body`.
- **Section vertical rhythm**: All home sections (`.editorial-section` + `.contact-section`) share one symmetric padding `clamp(52px, 8vw, 90px)` top and bottom — one rule covers desktop and mobile (no separate media query). Contact has both classes and inherits it.
- **Lang toggle**: minimal `EN · FR` in the topbar — no pill background. Active = `--fg` + accent underline (1px, offset 4px). Inactive = `--mute`. `·` separator is decorative.
- **Case study route**: `/case/staff-and-go` (full editorial case). Old `/case-studies/design-system` route REMOVED. `DesignSystem.jsx` v1 + `designSystem.{en,fr}.js` DELETED in the 2026-07 cleanup pass.
- **Two-layer case study**: editorial chrome uses portfolio palette tokens; `.plate` blocks use Staff & Go's own product palette (`--sg-*` in `sg.css`, scoped to `.case-plate, .case-snap`). Roboto for product skin. Do not mix the two layers.
- **Four case studies (CLOSED 2026-06)**: the portfolio ships with exactly four full, clickable editorial cases, in this home / `OtherCases` order: (1) Staff & Go — Design System `/case/staff-and-go`, (2) Fiche salarié — Staff & Go `/case/fiche-salarie`, (3) Hawi · Akimad `/case/hawi`, (4) Gazella · Akimad `/case/gazella`. Topbar counts are `01–04 of 04` (i18n `case.topbar.of/ficheOf/hawiOf/gazellaOf`). The two recent Staff & Go cases lead; the two Akimad cases follow. Power Electronics and Optiva Media were REMOVED from the cases list and from `selectedWork.{en,fr}.js` (no case content); Virginia's full history still lives in the Experience section. Do not reintroduce them as cases.
- **Case selection rationale (don't reopen)**: the four were chosen by competency, not recency. Seetyz, The Foodie Club (a full-stack master's *dev* project — keep out, it reactivates the dev-hybrid positioning), Power Electronics and Optiva (dev roles, no material) were considered and rejected. Gazella kept for product-thinking + monetization; Fiche salarié added as the recent B2B redesign that diversifies the set.
- **Case study 02 — Fiche salarié (Staff & Go redesign)**: Route `/case/fiche-salarie`, page `src/pages/CaseFiche.jsx`. Skin `src/styles/fiche.css`. Components in `src/components/fiche/`: FicheHero, BeforeAfter. Reuses `ScrollPhone` (from `components/gazella/`). Images in `public/case/fiche-salarie/` (before-record, after-record, after-mobile). Translations `case.fiche.*` EN+FR. Story: a dense employee record → legible, sectioned redesign; the before→after is the centrepiece. NDA: real product screens are ANONYMISED — browser chrome + macOS dock cropped out; real establishment/client names (e.g. SOFIB, "LE BINIOU…") blurred; test-employee data kept (name/photo are fictitious). Foot marks "NDA · screens anonymised". Source material lives in `~/Downloads/staff and go ficha/`.
- **Case study 03 — Hawi (REWORKED 2026-06)**: Route `/case/hawi`, page `src/pages/CaseHawi.jsx`, skin `src/styles/hawi.css` (`--hw-*`). Components in `src/components/hawi/`. Visuals now use REAL exported artefacts, not CSS redraws: `ProcessThree` shows three cropped real frames (`hawi-stage-{sketch,blockframe,wireframe}.png`, cropped to drop the original "lorem ipsum" captions); the page renders the real workshop photo (small + desaturated for privacy), flow map and brand-discovery board via `.artifact` blocks (reusing the previously-dormant `case.hawi.plates.*` keys). `ActorCards` was reframed from four invented named personas to honest role archetypes (the elder / family carer / coordinator / ohana) — never present invented people as real research subjects. FR `case.hawi.brandKit.*` was added (was EN-only). Closing chapter `04 · Epilogue` added 2026-07 ("The handover, and what stayed.", keys `case.hawi.epilogue.*` EN+FR): the agency handed the client a complete brand book (scope modelled on Slack's) + the Figma prototype; the client went to pitch investors; no follow-up, Virginia doesn't know if it was built (honest framing). Personal takeaway: designing against her own bias, "not designing for me". Facts confirmed by Virginia 2026-07-06.
- **Case study 04 — Gazella (Akimad)**: Route `/case/gazella`, page `src/pages/CaseGazella.jsx`. Skin `src/styles/gazella.css` (`--gz-*`). Components in `src/components/gazella/`: GazellaHero, ScreenStrip, ScrollPhone. Images in `public/case/gazella/`. Translations `case.gazella.*` EN+FR. Screenshot-driven (real exports). The full recipe renders in `ScrollPhone` — a phone bezel whose screen scrolls vertically like a prototype (reusable for any long screenshot). Honest framing: Virginia joined an existing product and led two areas (editable cycle calendar + premium nutrition, incl. her shopping-list-from-ingredients idea) and voiced doubt about the premium bet (a client mandate). OPEN: a white-label / theming block (Original / Oysho / Santander brand skins) is DEFERRED until Virginia exports the three home screens flat — third-party brand marks must be neutralised; the pitch was speculative, never adopted by those brands.
- **Shared case components**: `Chapter`, `StatsRow`, `CaseTopbar`, `OtherCases` (accepts `exclude`), `BackFoot` (accepts `mid`) live in `components/case/`. `ScrollPhone` (`components/gazella/`) and `DeviceFrame` (`components/hawi/`) are cross-case reusable. `OtherCases` `CASES` array + `case.other.*` keys list all four cases; its title is count-agnostic ("More work, / in brief.").
- **Legacy stubs**: `src/pages/case-studies/UXResearch.jsx`, `flows.jsx`, `pages/Contact.jsx` and their routes DELETED in the 2026-07 cleanup pass. Unknown routes fall through to Home via the catch-all.
- **Site languages**: English and French only. Spanish is only used in our conversation, not on the site.
- **Files removed**: `src/App.css` and `src/pages/TestPage.jsx` were deleted. Do not reference them.
- **Case hero — product visual (CLOSED 2026-06)**: every case hero shows a visual to the RIGHT of the big title, via a shared two-column layout (`.case-hero__cols` + `.case-hero__lead` in `case.css`; meta strip stays full-width above, the definition/insight block stays full-width below; stacks ≤860px to title → subtitle → visual → block). Per-case visual (chosen to NOT duplicate anything already in the page body): Hawi → the ohana brand illustration `hawi-cover.png` (figure `.case-hero__visual--art`, no frame); Gazella → the "¡Hola Sofía!" home screen `gz-home.png` in a `DeviceFrame` (the chat hi-fi stays only in `MockupStage`); Fiche salarié → `FicheRecordCard` (REPLACED the invented diagram 2026-07: the redesigned record rebuilt in code with the SG product skin — header + status chips + section tabs + clean fields, NIR masked; fictitious "Camille Bernard"; `.ff-card` added to the sg.css var scope; i18n `case.fiche.heroCard.*`, old `heroDiagram.*` keys and `FicheHeroVisual.jsx` deleted; same "built from the product" language as the SG hero); Staff & Go → `SgReviewsTable` (a real product table: Participant / Statut / Date, with coloured avatars + `SgChip` status, framed "built from the system" — replicated from a Claude Design proposal Virginia approved; replaced the earlier `SgFoundations` swatch card, now DELETED). New i18n: `case.hawi.heroVisualCap/Alt`, `case.gazella.heroVisualCap/Alt`, `case.fiche.heroDiagram.*`, `case.hero.kit.*` (label/product/built/cols/caption/aria, all EN+FR). `DeviceFrame` reused cross-case. `Frame 7/8.png` Gazella exports were rejected (lorem ipsum). `gz-cal-home.png` now unused (free for reuse).
- **Hawi research numbers (CLOSED 2026-06)**: Virginia confirmed "4 workshops · 12 interviews" were APPROXIMATE, so the copy was softened to remove hard counts. `case.hawi.stats` now reads `3 Actor roles · 3 Groups engaged · 6 mo · ES·EN·FR`; `research.left` and `ohanaFlow` step 02 no longer state session/interview counts (EN+FR). Madrid, the three groups, ages 68–82 and the 6-month timeline were kept. Do not reintroduce the counts.
- **Staff & Go — Documentation chapter (CLOSED 2026-06)**: the case undervalued the documentation/usage-guidance work, so a new chapter `03 · Documentation` ("A system you can read, not just look at.") was inserted between Approach and Engineering; Engineering renumbered to `04`, Outcomes to `05` (EN+FR `num`). It shows TWO things: (1) `DocPlate` (`components/case/plates/DocPlate.jsx`) — a recreated doc entry built from the live SG components (intro · states & variants · do/don't · specs), scoped `.doc-entry` in `sg.css`; (2) a real exported doc page `public/case/staff-and-go/sg-doc-buttons.svg` (Virginia's own 2400×1350 composition: Intro + Button Colors guidance + Color Primary/Error type × state × size matrices; vector/outlined text so it stays crisp; NDA-safe, generic labels — replaced an earlier blurry PNG) in a `.case-artifact` figure (`.doc-shot__img`). New i18n: `case.documentation.*`, `case.docPlate.*`, `case.docShot.*`, `case.plates.{tag,cap,meta}.doc` (all EN+FR). Source material: `~/Downloads/staff&go design system/` (per-component doc PNGs + `design system components.fig`).
- **Accessibility (WCAG 2.1 AA pass, 2026-06)**: audited at code level, see `docs/accessibility-audit-2026-06-22.md`. Fixes shipped: `--mute` darkened in `rosso` to `oklch(0.53 0.01 260)` (≥4.5:1 — do NOT lighten it back); `i18n.js` syncs `<html lang>` on `languageChanged`; mobile overlay gets `inert={!menuOpen}`; skip-link → focusable `#main` in `MainLayout`; nested `<main>` removed from the 4 case pages (now `<div className="wrap">`, the only `<main>` is in `MainLayout`). Hairline `--line` (1.4:1) left as decorative/exempt on purpose.
- **Header only on home (CLOSED 2026-07)**: `MainLayout` does NOT render `Header` on `/case/*` (`useLocation().pathname.startsWith("/case")`) — it used to stack two fixed 56px bars and cover the lang toggle. `CaseTopbar` now carries its own minimal `EN · FR` toggle (same `.lang-pill` styles) in a `.right` flex cell next to Contact. Verified live at 1440/390.
- **⌘K easter egg REMOVED (2026-07)**: the colophon promised "Press ⌘K to open the console" but no console exists. Line deleted from `Contact.jsx` + `contactSection.colophon.egg` removed EN+FR. Do not reintroduce without building the console.
- **HeroDotControls removed from Home (2026-07)**: dot-pattern values are locked; the `?dots` tuner and its component were deleted per the original plan.
- **Portrait caption scrim (2026-07)**: `.portrait .caption` gets a translucent `--paper` scrim (`color-mix` 86% + `backdrop-filter: blur(6px)`, same language as the topbar) because the cover-crop puts the red shirt behind the printed chrome below ~1100px, making it illegible. Chrome stays "printed on the card" (decision respected); do not remove the scrim without re-checking 390–1100px.
- **NDA — Fiche salarié screenshots anonymised further (CLOSED 2026-07)**: full NIR, mobile number and postal address are now blurred in `before-record`, `after-record` and `after-mobile` (same gaussian treatment as the establishment names); browser-tab remnants cropped from `before-record` top. Names/photos stay (fictitious, earlier decision). Birth date/place left visible on purpose — blur them too only if Virginia asks.
- **SEO shipped (2026-07)**: `index.html` has full title/description/canonical/hreflang (en, fr, x-default)/OG/Twitter markup pointing at `https://virginiak.dev`; `public/robots.txt` + `public/sitemap.xml` (5 URLs); OG image `public/images/og-cover.png` (1200×630, rosso palette, Lora as Instrument Serif stand-in, real portrait). If the final domain differs, update index.html, robots.txt and sitemap.xml together.
- **Image pipeline (2026-07)**: hero portrait is `src/assets/images/portrait.webp` (1359×1200, 120K — the 2.8MB PNG is gone); the heavy case exports (hawi flowmap / brand-discovery / chat-hifi, gazella recipe-full / recetario / premium) are WebP now — update the `.webp` paths if re-exporting. All case `<img>` get `loading="lazy" decoding="async"`; `DeviceFrame` takes a `loading` prop (default lazy, `eager` passed in GazellaHero). `sg-doc-buttons.svg` path precision reduced to 1 decimal (1.55MB, ~0.5MB gzipped) — still crisp, verified live.
- **Cleanup pass DONE (2026-07)**: deleted v1 (`DesignSystem.jsx` + folder, `designSystem/caseStudies/testimonials.{en,fr}.js`, `flows.jsx`, `UXResearch.jsx` + routes), dead home components (`CaseStudies`, `Testimonials`, `ContactSection`, `Footer`, `HeroDotControls`), `pages/Contact.jsx` stub + `/contact` route, `onThisPage.jsx` + `useScrollSpy.js`, vendored `react-bits/` + `dot-grid/profile-card/testimonials/hero.css`, lottie assets, ~30 dead images (`bg_07.png` KEPT — used by `education.css`; `gz-cal-home.png` KEPT — reserved for white-label). Deps removed: `react-bits` (github clone, never imported), `lottie-react`. i18n blocks removed EN+FR: `header.*`, `contact.*`, `footer.*`, `projects.*` + FR-only `case.hawi.brand.*`. The retired Side Index CSS block in `editorial.css` is gone too (it had a broken comment that half-activated it and broke esbuild's CSS minify warning-free build).
- **Proofread FR (CLOSED 2026-07)**: role naming unified — "Designeuse Produit" (fiche, hero, sg) and "Designeuse UX/UI" (hawi, gazella); "le plus difficile à trouver" → "à mettre au point" (hawi); "AI + UI" → "archi de l'info + UI"; deviceLabels use "Localisateur"; fiche foot uses "Walkthrough sur demande". EN+FR `work.kicker` = "Four case studies · 2019 — 2024" (the cases are clickable, "on request" contradicted it).
- **Copy naturalisation pass (CLOSED 2026-07)**: 16 prose blocks rewritten EN+FR in parallel to remove generated-text tells — the repeated "not X — it's Y" pivots, perfect triads, spare aphorisms ("quiet superpower", "The point was never to win a Figma file", "a small, daily kind of useful") and em-dash overload — while keeping every fact, the sober editorial voice, and one strong line per case ("The fix was architecture, not paint", "Bodies aren't clockwork" kept on purpose). ALL apostrophes normalised to typographic ’ in both locale files (0 straight quotes left). Hero h1/tagline untouched (closed). Keys touched: about.bio.line2, about.meta.fluencyV, case.{context.rightBottom, approach.rightBottom, engineering.rightTop, documentation.left/rightTop}, case.hawi.{context.left, research.rightTop, mockup.body}, case.gazella.{nutrition.rightBottom, callout.body, reflection.rightTop}, case.fiche.{context.rightTop, problem.left, outcome.rightTop}. Data files (experiences/education CV bullets) reviewed and left as-is — CV register is expected there.
- **Build verified green (2026-07-06)**: `npm run build` 1.87s on the Mac, lint 0 errors / 0 warnings (the old `DesignSystem.jsx` warning died with the file). Full live QA passed: 1440/1024/768/390, 4 case heros, Documentation chapter, mobile overlay (Esc/scroll-lock/focus), 404 redirect, CV download, console clean, FR toggle on case pages.
- **OtherCases + scroll reset (CLOSED 2026-07)**: every case page passes `exclude` to `OtherCases` (Staff & Go was missing it and listed itself). New `src/components/layout/ScrollToTop.jsx` (mounted in `MainLayout`) resets scroll to top on every route change and honours URL hashes (`/#contact` from `CaseTopbar` now lands on the section, offset 80px). IMPORTANT: it must use `behavior: "instant"` — the global `scroll-behavior: smooth` otherwise animates the reset and the new route's mount cancels the animation, leaving the user mid-page. Verified live (case → case lands on the hero; Contact lands on §06).
- **Case topbar/foot labels swapped + unified (CLOSED 2026-07)**: the sticky `CaseTopbar` mid shows the case identity following ONE rule — "Case · project name · product type": `Case · Design System · B2B SaaS`, `Case · Fiche salarié · B2B SaaS`, `Case · Hawi · Mobile app`, `Case · Gazella · FemTech` (FR: "Cas · …", "SaaS B2B", "App mobile"). Keys `case.topbar.{sg,fiche,hawi,gazella}{Mid,Short}`. The decorative numbering ("Case study · 0X of 04", `case.topbar.*Of`) lives in `BackFoot`. Responsive: ≤720px the mid swaps to the SHORT project name (`caseTitle` prop, `.mid-full`/`.mid-short` spans); ellipsis only as last resort. The old `*.foot.mid` strings (NDA · Walkthrough/Prototype on request) were DELETED EN+FR — "on request" now only lives in the SG outcomes body copy; re-add elsewhere only if Virginia asks.

- **SG case — real closing evidence (CLOSED 2026-07, facts from Virginia)**: she was Staff & Go's FIRST designer (no Figma before her, screens went straight to code); the design system was a hard sell at first ("time lost") so she started it almost for herself; later PMs drafted development proposals themselves using the system and the documentation became the team's "source of truth"; her final push was an internal code library of the components (copy-paste for devs) — she supervised the interns who built it, reviewed behaviour, lead dev signed off code; she left before it was finished but builds were already faster. Honest limit kept: one person can't create/maintain/grow a DS alongside daily product work. Keys rewritten EN+FR: case.context.left/rightTop, case.outcomes.left/rightTop/rightBottom (new). The old unsupported claims ("onboarding took half the time", "days, not weeks") were REMOVED — don't reintroduce.

## Open Threads (pick up here)

In rough priority order:

1. ~~**Selected Work square thumbs**~~ DONE 2026-07-06: `THUMBS` map in `SelectedWork.jsx` — Staff & Go uses the real doc SVG (`sg-doc-buttons.svg`, vector crop via `object-fit: cover; object-position: top left`); Fiche/Hawi/Gazella use 700×700 WebP crops in `public/images/work/` (after-record header zone / hawi-cover centre / gz-home top). Thumb border dashed→solid + `overflow:hidden`; images `loading="lazy"`. Verified live on home. If Virginia prefers different crops, regenerate the WebPs — the wiring stays. **Remaining before ship: `npm run build` on the Mac (should be warning-free now), commit, deploy.**
2. **Gazella — white-label/theming block (deferred)**: add a section showing the product re-skinned per brand. The exports now exist in `~/Downloads/gazella figma/` (`Desktop/Responsive_co-branding_Oysho_A/B`, `…_Santander`). Neutralise third-party marks; frame honestly as a speculative pitch, never adopted.
3. **Optional, non-blocking**: code-split the 4 case pages with `React.lazy` (initial JS chunk is 1.19MB / 264KB gzip, would roughly halve); blur birth date/place in Fiche screenshots if extra NDA caution wanted; Fiche could gain one anonymised process visual from `~/Downloads/staff and go ficha/`; overlay focus trap (move focus in on open, return to burger on close — the a11y audit already recommends it).
4. ~~**Run `npm run build` on the Mac**~~ DONE 2026-07-06: green, 1.87s, lint 0/0, full live QA passed (see Decisions).
5. ~~**Hawi — verify research numbers**~~ DONE 2026-06: confirmed approximate, copy softened (see Decisions).
6. ~~**Cleanup pass**~~ DONE 2026-07 (see Decisions).

## Important Context About Virginia

- Spanish native, lives in Saint-Malo, France. Trilingual ES/EN/FR.
- 6+ years experience. Last role: Product Designer at Staff & Go (B2B SaaS, design system from scratch, 25+ documented components).
- Front-end background: Angular, TypeScript, Sass, HTML. Not on offer as a dev role.
- Currently in active job search. The portfolio must ship.
- Tends to perfectionism on her own work. When she hesitates, propose one path with clear rationale, do not pile up alternatives.

## Commands

- `npm install` — install dependencies
- `npm run dev` — Vite dev server
- `npm run build` — production build
- `npm run lint` — ESLint

## Gotchas

- i18next loads JSON via `i18next-http-backend` from `public/locales/`. Vite does NOT hot-reload `public/` changes. After editing translations, do a hard refresh (`Cmd+Shift+R`) or restart the dev server.
- The `Icon` component is a wrapper over lucide-react: `<Icon name="ArrowRight" />` resolves to `lucide-react.ArrowRight`. Use lucide icon names exactly.
- ESLint already reports one pre-existing warning in `DesignSystem.jsx` (line 176). Do not flag it as new.
- `prop-types` is NOT installed and is NOT to be added. For a JS-only React 19 project without TypeScript, skip prop validation entirely — components use plain destructured props.
- **`npm run build` cannot run in the Cowork Linux sandbox** — `node_modules` is built for macOS, so rollup's native binary is missing and the sandbox registry blocks installing it. Run `npm run build` on the Mac. `npm run lint` works fine in-sandbox; when build is unavailable, verify via lint + an i18n key cross-check (every `t('...')` key present in both EN and FR).
- **Figma MCP connector** is on the Starter (free) plan: ~6 tool calls per MONTH (resets on the billing-cycle date), so it runs out fast. For reading Figma files prefer asking Virginia to export PNG @2x into a folder (no limit) over the connector. Local `.fig` files are zip archives — `thumbnail.png` + embedded raster `images/` are extractable, but vector frames are not.
- **Huge image exports**: Figma "general vision" boards can be 16k–32k px; ImageMagick rejects them by default. Use PIL with `Image.MAX_IMAGE_PIXELS=None` and `.reduce(n)`, one file at a time (batching the big ones OOMs the sandbox).

## See Also

- `@AGENTS.md` — older agent instructions, kept for cross-tool compatibility (Cursor, Aider, etc). Mostly redundant with this file but harmless.
- When polishing the case studies pages, consider adding a scoped `src/pages/case-studies/CLAUDE.md` with narrative and visual rules specific to case study writing.

---

*Last updated: 2026-07-06 (pre-publish audit: build verified green on the Mac + live QA, Header/CaseTopbar split, NDA blur pass, SEO/OG shipped, WebP image pipeline, FR proofread, dead-code cleanup). Living document. Update Decisions Already Closed every time we close a new one.*
