/**
 * Generic phone bezel for hi-fi screenshots.
 * Screen fills with object-fit: cover; object-position: top center.
 * Styles in hawi.css (.device-frame).
 */
export function DeviceFrame({ src, alt }) {
  return (
    <div className="device-frame">
      <div className="notch" aria-hidden="true" />
      <div className="screen">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
