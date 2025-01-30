import { useState } from 'react';

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-gray-900">
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex flex-col gap-16 px-6 py-16 sm:px-8 md:px-10 lg:p-16 lg:ml-72 w-full">
                    <button className="lg:hidden fixed right-6 top-2 w-14 sm:w-16 rounded-lg backdrop-blur-sm z-20"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <figure>
                            <img src="/burger-menu.svg" alt="Menu" className={`${isMenuOpen ? 'brightness-0 invert' : ''}`} />
                        </figure>
                    </button>
                    {isMenuOpen ? (
                        <div className="fixed inset-0 z-10 lg:hidden backdrop-blur-sm bg-black/20 transition-all duration-300 ease-in-out opacity-100"
                            onClick={() => setIsMenuOpen(false)} />
                    ) : (
                        <div className="fixed inset-0 z-10 lg:hidden backdrop-blur-none bg-black/0 transition-all duration-300 ease-in-out opacity-0 pointer-events-none"
                            onClick={() => setIsMenuOpen(false)} />
                    )}
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