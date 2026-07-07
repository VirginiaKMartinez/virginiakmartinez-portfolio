/**
 * ScrollPhone — a phone bezel whose screen scrolls vertically, so a long
 * screenshot can be explored in place like a prototype. Cross-case reusable
 * (Gazella, Fiche…); styles live in case.css under `.scrollphone`.
 *
 * @param {string} src   full-length screenshot (tall)
 * @param {string} alt   accessible description
 * @param {string} hint  optional scroll-affordance label
 */
export function ScrollPhone({ src, alt, hint }) {
  return (
    <div className="scrollphone">
      <div className="screen">
        <div className="scroller">
          <img src={src} alt={alt} loading="lazy" decoding="async" />
        </div>
        {hint && (
          <span className="scroll-hint" aria-hidden="true">
            <span className="scroll-hint__ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18" />
                <path d="M7 8l5-5 5 5" />
                <path d="M7 16l5 5 5-5" />
              </svg>
            </span>
            {hint}
          </span>
        )}
      </div>
    </div>
  );
}
