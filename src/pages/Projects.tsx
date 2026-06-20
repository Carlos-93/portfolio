import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/SectionHeader';

export default function Projects() {
    // Translation hook
    const { t } = useTranslation();
    
    return (
        <div className="flex flex-col justify-center items-center w-full sm:flex-row">
            <div className="flex flex-col gap-10">
                <SectionHeader title={t('sidebar.projects')} />
            </div>
        </div>
    );
}