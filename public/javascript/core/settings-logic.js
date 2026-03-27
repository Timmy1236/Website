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
 * Carga y aplica todas las configuraciones, se ejecuta cuando la pagina termina de cargar.
 */
export function initializeSettings() {
  checkIfFirstTime();

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
export function getSetting(settings) {
  const setting = localStorage.getItem(settings) === "true";
  return setting
}

document.addEventListener('DOMContentLoaded', initializeSettings);