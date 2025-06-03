import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import ProjectOne from "../pages/projects/ProjectOne";
import MainLayout from "../layouts/MainLayout";

const AppRouter = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                        path="/projects/project-one"
                        element={<ProjectOne />}
                    />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRouter;
