import { socialNetworks } from '../lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-gray-800 text-gray-300" role="contentinfo">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8 text-center">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg cursor-default order-2 lg:order-1">
                    © {currentYear} | Desarrollado por{' '}
                    <span className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors duration-300">
                        Carlos Araujo Galván
                    </span>
                </p>
                <div className="flex gap-6 sm:gap-8 md:gap-10 order-1 lg:order-2">
                    {socialNetworks.map((link) => (
                        <a
                            key={link.alt}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visitar ${link.alt}`}
                            className="transition-all duration-300 hover:scale-110 hover:opacity-80"
                        >
                            <img
                                src={link.src}
                                alt={link.alt}
                                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}