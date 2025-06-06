import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Experience from "../components/home/Experience";
import Education from "../components/home/Education";
import CaseStudies from "../components/home/CaseStudies";
import ContactSection from "../components/home/ContactSection";
// … otras importaciones

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="education" element={<Education />} />
                    {/* <Route path="casestudies" element={<CaseStudies />} />
          <Route path="contact" element={<ContactSection />} /> */}
                </Route>
            </Routes>
        </Router>
    );
}
