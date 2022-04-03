import en from '../constants/en.json';
import de from '../constants/de.json';
import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import {Language} from '../constants/constants';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: Language.english,
  fallbackLng: Language.Deutsch,
  resources: {
    en: en,
    de: de,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
