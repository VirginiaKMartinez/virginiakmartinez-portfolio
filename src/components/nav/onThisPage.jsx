import { memo, useState } from "react";
import { useScrollSpy, scrollToId } from "../../hooks/useScrollSpy";

/**
 * items: [{ id, label }]
 */
function OnThisPageInner({ items = [], title = "On this page" }) {
    const [clickedId, setClickedId] = useState(null);

    const activeId = useScrollSpy(
        items.map((i) => i.id),
        {
            rootMargin: "0px 0px -70% 0px",
            threshold: 0.01,
            lockToId: clickedId,
            lockDuration: 700,
        },
    );

    const onClick = (e, id) => {
        setClickedId(id);
        scrollToId(id);

        // evita que el foco “pinte” como si fuera otro activo (mouse)
        setTimeout(() => e.currentTarget?.blur?.(), 0);

        // soltamos el lock tras el scroll
        setTimeout(() => setClickedId(null), 750);
    };

    return (
        <nav
            aria-label={title}
            className="rounded-2xl border border-divider bg-backgroundWhite p-5"
        >
            <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-textMuted">
                {title}
            </div>

            <ul className="space-y-1">
                {items.map((item) => {
                    const isActive = activeId === item.id;

                    return (
                        <li key={item.id}>
                            <button
                                type="button"
                                onClick={(e) => onClick(e, item.id)}
                                aria-current={isActive ? "location" : undefined}
                                className={[
                                    "w-full rounded-lg border-l-2 px-3 py-2 text-left text-sm transition-colors",
                                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                                    isActive
                                        ? "border-primary bg-background text-link font-semibold"
                                        : "border-transparent text-textMuted hover:bg-background hover:text-textDark",
                                ].join(" ")}
                            >
                                {item.label}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default memo(OnThisPageInner);
