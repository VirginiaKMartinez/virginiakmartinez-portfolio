import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

/**
 * Sticky topbar for case study pages.
 * `caseLabel` — full identity string ("Case · Gazella · FemTech").
 * `caseTitle` — short fallback shown when the full label doesn't fit (≤720px);
 *               if even the short title overflows, the CSS ellipsis kicks in.
 * Carries its own EN·FR toggle — the home Header is not rendered on /case/*.
 */
export function CaseTopbar({ caseLabel, caseTitle }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('fr') ? 'fr' : 'en';
  return (
    <header className="case-topbar">
      <div><Link to="/" className="hover:text-[var(--accent)]">{t('case.topbar.back')}</Link></div>
      <div className="mid">
        <span className="mid-full">{caseLabel}</span>
        <span className="mid-short">{caseTitle ?? caseLabel}</span>
      </div>
      <div className="right">
        <div className="lang-pill" role="group" aria-label="Language">
          <button
            type="button"
            onClick={() => i18n.changeLanguage('en')}
            aria-pressed={currentLang === 'en'}
          >
            EN
          </button>
          <span>·</span>
          <button
            type="button"
            onClick={() => i18n.changeLanguage('fr')}
            aria-pressed={currentLang === 'fr'}
          >
            FR
          </button>
        </div>
        <Link to="/#contact" className="hover:text-[var(--accent)]">{t('case.topbar.contact')}</Link>
      </div>
    </header>
  );
}
