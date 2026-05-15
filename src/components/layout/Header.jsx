// src/components/layout/Header.jsx — v2.4.2 editorial topbar with primary nav + mobile hamburger
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Icon from "../Icon";

const NAV_SECTIONS = [
    { id: "work", labelKey: "side.work" },
    { id: "about", labelKey: "side.about" },
    { id: "experience", labelKey: "side.experience" },
    { id: "education", labelKey: "side.education" },
    { id: "contact", labelKey: "side.contact" },
];

export default function Header() {
    const { t, i18n } = useTranslation();
    const [current, setCurrent] = useState("cover");
    const [menuOpen, setMenuOpen] = useState(false);
    const visibilityRef = useRef(new Map());

    const changeLanguage = (lng) => i18n.changeLanguage(lng);
    const currentLang = i18n.language?.startsWith("fr") ? "fr" : "en";

    // Track active section with IntersectionObserver
    useEffect(() => {
        const ids = ["cover", ...NAV_SECTIONS.map((s) => s.id)];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    visibilityRef.current.set(e.target.id, e.isIntersecting);
                });
                const ordered = ids;
                const firstVisible = ordered.find((id) =>
                    visibilityRef.current.get(id)
                );
                if (firstVisible) setCurrent(firstVisible);
            },
            { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    // Close mobile overlay with Escape
    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [menuOpen]);

    // Lock body scroll while overlay is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const handleNavClick = (e, id) => {
        const el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
        setCurrent(id);
        setMenuOpen(false);
    };

    return (
        <>
            <header className="topbar">
                <div className="left">
                    <a
                        href="#cover"
                        onClick={(e) => handleNavClick(e, "cover")}
                        style={{ color: "var(--fg)" }}
                    >
                        Virginia Martínez
                    </a>
                    <span style={{ opacity: 0.7 }}>{t("topbar.role")}</span>
                </div>

                <nav className="topbar-nav" aria-label="Primary">
                    {NAV_SECTIONS.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            className={current === s.id ? "is-current" : ""}
                            onClick={(e) => handleNavClick(e, s.id)}
                        >
                            {t(s.labelKey)}
                        </a>
                    ))}
                </nav>

                <div className="right">
                    <div
                        className="lang-pill"
                        role="group"
                        aria-label="Language"
                    >
                        <button
                            type="button"
                            onClick={() => changeLanguage("en")}
                            aria-pressed={currentLang === "en"}
                        >
                            EN
                        </button>
                        <button
                            type="button"
                            onClick={() => changeLanguage("fr")}
                            aria-pressed={currentLang === "fr"}
                        >
                            FR
                        </button>
                    </div>

                    <a
                        className="cv-btn"
                        href="/Virginia_Martinez_CV.pdf"
                        download
                    >
                        <span>{t("topbar.cv")}</span>
                        <span aria-hidden="true">↓</span>
                    </a>

                    <button
                        type="button"
                        className="nav-burger"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMenuOpen((v) => !v)}
                    >
                        <Icon
                            name={menuOpen ? "X" : "Menu"}
                            className="w-5 h-5"
                        />
                    </button>
                </div>
            </header>

            <div
                id="mobile-nav"
                className={`nav-overlay ${menuOpen ? "open" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-hidden={!menuOpen}
                onClick={(e) => {
                    if (e.target === e.currentTarget) setMenuOpen(false);
                }}
            >
                <nav aria-label="Sections">
                    {NAV_SECTIONS.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            className={current === s.id ? "is-current" : ""}
                            onClick={(e) => handleNavClick(e, s.id)}
                        >
                            {t(s.labelKey)}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
}
