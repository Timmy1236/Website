/* 
 * panel-buttons.js
 * ----------------
 * Encargado de manejar la lógica de los botones de los paneles, minimizar o cerrar paneles.
 * También encargado en automáticamente mimetizar ciertos paneles que tengan: { "data-default": "closed" }
*/

document.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLElement)) return;

  const btn = event.target.closest("[data-panel-action]");
  if (!(btn instanceof HTMLElement)) return;

  const panel = btn.closest(".panel");
  if (!(panel instanceof HTMLElement)) return;

  const frame = panel.closest(".panel-frame");
  const action = btn.dataset.panelAction;

  if (action === "minimize") {
    const content = panel.querySelector(".panel-content");
    if (!(content instanceof HTMLElement)) return;

    content.classList.toggle("collapsed");

    const isCollapsed = content.classList.contains("collapsed");

    frame?.classList.toggle("collapsed", isCollapsed);
    btn.textContent = isCollapsed ? "▲" : "▼";
  }

  if (action === "close") {
    const target = frame || panel;
    const grid = target.closest(".panel-grid-2");

    target.remove();

    if (grid instanceof HTMLElement && grid.children.length === 0) {
      grid.remove();
    }
  }
});

export function initPanel() {
  document.querySelectorAll(".panel[data-default='closed']").forEach(panel => {
    if (!(panel instanceof HTMLElement)) return;

    const content = panel.querySelector(".panel-content");
    const btn = panel.querySelector("[data-panel-action='minimize']");
    const frame = panel.closest(".panel-frame");

    if (content instanceof HTMLElement) {
      content.classList.add("collapsed");
    }

    frame?.classList.add("collapsed");

    if (btn instanceof HTMLElement) {
      btn.textContent = "▲";
    }
  });
}