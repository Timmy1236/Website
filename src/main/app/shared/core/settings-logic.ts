import { initializeWebGLBackground } from "../components/background-shader";
import { cLog } from "../utils/clog";
const SETTINGS_VERSION = "3";

export interface Settings {
  staticEffect: boolean
  vignetteEffect: boolean
  backgroundMusic: boolean
  soundsEffects: boolean
  readableFont: boolean
  theme: string
  language: string
  background: string
}

export const DEFAULT_SETTINGS: Settings = {
  staticEffect: true,
  vignetteEffect: true,
  backgroundMusic: true,
  soundsEffects: true,
  readableFont: false,
  theme: "simple-purple",
  language: "en",
  background: "webgl"
};

let currentSettings: Settings = { ...DEFAULT_SETTINGS };

function _loadStaticEffect() {
  if (currentSettings.staticEffect) {
    const bgDiv = document.createElement("div");
    bgDiv.className = "static";
    document.body.prepend(bgDiv);
  }
}

function _loadTheme() {
  const [theme, color] = currentSettings.theme.split("-");
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.setAttribute("data-color", color);
}

function _loadBackground() {
  const setting = currentSettings.background;
  const div = document.createElement("div");
  const canvas = document.createElement("canvas");

  switch (setting) {
    case "css":
      div.className = "theme-bg";
      document.body.appendChild(div);
      break;
    case "webgl":
      canvas.id = "background-canvas";
      document.body.appendChild(canvas);
      initializeWebGLBackground();
      break;
    case "none":
    default:
      break;
  }
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
 * Checkeamos si el usuario tiene la misma version local comparado con {@link SETTINGS_VERSION}. En caso que no, se forzara un {@link initDefaultSettings}
 */
function _checkVersion(): boolean {
  const savedVersion = localStorage.getItem("settingsVersion");

  cLog("DEBUG", "Settings Logic", `Versiones: Local: v${savedVersion} | Web: ${SETTINGS_VERSION}`);

  if (savedVersion === SETTINGS_VERSION) {
    cLog("DEBUG", "Settings Logic", "Las versiones son las mismas, deberían de ser compatibles y no haber errores.");
    return true;
  }
  else {
    cLog("ADVERTENCIA", "Settings Logic", "Las versiones no coinciden, es necesario reiniciar para estar actualizado y evitar errores.");
    initDefaultSettings();
    return false;
  }
}

/**
 * Inicializa los settings. Antes de aplicarlos, se hace un checkeo de versiones.
 * @see {@link _checkVersion}
 */
export function initSettings(): boolean {
  if (_checkVersion()) {
    loadSettings();
    return true;
  }
  else {
    return false;
  }
}

async function loadSettings(): Promise<void> {
  currentSettings = _loadFromStorage();

  cLog("DEBUG", "Settings Logic", JSON.stringify(currentSettings));

  await _loadTheme();
  await _loadBackground();
  await _loadStaticEffect();
  if (currentSettings.readableFont) document.documentElement.classList.add("readable-font");
}

export function initDefaultSettings() {
  localStorage.setItem("settings", JSON.stringify(DEFAULT_SETTINGS));
  localStorage.setItem("settingsVersion", SETTINGS_VERSION);
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
