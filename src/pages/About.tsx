import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/SectionHeader';

export default function About() {
    // Translation hook
    const { t } = useTranslation();

    return (
        <div className="flex w-full flex-col items-center gap-6 sm:gap-8 lg:gap-10 cursor-default">
            <SectionHeader title={t('sidebar.about')} />

            {/* Lead: role + experience tagline */}
            <p className="max-w-2xl sm:text-center sm:text-lg lg:text-xl font-semibold text-slate-800 dark:text-gray-200">
                {t('about.lead')}
            </p>

            {/* Body: detailed paragraphs, left-aligned and muted for readability */}
            <div className="flex flex-col max-w-7xl gap-3 sm:gap-4 text-left sm:text-lg lg:text-xl leading-relaxed text-slate-800 dark:text-gray-300">
                <p>{t('about.frontend')}</p>
                <p>{t('about.backend')}</p>
                <p>{t('about.philosophy')}</p>
            </div>
        </div>
    );
}