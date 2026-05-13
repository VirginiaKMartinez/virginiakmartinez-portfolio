// src/components/home/About.jsx — v2 editorial about
import { useTranslation } from "react-i18next";
import SectionHeader from "../layout/SectionHeader";

export default function About() {
    const { t } = useTranslation();

    return (
        <section
            id="about"
            className="editorial-section"
            data-screen-label="02 About"
        >
            <SectionHeader
                num="02"
                title={[t("about.h1"), t("about.h2")]}
                kicker={t("about.kicker")}
            />

            <div className="about-grid">
                <div className="lede">
                    <p
                        dangerouslySetInnerHTML={{
                            __html: t("about.bio.line1"),
                        }}
                    />
                    <p
                        dangerouslySetInnerHTML={{
                            __html: t("about.bio.line2"),
                        }}
                    />
                    <div className="small">
                        <p>{t("about.bio.line3")}</p>
                        <p>{t("about.bio.line4")}</p>
                    </div>
                </div>

                <div className="about-meta">
                    <dl>
                        <div>
                            <dt>{t("about.meta.focus")}</dt>
                            <dd>{t("about.meta.focusV")}</dd>
                        </div>
                        <div>
                            <dt>{t("about.meta.craft")}</dt>
                            <dd>{t("about.meta.craftV")}</dd>
                        </div>
                        <div>
                            <dt>{t("about.meta.fluency")}</dt>
                            <dd>{t("about.meta.fluencyV")}</dd>
                        </div>
                        <div>
                            <dt>{t("about.meta.tools")}</dt>
                            <dd>{t("about.meta.toolsV")}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    );
}
