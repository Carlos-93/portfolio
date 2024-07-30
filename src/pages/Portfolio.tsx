import Sidebar from '../components/Sidebar';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Portfolio() {
    return (
        <div className="min-h-screen flex bg-gray-900">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="skills"><Skills /></section>
                <section id="experience"><Experience /></section>
                <section id="education"><Education /></section>
                <section id="certifications"><Certifications /></section>
                <section id="projects"><Projects /></section>
                <section id="contact"><Contact /></section>
            </div>
        </div>
    );
}