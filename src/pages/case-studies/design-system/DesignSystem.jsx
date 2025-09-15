// src/pages/projects/DesignSystem.jsx
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SectionWrapper from "../../../components/layout/SectionWrapper";
import Icon from "../../../components/Icon";

// Data bilingüe del caso
import dsEN from "../../../data/designSystem.en.js";
import dsFR from "../../../data/designSystem.fr.js";

export default function DesignSystem() {
  const { i18n, t } = useTranslation();

  // Cogemos el dataset por idioma
  const data = i18n.language === "fr" ? dsFR : dsEN;

  // Fallbacks defensivos para no romper la UI si falta algo
  const title    = data?.title    ?? "Design System";
  const subtitle = data?.subtitle ?? "";
  const UI       = data?.ui       ?? {};
  const S        = data?.sections ?? {}; // nombres de secciones
  const meta     = data?.meta     ?? [];

  const ov       = data?.overview ?? {};
  const tokens   = data?.tokens   ?? [];
  const library  = data?.library  ?? [];
  const gov      = data?.governance ?? {};
  const dev      = data?.dev ?? {};
  const chall    = data?.challenges ?? [];
  const results  = data?.results ?? {};
  const learn    = data?.learnings ?? [];
  const next     = data?.next ?? [];

  return (
    <>
      {/* “Back to home” fuera del Header, arriba de la página */}
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-link hover:underline"
        >
          <Icon name="ArrowLeft" className="w-4 h-4" />
          {UI.backToHome ?? t("projects.backToHome", "Back to home")}
        </Link>
      </div>

      {/* HERO */}
      <SectionWrapper id="ds-hero">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-textDark">
            {title}
          </h1>
          {subtitle && (
            <p className="text-textMuted mt-2 max-w-3xl">{subtitle}</p>
          )}

          {/* Meta badges */}
          {meta.length > 0 && (
            <ul className="flex flex-wrap gap-3 mt-6">
              {meta.map((m, i) => (
                <li
                  key={i}
                  className="text-sm bg-[var(--color-bg)] border border-divider rounded-md px-3 py-1"
                >
                  <span className="text-textMuted">{m.label}:</span>{" "}
                  <span className="text-textDark">{m.value}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </SectionWrapper>

      {/* OVERVIEW (Problem & Goals) */}
      <SectionWrapper id="ds-overview" title={S.overview ?? "Overview"}>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-textDark mb-2">
              {ov?.problem?.title ?? "The problem"}
            </h3>
            <p className="text-textMuted">{ov?.problem?.text}</p>
          </div>
          <div>
            <h3 className="font-semibold text-textDark mb-2">
              {ov?.goals?.title ?? "Goals"}
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-textDark">
              {(ov?.goals?.items ?? []).map((g, idx) => (
                <li key={idx}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* TOKENS */}
      <SectionWrapper id="ds-tokens" title={S.tokens ?? "Foundations"}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tokens.map((tk, i) => (
            <div key={i} className="border border-divider rounded-lg p-4">
              <h4 className="font-semibold text-textDark">{tk.name}</h4>
              {tk.desc && (
                <p className="text-textMuted mt-1">{tk.desc}</p>
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
      </SectionWrapper>

      {/* LIBRARY */}
      <SectionWrapper id="ds-library" title={S.library ?? "Components"}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {library.map((c, i) => (
            <div key={i} className="border border-divider rounded-lg p-4">
              <h4 className="font-semibold text-textDark">{c.name}</h4>
              {c.purpose && (
                <p className="text-textMuted mt-1">{c.purpose}</p>
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
      </SectionWrapper>

      {/* GOVERNANCE */}
      <SectionWrapper id="ds-governance" title={S.governance ?? "Docs & Governance"}>
        <p className="text-textMuted">{gov.summary}</p>
        <ul className="list-disc pl-5 mt-2 text-textDark">
          {(gov.points ?? []).map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </SectionWrapper>

      {/* DEV HANDOFF */}
      <SectionWrapper id="ds-dev" title={S.devhandoff ?? "Dev Handoff"}>
        <p className="text-textMuted">{dev.summary}</p>
        <ul className="list-disc pl-5 mt-2 text-textDark">
          {(dev.points ?? []).map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </SectionWrapper>

      {/* CHALLENGES */}
      <SectionWrapper id="ds-challenges" title={S.challenges ?? "Challenges"}>
        <div className="space-y-4">
          {chall.map((it, i) => (
            <div key={i} className="border border-divider rounded-lg p-4">
              <h4 className="font-semibold text-textDark">{it.title}</h4>
              <p className="text-textMuted mt-1">{it.context}</p>
              {it.solution && (
                <p className="text-textDark mt-2">
                  <span className="font-medium">{data?.labels?.solution ?? "Solution"}:</span>{" "}
                  {it.solution}
                </p>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* RESULTS */}
      <SectionWrapper id="ds-results" title={S.results ?? "Results"}>
        <div className="grid gap-6 sm:grid-cols-3">
          {(results.metrics ?? []).map((m, i) => (
            <div key={i} className="text-center border border-divider rounded-lg p-4">
              <div className="text-2xl font-bold text-textDark">{m.value}</div>
              <div className="text-textMuted">{m.label}</div>
            </div>
          ))}
        </div>
        {(results.notes ?? []).length > 0 && (
          <ul className="list-disc pl-5 mt-4 text-textDark">
            {results.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        )}
      </SectionWrapper>

      {/* LEARNINGS */}
      <SectionWrapper id="ds-learnings" title={S.learnings ?? "Learnings"}>
        <ul className="list-disc pl-5 text-textDark">
          {learn.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </SectionWrapper>

      {/* NEXT */}
      <SectionWrapper id="ds-next" title={S.next ?? "Next steps"}>
        <ul className="list-disc pl-5 text-textDark">
          {next.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </SectionWrapper>
    </>
  );
}