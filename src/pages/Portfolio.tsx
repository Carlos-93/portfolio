import Sidebar from '../components/Sidebar';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Portfolio() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900">
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex flex-col gap-16 px-6 py-16 sm:px-8 md:px-10 lg:p-16 lg:ml-72 w-full">
                    <section id="home"><Home /></section>
                    <section id="about"><About /></section>
                    <section id="skills"><Skills /></section>
                    <section id="experience"><Experience /></section>
                    <section id="education"><Education /></section>
                    <section id="certifications"><Certifications /></section>
                    <section id="projects"><Projects /></section>
                    <section id="contact"><Contact /></section>
                </main>
            </div>
            <Footer />
        </div>
    );
}