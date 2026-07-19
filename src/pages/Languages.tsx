import { useTranslation } from 'react-i18next';
import { spokenLanguages } from '../lib/constants';
import SectionHeader from '../components/SectionHeader';

export default function Languages() {
    // Translation hook
    const { t } = useTranslation();

    return (
        <div className="flex w-full flex-col items-center gap-10">
            <SectionHeader title={t('sidebar.languages')} />
            <ul className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {spokenLanguages.map((language) => (
                    <li key={language.id}>
                        <article className="group relative flex h-45 flex-col justify-end overflow-hidden rounded-2xl border border-slate-200 bg-white/50 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 dark:border-white/10 dark:bg-white/5 sm:p-6">
                            {/* Flag filling the card as a faded background */}
                            <img src={language.flag} alt="" loading="lazy"
                                className="absolute inset-0 h-full w-full opacity-20 transition-all duration-500 group-hover:opacity-40 dark:opacity-20 dark:group-hover:opacity-40" />
                            
                            {/* Bottom scrim so the text stays legible over the flag */}
                            <span aria-hidden="true"
                                className="absolute inset-0 bg-linear-to-t from-white via-white/40 to-transparent dark:from-slate-950/90 dark:via-slate-950/40 dark:to-transparent" />
                            {/* Top gradient hairline */}
                            <span aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-500/70 to-transparent" />

                            {/* Name + level chip anchored to the bottom */}
                            <div className="relative flex items-center justify-between gap-3">
                                <span className="text-lg font-bold text-slate-900 dark:text-white">
                                    {t(`languages.items.${language.id}.name`)}
                                </span>

                                <span className="rounded-full border border-cyan-600/30 bg-cyan-600/10 px-3 py-1 text-sm font-medium text-cyan-700 backdrop-blur-sm dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300">
                                    {t(`languages.items.${language.id}.level`)}
                                </span>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    );
}