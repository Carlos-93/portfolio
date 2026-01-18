// Libraries imports
import { certificates } from "../lib/constants";
import { useTranslation } from 'react-i18next';

export default function Certifications() {
    // Translation hook
    const { t } = useTranslation();

    return (
        <div className="flex flex-col justify-center items-center w-full sm:flex-row">
            <div className="flex flex-col gap-10">
                <h2 className="text-cyan-400 text-xl text-center cursor-default font-semibold">{t('sidebar.certifications')}</h2>
                <div className="flex justify-center items-center flex-wrap gap-10 w-full">
                    {certificates.map((certificate, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-5 flex flex-col gap-4 w-full sm:w-100">
                            <figure className="flex justify-center">
                                <img src={certificate.image} alt={certificate.title} />
                            </figure>

                            <div className="flex flex-col gap-2 cursor-default">
                                <p className="text-lg font-medium text-white">{certificate.title}</p>
                                <p className="text-gray-300">{certificate.company}</p>
                                <p className="text-xs text-gray-400 text-end mt-2">{certificate.location} - {certificate.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}