/*
 * settings-logic.js
 * -----------------
 * Encargado de la lógica de settings, establecer, cargar y modificar datos en LocalStorage.
*/

/**
 * @typedef {Object} Settings
 * @property {string} staticEffect    - Selector para el efecto estático.
 * @property {string} vignetteEffect  - Selector para el efecto de viñeta.
 * @property {string} theme           - Selector del selector de temas.
 * @property {string} backgroundMusic - Switch para la música de fondo.
 * @property {string} mouseClicks     - Switch para sonidos de clicks.
 * @property {string} readableFont    - Switch para fuente legible.
 */
export const SETTINGS_MAP = {
  staticEffect: "static-effect",
  vignetteEffect: "vignette-effect",
  theme: "theme-select",
  backgroundMusic: "background-music-toggle",
  mouseClicks: "mouse-click-toggle",
  readableFont: "readable-font"
};

const SETTINGS_VERSION = "1";

// === Carga el efecto de ruido/estática ===
function loadNoiseEffect() {
  const noiseCSS = document.createElement('link');
  noiseCSS.rel = 'stylesheet';
  noiseCSS.href = './css/effects/noise.css';
  noiseCSS.id = 'noise-css';
  document.head.appendChild(noiseCSS);

  noiseCSS.onload = function () {
    const bgDiv = document.createElement('div');
    bgDiv.className = 'bg';
    bgDiv.id = 'background';
    document.body.prepend(bgDiv);
  };
}

/**
 * Añade los atributos de 'theme' y 'color' al documento sacados del LocalStorage.
 */
function loadTheme() {
  const theme = localStorage.getItem("theme") || "simple-purple";
  const themeArray = theme.split("-")

  document.documentElement.setAttribute("data-theme", themeArray[0]);
  document.documentElement.setAttribute("data-color", themeArray[1]);
}

/**
 * Checkea si 'settingsInitialized' es falso o null, en caso que lo sea, se forzara ejecutar la función 'initDefaultSettings'.
 * @see {@link initDefaultSettings}
 */
function checkIfFirstTime() {
  if (localStorage.getItem("settingsInitialized") !== "true") {
    initDefaultSettings()
    window.location.reload();
  }
}

/**
 * Checkeamos si el navegador del usuario tiene guardado una variable "settingsVersion" la misma version que tiene el script settings-logic, en caso que no lo tenga, forzamos un initDefaultSettings por las dudas, solamente actualiza la version de settings cuando se hacen cambios grandes y que puede romperse completamente.
 * @see {@link initDefaultSettings}
 * @see {@link SETTINGS_VERSION}
 */
function migrateSettings() {
  const savedVersion = localStorage.getItem("settingsVersion");
  console.log("%csettings-logic.js>" + "%c Realizando un checkeo de versiones...\nVersion settings del usuario: " + savedVersion + "\nVersion settings de la pagina: " + SETTINGS_VERSION, "color: #87F3A9; background: #282A35;", "color: white")

  if (savedVersion === SETTINGS_VERSION) return;

  console.warn("settings-logic.js> ¡Las versiones no coinciden, se requiere forzadamente realizar una restauración por defecto en los settings para evitar posibles bugs criticos!")

  initDefaultSettings();
  localStorage.setItem("settingsVersion", SETTINGS_VERSION);
}

/**
 * Carga y aplica todas las configuraciones, se ejecuta cuando la pagina termina de cargar.
 */
export function initializeSettings() {
  migrateSettings();
  checkIfFirstTime(); // NOTE: Tendremos que revisar esto ahora, con el nuevo sistema de migrateSettings esto podría haber quedado obsoleto perfectamente.

  const enabledStaticEffect = localStorage.getItem("staticEffect") === "true";
  const enabledReadableFont = localStorage.getItem("readableFont") === "true";

  loadTheme();

  if (enabledStaticEffect) {
    loadNoiseEffect();
  }

  if (enabledReadableFont) {
    document.documentElement.classList.add("readable-font");
  }
}

/**
 * Sobrescribe las configuraciones guardadas en el navegador por las del default.
 */
export function initDefaultSettings() {
  console.warn("settings-logic.js> Se acaba de reiniciar por defecto todos las configuraciones realizadas en la pagina web. Se requiere de una recarga de la pagina para aplicar los nuevos cambios.")

  localStorage.setItem("staticEffect", "true");
  localStorage.setItem("vignetteEffect", "true");
  localStorage.setItem("backgroundMusic", "false");
  localStorage.setItem("mouseClicks", "true");
  localStorage.setItem("readableFont", "false");
  localStorage.setItem("theme", "simple-purple");
  localStorage.setItem("settingsInitialized", "true");
}

/**
 * Devuelve un booleano basado en una configuración guardada.
 * @param {keyof SETTINGS_MAP} settingKey - La clave de la configuración (ej: 'staticEffect', 'vignetteEffect').
 * @returns {boolean}
 */
export function getSetting(settings: string): boolean {
  const setting = localStorage.getItem(settings) === "true";
  return setting
}

document.addEventListener('DOMContentLoaded', initializeSettings);