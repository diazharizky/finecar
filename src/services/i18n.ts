import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from '../../locales/en.json';
import id from '../../locales/id.json';

const languageResources = {
  en: {translation: en},
  id: {translation: id},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'id',
  fallbackLng: 'id',
  resources: languageResources,
});
