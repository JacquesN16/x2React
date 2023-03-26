import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
// Import your translations here
import translationsEn from "./translations/en.json";
import translationsFr from "./translations/fr.json";

// Initialize i18n
i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
    resources: {
        en: {
            translation: translationsEn,
        },
        fr: {
            translation: translationsFr,
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;