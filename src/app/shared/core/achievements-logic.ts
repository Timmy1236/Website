/*
 * achievements-logic.ts
 * ---------------------
 * Maneja la lógica de los logros que son guardados en LocalStorage.
 * Pero no esencialmente se encarga en ser el trigger para desbloquear cada logro.
*/
import { showToast } from "../ui/toast";

/**
 * id            → Clave única.
 * "name"        → Nombre visible en la lista.
 * "description" → Descripción del logro.
 * "secret"      → Si es true, el nombre y descripción se ocultaran en la lista.
 * notify        → Si debería o no de mostrar una notification al ser desbloqueado.
 */
export const ACHIEVEMENTS = [
  {
    id: "welcome",
    name: "Bienvenido",
    description: "¿Es tu primera vez aquí?",
    secret: false,
    notify: false
  },
  {
    id: "oyasumi",
    name: "Oyasumi",
    description: "Buenas noches.",
    secret: true,
    notify: true
  },
  {
    id: "404",
    name: "Eh?",
    description: "Llegaste a la página 404, había un link roto?",
    secret: false,
    notify: true
  },
];

const STORAGE_KEY = "achievements";

/**
 * Devuelve un JSON del LocalStorage.
 */
function getSavedAchievements() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.warn("achievements-logic.js> Error leyendo LocalStorage:", e);
    return {};
  }
}

/**
 * Guarda el JSON en LocalStorage.
 */
function saveAchievements(data: Object) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("achievements-logic.js> Error guardando en LocalStorage:", e);
  }
}

/**
 * Desbloquea un logro por su id, primero verifica que ya no fue desbloqueado antes y después muestra una notificación si el logro lo desea con sus datos.
 */
export function unlockAchievement(id: string) {
  const achievement = ACHIEVEMENTS.find(a => a.id === id);

  // Si el logro no existe, ignoramos, si existe pero ya esta desbloqueado, ignoramos.
  if (!achievement) return console.warn(`%cachievements logic%c Logro: "${id}", no existe!`, "color: #FFD700; background: #282A35;", "color: white");
  if (isUnlocked(id)) return;

  const saved = getSavedAchievements();
  saved[id] = { unlocked: true };
  saveAchievements(saved);

  if (achievement.notify) {
    showToast(achievement.name, "achievement", achievement.description);
  }

  console.log(`%cachievements logic%c Logro desbloqueado: "${id}"`, "color: #FFD700; background: #282A35;", "color: white");
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
    unlocked: saved[achievement.id]?.unlocked ?? false,
    date: saved[achievement.id]?.date ?? null
  }));
}