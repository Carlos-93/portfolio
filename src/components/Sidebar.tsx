import { useState, useEffect } from 'react';

export default function Sidebar() {
    const [activeLink, setActiveLink] = useState('#home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Método para manejar el scroll y resaltar el enlace activo
        function handleScroll() {
            const sections = ['home', 'about', 'skills', 'experience', 'education', 'certifications', 'projects', 'contact'];

            for (const section of sections) {
                const element = document.getElementById(section);

                if (element) {
                    const rect = element.getBoundingClientRect();
                    const isVisible = rect.top >= 0 && rect.top <= window.innerHeight / 2;

                    if (isVisible) {
                        setActiveLink(`#${section}`);
                        break;
                    }
                }
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    // Método para manejar el clic en los enlaces del menú móvil
    function handleLinkClick(link: string) {
        setActiveLink(link);
        setIsMenuOpen(false);

        const section = document.querySelector(link);
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <>
            {/* Si el menú no está abierto, muestra el botón del menú hamburguesa */}
            {!isMenuOpen && (
                <header className="lg:hidden fixed w-full h-16 backdrop-blur-xl bg-black/70 z-10">
                    {/* Botón del menú hamburguesa */}
                    <button className="absolute right-3 w-16 sm:w-18 z-10"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <figure>
                            <img src="/burger-menu.svg" alt="Menu" className={`${isMenuOpen ? 'brightness-0 invert' : ''}`} />
                        </figure>
                    </button>
                </header>
            )}

            {/* Si el menú está abierto, muestra el botón de cerrar */}
            {isMenuOpen && (
                <button className="lg:hidden fixed top-3 right-4 text-white z-20"
                    onClick={() => setIsMenuOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-x w-12 sm:w-14">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6L6 18" />
                        <path d="M6 6l12 12" />
                    </svg>
                </button>
            )}

            {/* Sidebar para teléfono móvil */}
            {isMenuOpen ? (
                <div className="fixed inset-0 z-10 lg:hidden backdrop-blur-xl bg-black/70 transition-all duration-700 ease-in-out"
                    onClick={() => setIsMenuOpen(false)}>
                    <nav className="fixed w-full h-full flex justify-center items-center">
                        <ul className="flex flex-col gap-10 sm:gap-16 text-xl sm:text-2xl font-medium text-white text-center">
                            <li><a href="#home" onClick={() => handleLinkClick('#home')} className="hover:text-cyan-400 transition-all duration-300">Inicio</a></li>
                            <li><a href="#about" onClick={() => handleLinkClick('#about')} className="hover:text-cyan-400 transition-all duration-300">Sobre mí</a></li>
                            <li><a href="#skills" onClick={() => handleLinkClick('#skills')} className="hover:text-cyan-400 transition-all duration-300">Habilidades</a></li>
                            <li><a href="#experience" onClick={() => handleLinkClick('#experience')} className="hover:text-cyan-400 transition-all duration-300">Experiencia</a></li>
                            <li><a href="#education" onClick={() => handleLinkClick('#education')} className="hover:text-cyan-400 transition-all duration-300">Educación</a></li>
                            <li><a href="#certifications" onClick={() => handleLinkClick('#certifications')} className="hover:text-cyan-400 transition-all duration-300">Certificaciones</a></li>
                            <li><a href="#projects" onClick={() => handleLinkClick('#projects')} className="hover:text-cyan-400 transition-all duration-300">Proyectos</a></li>
                            <li><a href="#contact" onClick={() => handleLinkClick('#contact')} className="hover:text-cyan-400 transition-all duration-300">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            ) : (
                <div className="fixed inset-0 z-10 lg:hidden backdrop-blur-none bg-black/0 transition-all duration-700 ease-in-out opacity-0 pointer-events-none"
                    onClick={() => setIsMenuOpen(false)} />
            )}

            {/* Sidebar para escritorio */}
            <nav className="hidden lg:flex flex-col justify-center bg-gray-800 w-72 h-screen text-white text-lg select-none overflow-y-auto fixed z-10">
                <ul className="flex flex-col gap-10 py-16">
                    <li>
                        <a href="#home" onClick={() => setActiveLink('#home')} className={`flex gap-2 rounded py-5 pl-14 transition-all ease-in-out duration-300
                            ${activeLink === '#home' ? 'bg-gray-700 text-cyan-400 pl-22' : 'hover:bg-gray-700 hover:pl-22 hover:text-cyan-400'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-home">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                            </svg>
                            Inicio
                        </a>
                    </li>

                    <li>
                        <a href="#about" onClick={() => setActiveLink('#about')} className={`flex gap-2 rounded py-5 pl-14 transition-all ease-in-out duration-300
                            ${activeLink === '#about' ? 'bg-gray-700 text-cyan-400 pl-22' : 'hover:bg-gray-700 hover:pl-22 hover:text-cyan-400'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-user-share">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h3" />
                                <path d="M16 22l5 -5" />
                                <path d="M21 21.5v-4.5h-4.5" />
                            </svg>
                            Acerca de mí
                        </a>
                    </li>

                    <li>
                        <a href="#skills" onClick={() => setActiveLink('#skills')} className={`flex gap-2 rounded py-5 pl-14 transition-all ease-in-out duration-300
                            ${activeLink === '#skills' ? 'bg-gray-700 text-cyan-400 pl-22' : 'hover:bg-gray-700 hover:pl-22 hover:text-cyan-400'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-star">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                            Habilidades
                        </a>
                    </li>

                    <li>
                        <a href="#experience" onClick={() => setActiveLink('#experience')} className={`flex gap-2 rounded py-5 pl-14 transition-all ease-in-out duration-300
                            ${activeLink === '#experience' ? 'bg-gray-700 text-cyan-400 pl-22' : 'hover:bg-gray-700 hover:pl-22 hover:text-cyan-400'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-briefcase">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                                <path d="M12 12l0 .01" />
                                <path d="M3 13a20 20 0 0 0 18 0" />
                            </svg>
                            Experiencia
                        </a>
                    </li>

                    <li>
                        <a href="#education" onClick={() => setActiveLink('#education')} className={`flex gap-2 rounded py-5 pl-14 transition-all ease-in-out duration-300
                            ${activeLink === '#education' ? 'bg-gray-700 text-cyan-400 pl-22' : 'hover:bg-gray-700 hover:pl-22 hover:text-cyan-400'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-school">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                                <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                            </svg>
                            Educación
                        </a>
                    </li>

                    <li>
                        <a href="#certifications" onClick={() => setActiveLink('#certifications')} className={`flex gap-2 rounded py-5 pl-14 transition-all ease-in-out duration-300
                            ${activeLink === '#certifications' ? 'bg-gray-700 text-cyan-400 pl-22' : 'hover:bg-gray-700 hover:pl-22 hover:text-cyan-400'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-certificate">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                                <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                                <path d="M6 9l12 0" />
                                <path d="M6 12l3 0" />
                                <path d="M6 15l2 0" />
                            </svg>
                            Certificaciones
                        </a>
                    </li>

                    <li>
                        <a href="#projects" onClick={() => setActiveLink('#projects')} className={`flex gap-2 rounded py-5 pl-14 transition-all ease-in-out duration-300
                            ${activeLink === '#projects' ? 'bg-gray-700 text-cyan-400 pl-22' : 'hover:bg-gray-700 hover:pl-22 hover:text-cyan-400'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-presentation">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 4l18 0" />
                                <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
                                <path d="M12 16l0 4" />
                                <path d="M9 20l6 0" />
                                <path d="M8 12l3 -3l2 2l3 -3" />
                            </svg>
                            Proyectos
                        </a>
                    </li>

                    <li>
                        <a href="#contact" onClick={() => setActiveLink('#contact')} className={`flex gap-2 rounded py-5 pl-14 transition-all ease-in-out duration-300
                            ${activeLink === '#contact' ? 'bg-gray-700 text-cyan-400 pl-22' : 'hover:bg-gray-700 hover:pl-22 hover:text-cyan-400'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-phone-call">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                            </svg>
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}