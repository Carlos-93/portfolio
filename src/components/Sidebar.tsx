import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { navItems } from '../lib/constants';

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
    // Refs used to manage keyboard focus while the mobile menu is open
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const mobileNavRef = useRef<HTMLElement>(null);

    // Highlight the section currently crossing the upper part of the viewport
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    setActiveLink(`#${entry.target.id}`);
                }
            }
        }, { rootMargin: '-20% 0px -55% 0px' });

        for (const { id } of navItems) {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        }
        return () => observer.disconnect();
    }, [])

    // Disable scroll when the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        // Restore scroll when the component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen])

    // Mobile menu keyboard support: focus the first link, keep Tab inside the menu and close it with Escape
    useEffect(() => {
        if (!isMenuOpen) return;
        mobileNavRef.current?.querySelector('a')?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
                menuButtonRef.current?.focus();
                return;
            }
            if (event.key !== 'Tab') return;

            // Focus cycle: the toggle button (acts as close) + every menu link
            const focusables = [menuButtonRef.current, ...(mobileNavRef.current?.querySelectorAll('a') ?? [])]
                .filter((element): element is HTMLButtonElement | HTMLAnchorElement => element !== null);
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            const current = document.activeElement;

            if (event.shiftKey && (current === first || !focusables.includes(current as HTMLAnchorElement))) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && (current === last || !focusables.includes(current as HTMLAnchorElement))) {
                event.preventDefault();
                first.focus();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
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
            <div aria-hidden="true" className="fixed h-17 lg:h-20 backdrop-blur-xl bg-slate-900/70 dark:bg-black/30 z-10 left-0 right-0 lg:left-72" />

            {/* Header landmark */}
            <header className="fixed top-0 h-16 lg:h-20 z-10 left-0 right-0 lg:left-72 pointer-events-none">
                {/* Language selector for desktop - top right */}
                <div className="hidden lg:block absolute top-5 right-5 pointer-events-auto">
                    <LanguageSelector />
                </div>

                {/* Language selector for mobile - top left */}
                <div inert={isMenuOpen} className="lg:hidden absolute top-3 left-5 sm:left-7 pointer-events-auto">
                    <LanguageSelector />
                </div>

            </header>

            {/* Hamburger menu button */}
            <button type="button" ref={menuButtonRef} aria-expanded={isMenuOpen} aria-controls="mobile-menu"
                className="lg:hidden fixed z-30 right-3 sm:right-4 top-2 flex flex-col justify-center items-center w-12 h-12 space-y-2 rounded-md cursor-pointer"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsMenuOpen(!isMenuOpen);
                }}
                aria-label={t('sidebar.toggleMenu')}>
                <span className={`block w-8 sm:w-8.5 h-0.5 bg-white transition-all duration-400 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`block w-8 sm:w-8.5 h-0.5 bg-white transition-all duration-400 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block w-8 sm:w-8.5 h-0.5 bg-white transition-all duration-400 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </button>

            {/* Mobile backdrop: dims and blurs the page behind the drawer */}
            <div aria-hidden="true" onClick={() => setIsMenuOpen(false)}
                className={`fixed inset-0 z-20 lg:hidden transition-opacity duration-500 ease-in-out motion-reduce:transition-none
                    ${isMenuOpen ? 'bg-black/60 opacity-100 backdrop-blur-sm' : 'pointer-events-none opacity-0'}`} />

            {/* Mobile drawer: slides in from the right edge and stops at the middle of the screen */}
            <nav id="mobile-menu" ref={mobileNavRef} aria-label={t('sidebar.toggleMenu')} inert={!isMenuOpen}
                className={`fixed inset-y-0 right-0 z-20 flex w-4/5 flex-col justify-center border-l border-white/10 bg-slate-950/90 shadow-2xl shadow-black/50 backdrop-blur-xl transition-transform duration-500 ease-in-out motion-reduce:transition-none lg:hidden
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Left edge gradient hairline, mirroring the desktop sidebar */}
                <span aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-cyan-500/50 to-transparent" />

                <ul className="flex flex-col text-base font-medium gap-4 sm:gap-6 sm:text-lg">
                    {navItems.map(({ id, paths }) => (
                        <li key={id}>
                            <a href={`#${id}`} onClick={() => handleLinkClick(`#${id}`)}
                                className={`relative flex items-center gap-2.5 py-3 pl-5 leading-tight transition-all duration-300 ease-in-out sm:gap-3
                                    ${activeLink === `#${id}` ? 'bg-cyan-500/10 pl-7 text-cyan-400' : 'text-slate-300 hover:bg-white/5 hover:pl-7 hover:text-cyan-400'}`}>
                                {/* Active indicator bar */}
                                <span aria-hidden="true"
                                    className={`absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-400 to-cyan-600 transition-opacity duration-300 ${activeLink === `#${id}` ? 'opacity-100' : 'opacity-0'}`} />
                                <span className="shrink-0"><NavIcon paths={paths} /></span>
                                {t(`sidebar.${id}`)}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Desktop sidebar */}
            <nav className="hidden lg:flex flex-col bg-linear-to-b from-slate-900 via-slate-950 to-slate-900 w-72 h-screen text-white text-lg select-none overflow-y-auto fixed z-10">
                {/* Decorative corner glows, clipped so they never extend the scroll area */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                    <span className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
                    <span className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />
                </div>

                {/* Right edge gradient hairline */}
                <span aria-hidden="true"
                    className="absolute inset-y-0 right-0 w-px bg-linear-to-b from-transparent via-cyan-500/50 to-transparent" />

                {/* Spacing grows with the viewport height; `my-auto` centers it but still lets it scroll if it overflows */}
                <ul className="relative my-auto flex flex-col gap-1 py-6 font-medium h-md:gap-2 h-md:py-8 h-lg:gap-5 h-lg:py-12 h-xl:gap-8 h-xl:py-16">
                    {navItems.map(({ id, paths }) => (
                        <li key={id}>
                            <a href={`#${id}`} onClick={() => setActiveLink(`#${id}`)} className={`relative flex items-center gap-3 py-2.5 h-md:py-3.5 pl-14 focus-visible:-outline-offset-2 transition-all ease-in-out duration-300
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