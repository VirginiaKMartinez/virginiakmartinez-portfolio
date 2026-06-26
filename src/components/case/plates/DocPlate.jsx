import { useTranslation } from 'react-i18next';
import { Plate } from '../Plate';
import { SgButton } from '@/components/sg/SgKit';

/**
 * Doc entry — recreates one page of the Staff & Go component documentation
 * (intro · states & variants · do/don't · specs) using the live SG components.
 * Shows the *usage guidance* behind the system, not just the components.
 */
export function DocPlate() {
  const { t } = useTranslation();
  const d = t('case.docPlate', { returnObjects: true });

  return (
    <Plate
      tag={t('case.plates.tag.doc')}
      caption={t('case.plates.cap.doc')}
      meta={t('case.plates.meta.doc')}
    >
      <div className="doc-entry">
        <div className="doc-entry__head">
          <div className="doc-entry__id">
            <span className="doc-entry__kicker">{d.kicker}</span>
            <strong>{d.component}</strong>
          </div>
          <span className="doc-entry__index">{d.backToIndex}</span>
        </div>

        <div className="doc-entry__intro">
          <div className="doc-entry__introTitle">{d.introTitle}</div>
          <p>{d.introBody}</p>
        </div>

        <div className="doc-entry__label">{d.statesLabel}</div>
        <div className="doc-entry__states">
          <SgButton variant="primary">{d.states.primary}</SgButton>
          <SgButton variant="outline">{d.states.secondary}</SgButton>
          <SgButton variant="primary" pressed>{d.states.pressed}</SgButton>
          <SgButton variant="primary" disabled>{d.states.disabled}</SgButton>
        </div>

        <div className="doc-entry__rules">
          <div className="doc-entry__rule doc-entry__rule--do">
            <div className="doc-entry__ruleHead doc-entry__ruleHead--do">✓ {d.doLabel}</div>
            <div className="doc-entry__ruleDemo">
              <SgButton variant="primary" size="sm">{d.doBtn}</SgButton>
            </div>
            <p>{d.doText}</p>
          </div>
          <div className="doc-entry__rule doc-entry__rule--dont">
            <div className="doc-entry__ruleHead doc-entry__ruleHead--dont">✕ {d.dontLabel}</div>
            <div className="doc-entry__ruleDemo">
              <SgButton variant="primary" size="sm">{d.doBtn}</SgButton>
              <SgButton variant="primary" size="sm">{d.dontBtn}</SgButton>
            </div>
            <p>{d.dontText}</p>
          </div>
        </div>

        <div className="doc-entry__specs">
          <span>{d.specs.radius} <strong>{d.specs.radiusV}</strong></span>
          <span>{d.specs.padding} <strong>{d.specs.paddingV}</strong></span>
          <span>{d.specs.icon} <strong>{d.specs.iconV}</strong></span>
          <span>{d.specs.token} <strong className="doc-entry__token">{d.specs.tokenV}</strong></span>
        </div>
      </div>
    </Plate>
  );
}
