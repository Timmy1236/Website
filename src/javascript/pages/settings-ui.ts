/*
  settings-ui.js
  --------------
  - Es el que controla el UI y guardar las configuraciones en el LocalStorage
*/

import { SETTINGS_MAP, initDefaultSettings } from "../core/settings-logic.js";

export function loadSettings() {
  for (const [key, id] of Object.entries(SETTINGS_MAP)) {
    const el = document.getElementById(id);

    if (!el) continue;

    if (el instanceof HTMLInputElement) {
      el.checked = localStorage.getItem(key) === "true";
    } else if (el instanceof HTMLSelectElement) {
      const savedTheme = localStorage.getItem("theme") ?? "simple-purple";
      el.value = savedTheme;
    }
  }
}

export function confirmSettings() {
  for (const [key, id] of Object.entries(SETTINGS_MAP)) {
    const el = document.getElementById(id);
    if (!el) continue;

    if (el instanceof HTMLInputElement) {
      localStorage.setItem(key, el.checked ? "true" : "false");
    } else if (el instanceof HTMLSelectElement) {
      const value = el.value;
      localStorage.setItem("theme", value);
    }
  }
  location.reload();
}

export function restartSettings() {
  if (confirm("Are you sure you want to reset the settings?") == true) {
    initDefaultSettings();
    window.location.reload();
  }
}