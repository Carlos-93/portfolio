import { useEffect } from 'react';
import { FULL_NAME } from '../lib/constants';
import { useTranslation } from 'react-i18next';

export function useDocumentTitle() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const portfolio = t('common.portfolio');
        document.title = `${portfolio} - ${FULL_NAME}`;
        document.documentElement.lang = i18n.language;
    }, [i18n.language, t]);
}