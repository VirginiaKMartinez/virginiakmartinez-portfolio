import { useEffect, useMemo, useRef, useState } from "react";

/**
 * ScrollSpy:
 * - activa la sección más alta visible
 * - fallback: la más cercana al top si ninguna intersecta
 * - lock temporal tras click (lockToId)
 */
export function useScrollSpy(
    ids,
    {
        rootMargin = "0px 0px -70% 0px",
        threshold = 0.01,
        lockToId = null,
        lockDuration = 650,
    } = {},
) {
    const [activeId, setActiveId] = useState(ids[0] ?? null);
    const observerRef = useRef(null);
    const lockRef = useRef({ id: null, until: 0 });

    useEffect(() => {
        if (lockToId) {
            lockRef.current = {
                id: lockToId,
                until: performance.now() + lockDuration,
            };
            setActiveId(lockToId);
        }
    }, [lockToId, lockDuration]);

    const elements = useMemo(
        () => ids.map((id) => document.getElementById(id)).filter(Boolean),
        [ids],
    );

    useEffect(() => {
        if (!elements.length) return;

        if (observerRef.current) observerRef.current.disconnect();

        const updateActive = (entries) => {
            if (performance.now() < lockRef.current.until && lockRef.current.id)
                return;

            const visible = entries
                .filter((e) => e.isIntersecting)
                .sort(
                    (a, b) =>
                        (a.target.getBoundingClientRect().top ?? 0) -
                        (b.target.getBoundingClientRect().top ?? 0),
                );

            if (visible.length) {
                const next = visible[0].target.id;
                if (next && next !== activeId) setActiveId(next);
                return;
            }

            let closest = activeId;
            let minDist = Number.POSITIVE_INFINITY;
            for (const el of elements) {
                const dist = Math.abs(el.getBoundingClientRect().top);
                if (dist < minDist) {
                    minDist = dist;
                    closest = el.id;
                }
            }
            if (closest && closest !== activeId) setActiveId(closest);
        };

        const observer = new IntersectionObserver(updateActive, {
            root: null,
            rootMargin,
            threshold,
        });

        elements.forEach((el) => observer.observe(el));
        observerRef.current = observer;

        const onScroll = () => {
            const fakeEntries = elements.map((el) => ({
                target: el,
                isIntersecting:
                    el.getBoundingClientRect().top < window.innerHeight &&
                    el.getBoundingClientRect().bottom > 0,
            }));
            updateActive(fakeEntries);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        onScroll();

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [elements, rootMargin, threshold]);

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

    setTimeout(() => {
        if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
        el.focus({ preventScroll: true });
    }, 220);
}
