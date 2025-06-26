// src/pages/case-studies/DesignSystem.jsx
import { useNavigate } from "react-router-dom";
import SectionWrapper from "../../components/layout/SectionWrapper";
import DotPattern from "../../components/layout/DotPattern";

export default function DesignSystem() {
  const navigate = useNavigate();

  return (
    <SectionWrapper
      id="case-design-system"
      title="Design System"
      className="relative overflow-hidden"
    >
      {/* fondo de dots full-bleed */}
      <DotPattern
        className="absolute inset-0 -z-10 pointer-events-none"
        colorVar="--color-dots-default"
        size={20}
      />

      {/* botón Back */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-textMuted hover:text-textDark transition-colors"
      >
        ← Back to Home
      </button>

      {/* contenido principal */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-textDark">
          What is our Design System?
        </h3>
        <p className="text-textMuted">
          Aquí exploras en detalle cómo diseñamos y mantuvimos la librería de
          componentes desde cero…
        </p>
        {/* más secciones, imágenes, Lottie… */}
      </div>
    </SectionWrapper>
  );
}
