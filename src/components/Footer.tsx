import { socialNetworks } from '../lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="px-4 py-6 sm:px-6 sm:py-8 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-gray-300 border-t border-gray-600" role="contentinfo">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center gap-6 lg:gap-8">
                    {/* Redes sociales */}
                    <div className="flex gap-8 sm:gap-10 xl:gap-12">
                        {socialNetworks.map((link) => (
                            <a key={link.alt} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar perfil de ${link.alt}`}
                                className="transition-transform duration-300 hover:scale-110 focus:scale-110 focus:outline-none">
                                <img src={link.src} alt={link.alt} className="w-6 sm:w-7 md:w-8" />
                            </a>
                        ))}
                    </div>
                    {/* Copyright */}
                    <p className="text-xs sm:text-sm md:text-base xl:text-lg text-center">
                        © {currentYear} Carlos Araujo Galván. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}