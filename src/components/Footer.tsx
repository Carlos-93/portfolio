import { socialNetworks } from '../lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-gray-800 text-gray-300" role="contentinfo">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8 text-center">
                <div className="flex gap-6 sm:gap-6 md:gap-8">
                    {socialNetworks.map((link) => (
                        <a
                            key={link.alt}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visitar ${link.alt}`}
                            className="transition-transform hover:scale-110"
                        >
                            <img
                                src={link.src}
                                alt={link.alt}
                                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                            />
                        </a>
                    ))}
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg cursor-default">
                    © {currentYear} | Desarrollado por <span className="text-cyan-400 font-medium">Carlos Araujo Galván</span>
                </p>
            </div>
        </footer>
    );
}