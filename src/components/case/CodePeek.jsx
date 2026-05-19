/**
 * CodePeek — the SCSS snippet under the Engineering chapter.
 *
 * Hand-rolled syntax highlighting (no Prism etc) — the snippet is short
 * and the styling is part of the design intent. If you ever want a real
 * highlighter, drop Prism's React renderer in here instead.
 */
export function CodePeek() {
  return (
    <pre className="case-code">
      <Line n={1}><Cm>// _tokens.scss — generated from Figma variables, hand-curated</Cm></Line>
      <Line n={2}><Kw>$color-primary</Kw>:         <St>#144D9D</St>;  <Cm>// actions, links</Cm></Line>
      <Line n={3}><Kw>$color-accent</Kw>:          <St>#3487FA</St>;  <Cm>// hovers, focus, selection</Cm></Line>
      <Line n={4}><Kw>$color-primary-pressed</Kw>: <St>#21416E</St>;</Line>
      <Line n={5}><Kw>$color-ink-darkest</Kw>:     <St>#142133</St>;  <Cm>// titles</Cm></Line>
      <Line n={6}><Kw>$color-ink-dark</Kw>:        <St>#475466</St>;  <Cm>// secondary text</Cm></Line>
      <Line n={7}><Kw>$color-alert</Kw>:           <St>#F53E2E</St>;  <Cm>// destructive only</Cm></Line>
      <Line n={8}>{' '}</Line>
      <Line n={9}><Kw>$space-4</Kw>: 16px;  <Kw>$space-6</Kw>: 24px;</Line>
      <Line n={10}><Kw>$radius-sm</Kw>: 4px; <Kw>$radius-md</Kw>: 8px;</Line>
      <Line n={11}>{' '}</Line>
      <Line n={12}><Cm>{'// Used by <sg-button> — Angular 16 component'}</Cm></Line>
      <Line n={13}>.sg-button &#123;</Line>
      <Line n={14}>{'  '}padding: <Kw>$space-2</Kw> <Kw>$space-4</Kw>;</Line>
      <Line n={15}>{'  '}border-radius: <Kw>$radius-sm</Kw>;</Line>
      <Line n={16}>{'  '}font: 500 14px/1 <St>"Roboto"</St>, sans-serif;</Line>
      <Line n={17}>{'  '}&amp;--primary &#123; background: <Kw>$color-primary</Kw>; color: white; &#125;</Line>
      <Line n={18}>{'  '}&amp;--primary:hover &#123; background: <Kw>$color-accent</Kw>; &#125;</Line>
      <Line n={19}>{'  '}&amp;--alert   &#123; background: <Kw>$color-alert</Kw>; color: white; &#125;</Line>
      <Line n={20}>&#125;</Line>
    </pre>
  );
}

const Line = ({ n, children }) => <><span className="case-code__ln">{n}</span>{children}{'\n'}</>;
const Kw = ({ children }) => <span className="case-code__kw">{children}</span>;
const St = ({ children }) => <span className="case-code__st">{children}</span>;
const Cm = ({ children }) => <span className="case-code__cm">{children}</span>;
