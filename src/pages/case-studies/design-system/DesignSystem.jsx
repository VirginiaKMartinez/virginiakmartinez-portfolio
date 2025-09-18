// src/pages/case-studies/design-system/DesignSystem.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";

// Data bilingüe del caso
import dsEN from "../../../data/designSystem.en.js";
import dsFR from "../../../data/designSystem.fr.js";

// --- Hook: sección activa con IntersectionObserver
function useActiveSection(ids, rootMargin = "-40% 0px -55% 0px") {
    const [active, setActive] = useState(ids[0] || null);
    const observersRef = useRef([]);

    useEffect(() => {
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        observersRef.current.forEach((o) => o.disconnect());
        observersRef.current = [];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { root: null, rootMargin, threshold: 0.01 }
        );

        sections.forEach((el) => {
            observer.observe(el);
        });
        observersRef.current.push(observer);

        return () => {
            observersRef.current.forEach((o) => o.disconnect());
            observersRef.current = [];
        };
    }, [ids, rootMargin]);

    return active;
}

// --- Utilidad: scroll suave con offset (header fijo)
function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function DesignSystem() {
    const { i18n, t } = useTranslation();

    // Dataset por idioma (normaliza en/fr)
    const lang = (i18n.resolvedLanguage || i18n.language || "en")
        .split("-")[0]
        .toLowerCase();
    const data = lang === "fr" ? dsFR : dsEN;

    // TOC: IDs y etiquetas (usa i18n para los títulos de secciones)
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
                label: t("projects.sections.results", "Results"),
            },
            {
                id: "ds-learnings",
                label: t("projects.sections.learnings", "Learnings"),
            },
            { id: "ds-next", label: t("projects.sections.next", "Next steps") },
        ],
        [t]
    );

    const active = useActiveSection(toc.map((x) => x.id));

    // Fallbacks defensivos
    const title = data?.title ?? "Design System";
    const subtitle = data?.subtitle ?? "";
    const meta = Array.isArray(data?.meta) ? data.meta : [];

    return (
        <main className="bg-background">
            {/* HERO centrado (diferente a la home) */}
            <section className="pt-24 pb-10 px-4">
                <div className="max-w-3xl mx-auto text-start">
                    <Link
                        to="/#casestudies"
                        className="inline-flex items-center gap-2 text-link hover:underline"
                    >
                        <Icon name="ArrowLeft" className="w-4 h-4" />
                        {data?.ui?.backToHome ??
                            t(
                                "projects.backToProjects",
                                "Back to all Case Studies"
                            )}
                    </Link>

                    <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-textDark">
                        {title}
                    </h1>
                    <img
                        src="../../../../public/images/EN_thumb_design_system.png"
                        className=" rounded-lg"
                    ></img>
                    {!!subtitle && (
                        <p className="mt-3 text-textMuted">{subtitle}</p>
                    )}
                </div>
            </section>

            {/* LAYOUT de proyecto: aside sticky + contenido */}
            <div className="max-w-6xl mx-auto px-4 pb-20 grid gap-8 lg:grid-cols-[260px_1fr]">
                {/* --- Columna izquierda: meta + TOC (sticky) --- */}
                <aside className="h-max sticky top-20 space-y-8">
                    {/* Meta */}
                    {meta.length > 0 && (
                        <div className="border border-divider rounded-lg p-4">
                            <ul className="space-y-3">
                                {meta.map((m, i) => (
                                    <li key={i}>
                                        <div className="text-xs uppercase tracking-wide text-textMuted">
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

                    {/* TOC */}
                    <nav
                        aria-label="On this page"
                        className="border border-divider rounded-lg p-3"
                    >
                        <div className="text-xs uppercase tracking-wide text-textMuted mb-2">
                            {t("common.onThisPage", "On this page")}
                        </div>
                        <ul className="space-y-1">
                            {toc.map((item) => (
                                <li key={item.id}>
                                    <button
                                        type="button"
                                        onClick={() => scrollToId(item.id)}
                                        className={`w-full text-left px-2 py-1 rounded transition-colors
                      ${
                          active === item.id
                              ? "text-textDark bg-[rgba(0,0,0,0.04)]"
                              : "text-textMuted hover:text-link"
                      }`}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* --- Contenido derecha --- */}
                <article className="space-y-16">
                    {/* OVERVIEW */}
                    <section id="ds-overview" className="scroll-mt-24">
                        <h2 className="text-textMuted section-title mb-6">
                            {t("projects.sections.overview")}
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2">
                            <div>
                                <h3 className="font-semibold text-textDark mb-2">
                                    {data?.overview?.problem?.title ??
                                        t("projects.sections.problem")}
                                </h3>
                                <p className="text-textDark">
                                    {data?.overview?.problem?.text}
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-textDark mb-2">
                                    {data?.overview?.goals?.title ??
                                        t("projects.sections.goals")}
                                </h3>
                                <ul className="list-disc pl-5 space-y-1 text-textDark">
                                    {(data?.overview?.goals?.items ?? []).map(
                                        (g, idx) => (
                                            <li key={idx}>{g}</li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* TOKENS */}
                    <section id="ds-tokens" className="scroll-mt-24">
                        <h2 className="text-textMuted section-title mb-6">
                            {t("projects.sections.tokens")}
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {(data?.tokens ?? []).map((tk, i) => (
                                <div
                                    key={i}
                                    className="border border-divider rounded-lg p-4"
                                >
                                    <h4 className="font-semibold text-textDark">
                                        {tk.name}
                                    </h4>
                                    {tk.desc && (
                                        <p className="text-textMuted mt-1">
                                            {tk.desc}
                                        </p>
                                    )}
                                    {tk.examples?.length > 0 && (
                                        <div className="flex gap-3 mt-3 flex-wrap">
                                            {tk.examples.map((ex, j) => (
                                                <span
                                                    key={j}
                                                    className="text-sm border border-divider rounded px-2 py-1"
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

                    {/* LIBRARY */}
                    <section id="ds-library" className="scroll-mt-24">
                        <h2 className="text-textMuted section-title mb-6">
                            {t("projects.sections.library")}
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {(data?.library ?? []).map((c, i) => (
                                <div
                                    key={i}
                                    className="border border-divider rounded-lg p-4"
                                >
                                    <h4 className="font-semibold text-textDark">
                                        {c.name}
                                    </h4>
                                    {c.purpose && (
                                        <p className="text-textMuted mt-1">
                                            {c.purpose}
                                        </p>
                                    )}
                                    {c.notes?.length > 0 && (
                                        <ul className="list-disc pl-5 mt-2 text-sm text-textDark">
                                            {c.notes.map((n, j) => (
                                                <li key={j}>{n}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* GOVERNANCE */}
                    <section id="ds-governance" className="scroll-mt-24">
                        <h2 className="text-textMuted section-title mb-6">
                            {t("projects.sections.governance")}
                        </h2>
                        <p className="text-textDark">
                            {data?.governance?.summary}
                        </p>
                        <ul className="list-disc pl-5 mt-3 text-textDark">
                            {(data?.governance?.points ?? []).map((p, i) => (
                                <li key={i}>{p}</li>
                            ))}
                        </ul>
                    </section>

                    {/* DEV HANDOFF */}
                    <section id="ds-dev" className="scroll-mt-24">
                        <h2 className="text-textMuted section-title mb-6">
                            {t("projects.sections.devhandoff")}
                        </h2>
                        <p className="text-textDark">{data?.dev?.summary}</p>
                        <ul className="list-disc pl-5 mt-3 text-textDark">
                            {(data?.dev?.points ?? []).map((p, i) => (
                                <li key={i}>{p}</li>
                            ))}
                        </ul>
                    </section>

                    {/* CHALLENGES */}
                    <section id="ds-challenges" className="scroll-mt-24">
                        <h2 className="text-textMuted section-title mb-6">
                            {t("projects.sections.challenges")}
                        </h2>
                        <div className="space-y-4">
                            {(data?.challenges ?? []).map((it, i) => (
                                <div
                                    key={i}
                                    className="border border-divider rounded-lg p-4"
                                >
                                    <h4 className="font-semibold text-textDark">
                                        {it.title}
                                    </h4>
                                    <p className="text-textMuted mt-1">
                                        {it.context}
                                    </p>
                                    {it.solution && (
                                        <p className="text-textDark mt-2">
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

                    {/* RESULTS */}
                    <section id="ds-results" className="scroll-mt-24">
                        <h2 className="text-textMuted section-title mb-6">
                            {t("projects.sections.results")}
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-3">
                            {(data?.results?.metrics ?? []).map((m, i) => (
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
                            ))}
                        </div>
                        {(data?.results?.notes ?? []).length > 0 && (
                            <ul className="list-disc pl-5 mt-4 text-textDark">
                                {data.results.notes.map((n, i) => (
                                    <li key={i}>{n}</li>
                                ))}
                            </ul>
                        )}
                    </section>

                    {/* LEARNINGS */}
                    <section id="ds-learnings" className="scroll-mt-24">
                        <h2 className="text-textMuted section-title mb-6">
                            {t("projects.sections.learnings")}
                        </h2>
                        <ul className="list-disc pl-5 text-textDark">
                            {(data?.learnings ?? []).map((l, i) => (
                                <li key={i}>{l}</li>
                            ))}
                        </ul>
                    </section>

                    {/* NEXT */}
                    <section id="ds-next" className="scroll-mt-24">
                        <h2 className="text-textMuted section-title mb-6">
                            {t("projects.sections.next")}
                        </h2>
                        <ul className="list-disc pl-5 text-textDark">
                            {(data?.next ?? []).map((n, i) => (
                                <li key={i}>{n}</li>
                            ))}
                        </ul>
                    </section>

                    {/* CTA final */}
                    <section className="scroll-mt-24">
                        <a
                            href="mailto:hello@virginiak.dev"
                            className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-lg shadow-lg duration-300 transition-all hover:scale-105 hover:bg-accent-indigo"
                        >
                            <Icon name="MessageSquare" className="w-5 h-5" />
                            {data?.ui?.hireMe ?? "Discuss a project"}
                        </a>
                    </section>
                </article>
            </div>
        </main>
    );
}
