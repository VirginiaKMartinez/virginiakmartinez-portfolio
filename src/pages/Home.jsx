import Hero from "../components/home/Hero";
import SelectedWork from "../components/home/SelectedWork";
import SideIndex from "../components/layout/SideIndex";

function Home() {
    return (
        <>
            <SideIndex />
            <Hero />
            <SelectedWork />
            {/*
                v2 tanda 2.2 done — Hero + Selected Work + SideIndex.
                About, Experience, Education, Languages, Contact
                are coming in tandas v2.3 → v2.4.
            */}
        </>
    );
}

export default Home;
