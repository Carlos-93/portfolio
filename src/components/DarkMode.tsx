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
        if (storedTheme === 'dark') return true;
        if (storedTheme === 'light') return false;
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
        localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <button type="button" aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            onClick={() => setIsDark((prev) => !prev)}
            className={`fixed bottom-6 right-6 z-10 cursor-pointer inline-flex h-14 w-14 items-center justify-center rounded-full border transition duration-300 ease-in-out hover:scale-105 ${isDark
                ? 'border-slate-200/40 bg-slate-900/80 text-slate-100'
                : 'border-slate-900/40 bg-white/85 text-slate-900'
                }`}>

            {/* Moon icon */}
            {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>

            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.749-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998z" />
                </svg>
            )}
        </button>
    );
}