/*
 * achievements-trigger.ts
 * -----------------------
 * Este si se encarga de triggear cada logro :P
*/
import { showToast } from "../ui/toast.js";
import { unlockAchievement } from "./achievements-logic.js";

let typedWord = "";

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  typedWord += key;

  if (typedWord.length > 10) {
    typedWord = typedWord.slice(-10);
  }

  // NOTE: ¿Esto es lo correcto? Va quedar un if super largo si decido añadir mas de esta madre.
  if (typedWord.includes("omori")) {
    onSecretInput("oyasumi");
    typedWord = "";
  } else if (typedWord.includes("totest")) {
    showToast("Test", "info", "Esto es una prueba de las notificaciones toast.");
    typedWord = "";
  }
});

export function onPage404() {
  unlockAchievement("404");
}

export function onFirstVisit() {
  unlockAchievement("welcome");
}

export function onSecretInput(value: string) {
  unlockAchievement(value);
}

// NOTE: Habrá que exportar ciertas cosas de forma global para que puedan ser usable en html... creo.
(window as any).onPage404 = onPage404;