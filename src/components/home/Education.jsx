import { useTranslation } from "react-i18next";
import educationEN from "../../data/education.en";
import educationFR from "../../data/education.fr";

function Education() {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { title, items } = lang === "fr" ? educationFR : educationEN;

    return (
        <section
            id="education"
            className="bg-background py-16 px-4 font-sans grid-2-columns border-b border-divider"
        >
            {/* Título de sección ya viene traducido en el data file */}
            <h2 className="section-title text-start text-textMuted mb-12">
                {title}
            </h2>

            <div className="max-w-4xl mx-auto grid-3-columns">
                {items.map((edu, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-semibold text-textDark">
                            {edu.degree}{" "}
                        </h3>
                        <p className="text-sm text-textMuted mb-2">
                            {edu.location} · {edu.period}
                        </p>
                        <h4 className="text-xl font-medium text-link">
                            {edu.institution}
                        </h4>
                        <p className="mt-2 text-textDark">{edu.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
