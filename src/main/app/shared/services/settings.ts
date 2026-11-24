import { initializeWebGLBackground, type WebGLBackground } from "../components/background-shader";
import { cLog } from "../utils/clog";
import { disableAutoplay, enableAutoplay } from "./background-music";
import { loadTranslations } from "./i18n-translate";
import { disableSoundEffects, enableSoundEffects } from "./sound-effects";

// NOTE: Esto subelo cuando haces un cambio super importante y necesitas que los usuarios antiguos de la pagina se vean forzado reiniciar los settings, creo que no es lo mejor que se me ocurrió???? Pero estoy cansado para esto.
const SETTINGS_VERSION = "3";

// NOTE: Las ID de los div's. Los que tienen 'CSS' significa que la ID es importante porque un style es dado por su ID.
const STATIC_EFFECT_ID = "static-effect-div"; // CSS
const VIGNETTE_EFFECT_ID = "vignette-effect-div"; // CSS
const CSS_BACKGROUND_ID = "background-theme";
const WEBGL_BACKGROUND_ID = "background-canvas";

export interface Settings {
  staticEffect: boolean
  vignetteEffect: boolean
  backgroundMusic: boolean
  musicVolume: number
  soundsEffects: boolean
  theme: string
  language: string
  background: string
  sidebarPosition: string
}

export const DEFAULT_SETTINGS: Settings = {
  staticEffect: true,
  vignetteEffect: true,
  backgroundMusic: false,
  musicVolume: 25,
  soundsEffects: false,
  theme: "simple-purple",
  language: "en",
  background: "webgl",
  sidebarPosition: "left"
};

let currentSettings: Settings = { ...DEFAULT_SETTINGS };
let activeBackground: "css" | "webgl" | "none" | null = null;
let webGLBackground: WebGLBackground | null = null;

export function loadSettings(): void {
  currentSettings = _loadSettingsStorage();
  cLog("DEBUG", "Settings", JSON.stringify(currentSettings));
  _applySettings();
}

/** Applies each setting by creating or removing its effect and updating its service. */
function _applySettings(): void {
  _applyTheme(currentSettings.theme);
  _createElement(STATIC_EFFECT_ID, currentSettings.staticEffect);
  _createElement(VIGNETTE_EFFECT_ID, currentSettings.vignetteEffect);
  _applyBackground(currentSettings.background);

  if (currentSettings.backgroundMusic) enableAutoplay();
  else disableAutoplay();

  if (currentSettings.soundsEffects) enableSoundEffects();
  else disableSoundEffects();

  loadTranslations(currentSettings.language);
}

/** Modifica los atributos del documento y el style del CSS aplica los colores. También actualiza los colores del webGL. */
function _applyTheme(themeValue: string): void {
  const [theme, color] = themeValue.split("-");
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.setAttribute("data-color", color);

  webGLBackground?.updateThemeColors();
}

/** Crea un elemento en el documento, si enabled es falso, en vez de crearlo buscara si existe y lo removerá */
function _createElement(id: string, enabled: boolean): void {
  const existingElement = document.getElementById(id);
  if (!enabled) {
    existingElement?.remove();
    return;
  }

  if (existingElement) return;

  const element = document.createElement("div");
  element.id = id;
  document.body.appendChild(element);
}

function _applyBackground(setting: string): void {
  const background = setting === "css" || setting === "webgl" ? setting : "none";
  if (activeBackground === background) return;

  _removeBackground();
  if (background === "css") {
    const element = document.createElement("div");
    element.id = CSS_BACKGROUND_ID;
    document.body.appendChild(element);
  }
  else if (background === "webgl") {
    const canvas = document.createElement("canvas");
    canvas.id = WEBGL_BACKGROUND_ID;
    document.body.appendChild(canvas);

    try {
      webGLBackground = initializeWebGLBackground(canvas);
    }
    catch (error) {
      canvas.remove();
      throw error;
    }
  }

  activeBackground = background;
}

function _removeBackground(): void {
  webGLBackground?.destroy();
  webGLBackground = null;
  document.getElementById(CSS_BACKGROUND_ID)?.remove();
  document.getElementById(WEBGL_BACKGROUND_ID)?.remove();
  activeBackground = null;
}

/** Carga los settings guardado y en caso que algo falte, lo llenara con los del default. */
function _loadSettingsStorage(): Settings {
  const raw = localStorage.getItem("settings");
  if (!raw) return { ...DEFAULT_SETTINGS };

  try {
    const parsed = JSON.parse(raw) as Partial<Settings>;
    return { ...DEFAULT_SETTINGS, ...parsed };
  }
  catch (error) {
    cLog("ERROR", "Settings", "No se pudieron leer los settings guardados, se usarán los valores por defecto.", error);
    return { ...DEFAULT_SETTINGS };
  }
}

function _checkVersion(): boolean {
  const savedVersion = localStorage.getItem("settingsVersion");
  const isSameVersion = savedVersion === SETTINGS_VERSION;

  cLog("DEBUG", "Settings", `Comparación de versión de settings. Local: v${savedVersion} | Deploy: v${SETTINGS_VERSION}`);
  return isSameVersion;
}

export function initSettings(): void {
  if (!_checkVersion()) _writeDefaultSettings();

  loadSettings();
}

export function resetSettings(): void {
  _writeDefaultSettings();
  currentSettings = { ...DEFAULT_SETTINGS };

  _applySettings();
}

function _writeDefaultSettings(): void {
  localStorage.setItem("settings", JSON.stringify(DEFAULT_SETTINGS));
  localStorage.setItem("settingsVersion", SETTINGS_VERSION);
}

export function saveSettings(newSettings: Settings): void {
  currentSettings = { ...newSettings };
  localStorage.setItem("settings", JSON.stringify(currentSettings));

  _applySettings();
}

export function getSettings(): Settings {
  return { ...currentSettings };
}
