// Libraries imports
import { useEffect, useMemo, useState } from 'react';
// Constants imports
import { STORAGE_KEY } from '../lib/constants';

export default function DarkMode() {
    // Check if the user prefers dark mode
    const prefersDark = useMemo(() => {
        if (typeof window === 'undefined') return true;
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }, []);

    // State variables for the dark mode
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === 'undefined') return true;
        const storedTheme = localStorage.getItem(STORAGE_KEY);
        if (storedTheme === 'true') return true;
        if (storedTheme === 'false') return false;
        return prefersDark;
    });

    // Effect to add the dark class to the root element
    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        // Save the dark mode to the local storage
        localStorage.setItem(STORAGE_KEY, isDark ? 'true' : 'false');
    }, [isDark]);

    // Function to switch the theme (dark mode or light mode)
    function switchTheme() {
        setIsDark(prev => !prev);
    }

    // Function to handle theme switch with view transitions
    function effectToSwitchTheme() {
        if (!document.startViewTransition) {
            switchTheme();
        } else {
            document.startViewTransition(switchTheme);
        }
    }

    return (
        <button type="button" onClick={effectToSwitchTheme} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 cursor-pointer inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border transition duration-300 ease-in-out hover:scale-105 backdrop-blur-xs ${isDark
                ? 'border-slate-200/40 bg-slate-900/80 text-slate-200'
                : 'border-slate-900/40 bg-white/85 text-slate-900/80'
                }`}>

            {/* Moon icon */}
            {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-sun-high w-6 sm:w-7.5 transition-transform duration-300">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656" />
                    <path d="M6.343 17.657l-1.414 1.414" />
                    <path d="M6.343 6.343l-1.414 -1.414" />
                    <path d="M17.657 6.343l1.414 -1.414" />
                    <path d="M17.657 17.657l1.414 1.414" />
                    <path d="M4 12h-2" /><path d="M12 4v-2" />
                    <path d="M20 12h2" /><path d="M12 20v2" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-moon-stars w-6.5 sm:w-8 transition-transform duration-300">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008" />
                    <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                    <path d="M19 11h2m-1 -1v2" />
                </svg>
            )}
        </button>
    );
}
