// Libraries imports
import { useTranslation } from 'react-i18next';
// Constants imports
import { socialNetworks } from '../lib/constants';

export default function Footer() {
    // Current year
    const currentYear = new Date().getFullYear();
    // Translation hook
    const { t } = useTranslation();

    return (
        <footer className="relative overflow-hidden" role="contentinfo">
            {/* Gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent" />

            {/* Background with subtle gradient */}
            <div className="bg-linear-to-b from-slate-900/50 to-slate-950 backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 lg:ml-72 px-4 py-6 sm:px-6 sm:py-8">
                    {/* Social Networks */}
                    <div className="flex gap-8 sm:gap-10 xl:gap-12">
                        {socialNetworks.map((link) => (
                            <a key={link.alt} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar perfil de ${link.alt}`}
                                className="group relative transition-all duration-300">
                                {/* Icons */}
                                <img src={link.src} alt={link.alt}
                                    className="w-6 sm:w-7 md:w-8 transition-transform duration-300 group-hover:scale-110" />
                                    
                                {/* Glow effect on hover */}
                                <span className="absolute inset-0 bg-cyan-400/30 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10" />
                            </a>
                        ))}
                    </div>

                    {/* Copyright Message */}
                    <p className="text-[10.6px] sm:text-sm md:text-base text-center text-white/60 cursor-default">
                        © {currentYear} Carlos Araujo Galván. {t('footer.copyright')}
                    </p>
                </div>
            </div>
        </footer>
    );
}