/*
 * button-overlay.ts
 * -----------------
 * Crea un overlay con blur cuando un botón de links está en hover.
*/
import { getTranslation } from "../../shared/core/i18n";

let rafId: number | null = null;
let hideTimer: ReturnType<typeof setTimeout> | null = null;
let currentTarget: HTMLElement | null = null;

export interface ButtonSite {
  url: string;
  button: string;
  preview: string;
  note?: string;
}

const overlay = document.createElement("div");
overlay.id = "button-overlay";
document.body.appendChild(overlay);

export function showButtonOverlay(site: ButtonSite, el: HTMLElement): void {
  currentTarget = el;

  if (hideTimer !== null) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }

  overlay.innerHTML = _buildOverlay(site);

  startTracking();

  requestAnimationFrame(() => {
    overlay.classList.add("visible");
  });
}

/**
 * Actualiza la posición clip path para que este igual al botón que esta en hover.
 */
function startTracking() {
  if (rafId !== null) cancelAnimationFrame(rafId);

  const duration = 500;
  const start = performance.now();

  const loop = () => {
    _updateClipPath();

    if (performance.now() - start < duration) {
      rafId = requestAnimationFrame(loop);
    } else {
      rafId = null;
    }
  };

  rafId = requestAnimationFrame(loop);
}

export function hideButtonOverlay(): void {
  overlay.classList.remove("visible");

  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  overlay.style.clipPath = "none";
  currentTarget = null;

  hideTimer = setTimeout(() => {
    overlay.innerHTML = "";
    hideTimer = null;
  }, 300);
}

/**
 * mano, no se, magia negra, yo que se?
 */
function _updateClipPath() {
  if (!currentTarget) return;

  const rect = currentTarget.getBoundingClientRect();

  const top = rect.top;
  const left = rect.left;
  const right = rect.right;
  const bottom = rect.bottom - 8; // Hack estupido, por alguna razón hay un padding debajo de los botones y la única solución es restarle 8 pixeles.

  // Genuinamente ya no se que hace esta mierda.
  overlay.style.clipPath = `
    polygon(
      0% 0%,
      100% 0%,
      100% 100%,
      0% 100%,

      0% ${top}px,
      ${left}px ${top}px,
      ${left}px ${bottom}px,
      ${right}px ${bottom}px,
      ${right}px ${top}px,
      0% ${top}px
    )
  `;
}

/**
 * Retorna código HTML ya construido para el overlay con los datos que trae el botón.
 */
function _buildOverlay(site: ButtonSite): string {
  const note = (site.note ? getTranslation(site.note) : null) ?? site.note;

  if (note) {
    return `
  <div style="display:flex;gap:10px;">
    <div class="panel">
      <div class="panel-header">
        <p>Nota</p>
      </div>
      <div class="panel-content">
        <p class="button-note">${note ? note : ""}</p>
      </div>
    </div>
    <div class="panel">
      <div class="panel-header">
        <p>${site.url.slice(8, -1)}</p>
      </div>
      <div class="panel-content">
        <div class="button-screenshot">
          <img src="${site.preview}" alt="Screenshot de ${site.url}">
        </div>
      </div>
    </div>
  </div>
  `;
  } else {
    return `
    <div class="panel">
      <div class="panel-header">
        <p>${site.url.slice(8, -1)}</p>
      </div>
      <div class="panel-content">
        <div class="button-screenshot">
          <img src="${site.preview}" alt="Screenshot de ${site.url}">
        </div>
      </div>
    </div>
  </div>
  `;
  }
}