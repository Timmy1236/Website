import { showToast } from "../components/toast";
import { cLog } from "../utils/clog";

export interface AchievementDefinition {
  id: string
  name: string
  description: string
  secret?: boolean
  notify?: boolean
  maxProgress?: number
  image?: string
  unlocked?: boolean
  progress?: number
}

/**
 * id            → Clave única.
 * name          → Nombre visible en la lista.
 * description   → Descripción del logro.
 * secret"       → Si es true, el nombre y descripción se ocultaran en la lista.
 * notify        → Si debería o no de mostrar una notification al ser desbloqueado.
 */
export const ACHIEVEMENTS: AchievementDefinition[] = [
  {
    id: "welcome",
    name: "achievements.list.welcome.name",
    description: "achievements.list.welcome.desc",
    image: "./assets/images/pages/achievements/hi.webp"
  },
  {
    id: "oyasumi",
    name: "achievements.list.oyasumi.name",
    description: "achievements.list.oyasumi.desc",
    secret: true,
    notify: true,
    image: "./assets/images/pages/achievements/sleep.webp"
  },
  {
    id: "404",
    name: "achievements.list.404.name",
    description: "achievements.list.404.desc",
    notify: true,
    image: "./assets/images/pages/achievements/error.webp"
  },
  {
    id: "explorer",
    name: "achievements.list.explorer.name",
    description: "achievements.list.explorer.desc",
    notify: true,
    maxProgress: 20,
    image: "./assets/images/pages/achievements/gigglypuff.webp"
  },
  {
    id: "math",
    name: "achievements.list.math.name",
    description: "achievements.list.math.desc",
    notify: true,
    image: "./assets/images/pages/achievements/gambling.webp"
  },
  {
    id: "owner",
    name: "achievements.list.owner.name",
    description: "achievements.list.owner.desc",
    notify: true,
    image: "./assets/images/pages/achievements/owner.webp"
  }
];

/**
 * Devuelve un JSON del LocalStorage.
 */
function getSavedAchievements() {
  try {
    const raw = localStorage.getItem("achievements");
    return raw ? JSON.parse(raw) : {};
  }
  catch (error) {
    cLog("ERROR", "achievements-logic", "Error al leer el LocalStorage, huh?", error);
    return {};
  }
}

/**
 * Guarda el JSON en LocalStorage.
 */
function saveAchievements(data: object) {
  try {
    localStorage.setItem("achievements", JSON.stringify(data));
  }
  catch (error) {
    cLog("ERROR", "achievements-logic", "Error al guardar en el LocalStorage, huh?", error);
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
  saved[id] = { ...saved[id], unlocked: true };
  saveAchievements(saved);

  if (achievement.notify) {
    showToast({ type: "achievement", playSound: true, name: achievement.name, desc: achievement.description });
  }

  cLog("INFO", "Achievements Logic", `Logro: '${id}' desbloqueado!`);
}

/**
 * Suma progreso a un logro incremental y lo desbloquea al alcanzar su máximo.
 */
export function addAchievementProgress(id: string, amount: number): void {
  const achievement = ACHIEVEMENTS.find(a => a.id === id);

  if (!achievement) {
    cLog("ADVERTENCIA", "Achievements Logic", `Logro: '${id}' no existe?`);
    return;
  }

  if (!achievement.maxProgress) {
    cLog("ADVERTENCIA", "Achievements Logic", `Logro: '${id}' no tiene progreso incremental.`);
    return;
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    cLog("ADVERTENCIA", "Achievements Logic", `La cantidad de progreso para '${id}' debe ser mayor que 0.`);
    return;
  }

  if (isUnlocked(id)) return;

  const saved = getSavedAchievements();
  const currentProgress = Number(saved[id]?.progress) || 0;
  const progress = Math.min(currentProgress + amount, achievement.maxProgress);
  saved[id] = { ...saved[id], progress };
  saveAchievements(saved);

  if (progress >= achievement.maxProgress) unlockAchievement(id);
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
    progress: saved[achievement.id]?.progress ?? (saved[achievement.id]?.unlocked ? achievement.maxProgress : 0)
  }));
}
