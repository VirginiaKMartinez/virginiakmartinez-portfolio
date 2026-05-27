import { useTranslation } from 'react-i18next';

/**
 * 4-step project flow: Concept → Discovery → Design → Prototype.
 * The fourth step inverts to rust + white — the concept reveal.
 * Data from case.hawi.ohanaFlow (i18n array).
 */
export function OhanaFlow() {
  const { t } = useTranslation();
  const steps = t('case.hawi.ohanaFlow', { returnObjects: true });

  if (!Array.isArray(steps)) return null;

  return (
    <div className="ohana-flow">
      {steps.map((step, i) => (
        <article
          key={i}
          className={`ohana-step${i === steps.length - 1 ? ' concept' : ''}`}
        >
          <div className="num">{step.step}</div>
          <h5>{step.title}</h5>
          <p>{step.desc}</p>
        </article>
      ))}
    </div>
  );
}
