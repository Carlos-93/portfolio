import { useTranslation } from 'react-i18next';

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
            <div className="bg-linear-to-b from-slate-900/50 to-slate-950 backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center gap-6 lg:ml-72 px-4 py-6 sm:px-6 sm:py-8">
                    {/* Copyright Message */}
                    <p className="text-[11px] sm:text-sm md:text-base text-center text-white/60 cursor-default">
                        © {currentYear} Carlos Araujo Galván. {t('footer.copyright')}
                    </p>
                </div>
            </div>
        </footer>
    );
}