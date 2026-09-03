import { cLog } from "../utils/clog";
const SETTINGS_VERSION = "3";

export interface Settings {
  staticEffect: boolean
  vignetteEffect: boolean
  backgroundMusic: boolean
  soundsEffects: boolean
  readableFont: boolean
  animatedBg: boolean
  theme: string
  language: string
}

export const DEFAULT_SETTINGS: Settings = {
  staticEffect: false,
  vignetteEffect: false,
  backgroundMusic: false,
  soundsEffects: false,
  readableFont: false,
  animatedBg: false,
  theme: "simple-purple",
  language: "en"
};

let currentSettings: Settings = { ...DEFAULT_SETTINGS };

function _loadStaticEffect() {
  const bgDiv = document.createElement("div");
  bgDiv.className = "static";
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

  cLog("DEBUG", "Settings Logic", `Version de settings local: ${savedVersion}v`);
  cLog("DEBUG", "Settings Logic", `Version de settings Nekoweb: ${SETTINGS_VERSION}v`);

  if (savedVersion === SETTINGS_VERSION) {
    cLog("INFO", "Settings Logic", "Las versiones son las mismas, deben de ser compatibles, no es necesario realizar una actualización.");
    return false;
  }
  else {
    cLog("ADVERTENCIA", "Settings Logic", "Las versiones no coinciden, es necesario reiniciar para estar actualizado.");
    initDefaultSettings();
    localStorage.setItem("settingsVersion", SETTINGS_VERSION);
    return true;
  }
}

/**
 * Carga y aplica todas las configuraciones. Se ejecuta una sola vez cuando la pagina arranca.
 * @returns `true` si todo se inicializo correctamente.
 * `false` si la version de settings esta vieja y ya se disparo un reload (en ese caso, no hay que seguir cargando nada más).
 */
export function initSettings(): boolean {
  cLog("INFO", "Settings Logic", "Inicializando settings.");

  const outdated = _checkVersion();
  if (outdated) return false;

  currentSettings = _loadFromStorage();

  cLog("DEBUG", "Settings Logic", JSON.stringify(currentSettings));

  _loadTheme();
  if (currentSettings.staticEffect) _loadStaticEffect();
  if (currentSettings.readableFont) document.documentElement.classList.add("readable-font");
  if (!currentSettings.animatedBg) {
    const t = document.querySelector(".theme-bg") as HTMLElement;
    t.style.animation = "none";
  }

  return true;
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
