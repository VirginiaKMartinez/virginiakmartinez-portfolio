import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Marca como activa la sección cuyo elemento está “a la vista”
 * usando IntersectionObserver.
 * @param {string[]} ids - IDs de secciones en orden visual
 * @param {{ rootMargin?: string, threshold?: number|number[] }} opts
 */
export function useScrollSpy(ids, opts = {}) {
    const { rootMargin = "-40% 0px -55% 0px", threshold = 0.01 } = opts;
    const [activeId, setActiveId] = useState(ids[0] ?? null);
    const observerRef = useRef(null);

    const targets = useMemo(
        () => ids.map((id) => document.getElementById(id)).filter(Boolean),
        [ids]
    );

    useEffect(() => {
        if (!targets.length) return;
        if (observerRef.current) observerRef.current.disconnect();

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                }
            },
            { root: null, rootMargin, threshold }
        );

        targets.forEach((el) => observer.observe(el));
        observerRef.current = observer;

        return () => observer.disconnect();
    }, [targets, rootMargin, threshold]);

    return activeId;
}

/** Scroll suave respetando header fijo (usa --header-height si existe) */
export function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;

    const root = document.documentElement;
    const headerVar = getComputedStyle(root)
        .getPropertyValue("--header-height")
        .trim();

    if (headerVar) {
        const y =
            el.getBoundingClientRect().top +
            window.scrollY -
            parseInt(headerVar, 10);
        window.scrollTo({ top: y, behavior: "smooth" });
    } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Accesibilidad: foco en el heading tras el scroll
    setTimeout(() => {
        if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
        el.focus({ preventScroll: true });
    }, 240);
}
