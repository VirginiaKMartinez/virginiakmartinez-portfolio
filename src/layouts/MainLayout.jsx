import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import { ScrollProgress } from "../components/layout/ScrollProgress";

const MainLayout = () => {
    // Case pages bring their own CaseTopbar (with its own lang toggle);
    // rendering the home Header there stacks two fixed 56px bars.
    const isCase = useLocation().pathname.startsWith("/case");
    return (
        <div className="min-h-screen flex flex-col">
            {!isCase && <Header />}
            <ScrollProgress />

            <main id="main" tabIndex={-1} className="flex-grow wrap">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
