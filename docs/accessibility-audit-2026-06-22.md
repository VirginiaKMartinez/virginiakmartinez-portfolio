# Accessibility Audit — Virginia Martínez Portfolio

**Standard:** WCAG 2.1 AA · **Date:** 2026-06-22 · **Scope:** code-level audit (active palette `rosso`)

## Summary

Issues found: 5 · Critical: 1 · Major: 2 · Minor: 2 — **all fixed in this pass.**

The site already had strong foundations: visible `:focus-visible` styles, `aria-pressed` on the
language toggle, `aria-expanded` / `aria-controls` on the hamburger, `role="dialog"` +
`aria-modal` on the mobile overlay, Escape + click-outside to close, `prefers-reduced-motion`
disabling the marquee, the marquee marked `aria-hidden`, and a 17.5:1 contrast on primary text.

## Findings & fixes

### Perceivable

| # | Issue | WCAG | Severity | Fix applied |
|---|-------|------|----------|-------------|
| 1 | `--mute` text on `--bg` was 4.0:1 (mono captions, case meta labels, inactive language) — below 4.5:1 for normal text | 1.4.3 Contrast | 🟡 Major | Darkened `--mute` in the `rosso` palette to `oklch(0.53 0.01 260)` → **4.91:1** |
| 2 | Hairline borders (`--line`) are 1.4:1 | 1.4.11 Non-text contrast | 🟢 Minor | Left as-is — decorative dividers are exempt; no functional control relies on them |

### Operable

| # | Issue | WCAG | Severity | Fix applied |
|---|-------|------|----------|-------------|
| 3 | Closed mobile overlay used `opacity:0; pointer-events:none` but its links stayed in the tab order (and were inside `aria-hidden="true"`) — keyboard focus fell into a hidden menu | 2.4.3 / 4.1.2 | 🟡 Major | Added `inert={!menuOpen}` on the overlay (removes it from tab order + a11y tree when closed) |
| 4 | No skip-to-content link; inline nav (~19px) and language toggle below comfortable target size | 2.4.1 / 2.5.x | 🟢 Minor | Added a focus-revealed `.skip-link` → `#main` (focusable `<main>`); bumped nav padding to 10px and language buttons to 8px |

### Understandable

| # | Issue | WCAG | Severity | Fix applied |
|---|-------|------|----------|-------------|
| 5 | `<html lang="en">` never updated when switching to French — screen readers read the whole FR site with an English voice | 3.1.1 Language of Page (A) | 🔴 Critical | `i18n.js` now syncs `document.documentElement.lang` on `languageChanged` (normalises `fr-FR` → `fr`) |

### Robust

| Extra | Found nested `<main>` landmarks (MainLayout's `<main>` wrapped each case page's own `<main>`) | 1.3.1 / 4.1.2 | Fixed: the 4 case pages now use `<div className="wrap">`; the single `<main>` lives in `MainLayout` |

## Color contrast reference (rosso, after fix)

| Element | Pair | Ratio | Required | Pass |
|---------|------|-------|----------|------|
| Body / headings | `--fg` on `--bg` | 17.5:1 | 4.5 | ✅ |
| Subtitle / secondary | `--fg-soft` on `--bg` | 9.3:1 | 4.5 | ✅ |
| Mono captions / meta | `--mute` on `--bg` | 4.9:1 | 4.5 | ✅ (was 4.0) |
| Links / accent text | `--accent` on `--bg` | 5.0:1 | 4.5 | ✅ |
| Text on accent fill | `--paper` on `--accent` | 5.1:1 | 4.5 | ✅ |

## Still recommended (manual, can't be done from code)

- Run real assistive-tech passes: VoiceOver (Safari) + NVDA (Firefox).
- Keyboard-only walkthrough of every page, including the mobile overlay open/close.
- Zoom to 200% — confirm no layout breaks.
- Consider moving focus into the dialog on open and trapping it (currently only Escape/click-outside close).
