import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  // Tus enlaces: ajusta las URLs a tus perfiles reales
  const linkedinUrl = "https://www.linkedin.com/in/virginiakmartinez/";
  const githubUrl = "https://github.com/VirginiaKM";
  const emailUrl = "mailto:hello@virginiak.dev";

  return (
    <footer className="bg-background border-t border-divider py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* 1) Licencia / Derechos de autor */}
        <div className="text-center md:text-left text-textMuted text-sm">
          {t("footer.copyright")}
        </div>

        {/* 2) Enlaces sociales/contacto */}
        <div className="flex items-center justify-center space-x-6">
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

        {/* 3) Tecnologías usadas (opcional) */}
        <div className="text-center md:text-right text-textMuted text-sm">
          {t("footer.madeWith")}
        </div>

      </div>
    </footer>
  );
}
