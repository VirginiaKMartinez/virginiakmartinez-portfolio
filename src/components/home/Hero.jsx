// src/components/home/Hero.jsx
import { useTranslation } from "react-i18next";
import Icon from "../Icon";
import photoVir from "../../../public/images/photoVir.png";
import styles from "./Hero.module.css";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section id="hero" className={styles.root}>
            {/* — Contenido centrado — */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 lg:px-12 text-center">
                {/* Foto */}
                <img
                    src={photoVir}
                    alt="Virginia Martínez"
                    aria-hidden="true"
                    className="w-48 h-48 object-cover rounded-full mb-8"
                />

                {/* Título */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textDark mb-4">
                    {t("hero.greeting")}
                </h1>

                {/* Subtítulo */}
                <p className="text-lg sm:text-xl text-textMuted mb-8 max-w-lg">
                    {t("hero.tagline")}
                </p>

                {/* CTA */}
                <a
                    href="#casestudies"
                    className="
            inline-flex items-center gap-2
            bg-primary text-white font-medium
            px-6 py-3 rounded-lg shadow-lg
            transition-all duration-300
            hover:scale-105 hover:bg-accent-indigo
          "
                    aria-label={t("hero.cta")}
                >
                    <Icon name="ArrowRight" className="w-5 h-5" />
                    {t("hero.cta")}
                </a>
            </div>
        </section>
    );
}
