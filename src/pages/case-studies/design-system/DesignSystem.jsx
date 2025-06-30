// src/pages/case-studies/DesignSystem.jsx
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SectionWrapper from "../../../components/layout/SectionWrapper";

import designSystemEN from "../../../data/designSystem.en";
import designSystemFR from "../../../data/designSystem.fr";

export default function DesignSystem() {
    const { i18n, t } = useTranslation();
    const data = i18n.language === "fr" ? designSystemFR : designSystemEN;

    return (
        <main className="pt-[var(--header-height)]">
            {/* Back to Home */}
            <div className="max-w-6xl mx-auto px-4 mt-4">
                <Link
                    to="/"
                    className="inline-flex items-center text-link font-medium hover:underline"
                >
                    ← {t("backToHome", "Back to Home")}
                </Link>
            </div>

            {/* Sección principal */}
            <SectionWrapper
                id="case-design-system"
                title={data.title}
                className="relative overflow-hidden"
            >
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-textDark">
                        {data.subtitle}
                    </h2>
                    <p className="text-textMuted">{data.intro}</p>

                    {/* Secciones internas */}
                    {data.sections.map((section) => (
                        <article key={section.id} className="pt-8">
                            <h3 className="text-lg font-semibold text-textDark mb-2">
                                {section.title}
                            </h3>
                            <p className="text-textMuted">{section.content}</p>
                        </article>
                    ))}
                </div>
            </SectionWrapper>
        </main>
    );
}
