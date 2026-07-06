import Hero from "../components/home/Hero";
import SelectedWork from "../components/home/SelectedWork";
import About from "../components/home/About";
import Experience from "../components/home/Experience";
import Education from "../components/home/Education";
import Contact from "../components/home/Contact";

function Home() {
    return (
        <>
            <Hero />
            <SelectedWork />
            <About />
            <Experience />
            <Education />
            <Contact />
        </>
    );
}

export default Home;
