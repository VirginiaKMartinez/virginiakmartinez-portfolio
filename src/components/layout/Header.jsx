import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
    const { i18n, t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-divider">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo / Nombre */}
                <div className="text-2xl font-normal tracking-tight">
                    <a
                        href="#hero"
                        className="hover:text-link transition-colors"
                    >
                        Virginia Martínez
                    </a>{" "}
                </div>

                {/* Navegación */}
                <nav className="flex gap-6 text-base font-nromal text-textMuted">
                    <a
                        href="#experience"
                        className="hover:text-link transition-colors"
                    >
                        {t("header.experience")}
                    </a>
                    <a
                        href="#education"
                        className="hover:text-link transition-colors"
                    >
                        {t("header.education")}
                    </a>
                    <a
                        href="#casestudies"
                        className="hover:text-link transition-colors"
                    >
                        {t("header.caseStudies")}
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-link transition-colors"
                    >
                        {t("header.contact")}
                    </a>
                </nav>

                {/* Idiomas */}
                <div className="flex gap-2 text-sm">
                    <button
                        onClick={() => changeLanguage("en")}
                        className={`px-2 py-1 rounded hover:bg-gray-100 ${
                            i18n.language === "en" ? "font-bold underline" : ""
                        }`}
                    >
                        EN
                    </button>
                    <button
                        onClick={() => changeLanguage("fr")}
                        className={`px-2 py-1 rounded hover:bg-gray-100 ${
                            i18n.language === "fr" ? "font-bold underline" : ""
                        }`}
                    >
                        FR
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header;
