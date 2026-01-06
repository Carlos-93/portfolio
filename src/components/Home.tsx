import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
    const [loaded, setLoaded] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const { t } = useTranslation();

    const roles = useMemo(() => [t('home.softwareRole'), t('home.designerRole')], [t]);

    const typeSpeed = 80;
    const deleteSpeed = 50;
    const pauseTime = 2000;

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

    useEffect(() => {
        const speed = isDeleting ? deleteSpeed : typeSpeed;
        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [handleTyping, isDeleting]);

    return (
        <div className="flex flex-col items-center md:flex-row gap-10">
            <div className="flex flex-col justify-center gap-5 w-full">
                <h1 className="text-gray-100 flex flex-col gap-2 text-justify cursor-default">
                    <p className='text-lg'>{t('home.welcome')}</p>
                    <p className='text-2xl font-semibold'>{t('home.iAm')}  <span className="text-cyan-400">{t('home.name')}</span></p>
                    <p className='text-2xl font-semibold h-8'>
                        {displayText}
                        <span className="animate-pulse ml-0.5">|</span>
                    </p>
                </h1>
            </div>

            <figure className='w-1/3'>
                <img src="/assets/images/me/profile.png" alt={t('home.profileImageAlt')}
                    onLoad={() => setLoaded(true)}
                    className={`transition-opacity duration-4000 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
            </figure>
        </div>
    );
}