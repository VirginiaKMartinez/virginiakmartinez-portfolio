// src/routes/AppRouter.jsx
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

// import páginas de case studies
import DesignSystem from "../pages/case-studies/DesignSystem";
import Flows from "../pages/case-studies/Flows";
import UXResearch from "../pages/case-studies/UXResearch";

export default function AppRouter() {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* Rutas estáticas para cada case study */}
                    <Route
                        path="/case-studies/design-system"
                        element={<DesignSystem />}
                    />
                    {/* <Route path="/case-studies/flows" element={<Flows />} />
          <Route path="/case-studies/ux-research" element={<UXResearch />} /> */}

                    {/* Redirige rutas no reconocidas */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </MainLayout>
        </Router>
    );
}
