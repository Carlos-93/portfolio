// Libraries imports
import { useTranslation } from 'react-i18next';

export default function Skills() {
    // Translation hook
    const { t } = useTranslation();
    
    return (
        <div className="flex flex-col justify-center items-center w-full sm:flex-row">
            <div className="flex flex-col gap-10">
                <h2 className="text-cyan-600 dark:text-cyan-400 text-xl text-center cursor-default font-semibold">{t('sidebar.skills')}</h2>
                <div className="flex flex-col gap-5 text-justify text-slate-900 dark:text-gray-200 text-md">
                    <p>Desarrollo Frontend con React y Next.js</p>
                    <p>Desarrollo Backend con Node.js y Express</p>
                    <p>Bases de datos con MongoDB y MySQL</p>
                    <p>Desarrollo de APIs RESTful</p>
                    <p>Desarrollo de aplicaciones web responsivas</p>
                    <p>Manejo de control de versiones con Git</p>
                </div>
            </div>
        </div>
    );
}