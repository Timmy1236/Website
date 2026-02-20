/*
  i18n.js
  -------
  - Maneja el sistema multilenguaje de la página.
  * Gran parte del código lo saque de otra página y realmente no se muy bien lo que hace :P
  * Solamente hice unos cambios y comentarios para me sea fácil de entenderlo.
*/

class I18n {
  constructor() {
    this.currentLang = this.getSavedLanguage() || this.getBrowserLanguage();
    this.translations = {};
    this.loadTranslations();
  }

  // Manejo de idioma guardado
  getSavedLanguage() {
    try {
      return localStorage.getItem('preferred-language');
    } catch (e) {
      console.warn("localStorage no disponible:", e);
      return null;
    }
  }

  saveLanguage(lang) {
    try {
      localStorage.setItem('preferred-language', lang);
    } catch (e) {
      console.warn("No se pudo guardar en localStorage:", e);
    }
  }

  // Detectar idioma navegador
  getBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('es') ? 'es' : 'en';
  }

  // Cargar traducciones
  async loadTranslations() {
    try {
      const response = await fetch(`./assets/translation/${this.currentLang}.json`);
      this.translations[this.currentLang] = await response.json();
      this.translatePage();
    } catch (error) {
      console.error("Error loading translations:", error);
    }
  }

  // Cambiar idioma
  async changeLanguage(lang) {
    this.currentLang = lang;
    this.saveLanguage(lang);

    // Vuelve a cargar el JSON del idioma elegido
    try {
      const response = await fetch(`./assets/translation/${lang}.json`);
      this.translations[lang] = await response.json();
    } catch (error) {
      console.error("Error cargando idioma:", error);
      return;
    }

    this.translatePage();

    // Evento personalizado para notificar cambio
    document.dispatchEvent(new CustomEvent("languageChanged", {
      detail: { language: lang }
    }));
  }


  // Traducir toda la página
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

  // Obtener traducción específica
  getTranslation(key) {
    const keys = key.split('.');
    let translation = this.translations[this.currentLang];

    for (const k of keys) {
      translation = translation?.[k];
    }

    return translation;
  }

  getCurrentLanguage() {
    return this.currentLang;
  }
}

const i18n = new I18n();

function changeLanguage(lang) {
  i18n.changeLanguage(lang);
}

window.refreshI18n = function () {
  i18n.translatePage();
};
