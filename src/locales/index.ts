import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translateVI from './vi.json';
import translateEN from './en.json';

const resources = {
  en: { translation: translateEN },
  vi: { translation: translateVI },
};

i18next.use(initReactI18next).init({
  lng: 'en',
  debug: true,
  resources,
});
