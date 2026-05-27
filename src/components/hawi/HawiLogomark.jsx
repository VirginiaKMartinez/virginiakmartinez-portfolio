/**
 * Hawi imagotipo — three overlapping figures in a small group.
 * tone="default"  → yellow / terracotta / navy (on light bg)
 * tone="onRust"   → yellow / pale-tan / navy   (on rust bg)
 */
export function HawiLogomark({ size = 28, tone = 'default', className = '' }) {
  const fills =
    tone === 'onRust'
      ? ['#F1B954', '#FBE5C7', '#042635']
      : ['#F1B954', '#D97757', '#042635'];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="8"  cy="14" r="8" fill={fills[0]} />
      <circle cx="14" cy="7"  r="7" fill={fills[1]} />
      <circle cx="20" cy="18" r="9" fill={fills[2]} />
    </svg>
  );
}
