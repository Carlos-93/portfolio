import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
    const [loaded, setLoaded] = useState(false);
    const { t } = useTranslation();

    return (
        <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col gap-5 w-full">
                <h1 className="text-gray-100 text-lg"><p>{t('home.welcome')}</p><p>{t('home.iAm')} <span className="text-cyan-400">Carlos Araujo Galván 👋</span></p></h1>
                <h2 className="text-md text-gray-200 font-medium">{t('home.role')}</h2>
            </div>

            <figure>
                <img src="/assets/images/me/profile.jpg" alt={t('home.profileImageAlt')}
                    onLoad={() => setLoaded(true)}
                    className={`sm:w-2/3 m-auto rounded-xl transition-opacity duration-4000 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
            </figure>
        </div>
    );
}