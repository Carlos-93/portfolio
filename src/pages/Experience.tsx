import { useTranslation } from 'react-i18next';
import { experiences } from '../lib/constants';
import SectionHeader from '../components/SectionHeader';

// Whole-month span between two "YYYY-MM" dates (inclusive, LinkedIn-style). End defaults to today.
function monthsBetween(start: string, end?: string) {
    const [sy, sm] = start.split('-').map(Number);
    const now = new Date();
    const [ey, em] = end ? end.split('-').map(Number) : [now.getFullYear(), now.getMonth() + 1];
    return Math.max(1, (ey - sy) * 12 + (em - sm) + 1);
}

export default function Experience() {
    // Translation hook
    const { t } = useTranslation();

    return (
        <div className="flex w-full flex-col items-center gap-10">
            <SectionHeader title={t('sidebar.experience')} />
            <ol className="relative w-full max-w-7xl">
                {/* Trunk with a continuous stream of light, faded at both ends */}
                <span aria-hidden="true"
                    className="pointer-events-none absolute top-2 bottom-2 left-7 w-0.5 -translate-x-1/2 overflow-hidden rounded-full bg-cyan-500/25 mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] md:left-1/2">
                    <span className="trunk-beam absolute inset-0" />
                </span>

                {experiences.map((exp, index) => {
                    const bullets = t(`experience.items.${exp.id}.bullets`, { returnObjects: true }) as string[];
                    const left = index % 2 === 0;

                    // Exact duration (years + months), computed live and localized
                    const totalMonths = monthsBetween(exp.start, exp.end);
                    const years = Math.floor(totalMonths / 12);
                    const months = totalMonths % 12;
                    const duration = [
                        years > 0 && t(`experience.duration.${years === 1 ? 'yearOne' : 'yearOther'}`, { count: years }),
                        months > 0 && t(`experience.duration.${months === 1 ? 'monthOne' : 'monthOther'}`, { count: months }),
                    ].filter(Boolean).join(' ');

                    return (
                        <li key={exp.id} className="relative mb-10 last:mb-0">
                            {/* Branch node: company logo filling the circle */}
                            <div className="absolute top-1 left-7 z-10 -translate-x-1/2 md:left-1/2">
                                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-md shadow-cyan-500/20 ring-2 ring-cyan-500/60 transition-transform duration-300 hover:scale-105 md:h-18 md:w-18 md:p-2">
                                    <img src={exp.logo} alt={exp.company} loading="lazy" className="h-full w-full object-contain"
                                        style={exp.logoScale ? { transform: `scale(${exp.logoScale})` } : undefined} />
                                </div>
                                
                                {/* Horizontal branch to the card (desktop only) */}
                                <span aria-hidden="true"
                                    className={`absolute top-1/2 hidden h-px w-8 -translate-y-1/2 bg-cyan-500/50 md:block ${left ? 'right-full' : 'left-full'}`} />
                            </div>

                            {/* Card */}
                            <div className={`ml-20 md:w-[calc(50%-3rem)] ${left ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}>
                                <article className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 dark:border-white/10 dark:bg-white/5 sm:p-6">
                                    {/* Top gradient hairline */}
                                    <span aria-hidden="true"
                                        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-500/70 to-transparent" />
                                    
                                    {/* Corner glow */}
                                    <span aria-hidden="true"
                                        className="pointer-events-none absolute -top-14 -right-14 h-36 w-36 rounded-full bg-cyan-500/10 blur-2xl transition-colors duration-300 group-hover:bg-cyan-500/20" />

                                    {/* Header: role/company + employment chip */}
                                    <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
                                                {exp.role}
                                            </h3>
                                            <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-300">
                                            {t(`experience.items.${exp.id}.employment`)}
                                        </span>
                                    </div>

                                    {/* Meta: period – duration on one line, location below */}
                                    <div className="flex flex-col gap-1.5 text-sm text-slate-500 dark:text-gray-400">
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                            <span className="inline-flex items-center gap-1.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                                    <path d="M16 3l0 4" /><path d="M8 3l0 4" /><path d="M4 11l16 0" />
                                                </svg>
                                                {t(`experience.items.${exp.id}.period`)}
                                            </span>
                                            <span aria-hidden="true">–</span>
                                            <span className="inline-flex items-center gap-1.5 font-medium text-cyan-600 dark:text-cyan-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                    <path d="M12 7v5l3 3" />
                                                </svg>
                                                {duration}
                                            </span>
                                        </div>
                                        <span className="inline-flex items-center gap-1.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                            </svg>
                                            {t(`experience.items.${exp.id}.location`)}
                                        </span>
                                    </div>

                                    {/* Responsibilities */}
                                    <ul className="flex flex-col gap-2.5 border-t border-slate-200 pt-4 dark:border-white/10">
                                        {bullets.map((bullet, i) => (
                                            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0 text-cyan-600 dark:text-cyan-400">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M5 12l5 5l10 -10" />
                                                </svg>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}