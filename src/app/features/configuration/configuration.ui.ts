/*
  configuration.ui.ts
  --------------------
  - Controla el UI de la pagina configuration, eso mismo.
*/
import { initDefaultSettings, saveSettings, getSettings, DEFAULT_SETTINGS } from "../../shared/core/settings-logic.js";
import type { Settings } from "../../shared/core/settings-logic.js";
import { getTranslation } from "../../shared/core/i18n.js";

export const draft: Settings = { ...DEFAULT_SETTINGS };

export function refreshDraftFromStorage() {
  Object.assign(draft, getSettings());
}

export function confirmSettings() {
  saveSettings(draft);
  location.reload();
}

export function restartSettings() {
  if (confirm(getTranslation("others.resetSettings")) == true) {
    initDefaultSettings();
  }
}