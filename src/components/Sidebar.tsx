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
            <div aria-hidden="true" className="fixed h-16 lg:h-20 backdrop-blur-xl bg-slate-900/70 dark:bg-black/30 z-20 left-0 right-0 lg:left-72" />

            {/* Header landmark */}
            <header className="fixed top-0 h-16 lg:h-20 z-30 left-0 right-0 lg:left-72 pointer-events-none">
                {/* Language selector for desktop - top right */}
                <div className="hidden lg:block absolute top-5 right-5 pointer-events-auto">
                    <LanguageSelector />
                </div>

                {/* Language selector for mobile - top left */}
                <div className="lg:hidden absolute top-2.5 left-5 sm:left-7 pointer-events-auto">
                    <LanguageSelector />
                </div>

                {/* Hamburger menu button */}
                <button type="button" ref={menuButtonRef} aria-expanded={isMenuOpen} aria-controls="mobile-menu"
                    className="lg:hidden absolute right-5 sm:right-7 top-2 pointer-events-auto flex flex-col justify-center items-center w-12 h-12 space-y-2 rounded-md cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsMenuOpen(!isMenuOpen);
                    }}
                    aria-label={t('sidebar.toggleMenu')}>
                    <span className={`block w-9 h-0.5 bg-white transition-all duration-400 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                    <span className={`block w-9 h-0.5 bg-white transition-all duration-400 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <span className={`block w-9 h-0.5 bg-white transition-all duration-400 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                </button>
            </header>

            {/* Mobile sidebar */}
            {isMenuOpen ? (
                <div className="fixed inset-0 z-20 lg:hidden backdrop-blur-xl bg-black/70 transition-all duration-700 ease-in-out"
                    onClick={() => setIsMenuOpen(false)}>
                    <nav id="mobile-menu" ref={mobileNavRef} aria-label={t('sidebar.toggleMenu')} className="fixed w-full h-full flex justify-center items-center">
                        <ul className="flex flex-col gap-8 sm:gap-14 text-lg sm:text-xl font-medium text-white text-center">
                            {navItems.map(({ id, paths }) => (
                                <li key={id}>
                                    <a href={`#${id}`} onClick={() => handleLinkClick(`#${id}`)}
                                        className={`flex items-center justify-center gap-3 rounded-md px-2 transition-all duration-300 ${activeLink === `#${id}` ? 'text-cyan-400' : 'hover:text-cyan-400'}`}>
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