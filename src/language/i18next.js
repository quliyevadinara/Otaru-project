import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// const resources = {
//   en: {
//     translation: {
//       "Welcome to React": "Welcome to React and react-i18next",
//     },
//   },
//   az: {
//     translation: {
//       "Welcome to React": "Bienvenue à React et react-i18next",
//     },
//   },
// };
i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fellbackLng: "az",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
