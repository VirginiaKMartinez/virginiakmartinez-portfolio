/** @type {import('tailwindcss').Config} */
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                link: "var(--color-link)",
                accent: {
                    coral: "var(--color-accent-coral)",
                    mustard: "var(--color-accent-mustard)",
                    indigo: "var(--color-accent-indigo)",
                    tealDark: "var(--color-accent-teal)",
                },
                textDark: "var(--color-text-dark)",
                textMuted: "var(--color-text-muted)",
                background: "var(--color-bg)",
                dotsDefault: "var(--color-dots-default)",
                divider: "var(--color-divider)",
            },
            fontFamily: {
                sans: ["Noto Sans", "sans-serif"],
            },
        },
    },
    plugins: [aspectRatio],
};
