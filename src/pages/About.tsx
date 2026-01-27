// Libraries imports
import { useTranslation } from 'react-i18next';

export default function About() {
    // Translation hook
    const { t } = useTranslation();

    return (
        <div className="flex flex-col justify-center items-center w-full sm:flex-row gap-16">
            <div className="flex flex-col gap-6 cursor-default">
                <h2 className="text-cyan-600 dark:text-cyan-400 text-xl text-center font-semibold">{t('sidebar.about')}</h2>
                <p className="flex flex-col gap-2.5 text-slate-900 dark:text-gray-200 text-md text-justify font-medium">
                    <span>{t('about.descriptionOne')}</span>
                    <span>{t('about.descriptionTwo')}</span>
                    <span>{t('about.descriptionThree')}</span>
                    <span>{t('about.descriptionFour')}</span>
                    <span>{t('about.descriptionFive')}</span>
                </p>
            </div>
        </div>
    );
}