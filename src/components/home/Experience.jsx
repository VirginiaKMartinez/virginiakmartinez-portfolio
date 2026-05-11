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
            <div className="max-w-4xl mx-auto space-y-8">
                {items.map((exp) => (
                    <div key={`${exp.company}-${exp.period}`}>
                        <h3 className="text-xl font-semibold text-textDark">
                            {exp.position} —{" "}
                            <span className="text-link">{exp.company}</span>
                        </h3>
                        <p className="text-sm text-textMuted">
                            {exp.location} · {exp.period}
                        </p>
                        {exp.summary && (
                            <p className="mt-2 text-textDark">{exp.summary}</p>
                        )}
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-textDark">
                            {exp.description.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}

export default Experience;
