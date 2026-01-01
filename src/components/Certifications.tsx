import { certificates } from "../lib/constants";
import { useState } from "react";

export default function Certifications() {
    const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

    // Load the image
    const handleImageLoad = (imageUrl: string) => {
        setLoadedImages(prev => ({
            ...prev,
            [imageUrl]: true
        }));
    };

    return (
        <div className="flex flex-col gap-8">
            <h2 className="text-cyan-400 text-xl text-center cursor-default">Cursos / Certificaciones</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {certificates.map((certificate, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-5 flex flex-col gap-5 cursor-default">
                        <figure className="flex justify-center relative w-full aspect-4/3">
                            <div className={`absolute inset-0 bg-gray-700 transition-opacity duration-300 
                                ${loadedImages[certificate.image] ? 'opacity-0' : 'opacity-100'}`}>
                            </div>

                            <img src={certificate.image} alt={certificate.title}
                                className={`object-contain w-full h-full transition-opacity duration-300 ${loadedImages[certificate.image] ? 'opacity-100' : 'opacity-0'}`}
                                onLoad={() => handleImageLoad(certificate.image)}
                            />
                        </figure>

                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-medium text-white">{certificate.title}</p>
                            <p className="text-gray-300">{certificate.company}</p>
                            <p className="text-xs text-gray-400 text-end mt-2">{certificate.location} - {certificate.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}