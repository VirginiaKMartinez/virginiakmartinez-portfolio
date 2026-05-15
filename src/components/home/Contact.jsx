// src/components/home/Contact.jsx — v2 editorial contact + colophon (06)
import { useTranslation } from "react-i18next";
import SectionHeader from "../layout/SectionHeader";

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section
            id="contact"
            className="editorial-section contact-section"
            data-screen-label="06 Contact"
        >
            <SectionHeader
                num="06"
                title={[t("contactSection.h1"), t("contactSection.h2")]}
                kicker={t("contactSection.kicker")}
            />

            <p className="big">
                <a href="mailto:hello@virginiak.dev">hello@virginiak.dev</a>
                <br />
                <span className="it">{t("contactSection.or")}</span>{" "}
                +33{" "}
                <span style={{ letterSpacing: "-0.02em" }}>
                    7&nbsp;68&nbsp;52&nbsp;15&nbsp;43
                </span>
            </p>

            <div className="foot-grid">
                <div>
                    <span className="label">
                        {t("contactSection.foot.elsewhere")}
                    </span>
                    <p>
                        <a
                            href="https://linkedin.com/in/virginiakmartinez"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn ↗
                        </a>
                        <br />
                        <a
                            href="https://github.com/virginiakmartinez"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub ↗
                        </a>
                    </p>
                </div>

                <div>
                    <span className="label">
                        {t("contactSection.foot.located")}
                    </span>
                    <p>
                        {t("contactSection.foot.locatedV")}
                        <br />
                        {t("contactSection.foot.locatedTz")}
                    </p>
                </div>

                <div>
                    <span className="label">
                        {t("contactSection.foot.available")}
                    </span>
                    <p>
                        {t("contactSection.foot.availableV1")}
                        <br />
                        {t("contactSection.foot.availableV2")}
                    </p>
                </div>

                <div>
                    <span className="label">
                        {t("contactSection.foot.document")}
                    </span>
                    <p>
                        <a href="/Virginia_Martinez_CV.pdf" download>
                            {t("contactSection.foot.downloadCV")}
                        </a>
                        <br />
                        <a href="/case-studies/design-system">
                            {t("contactSection.foot.caseStudy")}
                        </a>
                    </p>
                </div>
            </div>

            <div className="colophon">
                <span>{t("contactSection.colophon.copy")}</span>
                <span>{t("contactSection.colophon.set")}</span>
                <span>
                    {t("contactSection.colophon.egg")
                        .split("⌘K")
                        .map((part, i, arr) => (
                            <span key={i}>
                                {part}
                                {i < arr.length - 1 && (
                                    <>
                                        <kbd>⌘</kbd>
                                        <kbd>K</kbd>
                                    </>
                                )}
                            </span>
                        ))}
                </span>
            </div>
        </section>
    );
}
