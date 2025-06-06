// import { useTranslation } from "react-i18next";
import Hero from "../components/home/Hero";
import Experience from "../components/home/Experience";
import Education from "../components/home/Education";
import CaseStudies from "../components/home/CaseStudies";
import ContactSection from "../components/home/ContactSection";
function Home() {
    return (
        <div>
            <Hero />
            <Experience />
            <Education />
            <CaseStudies />
            <ContactSection />
        </div>
    );
}

export default Home;
