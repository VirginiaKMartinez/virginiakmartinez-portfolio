// src/components/home/Hero.jsx
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import DotPattern from "../layout/DotPattern";
import Icon from "../Icon";
import hero from "../../assets/lottie/hero.json";
import photoVir from "../../../public/images/photoVir.png";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section
            id="hero"
            className="relative h-screen bg-background overflow-hidden"
        >
            {/* — 1) Patrón de puntos configurable via props — */}
            <DotPattern
                className="absolute inset-0 -z-20 pointer-events-none"
                size={20}
                colorVar="--color-divider"
            />

            {/* — 2) (Opcional) Lottie semitransparente — */}
            <div className="absolute inset-0 -z-30 opacity-20">
                <Lottie
                    animationData={hero}
                    loop
                    autoplay
                    className="w-full h-full object-cover"
                />
            </div>

            {/* — 3) Contenido encima — */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full">
                {/* IZQUIERDA: texto + CTA */}
                <div className="flex flex-col justify-center px-6 lg:px-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textDark mb-4">
                        {t("hero.greeting")}
                    </h1>
                    <p className="text-lg sm:text-xl text-textMuted mb-8 max-w-lg">
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

                {/* DERECHA: foto + degradado */}
                <div className="relative">
                    <img
                        src={photoVir}
                        alt=""
                        aria-hidden="true"
                        className="
              absolute inset-0
              w-full h-full
              object-cover object-right
              pointer-events-none
            "
                    />
                    <div
                        className="
              absolute inset-0
              bg-gradient-to-l from-background via-background/90 to-transparent
              pointer-events-none
            "
                    />
                </div>
            </div>
        </section>
    );
}
