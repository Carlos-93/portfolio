import { useActionState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import SectionHeader from '../components/SectionHeader';
import i18n from '../i18n/config';

interface FormState {
    status: 'idle' | 'success' | 'error';
    // Submitted values, returned only on error so the form keeps what the visitor wrote
    values?: Record<'name' | 'email' | 'subject' | 'message', string>;
}

// Sends the message to ca.galvan@outlook.com via Web3Forms
async function sendMessage(_previous: FormState, formData: FormData): Promise<FormState> {
    // Honeypot: bots fill the hidden field, humans never see it
    if (formData.get('botcheck')) return { status: 'idle' };

    formData.set('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.set('from_name', 'Portfolio — Carlos Araujo');
    if (!formData.get('subject')) formData.set('subject', 'Nuevo mensaje desde el portfolio');

    try {
        const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
        const result: { success: boolean } = await response.json();
        if (!result.success) throw new Error('Web3Forms rejected the submission');
        toast.success(i18n.t('contact.form.success'));
        return { status: 'success' };
    } catch {
        toast.error(i18n.t('contact.form.error'));
        return {
            status: 'error',
            values: {
                name: String(formData.get('name') ?? ''),
                email: String(formData.get('email') ?? ''),
                subject: String(formData.get('subject') ?? ''),
                message: String(formData.get('message') ?? ''),
            },
        };
    }
}

// Shared field styles
const labelClasses = 'text-sm font-medium text-slate-700 dark:text-gray-200';
const inputClasses = 'w-full rounded-lg border border-slate-200 bg-white/50 px-4 py-2.5 text-sm text-slate-900 outline-none backdrop-blur-sm transition-colors duration-300 placeholder:text-slate-400 focus:border-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-cyan-400';

export default function Contact() {
    // Translation hook
    const { t } = useTranslation();
    // Form state hook, which handles the form submission and keeps track of the status and values
    const [{ values }, formAction, isPending] = useActionState(sendMessage, { status: 'idle' });

    return (
        <div className="flex w-full flex-col items-center gap-10">
            <SectionHeader title={t('sidebar.contact')} />

            <p className="max-w-2xl text-center text-sm leading-relaxed text-slate-600 dark:text-gray-300 sm:text-base">
                {t('contact.lead')}
            </p>

            <form action={formAction}
                className="grid w-full max-w-2xl grid-cols-1 gap-5 rounded-2xl border border-slate-200 bg-white/50 p-5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 sm:grid-cols-2 sm:p-6">
                {/* Honeypot field for spam bots — hidden from humans and screen readers */}
                <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" className="hidden" />
                <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className={labelClasses}>
                        {t('contact.form.name')} <span aria-hidden="true" className="text-red-500 dark:text-red-400">*</span>
                    </label>
                    <input id="contact-name" name="name" type="text" required autoComplete="name" defaultValue={values?.name}
                        placeholder={t('contact.form.namePlaceholder')} className={inputClasses} />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className={labelClasses}>
                        {t('contact.form.email')} <span aria-hidden="true" className="text-red-500 dark:text-red-400">*</span>
                    </label>
                    <input id="contact-email" name="email" type="email" required autoComplete="email" defaultValue={values?.email}
                        placeholder={t('contact.form.emailPlaceholder')} className={inputClasses} />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                    <label htmlFor="contact-subject" className={labelClasses}>
                        {t('contact.form.subject')} <span className="font-normal text-slate-400 dark:text-gray-500">({t('contact.form.optional')})</span>
                    </label>
                    <input id="contact-subject" name="subject" type="text" defaultValue={values?.subject}
                        placeholder={t('contact.form.subjectPlaceholder')} className={inputClasses} />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                    <label htmlFor="contact-message" className={labelClasses}>
                        {t('contact.form.message')} <span aria-hidden="true" className="text-red-500 dark:text-red-400">*</span>
                    </label>
                    <textarea id="contact-message" name="message" required rows={7} defaultValue={values?.message}
                        placeholder={t('contact.form.messagePlaceholder')} className={`${inputClasses} resize-none`} />
                </div>

                <div className="flex justify-end sm:col-span-2">
                    <button type="submit" disabled={isPending}
                        className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-md border-2 border-cyan-600 px-4 py-2.5 text-sm font-semibold text-slate-900 transition-colors duration-300 hover:bg-cyan-600 hover:text-white disabled:pointer-events-none disabled:opacity-60 dark:border-cyan-400 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900">
                        {isPending ? t('contact.form.sending') : t('contact.form.submit')}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 14l11 -11" />
                            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}