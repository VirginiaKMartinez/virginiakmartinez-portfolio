/** @type {import('tailwindcss').Config} */
import aspectRatio from "@tailwindcss/aspect-ratio";
import plugin from "tailwindcss/plugin";

export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                /* v2 editorial system */
                bg: "var(--bg)",
                bg2: "var(--bg-2)",
                fg: "var(--fg)",
                fgSoft: "var(--fg-soft)",
                mute: "var(--mute)",
                line: "var(--line)",
                lineSoft: "var(--line-soft)",
                accent: "var(--accent)",
                accentInk: "var(--accent-ink)",
                paper: "var(--paper)",

                /* legacy aliases (point to v2 tokens via CSS vars) */
                primary: "var(--color-primary)",
                link: "var(--color-link)",
                textDark: "var(--color-text-dark)",
                textMuted: "var(--color-text-muted)",
                background: "var(--color-bg)",
                backgroundWhite: "var(--color-bg-white)",
                dotsDefault: "var(--color-dots-default)",
                divider: "var(--color-divider)",
                textWhite: "var(--color-bg)",
            },
            fontFamily: {
                sans: [
                    "Söhne",
                    "Helvetica Neue",
                    "Helvetica",
                    "Inter",
                    "system-ui",
                    "sans-serif",
                ],
                display: ["Instrument Serif", "Newsreader", "Georgia", "serif"],
                mono: ["JetBrains Mono", "Geist Mono", "ui-monospace", "monospace"],
            },
            fontSize: {
                "t-xs": "var(--t-xs)",
                "t-sm": "var(--t-sm)",
                "t-md": "var(--t-md)",
                "t-lg": "var(--t-lg)",
                "t-xl": "var(--t-xl)",
                "t-2xl": "var(--t-2xl)",
                "t-3xl": "var(--t-3xl)",
                "t-4xl": "var(--t-4xl)",
                "t-5xl": "var(--t-5xl)",
            },
            maxWidth: {
                wrap: "var(--maxw)",
            },
            scrollPadding: {
                header: "var(--header-height)",
            },
        },
    },
    plugins: [
        aspectRatio,
        plugin(({ addBase }) => {
            addBase({
                ":root": {
                    "--header-height": "65px",
                },
                html: {
                    scrollPaddingTop: "var(--header-height)",
                },
            });
        }),
    ],
};
