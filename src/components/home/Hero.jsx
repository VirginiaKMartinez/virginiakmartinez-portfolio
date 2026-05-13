// src/components/home/Hero.jsx — v2 editorial cover
import { useTranslation } from "react-i18next";

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
            <div className="masthead">
                <div className="m">
                    {t("hero.masthead.folio")}
                    <strong>{t("hero.masthead.folioV")}</strong>
                </div>
                <div className="m">
                    {t("hero.masthead.discipline")}
                    <strong>{t("hero.masthead.disciplineV")}</strong>
                </div>
                <div className="m">
                    {t("hero.masthead.location")}
                    <strong>{t("hero.masthead.locationV")}</strong>
                </div>
                <div className="m">
                    {t("hero.masthead.status")}
                    <strong style={{ color: "var(--accent)" }}>
                        {t("hero.masthead.statusV")}
                    </strong>
                </div>
                <div className="m issue">
                    {t("hero.masthead.edition")}
                    <strong>{t("hero.masthead.editionV")}</strong>
                </div>
            </div>

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
                    <div className="portrait">
                        <div className="stripes" aria-hidden="true" />
                        <div className="silhouette" aria-hidden="true">
                            VM
                        </div>
                        <span className="pulse">{t("hero.portrait.working")}</span>
                        <div className="caption">
                            <span>{t("hero.portrait.plate")}</span>
                            <span>{t("hero.portrait.self")}</span>
                        </div>
                    </div>
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

            <div className="marquee" aria-hidden="true">
                <div className="track">
                    {renderMarqueeItems("a")}
                    {renderMarqueeItems("b")}
                </div>
            </div>
        </section>
    );
}
