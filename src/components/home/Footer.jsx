import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    // URLs reales
    const linkedinUrl = "https://www.linkedin.com/in/virginiakmartinez/";
    const githubUrl = "https://github.com/VirginiaKM";
    const emailUrl = "mailto:hello@virginiaik.dev";

    return (
        <footer className="bg-background border-t border-divider py-8">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                {/* 1) Derechos de autor */}
                <div className="order-1 md:order-1 text-textMuted text-sm text-center md:text-left">
                    {t("footer.copyright")}
                </div>

                {/* 2) Enlaces sociales/contacto */}
                <div className="order-3 md:order-2 flex justify-center md:justify-center space-x-6">
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textDark hover:text-link transition-colors"
                    >
                        {t("footer.linkedin")}
                    </a>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textDark hover:text-link transition-colors"
                    >
                        {t("footer.github")}
                    </a>
                    <a
                        href={emailUrl}
                        className="text-textDark hover:text-link transition-colors"
                    >
                        {t("footer.email")}
                    </a>
                </div>

                {/* 3) Tecnologías usadas */}
                <div className="order-2 md:order-3 text-textMuted text-sm text-center md:text-right">
                    {t("footer.madeWith")}
                </div>
            </div>
        </footer>
    );
}
