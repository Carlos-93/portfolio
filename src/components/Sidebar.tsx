import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

// Section ids (in page order) with their Tabler icon paths — rendered in both navs
const NAV_ITEMS = [
    {
        id: 'home',
        paths: [
            'M5 12l-2 0l9 -9l9 9l-2 0',
            'M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7',
            'M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6',
        ],
    },
    {
        id: 'about',
        paths: [
            'M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0',
            'M6 21v-2a4 4 0 0 1 4 -4h3',
            'M16 22l5 -5',
            'M21 21.5v-4.5h-4.5',
        ],
    },
    {
        id: 'skills',
        paths: [
            'M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z',
        ],
    },
    {
        id: 'experience',
        paths: [
            'M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',
            'M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2',
            'M12 12l0 .01',
            'M3 13a20 20 0 0 0 18 0',
        ],
    },
    {
        id: 'education',
        paths: [
            'M22 9l-10 -4l-10 4l10 4l10 -4v6',
            'M6 10.6v5.4a6 3 0 0 0 12 0v-5.4',
        ],
    },
    {
        id: 'certifications',
        paths: [
            'M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0',
            'M13 17.5v4.5l2 -1.5l2 1.5v-4.5',
            'M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73',
            'M6 9l12 0',
            'M6 12l3 0',
            'M6 15l2 0',
        ],
    },
    {
        id: 'languages',
        paths: [
            'M4 5h7',
            'M9 3v2c0 4.418 -2.239 8 -5 8',
            'M5 9c0 2.144 2.952 3.908 6.7 4',
            'M12 20l4 -9l4 9',
            'M19.1 18h-6.2',
        ],
    },
    {
        id: 'projects',
        paths: [
            'M3 4l18 0',
            'M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10',
            'M12 16l0 4',
            'M9 20l6 0',
            'M8 12l3 -3l2 2l3 -3',
        ],
    },
    {
        id: 'contact',
        paths: [
            'M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2',
            'M15 7a2 2 0 0 1 2 2',
            'M15 3a6 6 0 0 1 6 6',
        ],
    },
];

function NavIcon({ paths }: { paths: string[] }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            {paths.map((d) => <path key={d} d={d} />)}
        </svg>
    );
}

export default function Sidebar() {
    // Translation hook
    const { t } = useTranslation();
    // State variables
    const [activeLink, setActiveLink] = useState('#home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Method to handle the scroll and highlight the active link
        function handleScroll() {
            // Loop through the sections and check if the element is visible in the viewport
            for (const { id } of NAV_ITEMS) {
                const element = document.getElementById(id);
                // Check if the element is visible in the viewport
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const isVisible = rect.top >= 0 && rect.top <= window.innerHeight / 2;

                    if (isVisible) {
                        setActiveLink(`#${id}`);
                        break;
                    }
                }
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    // Disable scroll when the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        // Restore scroll when the component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen])

    // Method to handle the click on the mobile menu links
    function handleLinkClick(link: string) {
        setActiveLink(link);
        setIsMenuOpen(false);

        const section = document.querySelector(link);
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <>
            {/* Header background */}
            <header className="fixed h-16 lg:h-20 backdrop-blur-xl bg-black/30 z-20 left-0 right-0 lg:left-72 block" />

            {/* Language selector for desktop - fixed position top right */}
            <div className="hidden lg:block fixed top-5 right-5 z-30">
                <LanguageSelector />
            </div>

            {/* Language selector for mobile - fixed position top left */}
            <div className="lg:hidden fixed top-2.5 left-5 sm:left-7 z-30">
                <LanguageSelector />
            </div>

            {/* Hamburger menu button */}
            <button className="lg:hidden fixed right-5 sm:right-7 top-2 z-30 flex flex-col justify-center items-center w-12 h-12 space-y-2 focus:outline-none cursor-pointer"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsMenuOpen(!isMenuOpen);
                }}
                aria-label={t('sidebar.toggleMenu')}>
                <span className={`block w-9 h-0.5 bg-white transition-all duration-400 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`block w-9 h-0.5 bg-white transition-all duration-400 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block w-9 h-0.5 bg-white transition-all duration-400 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </button>

            {/* Mobile sidebar */}
            {isMenuOpen ? (
                <div className="fixed inset-0 z-10 lg:hidden backdrop-blur-xl bg-black/70 transition-all duration-700 ease-in-out"
                    onClick={() => setIsMenuOpen(false)}>
                    <nav className="fixed w-full h-full flex justify-center items-center">
                        <ul className="flex flex-col gap-10 sm:gap-16 text-xl sm:text-2xl font-medium text-white text-center">
                            {NAV_ITEMS.map(({ id, paths }) => (
                                <li key={id}>
                                    <a href={`#${id}`} onClick={() => handleLinkClick(`#${id}`)}
                                        className={`flex items-center justify-center gap-3 transition-all duration-300 ${activeLink === `#${id}` ? 'text-cyan-400' : 'hover:text-cyan-400'}`}>
                                        <NavIcon paths={paths} />
                                        {t(`sidebar.${id}`)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            ) : (
                <div className="fixed inset-0 z-10 lg:hidden backdrop-blur-none bg-black/0 transition-all duration-700 ease-in-out opacity-0 pointer-events-none"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Desktop sidebar */}
            <nav className="hidden lg:flex flex-col justify-center bg-linear-to-b from-slate-900 via-slate-950 to-slate-900 w-72 h-screen text-white text-lg select-none overflow-y-auto fixed z-10">
                {/* Decorative corner glows, clipped so they never extend the scroll area */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                    <span className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
                    <span className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-500/15 blur-3xl" />
                </div>
                
                {/* Right edge gradient hairline */}
                <span aria-hidden="true"
                    className="absolute inset-y-0 right-0 w-px bg-linear-to-b from-transparent via-cyan-500/50 to-transparent" />

                <ul className="relative flex flex-col gap-8 py-16 font-medium">
                    {NAV_ITEMS.map(({ id, paths }) => (
                        <li key={id}>
                            <a href={`#${id}`} onClick={() => setActiveLink(`#${id}`)} className={`relative flex items-center gap-3 py-3.5 pl-14 transition-all ease-in-out duration-300
                                ${activeLink === `#${id}` ? 'bg-cyan-500/10 text-cyan-400 pl-18' : 'text-slate-300 hover:bg-white/5 hover:text-cyan-400 hover:pl-18'}`}>
                                {/* Active indicator bar */}
                                <span aria-hidden="true"
                                    className={`absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-400 to-cyan-600 transition-opacity duration-300 ${activeLink === `#${id}` ? 'opacity-100' : 'opacity-0'}`} />
                                <NavIcon paths={paths} />
                                {t(`sidebar.${id}`)}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
