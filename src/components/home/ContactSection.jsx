// src/components/home/ContactSection.jsx
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import contactAnimation from "../../assets/lottie/superhero-animation.json"; // ajusta la ruta si hace falta
import Icon from "../Icon";
export default function ContactSection() {
    const { t } = useTranslation();

    return (
        <section id="contact" className="bg-background py-16 px-4 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* IZQUIERDA: texto + botón */}
                <div className="space-y-6 text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-textDark">
                        {t(
                            "contact.title",
                            "I love making connections, so please reach out if you want to work with me or just say hello!"
                        )}
                    </h2>
                    <p className="text-lg text-textMuted">
                        {t(
                            "contact.subtitle",
                            "Feel free to drop me a line and let's create something amazing together."
                        )}
                    </p>

                    <a
                        href="mailto:hello@virginiak.dev"
                        className="inline-flex items-center bg-primary text-white font-medium px-6 py-3 rounded-lg shadow-lg duration-300 transition-all hover:scale-105 hover:bg-accent-indigo"
                    >
                        <Icon name="Croissant" className="w-5 h-5 bg mr-3" />
                        {t("contact.cta", "Get in touch")}
                    </a>
                </div>

                {/* DERECHA: animación */}
                <div className="flex justify-center lg:justify-end">
                    <div className="w-full max-w-sm">
                        <Lottie animationData={contactAnimation} loop />
                    </div>
                </div>
            </div>
        </section>
    );
}
