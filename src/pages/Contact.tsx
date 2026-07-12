import { useActionState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/SectionHeader';

type SubmitStatus = 'idle' | 'success' | 'error';

// Placeholder action — replace the body with the real API/DB call when the backend is ready
async function sendMessage(_previous: SubmitStatus, formData: FormData): Promise<SubmitStatus> {
    console.info('Contact form submission (backend pending):', Object.fromEntries(formData));
    return 'success';
}

// Shared field styles
const labelClasses = 'text-sm font-medium text-slate-700 dark:text-gray-200';
const inputClasses = 'w-full rounded-lg border border-slate-200 bg-white/50 px-4 py-2.5 text-sm text-slate-900 outline-none backdrop-blur-sm transition-colors duration-300 placeholder:text-slate-400 focus:border-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-cyan-400';

export default function Contact() {
    // Translation hook
    const { t } = useTranslation();
    // Form action state (React 19): result of the last submission + pending flag.
    // On success React resets the form fields automatically.
    const [status, formAction, isPending] = useActionState(sendMessage, 'idle');

    return (
        <div className="flex w-full flex-col items-center gap-10">
            <SectionHeader title={t('sidebar.contact')} />

            <p className="max-w-2xl text-center text-sm leading-relaxed text-slate-600 dark:text-gray-300 sm:text-base">
                {t('contact.lead')}
            </p>

            <form action={formAction}
                className="grid w-full max-w-2xl grid-cols-1 gap-5 rounded-2xl border border-slate-200 bg-white/50 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className={labelClasses}>
                        {t('contact.form.name')} <span aria-hidden="true" className="text-red-500 dark:text-red-400">*</span>
                    </label>
                    <input id="contact-name" name="name" type="text" required autoComplete="name"
                        placeholder={t('contact.form.namePlaceholder')} className={inputClasses} />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className={labelClasses}>
                        {t('contact.form.email')} <span aria-hidden="true" className="text-red-500 dark:text-red-400">*</span>
                    </label>
                    <input id="contact-email" name="email" type="email" required autoComplete="email"
                        placeholder={t('contact.form.emailPlaceholder')} className={inputClasses} />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                    <label htmlFor="contact-subject" className={labelClasses}>
                        {t('contact.form.subject')} <span className="font-normal text-slate-400 dark:text-gray-500">({t('contact.form.optional')})</span>
                    </label>
                    <input id="contact-subject" name="subject" type="text"
                        placeholder={t('contact.form.subjectPlaceholder')} className={inputClasses} />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                    <label htmlFor="contact-message" className={labelClasses}>
                        {t('contact.form.message')} <span aria-hidden="true" className="text-red-500 dark:text-red-400">*</span>
                    </label>
                    <textarea id="contact-message" name="message" required rows={5}
                        placeholder={t('contact.form.messagePlaceholder')} className={`${inputClasses} resize-y`} />
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                    <button type="submit" disabled={isPending}
                        className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-md border-2 border-cyan-600 px-4 py-2.5 text-sm font-semibold text-slate-900 transition-colors duration-300 hover:bg-cyan-600 hover:text-white disabled:pointer-events-none disabled:opacity-60 dark:border-cyan-400 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900">
                        {isPending ? t('contact.form.sending') : t('contact.form.submit')}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 14l11 -11" />
                            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                        </svg>
                    </button>

                    {/* Submission feedback */}
                    <p role="status" aria-live="polite" className="text-sm">
                        {status === 'success' && (
                            <span className="text-emerald-600 dark:text-emerald-400">{t('contact.form.success')}</span>
                        )}
                        {status === 'error' && (
                            <span className="text-red-600 dark:text-red-400">{t('contact.form.error')}</span>
                        )}
                    </p>
                </div>
            </form>
        </div>
    );
}