import { useTranslation } from 'react-i18next';
import { FicheRecordCard } from './FicheRecordCard';

/**
 * Hero — cover for Case · Fiche salarié (Staff & Go redesign).
 * Two-column lead (title + subtitle) with an editorial before→after diagram on
 * the right. Reuses .case-hero chrome; .ff-def lives in fiche.css.
 */
export function FicheHero() {
  const { t } = useTranslation();

  return (
    <section className="case-hero" data-screen-label="Cover">
      <div className="meta">
        <div>{t('case.fiche.meta.yearL')}<strong>{t('case.fiche.meta.year')}</strong></div>
        <div>{t('case.fiche.meta.roleL')}<strong>{t('case.fiche.meta.role')}</strong></div>
        <div>{t('case.fiche.meta.clientL')}<strong>{t('case.fiche.meta.client')}</strong></div>
        <div>{t('case.fiche.meta.sectorL')}<strong>{t('case.fiche.meta.sector')}</strong></div>
        <div>{t('case.fiche.meta.scopeL')}<strong>{t('case.fiche.meta.scope')}</strong></div>
        <div className="meta-right">
          {t('case.fiche.meta.outcomeL')}
          <strong style={{ color: 'var(--accent)' }}>{t('case.fiche.meta.outcome')}</strong>
        </div>
      </div>

      <div className="case-hero__cols">
        <div className="case-hero__lead">
          <h1 className="hero-title">
            Fiche <span className="it">salarié.</span>
          </h1>
          <p className="sub">{t('case.fiche.subtitle')}</p>
        </div>

        <FicheRecordCard />
      </div>

      <div className="ff-def">
        <div className="label">{t('case.fiche.insight.label')}</div>
        <div
          className="def"
          dangerouslySetInnerHTML={{ __html: t('case.fiche.insight.body') }}
        />
      </div>
    </section>
  );
}
