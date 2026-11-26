import m from "mithril";
import en from "../../../../../public/main/assets/translation/en.json";
import es from "../../../../../public/main/assets/translation/es.json";
import { cLog } from "../utils/clog";

const translations = { en, es };
type Language = keyof typeof translations;

let currentLanguage: Language = "en";

/** Cambia el 'currentLanguage' y fuerza a Mithril hacer un redraw.  */
export function loadTranslations(language: string): void {
  // NOTE: Esto no debería de pasar nunca, peeeero por las dudas que se me pase y me olvido.
  if (language === "en" || language === "es") {
    currentLanguage = language as Language;
  }
  else {
    cLog("ADVERTENCIA", "i18n", `Idioma no soportado: ${language}. Se usará 'en' por default.`);
    currentLanguage = "en";
  }

  m.redraw();
}

export function getTranslation(key: string): string {
  // NOTE: Esto a lo mejor no es buena idea hacerlo honestamente, es como un hack super estúpido para pasar texto que no necesita traducción, no tengo ganas de arreglar esto
  // TODO: No dejar esto. Arreglarlo mas tarde.
  if (!key.includes(".")) {
    cLog("ADVERTENCIA", "i18n", "El key dado para traducir no corresponde el formato normal: X.X, se volverá la key intacta.");
    return key;
  }

  let translation: unknown = translations[currentLanguage];
  for (const part of key.split(".")) {
    if (typeof translation !== "object" || translation === null) {
      translation = undefined;
      break;
    }
    translation = (translation as Record<string, unknown>)[part];
  }

  if (typeof translation === "string") return translation;

  cLog("ERROR", "i18n", `Key: ${key} no encontrada.`);
  return "⚠️ Key no encontrada";
}
