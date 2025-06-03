import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
const MainLayout = ({ children }) => {
    const { i18n } = useTranslation();

    const switchLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div>
            <header>
                <nav>
                    <button onClick={() => switchLanguage("en")}>
                        English
                    </button>
                    <button onClick={() => switchLanguage("fr")}>
                        Français
                    </button>
                </nav>
            </header>
            <div>
                <Outlet />
            </div>

            <main>{children}</main>

            <footer>
                <p>&copy; Virginia Martínez</p>
            </footer>
        </div>
    );
};

export default MainLayout;
