// src/components/home/CaseStudies.jsx
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SectionWrapper from "../layout/SectionWrapper";
import DotPattern from "../layout/DotPattern";
import caseStudiesEN from "../../data/caseStudies.en";
import caseStudiesFR from "../../data/caseStudies.fr";

export default function CaseStudies() {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { title, items } = lang === "fr" ? caseStudiesFR : caseStudiesEN;

    return (
        <SectionWrapper
            id="casestudies"
            title={title} // 1) pasamos el título
            className="relative overflow-hidden" // para que el DotPattern no se salga
        >
            {/* 3) Grid de tarjetas en la segunda columna */}
            <div className="relative z-10 max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2">
                {items.map((caseItem) => (
                    <div key={caseItem.id} className="flex flex-col">
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

                        <Link
                            to={caseItem.link}
                            className="mt-4 text-link text-lg font-medium hover:underline"
                        >
                            {caseItem.linkText}
                        </Link>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
