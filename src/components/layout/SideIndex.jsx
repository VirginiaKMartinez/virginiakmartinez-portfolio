// src/components/layout/SideIndex.jsx — v2 sticky left rail with scroll spy
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const SECTIONS = [
    { id: "cover", num: "00", labelKey: "side.cover" },
    { id: "work", num: "01", labelKey: "side.work" },
    { id: "about", num: "02", labelKey: "side.about" },
    { id: "experience", num: "03", labelKey: "side.experience" },
    { id: "education", num: "04", labelKey: "side.education" },
    { id: "languages", num: "05", labelKey: "side.languages" },
    { id: "contact", num: "06", labelKey: "side.contact" },
];

export default function SideIndex() {
    const { t } = useTranslation();
    const [current, setCurrent] = useState("cover");

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY + window.innerHeight * 0.35;
            let active = SECTIONS[0].id;
            for (const s of SECTIONS) {
                const el = document.getElementById(s.id);
                if (el && el.offsetTop <= y) active = s.id;
            }
            setCurrent(active);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = (e, id) => {
        const el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    };

    return (
        <nav className="side-index" aria-label="Sections">
            {SECTIONS.map((s) => (
                <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={current === s.id ? "is-current" : ""}
                    onClick={(e) => handleClick(e, s.id)}
                >
                    <span className="num">{s.num}</span>
                    <span className="tick" aria-hidden="true" />
                    <span>{t(s.labelKey)}</span>
                </a>
            ))}
        </nav>
    );
}
