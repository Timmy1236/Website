/*
 * settings-logic.ts
 * -----------------
 * Encargado de la lógica de settings, establecer, cargar y modificar datos en LocalStorage.
*/
const SETTINGS_VERSION = "2";

export type SettingKey = | "staticEffect" | "vignetteEffect" | "backgroundMusic" | "soundsEffects" | "readableFont" | "theme";
export const SETTING_KEYS: SettingKey[] = [
  "staticEffect",
  "vignetteEffect",
  "backgroundMusic",
  "soundsEffects",
  "readableFont",
  "theme",
];

export const DEFAULT_SETTINGS: Record<SettingKey, string> = {
  staticEffect: "true",
  vignetteEffect: "true",
  backgroundMusic: "false",
  soundsEffects: "true",
  readableFont: "false",
  theme: "simple-purple",
};

// === Carga el efecto de ruido/estática ===
function loadNoiseEffect() {
  const bgDiv = document.createElement('div');
  bgDiv.className = 'bg';
  bgDiv.id = 'background';
  document.body.prepend(bgDiv);
};

/**
 * Añade los atributos de 'theme' y 'color' al documento sacados del LocalStorage.
 */
function loadTheme() {
  const theme = getMapSetting("theme") || "simple-purple";
  const themeArray = theme.split("-")

  document.documentElement.setAttribute("data-theme", themeArray[0]);
  document.documentElement.setAttribute("data-color", themeArray[1]);
}

/**
 * Checkeamos si el navegador del usuario tiene guardado una variable "settingsVersion" la misma version que tiene el script settings-logic, en caso que no lo tenga, forzamos un initDefaultSettings por las dudas, solamente actualiza la version de settings cuando se hacen cambios grandes y que puede romperse completamente.
 * @see {@link initDefaultSettings}
 * @see {@link SETTINGS_VERSION}
 */
function checkVersion() {
  const savedVersion = localStorage.getItem("settingsVersion");
  console.log("%csettings-logic" + "%c Realizando un checkeo de versiones...\nVersion settings del usuario: " + savedVersion + "\nVersion settings de la pagina: " + SETTINGS_VERSION, "color: #87F3A9; background: #282A35;", "color: white")

  if (savedVersion === SETTINGS_VERSION) return;

  console.warn("settings-logic.js> ¡Las versiones no coinciden, se requiere forzadamente realizar una restauración por defecto en los settings para evitar posibles bugs criticos!")

  initDefaultSettings();
  localStorage.setItem("settingsVersion", SETTINGS_VERSION);
}

/**
 * Carga y aplica todas las configuraciones, se ejecuta cuando la pagina termina de cargar.
 */
export function initializeSettings() {
  checkVersion();

  const enabledStaticEffect = getMapSetting("staticEffect") === "true";
  const enabledReadableFont = getMapSetting("readableFont") === "true";

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
  const defaultSettingsMap = new Map<SettingKey, string>(
    Object.entries(DEFAULT_SETTINGS) as [SettingKey, string][]
  );

  saveSetting("settingsVersion", SETTINGS_VERSION);
  saveSetting("settings", JSON.stringify(Array.from(defaultSettingsMap.entries())));

  console.warn("settings-logic %cSe reiniciaron las configuraciones por defecto. Recargá la página.", "color: #87F3A9; background: #282A35;");
}

// Guarda un Map en el LocalStorage, se guarda como un JSON stringificado.
export function saveMapSettings(map: Map<SettingKey, string>): void {
  localStorage.setItem("settings", JSON.stringify(Array.from(map.entries())));
}

// Obtener una setting del MapSettings usando una key.
export function getMapSetting(key: SettingKey): string | null {
  const settingsString = localStorage.getItem("settings");
  if (!settingsString) return null;

  const settingsMap = new Map<string, string>(JSON.parse(settingsString));
  return settingsMap.get(key) || null;
}

// Obtener una simple setting.
export function getSetting(key: string): string | null {
  return localStorage.getItem(key);
}

// Guardar una simple setting.
export function saveSetting(key: string, value: string): void {
  localStorage.setItem(key, value);
}

document.addEventListener('DOMContentLoaded', initializeSettings);