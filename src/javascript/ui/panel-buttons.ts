/* 
 * panel-buttons.js
 * ----------------
 * Encargado de manejar la lógica de los botones de los paneles, minimizar o cerrar paneles.
 * También encargado en automáticamente mimetizar ciertos paneles que tengan: { "data-default": "closed" }
*/

document.addEventListener("click", (event) => {
  if (event.target === null) return;
  if (!(event.target instanceof HTMLElement)) return

  const btn = event.target.closest("[data-panel-action]");
  if (!btn) return;
  if (!(btn instanceof HTMLElement)) return

  const panel = btn.closest(".panel");
  if (!panel) return;

  const action = btn.dataset.panelAction;

  if (action === "minimize") {
    const content = panel.querySelector(".panel-content");
    if (!content) return;

    content.classList.toggle("collapsed");

    const isCollapsed = content.classList.contains("collapsed");
    btn.textContent = isCollapsed ? "▲" : "▼";
  }

  if (action === "close") {
    panel.remove();
  }
});

/**
 * Añade funcionalidades a los botones de los paneles.
 */
export function initPanel() {
  document.querySelectorAll(".panel[data-default='closed']").forEach(panel => {
    const content = panel.querySelector(".panel-content");
    const btn = panel.querySelector("[data-panel-action='minimize']");

    if (content) content.classList.add("collapsed");
    if (btn) btn.textContent = "▲";
  });
}