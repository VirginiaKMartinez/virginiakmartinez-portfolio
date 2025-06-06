import { useTranslation } from "react-i18next";
import educationEN from "../../data/education.en";
import educationFR from "../../data/education.fr";

function Education() {
    const { i18n } = useTranslation();
    const lang = i18n.language;

    // Elegimos el objeto de datos según el idioma actual
    const { title, items } = lang === "fr" ? educationFR : educationEN;

    return (
        <section id="education" className="bg-background py-16 px-4 font-sans">
            {/* Título de sección ya viene traducido en el data file */}
            <h2 className="section-title text-center">{title}</h2>

            <div className="max-w-4xl mx-auto space-y-8">
                {items.map((edu, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                        <h3 className="text-xl font-semibold text-textDark">
                            {edu.degree}{" "}
                            <span className="text-link">
                                — {edu.institution}
                            </span>
                        </h3>
                        <p className="text-sm text-textMuted mb-2">
                            {edu.location} · {edu.period}
                        </p>
                        <p className="mt-2 text-textDark">{edu.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
