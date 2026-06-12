import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../lib/constants';

export default function LanguageSelector() {
    // Translation hook
    const { i18n } = useTranslation();
    // State variables
    const [isOpen, setIsOpen] = useState(false);
    // Refs
    const dropdownRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    // Current language (Its codes like es-ES, en-GB)
    const currentLanguage = languages.find(lang =>
        lang.code === i18n.language || i18n.language?.startsWith(`${lang.code}-`)
    ) || languages[0];

    // Change language
    const changeLanguage = (langCode: string) => {
        i18n.changeLanguage(langCode);
        setIsOpen(false);
        triggerRef.current?.focus();
    };

    // Close the dropdown menu when clicking outside or pressing Escape (useEffect)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target;
            if (!(target instanceof Node)) return;
            if (dropdownRef.current?.contains(target)) return;
            if (target instanceof Element && target.closest('[data-theme-toggle]')) return;
            setIsOpen(false);
        };
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Button of the selector */}
            <button type="button" ref={triggerRef} onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 cursor-pointer
                bg-white/85 border-slate-300/60 text-slate-800 hover:bg-slate-200 hover:border-slate-400/60 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-slate-200
                dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:focus:ring-cyan-400 dark:focus:ring-offset-gray-900"
                aria-label="Select language" aria-haspopup="listbox" aria-expanded={isOpen}
            >
                <img src={currentLanguage.flag} alt={currentLanguage.name} className="w-6 h-6 object-cover rounded-full" />
                <span className="text-sm font-medium lg:hidden">
                    {currentLanguage.code.toUpperCase()}
                </span>
            
                <span className="text-sm font-medium hidden lg:inline">
                    {currentLanguage.name}
                </span>

                <svg className={`w-4 h-4 text-slate-500 dark:text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown menu of the selector */}
            <div className={`absolute left-0 lg:left-auto lg:right-0 mt-2 w-48 rounded-lg shadow-xl overflow-hidden z-50 transition-opacity duration-200
                bg-white border border-slate-200 dark:bg-gray-800 dark:border-gray-700
                ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
                role="listbox" aria-hidden={!isOpen} aria-label="Language options" inert={!isOpen} >

                {/* List of languages */}
                <div className="py-1">
                    {languages.map((language) => (
                        <button key={language.code} type="button" role="option" aria-selected={currentLanguage.code === language.code} onClick={() => changeLanguage(language.code)}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-150 cursor-pointer
                            ${currentLanguage.code === language.code
                                ? 'bg-slate-200 text-cyan-600 dark:bg-gray-700 dark:text-cyan-400'
                                : 'text-slate-800 hover:bg-slate-200 dark:text-gray-200 dark:hover:bg-gray-700'}`}
                        >
                            <img src={language.flag} alt={language.name} className="w-6 h-6 object-cover rounded-full shrink-0" />
                            <span className="text-sm font-medium">{language.name}</span>

                            {currentLanguage.code === language.code && (
                                <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}