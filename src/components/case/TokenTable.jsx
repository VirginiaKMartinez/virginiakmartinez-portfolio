import { useTranslation } from 'react-i18next';

/**
 * Real Staff & Go palette tokens, with hex + Sass name. The first column
 * shows a colored swatch; the rest is static — no i18n on the hex values
 * themselves, only the "Used for" column.
 */
const ROWS = [
  { name: 'color.primary',         hex: '#144D9D', sass: '$color-primary',         useKey: 'tokens.primary' },
  { name: 'color.accent',          hex: '#3487FA', sass: '$color-accent',          useKey: 'tokens.accent' },
  { name: 'color.primary.pressed', hex: '#21416E', sass: '$color-primary-pressed', useKey: 'tokens.pressed' },
  { name: 'color.ink.darkest',     hex: '#142133', sass: '$color-ink-darkest',     useKey: 'tokens.inkDarkest' },
  { name: 'color.ink.dark',        hex: '#475466', sass: '$color-ink-dark',        useKey: 'tokens.inkDark' },
  { name: 'color.ink.medium',      hex: '#8795A8', sass: '$color-ink-medium',      useKey: 'tokens.inkMedium' },
  { name: 'color.ink.light',       hex: '#DAE4F2', sass: '$color-ink-light',       useKey: 'tokens.inkLight' },
  { name: 'color.ink.lightest',    hex: '#F5F9FF', sass: '$color-ink-lightest',    useKey: 'tokens.inkLightest' },
  { name: 'color.alert',           hex: '#F53E2E', sass: '$color-alert',           useKey: 'tokens.alert' },
  { name: 'color.success',         hex: '#2ED47A', sass: '$color-success',         useKey: 'tokens.success' },
  { name: 'color.warning',         hex: '#FFB946', sass: '$color-warning',         useKey: 'tokens.warning' },
  { name: 'color.advance',         hex: '#883BCF', sass: '$color-advance',         useKey: 'tokens.advance' },
];

const EXTRA = [
  { name: 'space.4 / space.6',     hex: '16 px / 24 px', sass: '$space-4, $space-6',     useKey: 'tokens.space' },
  { name: 'radius.sm / radius.md', hex: '4 px / 8 px',   sass: '$radius-sm, $radius-md', useKey: 'tokens.radius' },
  { name: 'type.h3 / body.m',      hex: 'Roboto 32/110 700 · 16/140 400', sass: '$type-h3, $type-body-m', useKey: 'tokens.type' },
];

export function TokenTable() {
  const { t } = useTranslation();
  return (
    <table className="case-token-tab" aria-label="Token sample">
      <thead>
        <tr>
          <th>{t('case.tokens.col.token')}</th>
          <th>{t('case.tokens.col.value')}</th>
          <th>{t('case.tokens.col.usedFor')}</th>
          <th>{t('case.tokens.col.sass')}</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.name}>
            <td><span className="case-token-tab__sw" style={{ background: r.hex }} />{r.name}</td>
            <td>{r.hex}</td>
            <td>{t(`case.${r.useKey}`)}</td>
            <td>{r.sass}</td>
          </tr>
        ))}
        {EXTRA.map((r) => (
          <tr key={r.name}>
            <td>{r.name}</td>
            <td>{r.hex}</td>
            <td>{t(`case.${r.useKey}`)}</td>
            <td>{r.sass}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
