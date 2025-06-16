// src/components/home/CaseStudies.jsx
import { useTranslation } from "react-i18next";
import caseStudiesEN from "../../data/caseStudies.en";
import caseStudiesFR from "../../data/caseStudies.fr";

export default function CaseStudies() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { title, items } = lang === "fr" ? caseStudiesFR : caseStudiesEN;

  return (
    <section id="casestudies" className="bg-background py-16 px-4 font-sans border-b border-divider">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
        {/* Columna 1: Título */}
        <h2 className="section-title text-textMuted text-start">
          {title}
        </h2>

        {/* Columna 2: Grid de tarjetas */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {items.map((caseItem) => (
            <div key={caseItem.id} className="flex flex-col">
              <div className="relative w-full aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <a
                href={caseItem.link}
                className="mt-4 text-link text-lg font-medium hover:underline"
              >
                {caseItem.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
