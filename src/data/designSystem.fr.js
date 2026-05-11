export default {
    title: "Staff & Go — Design System",
    subtitle:
        "De patterns UI dispersés à un design system B2B documenté pour les équipes produit, développement et projet.",
    intro:
        "J’ai piloté la création d’un design system B2B à partir de zéro, en documentant des fondations UI et des composants réutilisables pour améliorer la cohérence, réduire l’ambiguïté pendant le handoff et soutenir une implémentation front-end scalable.",

    ui: {
        backToHome: "Retour à toutes les études de cas",
        contactCta: "Me contacter",
    },

    meta: [
        { label: "Rôle", value: "Product Designer" },
        { label: "Entreprise", value: "Staff & Go" },
        { label: "Période", value: "Juil 2023 – Déc 2024" },
        { label: "Produit", value: "Application web B2B" },
        { label: "Périmètre", value: "25+ fondations UI et composants documentés" },
        {
            label: "Utilisateurs du système",
            value: "Développeurs, chefs de projet, équipe produit",
        },
        {
            label: "Outils",
            value: "Figma, Angular 16, TypeScript, Sass, HTML",
        },
    ],

    problem: {
        intro:
            "À mesure que le produit évoluait, les décisions UI se fragmentaient entre les écrans et les fonctionnalités. Les composants étaient parfois interprétés différemment selon le contexte, et les prototypes seuls ne suffisaient pas à expliquer les états, comportements, variantes et règles d’implémentation.",
        points: [
            "Patterns UI incohérents dans le produit",
            "Ambiguïté pendant le handoff design-développement",
            "Absence de documentation partagée pour les développeurs et chefs de projet",
        ],
    },

    role: {
        intro:
            "J’étais responsable de structurer le design system d’un point de vue product design et de le rendre utilisable par des parties prenantes techniques et non techniques.",
        responsibilities: [
            "Définition des fondations UI et des patterns de composants réutilisables",
            "Création d’une documentation Figma détaillée pour chaque composant",
            "Documentation de l’anatomie, des variantes, comportements, cas limites et règles d’usage",
            "Collaboration étroite avec les développeurs pendant l’implémentation Angular",
            "Aide aux chefs de projet pour comprendre quand et comment utiliser les composants",
            "Contribution au développement front-end lorsque nécessaire",
        ],
    },

    foundations: [
        {
            title: "Couleur",
            text: "Palette sémantique et règles d’usage pour les états produit et les rôles UI.",
        },
        {
            title: "Typographie",
            text: "Hiérarchie et styles de texte lisibles pour des écrans B2B denses.",
        },
        {
            title: "Espacement",
            text: "Rythme de mise en page cohérent entre composants et patterns d’écrans.",
        },
        {
            title: "Design tokens",
            text: "Fondations partagées pensées pour soutenir la cohérence entre design et code.",
        },
    ],

    componentCategories: [
        "Inputs et formulaires",
        "Navigation",
        "Feedback et statuts",
        "Affichage de données",
        "Overlays et dialogs",
        "Filtres et actions",
    ],

    componentInventory: [
        "Couleurs",
        "Typographie",
        "Espacement",
        "Boutons",
        "Toggle button",
        "Inputs",
        "Empty states",
        "Expansion panels / accordéons",
        "Dialogs / popups",
        "Tableaux",
        "Chips",
        "Checkboxes",
        "Radio buttons",
        "Ombres",
        "Badges",
        "Hints / panels",
        "Quotes",
        "Conversation / chat",
        "Paginator",
        "Liens",
        "Snackbars / toasts",
        "Tabs",
        "Tree",
        "Menu / navbar",
        "Menu icons",
        "Composant de filtre",
        "Color picker",
    ],

    badge: {
        intro:
            "Chaque composant incluait une documentation pratique pensée pour un usage produit réel. Par exemple, la documentation du composant Badge couvrait :",
        points: [
            "Anatomie",
            "Tailles et variantes",
            "Usages sémantiques et non sémantiques",
            "Règles de placement",
            "Comportement du débordement de texte",
            "Guidelines do / don’t",
            "Exemples pour développeurs et chefs de projet",
        ],
        outcome:
            "Cette documentation aidait à éviter les usages incohérents et donnait aux équipes des règles claires pour l’implémentation.",
    },

    dev: {
        intro:
            "Le design system n’était pas seulement une bibliothèque Figma. Il a été créé pour soutenir l’implémentation. J’ai travaillé étroitement avec les développeurs pour aligner la documentation Figma avec les composants Angular et vérifier que le système restait réaliste à construire et maintenir.",
        points: [
            "Documentation design alignée avec l’implémentation front-end",
            "Comportements des composants clarifiés avant le développement",
            "Moins d’hypothèses pendant le handoff",
            "Vocabulaire partagé entre produit, design et ingénierie",
        ],
        workflow: [
            "Documentation Figma",
            "Règles composant",
            "Implémentation Angular",
            "Revue / alignement",
        ],
    },

    challenges: [
        {
            challenge: "Les prototypes ne suffisaient pas.",
            decision:
                "Documenter les comportements, cas limites et règles d’usage directement dans le design system.",
        },
        {
            challenge:
                "Les équipes interprétaient les patterns UI différemment.",
            decision:
                "Créer des standards réutilisables et des guidelines de composants pour réduire l’ambiguïté.",
        },
        {
            challenge:
                "Le système devait servir les développeurs et les chefs de projet, pas seulement les designers.",
            decision:
                "Rédiger la documentation dans un langage pratique, avec des exemples visuels et des règles d’usage claires.",
        },
    ],

    results: {
        metrics: [
            {
                value: "25+",
                label: "Fondations et composants documentés",
            },
            {
                value: "3",
                label: "Audiences clés : produit, chefs de projet et développeurs",
            },
            {
                value: "1",
                label: "Source de vérité partagée pour les standards UI",
            },
        ],
        notes: [
            "Création d’une source de vérité partagée pour les décisions UI",
            "Amélioration de la cohérence entre les écrans produit",
            "Réduction de l’ambiguïté pendant le handoff design-développement",
            "Soutien à une implémentation scalable des composants Angular",
            "Aide aux développeurs et chefs de projet pour comprendre l’usage des composants",
            "Alignement et maintenance facilités pour les futurs travaux produit",
        ],
    },

    learnings: {
        intro:
            "Ce projet m’a appris qu’un design system n’est pas seulement une bibliothèque UI. C’est un outil de communication entre équipes. La documentation, le naming, les règles de comportement et la gouvernance sont aussi importants que les composants visuels eux-mêmes.",
        points: [
            "La documentation doit être aussi solide que les composants",
            "Un design system doit servir designers, développeurs et chefs de projet",
            "Un bon handoff réduit les écarts d’interprétation",
            "Les design systems ont besoin de gouvernance pour rester utiles",
            "La conscience technique aide à prendre des décisions design plus réalistes",
        ],
    },

    next: [
        "Étendre la documentation à des parcours produit plus complexes",
        "Renforcer les guidelines d’accessibilité",
        "Améliorer les workflows de contribution et de revue",
        "Connecter les design tokens plus profondément avec l’implémentation",
        "Mesurer l’adoption et la cohérence dans le temps",
    ],

    cta: {
        title:
            "Envie d’échanger sur les design systems ou la collaboration product design ?",
        button: "Me contacter",
    },
};
