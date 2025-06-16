// src/components/layout/Header.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
    const [open, setOpen] = useState(false);
    const { i18n, t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        // si cambias idioma en móvil, cerramos el menú
        if (open) setOpen(false);
    };

    const sections = [
        { id: "experience", label: t("header.experience") },
        { id: "education", label: t("header.education") },
        { id: "casestudies", label: t("header.caseStudies") },
        { id: "testimonials", label: t("header.testimonials") },
        { id: "contact", label: t("header.contact") },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-white border-b border-divider z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-[auto_1fr_auto] items-center">
                    {/* botón hamburguesa móvil */}
                    <button
                        className="sm:hidden p-2 rounded-md hover:bg-divider transition-colors"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        onClick={() => setOpen((o) => !o)}
                    >
                        <svg
                            className="w-6 h-6 text-textMuted"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    open
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 8h16M4 16h16"
                                }
                            />
                        </svg>
                    </button>

                    {/* logo en desktop */}
                    <div className="hidden sm:block justify-self-start font-sans text-2xl">
                        <a
                            href="#hero"
                            className="hover:text-link transition-colors"
                        >
                            Virginia Martínez
                        </a>
                    </div>

                    {/* nav desktop */}
                    <nav className="hidden sm:flex justify-self-center gap-8 text-base text-textMuted font-sans">
                        {sections.map(({ id, label }) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                className="hover:text-link transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    {/* idiomas */}
                    <div className="flex justify-end gap-4 text-sm font-sans">
                        {["en", "fr"].map((lng) => (
                            <button
                                key={lng}
                                onClick={() => changeLanguage(lng)}
                                className={`
                  px-3 py-1 rounded-lg transition-colors
                  hover:bg-divider
                  ${i18n.language === lng ? "font-bold underline" : ""}
                `}
                            >
                                {lng.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* Overlay full-screen */}
            {open && (
                <div
                    className="fixed inset-0 bg-white z-40 flex flex-col justify-between px-6 py-8"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Header del overlay */}
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold font-sans text-textDark">
                            Virginia Martínez
                        </span>
                        <button
                            className="p-2 rounded-md hover:bg-divider transition-colors"
                            aria-label="Close menu"
                            onClick={() => setOpen(false)}
                        >
                            <svg
                                className="w-6 h-6 text-textMuted"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Enlaces de sección */}
                    <nav className="flex flex-col items-center space-y-6 text-xl text-textDark">
                        {sections.map(({ id, label }) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                role="menuitem"
                                className="hover:text-link transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
}
