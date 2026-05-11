export default {
    title: "Staff & Go — Design System",
    subtitle:
        "From scattered UI patterns to a documented B2B design system for product, development and project teams.",
    intro:
        "I led the creation of a B2B design system from scratch, documenting reusable UI foundations and components to improve consistency, reduce ambiguity during handoff and support scalable front-end implementation.",

    ui: {
        backToHome: "Back to all Case Studies",
        contactCta: "Get in touch",
    },

    meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Company", value: "Staff & Go" },
        { label: "Timeframe", value: "Jul 2023 – Dec 2024" },
        { label: "Product", value: "B2B web application" },
        { label: "Scope", value: "25+ documented UI foundations and components" },
        {
            label: "Main users of the system",
            value: "Developers, project managers, product team",
        },
        {
            label: "Tools",
            value: "Figma, Angular 16, TypeScript, Sass, HTML",
        },
    ],

    problem: {
        intro:
            "As the product evolved, UI decisions became fragmented across screens and features. Components were often interpreted differently depending on the context, and prototypes alone were not enough to explain states, behaviors, variants and implementation rules.",
        points: [
            "Inconsistent UI patterns across the product",
            "Ambiguity during design-to-development handoff",
            "Lack of shared documentation for developers and project managers",
        ],
    },

    role: {
        intro:
            "I was responsible for structuring the design system from a product design perspective and making it usable for both technical and non-technical stakeholders.",
        responsibilities: [
            "Defined UI foundations and reusable component patterns",
            "Created detailed Figma documentation for each component",
            "Documented anatomy, variants, behavior, edge cases and usage rules",
            "Collaborated closely with developers during Angular implementation",
            "Helped project managers understand when and how to use components",
            "Contributed to front-end development when needed",
        ],
    },

    foundations: [
        {
            title: "Color",
            text: "Semantic palette and usage rules for product states and UI roles.",
        },
        {
            title: "Typography",
            text: "Hierarchy and readable text styles for dense B2B screens.",
        },
        {
            title: "Spacing",
            text: "Consistent layout rhythm across components and page patterns.",
        },
        {
            title: "Design tokens",
            text: "Shared foundations designed to support consistency between design and code.",
        },
    ],

    componentCategories: [
        "Inputs and forms",
        "Navigation",
        "Feedback and status",
        "Data display",
        "Overlays and dialogs",
        "Filters and actions",
    ],

    componentInventory: [
        "Colors",
        "Typography",
        "Spacing",
        "Buttons",
        "Toggle button",
        "Inputs",
        "Empty states",
        "Expansion panels / accordions",
        "Dialogs / popups",
        "Tables",
        "Chips",
        "Checkboxes",
        "Radio buttons",
        "Shadows",
        "Badges",
        "Hints / panels",
        "Quotes",
        "Conversation / chat",
        "Paginator",
        "Links",
        "Snackbars / toasts",
        "Tabs",
        "Tree",
        "Menu / navbar",
        "Menu icons",
        "Filter component",
        "Color picker",
    ],

    badge: {
        intro:
            "Each component included practical documentation designed for real product use. For example, the Badge component documentation covered:",
        points: [
            "Anatomy",
            "Sizes and variants",
            "Semantic and non-semantic usage",
            "Placement rules",
            "Text overflow behavior",
            "Do / don’t usage guidelines",
            "Examples for developers and project managers",
        ],
        outcome:
            "This documentation helped prevent inconsistent usage and gave teams clear rules for implementation.",
    },

    dev: {
        intro:
            "The design system was not only a Figma library. It was created to support implementation. I worked closely with developers to align Figma documentation with Angular components, making sure the system was realistic to build and maintain.",
        points: [
            "Design documentation aligned with front-end implementation",
            "Component behavior clarified before development",
            "Fewer assumptions during handoff",
            "Shared vocabulary between product, design and engineering",
        ],
        workflow: [
            "Figma documentation",
            "Component rules",
            "Angular implementation",
            "Review / alignment",
        ],
    },

    challenges: [
        {
            challenge: "Prototypes were not enough.",
            decision:
                "Document component behavior, edge cases and usage rules directly in the design system.",
        },
        {
            challenge: "Different teams interpreted UI patterns differently.",
            decision:
                "Create reusable standards and component guidelines to reduce ambiguity.",
        },
        {
            challenge:
                "The system needed to work for developers and PMs, not only designers.",
            decision:
                "Write documentation in practical language, with visual examples and clear usage rules.",
        },
    ],

    results: {
        metrics: [
            {
                value: "25+",
                label: "Documented foundations and components",
            },
            {
                value: "3",
                label: "Key audiences: product, project managers and developers",
            },
            {
                value: "1",
                label: "Shared source of truth for UI standards",
            },
        ],
        notes: [
            "Created a shared source of truth for UI decisions",
            "Improved consistency across product screens",
            "Reduced ambiguity during design-to-development handoff",
            "Supported scalable Angular component implementation",
            "Helped developers and project managers understand component usage",
            "Made future product work easier to align and maintain",
        ],
    },

    learnings: {
        intro:
            "This project taught me that a design system is not only a UI library. It is a communication tool between teams. Documentation, naming, behavior rules and governance are as important as the visual components themselves.",
        points: [
            "Documentation must be as strong as the components",
            "A design system needs to serve designers, developers and PMs",
            "Good handoff reduces interpretation gaps",
            "Design systems need governance to stay useful",
            "Technical awareness helps create more realistic design decisions",
        ],
    },

    next: [
        "Expanding documentation to cover more complex product flows",
        "Strengthening accessibility guidelines",
        "Improving contribution and review workflows",
        "Connecting design tokens more deeply with implementation",
        "Measuring adoption and consistency over time",
    ],

    cta: {
        title: "Interested in discussing design systems or product design collaboration?",
        button: "Get in touch",
    },
};
