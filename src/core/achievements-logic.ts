/*
 * achievements-logic.js
 * ----------------------
 * Maneja la lógica de logros de la página.
 * Guarda en LocalStorage cuáles están desbloqueados.
*/

import { showAchievementToast } from "../ui/achievement-toast";

// === DEFINICIÓN DE LOGROS ===
// "id"          → clave única.
// "name"        → nombre visible
// "description" → descripción del logro
// "secret"      → si es true, no se muestra la descripción hasta desbloquearlo
export const ACHIEVEMENTS = [
  {
    id: "explorer_404",
    name: "¿A dónde vas?",
    description: "Llegaste a la página 404.",
    secret: false
  },
];

const STORAGE_KEY = "achievements";

/**
 * Devuelve el objeto completo de logros guardado en LocalStorage.
 * Si no hay nada guardado, devuelve un objeto vacío.
 * @returns {Object}
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
 * Guarda el objeto de logros en LocalStorage.
 * @param {Object} data
 */
function saveAchievements(data: Object) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn("achievements-logic.js> Error guardando en LocalStorage:", e);
  }
}

/**
 * Desbloquea un logro por su ID.
 * Si ya estaba desbloqueado, no hace nada.
 * @param {string} id - El ID del logro (ej: "explorer_404")
 */
export function unlockAchievement(id: string) {
  const achievement = ACHIEVEMENTS.find(a => a.id === id); // find() devuelve el objeto o undefined
  if (!achievement) {
    console.warn(`achievements-logic.js> El logro "${id}" no existe.`);
    return;
  }

  const saved = getSavedAchievements();
  if (saved[id]?.unlocked) return;

  saved[id] = {
    unlocked: true,
    date: new Date().toLocaleDateString("es-ES")
  };

  saveAchievements(saved);

  // Mostramos el toast. Si es secreto, no revelamos la descripción todavía.
  const desc = achievement.secret ? "Logro secreto desbloqueado." : achievement.description;
  showAchievementToast(achievement.name, desc);

  console.log(`%cachievements-logic.js>%c Logro desbloqueado: "${id}"`, "color: #FFD700; background: #282A35;", "color: white");
}

/**
 * Verifica si un logro está desbloqueado.
 * @param {string} id
 * @returns {boolean}
 */
export function isUnlocked(id: string) {
  const saved = getSavedAchievements();
  return saved[id]?.unlocked === true;
}

/**
 * Devuelve la lista completa de logros, combinando la definición
 * con el estado guardado en LocalStorage.
 *
 * Cada logro en la lista tiene:
 *   - Todo lo de ACHIEVEMENTS (id, name, description, secret)
 *   - unlocked: boolean
 *   - date: string o null
 *
 * @returns {Array}
 */
export function getAchievementsList() {
  const saved = getSavedAchievements();

  return ACHIEVEMENTS.map(achievement => {
    const savedData = saved[achievement.id];

    return {
      ...achievement,
      unlocked: savedData?.unlocked ?? false,
      date: savedData?.date ?? null
    };
  });
}