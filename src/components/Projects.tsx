import { useTranslation } from 'react-i18next';

export default function Projects() {
    const { t } = useTranslation();
    
    return (
        <div className="flex flex-col justify-center items-center w-full sm:flex-row">
            <div className="flex flex-col gap-10">
                <h2 className="text-cyan-400 text-xl text-center cursor-default font-semibold">{t('sidebar.projects')}</h2>
            </div>
        </div>
    );
}