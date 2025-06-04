import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import ProjectOne from "../pages/projects/ProjectOne";
import MainLayout from "../layouts/MainLayout";
import TestPage from "../pages/TestPage";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route
                        path="projects/project-one"
                        element={<ProjectOne />}
                    />
                   
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
