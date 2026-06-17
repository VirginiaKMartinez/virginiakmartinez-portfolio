import { DeviceFrame } from '@/components/hawi/DeviceFrame';

/**
 * ScreenStrip — a labelled row of real product screenshots in phone bezels.
 *
 * Reuses the generic DeviceFrame bezel. Auto-fits 1–4 screens per row.
 *
 * @param {string} kicker   small mono label above the row
 * @param {{src,alt,cap}[]} screens
 */
export function ScreenStrip({ kicker, screens = [] }) {
  return (
    <section className="gz-screens" data-screen-label={kicker}>
      {kicker && <div className="gz-screens__kicker">{kicker}</div>}
      <div className="gz-screens__row">
        {screens.map((s) => (
          <figure key={s.src} className="gz-screens__item">
            <DeviceFrame src={s.src} alt={s.alt} />
            {s.cap && <figcaption>{s.cap}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  );
}
