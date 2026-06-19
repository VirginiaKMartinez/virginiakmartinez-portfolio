/**
 * BeforeAfter — stacked before → after comparison for a redesign.
 * Each item: a mono label (kicker + small note) over a bordered screenshot.
 *
 * @param {{label,note,src,alt}} before
 * @param {{label,note,src,alt}} after
 */
export function BeforeAfter({ before, after }) {
  return (
    <div className="fiche-ba">
      <figure className="fiche-ba__item">
        <figcaption className="fiche-ba__label">
          <span className="k">{before.label}</span>
          <span className="d">{before.note}</span>
        </figcaption>
        <div className="fiche-ba__shot">
          <img src={before.src} alt={before.alt} />
        </div>
      </figure>

      <div className="fiche-ba__arrow" aria-hidden="true">↓</div>

      <figure className="fiche-ba__item">
        <figcaption className="fiche-ba__label">
          <span className="k">{after.label}</span>
          <span className="d">{after.note}</span>
        </figcaption>
        <div className="fiche-ba__shot">
          <img src={after.src} alt={after.alt} />
        </div>
      </figure>
    </div>
  );
}
