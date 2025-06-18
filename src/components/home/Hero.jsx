// src/components/home/Hero.jsx
import Lottie from "lottie-react";
import heroAnim from "../../assets/lottie/hero.json";
import DotPattern from "../layout/DotPattern";
import Icon from "../Icon";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative h-screen overflow-hidden bg-background border-b border-divider"
        >
            {/* 1) Patrón de puntos */}
            <DotPattern colorVar="--color-dots-default" />

            {/* 2) Animación Lottie semitransparente */}
            <div className="absolute inset-0 opacity-30 -z-10">
                <Lottie
                    animationData={heroAnim}
                    loop
                    autoplay
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 3) Contenido principal */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-textDark mb-4">
                    Hi, I’m Virginia Martínez
                </h1>
                <p className="text-xl text-textMuted mb-8 max-w-2xl">
                    I craft intuitive, accessible and engaging user experiences
                    for web and mobile.
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
                >
                    <Icon name="ArrowRight" className="w-5 h-5" />
                    View my work
                </a>
            </div>
        </section>
    );
}
