/*
 * i18n.js
 * -------
 * Maneja el sistema multilenguaje de la página.
 * Gran parte del código lo saque de otra página y realmente no se muy bien lo que hace :P
*/

class I18n {
  constructor() {
    this.currentLang = this.getSavedLanguage() || this.getBrowserLanguage();
    this.translations = {};
    this.ready = this.loadTranslations();
  }

  /**
   * Obtiene cual es el lenguaje guardado en el navegador del usuario.
   * @returns {string}
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
   * @param {*} lang - Lenguaje: 'es' o 'en'
   */
  saveLanguage(lang) {
    try {
      this.currentLang = lang;
      localStorage.setItem('preferred-language', lang);
    } catch (e) {
      console.warn("i18n.js> Error en LocalStorage? ", e);
    }
  }

  /**
   * Obtiene el lenguaje del navegador del usuario.
   * @returns {string}
   */
  getBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
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
   * @param {*} lang 
   */
  async changeLanguage(lang) {
    this.saveLanguage(lang);
    await this.loadTranslations();
  }

  /**
   * Traduce todo el contenido de la pagina que contenga '[data-i18n]'.
   */
  translatePage() {
    console.log("i18n.js> Ejecutando translatePage.")

    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
      let key = element.getAttribute('data-i18n');
      let isHtml = false;

      if (key.startsWith('[html]')) {
        isHtml = true;
        key = key.replace('[html]', '');
      }

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
    });

    document.documentElement.lang = this.currentLang;
  }

  /**
   * Obtén la traducción de una key.
   * @param {*} key 
   * @returns 
   */
  getTranslation(key) {
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
 * @param {*} lang - El lenguaje: 'es' o 'en'
 */
export function changeLanguage(lang) {
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