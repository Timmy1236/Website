import { unlockAchievement } from "../core/achievements-logic.js";

export function onPage404() {
  unlockAchievement("404");
}

export function onVisit() {
  unlockAchievement("welcome");

  const time = new Date().getHours();
  if (time >= 0 && time < 6) {
    unlockAchievement("oyasumi");
  }

  const rnd = Math.floor(Math.random() * (100 + 1));
  if (rnd == 100) {
    unlockAchievement("math");
  }
  console.log(rnd);
}
