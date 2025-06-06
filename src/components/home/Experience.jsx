import { useTranslation } from "react-i18next";
import experiencesEN from "../../data/experiences.en";
import experiencesFR from "../../data/experiences.fr";

function Experience() {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { title, items } = lang === "fr" ? experiencesFR : experiencesEN;

    return (
        <section
            id="experience"
            className="py-16 px-6 bg-background font-sans grid-2-columns border-b border-divider"
        >
            <h2 className="section-title text-start text-textMuted mb-12">
                {title}
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
                {items.map((exp, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-semibold text-textDark">
                            {exp.position} —{" "}
                            <span className="text-link">{exp.company}</span>
                        </h3>
                        <p className="text-sm text-textMuted">
                            {exp.location} · {exp.period}
                        </p>
                        <p className="mt-2 text-textDark">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
