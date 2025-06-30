// src/components/home/CaseStudies.jsx
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // <-- importa Link
import DotPattern from "../layout/DotPattern";
import caseStudiesEN from "../../data/caseStudies.en";
import caseStudiesFR from "../../data/caseStudies.fr";

export default function CaseStudies() {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { title, items } = lang === "fr" ? caseStudiesFR : caseStudiesEN;

    return (
        <section
            id="casestudies"
            className="relative bg-background py-16 px-4 font-sans border-b border-divider"
        >
            {/* Fondo de puntos full-bleed */}
            <DotPattern
                className="absolute inset-0 -z-10 pointer-events-none"
                colorVar="--color-dots-default"
                size={20}
            />

            <h2 className="section-title text-start text-textMuted mb-8">
                {title}
            </h2>

            <div className="relative z-10 max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2">
                {items.map((caseItem) => (
                    <div key={caseItem.id} className="flex flex-col">
                        {/* Imagen clicable: Link en lugar de <a> */}
                        <Link
                            to={caseItem.link}
                            className="relative w-full aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={caseItem.image}
                                alt={caseItem.title}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-contain"
                            />
                        </Link>

                        {/* Texto clicable */}
                        <Link
                            to={caseItem.link}
                            className="mt-4 text-link text-lg font-medium hover:underline"
                        >
                            {caseItem.linkText}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
