// src/components/home/SelectedWork.jsx — v2 editorial work index
import { useTranslation } from "react-i18next";
import selectedWorkEN from "../../data/selectedWork.en";
import selectedWorkFR from "../../data/selectedWork.fr";
import SectionHeader from "../layout/SectionHeader";

export default function SelectedWork() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
    const items = lang === "fr" ? selectedWorkFR : selectedWorkEN;

    return (
        <section
            id="work"
            className="editorial-section"
            data-screen-label="01 Selected work"
        >
            <SectionHeader
                num="01"
                title={[t("work.h1"), t("work.h2")]}
                kicker={t("work.kicker")}
            />

            <div className="works">
                {items.map((w) => (
                    <a
                        key={w.id}
                        className="work"
                        href={w.href}
                        data-disabled={w.disabled || undefined}
                        aria-disabled={w.disabled || undefined}
                        onClick={(e) => {
                            if (w.disabled) e.preventDefault();
                        }}
                    >
                        <div className="yr">{w.year}</div>
                        <div
                            className="title"
                            dangerouslySetInnerHTML={{ __html: w.titleHtml }}
                        />
                        <div className="role">
                            {w.role}
                            <span>{t(w.roleDescKey)}</span>
                        </div>
                        <div className="tag">{w.tag}</div>
                        <div className="arrow" aria-hidden="true">
                            →
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
