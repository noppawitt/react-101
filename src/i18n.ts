import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import th from '@/translations/th.json';
import en from '@/translations/en.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ['th', 'en'],
    resources: {
      th: {
        translation: th,
      },
      en: {
        translation: en,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
