// src/components/home/Hero.jsx
import { useTranslation } from "react-i18next";
import Icon from "../Icon";
import photoVir from "../../assets/images/photoVir.png";
import "../../styles/hero.css";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section id="hero" className="hero-bg relative">
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 lg:px-12 text-center">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-800 text-sm font-medium mb-6">
                    <span
                        className="w-2 h-2 rounded-full bg-green-600"
                        aria-hidden="true"
                    ></span>
                    {t("hero.badge")}
                </span>

                <img
                    src={photoVir}
                    alt={t("hero.photoAlt")}
                    className="w-44 h-44 object-cover rounded-full mb-8"
                />

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textDark mb-4">
                    {t("hero.greeting")}
                </h1>

                <p className="text-lg sm:text-xl text-textMuted mb-8 max-w-lg">
                    {t("hero.tagline")}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                        href="#casestudies"
                        className="
                            inline-flex items-center gap-2
                            bg-primary text-textDark font-medium
                            px-6 py-3 rounded-lg shadow-lg
                            transition-all duration-300
                            hover:scale-105 hover:bg-accent-indigo hover:text-white
                        "
                        aria-label={t("hero.cta")}
                    >
                        <Icon name="ArrowRight" className="w-5 h-5" />
                        {t("hero.cta")}
                    </a>

                    <a
                        href="/Virginia_Martinez_CV.pdf"
                        download
                        className="
                            inline-flex items-center gap-2
                            bg-backgroundWhite text-textDark font-medium
                            px-6 py-3 rounded-lg border border-divider
                            transition-all duration-300
                            hover:bg-divider
                        "
                        aria-label={t("hero.ctaSecondary")}
                    >
                        <Icon name="Download" className="w-5 h-5" />
                        {t("hero.ctaSecondary")}
                    </a>
                </div>
            </div>

            <a
                href="#experience"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-textMuted hover:text-textDark transition-colors"
                aria-label={t("hero.scrollDown")}
            >
                <span className="text-xs">{t("hero.scrollDown")}</span>
                <Icon name="ChevronDown" className="w-4 h-4 animate-bounce" />
            </a>
        </section>
    );
}
