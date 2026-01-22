// src/pages/case-studies/design-system/DesignSystem.jsx
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";
import OnThisPage from "../../../components/nav/onThisPage.jsx";

import dsEN from "../../../data/designSystem.en.js";
import dsFR from "../../../data/designSystem.fr.js";

export default function DesignSystem() {
    const { i18n, t } = useTranslation();

    const lang = (i18n.resolvedLanguage || i18n.language || "en")
        .split("-")[0]
        .toLowerCase();

    const data = lang === "fr" ? dsFR : dsEN;

    const toc = useMemo(
        () => [
            {
                id: "ds-overview",
                label: t("projects.sections.overview", "Overview"),
            },
            { id: "ds-tokens", label: t("projects.sections.tokens", "Tokens") },
            {
                id: "ds-library",
                label: t("projects.sections.library", "Components"),
            },
            {
                id: "ds-governance",
                label: t("projects.sections.governance", "Governance"),
            },
            {
                id: "ds-dev",
                label: t("projects.sections.devhandoff", "Dev handoff"),
            },
            {
                id: "ds-challenges",
                label: t("projects.sections.challenges", "Challenges"),
            },
            {
                id: "ds-results",
                label: t("projects.sections.results", "Results & Impact"),
            },
            {
                id: "ds-learnings",
                label: t("projects.sections.learnings", "Learnings"),
            },
            { id: "ds-next", label: t("projects.sections.next", "Next steps") },
        ],
        [t],
    );

    const title = data?.title ?? "Design System";
    const subtitle = data?.subtitle ?? "";
    const meta = Array.isArray(data?.meta) ? data.meta : [];

    // Helpers de estilo “Figma”
    const sectionTitle = "text-textDark text-xl font-semibold";
    const sectionIntro =
        "mt-2 text-sm text-textMuted leading-relaxed max-w-2xl";

    return (
        <main className="bg-background">
            {/* Layout tipo Figma: mucho aire y columna derecha más estrecha */}
            <div className="max-w-6xl mx-auto px-4 pt-24 pb-20 grid gap-12 lg:grid-cols-[280px_1fr]">
                {/* Sidebar */}
                <aside className="space-y-6 lg:sticky lg:top-24 h-max">
                    {meta.length > 0 && (
                        <div className="border border-divider rounded-2xl p-5 bg-background">
                            <div className="text-[11px] uppercase tracking-wide text-textMuted mb-4">
                                {t("projects.projectInfo", "Project info")}
                            </div>
                            <ul className="space-y-4">
                                {meta.map((m, i) => (
                                    <li key={i}>
                                        <div className="text-[11px] uppercase tracking-wide text-textMuted">
                                            {m.label}
                                        </div>
                                        <div className="text-textDark">
                                            {m.value}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <OnThisPage
                        items={toc}
                        title={t("common.onThisPage", "On this page")}
                    />
                </aside>

                {/* Columna derecha */}
                <article className="min-w-0">
                    {/* Back link */}
                    <Link
                        to="/#casestudies"
                        className="inline-flex items-center gap-2 text-link hover:underline"
                    >
                        <Icon name="ArrowLeft" className="w-4 h-4" />
                        {data?.ui?.backToHome ??
                            t(
                                "projects.backToProjects",
                                "Back to all Case Studies",
                            )}
                    </Link>

                    {/* H1 (más parecido a Figma: grande pero no “gigante”) */}
                    <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-textDark">
                        {title}
                    </h1>

                    {/* Hero media: bloque gris grande, estilo Figma */}
                    <div className="mt-6 border border-divider rounded-2xl bg-[rgba(0,0,0,0.04)] overflow-hidden">
                        <div className="aspect-[16/9] w-full flex items-center justify-center">
                            <img
                                src="/images/EN_thumb_design_system.png"
                                alt=""
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Intro / subtitle */}
                    {!!subtitle && (
                        <p className="mt-4 text-textMuted leading-relaxed max-w-3xl">
                            {subtitle}
                        </p>
                    )}

                    {/* Contenido (ritmo Figma: headings pequeños + spacing consistente) */}
                    <div className="mt-12 space-y-14">
                        {/* OVERVIEW */}
                        <section id="ds-overview" className="scroll-mt-24">
                            <h2 className={sectionTitle}>
                                {t("projects.sections.overview", "Overview")}
                            </h2>
                            <p className={sectionIntro}>
                                {data?.overview?.summary ??
                                    t(
                                        "projects.overviewSummary",
                                        "This project involved creating a comprehensive design system from the ground up, establishing tokens, components, and governance for consistency across touchpoints.",
                                    )}
                            </p>

                            <div className="mt-6 grid gap-10 md:grid-cols-2">
                                <div>
                                    <h3 className="font-semibold text-textDark mb-2">
                                        {data?.overview?.problem?.title ??
                                            t(
                                                "projects.sections.problem",
                                                "The problem",
                                            )}
                                    </h3>
                                    <p className="text-textDark leading-relaxed">
                                        {data?.overview?.problem?.text}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-textDark mb-2">
                                        {data?.overview?.goals?.title ??
                                            t(
                                                "projects.sections.goals",
                                                "Goals",
                                            )}
                                    </h3>
                                    <ul className="list-disc pl-5 space-y-2 text-textDark">
                                        {(
                                            data?.overview?.goals?.items ?? []
                                        ).map((g, idx) => (
                                            <li key={idx}>{g}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* TOKENS (cards compactas tipo Figma) */}
                        <section id="ds-tokens" className="scroll-mt-24">
                            <h2 className={sectionTitle}>
                                {t("projects.sections.tokens", "Tokens")}
                            </h2>
                            <p className={sectionIntro}>
                                {t(
                                    "projects.tokensIntro",
                                    "Design tokens form the foundation of the system, ensuring visual consistency and enabling scalable UI decisions.",
                                )}
                            </p>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {(data?.tokens ?? [])
                                    .slice(0, 6)
                                    .map((tk, i) => (
                                        <div
                                            key={i}
                                            className="border border-divider rounded-2xl p-5 bg-background"
                                        >
                                            <h4 className="font-semibold text-textDark">
                                                {tk.name}
                                            </h4>
                                            {tk.desc && (
                                                <p className="text-textMuted mt-2 text-sm leading-relaxed">
                                                    {tk.desc}
                                                </p>
                                            )}

                                            {/* ejemplos, si hay (pero discretos) */}
                                            {tk.examples?.length > 0 && (
                                                <div className="flex gap-2 mt-3 flex-wrap">
                                                    {tk.examples
                                                        .slice(0, 2)
                                                        .map((ex, j) => (
                                                            <span
                                                                key={j}
                                                                className="text-xs border border-divider rounded-lg px-2 py-1"
                                                                style={ex.style}
                                                            >
                                                                {ex.label}
                                                            </span>
                                                        ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                            </div>
                        </section>

                        {/* COMPONENTS (mantengo tus cards, pero con intro + un “showcase” como Figma) */}
                        <section id="ds-library" className="scroll-mt-24">
                            <h2 className={sectionTitle}>
                                {t("projects.sections.library", "Components")}
                            </h2>
                            <p className={sectionIntro}>
                                {t(
                                    "projects.componentsIntro",
                                    "A reusable component library built with accessibility and scalability in mind, covering core UI patterns.",
                                )}
                            </p>

                            {/* Showcase visual (tipo Figma). Si no quieres este bloque, lo quitamos. */}
                            <div className="mt-6 border border-divider rounded-2xl bg-[rgba(0,0,0,0.03)] overflow-hidden">
                                <div className="aspect-[21/9] w-full flex items-center justify-center text-textMuted text-sm">
                                    {t(
                                        "projects.componentsShowcase",
                                        "Component Library Showcase",
                                    )}
                                </div>
                            </div>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {(data?.library ?? []).map((c, i) => (
                                    <div
                                        key={i}
                                        className="border border-divider rounded-2xl p-5 bg-background"
                                    >
                                        <h4 className="font-semibold text-textDark">
                                            {c.name}
                                        </h4>
                                        {c.purpose && (
                                            <p className="text-textMuted mt-2 text-sm leading-relaxed">
                                                {c.purpose}
                                            </p>
                                        )}
                                        {c.notes?.length > 0 && (
                                            <ul className="list-disc pl-5 mt-3 text-sm text-textDark space-y-1">
                                                {c.notes.map((n, j) => (
                                                    <li key={j}>{n}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* GOVERNANCE (más editorial, menos “cardy”) */}
                        <section id="ds-governance" className="scroll-mt-24">
                            <h2 className={sectionTitle}>
                                {t(
                                    "projects.sections.governance",
                                    "Governance",
                                )}
                            </h2>
                            <p className={sectionIntro}>
                                {t(
                                    "projects.governanceIntro",
                                    "Clear guidelines and processes for contributing, reviewing, and versioning to keep the system consistent.",
                                )}
                            </p>

                            <div className="mt-4">
                                <p className="text-textDark leading-relaxed">
                                    {data?.governance?.summary}
                                </p>
                                <ul className="list-disc pl-5 mt-4 text-textDark space-y-2">
                                    {(data?.governance?.points ?? []).map(
                                        (p, i) => (
                                            <li key={i}>{p}</li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        </section>

                        {/* DEV HANDOFF */}
                        <section id="ds-dev" className="scroll-mt-24">
                            <h2 className={sectionTitle}>
                                {t(
                                    "projects.sections.devhandoff",
                                    "Dev handoff",
                                )}
                            </h2>
                            <p className={sectionIntro}>
                                {t(
                                    "projects.devIntro",
                                    "Seamless handoff processes and documentation to help teams ship faster with less ambiguity.",
                                )}
                            </p>

                            <div className="mt-4">
                                <p className="text-textDark leading-relaxed">
                                    {data?.dev?.summary}
                                </p>
                                <ul className="list-disc pl-5 mt-4 text-textDark space-y-2">
                                    {(data?.dev?.points ?? []).map((p, i) => (
                                        <li key={i}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* CHALLENGES (cards como Figma) */}
                        <section id="ds-challenges" className="scroll-mt-24">
                            <h2 className={sectionTitle}>
                                {t(
                                    "projects.sections.challenges",
                                    "Challenges",
                                )}
                            </h2>
                            <p className={sectionIntro}>
                                {t(
                                    "projects.challengesIntro",
                                    "Building a design system across teams introduced alignment, adoption, and migration challenges.",
                                )}
                            </p>

                            <div className="mt-6 space-y-4">
                                {(data?.challenges ?? []).map((it, i) => (
                                    <div
                                        key={i}
                                        className="border border-divider rounded-2xl p-5 bg-background"
                                    >
                                        <h4 className="font-semibold text-textDark">
                                            {it.title}
                                        </h4>
                                        <p className="text-textMuted mt-2 text-sm leading-relaxed">
                                            {it.context}
                                        </p>
                                        {it.solution && (
                                            <p className="text-textDark mt-3 text-sm leading-relaxed">
                                                <span className="font-medium">
                                                    {data?.labels?.solution ??
                                                        "Solution"}
                                                    :
                                                </span>{" "}
                                                {it.solution}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* ✅ RESULTS: dejamos TU sección tal cual (solo ajusto el heading para encajar) */}
                        <section id="ds-results" className="scroll-mt-24">
                            <h2 className={sectionTitle}>
                                {t(
                                    "projects.sections.results",
                                    "Results & Impact",
                                )}
                            </h2>

                            {/* TU BLOQUE ACTUAL */}
                            <div className="mt-6">
                                <div className="grid gap-6 sm:grid-cols-3">
                                    {(data?.results?.metrics ?? []).map(
                                        (m, i) => (
                                            <div
                                                key={i}
                                                className="text-center border border-divider rounded-lg p-4"
                                            >
                                                <div className="text-2xl font-bold text-textDark">
                                                    {m.value}
                                                </div>
                                                <div className="text-textMuted">
                                                    {m.label}
                                                </div>
                                            </div>
                                        ),
                                    )}
                                </div>

                                {(data?.results?.notes ?? []).length > 0 && (
                                    <ul className="list-disc pl-5 mt-4 text-textDark">
                                        {data.results.notes.map((n, i) => (
                                            <li key={i}>{n}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </section>

                        {/* LEARNINGS */}
                        <section id="ds-learnings" className="scroll-mt-24">
                            <h2 className={sectionTitle}>
                                {t("projects.sections.learnings", "Learnings")}
                            </h2>
                            <p className={sectionIntro}>
                                {t(
                                    "projects.learningsIntro",
                                    "Key takeaways about documentation, semantics, and governance to drive adoption.",
                                )}
                            </p>
                            <ul className="list-disc pl-5 mt-4 text-textDark space-y-2">
                                {(data?.learnings ?? []).map((l, i) => (
                                    <li key={i}>{l}</li>
                                ))}
                            </ul>
                        </section>

                        {/* NEXT */}
                        <section id="ds-next" className="scroll-mt-24">
                            <h2 className={sectionTitle}>
                                {t("projects.sections.next", "Next steps")}
                            </h2>
                            <p className={sectionIntro}>
                                {t(
                                    "projects.nextIntro",
                                    "Planned iterations to expand coverage and improve workflows.",
                                )}
                            </p>
                            <ul className="list-disc pl-5 mt-4 text-textDark space-y-2">
                                {(data?.next ?? []).map((n, i) => (
                                    <li key={i}>{n}</li>
                                ))}
                            </ul>
                        </section>

                        {/* CTA final */}
                        <section className="pt-10">
                            <div className="border border-divider rounded-2xl bg-background px-6 py-10 sm:px-10 text-center">
                                <h3 className="text-textDark text-xl sm:text-2xl font-semibold">
                                    {t(
                                        "projects.ctaTitle",
                                        "Let’s work together",
                                    )}
                                </h3>

                                <p className="mt-2 text-textMuted text-sm leading-relaxed max-w-xl mx-auto">
                                    {t(
                                        "projects.ctaSubtitle",
                                        "Interested in discussing design systems or collaboration?",
                                    )}
                                </p>

                                <a
                                    href="mailto:hello@virginiak.dev"
                                    className="mt-6 inline-flex items-center justify-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-lg shadow-lg duration-300 transition-all hover:scale-105 hover:bg-accent-indigo focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                >
                                    {t("projects.ctaButton", "Get in touch")}
                                    <Icon
                                        name="MessageSquare"
                                        className="w-5 h-5"
                                    />
                                </a>
                            </div>
                        </section>
                    </div>
                </article>
            </div>
        </main>
    );
}
