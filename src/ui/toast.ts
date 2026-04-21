/*
 * toast.ts
 * --------
 * Muestra un toast (notificación) en la pagina por un tiempo y después desaparece.
*/
type toastType = "info" | "achievement"
const achievementAudio = new Audio('/assets/sounds/sfx/achievement.mp3');
const stack = document.getElementById("toast-container");

export function showToast(name: string, type: toastType, description: string) {
  if (!stack) {
    return console.error("%ctoast%c Error, toast-container no encontrado?", "color: #ff4040; background: #282A35;", "color: white");
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <p class="toast-name">${name}</p>
    <p class="toast-desc">${description}</p>
  `;

  if (type == "achievement") {
    toast.id = "toast-achievement"
  } else if (type == "info") {
    toast.id = "toast-info"
  }

  stack.appendChild(toast);
  achievementAudio.play();

  setTimeout(() => toast.classList.add("visible"), 50);
  setTimeout(() => {
    toast.classList.remove("visible");
    toast.classList.add("hiding");

    toast.addEventListener("transitionend", () => toast.remove());
  }, 5000);
}