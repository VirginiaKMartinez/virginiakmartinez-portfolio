// import { useTranslation } from "react-i18next";
import Hero from "../components/home/Hero";
import Experience from "../components/home/Experience";
import Education from "../components/home/Education";
import CaseStudies from "../components/home/CaseStudies";
import ContactSection from "../components/home/ContactSection";
function Home() {
    // const { t } = useTranslation();

    return (
        <>
            <Hero />
            <Experience />
            <Education />
            <CaseStudies />
            <ContactSection />
            <div className="bg-background text-textDark font-sans p-8">
                <h1 className="text-3xl font-bold">
                    Esto debería verse con tus estilos
                </h1>
                <p className="text-link mt-2">Y este texto en azul link</p>
            </div>
        </>
    );
}

export default Home;
