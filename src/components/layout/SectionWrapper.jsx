// src/components/layout/SectionWrapper.jsx
import React from "react";

export default function SectionWrapper({
    title,
    children,
    id,
    className = "",
}) {
    return (
        <section
            id={id}
            className={`
        relative overflow-hidden 
        bg-background py-16 px-4 font-sans
        
        ${className}
      `}
        >
            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
                <h2 className="section-title text-textMuted">{title}</h2>
                <div>{children}</div>
            </div>
        </section>
    );
}
