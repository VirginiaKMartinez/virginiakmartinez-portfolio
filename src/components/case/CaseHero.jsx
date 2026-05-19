import { useTranslation, Trans } from 'react-i18next';

/**
 * Hero — meta grid (6 cells) + huge "Staff & Go." title + sub.
 * Layout uses CSS grid via case.css; copy comes from i18n.
 */
export function CaseHero() {
  const { t } = useTranslation();

  const cells = [
    { k: 'year',   v: t('case.hero.yearValue') },
    { k: 'role',   v: t('case.hero.roleValue') },
    { k: 'client', v: t('case.hero.clientValue') },
    { k: 'sector', v: t('case.hero.sectorValue') },
    { k: 'team',   v: t('case.hero.teamValue') },
  ];

  return (
    <section className="case-hero" data-screen-label="Cover">
      <div className="case-hero__meta">
        {cells.map((c) => (
          <div key={c.k}>
            {t(`case.hero.${c.k}`)}<strong>{c.v}</strong>
          </div>
        ))}
        <div className="case-hero__meta-status">
          {t('case.hero.status')}
          <strong style={{ color: 'var(--accent)' }}>{t('case.hero.statusValue')}</strong>
        </div>
      </div>

      <h1>
        <Trans i18nKey="case.hero.title" components={{ it: <span className="it" /> }} />
      </h1>
      <p className="case-hero__sub">{t('case.hero.sub')}</p>
    </section>
  );
}
