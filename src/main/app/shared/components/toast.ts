type toastType = "info" | "achievement" | "error" | "affirmative";
const achievementAudio = new Audio("/assets/sounds/sfx/achievement.mp3");
const stack = document.getElementById("toast-container");
import { getTranslation } from "../core/i18n";
import { getSettings } from "../core/settings-logic";

export function showToast(type: toastType, playSound: boolean, name: string, nameIsi18n: boolean, desc: string, descIsi18n: boolean) {
  if (!stack) {
    return console.error("%ctoast%c Error, toast-container no encontrado?", "color: #ff4040; background: #282A35;", "color: white");
  }

  const { soundsEffects } = getSettings();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.dataset.type = type;

  const toastName = document.createElement("p");
  toastName.className = "toast-name";
  toastName.textContent = nameIsi18n ? getTranslation(name) : name;

  const toastDesc = document.createElement("p");
  toastDesc.className = "toast-desc";
  toastDesc.textContent = descIsi18n ? getTranslation(desc) : desc;

  toast.append(toastName, toastDesc);
  stack.appendChild(toast);

  if (playSound && soundsEffects) {
    if (!achievementAudio.paused) {
      achievementAudio.currentTime = 0;
    }
    else {
      achievementAudio.play();
    }
  }

  setTimeout(() => toast.classList.add("visible"), 50);
  setTimeout(() => {
    toast.classList.remove("visible");
    toast.classList.add("hiding");

    toast.addEventListener("transitionend", () => toast.remove());
  }, 5000);
}