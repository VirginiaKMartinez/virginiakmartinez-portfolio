# Portfolio (Vite + React) — Agent instructions

Goal: improve UI/UX and code quality without adding new product features.

Project stack:

- Vite + React
- React Router
- Tailwind + CSS variables tokens
- i18next (EN/FR)

Commands:

- npm install
- npm run dev
- npm run build

Rules:

- Never change Results section in Design System page.
- Use existing Tailwind token classes: bg-background, text-textDark, text-textMuted, border-divider, bg-primary, text-link.
- Avoid inline styles unless strictly necessary.
- Keep changes small and reversible.
- Do not invent content; reuse existing data files and i18n keys.
- After changes: run npm run build and summarize results.
- Prefer refactors that reduce duplication (extract small components).
