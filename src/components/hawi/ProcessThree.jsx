import { useTranslation } from 'react-i18next';

/**
 * Sketch → Blockframe → Wireframe (hi-fi) progression for the Locator screen.
 * Real exported frames (cropped from the original Figma board) sit in each
 * device slot; arrows connect adjacent stages.
 */
const STAGES = [
  { key: 'boceto',     src: '/case/hawi/hawi-stage-sketch.png' },
  { key: 'blockframe', src: '/case/hawi/hawi-stage-blockframe.png' },
  { key: 'wireframe',  src: '/case/hawi/hawi-stage-wireframe.png' },
];

export function ProcessThree() {
  const { t } = useTranslation();
  const labels = t('case.hawi.processThree', { returnObjects: true });

  return (
    <div className="process-3">
      {STAGES.map(({ key, src }) => {
        const l = labels[key];
        return (
          <article key={key}>
            <div className="step-tag">
              <span>{l.kicker}</span>
              <span>{l.kind}</span>
            </div>
            <h5>{l.heading}</h5>
            <div className="device device--shot">
              <img src={src} alt={l.deviceLabel ?? l.heading} loading="lazy" decoding="async" />
              <span className="arrow" aria-hidden="true">›</span>
            </div>
            <p className="step-desc">{l.desc}</p>
          </article>
        );
      })}
    </div>
  );
}
