import { resetSettings, saveSettings, getSettings, DEFAULT_SETTINGS } from "../../shared/services/settings.ts";
import type { Settings } from "../../shared/services/settings.ts";
import { getTranslation } from "../../shared/services/i18n-translate.ts";

export const draft: Settings = { ...DEFAULT_SETTINGS };

export function refreshDraftFromStorage() {
  Object.assign(draft, getSettings());
}

export function confirmSettings() {
  saveSettings(draft);
}

export function restartSettings() {
  if (confirm(getTranslation("toast.pages.configuration.reset")) == true) {
    resetSettings();
  }
}
