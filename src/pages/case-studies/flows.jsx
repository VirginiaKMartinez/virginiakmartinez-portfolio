// src/pages/case-studies/Flows.jsx
import { useNavigate } from "react-router-dom";
import SectionWrapper from "../../components/layout/SectionWrapper";
import DotPattern from "../../components/layout/DotPattern";

export default function Flows() {
    const navigate = useNavigate();

    return (
        <SectionWrapper
            id="case-flows"
            title="Interaction Flows"
            className="relative overflow-hidden"
        >
            <DotPattern
                className="absolute inset-0 -z-10 pointer-events-none"
                colorVar="--color-dots-default"
                size={20}
            />

            <button
                onClick={() => navigate(-1)}
                className="mb-8 text-textMuted hover:text-textDark transition-colors"
            >
                ← Back to Home
            </button>

            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-textDark">
                    Mapping User Flows
                </h3>
                <p className="text-textMuted">
                    Descripción de cómo definimos y refinamos los flujos de
                    usuario…
                </p>
            </div>
        </SectionWrapper>
    );
}
