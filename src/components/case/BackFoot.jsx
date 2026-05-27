import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

export function BackFoot({ mid }) {
  const { t } = useTranslation();
  return (
    <div className="case-foot">
      <Link to="/" className="hover:text-[var(--accent)]">{t('case.foot.back')}</Link>
      <span>{mid ?? t('case.foot.mid')}</span>
      <Link to="/#contact" className="hover:text-[var(--accent)]">{t('case.foot.contact')}</Link>
    </div>
  );
}
