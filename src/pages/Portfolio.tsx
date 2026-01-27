// Hooks imports
import { useDocumentTitle } from '../hooks/useDocumentTitle';
// Components imports
import DarkMode from '../components/DarkMode';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
// Pages imports
import Certifications from './Certifications';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
import About from './About';
import Home from './Home';

export default function Portfolio() {
    useDocumentTitle();

    return (
        <div className="flex flex-col">
            <DarkMode />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex flex-col gap-16 px-6 py-20 sm:px-10 md:px-14 lg:p-18 xl:p-22 lg:ml-72 w-full">
                    <section id="home" className="scroll-mt-16 lg:scroll-mt-16"><Home /></section>
                    <section id="about" className="scroll-mt-16 lg:scroll-mt-16"><About /></section>
                    <section id="skills" className="scroll-mt-16 lg:scroll-mt-16"><Skills /></section>
                    <section id="experience" className="scroll-mt-16 lg:scroll-mt-16"><Experience /></section>
                    <section id="education" className="scroll-mt-16 lg:scroll-mt-16"><Education /></section>
                    <section id="certifications" className="scroll-mt-16 lg:scroll-mt-16"><Certifications /></section>
                    <section id="projects" className="scroll-mt-16 lg:scroll-mt-16"><Projects /></section>
                    <section id="contact" className="scroll-mt-16 lg:scroll-mt-16"><Contact /></section>
                </main>
            </div>
            <Footer />
        </div>
    );
}