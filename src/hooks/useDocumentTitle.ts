import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const NAME = 'Carlos Araujo Galván';

export function useDocumentTitle() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const portfolio = t('common.portfolio');
        document.title = `${portfolio} - ${NAME}`;
        document.documentElement.lang = i18n.language;
    }, [i18n.language, t]);
}