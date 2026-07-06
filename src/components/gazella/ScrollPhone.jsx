/**
 * ScrollPhone — a phone bezel whose screen scrolls vertically, so a long
 * screenshot can be explored in place like a prototype.
 *
 * @param {string} src   full-length screenshot (tall)
 * @param {string} alt   accessible description
 * @param {string} hint  optional scroll-affordance label
 */
export function ScrollPhone({ src, alt, hint }) {
  return (
    <div className="gz-scrollphone">
      <div className="screen">
        <div className="scroller">
          <img src={src} alt={alt} loading="lazy" decoding="async" />
        </div>
        {hint && <span className="scroll-hint" aria-hidden="true">{hint}</span>}
      </div>
    </div>
  );
}
