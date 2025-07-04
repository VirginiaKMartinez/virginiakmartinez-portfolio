// src/components/home/Hero.jsx
import { useTranslation } from "react-i18next";
import Icon from "../Icon";
import ProfileCard from "../react-bits/ProfileCard";
import DotGrid from "../react-bits/DotGrid";
import photoVir from "../../assets/images/photoVir.png";
import "../../styles/hero.css";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section id="hero" className="hero-bg">
            {/* — Contenido centrado — */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 lg:px-12 text-center">
                {/* Foto */}
                <img
                    src={photoVir}
                    alt="Virginia Martínez"
                    aria-hidden="true"
                    className="w-45 h-48 object-cover rounded-full mb-8"
                />
                {/* ← Aquí va la ProfileCard */}
                {/* <div className="flex items-center justify-center px-6 lg:px-12">
                    <ProfileCard
                        name="Virginia"
                        title="Product Designer"
                        handle="virginia"
                        status="Searching"
                        contactText="Contact Me"
                        avatarUrl={photoVir}
                        showUserInfo={true}
                        enableTilt={true}
                        onContactClick={() => console.log("Contact clicked")}
                    />
                </div> */}

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
                <div
                    style={{
                        width: "100%",
                        height: "600px",
                        position: "relative",
                    }}
                >
                    <DotGrid
                        dotSize={10}
                        gap={15}
                        baseColor="#3ad8fa"
                        activeColor="#00abd1"
                        proximity={120}
                        shockRadius={250}
                        shockStrength={5}
                        resistance={750}
                        returnDuration={1.5}
                    />
                </div>
            </div>
        </section>
    );
}
