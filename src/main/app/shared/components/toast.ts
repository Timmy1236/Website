import { getTranslation } from "../core/i18n";
import { getSettings } from "../core/settings-logic";
import { cLog } from "../utils/clog";

type ToastType = "info" | "achievement" | "error" | "affirmative";
const achievementAudio = new Audio("/assets/sounds/sfx/achievement.mp3");

export interface ToastOptions {
  type: ToastType
  playSound?: boolean
  name: string
  desc: string
}

export function initToast(): void {
  const test = document.createElement("div");
  test.id = "toast-container";
  document.body.append(test);
}

export function showToast(options: ToastOptions): void {
  const stack = document.getElementById("toast-container");

  if (!stack) {
    return cLog("ERROR", "toast", "div: 'toast-container' no encontrado?");
  }

  const { soundsEffects } = getSettings();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.dataset.type = options.type;

  const toastName = document.createElement("p");
  toastName.className = "toast-name";
  toastName.textContent = getTranslation(options.name);

  const toastDesc = document.createElement("p");
  toastDesc.className = "toast-desc";
  toastDesc.textContent = getTranslation(options.desc);

  toast.append(toastName, toastDesc);
  stack.appendChild(toast);

  if (options.playSound && soundsEffects) {
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
