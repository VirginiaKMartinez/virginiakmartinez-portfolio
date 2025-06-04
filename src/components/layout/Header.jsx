import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
    const { i18n, t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo / Nombre */}
                <div className="text-2xl font-semibold tracking-tight">
                    <Link to="/">Virginia</Link>
                </div>

                {/* Navegación */}
                <nav className="flex gap-6 text-sm font-medium">
                    <Link
                        to="/"
                        className="hover:text-blue-600 transition-colors"
                    >
                        {t("nav.home")}
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-blue-600 transition-colors"
                    >
                        {t("nav.contact")}
                    </Link>
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
