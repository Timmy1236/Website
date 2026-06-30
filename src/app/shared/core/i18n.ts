/*
 * i18n.ts
 * -------
 * Sistema multilenguaje i18n. Los strings traducidos son guardados en un JSON y este mismo script puede devolverlos si le das la key indicada.
 */
type Lang = "es" | "en"; // NOTE: Esto necesita un retoquesito en algún futuro. Por ahora funciona, pero no lo debido.

let currentLang: Lang = _getSavedLanguage() ?? _getBrowserLanguage();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations: Record<string, any> = {};
let loaded = false;

function _getSavedLanguage(): Lang | null {
  try {
    const saved = localStorage.getItem('preferred-language');
    return (saved === 'es' || saved === 'en') ? saved : null; // NOTE: Esto necesita un retoquesito en algún futuro. Por ahora funciona, pero no lo debido.
  } catch (e) {
    console.warn("i18n> Error en LocalStorage: ", e);
    return null;
  }
}

function _getBrowserLanguage(): Lang {
  const browserLang = navigator.language || '';
  return browserLang.startsWith('es') ? 'es' : 'en';
}

async function _loadTranslations(): Promise<void> {
  try {
    const response = await fetch(`/assets/translation/${currentLang}.json`);
    const json = await response.json();

    translations[currentLang] = json;
    loaded = true;
  } catch (error) {
    console.error("[i18n] Error al cargar traducciones:", error);
  }
}

/**
 * Devuelve un string dependiendo de la key para i18n y del lenguaje actual de la sesión.
 */
export function getTranslation(key: string): string {
  if (!loaded) return "⚑ i18n ERROR ⚑";

  const keys = key.split('.');
  let translation = translations[currentLang];

  for (const k of keys) {
    translation = translation?.[k];
  }

  if (!translation) {
    console.error("Key no encontrada: " + keys);
  }

  return translation ?? "⚑ KEY.NO.ENCONTRADA ⚑";
}

/**
 * Guarda el nuevo lenguaje dado en el localStorage.
 */
export async function changeLanguage(lang: Lang): Promise<void> {
  try {
    currentLang = lang;
    localStorage.setItem('preferred-language', lang);
    window.location.reload();
  } catch (e) {
    console.warn("i18n> Error en LocalStorage: ", e);
  }
}

// Inicializamos la promesa de carga para que otros archivos puedan saber cuándo terminó
export const i18nReady = _loadTranslations();