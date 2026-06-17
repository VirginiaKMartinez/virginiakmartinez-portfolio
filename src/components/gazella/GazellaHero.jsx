import { useTranslation } from 'react-i18next';

/**
 * Hero — cover for Case · Gazella.
 * 12-col mono meta strip (6 cells) · big title · subtitle · insight block.
 * Reuses .case-hero chrome (case.css / hawi.css); .gz-def lives in gazella.css.
 */
export function GazellaHero() {
  const { t } = useTranslation();

  return (
    <section className="case-hero" data-screen-label="Cover">
      <div className="meta">
        <div>{t('case.gazella.meta.yearL')}<strong>{t('case.gazella.meta.year')}</strong></div>
        <div>{t('case.gazella.meta.roleL')}<strong>{t('case.gazella.meta.role')}</strong></div>
        <div>{t('case.gazella.meta.clientL')}<strong>{t('case.gazella.meta.client')}</strong></div>
        <div>{t('case.gazella.meta.sectorL')}<strong>{t('case.gazella.meta.sector')}</strong></div>
        <div>{t('case.gazella.meta.scopeL')}<strong>{t('case.gazella.meta.scope')}</strong></div>
        <div className="meta-right">
          {t('case.gazella.meta.outcomeL')}
          <strong style={{ color: 'var(--accent)' }}>{t('case.gazella.meta.outcome')}</strong>
        </div>
      </div>

      <h1 className="hero-title">
        Gazella<span className="it">.</span>
      </h1>
      <p className="sub">{t('case.gazella.subtitle')}</p>

      <div className="gz-def">
        <div className="label">{t('case.gazella.insight.label')}</div>
        <div
          className="def"
          dangerouslySetInnerHTML={{ __html: t('case.gazella.insight.body') }}
        />
      </div>
    </section>
  );
}
