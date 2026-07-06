import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: import.meta.env.DEV,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: "/locales/{{lng}}/translation.json",
        },
    });

// Keep <html lang> in sync so screen readers use the right pronunciation
// (WCAG 3.1.1). Normalise region variants (e.g. "fr-FR" → "fr").
const applyHtmlLang = (lng) => {
    const short = (lng || "en").split("-")[0];
    document.documentElement.setAttribute("lang", short);
};
applyHtmlLang(i18n.language);
i18n.on("languageChanged", applyHtmlLang);

export default i18n;
