import { initDefaultSettings, saveSettings, getSettings, DEFAULT_SETTINGS } from "../../shared/core/settings-logic.ts";
import type { Settings } from "../../shared/core/settings-logic.ts";
import { getTranslation } from "../../shared/core/i18n.ts";

export const draft: Settings = { ...DEFAULT_SETTINGS };

export function refreshDraftFromStorage() {
  Object.assign(draft, getSettings());
}

export function confirmSettings() {
  saveSettings(draft);
  location.reload();
}

export function restartSettings() {
  if (confirm(getTranslation("toast.pages.configuration.reset")) == true) {
    initDefaultSettings();
  }
}
