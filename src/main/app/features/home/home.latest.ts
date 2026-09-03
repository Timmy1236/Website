import { getSettings } from "../../shared/core/settings-logic";

export async function getLatest() {
  const { language } = getSettings();
  const url = `/content/latest/${language}.json`;

  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  return await response.json();
}
