// src/components/home/Hero.jsx — v2 editorial cover · Portrait Chrome (Rosso)
import { useTranslation } from "react-i18next";
import portrait from "../../assets/images/portrait.png";

export default function Hero() {
    const { t } = useTranslation();
    const marquee = t("hero.marquee", { returnObjects: true });

    // Render marquee twice for a seamless infinite loop
    const renderMarqueeItems = (keyPrefix) =>
        marquee.flatMap((skill, idx) => [
            <span key={`${keyPrefix}-skill-${idx}`}>{skill}</span>,
            <span key={`${keyPrefix}-dot-${idx}`} className="dot">
                ·
            </span>,
        ]);

    return (
        <section
            id="cover"
            className="hero"
            data-screen-label="00 Cover"
            data-variant="manifesto"
        >
            <div className="hero-body">
                <h1 className="manifesto">
                    {t("hero.h1.line1")}
                    <br />
                    {t("hero.h1.line2")}{" "}
                    <span className="it">{t("hero.h1.line3")}</span>
                    <br />
                    <span className="it">{t("hero.h1.line4")}</span>
                </h1>

                <div className="portrait-wrap">
                    <figure className="portrait">
                        <img
                            src={portrait}
                            alt=""
                            loading="eager"
                            decoding="async"
                        />

                        {/* Editorial chrome — printed directly on the card */}
                        <span className="vol">{t("hero.masthead.folioV")}</span>
                        <span className="issue">
                            {t("hero.masthead.editionV")}
                        </span>
                        <span className="pulse">
                            {t("hero.portrait.working")}
                        </span>
                        <figcaption className="caption">
                            <span className="line">
                                {t("hero.portrait.caption")}
                            </span>
                            <span>{t("hero.portrait.plate")}</span>
                            <span className="self">
                                {t("hero.portrait.self")}
                            </span>
                        </figcaption>
                    </figure>
                </div>
            </div>

            <div className="hero-foot">
                <div className="l">
                    <span className="label">{t("hero.foot.now")}</span>
                    <p>{t("hero.foot.nowV")}</p>
                </div>
                <div className="c">
                    <span className="label">{t("hero.foot.doing")}</span>
                    <p>{t("hero.foot.doingV")}</p>
                </div>
                <div className="r">
                    <span className="label">{t("hero.foot.scroll")}</span>
                    <p>{t("hero.foot.scrollV")}</p>
                </div>
            </div>
            <div className="hero-cv">
                <a href="/Virginia_Martinez_CV.pdf" download>
                    <span>{t("hero.downloadCV")}</span>
                    <span aria-hidden="true">↓</span>
                </a>
            </div>

            <div className="marquee" aria-hidden="true">
                <div className="track">
                    {renderMarqueeItems("a")}
                    {renderMarqueeItems("b")}
                </div>
            </div>
        </section>
    );
}
