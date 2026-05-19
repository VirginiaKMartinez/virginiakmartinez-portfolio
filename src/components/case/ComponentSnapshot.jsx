import { useTranslation } from 'react-i18next';
import { SgButton, SgChip } from '@/components/sg/SgKit';

/**
 * Component snapshot — quick-look grid of the most-used Staff & Go primitives.
 * Labels of the SG components stay in French (product copy is FR);
 * only the row names ("Button / primary", "Chip / status", ...) translate.
 */
export function ComponentSnapshot() {
  const { t } = useTranslation();

  const rows = [
    {
      name: t('case.snapshot.btnPrimary'),
      demo: (
        <>
          <SgButton variant="primary">Ajouter un entretien</SgButton>
          <SgButton variant="primary" disabled>Disabled</SgButton>
          <SgButton variant="primary" pressed>:pressed</SgButton>
        </>
      ),
    },
    {
      name: t('case.snapshot.btnOutline'),
      demo: (
        <>
          <SgButton variant="outline">Annuler</SgButton>
          <SgButton variant="transparent">Filtrer</SgButton>
        </>
      ),
    },
    {
      name: t('case.snapshot.btnStatus'),
      demo: (
        <>
          <SgButton variant="alert">Supprimer l'entretien</SgButton>
          <SgButton variant="warn">Terminer la campagne</SgButton>
          <SgButton variant="success">Valider</SgButton>
          <SgButton variant="advance">Mode avancé</SgButton>
        </>
      ),
    },
    {
      name: t('case.snapshot.input'),
      demo: (
        <>
          <span className="case-snap__input">name.surname@gmail.com</span>
          <span className="case-snap__input case-snap__input--focused">Rechercher un salarié</span>
        </>
      ),
    },
    {
      name: t('case.snapshot.chip'),
      demo: (
        <>
          <SgChip tone="success">Clôturé</SgChip>
          <SgChip tone="violet">Brouillon</SgChip>
          <SgChip tone="accent">À préparer</SgChip>
          <SgChip tone="warn">Approb. en cours</SgChip>
          <SgChip tone="alert">Refusé</SgChip>
          <SgChip tone="pink">À réaliser</SgChip>
        </>
      ),
    },
  ];

  return (
    <div className="case-snap">
      <h4>{t('case.snapshot.title')}</h4>
      {rows.map((r) => (
        <div key={r.name} className="case-snap__row">
          <div className="case-snap__name">{r.name}</div>
          <div className="case-snap__demo">{r.demo}</div>
        </div>
      ))}
    </div>
  );
}
