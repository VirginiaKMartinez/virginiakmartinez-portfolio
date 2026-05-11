// src/pages/case-studies/design-system/DesignSystem.jsx
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";
import OnThisPage from "../../../components/nav/onThisPage.jsx";

import dsEN from "../../../data/designSystem.en.js";
import dsFR from "../../../data/designSystem.fr.js";

function SectionHeader({ kicker, title, children }) {
    return (
        <header className="max-w-3xl">
            {kicker && (
                <p className="text-xs font-semibold uppercase tracking-wide text-link">
                    {kicker}
                </p>
            )}
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-textDark sm:text-3xl">
                {title}
            </h2>
            {children && (
                <div className="mt-4 text-base leading-relaxed text-textMuted">
                    {children}
                </div>
            )}
        </header>
    );
}

function VisualPlaceholder({ label, variant = "default", className = "" }) {
    const isHero = variant === "hero";
    const isLarge = variant === "large";

    return (
        <figure
            className={[
                "overflow-hidden rounded-2xl border border-divider bg-backgroundWhite",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <div
                className={[
                    "flex flex-col justify-between bg-background p-5",
                    isHero ? "min-h-80 sm:min-h-96" : "",
                    isLarge ? "min-h-72" : "",
                    !isHero && !isLarge ? "min-h-56" : "",
                ]
                    .filter(Boolean)
                    .join(" ")}
            >
                <div className="grid gap-3 sm:grid-cols-3">
                    <div className="h-24 rounded-xl border border-divider bg-backgroundWhite" />
                    <div className="h-24 rounded-xl border border-divider bg-backgroundWhite sm:col-span-2" />
                    <div className="h-16 rounded-xl border border-divider bg-backgroundWhite sm:col-span-2" />
                    <div className="h-16 rounded-xl border border-divider bg-backgroundWhite" />
                </div>
                <figcaption className="mt-8 text-sm font-medium text-textMuted">
                    {label}
                </figcaption>
            </div>
        </figure>
    );
}

function ComparisonPlaceholder({ labels }) {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            {labels.map((label) => (
                <div
                    key={label}
                    className="rounded-2xl border border-divider bg-backgroundWhite p-5"
                >
                    <div className="text-sm font-semibold text-textDark">
                        {label}
                    </div>
                    <div className="mt-4 space-y-3 rounded-xl bg-background p-4">
                        <div className="h-5 w-2/3 rounded-full bg-divider" />
                        <div className="grid grid-cols-2 gap-3">
                            <div className="h-24 rounded-lg border border-divider bg-backgroundWhite" />
                            <div className="h-24 rounded-lg border border-divider bg-backgroundWhite" />
                        </div>
                        <div className="h-4 w-4/5 rounded-full bg-divider" />
                        <div className="h-4 w-1/2 rounded-full bg-divider" />
                    </div>
                </div>
            ))}
        </div>
    );
}

function CollaborationPlaceholder({ labels }) {
    return (
        <div className="grid gap-3 rounded-2xl border border-divider bg-backgroundWhite p-5 sm:grid-cols-3">
            {labels.map((label) => (
                <div
                    key={label}
                    className="rounded-xl border border-divider bg-background p-4 text-center"
                >
                    <div className="mx-auto h-12 w-12 rounded-full border border-divider bg-backgroundWhite" />
                    <div className="mt-3 text-sm font-medium text-textDark">
                        {label}
                    </div>
                </div>
            ))}
            <p className="text-sm font-medium text-textMuted sm:col-span-3">
                Visual placeholder — Product / Design / Development collaboration
            </p>
        </div>
    );
}

function WorkflowPlaceholder({ steps }) {
    return (
        <div className="rounded-2xl border border-divider bg-backgroundWhite p-5">
            <div className="grid gap-3 md:grid-cols-4">
                {steps.map((step, index) => (
                    <div
                        key={step}
                        className="rounded-xl border border-divider bg-background p-4"
                    >
                        <div className="text-xs font-semibold uppercase tracking-wide text-link">
                            Step {index + 1}
                        </div>
                        <div className="mt-2 text-sm font-medium text-textDark">
                            {step}
                        </div>
                    </div>
                ))}
            </div>
            <p className="mt-5 text-sm font-medium text-textMuted">
                Visual placeholder — Figma to Angular handoff workflow
            </p>
        </div>
    );
}

function MetricCard({ value, label }) {
    return (
        <div className="rounded-2xl border border-divider bg-backgroundWhite p-6">
            <div className="text-3xl font-semibold text-textDark">{value}</div>
            <div className="mt-2 text-sm leading-relaxed text-textMuted">
                {label}
            </div>
        </div>
    );
}

function BulletList({ items, className = "" }) {
    return (
        <ul
            className={[
                "list-disc space-y-2 pl-5 text-textDark marker:text-link",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

export default function DesignSystem() {
    const { i18n, t } = useTranslation();

    const lang = (i18n.resolvedLanguage || i18n.language || "en")
        .split("-")[0]
        .toLowerCase();

    const data = lang === "fr" ? dsFR : dsEN;
    const copy =
        lang === "fr"
            ? {
                  overview: "Vue d’ensemble",
                  problem: "Problème",
                  role: "Mon rôle",
                  foundations: "Fondations",
                  library: "Bibliothèque",
                  badge: "Exemple Badge",
                  designDev: "Design-dev",
                  decisions: "Décisions",
                  outcomes: "Résultats",
                  learnings: "Enseignements",
                  next: "Prochaines étapes",
                  productDesign: "Product Design B2B",
                  mainContribution: "Contribution principale",
                  mainContributionText:
                      "Design system B2B documenté à partir de zéro, conçu pour les équipes produit, développement et projet.",
                  problemTitle: "Le problème",
                  problemCardTitle: "Trois problèmes à résoudre",
                  beforeAfter: ["Avant", "Après"],
                  collaboration: ["Produit", "Design", "Développement"],
                  roleTitle: "Mon rôle",
                  responsibilities: "Responsabilités",
                  foundationsTitle: "Fondations du système",
                  foundationsIntro:
                      "Le système a commencé par des fondations partagées capables de soutenir des décisions cohérentes entre la documentation design et l’implémentation front-end.",
                  libraryTitle: "Bibliothèque de composants",
                  libraryIntro:
                      "La bibliothèque couvrait plus de 25 fondations UI et composants, des contrôles de base aux patterns produit plus complexes. Chaque composant était documenté avec des conseils d’usage, variantes, états et considérations d’implémentation.",
                  covered: "Fondations et composants couverts",
                  documentationExample: "Exemple de documentation",
                  badgeTitle: "Composant Badge",
                  designDevTitle: "Collaboration design-dev",
                  challengesTitle: "Défis et décisions",
                  challenge: "Défi",
                  decision: "Décision",
                  outcomesTitle: "Résultats",
                  outcomesIntro:
                      "Pas de métriques quantitatives inventées ici : l’impact est présenté à travers des livrables défendables et des bénéfices qualitatifs pour l’équipe.",
                  learningsTitle: "Enseignements",
                  nextTitle: "Prochaines étapes",
              }
            : {
                  overview: "Overview",
                  problem: "Problem",
                  role: "My role",
                  foundations: "Foundations",
                  library: "Component library",
                  badge: "Badge example",
                  designDev: "Design-dev",
                  decisions: "Decisions",
                  outcomes: "Outcomes",
                  learnings: "Learnings",
                  next: "Next steps",
                  productDesign: "B2B Product Design",
                  mainContribution: "Main contribution",
                  mainContributionText:
                      "Documented B2B design system from scratch, built for product, development and project teams.",
                  problemTitle: "The problem",
                  problemCardTitle: "Three problems to solve",
                  beforeAfter: ["Before", "After"],
                  collaboration: ["Product", "Design", "Development"],
                  roleTitle: "My role",
                  responsibilities: "Responsibilities",
                  foundationsTitle: "System foundations",
                  foundationsIntro:
                      "The system started with shared foundations that could support consistent decisions across design documentation and front-end implementation.",
                  libraryTitle: "Component library",
                  libraryIntro:
                      "The library covered 25+ UI foundations and components, from basic controls to more complex product patterns. Each component was documented with usage guidance, variants, states and implementation considerations.",
                  covered: "Covered foundations and components",
                  documentationExample: "Documentation example",
                  badgeTitle: "Badge component",
                  designDevTitle: "Design-dev collaboration",
                  challengesTitle: "Challenges and decisions",
                  challenge: "Challenge",
                  decision: "Decision",
                  outcomesTitle: "Outcomes",
                  outcomesIntro:
                      "No fake quantitative metrics here: the impact is presented through defensible outputs and qualitative team benefits.",
                  learningsTitle: "Learnings",
                  nextTitle: "Next steps",
              };

    const toc = useMemo(
        () => [
            { id: "ds-overview", label: copy.overview },
            { id: "ds-problem", label: copy.problem },
            { id: "ds-role", label: copy.role },
            { id: "ds-foundations", label: copy.foundations },
            { id: "ds-library", label: copy.library },
            { id: "ds-badge", label: copy.badge },
            { id: "ds-dev", label: copy.designDev },
            { id: "ds-challenges", label: copy.decisions },
            { id: "ds-results", label: copy.outcomes },
            { id: "ds-learnings", label: copy.learnings },
            { id: "ds-next", label: copy.next },
        ],
        [copy],
    );

    return (
        <main className="bg-background">
            <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-24 lg:grid-cols-[280px_1fr]">
                <aside className="space-y-6 lg:sticky lg:top-24 lg:h-max">
                    <div className="rounded-2xl border border-divider bg-backgroundWhite p-5">
                        <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-textMuted">
                            {t("projects.projectInfo", "Project info")}
                        </div>
                        <dl className="space-y-4">
                            {data.meta.map((item) => (
                                <div key={item.label}>
                                    <dt className="text-xs font-semibold uppercase tracking-wide text-textMuted">
                                        {item.label}
                                    </dt>
                                    <dd className="mt-1 text-sm leading-relaxed text-textDark">
                                        {item.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <OnThisPage
                        items={toc}
                        title={t("common.onThisPage", "On this page")}
                    />
                </aside>

                <article className="min-w-0">
                    <Link
                        to="/#casestudies"
                        className="inline-flex items-center gap-2 rounded-md text-link transition-colors hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                        <Icon name="ArrowLeft" className="h-4 w-4" />
                        {data.ui.backToHome}
                    </Link>

                    <header id="ds-overview" className="scroll-mt-24">
                        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_260px] lg:items-end">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wide text-link">
                                    {copy.productDesign}
                                </p>
                                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-textDark sm:text-5xl">
                                    {data.title}
                                </h1>
                                <p className="mt-5 max-w-3xl text-xl leading-relaxed text-textDark">
                                    {data.subtitle}
                                </p>
                                <p className="mt-5 max-w-3xl text-base leading-relaxed text-textMuted">
                                    {data.intro}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-divider bg-backgroundWhite p-5">
                                <div className="text-xs font-semibold uppercase tracking-wide text-textMuted">
                                    {copy.mainContribution}
                                </div>
                                <p className="mt-3 text-sm leading-relaxed text-textDark">
                                    {copy.mainContributionText}
                                </p>
                            </div>
                        </div>

                        <VisualPlaceholder
                            className="mt-10"
                            label="Visual placeholder — Design System cover"
                            variant="hero"
                        />
                    </header>

                    <div className="mt-20 space-y-24">
                        <section id="ds-problem" className="scroll-mt-24">
                            <SectionHeader title={copy.problemTitle}>
                                <p>{data.problem.intro}</p>
                            </SectionHeader>

                            <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                                <div className="rounded-2xl border border-divider bg-backgroundWhite p-6">
                                    <h3 className="text-lg font-semibold text-textDark">
                                        {copy.problemCardTitle}
                                    </h3>
                                    <BulletList
                                        items={data.problem.points}
                                        className="mt-4"
                                    />
                                </div>
                                <div>
                                    <ComparisonPlaceholder
                                        labels={copy.beforeAfter}
                                    />
                                    <p className="mt-3 text-sm font-medium text-textMuted">
                                        Visual placeholder — Before / after UI
                                        consistency
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="ds-role" className="scroll-mt-24">
                            <SectionHeader title={copy.roleTitle}>
                                <p>{data.role.intro}</p>
                            </SectionHeader>

                            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
                                <div className="rounded-2xl border border-divider bg-backgroundWhite p-6">
                                    <h3 className="text-lg font-semibold text-textDark">
                                        {copy.responsibilities}
                                    </h3>
                                    <BulletList
                                        items={data.role.responsibilities}
                                        className="mt-4"
                                    />
                                </div>
                                <CollaborationPlaceholder
                                    labels={copy.collaboration}
                                />
                            </div>
                        </section>

                        <section id="ds-foundations" className="scroll-mt-24">
                            <SectionHeader title={copy.foundationsTitle}>
                                <p>{copy.foundationsIntro}</p>
                            </SectionHeader>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {data.foundations.map((item) => (
                                    <div
                                        key={item.title}
                                        className="rounded-2xl border border-divider bg-backgroundWhite p-6"
                                    >
                                        <h3 className="text-lg font-semibold text-textDark">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-textMuted">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <VisualPlaceholder
                                className="mt-8"
                                label="Visual placeholder — Design tokens structure"
                            />
                        </section>

                        <section id="ds-library" className="scroll-mt-24">
                            <SectionHeader title={copy.libraryTitle}>
                                <p>{copy.libraryIntro}</p>
                            </SectionHeader>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {data.componentCategories.map((category) => (
                                    <div
                                        key={category}
                                        className="rounded-2xl border border-divider bg-backgroundWhite p-5"
                                    >
                                        <div className="h-2 w-10 rounded-full bg-primary" />
                                        <h3 className="mt-4 text-base font-semibold text-textDark">
                                            {category}
                                        </h3>
                                    </div>
                                ))}
                            </div>

                            <VisualPlaceholder
                                className="mt-8"
                                label="Visual placeholder — Component inventory overview"
                                variant="large"
                            />

                            <div className="mt-8 rounded-2xl border border-divider bg-backgroundWhite p-6">
                                <h3 className="text-lg font-semibold text-textDark">
                                    {copy.covered}
                                </h3>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {data.componentInventory.map((component) => (
                                        <span
                                            key={component}
                                            className="rounded-full border border-divider bg-background px-3 py-1 text-sm text-textDark"
                                        >
                                            {component}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section id="ds-badge" className="scroll-mt-24">
                            <SectionHeader
                                kicker={copy.documentationExample}
                                title={copy.badgeTitle}
                            >
                                <p>{data.badge.intro}</p>
                            </SectionHeader>

                            <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                                <div className="rounded-2xl border border-divider bg-backgroundWhite p-6">
                                    <BulletList items={data.badge.points} />
                                    <p className="mt-6 border-t border-divider pt-5 text-sm font-medium leading-relaxed text-textDark">
                                        {data.badge.outcome}
                                    </p>
                                </div>
                                <VisualPlaceholder
                                    label="Visual placeholder — Badge component documentation"
                                    variant="large"
                                />
                            </div>

                            <div className="mt-6 grid gap-4 md:grid-cols-3">
                                {[
                                    "Visual placeholder — Badge anatomy",
                                    "Visual placeholder — Badge variants",
                                    "Visual placeholder — Badge usage guidelines",
                                ].map((label) => (
                                    <VisualPlaceholder key={label} label={label} />
                                ))}
                            </div>
                        </section>

                        <section id="ds-dev" className="scroll-mt-24">
                            <SectionHeader title={copy.designDevTitle}>
                                <p>{data.dev.intro}</p>
                            </SectionHeader>

                            <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                                <div className="rounded-2xl border border-divider bg-backgroundWhite p-6">
                                    <BulletList items={data.dev.points} />
                                </div>
                                <WorkflowPlaceholder steps={data.dev.workflow} />
                            </div>
                        </section>

                        <section id="ds-challenges" className="scroll-mt-24">
                            <SectionHeader title={copy.challengesTitle} />

                            <div className="mt-8 grid gap-4">
                                {data.challenges.map((item) => (
                                    <div
                                        key={item.challenge}
                                        className="grid gap-5 rounded-2xl border border-divider bg-backgroundWhite p-6 md:grid-cols-2"
                                    >
                                        <div>
                                            <div className="text-xs font-semibold uppercase tracking-wide text-textMuted">
                                                {copy.challenge}
                                            </div>
                                            <p className="mt-2 font-medium leading-relaxed text-textDark">
                                                {item.challenge}
                                            </p>
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold uppercase tracking-wide text-link">
                                                {copy.decision}
                                            </div>
                                            <p className="mt-2 leading-relaxed text-textDark">
                                                {item.decision}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="ds-results" className="scroll-mt-24">
                            <SectionHeader title={copy.outcomesTitle}>
                                <p>{copy.outcomesIntro}</p>
                            </SectionHeader>

                            <div className="mt-8 grid gap-4 md:grid-cols-3">
                                {data.results.metrics.map((metric) => (
                                    <MetricCard
                                        key={metric.label}
                                        value={metric.value}
                                        label={metric.label}
                                    />
                                ))}
                            </div>

                            <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                                <div className="rounded-2xl border border-divider bg-backgroundWhite p-6">
                                    <BulletList items={data.results.notes} />
                                </div>
                                <VisualPlaceholder
                                    label="Visual placeholder — Shared source of truth / system adoption"
                                    variant="large"
                                />
                            </div>
                        </section>

                        <section id="ds-learnings" className="scroll-mt-24">
                            <SectionHeader title={copy.learningsTitle}>
                                <p>{data.learnings.intro}</p>
                            </SectionHeader>
                            <div className="mt-8 rounded-2xl border border-divider bg-backgroundWhite p-6">
                                <BulletList items={data.learnings.points} />
                            </div>
                        </section>

                        <section id="ds-next" className="scroll-mt-24">
                            <SectionHeader title={copy.nextTitle} />
                            <div className="mt-8 rounded-2xl border border-divider bg-backgroundWhite p-6">
                                <BulletList items={data.next} />
                            </div>
                        </section>

                        <section className="pt-2">
                            <div className="rounded-2xl border border-divider bg-backgroundWhite px-6 py-10 text-center sm:px-10">
                                <h2 className="mx-auto max-w-2xl text-2xl font-semibold tracking-tight text-textDark">
                                    {data.cta.title}
                                </h2>
                                <a
                                    href="mailto:hello@virginiak.dev"
                                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-backgroundWhite shadow-sm transition-colors hover:bg-link focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                >
                                    {data.cta.button}
                                    <Icon name="MessageSquare" className="h-5 w-5" />
                                </a>
                            </div>
                        </section>
                    </div>
                </article>
            </div>
        </main>
    );
}
