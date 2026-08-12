import { showToast } from "../components/toast";
import { cLog } from "../utils/clog";

/**
 * id            → Clave única.
 * name          → Nombre visible en la lista.
 * description   → Descripción del logro.
 * secret"       → Si es true, el nombre y descripción se ocultaran en la lista.
 * notify        → Si debería o no de mostrar una notification al ser desbloqueado.
 */
export const ACHIEVEMENTS = [
  {
    id: "welcome",
    name: "achievements.list.welcome.name",
    description: "achievements.list.welcome.desc",
    secret: false,
    notify: false
  },
  {
    id: "oyasumi",
    name: "achievements.list.oyasumi.name",
    description: "achievements.list.oyasumi.desc",
    secret: true,
    notify: true
  },
  {
    id: "404",
    name: "achievements.list.404.name",
    description: "achievements.list.404.desc",
    secret: false,
    notify: true
  }
];

const STORAGE_KEY = "achievements";

/**
 * Devuelve un JSON del LocalStorage.
 */
function getSavedAchievements() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  }
  catch (e) {
    console.warn("achievements-logic.js> Error leyendo LocalStorage:", e);
    return {};
  }
}

/**
 * Guarda el JSON en LocalStorage.
 */
function saveAchievements(data: object) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
  catch (e) {
    console.error("achievements-logic.js> Error guardando en LocalStorage:", e);
  }
}

/**
 * Desbloquea un logro por su id, primero verifica que ya no fue desbloqueado antes y después muestra una notificación si el logro lo desea con sus datos.
 */
export function unlockAchievement(id: string): void {
  const achievement = ACHIEVEMENTS.find(a => a.id === id);

  if (!achievement) {
    cLog("ADVERTENCIA", "Achievements Logic", `Logro: '${id}' no existe?`);
    return;
  }

  if (isUnlocked(id)) {
    cLog("INFO", "Achievements Logic", `Logro: '${id}' ya esta desbloqueado.`);
    return;
  }

  const saved = getSavedAchievements();
  saved[id] = { unlocked: true };
  saveAchievements(saved);

  if (achievement.notify) showToast("achievement", true, achievement.name, false, achievement.description, true);
  cLog("INFO", "Achievements Logic", `Logro: '${id}' desbloqueado!`);
}

/**
 * Devuelve un booleano correspondiendo si el logro esta desbloqueado o no.
 */
export function isUnlocked(id: string): boolean {
  const saved = getSavedAchievements();
  return saved[id]?.unlocked === true;
}

/**
 * Devuelve la lista completa de todos los logros en un map
 */
export function getAchievementsList() {
  const saved = getSavedAchievements();

  return ACHIEVEMENTS.map(achievement => ({
    ...achievement,
    unlocked: saved[achievement.id]?.unlocked ?? false
  }));
}
