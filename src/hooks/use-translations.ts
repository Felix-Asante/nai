// import useTranslation from "next-translate/useTranslation";
// import common from "../../locales/en/common.json";
// import { TranslationQuery } from "next-translate";
// import setLanguage from "next-translate/setLanguage";

// type Translations = typeof common;

// type TranslationKey =
//   | "common"
//   | "about"
//   | "contact"
//   | "donate"
//   | "projects"
//   | "team";

// export function useTranslations(i18nKey: TranslationKey = "common") {
//   const { t, lang } = useTranslation(i18nKey);

//   const translate = (
//     key: keyof Translations,
//     query?: TranslationQuery | null,
//     options?: {
//       returnObjects?: boolean;
//       fallback?: string | string[];
//       default?: string;
//       ns?: string;
//     }
//   ) => t(key, query, options);

//   return {
//     translate,
//     lang,
//     setLanguage,
//   };
// }
