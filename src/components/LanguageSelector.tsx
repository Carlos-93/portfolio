import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../lib/constants';

export default function LanguageSelector() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    const changeLanguage = (langCode: string) => {
        i18n.changeLanguage(langCode);
        setIsOpen(false);
    };

    // Preload all flag images on component mount
    useEffect(() => {
        languages.forEach((language) => {
            const img = new Image();
            img.src = language.flag;
        });
    }, []);

    // Close the dropdown menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Button of the selector */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
                aria-label="Select language"
                aria-expanded={isOpen}
            >
                <img src={currentLanguage.flag} alt={currentLanguage.name} className="w-6 h-6 object-cover rounded-full" />
                <span className="text-gray-200 text-sm font-medium inline">
                    {currentLanguage.code.toUpperCase()}
                </span>

                <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown menu of the selector */}
            {isOpen && (
                <div className="absolute left-0 lg:left-auto lg:right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="py-1">
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => changeLanguage(language.code)}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left 
                                           transition-colors duration-150 cursor-pointer ${currentLanguage.code === language.code
                                        ? 'bg-cyan-500/20 text-cyan-400'
                                        : 'text-gray-200 hover:bg-gray-700'
                                    }`}>
                                <img src={language.flag} alt={language.name} className="w-6 h-6 object-cover rounded-full shrink-0" />
                                <span className="text-sm font-medium">{language.name}</span>
                                
                                {currentLanguage.code === language.code && (
                                    <svg className="w-4 h-4 text-cyan-400 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}