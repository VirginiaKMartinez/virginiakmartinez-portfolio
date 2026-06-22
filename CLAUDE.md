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
- **Case study route**: `/case/staff-and-go` (full editorial case). Old `/case-studies/design-system` route REMOVED. `DesignSystem.jsx` v1 + `designSystem.{en,fr}.js` still in repo as dead code — can be deleted in a cleanup pass.
- **Two-layer case study**: editorial chrome uses portfolio palette tokens; `.plate` blocks use Staff & Go's own product palette (`--sg-*` in `sg.css`, scoped to `.case-plate, .case-snap`). Roboto for product skin. Do not mix the two layers.
- **Four case studies (CLOSED 2026-06)**: the portfolio ships with exactly four full, clickable editorial cases, in this home / `OtherCases` order: (1) Staff & Go — Design System `/case/staff-and-go`, (2) Fiche salarié — Staff & Go `/case/fiche-salarie`, (3) Hawi · Akimad `/case/hawi`, (4) Gazella · Akimad `/case/gazella`. Topbar counts are `01–04 of 04` (i18n `case.topbar.of/ficheOf/hawiOf/gazellaOf`). The two recent Staff & Go cases lead; the two Akimad cases follow. Power Electronics and Optiva Media were REMOVED from the cases list and from `selectedWork.{en,fr}.js` (no case content); Virginia's full history still lives in the Experience section. Do not reintroduce them as cases.
- **Case selection rationale (don't reopen)**: the four were chosen by competency, not recency. Seetyz, The Foodie Club (a full-stack master's *dev* project — keep out, it reactivates the dev-hybrid positioning), Power Electronics and Optiva (dev roles, no material) were considered and rejected. Gazella kept for product-thinking + monetization; Fiche salarié added as the recent B2B redesign that diversifies the set.
- **Case study 02 — Fiche salarié (Staff & Go redesign)**: Route `/case/fiche-salarie`, page `src/pages/CaseFiche.jsx`. Skin `src/styles/fiche.css`. Components in `src/components/fiche/`: FicheHero, BeforeAfter. Reuses `ScrollPhone` (from `components/gazella/`). Images in `public/case/fiche-salarie/` (before-record, after-record, after-mobile). Translations `case.fiche.*` EN+FR. Story: a dense employee record → legible, sectioned redesign; the before→after is the centrepiece. NDA: real product screens are ANONYMISED — browser chrome + macOS dock cropped out; real establishment/client names (e.g. SOFIB, "LE BINIOU…") blurred; test-employee data kept (name/photo are fictitious). Foot marks "NDA · screens anonymised". Source material lives in `~/Downloads/staff and go ficha/`.
- **Case study 03 — Hawi (REWORKED 2026-06)**: Route `/case/hawi`, page `src/pages/CaseHawi.jsx`, skin `src/styles/hawi.css` (`--hw-*`). Components in `src/components/hawi/`. Visuals now use REAL exported artefacts, not CSS redraws: `ProcessThree` shows three cropped real frames (`hawi-stage-{sketch,blockframe,wireframe}.png`, cropped to drop the original "lorem ipsum" captions); the page renders the real workshop photo (small + desaturated for privacy), flow map and brand-discovery board via `.artifact` blocks (reusing the previously-dormant `case.hawi.plates.*` keys). `ActorCards` was reframed from four invented named personas to honest role archetypes (the elder / family carer / coordinator / ohana) — never present invented people as real research subjects. FR `case.hawi.brandKit.*` was added (was EN-only). OPEN: the research chapter still claims "4 workshops · 12 interviews" — verify these are real before final ship.
- **Case study 04 — Gazella (Akimad)**: Route `/case/gazella`, page `src/pages/CaseGazella.jsx`. Skin `src/styles/gazella.css` (`--gz-*`). Components in `src/components/gazella/`: GazellaHero, ScreenStrip, ScrollPhone. Images in `public/case/gazella/`. Translations `case.gazella.*` EN+FR. Screenshot-driven (real exports). The full recipe renders in `ScrollPhone` — a phone bezel whose screen scrolls vertically like a prototype (reusable for any long screenshot). Honest framing: Virginia joined an existing product and led two areas (editable cycle calendar + premium nutrition, incl. her shopping-list-from-ingredients idea) and voiced doubt about the premium bet (a client mandate). OPEN: a white-label / theming block (Original / Oysho / Santander brand skins) is DEFERRED until Virginia exports the three home screens flat — third-party brand marks must be neutralised; the pitch was speculative, never adopted by those brands.
- **Shared case components**: `Chapter`, `StatsRow`, `CaseTopbar`, `OtherCases` (accepts `exclude`), `BackFoot` (accepts `mid`) live in `components/case/`. `ScrollPhone` (`components/gazella/`) and `DeviceFrame` (`components/hawi/`) are cross-case reusable. `OtherCases` `CASES` array + `case.other.*` keys list all four cases; its title is count-agnostic ("More work, / in brief.").
- **Legacy stubs**: `src/pages/case-studies/UXResearch.jsx` and `flows.jsx` are EMPTY placeholder stubs (not real content); routes `/case-studies/flows` and `/case-studies/ux-research` still point to them. Safe to delete in a cleanup pass.
- **Site languages**: English and French only. Spanish is only used in our conversation, not on the site.
- **Files removed**: `src/App.css` and `src/pages/TestPage.jsx` were deleted. Do not reference them.

## Open Threads (pick up here)

In rough priority order:

1. **Run `npm run build` on the Mac** to confirm the four cases compile green (the Cowork sandbox can't build — see Gotchas). Lint is already clean except the one known `DesignSystem.jsx` warning.
2. **Hawi — verify research numbers**: the chapter claims "4 workshops · 12 interviews". Confirm they're real or soften the copy (`case.hawi.research.*`, `case.hawi.stats`).
3. **Gazella — white-label/theming block (deferred)**: add a section showing the product re-skinned per brand. Needs the three home screens exported FLAT (Original / Oysho / Santander); neutralise third-party marks; frame honestly as a speculative pitch, never adopted.
4. **Optional polish**: Fiche salarié could gain one anonymised process visual (benchmarking or the account-state screens) from `~/Downloads/staff and go ficha/`. Cleanup pass: delete dead v1 (`DesignSystem.jsx` v1 + `designSystem.{en,fr}.js`, the empty `flows.jsx` / `UXResearch.jsx` stubs and their routes).

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

*Last updated: 2026-06-22. Living document. Update Decisions Already Closed every time we close a new one.*
