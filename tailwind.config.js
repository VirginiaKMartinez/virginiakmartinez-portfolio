/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#3AD8FA",
                link: "#00ABD1",
                textDark: "#333333",
                textMuted: "#6a6a6a",
                divider: "#f2f2f2",
                background: "#FDFDFD",
            },
            fontFamily: {
                sans: ["Noto Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
