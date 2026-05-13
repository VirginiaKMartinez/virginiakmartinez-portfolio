// src/components/home/Education.jsx — v2 editorial education + languages (04/05)
import { useTranslation } from "react-i18next";
import educationEN from "../../data/education.en";
import educationFR from "../../data/education.fr";
import SectionHeader from "../layout/SectionHeader";

export default function Education() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
    const { items } = lang === "fr" ? educationFR : educationEN;
    const languages = t("languages.items", { returnObjects: true });

    return (
        <section
            id="education"
            className="editorial-section"
            data-screen-label="04 Education"
        >
            <SectionHeader
                num="04 / 05"
                title={[t("education.h1"), t("education.h2")]}
                kicker={t("education.kicker")}
            />

            <div className="pair">
                <div className="a">
                    {items.map((edu) => (
                        <div className="edu-row" key={edu.degree}>
                            <div className="y">{edu.year}</div>
                            <div className="e">
                                <h4>{edu.degree}</h4>
                                <p>{edu.institution}</p>
                            </div>
                            <div className="y r">{edu.shortLabel}</div>
                        </div>
                    ))}
                </div>

                <div
                    className="b"
                    id="languages"
                    data-screen-label="05 Languages"
                >
                    <div className="lang-list">
                        {languages.map((l) => (
                            <div className="lang-item" key={l.name}>
                                <div className="l">{l.name}</div>
                                <div className="lv">{l.level}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
