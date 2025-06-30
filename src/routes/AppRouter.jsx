// src/routes/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
        {/* Layout común para todas estas rutas */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies/design-system" element={<DesignSystem />} />
          <Route path="/case-studies/flows" element={<Flows />} />
          <Route path="/case-studies/ux-research" element={<UXResearch />} />
        </Route>

        {/* Fallback a Home si no existe la ruta */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
