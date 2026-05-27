import { useTranslation } from 'react-i18next';

/**
 * Four user-role cards: Peter / Susan / Mark / Oliver.
 * Avatar = first letter in italic display serif inside a tan circle.
 */
export function ActorCards() {
  const { t } = useTranslation();
  const actors = t('case.hawi.actors', { returnObjects: true });

  if (!Array.isArray(actors)) return null;

  return (
    <div className="actors">
      {actors.map((a) => (
        <article key={a.name} className="actor">
          <div className="avatar" aria-hidden="true">{a.avatar}</div>
          <h5>{a.name}</h5>
          <div className="who">{a.role}</div>
          <p>{a.body}</p>
        </article>
      ))}
    </div>
  );
}
