// src/routes/AppRouter.jsx
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CaseStaffAndGo from "../pages/CaseStaffAndGo";
import CaseHawi from "../pages/CaseHawi";
import CaseGazella from "../pages/CaseGazella";
import CaseFiche from "../pages/CaseFiche";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />

                    {/* v2 editorial — full case studies */}
                    <Route
                        path="case/staff-and-go"
                        element={<CaseStaffAndGo />}
                    />
                    <Route
                        path="case/hawi"
                        element={<CaseHawi />}
                    />
                    <Route
                        path="case/gazella"
                        element={<CaseGazella />}
                    />
                    <Route
                        path="case/fiche-salarie"
                        element={<CaseFiche />}
                    />
                </Route>

                {/* Cualquier ruta no capturada va al Home */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}
