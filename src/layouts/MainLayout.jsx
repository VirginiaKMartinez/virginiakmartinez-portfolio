// import { useTranslation } from "react-i18next";
import Header from "../components/layout/Header";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
    // const { i18n } = useTranslation();

    // const switchLanguage = (lang) => {
    //     i18n.changeLanguage(lang);
    // };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow p-4 pt-20">
                <Outlet />
            </main>

            <footer className="p-4 text-center border-t border-gray-200">
                <p>&copy; Virginia Martínez</p>
            </footer>
        </div>
    );
};

export default MainLayout;
