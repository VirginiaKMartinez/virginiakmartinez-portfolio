// src/data/projects/designSystem.fr.js
export default {
    title: "Staff & Go — Design System",
    subtitle:
        "D’une UI dispersée à une bibliothèque de composants codés, plus rapide et cohérente.",

    ui: {
        backToHome: "Retour à toutes les études de cas",
        contactCta: "Me contacter",
        hireMe: "Parler d’un projet",
    },

    sections: {
        intro: "Design System",
        overview: "Problème & Objectifs",
        tokens: "Fondations (Tokens)",
        library: "Bibliothèque de composants",
        governance: "Docs & Gouvernance",
        devhandoff: "Handoff aux devs",
        challenges: "Défis & Solutions",
        results: "Résultats & Impact",
        learnings: "Enseignements",
        next: "Prochaines étapes",
    },

    meta: [
        { label: "Rôle", value: "Product Designer (Lead system)" },
        { label: "Entreprise", value: "Staff & Go" },
        { label: "Période", value: "Juil 2023 – Déc 2024" },
        { label: "Stack", value: "Figma, Tokens, Angular, TS, Sass" },
    ],

    overview: {
        problem: {
            title: "Le problème",
            text: "Plusieurs équipes livraient des fonctionnalités avec des incohérences UI et de la duplication. Les prototypes seuls ne suffisaient pas aux devs.",
        },
        goals: {
            title: "Objectifs",
            items: [
                "Créer une source de vérité (tokens + composants)",
                "Réduire les incohérences UI entre squads",
                "Accélérer la livraison avec des patterns documentés",
                "Améliorer le handoff et la maintenance",
            ],
        },
    },

    tokens: [
        {
            name: "Couleur",
            desc: "Palette sémantique mappée à des rôles (primary, success…).",
        },
        {
            name: "Typographie",
            desc: "Noto Sans comme base; échelle et graisses définies.",
        },
        {
            name: "Espacements",
            desc: "Échelle d’espacement cohérente pour layout et composants.",
        },
    ],

    library: [
        {
            name: "Boutons",
            purpose: "Primaire, secondaire, destructive; tailles; avec icônes.",
            notes: ["Focus accessible", "Clavier OK", "États de chargement"],
        },
        {
            name: "Champs",
            purpose: "Texte, select, checkbox, radio, textarea.",
            notes: ["Erreur/Aide", "Attributs ARIA", "Patrons de validation"],
        },
        {
            name: "Navigation",
            purpose: "Header, onglets, fil d’Ariane, pagination.",
            notes: ["Responsive", "Piège du focus dans les overlays"],
        },
    ],

    governance: {
        summary:
            "Documentation designers/devs, modèle de contribution et workflow de revue.",
        points: [
            "Pages composant : usage, anatomie, props, do & don’t",
            "Versioning et changelog pour adoption sûre",
            "Tokens comme contrat inter-plateformes",
        ],
    },

    dev: {
        summary:
            "Travail en binôme avec les devs pour transformer les patterns en code, avec des contrats clairs.",
        points: [
            "Composants Angular + TS + Sass",
            "Styles tokenisés (couleur/espacement/typo)",
            "Exemples et stories par composant",
        ],
    },

    challenges: [
        {
            title: "Prototype vs. bibliothèque codée",
            context:
                "Les livrables uniquement design ralentissaient le dev et créaient des gaps.",
            solution:
                "Passage à une bibliothèque codée avec API claire et exemples; le code devient la source de vérité.",
        },
        {
            title: "Adoption inégale",
            context: "Chaque squad avait ses briques UI.",
            solution:
                "Versioning, guides de migration et gate de revue avant merge vers main.",
        },
    ],

    results: {
        metrics: [
            { value: "45+", label: "Composants livrés" },
            { value: "-35%", label: "Défauts UI en QA" },
            { value: "×2", label: "Livraison plus rapide" },
        ],
        notes: ["Vocabulaire partagé design & dev", "Onboarding simplifié"],
    },

    learnings: [
        "La doc compte autant que les composants",
        "Les noms sémantiques > couleurs visuelles",
        "La gouvernance est clé pour l’adoption",
    ],

    next: [
        "Étendre aux data viz",
        "Thèmes partenaires",
        "Affiner le workflow de contribution",
    ],

    labels: { solution: "Solution" },
};
