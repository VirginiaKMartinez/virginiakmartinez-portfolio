import { useTranslation } from 'react-i18next';

/**
 * Sketch → Blockframe → Wireframe (hi-fi) progression for the Locator screen.
 * Device contents drawn with CSS — no images. Arrows connect adjacent stages.
 */
export function ProcessThree() {
  const { t } = useTranslation();
  const labels = t('case.hawi.processThree', { returnObjects: true });

  return (
    <div className="process-3">

      {/* Stage 01 — Boceto (paper) */}
      <article>
        <div className="step-tag">
          <span>{labels.boceto.kicker}</span>
          <span>{labels.boceto.kind}</span>
        </div>
        <h5>{labels.boceto.heading}</h5>
        <div className="device">
          <SketchDevice label={labels.boceto.deviceLabel} />
          <span className="arrow" aria-hidden="true">›</span>
        </div>
        <p className="step-desc">{labels.boceto.desc}</p>
      </article>

      {/* Stage 02 — Blockframe */}
      <article>
        <div className="step-tag">
          <span>{labels.blockframe.kicker}</span>
          <span>{labels.blockframe.kind}</span>
        </div>
        <h5>{labels.blockframe.heading}</h5>
        <div className="device">
          <BlockframeDevice />
          <span className="arrow" aria-hidden="true">›</span>
        </div>
        <p className="step-desc">{labels.blockframe.desc}</p>
      </article>

      {/* Stage 03 — Wireframe (hi-fi) */}
      <article>
        <div className="step-tag">
          <span>{labels.wireframe.kicker}</span>
          <span>{labels.wireframe.kind}</span>
        </div>
        <h5>{labels.wireframe.heading}</h5>
        <div className="device">
          <HiFiDevice
            offline={labels.wireframe.offline}
            howToGet={labels.wireframe.howToGet}
            callOhana={labels.wireframe.callOhana}
          />
        </div>
        <p className="step-desc">{labels.wireframe.desc}</p>
      </article>

    </div>
  );
}

// --- device contents (CSS-drawn, no images) ----------------------------

function SketchDevice({ label }) {
  return (
    <div className="device-content sketch-device" aria-label={label}>
      <div className="sk-title">Locator</div>
      <div className="sk-x">×</div>
      <div className="sk-sub">Dad offline</div>
      <div className="sk-toggle">now</div>
      <div className="sk-toggle on" />
      <div className="sk-map" />
      <div className="sk-foot"><span>How to get</span><span>Call</span></div>
    </div>
  );
}

function BlockframeDevice() {
  return (
    <div className="device-content block-device" aria-hidden="true">
      <div className="b-header" />
      <div className="b-tiles" />
      <div className="b-pin" />
      <div className="b-foot"><div /><div /></div>
    </div>
  );
}

function HiFiDevice({ offline, howToGet, callOhana }) {
  return (
    <div className="device-content hifi-device">
      <div className="h-bar">
        <span>Peter</span>
        <span className="pill">{offline}</span>
      </div>
      <div className="h-map">
        <div className="h-route" />
        <div className="h-stop" />
        <div className="h-pin" />
      </div>
      <div className="h-foot">
        <div className="row">
          <div className="blue">{howToGet}</div>
          <div className="accent">{callOhana}</div>
        </div>
        <div className="slider" />
      </div>
    </div>
  );
}
