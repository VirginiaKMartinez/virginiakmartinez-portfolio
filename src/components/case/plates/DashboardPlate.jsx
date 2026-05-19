import { Plus, Filter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Plate } from '../Plate';
import { SgButton } from '@/components/sg/SgKit';
import { SgTable } from '@/components/sg/SgTable';

/**
 * Plate 02 — Annual-review list dashboard.
 *
 * All product copy stays in French (it's the real product surface).
 * Only the editorial chrome around the plate (tag, caption) translates.
 */
export function DashboardPlate() {
  const { t } = useTranslation();

  const rows = [
    { id: 1, title: 'Entretien annuel', etab: '02 MULHOUSE',  participant: 'KORSBERG Claire',  initials: 'KC', state: 'success', stateLabel: 'Clôturé',              date: '13 juin 2023',  owner: 'WORKMAN Gaël' },
    { id: 2, title: 'Entretien annuel', etab: '1,2,3 CRECHE!', participant: 'SARIS Lydia',      initials: 'SL', photo: true,  state: 'violet', stateLabel: 'Brouillon',            date: '5 mars 2022',   owner: 'WORKMAN Gaël' },
    { id: 3, title: 'Entretien annuel', etab: '02 MULHOUSE',  participant: 'PRESTON Jill',     initials: 'PJ', photo: true,  state: 'accent', stateLabel: 'À préparer',           date: '22 déc. 2022',  owner: 'WORKMAN Gaël', selected: true },
    { id: 4, title: 'Entretien annuel', etab: '02 MULHOUSE',  participant: 'KENTER Adison',    initials: 'KA', photo: true,  state: 'warn',   stateLabel: 'Approb. en cours',     date: '20 avril 2024', owner: 'WORKMAN Gaël' },
    { id: 5, title: 'Entretien annuel', etab: '1,2,3 CRECHE!', participant: 'WORKMAN Gaël',     initials: 'WG', photo: true,  state: 'warn',   stateLabel: 'Validation en attente', date: '2 octobre 2023', owner: 'CURTIS Miriam' },
    { id: 6, title: 'Entretien annuel', etab: '1,2,3 CRECHE!', participant: 'BOTOSH Madelyn',   initials: 'BM',               state: 'gray',   stateLabel: 'Annulé',               date: '17 juillet 2023', owner: 'WORKMAN Gaël' },
    { id: 7, title: 'Entretien annuel', etab: '1,2,3 CRECHE!', participant: 'PRESS Tatiana',    initials: 'PT', photo: true,  state: 'alert',  stateLabel: 'Refusé',               date: '22 déc. 2023',  owner: 'WORKMAN Gaël' },
  ];

  return (
    <Plate
      className="case-artifact--wide"
      tag={t('case.plates.tag.dashboard')}
      caption={t('case.plates.cap.dashboard')}
      meta={t('case.plates.meta.dashboard')}
    >
      <div className="sg-dash">
        <header className="sg-dash__bar">
          <div>
            <div className="sg-dash__crumb">Mon espace</div>
            <h3 className="sg-dash__title">Modèles d'entretien</h3>
          </div>
          <div className="sg-dash__actions">
            <SgButton variant="transparent">
              <Filter size={14} /> Filtrer
            </SgButton>
            <SgButton variant="primary">
              <Plus size={14} /> Nouveau modèle
            </SgButton>
          </div>
        </header>
        <SgTable rows={rows} />
      </div>
    </Plate>
  );
}
