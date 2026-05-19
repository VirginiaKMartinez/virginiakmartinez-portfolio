import { Trans, useTranslation } from 'react-i18next';

export function StatsRow() {
  const { t } = useTranslation();
  const stats = [
    { n: '25+',  l: t('case.stats.components') },
    { n: '120+', l: t('case.stats.pages') },
    { n: '3',    l: t('case.stats.teams') },
    { n: '18 mo', l: t('case.stats.duration') },
  ];
  return (
    <div className="case-stats">
      {stats.map((s) => (
        <div key={s.l} className="case-stats__item">
          <div className="case-stats__n">{renderItalicTail(s.n)}</div>
          <div className="case-stats__l">{s.l}</div>
        </div>
      ))}
    </div>
  );
}

/** Wraps any trailing non-numeric token (+, mo, etc) in <span class="it"> for italic accent */
function renderItalicTail(s) {
  const match = s.match(/^(\d+)(.*)$/);
  if (!match) return s;
  const [, num, tail] = match;
  if (!tail) return num;
  return <>{num}<span className="it">{tail}</span></>;
}
