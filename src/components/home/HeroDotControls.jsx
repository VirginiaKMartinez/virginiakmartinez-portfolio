// src/components/home/HeroDotControls.jsx
// Dev-only live panel to tweak the hero dot pattern. Appears only when the
// URL has a `?dots` query param. Each slider writes a CSS variable on :root in
// real time. Once you find values you like, copy them into the :root block in
// editorial.css and remove the ?dots param — the panel disappears on its own.
import { useEffect, useState } from "react";

const CONTROLS = [
    { var: "--hero-dot-size", label: "Size", min: 0.5, max: 4, step: 0.5, unit: "px", def: 1 },
    { var: "--hero-dot-gap", label: "Gap", min: 10, max: 48, step: 2, unit: "px", def: 22 },
    { var: "--hero-dot-opacity", label: "Opacity", min: 0, max: 1, step: 0.05, unit: "", def: 0.35 },
    { var: "--hero-dot-fade", label: "Side fade", min: 0, max: 45, step: 1, unit: "%", def: 18 },
    { var: "--hero-dot-fade-bottom", label: "Btm fade", min: 20, max: 95, step: 1, unit: "%", def: 62 },
];

export default function HeroDotControls() {
    const [enabled, setEnabled] = useState(false);
    const [values, setValues] = useState(() =>
        Object.fromEntries(CONTROLS.map((c) => [c.var, c.def]))
    );

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setEnabled(params.has("dots"));
    }, []);

    const update = (control, raw) => {
        const next = { ...values, [control.var]: raw };
        setValues(next);
        document.documentElement.style.setProperty(
            control.var,
            `${raw}${control.unit}`
        );
    };

    if (!enabled) return null;

    return (
        <aside className="dot-controls" aria-label="Hero dot pattern controls">
            <p className="dot-controls__title">Hero dots</p>
            {CONTROLS.map((c) => (
                <label key={c.var} className="dot-controls__row">
                    <span>{c.label}</span>
                    <input
                        type="range"
                        min={c.min}
                        max={c.max}
                        step={c.step}
                        value={values[c.var]}
                        onChange={(e) => update(c, e.target.value)}
                    />
                    <code>
                        {values[c.var]}
                        {c.unit}
                    </code>
                </label>
            ))}
        </aside>
    );
}
