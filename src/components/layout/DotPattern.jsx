// src/components/layout/DotPattern.jsx
import React from "react";

export default function DotPattern({
    className = "",
    /** Distancia entre los puntos (grid size) */
    size = 20,
    /** Tamaño del punto en píxeles */
    dotSize = 1,
    /** Color CSS var de cada punto, p.e. "--color-divider" */
    colorVar = " --color-accent-coral",
}) {
    // Creamos dos gradients desplazados para formar la cuadrícula
    const bgImage = `
    radial-gradient(var(${colorVar}) ${dotSize}px, transparent ${dotSize}px),
    radial-gradient(var(${colorVar}) ${dotSize}px, transparent ${dotSize}px)
  `;
    const bgSize = `${size}px ${size}px`;
    const offset = size / 2;
    const bgPosition = `0 0, ${offset}px ${offset}px`;

    return (
        <div
            className={className}
            style={{
                backgroundImage: bgImage,
                backgroundSize: bgSize,
                backgroundPosition: bgPosition,
            }}
        />
    );
}
