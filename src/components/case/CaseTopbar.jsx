import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

/**
 * Sticky topbar for case study pages.
 * `caseLabel` overrides the default "01 of 04" centre string.
 */
export function CaseTopbar({ caseLabel }) {
  const { t } = useTranslation();
  return (
    <header className="case-topbar">
      <div><Link to="/" className="hover:text-[var(--accent)]">{t('case.topbar.back')}</Link></div>
      <div className="mid">{caseLabel ?? t('case.topbar.of')}</div>
      <div className="text-right"><Link to="/#contact" className="hover:text-[var(--accent)]">{t('case.topbar.contact')}</Link></div>
    </header>
  );
}
