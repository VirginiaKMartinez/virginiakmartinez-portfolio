// src/components/layout/SectionHeader.jsx — v2 numbered editorial header
/**
 * Numbered section header in editorial style.
 * Renders: mono num label  +  big serif title (with italic accent segment)  +  mono kicker.
 *
 * Props:
 *   - num: string (e.g. "01")
 *   - title: string or [main, italic] tuple — second segment renders italic + accent
 *   - kicker: string (optional, mono uppercase right-aligned)
 *
 * Usage:
 *   <SectionHeader num="01" title={["Selected", "work."]} kicker="Four projects" />
 */
export default function SectionHeader({ num, title, kicker }) {
    const [main, italic] = Array.isArray(title) ? title : [title, ""];

    return (
        <div className="sec-head">
            <div className="num">{num}</div>
            <div className="meta">
                <h2>
                    <span>{main}</span>
                    {italic && (
                        <>
                            {" "}
                            <span className="it">{italic}</span>
                        </>
                    )}
                </h2>
                {kicker && <div className="kicker">{kicker}</div>}
            </div>
        </div>
    );
}
