import Hero from "../components/home/Hero";
import SelectedWork from "../components/home/SelectedWork";
import About from "../components/home/About";
import Experience from "../components/home/Experience";
import Education from "../components/home/Education";
import SideIndex from "../components/layout/SideIndex";

function Home() {
    return (
        <>
            <SideIndex />
            <Hero />
            <SelectedWork />
            <About />
            <Experience />
            <Education />
            {/*
                v2 tanda 2.3 done — Hero + Selected Work + About + Experience + Education/Languages.
                Contact + colophon coming in tanda v2.4.
            */}
        </>
    );
}

export default Home;
