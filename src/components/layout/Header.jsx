// src/components/layout/Header.jsx — v2 editorial topbar
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => i18n.changeLanguage(lng);
    const current = i18n.language?.startsWith("fr") ? "fr" : "en";

    return (
        <header className="topbar">
            <div className="left">
                <span style={{ color: "var(--fg)" }}>Virginia Martínez</span>
                <span style={{ opacity: 0.7 }}>{t("topbar.role")}</span>
            </div>

            <div className="mid">{t("topbar.mid")}</div>

            <div className="right">
                <div className="lang-pill" role="group" aria-label="Language">
                    <button
                        type="button"
                        onClick={() => changeLanguage("en")}
                        aria-pressed={current === "en"}
                    >
                        EN
                    </button>
                    <button
                        type="button"
                        onClick={() => changeLanguage("fr")}
                        aria-pressed={current === "fr"}
                    >
                        FR
                    </button>
                </div>

                <a href="#contact">{t("topbar.contact")}</a>

                <a
                    className="cv-btn"
                    href="/Virginia_Martinez_CV.pdf"
                    download
                >
                    <span>{t("topbar.cv")}</span>
                    <span aria-hidden="true">↓</span>
                </a>
            </div>
        </header>
    );
}
