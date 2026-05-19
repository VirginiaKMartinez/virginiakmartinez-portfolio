import { useTranslation } from 'react-i18next';
import { Plate } from '../Plate';
import { SgFilter } from '@/components/sg/SgFilter';

/**
 * Plate 03 — "Filtres affichés" dropdown.
 *
 * Centered inside the plate frame (use Plate's `center` prop).
 */
export function FilterPlate() {
  const { t } = useTranslation();

  const options = [
    { label: 'Établissement',   checked: true  },
    { label: "Type d'entretien", checked: true  },
    { label: 'État',             checked: true  },
    { label: 'Responsable',      checked: false },
    { label: 'Date',             checked: false },
    { label: 'Campagne',         checked: true  },
  ];

  return (
    <Plate
      center
      tag={t('case.plates.tag.filter')}
      caption={t('case.plates.cap.filter')}
      meta={t('case.plates.meta.filter')}
    >
      <SgFilter options={options} />
    </Plate>
  );
}
