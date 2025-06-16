// src/components/home/CaseStudies.jsx
import { useTranslation } from "react-i18next";
import SectionWrapper from "../layout/SectionWrapper";
import caseStudiesEN from "../../data/caseStudies.en";
import caseStudiesFR from "../../data/caseStudies.fr";

export default function CaseStudies() {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { title, items } = lang === "fr" ? caseStudiesFR : caseStudiesEN;

    return (
        <SectionWrapper title={title} id="casestudies">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
                {items.map(({ id, image, link, linkText }) => (
                    <div key={id} className="flex flex-col">
                        {/* Contenedor 16:9 */}
                        <div className="relative w-full aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                            <img
                                src={image}
                                alt={linkText}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-contain"
                            />
                        </div>
                        {/* CTA */}
                        <a
                            href={link}
                            className="mt-4 text-link text-lg font-medium hover:underline"
                        >
                            {linkText}
                        </a>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
