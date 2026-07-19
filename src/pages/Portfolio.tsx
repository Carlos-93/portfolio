import { useDocumentTitle } from '../hooks/useDocumentTitle';
// Components
import DarkMode from '../components/DarkMode';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
// Pages
import Certifications from './Certifications';
import Languages from './Languages';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
import About from './About';
import Home from './Home';

export default function Portfolio() {
    // Set the document title for the portfolio page
    useDocumentTitle();

    return (
        <div className="flex flex-col">
            <DarkMode />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex flex-col gap-8 md:gap-16 lg:gap-20 px-5 py-20 sm:px-8 md:px-14 lg:px-10 lg:py-24 xl:px-16 2xl:px-20 lg:ml-72 w-full">
                    <section id="home" className="scroll-mt-20 lg:scroll-mt-24"><Reveal><Home /></Reveal></section>
                    <section id="about" className="scroll-mt-20 lg:scroll-mt-24"><Reveal><About /></Reveal></section>
                    <section id="skills" className="scroll-mt-20 lg:scroll-mt-24"><Reveal><Skills /></Reveal></section>
                    <section id="experience" className="scroll-mt-20 lg:scroll-mt-24"><Reveal><Experience /></Reveal></section>
                    <section id="education" className="scroll-mt-20 lg:scroll-mt-24"><Reveal><Education /></Reveal></section>
                    <section id="certifications" className="scroll-mt-20 lg:scroll-mt-24"><Reveal><Certifications /></Reveal></section>
                    <section id="languages" className="scroll-mt-20 lg:scroll-mt-24"><Reveal><Languages /></Reveal></section>
                    <section id="projects" className="scroll-mt-20 lg:scroll-mt-24"><Reveal><Projects /></Reveal></section>
                    <section id="contact" className="scroll-mt-20 lg:scroll-mt-24"><Reveal><Contact /></Reveal></section>
                </main>
            </div>
            <Footer />
        </div>
    );
}