import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { certificates } from '../lib/constants';
import SectionHeader from '../components/SectionHeader';

export default function Certifications() {
    // Media query for the `lg` breakpoint (1024px) to determine how many cards fit in a row
    const DESKTOP_QUERY = '(min-width: 1024px)';
    // Translation hook
    const { t } = useTranslation();

    // Ref to the scrollable row + whether it can still scroll left/right (drives the arrow buttons and edge fades)
    const scrollRef = useRef<HTMLUListElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    // Index of the page currently in view (drives the page indicator dots)
    const [currentPage, setCurrentPage] = useState(0);

    // Track the `lg` breakpoint so pages can be re-chunked to match the grid's current column count
    const [isDesktop, setIsDesktop] = useState(
        () => typeof window !== 'undefined' && window.matchMedia(DESKTOP_QUERY).matches
    );
    useEffect(() => {
        const mql = window.matchMedia(DESKTOP_QUERY);
        const handleChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        mql.addEventListener('change', handleChange);
        return () => mql.removeEventListener('change', handleChange);
    }, []);

    const certificatePages = useMemo(() => {
        const PAGE_SIZE_MOBILE = 2;
        const PAGE_SIZE_DESKTOP = 4;
        const pageSize = isDesktop ? PAGE_SIZE_DESKTOP : PAGE_SIZE_MOBILE;

        return Array.from(
            { length: Math.ceil(certificates.length / pageSize) },
            (_, i) => certificates.slice(i * pageSize, i * pageSize + pageSize)
        );
    }, [isDesktop]);

    // Recompute which arrows should be active and which page is in view from the row's current scroll position
    const updateScrollState = () => {
        const el = scrollRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        setCanScrollLeft(el.scrollLeft > 8);
        setCanScrollRight(el.scrollLeft < maxScroll - 8);
        setCurrentPage(maxScroll > 0 ? Math.round((el.scrollLeft / maxScroll) * (el.children.length - 1)) : 0);
    };

    useEffect(() => {
        updateScrollState();
        window.addEventListener('resize', updateScrollState);
        return () => window.removeEventListener('resize', updateScrollState);
    }, [certificatePages]);

    // Scroll by exactly one full "page" (however many whole cards currently fit) per click
    const scrollBy = (direction: 1 | -1) => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' });
    };

    // Jump straight to a page from the indicator dots
    const goToPage = (index: number) => {
        const el = scrollRef.current;
        const page = el?.children[index];
        const firstPage = el?.firstElementChild;
        if (!el || !(page instanceof HTMLElement) || !(firstPage instanceof HTMLElement)) return;
        el.scrollTo({ left: page.offsetLeft - firstPage.offsetLeft, behavior: 'smooth' });
    };

    // Prev/next button, rendered above the row on desktop and beside the dots on mobile/tablet
    const renderArrow = (direction: 1 | -1, className = '') => (
        <button type="button" onClick={() => scrollBy(direction)} disabled={direction === -1 ? !canScrollLeft : !canScrollRight}
            aria-label={t(direction === -1 ? 'certifications.scrollLeft' : 'certifications.scrollRight')}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors duration-300 hover:border-cyan-500/60 hover:text-cyan-600 disabled:pointer-events-none disabled:opacity-30 dark:border-white/10 dark:text-gray-300 dark:hover:text-cyan-400 sm:h-9 sm:w-9 ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d={direction === -1 ? 'M15 6l-6 6l6 6' : 'M9 6l6 6l-6 6'} />
            </svg>
        </button>
    );

    return (
        <div className="flex w-full flex-col items-center gap-6">
            <SectionHeader title={t('sidebar.certifications')} />

            {/* Desktop: prev/next controls above the row (not overlapping the cards) */}
            <div className="hidden w-full max-w-7xl justify-end gap-2 lg:flex">
                {renderArrow(-1)}
                {renderArrow(1)}
            </div>

            <div className="relative w-full max-w-7xl">
                <ul ref={scrollRef} onScroll={updateScrollState}
                    className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 py-4">
                    {certificatePages.map((page, pageIndex) => (
                        <li key={pageIndex} className="w-full shrink-0 snap-start">
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                {page.map((certificate) => (
                                    <article key={certificate.id} className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white/50 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 dark:border-white/10 dark:bg-white/5 sm:p-6">
                                        {/* Top gradient hairline */}
                                        <span aria-hidden="true"
                                            className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-500/70 to-transparent" />
                                        {/* Corner glow */}
                                        <span aria-hidden="true"
                                            className="pointer-events-none absolute -top-14 -right-14 h-36 w-36 rounded-full bg-cyan-500/10 blur-2xl transition-colors duration-300 group-hover:bg-cyan-500/20" />

                                        {/* Header: icon + format chip */}
                                        <div className="flex items-start justify-between gap-3">
                                            <img src={certificate.logo} alt={certificate.issuer} loading="lazy"
                                                className="h-12 w-12 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14" />

                                            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-300 sm:px-2.5 sm:py-1 sm:text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                                    <path d="M12 7v5l3 3" />
                                                </svg>
                                                {t(`certifications.items.${certificate.id}.duration`)} - {t(`certifications.items.${certificate.id}.location`)}
                                            </span>
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
                                                {t(`certifications.items.${certificate.id}.title`)}
                                            </h3>

                                            <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400 sm:text-sm">
                                                {certificate.issuer}
                                            </p>
                                        </div>

                                        {/* Footer pinned to the bottom: period + certificate link */}
                                        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 dark:border-white/10">
                                            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-gray-400 sm:text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                                    <path d="M16 3l0 4" /><path d="M8 3l0 4" /><path d="M4 11l16 0" />
                                                </svg>
                                                {t(`certifications.items.${certificate.id}.period`)}
                                            </span>

                                            {certificate.file && (
                                                <a href={certificate.file} target="_blank" rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 rounded-md border-2 border-cyan-600 px-2.5 py-1 text-xs font-semibold text-slate-900 transition-colors duration-300 hover:bg-cyan-600 hover:text-white dark:border-cyan-400 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 sm:px-3 sm:py-1.5 sm:text-sm">
                                                    {t('certifications.viewCertificate')}
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
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Page indicator; on mobile/tablet the arrows sit beside it, within thumb reach */}
            {certificatePages.length > 1 && (
                <div className="flex items-center justify-center gap-3">
                    {renderArrow(-1, 'lg:hidden')}
                    <div className="flex items-center">
                        {certificatePages.map((_, pageIndex) => (
                            <button key={pageIndex} type="button" onClick={() => goToPage(pageIndex)}
                                aria-label={t('certifications.goToPage', { page: pageIndex + 1, total: certificatePages.length })}
                                aria-current={pageIndex === currentPage ? 'true' : undefined}
                                className="group flex h-6 cursor-pointer items-center rounded-full px-1">
                                <span className={`block h-2 rounded-full transition-all duration-300 ${pageIndex === currentPage
                                    ? 'w-6 bg-cyan-600 dark:bg-cyan-400'
                                    : 'w-2 bg-slate-300 group-hover:bg-cyan-500/60 dark:bg-white/20'}`} />
                            </button>
                        ))}
                    </div>
                    {renderArrow(1, 'lg:hidden')}
                </div>
            )}
        </div>
    );
}