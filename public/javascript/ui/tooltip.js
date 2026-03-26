/* 
  tooltip.js
  ----------
  * Jejeje, se lo robe de otro sitio hace tiempo.
*/

const tooltip = document.createElement("div");
tooltip.id = "tooltip";
document.body.appendChild(tooltip);

let activeElement = null;

document.addEventListener("mouseover", (e) => {
  const el = e.target.closest("[data-tooltip]");
  if (!el) return;

  activeElement = el;
  tooltip.textContent = el.dataset.tooltip;
  tooltip.classList.add("visible");
});

document.addEventListener("mouseout", (e) => {
  if (!activeElement) return;

  if (e.target.closest("[data-tooltip]")) {
    tooltip.classList.remove("visible");
    activeElement = null;
  }
});

document.addEventListener("mousemove", (e) => {
  if (!activeElement) return;

  const offset = 13;

  let x = e.clientX + offset;
  let y = e.clientY + offset;

  const rect = tooltip.getBoundingClientRect();

  if (x + rect.width > window.innerWidth) {
    x = e.clientX - rect.width - offset;
  }

  if (y + rect.height > window.innerHeight) {
    y = e.clientY - rect.height - offset;
  }

  tooltip.style.left = x + "px";
  tooltip.style.top = y + "px";
});