import { useTranslation } from 'react-i18next';

/**
 * Hero visual for Case · Fiche salarié — an editorial "before → after" diagram.
 * Left: a chaotic wall of equal field cells. Right: the same data resolved into
 * labelled sections. No product screenshot (NDA), tells the case at a glance.
 * Section line widths are layout (here); labels/copy come from i18n.
 */
const SECTIONS = [
  ['lg', 'md'],
  ['md', 'sm'],
  ['lg'],
];

export function FicheHeroVisual() {
  const { t } = useTranslation();
  const d = t('case.fiche.heroDiagram', { returnObjects: true });

  return (
    <figure className="fiche-hero-art" aria-label={d.aria}>
      <div className="fiche-hero-art__pair" aria-hidden="true">
        <div className="fiche-hero-art__panel">
          <span className="fiche-hero-art__tag">{d.before}</span>
          <div className="fiche-hero-art__grid">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="fiche-hero-art__cell" />
            ))}
          </div>
        </div>

        <span className="fiche-hero-art__arrow">→</span>

        <div className="fiche-hero-art__panel">
          <span className="fiche-hero-art__tag">{d.after}</span>
          {SECTIONS.map((lines, i) => (
            <div key={i} className="fiche-hero-art__section">
              <span className="fiche-hero-art__slabel">{d.sections[i]}</span>
              {lines.map((w, j) => (
                <span key={j} className={`fiche-hero-art__line is-${w}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <figcaption>{d.caption}</figcaption>
    </figure>
  );
}
