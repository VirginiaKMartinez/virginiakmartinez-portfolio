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
import CaseStaffAndGo from "../pages/CaseStaffAndGo";
import Flows from "../pages/case-studies/Flows";
import UXResearch from "../pages/case-studies/UXResearch";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />

                    {/* v2 editorial — Staff & Go full case study */}
                    <Route
                        path="case/staff-and-go"
                        element={<CaseStaffAndGo />}
                    />

                    {/* Legacy v1 case studies (other 3 — kept until rewritten) */}
                    <Route path="case-studies">
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
