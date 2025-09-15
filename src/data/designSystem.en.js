// src/data/projects/designSystem.en.js
export default {
  title: "Staff & Go — Design System",
  subtitle:
    "From scattered UI to a cohesive, coded component library that sped up delivery and reduced UI inconsistencies.",

  ui: {
    backToHome: "Back to home",
    contactCta: "Contact me",
    hireMe: "Discuss a project",
  },

  sections: {
    intro: "Design System",
    overview: "Problem & Goals",
    tokens: "Foundations (Tokens)",
    library: "Components Library",
    governance: "Docs & Governance",
    devhandoff: "Dev Handoff",
    challenges: "Challenges & Solutions",
    results: "Results & Impact",
    learnings: "Learnings",
    next: "Next Steps",
  },

  meta: [
    { label: "Role", value: "Product Designer (Lead system)" },
    { label: "Company", value: "Staff & Go" },
    { label: "Timeframe", value: "Jul 2023 – Dec 2024" },
    { label: "Stack", value: "Figma, Tokens, Angular, TS, Sass" },
  ],

  overview: {
    problem: {
      title: "The problem",
      text:
        "Multiple teams shipped features with inconsistent UI and duplicated logic. Prototypes were not enough for devs to implement fast and safely.",
    },
    goals: {
      title: "Goals",
      items: [
        "Create a single source of truth (tokens + components)",
        "Reduce UI inconsistencies across squads",
        "Accelerate delivery with documented patterns",
        "Improve handoff and maintenance",
      ],
    },
  },

  tokens: [
    {
      name: "Color",
      desc: "Semantic palette mapped to roles (primary, success, warning…).",
      examples: [
        { label: "Primary", style: { background: "var(--color-primary)", color: "#fff" } },
        { label: "Link", style: { color: "var(--color-link)", borderColor: "var(--color-link)" } },
      ],
    },
    {
      name: "Typography",
      desc: "Noto Sans as the base; scale and weights defined.",
    },
    {
      name: "Spacing",
      desc: "Consistent spacing scale applied to layout and components.",
    },
  ],

  library: [
    {
      name: "Buttons",
      purpose: "Primary, secondary, destructive; sizes; with icons.",
      notes: ["Accessible focus styles", "Keyboard operable", "Loading states"],
    },
    {
      name: "Inputs",
      purpose: "Text, select, checkbox, radio, textarea.",
      notes: ["Error/Help text", "ARIA attributes", "Validation patterns"],
    },
    {
      name: "Navigation",
      purpose: "Header, tabs, breadcrumb and pagination.",
      notes: ["Responsive patterns", "Trap focus in overlays"],
    },
  ],

  governance: {
    summary:
      "Documentation for designers and developers, contribution model and review workflow.",
    points: [
      "Component pages: usage, anatomy, props, do’s & don’ts",
      "Versioning and changelog for safe adoption",
      "Design tokens as the contract across platforms",
    ],
  },

  dev: {
    summary:
      "We worked side-by-side with devs to turn patterns into code, with clear contracts.",
    points: [
      "Coded components with Angular + TS + Sass",
      "Tokenized styles (color/spacing/typography)",
      "Examples and stories for each component",
    ],
  },

  challenges: [
    {
      title: "Prototype vs. coded library",
      context:
        "Design-only deliverables slowed down dev and created gaps.",
      solution:
        "Moved to a coded library with clear API and examples; designers still prototype, but code is the source of truth.",
    },
    {
      title: "Inconsistent adoption",
      context: "Different squads had their own UI pieces.",
      solution:
        "Introduced versioning, migration guides and a review gate before merging UI into main.",
    },
  ],

  results: {
    metrics: [
      { value: "45+", label: "Components shipped" },
      { value: "-35%", label: "UI defects in QA" },
      { value: "2×", label: "Faster feature delivery" },
    ],
    notes: [
      "Shared vocabulary across design & dev",
      "Easier onboarding for new teammates",
    ],
  },

  learnings: [
    "Docs must be as strong as components",
    "Semantics > visual color names",
    "Governance is key for adoption",
  ],

  next: [
    "Expand to charts & data viz",
    "Theming for partners",
    "Refine contribution workflow",
  ],

  labels: { solution: "Solution" },
};
