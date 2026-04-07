/*
 * i18n.ts
 * -------
 * Maneja el sistema multilenguaje de la página.
 * Gran parte del código lo saque de otra página y realmente no se muy bien lo que hace :P
*/

type lang = "es" | "en";

class I18n {
  currentLang: string;
  translations: Record<string, any>;
  ready: Promise<void>;

  constructor() {
    this.currentLang = this.getSavedLanguage() || this.getBrowserLanguage();
    this.translations = {};
    this.ready = this.loadTranslations();
  }

  /**
   * Obtiene cual es el lenguaje guardado en el navegador del usuario.
   */
  getSavedLanguage() {
    try {
      return localStorage.getItem('preferred-language');
    } catch (e) {
      console.warn("i18n.js> Error en LocalStorage? ", e);
      return null;
    }
  }

  /**
   * Guarda el lenguaje dado en LocalStorage.
   */
  saveLanguage(lang: lang) {
    try {
      this.currentLang = lang;
      localStorage.setItem('preferred-language', lang);
    } catch (e) {
      console.warn("i18n.js> Error en LocalStorage? ", e);
    }
  }

  /**
   * Obtiene el lenguaje del navegador del usuario.
   */
  getBrowserLanguage(): string {
    const browserLang = navigator.language; // NOTE: navigator.language puede devolver null.
    return browserLang.startsWith('es') ? 'es' : 'en';
  }

  /**
   * Carga los datos de los archivos de traducciones y fuerza una traducción a la pagina actual.
   */
  async loadTranslations() {
    try {
      const response = await fetch(`/assets/translation/${this.currentLang}.json`);
      const json = await response.json();

      this.translations[this.currentLang] = json;
      this.translatePage();
    } catch (error) {
      console.error("[i18n] load error", error);
    }
  }

  /**
   * Cambia el lenguaje.
   */
  async changeLanguage(lang: lang) {
    this.saveLanguage(lang);
    await this.loadTranslations();
  }

  /**
   * Traduce todo el contenido de la pagina que contenga '[data-i18n]'.
   */
  translatePage() {
    console.log("%ci18n.js>" + "%c Ejecutando: " + "%ctranslatePage()", "color: #87F3A9; background: #282A35;", "color: white", "color: cyan")

    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
      let key = element.getAttribute('data-i18n');
      let isHtml = false;

      if (key?.startsWith('[html]')) {
        isHtml = true;
        key = key.replace('[html]', '');
      }

      if (key !== null) {
        const translation = this.getTranslation(key);
        if (translation) {
          const attr = element.getAttribute('data-i18n-attr');
          if (attr) {
            element.setAttribute(attr, translation);
          } else {
            if (isHtml) {
              element.innerHTML = translation;
            } else {
              element.textContent = translation;
            }
          }
        }
      }
    });
    document.documentElement.lang = this.currentLang;
  }

  /**
   * Obtén la traducción de una key.
   */
  getTranslation(key: string): string {
    const keys = key.split('.');
    let translation = this.translations[this.currentLang];

    for (const k of keys) {
      translation = translation?.[k];
    }

    return translation;
  }
}

/**
 * Guarda el lenguaje en LocalStorage.
 */
export function changeLanguage(lang: lang) {
  i18n.changeLanguage(lang);
}


/**
 * Traduce el contenido de la pagina.
 * @see {@link i18n.translatePage}
 */
export function refreshi18n() {
  i18n.translatePage();
}

const i18n = new I18n();

export const i18nReady = i18n.ready;