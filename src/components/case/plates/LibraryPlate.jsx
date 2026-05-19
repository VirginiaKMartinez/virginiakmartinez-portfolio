import { useTranslation } from 'react-i18next';
import { Check, Circle } from 'lucide-react';
import { Plate } from '../Plate';

/**
 * Plate 05 — Library overview. Recreates the Figma "Index" frame with
 * its blue accent border and the 28-item component list.
 *
 * Items are static (one-off graphic). The two states are:
 *   - done — a Check (in success green)
 *   - wip  — a Circle (in warning amber)
 */
const ITEMS = [
  ['Colors', 'done'],
  ['Typography', 'done'],
  ['Spacing', 'done'],
  ['Buttons', 'done'],
  ['Toggle button', 'done'],
  ['Inputs', 'done'],
  ['Empty state', 'done'],
  ['Expansion panel', 'done'],
  ['Dialog / Popups', 'done'],
  ['Table', 'done'],
  ['Chips', 'done'],
  ['Checkbox', 'done'],
  ['Radio buttons', 'done'],
  ['Shadows', 'done'],
  ['Badge', 'done'],
  ['Hint / Panel', 'done'],
  ['Quotes', 'done'],
  ['Conversation', 'done'],
  ['Paginator', 'done'],
  ['Links', 'done'],
  ['Snackbar / Toast', 'done'],
  ['Tabs', 'done'],
  ['Tree', 'done'],
  ['Menu — NavBar', 'done'],
  ['Menu — Icons', 'done'],
  ['Filter component', 'done'],
  ['Color Picker', 'wip'],
  ['Miscellaneous', 'wip'],
];

export function LibraryPlate() {
  const { t } = useTranslation();
  return (
    <Plate
      className="case-artifact--wide"
      tag={t('case.plates.tag.library')}
      caption={t('case.plates.cap.library')}
      meta={t('case.plates.meta.library')}
    >
      <div className="sg-lib">
        <h4 className="sg-lib__title">
          <span className="sg-lib__mark" /> {t('case.library.title')}
        </h4>
        <p className="sg-lib__lead">{t('case.library.lead')}</p>
        <h5 className="sg-lib__sub">{t('case.library.section')}</h5>
        <ul className="sg-lib__grid">
          {ITEMS.map(([label, status]) => (
            <li key={label} className="sg-lib__item">
              {status === 'done'
                ? <Check size={14} className="sg-lib__ic sg-lib__ic--ok" />
                : <Circle size={14} className="sg-lib__ic sg-lib__ic--wip" />}
              {label}
            </li>
          ))}
        </ul>
        <div className="sg-lib__cap">
          <span>{t('case.library.foot1')}</span>
          <span>{t('case.library.foot2')}</span>
        </div>
      </div>
    </Plate>
  );
}
