import { useTranslation } from 'react-i18next';

/**
 * Hero — cover for Case · Hawi.
 * 12-col mono meta strip (6 cells) · big title · subtitle · ohana definition.
 */
export function HawiHero() {
  const { t } = useTranslation();

  return (
    <section className="case-hero" data-screen-label="Cover">
      <div className="meta">
        <div>{t('case.hawi.meta.yearL')}<strong>{t('case.hawi.meta.year')}</strong></div>
        <div>{t('case.hawi.meta.roleL')}<strong>{t('case.hawi.meta.role')}</strong></div>
        <div>{t('case.hawi.meta.clientL')}<strong>{t('case.hawi.meta.client')}</strong></div>
        <div>{t('case.hawi.meta.sectorL')}<strong>{t('case.hawi.meta.sector')}</strong></div>
        <div>{t('case.hawi.meta.scopeL')}<strong>{t('case.hawi.meta.scope')}</strong></div>
        <div className="meta-right">
          {t('case.hawi.meta.outcomeL')}
          <strong style={{ color: 'var(--accent)' }}>{t('case.hawi.meta.outcome')}</strong>
        </div>
      </div>

      <h1 className="hero-title">
        Hawi<span className="it">.</span>
      </h1>
      <p className="sub">{t('case.hawi.subtitle')}</p>

      <div className="ohana">
        <div className="label">{t('case.hawi.ohana.label')}</div>
        <div className="def">
          <b>OHANA</b>
          <span dangerouslySetInnerHTML={{ __html: t('case.hawi.ohana.body') }} />
        </div>
      </div>
    </section>
  );
}
