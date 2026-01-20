// Libraries imports
import { useTranslation } from 'react-i18next';

export default function Experience() {
    // Translation hook
    const { t } = useTranslation();
    
    return (
        <div className="flex flex-col justify-center items-center w-full sm:flex-row">
            <div className="flex flex-col gap-10">
                <h2 className="text-cyan-600 dark:text-cyan-400 text-xl text-center cursor-default font-semibold">{t('sidebar.experience')}</h2>
                <div className="flex flex-col gap-5 text-justify text-slate-900 dark:text-gray-200 text-md">
                    <p>Desarrollador web Full Stack</p>
                    <p>PKF Attest</p>
                    <p>2024 - Actualidad</p>
                </div>
            </div>
        </div>
    );
}