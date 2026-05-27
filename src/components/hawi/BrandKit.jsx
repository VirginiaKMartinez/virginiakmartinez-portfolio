import { useTranslation } from 'react-i18next';
import { HawiLogomark } from './HawiLogomark';

/**
 * Brand kit — imagotipo variants + corporate palette (left) + Nunito type spec (right).
 */
export function BrandKit() {
  const { t } = useTranslation();

  const palette = [
    { name: t('case.hawi.brandKit.palette.rust'),    hex: '#9A3C1C', cls: 'sw-rust' },
    { name: t('case.hawi.brandKit.palette.burnt'),   hex: '#A82C01', cls: 'sw-rust-dark' },
    { name: t('case.hawi.brandKit.palette.navy'),    hex: '#042635', cls: 'sw-navy' },
    { name: t('case.hawi.brandKit.palette.inkBlue'), hex: '#0C2866', cls: 'sw-blue' },
    { name: t('case.hawi.brandKit.palette.sun'),     hex: '#F1EA8D', cls: 'sw-yellow' },
  ];

  return (
    <div className="brand-kit">
      <div className="col-left">
        <h4>{t('case.hawi.brandKit.logoLabel')}</h4>
        <div className="logo-row">
          <div className="logo-card l-white"><HawiLogomark /><span>hawi</span></div>
          <div className="logo-card l-tan"  ><HawiLogomark /><span>hawi</span></div>
          <div className="logo-card l-rust" ><HawiLogomark tone="onRust" /><span>hawi</span></div>
        </div>

        <h4>{t('case.hawi.brandKit.paletteLabel')}</h4>
        <div className="swatches">
          {palette.map((s) => (
            <div key={s.hex} className={`swatch-card ${s.cls}`}>
              <span className="name">{s.name}</span>
              <span className="hex">{s.hex}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="col-right">
        <h4>{t('case.hawi.brandKit.typeLabel')}</h4>
        <div className="type-spec">
          <div className="display">Nn</div>
          <div className="type-spec-line">{t('case.hawi.brandKit.typeSpec')}</div>
          <div className="glyphs">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
            {' — \'?"! (%) [#] '}&#123;@&#125;{' / & < — + ÷ × = >'}
          </div>
        </div>
      </div>
    </div>
  );
}
