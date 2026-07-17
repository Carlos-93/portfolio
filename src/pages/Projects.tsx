import { useTranslation } from 'react-i18next';
import { projects } from '../lib/constants';
import SectionHeader from '../components/SectionHeader';

// Live preview of a URL via WordPress.com mShots when no curated screenshot is provided
const previewOf = (url: string) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=800&h=450`;

export default function Projects() {
    // Translation hook
    const { t } = useTranslation();

    return (
        <div className="flex w-full flex-col items-center gap-10">
            <SectionHeader title={t('sidebar.projects')} />
            <ul className="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                    <li key={project.id}
                        className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 dark:border-white/10 dark:bg-white/5">
                        <div className="aspect-video overflow-hidden bg-linear-to-br from-cyan-500/15 to-slate-500/10">
                            {(project.image ?? (project.demoUrl && previewOf(project.demoUrl))) && (
                                <img src={project.image ?? previewOf(project.demoUrl!)} alt={project.title} loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                                />
                            )}
                        </div>

                        {/* Body */}
                        <div className="flex flex-1 flex-col gap-4 p-5">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                {project.title}
                            </h3>
                            
                            <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                                {t(`projects.items.${project.id}.description`)}
                            </p>

                            {/* Tech stack */}
                            <ul className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <li key={tag}
                                        className="rounded-full border border-cyan-600/30 bg-cyan-600/5 px-2.5 py-0.5 text-xs font-medium text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300">
                                        {tag}
                                    </li>
                                ))}
                            </ul>

                            {/* Links */}
                            <div className="mt-1 flex items-center gap-4">
                                {project.demoUrl && (
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 rounded-md border-2 border-cyan-600 px-3 py-1.5 text-sm font-semibold text-slate-900 transition-colors duration-300 hover:bg-cyan-600 hover:text-white dark:border-cyan-400 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900">
                                        {t('projects.viewDemo')}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                            <path d="M11 13l9 -9" />
                                            <path d="M15 4h5v5" />
                                        </svg>
                                    </a>
                                )}
                                {project.repoUrl && (
                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400">
                                        {t('projects.viewCode')}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}