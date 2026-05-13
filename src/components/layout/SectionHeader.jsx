// src/components/layout/SectionHeader.jsx — v2 numbered editorial header
import PropTypes from "prop-types";

/**
 * Numbered section header in editorial style.
 * Renders: "01" mono label  |  big serif title (with italic accent segment)  +  mono kicker
 *
 * Usage:
 *   <SectionHeader num="01" title={["Selected", "work."]} kicker="Four projects · 2019—2024" />
 *   First word(s) = regular fg, second segment = italic accent.
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

SectionHeader.propTypes = {
    num: PropTypes.string.isRequired,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    kicker: PropTypes.string,
};
