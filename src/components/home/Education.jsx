// src/components/home/Education.jsx
import { useTranslation } from "react-i18next";
import SectionWrapper from "../layout/SectionWrapper";
import educationEN from "../../data/education.en";
import educationFR from "../../data/education.fr";
import "../../styles/education.css";

export default function Education() {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { title, items } = lang === "fr" ? educationFR : educationEN;

    return (
        <SectionWrapper
            title={title}
            id="education"
            className="lg:min-h-[31.25rem] lg:flex lg:items-center education-bg-layer"
        >
            <div className=" grid gap-8 grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto ">
                {items.map((edu, index) => (
                    <div key={index} className="space-y-2">
                        <h3 className="text-xl font-semibold text-textDark">
                            {edu.degree}
                        </h3>
                        <p className="text-sm text-textMuted">
                            {edu.location} · {edu.period}
                        </p>
                        <h4 className="text-xl font-medium text-link">
                            {edu.institution}
                        </h4>
                        <p className="text-textDark">{edu.description}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
