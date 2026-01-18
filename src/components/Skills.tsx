// Libraries imports
import { useTranslation } from 'react-i18next';

export default function Skills() {
    // Translation hook
    const { t } = useTranslation();
    
    return (
        <div className="flex flex-col justify-center items-center w-full sm:flex-row">
            <div className="flex flex-col gap-10">
                <h2 className="text-cyan-400 text-xl text-center cursor-default font-semibold">{t('sidebar.skills')}</h2>
                <div className="flex flex-col gap-5 text-justify">
                    <p className="text-gray-200 text-md">Desarrollo Frontend con React y Next.js</p>
                    <p className="text-gray-200 text-md">Desarrollo Backend con Node.js y Express</p>
                    <p className="text-gray-200 text-md">Bases de datos con MongoDB y MySQL</p>
                    <p className="text-gray-200 text-md">Desarrollo de APIs RESTful</p>
                    <p className="text-gray-200 text-md">Desarrollo de aplicaciones web responsivas</p>
                    <p className="text-gray-200 text-md">Manejo de control de versiones con Git</p>
                </div>
            </div>
        </div>
    );
}