// src/components/home/Testimonials.jsx
import { useTranslation } from "react-i18next";
import SectionWrapper from "../layout/SectionWrapper";
import testimonialsEN from "../../data/testimonials.en";
import testimonialsFR from "../../data/testimonials.fr";

export default function Testimonials() {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { title, items, linkedinUrl } =
        lang === "fr" ? testimonialsFR : testimonialsEN;

    return (
        <SectionWrapper title={title} id="testimonials">
            {/* Lista de testimonios */}
            <div className="max-w-6xl mx-auto space-y-12">
                {items.map((item, idx) => (
                    <div key={idx} className="flex">
                        {/* Línea vertical */}
                        <div className="w-1 bg-primary mr-6"></div>
                        {/* Texto de la cita */}
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
            </div>
            {/* Enlace a LinkedIn */}
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
        </SectionWrapper>
    );
}
