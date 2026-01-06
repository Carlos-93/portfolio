import { educations } from "../lib/constants";
import { useTranslation } from 'react-i18next';

export default function Education() {
    const { t } = useTranslation();
    
    return (
        <div className="flex flex-col gap-8">
            <h2 className="text-cyan-400 text-xl text-center cursor-default font-semibold">{t('sidebar.education')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {educations.map((certificate, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-5 flex flex-col gap-5">
                        <figure className="flex justify-center">
                            <img src={certificate.image} alt={certificate.title} />
                        </figure>
                        
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-medium text-white">{certificate.title}</p>
                            <p className="text-gray-300">{certificate.company}</p>
                            <p className="text-xs text-gray-400 text-end mt-2">{certificate.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}