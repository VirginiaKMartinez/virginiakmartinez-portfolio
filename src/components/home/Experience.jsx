// src/components/home/Experience.jsx
import { useTranslation } from "react-i18next";
import experiencesEN from "../../data/experiences.en";
import experiencesFR from "../../data/experiences.fr";
import SectionWrapper from "../layout/SectionWrapper";

function Experience() {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { title, items } = lang === "fr" ? experiencesFR : experiencesEN;

    return (
        <SectionWrapper title={title} id="experience">
            <div className="divide-y divide-divider">
                {items.map((exp) => (
                    <article
                        key={`${exp.company}-${exp.period}`}
                        className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-x-10 gap-y-3 py-12 first:pt-0 last:pb-0"
                    >
                        <div>
                            <p className="text-base font-medium text-textDark">
                                {exp.period}
                            </p>
                            <p className="text-sm text-textMuted mt-1">
                                {exp.location}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-textDark">
                                {exp.position}
                            </h3>
                            <p className="text-base text-textMuted mb-5">
                                {exp.company}
                            </p>

                            {exp.summary && (
                                <p className="text-base text-textDark leading-relaxed mb-5">
                                    {exp.summary}
                                </p>
                            )}

                            <ul className="space-y-3">
                                {exp.description.map((item) => (
                                    <li
                                        key={item}
                                        className="text-base text-textDark leading-relaxed pl-5 relative"
                                    >
                                        <span
                                            className="absolute left-0 text-textMuted"
                                            aria-hidden="true"
                                        >
                                            —
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </SectionWrapper>
    );
}

export default Experience;
