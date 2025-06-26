// import { useTranslation } from "react-i18next";
import Header from "../components/layout/Header";
import Footer from "../components/home/Footer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
    // const { i18n } = useTranslation();

    // const switchLanguage = (lang) => {
    //     i18n.changeLanguage(lang);
    // };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
