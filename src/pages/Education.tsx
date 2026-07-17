import { useTranslation } from 'react-i18next';
import { educations } from '../lib/constants';
import SectionHeader from '../components/SectionHeader';

export default function Education() {
    // Translation hook
    const { t } = useTranslation();

    return (
        <div className="flex w-full flex-col items-center gap-10">
            <SectionHeader title={t('sidebar.education')} />
            <ul className="flex w-full max-w-7xl flex-col items-center gap-6">
                {educations.map((education) => (
                    <li key={education.id} className="w-full max-w-2xl">
                        <article className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white/50 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 dark:border-white/10 dark:bg-white/5 sm:p-6">
                            {/* Top gradient hairline */}
                            <span aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-500/70 to-transparent" />
                            {/* Corner glow */}
                            <span aria-hidden="true"
                                className="pointer-events-none absolute -top-14 -right-14 h-36 w-36 rounded-full bg-cyan-500/10 blur-2xl transition-colors duration-300 group-hover:bg-cyan-500/20" />

                            {/* Header: icon + location chip */}
                            <div className="flex items-start justify-between gap-3">
                                <img src={education.logo} alt={education.institution} loading="lazy"
                                    className="h-14 w-14 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110" />

                                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                    </svg>
                                    {t(`education.items.${education.id}.location`)}
                                </span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    {t(`education.items.${education.id}.title`)}
                                </h3>
                                {education.url ? (
                                    <a href={education.url} target="_blank" rel="noopener noreferrer"
                                        className="w-fit text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-400">
                                        {education.institution}
                                    </a>
                                ) : (
                                    <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                                        {education.institution}
                                    </p>
                                )}
                            </div>

                            <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                                {t(`education.items.${education.id}.description`)}
                            </p>

                            {/* Footer pinned to the bottom: period + degree link */}
                            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 dark:border-white/10">
                                <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                        <path d="M16 3l0 4" /><path d="M8 3l0 4" /><path d="M4 11l16 0" />
                                    </svg>
                                    {t(`education.items.${education.id}.period`)}
                                </span>

                                {education.file && (
                                    <a href={education.file} target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 rounded-md border-2 border-cyan-600 px-3 py-1.5 text-sm font-semibold text-slate-900 transition-colors duration-300 hover:bg-cyan-600 hover:text-white dark:border-cyan-400 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900">
                                        {t('education.viewDegree')}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                            <path d="M11 13l9 -9" />
                                            <path d="M15 4h5v5" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    );
}