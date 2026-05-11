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
            className="border border-divider rounded-2xl p-6 bg-backgroundWhite"
        >
            <div className="text-xs uppercase tracking-wide text-textMuted mb-3">
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
                                aria-current={isActive ? "true" : undefined}
                                className={[
                                    "w-full text-left py-2 px-3 transition-colors",
                                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                                    "border-l-2",
                                    isActive
                                        ? "bg-[rgba(0,0,0,0.04)] border-primary text-link font-medium"
                                        : "border-transparent text-textDark/70 hover:text-link",
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
