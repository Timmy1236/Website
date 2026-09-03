import { getSettings } from "./settings-logic";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations: Record<string, any> = {};
let loaded = false;

export async function loadTranslations(): Promise<void> {
  const { language } = getSettings();

  try {
    const response = await fetch(`/assets/translation/${language}.json`);
    const json = await response.json();

    translations[language] = json;
    loaded = true;
  }
  catch (error) {
    console.error("[i18n] Error al cargar traducciones:", error);
  }
}

export function getTranslation(key: string): string {
  if (!loaded) return "⚑ i18n ERROR ⚑";

  const { language } = getSettings();
  let translation = translations[language];

  for (const k of key.split(".")) {
    translation = translation?.[k];
  }

  return translation ?? "⚑ KEY.NO.ENCONTRADA ⚑";
}
