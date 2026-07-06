import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll to the top on every route change (e.g. case → case via
 * OtherCases). If the URL carries a hash (e.g. /#contact from CaseTopbar),
 * scrolls to that section instead, offset by the fixed 56px topbar.
 */
export function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // "instant" is required: the global `scroll-behavior: smooth` would
        // animate the reset, and the new route's mount cancels the animation.
        if (hash) {
            const el = document.getElementById(hash.slice(1));
            if (el) {
                window.scrollTo({ top: el.offsetTop - 80, behavior: "instant" });
                return;
            }
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [pathname, hash]);

    return null;
}
