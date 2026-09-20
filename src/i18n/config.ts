import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import esTranslation from './locales/es/translation.json';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// Load all translation files except for the default language (Spanish) using Vite's glob import
const localeLoaders = import.meta.glob<{ default: typeof esTranslation }>([
    './locales/*/translation.json',
    '!./locales/es/translation.json',
]);

i18n
    // Detect browser language
    .use(LanguageDetector)
    // Load the rest of the languages on demand, one dynamic import per language
    .use(resourcesToBackend((language: string) =>
        // `es` has no loader (excluded from the glob); it is already bundled, so serve it directly
        localeLoaders[`./locales/${language}/translation.json`]?.() ?? Promise.resolve({ default: esTranslation })
    ))
    // Pass the i18n instance to react-i18next
    .use(initReactI18next)
    // Initialize i18next
    .init({
        // Default language (used when nothing is detected in localStorage)
        fallbackLng: 'es',
        // Available languages
        supportedLngs: ['es', 'ca', 'en', 'de', 'it', 'fr'],
        // 'es' is already available synchronously; other languages come from the backend above
        partialBundledLanguages: true,

        // Translation resources
        resources: {
            es: {
                translation: esTranslation,
            },
        },

        // Detection options
        detection: {
            order: ['localStorage'],
            caches: ['localStorage'],
            lookupLocalStorage: 'language',
        },

        // Interpolation options
        interpolation: {
            escapeValue: false,
        },

        // React options
        react: {
            useSuspense: false,
        },
    });

export default i18n;