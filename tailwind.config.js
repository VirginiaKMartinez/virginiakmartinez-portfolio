/** @type {import('tailwindcss').Config} */
import aspectRatio from "@tailwindcss/aspect-ratio";
import plugin from "tailwindcss/plugin";

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
                textWhite:"var(--color-bg)",
            },
            fontFamily: {
                sans: ["Noto Sans", "sans-serif"],
            },
            scrollPadding: {
                header: "var(--header-height)",
            },
        },
    },
    plugins: [
        aspectRatio,
        // este plugin inyecta nuestra regla base
        plugin(({ addBase }) => {
            addBase({
                // define tu variable CSS
                ":root": {
                    "--header-height": "65px",
                },
                // aplica scroll-padding-top a html
                html: {
                    scrollPaddingTop: "var(--header-height)",
                },
            });
        }),
    ],
};
