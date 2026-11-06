import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { STORAGE_KEY } from '../lib/constants';
import { Toaster } from 'sonner';

const sun = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-sun-high w-6 sm:w-7.5 text-amber-400">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656" />
        <path d="M6.343 17.657l-1.414 1.414" />
        <path d="M6.343 6.343l-1.414 -1.414" />
        <path d="M17.657 6.343l1.414 -1.414" />
        <path d="M17.657 17.657l1.414 1.414" />
        <path d="M4 12h-2" /><path d="M12 4v-2" />
        <path d="M20 12h2" /><path d="M12 20v2" />
    </svg>
);

const moon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-moon-stars w-6.5 sm:w-8 text-indigo-500">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008" />
        <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
        <path d="M19 11h2m-1 -1v2" />
    </svg>
);

export default function DarkMode() {
    // Translation hook
    const { t } = useTranslation();

    const [turns, setTurns] = useState(() => document.documentElement.classList.contains('dark') ? 0 : 1);
    const isDark = turns % 2 === 0;

    // Function to switch the theme (dark mode or light mode)
    function switchTheme() {
        const next = !isDark;
        const apply = () => {
            const root = document.documentElement;
            root.classList.toggle('dark', next);
            root.style.removeProperty('background-color');
            setTurns(turns + 1);
        };
        if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) apply();
        else document.startViewTransition(apply);
        try {
            localStorage.setItem(STORAGE_KEY, next ? 'true' : 'false');
        } catch {
            // Storage unavailable — the theme still applies for this visit
        }
    }

    return (
        <>
            {/* Global toast container — lives here to reuse the isDark state for theming */}
            <Toaster theme={isDark ? 'dark' : 'light'} richColors position="top-center" closeButton offset={96} mobileOffset={80} />

            <button type="button" data-theme-toggle onClick={switchTheme} aria-label={isDark ? t('common.switchToLight') : t('common.switchToDark')}
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 size-12 sm:size-14 cursor-pointer overflow-hidden rounded-full border border-slate-900/40 bg-white/85 backdrop-blur-xs transition duration-300 ease-in-out hover:scale-105 active:scale-95 [view-transition-name:theme-toggle] dark:border-slate-200/40 dark:bg-slate-900/80">

                {/* Sky dial pivoting just below the rim: each quarter turn sets one icon past the edge while the next rises */}
                <span aria-hidden className="absolute inset-0 origin-[50%_105%] transition-[rotate] duration-700 ease-in-out motion-reduce:transition-none" style={{ rotate: `${turns * 90}deg` }}>
                    {/* Four slots a quarter turn apart around the same pivot, each pre-rotated so it arrives upright */}
                    {[sun, moon, sun, moon].map((icon, i) => (
                        <span key={i} className="absolute inset-0 grid origin-[50%_105%] place-items-center" style={{ rotate: `${i * -90}deg` }}>{icon}</span>
                    ))}
                </span>
            </button>
        </>
    );
}