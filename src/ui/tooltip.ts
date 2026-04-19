/* 
  tooltip.ts
  ----------
*/

const tooltip = document.createElement("div");
tooltip.id = "tooltip";
document.body.appendChild(tooltip);

let activeElement: Element | null;

document.addEventListener("mouseover", (event) => {
  if (event.target === null) return;
  if (!(event.target instanceof Element)) return

  const el = event.target.closest("[data-tooltip]");
  if (!(el instanceof HTMLElement)) return;

  activeElement = el;
  tooltip.textContent = el.dataset.tooltip ?? null;
  tooltip.classList.add("visible");
});

document.addEventListener("mouseout", (event) => {
  if (!activeElement) return;
  if (event.target === null) return;
  if (!(event.target instanceof Element)) return

  if (event.target.closest("[data-tooltip]")) {
    tooltip.classList.remove("visible");
    activeElement = null;
  }
});

document.addEventListener("mousemove", (event) => {
  if (!activeElement) return;

  const offset = 13;

  let x = event.clientX + offset;
  let y = event.clientY + offset;

  const rect = tooltip.getBoundingClientRect();

  if (x + rect.width > window.innerWidth) {
    x = event.clientX - rect.width - offset;
  }

  if (y + rect.height > window.innerHeight) {
    y = event.clientY - rect.height - offset;
  }

  tooltip.style.left = x + "px";
  tooltip.style.top = y + "px";
});