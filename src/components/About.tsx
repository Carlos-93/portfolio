import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col justify-center items-center w-full sm:flex-row gap-16">
            <div className="flex flex-col gap-10">
                <h2 className="text-cyan-400 text-xl text-center cursor-default font-semibold">{t('sidebar.about')}</h2>
                <p className="text-gray-200 text-md text-justify">
                    Soy un desarrollador web Full Stack con experiencia en tecnologías como React, Node.js, Express y MongoDB. Me gusta aprender nuevas tecnologías y aplicarlas en proyectos personales.
                </p>
            </div>
        </div>
    );
}