import type { SectionHeaderProps } from '../lib/types';

export default function SectionHeader({ title }: SectionHeaderProps) {
    return (
        <header className="flex flex-col items-center gap-2 sm:gap-3 cursor-default">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-400">
                {title}
            </h2>
            <span className="h-0.5 w-full rounded-full bg-cyan-600 dark:bg-cyan-400" />
        </header>
    );
}