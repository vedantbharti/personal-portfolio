import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";
import Education from "./Education";
import { Extracurricular } from "./Extracurricular";

function Home(){
    return (
        <>
            <Navbar/>
            <About/>
            <Experience/>
            <Projects/>
            <Skills/>
            <Education/>
            <Extracurricular/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Home;