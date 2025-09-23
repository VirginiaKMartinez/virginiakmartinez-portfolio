import { memo } from "react";
import { useScrollSpy, scrollToId } from "../../hooks/useScrollSpy";

/**
 * items: [{ id, label }]
 */
function OnThisPageInner({ items = [], title = "On this page" }) {
    const activeId = useScrollSpy(items.map((i) => i.id));

    return (
        <nav
            aria-label={title}
            className="border border-divider rounded-lg p-3"
        >
            <div className="text-xs uppercase tracking-wide text-textMuted mb-2">
                {title}
            </div>
            <ul className="space-y-1">
                {items.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                        <li key={item.id} className="relative">
                            <button
                                type="button"
                                onClick={() => scrollToId(item.id)}
                                aria-current={isActive ? "true" : undefined}
                                className={`w-full text-left px-2 py-1 rounded transition-colors
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                  ${
                      isActive
                          ? "text-textDark bg-[rgba(0,0,0,0.04)]"
                          : "text-textMuted hover:text-link"
                  }`}
                            >
                                {item.label}
                            </button>
                            {isActive && (
                                <span
                                    aria-hidden="true"
                                    className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 h-5 w-1 rounded bg-primary"
                                />
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

const OnThisPage = memo(OnThisPageInner);
export default OnThisPage;
