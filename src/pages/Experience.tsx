import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/SectionHeader';

export default function Experience() {
    // Translation hook
    const { t } = useTranslation();
    
    return (
        <div className="flex flex-col justify-center items-center w-full sm:flex-row">
            <div className="flex flex-col gap-10">
                <SectionHeader title={t('sidebar.experience')} />
                <div className="flex flex-col gap-5 text-justify text-slate-900 dark:text-gray-200 text-md">
                    <p>Desarrollador web Full Stack</p>
                    <p>PKF Attest</p>
                    <p>2024 - Actualidad</p>
                </div>
            </div>
        </div>
    );
}