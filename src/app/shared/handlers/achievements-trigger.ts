/*
 * achievements-trigger.ts
 * -----------------------
 * Este si se encarga de triggear cada logro :P
*/
import { showToast } from "../components/toast.js";
import { unlockAchievement } from "../core/achievements-logic.js";

let typedWord = "";

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  typedWord += key;

  // El máximo de registro son 10 caracteres, esto para evitar que se vaya guardando cada tecla pulsada.
  if (typedWord.length > 10) {
    typedWord = typedWord.slice(-10);
  }

  // NOTE: ¿Esto es lo correcto? Va quedar un if super largo si decido añadir mas de esta madre.
  if (typedWord.includes("omori")) {
    onSecretInput("oyasumi");
    typedWord = "";
  } else if (typedWord.includes("totest")) {
    showToast("Test", "info", "Esto es una prueba de las notificaciones toast.", true);
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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).onPage404 = onPage404;