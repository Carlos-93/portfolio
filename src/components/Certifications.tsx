import { certificates } from "../lib/constants";

export default function Certifications() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
                <p className="text-cyan-400 text-xl text-center">Certificaciones</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((certificate, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6 flex flex-col gap-4">
                        <img src={certificate.image} alt={certificate.title} className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-medium text-white">{certificate.title}</h3>
                            <p className="text-gray-400">{certificate.company}</p>
                            <p className="text-sm text-gray-500">{certificate.location} • {certificate.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}