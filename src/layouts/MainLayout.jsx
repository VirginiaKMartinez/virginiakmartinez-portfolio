import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import { ScrollProgress } from "../components/layout/ScrollProgress";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <ScrollProgress />

            <main id="main" tabIndex={-1} className="flex-grow wrap">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
