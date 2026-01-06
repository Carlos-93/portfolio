import { useTranslation } from 'react-i18next';

export default function Projects() {
    const { t } = useTranslation();
    
    return (
        <div className="flex flex-col sm:flex-row gap-16">
            <div className="flex flex-col gap-5 w-full">
                <h2 className="text-cyan-400 text-xl text-center cursor-default font-semibold">{t('sidebar.projects')}</h2>
            </div>
        </div>
    );
}