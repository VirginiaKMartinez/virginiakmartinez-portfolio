// src/components/layout/Header.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
    const [open, setOpen] = useState(false);
    const { i18n, t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
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
                <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-2 lg:grid-cols-[auto_1fr_auto] items-center">
                    {/* Botón hamburguesa en < lg */}
                    <button
                        className="lg:hidden w-11 h-11 flex items-center justify-center rounded transition-colors hover:bg-divider focus:outline-none"
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

                    {/* Logo en ≥ lg */}
                    <div className="hidden lg:block justify-self-start font-sans text-2xl">
                        <a
                            href="#hero"
                            className="hover:text-link transition-colors"
                        >
                            Virginia Martínez
                        </a>
                    </div>

                    {/* Nav desktop ≥ lg con scroll-mask */}
                    <nav className="hidden lg:flex scroll-mask justify-self-center space-x-8 text-base text-textMuted font-sans px-4">
                        {sections.map(({ id, label }) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                className="inline-block hover:text-link transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    {/* Selector de idioma siempre visible */}
                    <div className="justify-self-end flex gap-4 text-sm font-sans">
                        {["en", "fr"].map((lng) => (
                            <button
                                key={lng}
                                onClick={() => changeLanguage(lng)}
                                className={`
                  px-3 py-1 rounded-lg transition-colors hover:bg-divider
                  ${i18n.language === lng ? "font-bold underline" : ""}
                `}
                            >
                                {lng.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* Overlay full-screen en < lg */}
            {open && (
                <div
                    className="fixed inset-0 bg-white z-40 flex flex-col px-6 py-8 lg:hidden"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Cerrar */}
                    <div className="flex justify-end">
                        <button
                            className="w-11 h-11 flex items-center justify-center rounded transition-colors hover:bg-divider focus:outline-none"
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

                    {/* Enlaces centrados verticalmente, bloque centrado y texto a la izquierda */}
                    <nav className="flex-1 flex items-center justify-center">
                        <ul className="space-y-6 text-xl text-textDark w-full max-w-xs">
                            {sections.map(({ id, label }) => (
                                <li key={id}>
                                    <a
                                        href={`#${id}`}
                                        className="block text-left hover:text-link transition-colors"
                                        onClick={() => setOpen(false)}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
}
