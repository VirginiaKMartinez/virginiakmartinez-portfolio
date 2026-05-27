import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router';

const CASES = [
  { id: 'staff-and-go',     to: '/case/staff-and-go', year: '2023 — 24', titleKey: 'sg', descKey: 'sgDesc', metaKey: 'sgMeta' },
  { id: 'power-electronics', to: '#',                  year: '2021 — 22', titleKey: 'pe', descKey: 'peDesc', metaKey: 'peMeta' },
  { id: 'optiva',            to: '#',                  year: '2021',      titleKey: 'om', descKey: 'omDesc', metaKey: 'omMeta' },
  { id: 'hawi',              to: '/case/hawi',         year: '2019 — 20', titleKey: 'hw', descKey: 'hwDesc', metaKey: 'hwMeta' },
];

export function OtherCases({ exclude }) {
  const { t } = useTranslation();
  const visible = exclude ? CASES.filter((c) => c.id !== exclude) : CASES;

  return (
    <section className="case-other" data-screen-label="Other cases">
      <div className="case-chapter__head" style={{ marginBottom: 24 }}>
        <div className="case-chapter__num">{t('case.other.num')}</div>
        <h2>
          {t('case.other.title')}{' '}
          <span className="it">{t('case.other.titleIt')}</span>
        </h2>
      </div>

      {visible.map((c) => (
        <Link key={c.id} to={c.to} id={c.id} className="case-other__row">
          <div className="case-other__y">{c.year}</div>
          <div>
            <h3>
              <Trans
                i18nKey={`case.other.${c.titleKey}`}
                components={{ em: <em /> }}
              />
            </h3>
            <p>{t(`case.other.${c.descKey}`)}</p>
          </div>
          <div className="case-other__meta">{t(`case.other.${c.metaKey}`)}</div>
          <div className="case-other__arrow">→</div>
        </Link>
      ))}
    </section>
  );
}
