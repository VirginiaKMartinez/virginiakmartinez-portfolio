// src/components/layout/DotPattern.jsx
export default function DotPattern({
    colorVar = "--color-divider",
    className = "absolute inset-0 w-full h-full",
}) {
    return (
        <svg
            className={className}
            style={{ color: `var(${colorVar})` }}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
        >
            <defs>
                <pattern
                    id="dotPattern"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                >
                    <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
    );
}
