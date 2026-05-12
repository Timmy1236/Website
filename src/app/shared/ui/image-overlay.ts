export function createImageOverlay(src: string, alt = "") {
  const overlay = document.createElement("div");

  overlay.className = "image-overlay";
  overlay.innerHTML = `
    <button class="close-btn" aria-label="Cerrar">✕</button>
    <img src="${src}" alt="${alt}">
  `;

  // Cerrar al clickear afuera
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.remove();
    }
  });

  const closeButton = overlay.querySelector(".close-btn");

  // Cerrar botón
  closeButton?.addEventListener("click", () => {
    overlay.remove();
  });

  // Cerrar con ESC
  document.addEventListener("keydown", function escClose(e) {
    if (e.key === "Escape") {
      overlay.remove();
      document.removeEventListener("keydown", escClose);
    }
  });

  document.body.appendChild(overlay);
}