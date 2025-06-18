// src/components/home/Hero.jsx
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import DotPattern from "../layout/DotPattern";
import Icon from "../Icon";
import hero from "../../assets/lottie/hero.json";
import photoVir from "./../../../public/images/photoVir.png";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section
            id="hero"
            className="relative h-screen overflow-hidden bg-background"
        >
            {/* 1) Patrón de puntos reutilizable */}
            <DotPattern colorVar="--color-divider" />

            {/* 2) Lottie de fondo */}
            <div className="absolute inset-0 -z-20 opacity-20">
                <Lottie
                    animationData={hero}
                    loop
                    autoplay
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 3) Retrato como marca de agua */}
            <img
                src={photoVir}
                alt=""
                aria-hidden="true"
                className="
          absolute
          bottom-0 right-0
          w-64 sm:w-80 lg:w-96
          opacity-40
          pointer-events-none
          -z-5
        "
            />

            {/* 4) Contenido principal */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textDark mb-4">
                    {t("hero.greeting")}
                </h1>
                <p className="text-lg sm:text-xl text-textMuted mb-8 max-w-2xl">
                    {t("hero.tagline")}
                </p>
                <a
                    href="#casestudies"
                    className="
            inline-flex items-center gap-2
            bg-primary text-white font-medium
            px-6 py-3 rounded-lg shadow-lg
            duration-300 transition-all
            hover:scale-105 hover:bg-accent-indigo
          "
                    aria-label={t("hero.cta")}
                >
                    <Icon name="ArrowRight" className="w-5 h-5" />
                    {t("hero.cta")}
                </a>
            </div>

            {/* 5) Indicador de scroll */}
            <a
                href="#casestudies"
                className="
          absolute bottom-8 left-1/2 transform -translate-x-1/2
          flex flex-col items-center text-textMuted
          animate-bounce
        "
                aria-label={t("hero.scrollDown")}
            >
                <Icon name="ChevronDown" className="w-6 h-6" />
                <span className="mt-2 text-sm">{t("hero.scrollDown")}</span>
            </a>
        </section>
    );
}
