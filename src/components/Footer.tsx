import { socialNetworks } from '../lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="px-4 py-8 sm:px-6 sm:py-10 bg-gray-800 text-gray-300 border-t border-gray-500 z-10" role="contentinfo">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10">
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
                        © {currentYear} | Desarrollado por{' '}
                        <a href="mailto:cagalvan93@gmail.com"
                            className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-800">
                            Carlos Araujo Galván
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}