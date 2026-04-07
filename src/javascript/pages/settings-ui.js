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

    if (id === "theme-select") continue;

    el.checked = localStorage.getItem(key) === "true";
  }

  // Si "el" es theme:
  const themeSelect = document.getElementById("theme-select");
  if (themeSelect) {
    const savedTheme = localStorage.getItem("theme");
    themeSelect.value = savedTheme;
  }
}

export function confirmSettings() {
  for (const [key, id] of Object.entries(SETTINGS_MAP)) {
    const el = document.getElementById(id);
    if (!el) continue;

    if (id === "theme-select") continue;

    localStorage.setItem(key, el.checked);
  }

  // Si "el" es theme:
  const themeSelect = document.getElementById("theme-select");
  if (themeSelect) {
    const value = themeSelect.value;
    localStorage.setItem("theme", value);
  }

  location.reload();
}

export function restartSettings() {
  if (confirm("Are you sure you want to reset the settings?") == true) {
    initDefaultSettings();
    window.location.reload();
  }
}