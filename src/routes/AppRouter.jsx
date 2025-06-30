// src/routes/AppRouter.jsx
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import DesignSystem from "../pages/case-studies/DesignSystem";
import Flows from "../pages/case-studies/Flows";
import UXResearch from "../pages/case-studies/UXResearch";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                {/* Todas estas rutas comparten el mismo layout */}
                <Route element={<MainLayout />}>
                    {/* ruta index = “/” */}
                    <Route index element={<Home />} />

                    {/* /contact */}
                    <Route path="contact" element={<Contact />} />

                    {/* /case-studies/... */}
                    <Route path="case-studies">
                        {/* opcional: listado de case-studies si lo quisieras
            <Route index element={<CaseStudiesListing />} /> */}
                        <Route
                            path="design-system"
                            element={<DesignSystem />}
                        />
                        <Route path="flows" element={<Flows />} />
                        <Route path="ux-research" element={<UXResearch />} />
                    </Route>
                </Route>

                {/* Cualquier ruta no capturada va al Home */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}
