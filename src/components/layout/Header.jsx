// src/components/layout/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => i18n.changeLanguage(lng);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-divider">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo / Nombre */}
                <Link
                    to="/"
                    className="text-xl font-medium hover:text-link transition-colors"
                >
                    Virginia Martínez
                </Link>

                {/* Navegación interna via anclas */}
                <nav className="flex items-center space-x-6 text-textMuted">
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
                        href="#testimonials"
                        className="hover:text-link transition-colors"
                    >
                        {t("header.testimonials")}
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-link transition-colors"
                    >
                        {t("header.contact")}
                    </a>
                </nav>

                {/* Switch idioma */}
                <div className="flex gap-2 text-sm">
                    <button
                        onClick={() => changeLanguage("en")}
                        className={`px-2 py-1 rounded hover:bg-gray-100 transition-colors ${
                            i18n.language === "en" ? "font-bold underline" : ""
                        }`}
                    >
                        EN
                    </button>
                    <button
                        onClick={() => changeLanguage("fr")}
                        className={`px-2 py-1 rounded hover:bg-gray-100 transition-colors ${
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
