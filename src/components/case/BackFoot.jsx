import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

export function BackFoot() {
  const { t } = useTranslation();
  return (
    <div className="case-foot">
      <Link to="/" className="hover:text-[var(--accent)]">{t('case.foot.back')}</Link>
      <span>{t('case.foot.mid')}</span>
      <Link to="/#contact" className="hover:text-[var(--accent)]">{t('case.foot.contact')}</Link>
    </div>
  );
}
