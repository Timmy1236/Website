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