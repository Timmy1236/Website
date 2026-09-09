import { getTranslation } from "../../shared/core/i18n";

let trackingFrame: number | null = null;
let showFrame: number | null = null;
let hideTimer: ReturnType<typeof setTimeout> | null = null;
let currentTarget: HTMLElement | null = null;
let stateVersion = 0;

export interface ButtonSite {
  owner: string
  url: string
  button: string
  preview: string
  note?: string
  tooltip?: string
}

const overlay = document.createElement("div");
overlay.id = "button-overlay";
document.body.appendChild(overlay);

export function showButtonOverlay(site: ButtonSite, el: HTMLElement): void {
  const version = ++stateVersion;

  _cancelTracking();
  _cancelShowFrame();
  _cancelHideTimer();

  currentTarget = el;

  overlay.innerHTML = "";
  overlay.appendChild(_renderOverlayContent(site));
  _updateClipPath();

  _startTracking(el, version);

  showFrame = requestAnimationFrame(() => {
    showFrame = null;

    if (version !== stateVersion || currentTarget !== el || !el.isConnected) return;

    if (!el.matches(":hover")) {
      hideButtonOverlay(el);
      return;
    }

    overlay.classList.add("visible");
  });
}

/**
 * Actualiza continuamente el clip-path mientras el overlay esté visible, para evitar que el botón sufra del blur.
 */
function _startTracking(target: HTMLElement, version: number): void {
  const loop = () => {
    trackingFrame = null;

    if (version !== stateVersion || currentTarget !== target) {
      return;
    }

    // Fallback por si el navegador no entrega el mouseleave esperado.
    if (!target.isConnected || !target.matches(":hover")) {
      hideButtonOverlay(target);
      return;
    }

    _updateClipPath();

    trackingFrame = requestAnimationFrame(loop);
  };

  trackingFrame = requestAnimationFrame(loop);
}

export function hideButtonOverlay(target?: HTMLElement): void {
  if (target && currentTarget !== target) return;

  _hideOverlay();
}

function _hideOverlay(clearImmediately = false): void {
  stateVersion++;
  currentTarget = null;

  _cancelTracking();
  _cancelShowFrame();
  _cancelHideTimer();

  overlay.classList.remove("visible");
  overlay.style.clipPath = "none";

  if (clearImmediately) {
    overlay.innerHTML = "";
    return;
  }

  // Mantiene el contenido durante la transición de opacidad, pero no deja
  // ningún callback pendiente capaz de reactivar el overlay.
  hideTimer = setTimeout(() => {
    overlay.innerHTML = "";
    hideTimer = null;
  }, 300);
}

function _cancelTracking(): void {
  if (trackingFrame === null) return;

  cancelAnimationFrame(trackingFrame);
  trackingFrame = null;
}

function _cancelShowFrame(): void {
  if (showFrame === null) return;

  cancelAnimationFrame(showFrame);
  showFrame = null;
}

function _cancelHideTimer(): void {
  if (hideTimer === null) return;

  clearTimeout(hideTimer);
  hideTimer = null;
}

function _updateClipPath() {
  if (!currentTarget) return;

  const rect = currentTarget.getBoundingClientRect();
  overlay.style.clipPath = `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${rect.top}px, ${rect.left}px ${rect.top}px, ${rect.left}px ${rect.bottom - 8}px, ${rect.right}px ${rect.bottom - 8}px, ${rect.right}px ${rect.top}px, 0% ${rect.top}px)`;
}

/**
 * Crea la estructura interna del overlay.
 */
function _renderOverlayContent(site: ButtonSite): DocumentFragment {
  const fragment = document.createDocumentFragment();

  const noteTranslation = site.note ? getTranslation(site.note) : null;
  const note = noteTranslation ?? site.note;
  const formattedUrl = new URL(site.url);

  const container = document.createElement("div");
  if (note) {
    container.style.display = "flex";
    container.style.gap = "10px";
  }

  // NOTE: No hay manera que por simplemente intentar limpiar innerHTML haya terminado con 300 mil tipos de "createElement" diferentes, fuck.
  // --- PANEL DE LA NOTA ---
  if (note) {
    const notePanel = document.createElement("div");
    notePanel.className = "panel";

    const noteHeader = document.createElement("div");
    noteHeader.className = "panel-header";

    const noteHeaderText = document.createElement("p");
    noteHeaderText.textContent = "Nota";
    noteHeader.appendChild(noteHeaderText);

    const noteContent = document.createElement("div");
    noteContent.className = "panel-content";

    const noteText = document.createElement("p");
    noteText.className = "button-note";
    noteText.textContent = note;
    noteContent.appendChild(noteText);

    notePanel.append(noteHeader, noteContent);
    container.appendChild(notePanel);
  }

  // --- PANEL DE LA PREVIEW ---
  const previewPanel = document.createElement("div");
  previewPanel.className = "panel";

  const previewHeader = document.createElement("div");
  previewHeader.className = "panel-header";

  const previewHeaderText = document.createElement("p");
  previewHeaderText.textContent = formattedUrl.hostname;
  previewHeader.appendChild(previewHeaderText);

  const previewContent = document.createElement("div");
  previewContent.className = "panel-content";

  const screenshotWrapper = document.createElement("div");
  screenshotWrapper.className = "button-screenshot";

  const img = document.createElement("img");
  img.src = site.preview;
  img.alt = `Screenshot de ${site.url}`;

  screenshotWrapper.appendChild(img);
  previewContent.appendChild(screenshotWrapper);

  previewPanel.append(previewHeader, previewContent);
  container.appendChild(previewPanel);

  fragment.appendChild(container);
  return fragment;
}
