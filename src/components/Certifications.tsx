import { certificates } from "../lib/constants";

export default function Certifications() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
                <p className="text-cyan-400 text-xl text-center">Cursos / Certificaciones</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((certificate, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-5 flex flex-col gap-5">
                        <figure className="flex justify-center">
                            <img src={certificate.image} alt={certificate.title} />
                        </figure>
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-medium text-white">{certificate.title}</p>
                            <p className="text-gray-300">{certificate.company}</p>
                            <p className="text-xs text-gray-400 text-end">{certificate.location} - {certificate.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}