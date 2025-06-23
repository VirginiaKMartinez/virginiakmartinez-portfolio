// import { useTranslation } from "react-i18next";
import Hero from "../components/home/Hero";
import Experience from "../components/home/Experience";
import Education from "../components/home/Education";
import CaseStudies from "../components/home/CaseStudies";
import Testimonials from "../components/home/Testimonials";
import ContactSection from "../components/home/ContactSection";
function Home() {
    return (
        <div>
            <Hero />
            <div className="border-b border-divider"></div>
            <Experience />
            <div className="border-b border-divider"></div>
            <Education />
            <div className="border-b border-divider"></div>
            <CaseStudies />
            <div className="border-b border-divider"></div>
            <Testimonials />
            <div className="border-b border-divider"></div>
            <ContactSection />
        </div>
    );
}

export default Home;
