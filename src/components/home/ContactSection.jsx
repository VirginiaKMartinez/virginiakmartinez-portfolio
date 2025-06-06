import { useTranslation } from "react-i18next";

export default function ContactSection() {
    const { t } = useTranslation();
    const mailtoLink = t("contact.ctaMail");

    return (
        <section id="contact" className="bg-background py-16 px-4 font-sans">
            <div className="max-w-4xl mx-auto text-center">
                {/* Título / frase de contacto */}
                <h2 className="text-3xl font-bold text-textDark mb-6">
                    {t("contact.title")}
                </h2>

                {/* Botón CTA */}
                <a
                    href={mailtoLink}
                    className="inline-flex items-center bg-primary text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:scale-105 hover:bg-link transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                    </svg>

                    {t("contact.button")}
                </a>
            </div>
        </section>
    );
}
