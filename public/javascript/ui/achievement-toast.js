/*
 * achievement-toast.js
 * --------------------
 * Muestra una notificación en la esquina inferior derecha cuando se desbloquea un logro
*/

/**
 * Muestra el toast con el nombre y descripción del logro.
 * @param {string} name
 * @param {string} description
 */
export function showAchievementToast(name, description) {
  var achievementAudio = new Audio('/assets/sounds/sfx/achievement.mp3');

  const toast = document.createElement("div");
  toast.className = "achievement-toast";

  toast.innerHTML = `
    <p class="toast-name">★ ${name}</p>
    <p class="toast-desc">${description}</p>
  `;

  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("visible"), 50);

  achievementAudio.play();

  setTimeout(() => {
    toast.classList.remove("visible");
    toast.classList.add("hiding");

    toast.addEventListener("transitionend", () => toast.remove());
  }, 4000);
}