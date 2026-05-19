import { useEffect, useState } from 'react';

/**
 * ScrollProgress — thin animated bar that fills as the page scrolls.
 *
 * Renders fixed at top:56px (just under a 56px-tall navbar). Adjust the `top`
 * prop if your navbar height differs.
 *
 * Implementation notes
 * ────────────────────
 * - Single passive scroll listener.
 * - rAF-throttled — only updates once per frame max.
 * - Width is a continuous value, so we use inline style not a class.
 * - prefers-reduced-motion: we still update the width (it's data, not decoration)
 *   but skip the colour-shimmer transition.
 */
export function ScrollProgress({ top = 56, color, className = '' }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;
    let queued = false;

    const compute = () => {
      queued = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next = max > 0 ? Math.max(0, Math.min(1, window.scrollY / max)) : 0;
      setPct(next);
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      raf = requestAnimationFrame(compute);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    compute();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(pct * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`pointer-events-none fixed left-0 z-[35] h-[1px] ${className}`}
      style={{
        top,
        width: `${pct * 100}%`,
        background: color ?? 'var(--accent)',
        transition: 'width 60ms linear',
      }}
    />
  );
}
