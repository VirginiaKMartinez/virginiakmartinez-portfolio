// src/routes/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

// case-studies pages
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

          {/* rutas por cada caso de estudio */}
          <Route
            path="/case-studies/design-system"
            element={<DesignSystem />}
          />
          <Route path="/case-studies/flows" element={<Flows />} />
          <Route
            path="/case-studies/ux-research"
            element={<UXResearch />}
          />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
