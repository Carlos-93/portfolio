import { socialNetworks } from '../lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="p-6 bg-gray-800 text-gray-300" role="contentinfo">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                <div className="flex gap-6">
                    {socialNetworks.map((link) => (
                        <a 
                            key={link.alt}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visitar ${link.alt}`}
                            className="transition-transform hover:scale-110"
                        >
                            <img src={link.src} alt={link.alt} className="w-6 h-6" />
                        </a>
                    ))}
                </div>
                <p className="text-xs sm:text-sm md:text-base cursor-default">
                    © {currentYear} | Desarrollado por <span className="text-cyan-400">Carlos Araujo Galván</span>
                </p>
            </div>
        </footer>
    );
}