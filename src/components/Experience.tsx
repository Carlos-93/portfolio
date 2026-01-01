import { useTranslation } from 'react-i18next';

export default function Experience() {
    const { t } = useTranslation();
    
    return (
        <div className="flex flex-col sm:flex-row gap-16">
            <div className="flex flex-col gap-5 w-full">
                <p className="text-cyan-400 text-xl text-center cursor-default">{t('sidebar.experience')}</p>
                <div className="flex flex-col gap-5 text-justify">
                    <p className="text-gray-200 text-md">Desarrollador web Full Stack</p>
                    <p className="text-gray-200 text-md">PKF Attest</p>
                    <p className="text-gray-200 text-md">2024 - Actualidad</p>
                </div>
            </div>
        </div>
    );
}