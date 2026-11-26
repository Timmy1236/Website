import { getSettings } from "../../shared/services/settings.ts";
import type { Latest } from "./home.page.ts";

let latestPromise: Promise<Latest> | null = null;

export function getLatest(): Promise<Latest> {
  if (!latestPromise) {
    const { language } = getSettings();
    latestPromise = fetch(`/library/latest/${language}.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .catch((err) => {
        latestPromise = null;
        throw err;
      });
  }
  return latestPromise;
}
