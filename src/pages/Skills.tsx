import { useTranslation } from 'react-i18next';
import { skills } from '../lib/constants';
import type { SkillCategory } from '../lib/types';
import SectionHeader from '../components/SectionHeader';

// Render order for the skill categories (each maps to an i18n label key)
const CATEGORIES: SkillCategory[] = ['frontend', 'backend', 'database', 'tools'];

// Group the (static) skills by category once, at module load — not on every render
const SKILL_GROUPS = CATEGORIES
    .map((category) => ({ category, items: skills.filter((skill) => skill.category === category) }))
    .filter((group) => group.items.length > 0);

export default function Skills() {
    // Translation hook
    const { t } = useTranslation();

    return (
        <div className="flex w-full flex-col items-center gap-8 sm:gap-10 lg:gap-12">
            <SectionHeader title={t('sidebar.skills')} />

            <div className="flex w-full max-w-6xl flex-col gap-8 sm:gap-10">
                {SKILL_GROUPS.map(({ category, items }) => (
                        <section key={category} className="flex flex-col gap-4 sm:gap-5">
                            {/* Category label with accent line */}
                            <h3 className="flex items-center gap-3 text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                                <span className="h-px w-8 sm:w-10 lg:w-12 bg-cyan-600/50 dark:bg-cyan-400/50" />
                                {t(`skills.${category}`)}
                            </h3>

                            {/* Skill cards */}
                            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4">
                                {items.map((skill) => (
                                    <li key={skill.name}>
                                        <a href={skill.url} target="_blank" rel="noopener noreferrer"
                                            aria-label={`${skill.name} — ${t('skills.visitWebsite')}`}
                                            className="group relative flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 dark:border-white/10 dark:bg-white/5 sm:gap-4 sm:p-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                                                className="absolute right-3 top-3 h-4 w-4 text-slate-400 transition-colors duration-300 group-hover:text-cyan-600 dark:text-slate-500 dark:group-hover:text-cyan-400">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M17 7l-10 10" />
                                                <path d="M8 7l9 0l0 9" />
                                            </svg>

                                            <img src={`/assets/icons/${skill.image}`} alt={skill.name} loading="lazy"
                                                className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14" 
                                            />
                                            <span className="text-center text-sm font-medium text-slate-700 dark:text-gray-200 sm:text-base">
                                                {skill.name}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </section>
                ))}
            </div>
        </div>
    );
}