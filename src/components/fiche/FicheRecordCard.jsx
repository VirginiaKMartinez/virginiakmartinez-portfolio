import { useTranslation } from 'react-i18next';

/**
 * Hero visual for Case · Fiche salarié — the redesigned employee record,
 * rebuilt in code with the Staff & Go product skin (same treatment as the
 * SgReviewsTable on the Design System case). Must carry .ff-card so sg.css
 * resolves the --sg-* palette vars.
 * Field labels, chips and tabs stay in French (genuine product copy);
 * the employee is fictitious demo data.
 */
const TABS = ['Profil', 'Identification', 'Naissance', 'Coordonnées', 'Paie'];

export function FicheRecordCard() {
  const { t } = useTranslation();
  const k = t('case.fiche.heroCard', { returnObjects: true });

  return (
    <figure className="case-hero__visual">
      <div className="ff-card" aria-label={k.aria}>
        <div className="ff-card__bar">
          <span className="ff-card__title">
            {k.product} · <strong>{k.label}</strong>
          </span>
          <span className="ff-card__note">{k.built}</span>
        </div>

        <div className="ff-card__head">
          <span className="ff-card__avatar" aria-hidden="true">CB</span>
          <span>
            <span className="ff-card__name">Camille Bernard</span>
            <span className="ff-card__sub"># 000123098 · Cheffe de rang</span>
          </span>
          <span className="ff-card__chips">
            <span className="ff-chip ff-chip--ok">Salarié activé</span>
            <span className="ff-chip ff-chip--warn">Compte non initialisé</span>
          </span>
        </div>

        <div className="ff-card__tabs" aria-hidden="true">
          {TABS.map((tab, i) => (
            <span key={tab} className={i === 0 ? 'is-on' : undefined}>{tab}</span>
          ))}
        </div>

        <div className="ff-card__fields" aria-hidden="true">
          <span>
            <label>Civilité</label>
            <span className="ff-card__inp">Madame</span>
          </span>
          <span>
            <label>Prénom</label>
            <span className="ff-card__inp">Camille</span>
          </span>
          <span>
            <label>Nom</label>
            <span className="ff-card__inp">Bernard</span>
          </span>
          <span>
            <label>Numéro de sécurité sociale</label>
            <span className="ff-card__inp is-masked">••• ••• ••• •••</span>
          </span>
        </div>
      </div>
      <figcaption>{k.caption}</figcaption>
    </figure>
  );
}
