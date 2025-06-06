import { useTranslation } from "react-i18next";
import testimonialsEN from "../../data/testimonials.en";
import testimonialsFR from "../../data/testimonials.fr";

export default function Testimonials() {
    const { i18n } = useTranslation();
    const lang = i18n.language;

    // Escogemos datos según el idioma
    const { title, items, linkedinUrl } =
        lang === "fr" ? testimonialsFR : testimonialsEN;

    return (
        <section
            id="testimonials"
            className="bg-background py-16 px-4 font-sans grid-2-columns border-b border-divider"
        >
            {/* Título de sección */}
            <h2 className="section-title text-start text-textMuted mb-8">
                {title}
            </h2>

            {/* Lista vertical de testimonios */}
            <div className="max-w-6xl mx-auto space-y-12">
                {items.map((item, index) => (
                    <div key={index} className="flex">
                        {/* Línea vertical izquierda */}
                        <div className="border-l-2 border-cyan-400 mr-6"></div>

                        {/* Contenido de la cita */}
                        <div className="flex-1">
                            <p className="text-textDark italic leading-relaxed">
                                {item.quote}
                            </p>
                            <p className="mt-4 text-textMuted">
                                {item.name} — {item.role}
                            </p>
                        </div>
                    </div>
                ))}
                <div className="mt-12 text-center">
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link font-medium hover:underline"
                    >
                        {lang === "fr"
                            ? "Voir toutes mes recommandations LinkedIn"
                            : "Go to all my LinkedIn recommendations"}
                    </a>
                </div>
            </div>

            {/* Enlace a LinkedIn */}
        </section>
    );
}
