export default function SectionWrapper({ title, children, id }) {
    return (
        <section
            id={id}
            className="bg-background py-16 px-4 font-sans border-b border-divider"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
                <h2 className="section-title text-textMuted">{title}</h2>
                <div>{children}</div>
            </div>
        </section>
    );
}
