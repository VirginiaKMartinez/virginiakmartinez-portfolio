import { useTranslation } from "react-i18next";

function Experience() {
    const { t } = useTranslation();
    const experiences = t("experience.items", { returnObjects: true });

    return (
        <section className="py-16 px-6 bg-background font-sans">
            <h2 className="text-3xl font-bold text-center text-textDark mb-12">
                {t("experience.title")}
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
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
