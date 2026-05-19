import { useTranslation } from 'react-i18next';
import { Plate } from '../Plate';
import { SgDialog } from '@/components/sg/SgDialog';

/**
 * Plate 04 — "Supprimer l'entretien?" destructive dialog.
 */
export function DialogPlate() {
  const { t } = useTranslation();
  return (
    <Plate
      center
      tag={t('case.plates.tag.dialog')}
      caption={t('case.plates.cap.dialog')}
      meta={t('case.plates.meta.dialog')}
    >
      <SgDialog
        title="Supprimer l'entretien ?"
        body="Êtes-vous sûr de vouloir supprimer l'entretien ? Si vous le supprimez, vous ne pourrez pas le récupérer."
        cancelLabel="Annuler"
        confirmLabel="Supprimer l'entretien"
        destructive
      />
    </Plate>
  );
}
