/**
 * Plate — the framed product surface.
 *
 *   ┌──────────────────────────────────────────┐
 *   │ TAG (top-left, mono, accent color)       │
 *   │                                          │
 *   │   {children}  ← the recreated SG screen  │
 *   │                                          │
 *   ├──────────────────────────────────────────┤
 *   │ caption (mono, muted)         metaRight  │
 *   └──────────────────────────────────────────┘
 *
 * Props
 * - tag      mono uppercase label, painted in editorial accent
 * - caption  left side of the bottom strip
 * - meta     right side of the bottom strip
 * - center   when true, children are flex-centered (use for dropdowns/dialogs)
 * - className extra classes on the outer .case-artifact (e.g. margin-top tweak)
 */
export function Plate({ tag, caption, meta, center = false, className = '', children }) {
  return (
    <figure className={`case-artifact ${className}`}>
      {tag && <span className="case-artifact__tag">{tag}</span>}
      <div className={`case-plate ${center ? 'case-plate--center' : ''}`}>{children}</div>
      {(caption || meta) && (
        <figcaption className="case-artifact__cap">
          <span>{caption}</span>
          <span>{meta}</span>
        </figcaption>
      )}
    </figure>
  );
}
