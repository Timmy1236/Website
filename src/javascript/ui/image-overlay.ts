let imageOverlayInitialized = false;

export function initImageOverlay() {
  if (imageOverlayInitialized) return;
  imageOverlayInitialized = true;

  document.addEventListener("click", function (event) {
    if (event.target === null) return;
    if (!(event.target instanceof HTMLElement)) return
    const container = event.target.closest(".image-preview");
    if (!container) return;

    const img = container.querySelector("img");
    if (!img) return;

    createImageOverlay(img.src, img.alt);
  });
}

function createImageOverlay(src: string, alt = "") {
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

  // Cerrar botón
  overlay.querySelector(".close-btn")!.addEventListener("click", () => {
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
