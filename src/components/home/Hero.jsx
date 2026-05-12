// src/components/home/Hero.jsx
import { useTranslation } from "react-i18next";
import photoVir from "../../assets/images/photoVir.png";
import "../../styles/hero.css";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section id="hero" className="hero-bg relative">
            <div className="relative z-10 h-full flex items-center px-6 lg:px-12">
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-center">
                    <div>
                        <p className="text-base font-medium text-textDark">
                            Virginia Martínez
                        </p>
                        <p className="text-base text-textMuted mb-10">
                            {t("hero.role")}
                        </p>

                        <p className="text-2xl sm:text-3xl lg:text-4xl text-textDark leading-snug max-w-2xl mb-10">
                            {t("hero.tagline")}
                        </p>

                        <p className="text-sm text-textMuted mb-3">
                            {t("hero.availability")}
                        </p>

                        <nav
                            aria-label={t("hero.navLabel")}
                            className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
                        >
                            <a
                                href="#casestudies"
                                className="text-textDark border-b border-textDark pb-0.5 hover:text-link hover:border-link transition-colors"
                            >
                                {t("hero.linkWork")}
                            </a>
                            <a
                                href="/Virginia_Martinez_CV.pdf"
                                download
                                className="text-textDark border-b border-textDark pb-0.5 hover:text-link hover:border-link transition-colors"
                            >
                                {t("hero.linkCV")}
                            </a>
                            <a
                                href="mailto:hello@virginiak.dev"
                                className="text-textDark border-b border-textDark pb-0.5 hover:text-link hover:border-link transition-colors"
                            >
                                {t("hero.linkEmail")}
                            </a>
                        </nav>
                    </div>

                    <div className="hidden lg:flex justify-end">
                        <img
                            src={photoVir}
                            alt={t("hero.photoAlt")}
                            className="w-64 h-80 object-cover object-top rounded-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
