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
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" viewBox="0 0 330 330" xmlSpace="preserve" fill="#000000"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-moon-stars w-6 sm:w-8 transition-transform duration-300">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"><g> 
                    <path fill="#FFB65B" d="M321.708,151.584l-56.326-28.164l19.915-59.743c1.797-5.39,0.394-11.333-3.624-15.35 s-9.964-5.42-15.35-3.624L206.579,64.62L178.416,8.292C175.876,3.21,170.682,0,165,0s-10.876,3.21-13.416,8.292L123.421,64.62 L63.677,44.704c-5.392-1.797-11.333-0.394-15.35,3.624c-4.018,4.018-5.421,9.96-3.624,15.35l19.914,59.743L8.292,151.584 C3.209,154.125,0,159.319,0,165c0,5.682,3.209,10.876,8.292,13.417l56.325,28.163l-19.914,59.743 c-1.797,5.39-0.394,11.332,3.624,15.35c4.017,4.018,9.96,5.42,15.35,3.624l59.744-19.913l28.163,56.325 C154.124,326.79,159.318,330,165,330s10.876-3.21,13.416-8.291l28.163-56.325l59.744,19.913c5.388,1.797,11.333,0.394,15.35-3.624 c4.018-4.018,5.421-9.96,3.624-15.35l-19.915-59.743l56.326-28.163C326.789,175.876,330,170.682,330,165 C330,159.319,326.789,154.125,321.708,151.584z"></path>
                    <path fill="#FFA828" d="M321.708,151.584l-56.326-28.164l19.915-59.743c1.797-5.39,0.394-11.333-3.624-15.35 s-9.964-5.42-15.35-3.624L206.579,64.62L178.416,8.292C175.876,3.21,170.682,0,165,0v75v180v75c5.682,0,10.876-3.21,13.416-8.291 l28.163-56.325l59.744,19.913c5.388,1.797,11.333,0.394,15.35-3.624c4.018-4.018,5.421-9.96,3.624-15.35l-19.915-59.743 l56.326-28.163C326.789,175.876,330,170.682,330,165C330,159.319,326.789,154.125,321.708,151.584z"></path>
                    <path fill="#FFDE51" d="M165,75c-49.627,0-90,40.374-90,90c0,49.627,40.373,90,90,90c49.625,0,90-40.373,90-90 C255,115.374,214.625,75,165,75z"></path>
                    <path fill="#FFD400" d="M165,75v180c49.625,0,90-40.373,90-90C255,115.374,214.625,75,165,75z"></path></g></g>
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
