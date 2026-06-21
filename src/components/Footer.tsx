import { useTranslation } from 'react-i18next';
import { socialNetworks } from '../lib/constants';

// Section anchors shown in the footer nav — labels reuse the sidebar translations
const NAV_LINKS = ['home', 'about', 'skills', 'experience', 'education', 'certifications', 'projects', 'contact'] as const;

export default function Footer() {
    // Current year
    const currentYear = new Date().getFullYear();
    // Translation hook
    const { t } = useTranslation();

    return (
        <footer className="relative overflow-hidden">
            {/* Gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent" />

            {/* Background with subtle gradient */}
            <div className="relative bg-linear-to-b from-slate-900/50 to-slate-950 backdrop-blur-sm">
                {/* Decorative glow */}
                <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2xl max-w-full -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

                {/* Offset for the fixed sidebar on large screens */}
                <div className="relative lg:ml-72">
                    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:px-8 sm:py-14">
                        {/* Top: brand + navigation + CTA */}
                        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                            {/* Brand */}
                            <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
                                <a href="#home" className="text-lg font-semibold text-white transition-colors duration-300 hover:text-cyan-400">
                                    {t('home.name')}
                                </a>
                                <p className="max-w-xs text-sm leading-relaxed text-white/55">
                                    {t('footer.tagline')}
                                </p>

                                {/* Social Networks */}
                                <div className="flex items-center gap-4">
                                    {socialNetworks.map((link) => (
                                        <a key={link.alt} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.alt}
                                            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-cyan-400/10">
                                            <img src={link.src} alt={link.alt} className="w-5 transition-transform duration-300 group-hover:scale-110" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation */}
                            <nav aria-label={t('footer.navigation')} className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
                                <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                                    {t('footer.navigation')}
                                </h3>
                                <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5">
                                    {NAV_LINKS.map((id) => (
                                        <li key={id}>
                                            <a href={`#${id}`}
                                                className="relative inline-block text-sm text-white/60 transition-colors duration-300 hover:text-cyan-400 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                                                {t(`sidebar.${id}`)}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Call to action */}
                            <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
                                <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                                    {t('footer.letsTalkTitle')}
                                </h3>
                                <p className="max-w-xs text-sm leading-relaxed text-white/55">
                                    {t('footer.letsTalkText')}
                                </p>
                                <a href="mailto:ca.galvan@outlook.com"
                                    className="inline-flex w-fit items-center gap-2 rounded-md border-2 border-cyan-400 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-cyan-400 hover:text-slate-900">
                                    {t('footer.contactCta')}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l14 0" />
                                        <path d="M13 18l6 -6" />
                                        <path d="M13 6l6 6" />
                                    </svg>
                                </a>

                                {/* Direct email */}
                                <a href="mailto:ca.galvan@outlook.com"
                                    className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-cyan-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                        <path d="M3 7l9 6l9 -6" />
                                    </svg>
                                    ca.galvan@outlook.com
                                </a>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-white/10" />

                        {/* Bottom bar */}
                        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                            <p className="text-center text-xs sm:text-sm text-white/50 sm:text-left cursor-default">
                                © {currentYear} Carlos Araujo Galván. {t('footer.copyright')}
                            </p>
                            <a href="#home"
                                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/60 transition-colors duration-300 hover:text-cyan-400">
                                {t('footer.backToTop')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 5l0 14" />
                                    <path d="M18 11l-6 -6" />
                                    <path d="M6 11l6 -6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}