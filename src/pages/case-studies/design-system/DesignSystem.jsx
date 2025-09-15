// src/pages/projects/DesignSystem.jsx
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SectionWrapper from "../../../components/layout/SectionWrapper";
import Icon from "../../../components/Icon";

// Data bilingüe del caso
import dsEN from "../../../data/designSystem.en.js";
import dsFR from "../../../data/designSystem.en.js";

export default function DesignSystem() {
  const { i18n } = useTranslation();
  const data = i18n.language === "fr" ? dsFR : dsEN;

  return (
    <main className="bg-background">
      {/* Back bar (en la página, no en Header) */}
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-4 flex items-center justify-between">
        <Link
          to="/#casestudies"
          className="inline-flex items-center gap-2 text-link hover:underline"
        >
          <Icon name="ArrowLeft" className="w-4 h-4" />
          {data.ui.backToHome}
        </Link>

        {/* CTA corto para contacto opcional */}
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 text-link hover:underline"
        >
          <Icon name="Mail" className="w-4 h-4" />
          {data.ui.contactCta}
        </a>
      </div>

      {/* Intro / Meta */}
      <SectionWrapper id="ds-intro" title={data.sections.intro}>
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-textDark">
            {data.title}
          </h1>
          <p className="text-textDark">{data.subtitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.meta.map((item, i) => (
              <div key={i} className="rounded-lg border border-divider p-4">
                <p className="text-xs uppercase tracking-wide text-textMuted">
                  {item.label}
                </p>
                <p className="text-textDark mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Problema & Objetivos */}
      <SectionWrapper id="ds-overview" title={data.sections.overview}>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-textDark mb-2">
              {data.overview.problem.title}
            </h3>
            <p className="text-textDark">{data.overview.problem.text}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-textDark mb-2">
              {data.overview.goals.title}
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-textDark">
              {data.overview.goals.items.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Fundamentos (tokens) */}
      <SectionWrapper id="ds-tokens" title={data.sections.tokens}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.tokens.map((t, i) => (
            <div key={i} className="rounded-lg border border-divider p-4">
              <h4 className="font-semibold text-textDark">{t.name}</h4>
              <p className="text-textMuted mt-1">{t.desc}</p>
              {t.examples?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {t.examples.map((ex, k) => (
                    <span
                      key={k}
                      className="inline-block rounded px-2 py-1 text-sm border border-divider text-textDark"
                      style={ex.style || {}}
                    >
                      {ex.label}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Librería de componentes */}
      <SectionWrapper id="ds-library" title={data.sections.library}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.library.map((c, i) => (
            <div key={i} className="rounded-lg border border-divider p-4">
              <h4 className="font-semibold text-textDark">{c.name}</h4>
              <p className="text-textMuted mt-1">{c.purpose}</p>
              <ul className="mt-3 list-disc pl-5 text-textDark space-y-1">
                {c.notes.map((n, k) => (
                  <li key={k}>{n}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Documentación & Gobierno */}
      <SectionWrapper id="ds-governance" title={data.sections.governance}>
        <div className="space-y-6">
          <p className="text-textDark">{data.governance.summary}</p>
          <ul className="list-disc pl-5 space-y-2 text-textDark">
            {data.governance.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* Implantación con devs */}
      <SectionWrapper id="ds-dev" title={data.sections.devhandoff}>
        <div className="space-y-6">
          <p className="text-textDark">{data.dev.summary}</p>
          <ul className="list-disc pl-5 space-y-2 text-textDark">
            {data.dev.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* Retos y soluciones */}
      <SectionWrapper id="ds-challenges" title={data.sections.challenges}>
        <div className="space-y-6">
          {data.challenges.map((ch, i) => (
            <div key={i} className="rounded-lg border border-divider p-4">
              <h4 className="font-semibold text-textDark">{ch.title}</h4>
              <p className="text-textMuted mt-2">{ch.context}</p>
              <p className="text-textDark mt-2">
                <span className="font-semibold">{data.labels.solution}:</span>{" "}
                {ch.solution}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Resultados */}
      <SectionWrapper id="ds-results" title={data.sections.results}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.results.metrics.map((m, i) => (
            <div key={i} className="rounded-lg border border-divider p-6 text-center">
              <p className="text-3xl font-bold text-textDark">{m.value}</p>
              <p className="text-textMuted mt-1">{m.label}</p>
            </div>
          ))}
        </div>
        {data.results.notes?.length ? (
          <ul className="mt-6 list-disc pl-5 space-y-2 text-textDark">
            {data.results.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        ) : null}
      </SectionWrapper>

      {/* Aprendizajes y siguientes pasos */}
      <SectionWrapper id="ds-learnings" title={data.sections.learnings}>
        <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-2 text-textDark">
            {data.learnings.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
          {data.next?.length ? (
            <>
              <h4 className="font-semibold text-textDark mt-6">
                {data.sections.next}
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-textDark">
                {data.next.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </SectionWrapper>

      {/* CTA final */}
      <SectionWrapper id="ds-cta" title="">
        <div className="flex flex-col items-start md:items-center">
          <a
            href="mailto:hello@virginiak.dev"
            className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-lg shadow-lg duration-300 transition-all hover:scale-105 hover:bg-accent-indigo"
          >
            <Icon name="MessageSquare" className="w-5 h-5" />
            {data.ui.hireMe}
          </a>
        </div>
      </SectionWrapper>
    </main>
  );
}
