import { ChevronDown } from 'lucide-react';

/**
 * SgFilter — "Filtres affichés" dropdown panel (visual-only, no state).
 *
 * Props
 * - options: Array<{ label, checked }>
 */
export function SgFilter({ options, title = 'Filtres affichés', resetLabel = 'Réinitialiser la vue' }) {
  return (
    <div className="sg-filter">
      <h6 className="sg-filter__head">
        <ChevronDown size={14} className="sg-filter__chev" />
        {title}
      </h6>
      {options.map((o) => (
        <div key={o.label} className="sg-filter__opt">
          <span className={`sg-filter__box ${o.checked ? 'sg-filter__box--on' : ''}`} />
          {o.label}
        </div>
      ))}
      <div className="sg-filter__reset">{resetLabel}</div>
    </div>
  );
}
