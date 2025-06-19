import React from "react";

export default function DotPattern({
    className = "",
    size = 20,
    colorVar = "--color-divider",
}) {
    // Creamos el patrón usando CSS vars para el color
    const bgImage = `
    radial-gradient(var(${colorVar}) 1px, transparent 1px),
    radial-gradient(var(${colorVar}) 1px, transparent 1px)
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
