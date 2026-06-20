import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
    // Translation hook
    const { t } = useTranslation();
    
    return (
        <div className="flex flex-col justify-center items-center w-full sm:flex-row">
            <div className="flex flex-col gap-10">
                <SectionHeader title={t('sidebar.contact')} />
                <p className="flex flex-col gap-1 text-slate-900 dark:text-gray-200 text-center text-md">
                    Si necesitas un servicio de desarrollo web, no dudes en contactarme:
                    <a href="mailto:ca.galvan@outlook.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">ca.galvan@outlook.com</a>
                </p>
            </div>
        </div>
    );
}