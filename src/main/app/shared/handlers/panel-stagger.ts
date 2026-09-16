export function applyPanelStagger(): void {
  const panels = document.querySelectorAll<HTMLElement>(".content .panel-frame");

  panels.forEach((panel, index) => {
    panel.style.setProperty("--panel-index", String(index));
  });
}
