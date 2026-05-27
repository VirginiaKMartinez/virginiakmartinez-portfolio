import { useTranslation } from 'react-i18next';
import { DeviceFrame } from './DeviceFrame';

/**
 * Plate 07 — hi-fi chat mockup on a rust gradient.
 * Copy left · DeviceFrame right. Stacks below 920px.
 */
export function MockupStage() {
  const { t } = useTranslation();
  const h = t('case.hawi.mockup', { returnObjects: true });

  return (
    <section className="mockup-stage">
      <div className="copy">
        <div className="label">{h.kicker}</div>
        <h3>
          {h.headingPre}<em>{h.headingIt}</em>{h.headingPost}
        </h3>
        <p>{h.body}</p>
      </div>
      <DeviceFrame
        src="/case/hawi/hawi-chat-hifi.png"
        alt={t('case.hawi.plates.chat.alt')}
      />
    </section>
  );
}
