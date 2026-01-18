// Libraries imports
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
// Translations imports
import esTranslation from './locales/es/translation.json';
import caTranslation from './locales/ca/translation.json';
import enTranslation from './locales/en/translation.json';
import deTranslation from './locales/de/translation.json';
import itTranslation from './locales/it/translation.json';
import frTranslation from './locales/fr/translation.json';

i18n
    // Detect browser language
    .use(LanguageDetector)
    // Pass the i18n instance to react-i18next
    .use(initReactI18next)
    // Initialize i18next
    .init({
        // Default language
        lng: 'es',
        fallbackLng: 'es',
        // Available languages
        supportedLngs: ['es', 'ca', 'en', 'de', 'it', 'fr'],

        // Translation resources
        resources: {
            es: {
                translation: esTranslation,
            },
            ca: {
                translation: caTranslation,
            },
            en: {
                translation: enTranslation,
            },
            de: {
                translation: deTranslation,
            },
            it: {
                translation: itTranslation,
            },
            fr: {
                translation: frTranslation,
            },
        },

        // Detection options
        detection: {
            order: ['localStorage'],
            caches: ['localStorage'],
            lookupLocalStorage: 'i18nextLng',
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