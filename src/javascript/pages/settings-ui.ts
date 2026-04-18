/*
  settings-ui.ts
  --------------
  - Es el que controla el UI y guardar las configuraciones en el LocalStorage
*/
import { SETTING_KEYS, SettingKey } from "../core/settings-logic.js";
import { initDefaultSettings, saveMapSettings, getMapSetting } from "../core/settings-logic.js";
export let settingsMap = new Map<SettingKey, string>();
let initialized = false;

export function initMapFromStorage() {
  if (initialized) return;

  for (const key of SETTING_KEYS) {
    settingsMap.set(key, getMapSetting(key) ?? "false");
  }

  initialized = true;
}

export function confirmSettings() {
  saveMapSettings(settingsMap);
  location.reload();
}

export function restartSettings() {
  if (confirm("Are you sure you want to reset the settings?") == true) {
    initDefaultSettings();
    window.location.reload();
  }
}