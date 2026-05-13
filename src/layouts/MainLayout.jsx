import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
// v2 — old Footer hidden until we rebuild the Contact + colophon block in tanda v2.4
// import Footer from "../components/home/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow wrap">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
