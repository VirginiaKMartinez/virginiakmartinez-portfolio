import { useTranslation } from 'react-i18next';

/**
 * Stats row — shared by all case studies.
 *
 * Pass a `stats` prop (array of { n, it?, l }) to override the default S&G data.
 * `it` = optional italic suffix (e.g. "mo", "+"). When absent, renderItalicTail
 * extracts any trailing non-numeric chars from `n` (backward-compatible).
 */
export function StatsRow({ stats: statsProp }) {
  const { t } = useTranslation();

  const stats = statsProp ?? [
    { n: '25+',   l: t('case.stats.components') },
    { n: '120+',  l: t('case.stats.pages') },
    { n: '3',     l: t('case.stats.teams') },
    { n: '18 mo', l: t('case.stats.duration') },
  ];

  return (
    <div className="case-stats">
      {stats.map((s, i) => (
        <div key={i} className="case-stats__item">
          <div className="case-stats__n">
            {s.it
              ? <>{s.n}<span className="it">{s.it}</span></>
              : renderItalicTail(s.n)
            }
          </div>
          <div className="case-stats__l">{s.l}</div>
        </div>
      ))}
    </div>
  );
}

/** Wraps any trailing non-numeric token (+, mo, etc.) in <span class="it"> */
function renderItalicTail(s) {
  const match = s.match(/^(\d+)(.*)$/);
  if (!match) return s;
  const [, num, tail] = match;
  if (!tail) return num;
  return <>{num}<span className="it">{tail}</span></>;
}
