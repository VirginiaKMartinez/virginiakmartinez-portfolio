// src/components/home/Experience.jsx — v2 editorial timeline (opción A)
import { useTranslation } from "react-i18next";
import experiencesEN from "../../data/experiences.en";
import experiencesFR from "../../data/experiences.fr";
import SectionHeader from "../layout/SectionHeader";

export default function Experience() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
    const { items } = lang === "fr" ? experiencesFR : experiencesEN;

    return (
        <section
            id="experience"
            className="editorial-section"
            data-screen-label="03 Experience"
        >
            <SectionHeader
                num="03"
                title={[t("experience.h1"), t("experience.h2")]}
                kicker={t("experience.kicker")}
            />

            <div className="timeline">
                {items.map((exp) => (
                    <article
                        key={`${exp.company}-${exp.period}`}
                        className="t-row"
                    >
                        <div className="when">{exp.period}</div>

                        <div>
                            <h3>{exp.position}</h3>
                            <p className="where">
                                {exp.company} · {exp.location}
                            </p>

                            {exp.description && (
                                <p className="lead">{exp.description}</p>
                            )}

                            {exp.bullets && exp.bullets.length > 0 && (
                                <ul className="bullets">
                                    {exp.bullets.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            )}

                            {exp.stack && exp.stack.length > 0 && (
                                <div className="stack">
                                    {exp.stack.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
