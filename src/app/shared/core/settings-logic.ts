const SETTINGS_VERSION = "3";

export interface Settings {
  staticEffect: boolean;
  vignetteEffect: boolean;
  backgroundMusic: boolean;
  soundsEffects: boolean;
  readableFont: boolean;
  theme: string;
}

export const DEFAULT_SETTINGS: Settings = {
  staticEffect: true,
  vignetteEffect: true,
  backgroundMusic: false,
  soundsEffects: true,
  readableFont: false,
  theme: "simple-purple"
};

let currentSettings: Settings = { ...DEFAULT_SETTINGS };

function _loadNoiseEffect() {
  const bgDiv = document.createElement('div');
  bgDiv.className = 'bg';
  bgDiv.id = 'background';
  document.body.prepend(bgDiv);
}

/**
 * Añade los atributos de 'theme' y 'color' al documento, usando lo que haya en currentSettings.
 */
function _loadTheme() {
  const [theme, color] = currentSettings.theme.split("-");
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.setAttribute("data-color", color);
}

/**
 * Lee el objeto de settings guardado en LocalStorage y lo devuelve. En caso que este faltando
 * un ajuste, se le agregara la default para llenar.
 */
function _loadFromStorage(): Settings {
  const raw = localStorage.getItem("settings");
  if (!raw) return { ...DEFAULT_SETTINGS };

  return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
}

/**
 * Checkeamos si el navegador del usuario tiene guardada la misma versión de settings que esta en la pagina.
 */
function _checkVersion(): boolean {
  const savedVersion = localStorage.getItem("settingsVersion");

  if (savedVersion === SETTINGS_VERSION) {
    return false;
  } else {
    initDefaultSettings();
    localStorage.setItem("settingsVersion", SETTINGS_VERSION);
    return true;
  }
}

/**
 * Carga y aplica todas las configuraciones. Se ejecuta una sola vez cuando la pagina arranca.
 */
export function initializeSettings() {
  const outdated = _checkVersion();
  if (outdated) return; // NOTE: Esto habría que verlo mejor.

  currentSettings = _loadFromStorage();

  _loadTheme();
  if (currentSettings.staticEffect) _loadNoiseEffect();
  if (currentSettings.readableFont) document.documentElement.classList.add("readable-font");
}

/**
 * Sobrescribe las configuraciones guardadas por las del default, tanto en memoria como en LocalStorage.
 */
export function initDefaultSettings() {
  localStorage.setItem("settings", JSON.stringify(DEFAULT_SETTINGS));
  window.location.reload();
}

export function saveSettings(newSettings: Settings) {
  currentSettings = { ...newSettings };
  localStorage.setItem("settings", JSON.stringify(currentSettings));
}

export function getSettings(): Settings {
  return { ...currentSettings };
}

export function getSetting(key: string): string | null {
  return localStorage.getItem(key);
}

export function saveSetting(key: string, value: string): void {
  localStorage.setItem(key, value);
}