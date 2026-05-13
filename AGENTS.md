# Virginia Martínez — Portfolio

## Project Overview

Personal portfolio for Virginia Martínez, Digital Product Designer based in Saint-Malo, France. In active job search. The site must be polished and shippable, not perfect.

**Primary goals**

- Communicate her real differential: Product Designer with front-end fluency.
- Showcase 4 selected case studies (quality over quantity).
- Be sendable to recruiters in EN and FR.

**Avoid**

x
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

- **Stack**: Tailwind v3, not v4. `@tailwindcss/postcss` removed from devDeps.
- **Hero copy**: Tagline closed → "I design B2B digital products that ship clean. Design systems specialist with a deep understanding of what front-end can deliver." (EN) and the parallel FR version. Voice is sober, editorial. Never include "I can build them" or any dev-positioning phrasing.
- **Hero layout**: Quiet minimal with editorial photo. Asymmetric grid: left = name + role + statement + availability + three underline links (View work, Download CV, Email); right = vertical portrait photo (`w-64 h-80`, `object-top`). No badge, no buttons, no circular avatar.
- **Hero background**: Dot pattern only on solid `var(--color-bg)`. The AVIF gradient (`bg_01.avif`) is OUT. Do not bring it back.
- **CV download path**: `/Virginia_Martinez_CV.pdf` in `public/`.
- **Case study order**: Design System (Staff & Go) is the headliner. UX Research, Flows and Responsive Design follow.
- **Site languages**: English and French only. Spanish is only used in our conversation, not on the site.
- **Files removed**: `src/App.css` and `src/pages/TestPage.jsx` were deleted. Do not reference them.

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

## See Also

- `@AGENTS.md` — older agent instructions, kept for cross-tool compatibility (Cursor, Aider, etc). Mostly redundant with this file but harmless.
- When polishing the case studies pages, consider adding a scoped `src/pages/case-studies/CLAUDE.md` with narrative and visual rules specific to case study writing.

---

_Last updated: 2026-05-11. Living document. Update Decisions Already Closed every time we close a new one._
