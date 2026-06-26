import { useTranslation } from 'react-i18next';
import { SgChip } from './SgKit';

/**
 * Hero visual for Case · Staff & Go — a real product table ("reviews"), framed
 * as one clean artefact built from the design system. Reuses SgChip (status) and
 * the SG palette tokens. Must carry .sg-reviews so sg.css resolves --sg-* vars.
 * Status labels stay in French (genuine product copy); names/dates are demo data.
 */
const ROWS = [
  { initials: 'CK', tone: 'blue',   name: 'Korsberg Claire', state: 'success', label: 'Clôturé',     date: '13 Jun' },
  { initials: 'PJ', tone: 'pink',   name: 'Preston Jill',    state: 'accent',  label: 'À préparer',  date: '22 Dec', selected: true },
  { initials: 'KA', tone: 'amber',  name: 'Kenter Adison',   state: 'alert',   label: 'Refusé',      date: '20 Apr' },
  { initials: 'WG', tone: 'green',  name: 'Workman Gaël',    state: 'warn',    label: 'En attente',  date: '2 Oct' },
];

export function SgReviewsTable() {
  const { t } = useTranslation();
  const k = t('case.hero.kit', { returnObjects: true });

  return (
    <figure className="case-hero__visual">
      <div className="sg-reviews" aria-label={k.aria}>
        <div className="sg-reviews__bar">
          <span className="sg-reviews__title">
            {k.product} · <strong>{k.label}</strong>
          </span>
          <span className="sg-reviews__note">{k.built}</span>
        </div>

        <table className="sg-reviews__table">
          <thead>
            <tr>
              <th>{k.cols.participant}</th>
              <th>{k.cols.status}</th>
              <th>{k.cols.date}</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.initials} className={r.selected ? 'is-selected' : undefined}>
                <td>
                  <span className="sg-reviews__person">
                    <span className={`sg-reviews__avatar sg-reviews__avatar--${r.tone}`} aria-hidden="true">
                      {r.initials}
                    </span>
                    {r.name}
                  </span>
                </td>
                <td><SgChip tone={r.state}>{r.label}</SgChip></td>
                <td className="sg-reviews__date">{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption>{k.caption}</figcaption>
    </figure>
  );
}
