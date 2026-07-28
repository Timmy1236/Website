import { getSetting } from "../../shared/core/settings-logic";

export async function getLatest() {
  const local = getSetting("preferred-language") || "en";
  const url = local === "es" ? "/content/latest/es.json" : "/content/latest/en.json";

  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  return await response.json();
}