import { useTranslation } from "react-i18next";
import caseStudiesEN from "../../data/caseStudies.en";
import caseStudiesFR from "../../data/caseStudies.fr";

export default function CaseStudies() {
    const { i18n } = useTranslation();
    const lang = i18n.language;

    // Seleccionamos los datos en función del idioma
    const { title, items } = lang === "fr" ? caseStudiesFR : caseStudiesEN;

    return (
        <section
            id="casestudies"
            className="bg-background py-16 px-4 font-sans grid-2-columns border-b border-divider"
        >
            {/* Título de sección */}
            <h2 className="section-title text-start text-textMuted mb-8">
                {title}
            </h2>

            {/* Grid responsivo: 1 col en móvil, 2 en sm+ */}
            <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2">
                {items.map((caseItem) => (
                    <div key={caseItem.id} className="flex flex-col">
                        {/* Contenedor de imagen + título superpuesto */}
                        <div className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform">
                            {/* Imagen */}
                            <img
                                src={caseItem.image}
                                alt={caseItem.title}
                                loading="lazy"
                                className="w-full h-48 sm:h-60 md:h-72 object-cover"
                            />

                            {/* Texto superpuesto */}
                            {/* <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-xl sm:text-2xl font-semibold drop-shadow-md">
                  {caseItem.title}
                </h3>
              </div> */}
                        </div>

                        {/* Enlace debajo de la imagen */}
                        <a
                            href={caseItem.link}
                            className="mt-4 text-link text-lg font-medium hover:underline"
                        >
                            {caseItem.linkText}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
