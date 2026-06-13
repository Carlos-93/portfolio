import { useTranslation } from 'react-i18next';

export default function About() {
    // Translation hook
    const { t } = useTranslation();

    return (
        <div className="flex w-full flex-col items-center gap-6 sm:gap-8 lg:gap-10 cursor-default">
            {/* Section header — reusable pattern: title + accent underline */}
            <header className="flex flex-col items-center gap-2 sm:gap-3">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-cyan-600 dark:text-cyan-400">
                    {t('sidebar.about')}
                </h2>
                <span className="h-0.5 w-full rounded-full bg-cyan-600 dark:bg-cyan-400" />
            </header>

            {/* Lead: role + experience tagline */}
            <p className="max-w-3xl sm:text-center sm:text-lg lg:text-xl font-semibold text-slate-800 dark:text-gray-200">
                {t('about.lead')}
            </p>

            {/* Body: detailed paragraphs, left-aligned and muted for readability */}
            <div className="flex flex-col gap-3 sm:gap-4 text-left sm:text-lg lg:text-xl leading-relaxed text-slate-800 dark:text-gray-300">
                <p>{t('about.frontend')}</p>
                <p>{t('about.backend')}</p>
                <p>{t('about.philosophy')}</p>
            </div>
        </div>
    );
}