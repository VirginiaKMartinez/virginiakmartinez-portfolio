/**
 * Generic phone bezel for hi-fi screenshots.
 * Screen fills with object-fit: cover; object-position: top center.
 * Styles in hawi.css (.device-frame).
 * `loading` defaults to lazy; pass "eager" when the frame sits in a hero.
 */
export function DeviceFrame({ src, alt, loading = "lazy" }) {
  return (
    <div className="device-frame">
      <div className="notch" aria-hidden="true" />
      <div className="screen">
        <img src={src} alt={alt} loading={loading} decoding="async" />
      </div>
    </div>
  );
}
