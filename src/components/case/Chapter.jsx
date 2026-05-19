import { Trans } from 'react-i18next';

/**
 * Chapter — shared shell for each numbered section.
 *
 * Layout: 100px gutter column on the left (chapter num + side label),
 * then a 1fr / 1fr split for the two-column body. Children appear after.
 *
 *   ┌─────┬──────────────────────────────────┐
 *   │ 01  │ Title — with italic accent.      │
 *   ├─────┼─────────────┬────────────────────┤
 *   │Brief│ Big serif   │ Smaller body copy  │
 *   │     │ paragraph   │ paragraph(s)       │
 *   └─────┴─────────────┴────────────────────┘
 *   {children}
 */
export function Chapter({
  id,
  num,
  title,
  titleIt,           // italic accent that follows the title
  gutter,            // side label, e.g. "Brief", "Method", "Result"
  left,              // big serif paragraph (i18n key resolved)
  rightTop,          // smaller body paragraph
  rightBottom,       // optional second body paragraph
  children,
}) {
  return (
    <section id={id} className="case-chapter" data-screen-label={num}>
      <div className="case-chapter__head">
        <div className="case-chapter__num">{num}</div>
        <h2>
          {title}{' '}
          {titleIt && <span className="it">{titleIt}</span>}
        </h2>
      </div>

      <div className="case-chapter__body">
        <div className="case-chapter__gutter">{gutter}</div>

        <div className="case-chapter__col">
          {/* big serif paragraph; supports inline <em> via Trans */}
          <Paragraph value={left} display />
        </div>

        <div className="case-chapter__col case-chapter__col--note">
          {rightTop && <Paragraph value={rightTop} />}
          {rightBottom && <Paragraph value={rightBottom} />}
        </div>
      </div>

      {children}
    </section>
  );
}

/**
 * Inline-em-friendly paragraph. The translation string can include
 * <em>...</em> tags for accent words; everything else stays plain text.
 */
function Paragraph({ value, display = false }) {
  return (
    <p className={display ? 'case-chapter__display' : undefined}>
      <Trans defaults={value} components={{ em: <em /> }} />
    </p>
  );
}
