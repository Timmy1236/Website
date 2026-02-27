let isTransitioning = false;

export function spaNavigate(path) {
  if (isTransitioning) return;

  const mainColumn = document.querySelector(".content-column");
  if (!mainColumn) {
    m.route.set(path);
    return;
  }

  window.changeImage();

  isTransitioning = true;

  // === SALIDA (SPA) ===
  mainColumn.classList.add("exit");

  setTimeout(() => {
    m.route.set(path);

    // Esperamos a que Mithril renderice
    requestAnimationFrame(() => {
      // === ENTRADA ===
      mainColumn.classList.remove("exit");
      isTransitioning = false;
    });
  }, 350);
}
