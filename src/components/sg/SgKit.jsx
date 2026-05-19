/**
 * SgKit — small Staff & Go product primitives.
 *
 * These render with the SG palette (Roboto + #144D9D + #3487FA + accents).
 * They MUST be used inside a Plate / .case-plate wrapper so the sg.css
 * scope applies. Outside of that they will fall back to your portfolio
 * tokens — harmless, but visually wrong.
 */

/* ─── Button ───────────────────────────────────────────────────── */
export function SgButton({
  variant = 'primary',  // primary | outline | transparent | alert | warn | success | advance
  size = 'md',          // md | sm
  disabled = false,
  pressed = false,      // visual-only state (case study demos)
  children,
  ...rest
}) {
  const cls = [
    'sg-btn',
    `sg-btn--${variant}`,
    size === 'sm' && 'sg-btn--sm',
    disabled && 'sg-btn--disabled',
    pressed && 'sg-btn--pressed',
  ].filter(Boolean).join(' ');
  return <button type="button" className={cls} disabled={disabled} {...rest}>{children}</button>;
}

/* ─── Chip ─────────────────────────────────────────────────────── */
export function SgChip({ tone = 'gray', children }) {
  return <span className={`sg-chip sg-chip--${tone}`}>{children}</span>;
}

/* ─── Avatar circle (initials) ─────────────────────────────────── */
export function Avatar({ initials, photo = false }) {
  return (
    <span className={`sg-avatar ${photo ? 'sg-avatar--photo' : ''}`} aria-hidden="true">
      {initials}
    </span>
  );
}

/* ─── Checkbox (visual-only) ───────────────────────────────────── */
export function Check({ checked = false }) {
  return <span className={`sg-check ${checked ? 'sg-check--on' : ''}`} />;
}

/* ─── Date pill (table cell) ───────────────────────────────────── */
export function DatePill({ children }) {
  return <span className="sg-date-pill">{children}</span>;
}
