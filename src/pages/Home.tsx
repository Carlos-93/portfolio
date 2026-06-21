import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { socialNetworks } from '../lib/constants';

// CV download button + social links. Rendered twice: left-aligned under the text on
// desktop, and centered below the image on mobile/tablet. Layout comes from `className`.
function HeroActions({ className }: { className?: string }) {
    const { t } = useTranslation();

    return (
        <div className={className}>
            <a
                href="/assets/cv/CV-Carlos-Araujo-Galvan.pdf"
                download="CV Carlos Araujo Galván.pdf"
                className="inline-flex w-fit items-center gap-2 rounded-md border-2 border-cyan-600 bg-transparent px-4 py-3 font-semibold text-slate-900 transition-colors duration-400 ease-in-out hover:bg-cyan-600 hover:text-white dark:border-cyan-400 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-download" aria-hidden="true">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 11l5 5l5 -5" />
                    <path d="M12 4l0 12" />
                </svg>
                {t('home.downloadCv')}
            </a>

            {/* Social Networks */}
            <div className="flex items-center gap-8">
                {socialNetworks.map((link) => (
                    <a key={link.alt} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar perfil de ${link.alt}`}
                        className="group relative transition-all duration-300">
                        {/* Icons */}
                        <img src={link.src} alt={link.alt}
                            className="w-7 sm:w-8 transition-transform duration-300 group-hover:scale-110" />

                        {/* Glow effect on hover */}
                        <span className="absolute inset-0 bg-cyan-400/30 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10" />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default function Home() {
    // State variables
    const [loaded, setLoaded] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    // Translation hook
    const { t } = useTranslation();
    // Roles
    const roles = useMemo(() => [t('home.softwareRole'), t('home.designerRole')], [t]);
    // Speed variables
    const typeSpeed = 80;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    // Handle typing
    const handleTyping = useCallback(() => {
        const currentRole = roles[roleIndex];

        if (!isDeleting) {
            if (displayText.length < currentRole.length) {
                setDisplayText(currentRole.slice(0, displayText.length + 1));
            } else {
                setTimeout(() => setIsDeleting(true), pauseTime);
                return;
            }
        } else {
            if (displayText.length > 0) {
                setDisplayText(displayText.slice(0, -1));
            } else {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
                return;
            }
        }
    }, [displayText, isDeleting, roleIndex, roles]);

    // Handle typing effect
    useEffect(() => {
        const speed = isDeleting ? deleteSpeed : typeSpeed;
        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [handleTyping, isDeleting]);

    return (
        <div className="flex flex-col items-center gap-8 lg:gap-0 lg:flex-row">
            <div className="flex flex-col justify-center gap-2 lg:gap-10 w-full lg:w-2/3 min-w-0 flex-1">
                <h1 className="text-slate-900 dark:text-gray-200 flex flex-col gap-2 2xl:gap-6 cursor-default">
                    <p className='text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium'>{t('home.welcome')}</p>
                    <p className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>{t('home.iAm')}
                        &nbsp;<span className="text-cyan-600 dark:text-cyan-400">{t('home.name')}</span>
                    </p>
                    <p className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold h-8'>
                        {displayText}
                        <span className="animate-pulse ml-1">|</span>
                    </p>
                </h1>

                {/* Tablet & desktop: actions below the text, left-aligned */}
                <HeroActions className="hidden sm:flex sm:flex-wrap sm:items-center sm:gap-8" />
            </div>

            <figure className="shrink-0 w-3xs sm:w-xs md:w-sm lg:w-2xs xl:w-sm 2xl:w-xl aspect-997/1480 lg:mt-10">
                <img src="/assets/images/me/profile.png" alt={t('home.profileImageAlt')} width={997} height={1480} onLoad={() => setLoaded(true)}
                    className={`w-full h-auto max-w-full object-contain transition-opacity duration-4000 profile-image-fade ${loaded ? 'opacity-100' : 'opacity-0'}`}
                />
            </figure>

            {/* Mobile only: actions below the image, centered */}
            <HeroActions className="flex w-full flex-col items-center gap-8 sm:hidden" />
        </div>
    );
}