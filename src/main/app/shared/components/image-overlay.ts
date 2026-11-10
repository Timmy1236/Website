import { getTranslation } from "../core/i18n.js";

export interface ImageOverlayDetails {
  image: string
  fullImage?: string
  alt?: string
  title?: string
  description?: string
  link?: string
  linkLabel?: string
  previewWidth?: number
}

/**
 * Construye y muestra el cuadro modal de imagen.
 * Acepta una URL simple para los usos antiguos y un objeto con detalles
 * adicionales para las vistas que necesitan título, descripción o enlace.
 */
export function createImageOverlay(details: ImageOverlayDetails | string, alt = ""): void {
  const data: ImageOverlayDetails = typeof details === "string" ? { image: details, alt } : details;

  // Crear los elementos que forman el cuadro y su contenido.
  const overlay = createOverlayElement();
  overlay.classList.add("is-loading");

  const content = createContent(data);
  const closeButton = createCloseButton();
  const previewFrame = createSectionFrame(
    "image-overlay-section-frame",
    createMainImage(data)
  );
  const infoFrame = createSectionFrame(
    "panel-frame image-overlay-section-frame",
    createInfoPanel(data)
  );

  content.append(previewFrame, infoFrame);

  // Esperar a que cargue la imagen para calcular el tamaño del contenido.
  const image = new Image();
  image.onload = () => {
    setContentHeight(content, data, image);
    showOverlay(overlay);
  };

  image.onerror = () => showOverlay(overlay);
  image.src = data.fullImage ?? data.image;

  // Cerrar el cuadro y limpiar el listener de teclado.
  const dismiss = () => {
    overlay.classList.remove("is-visible");
    overlay.classList.add("is-closing");
    document.removeEventListener("keydown", onKeyDown);
    window.setTimeout(() => overlay.remove(), 150);
  };
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") dismiss();
  };

  // Registrar los eventos de cierre.
  closeButton.addEventListener("click", dismiss);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) dismiss();
  });

  document.addEventListener("keydown", onKeyDown);

  // Insertar el cuadro en la página y enfocar el botón de cierre.
  overlay.append(closeButton, content);
  document.body.appendChild(overlay);
  closeButton.focus();
}

/** Crea el contenedor que agrupa la imagen y el panel de información. */
function createContent(data: ImageOverlayDetails): HTMLDivElement {
  const content = createElement("div", "image-overlay-content");

  if (data.previewWidth !== undefined) {
    content.style.setProperty("--image-overlay-preview-width", `${data.previewWidth}px`);
  }

  return content;
}

/** Calcula la altura del cuadro a partir del tamaño de la imagen y la ventana. */
function setContentHeight(content: HTMLElement, data: ImageOverlayDetails, image: HTMLImageElement): void {
  const availableHeight = window.innerHeight * 0.8 - 48;
  const maxHeight = Math.min(760, availableHeight);
  const previewWidth = Math.min(data.previewWidth ?? 850, window.innerWidth - 48);
  const imageHeight = previewWidth * image.naturalHeight / image.naturalWidth;

  content.style.setProperty("--image-overlay-content-height", `${Math.min(imageHeight, maxHeight)}px`);
}

/** Quita el estado de carga y muestra el cuadro con su transición. */
function showOverlay(overlay: HTMLElement): void {
  overlay.classList.remove("is-loading");
  requestAnimationFrame(() => overlay.classList.add("is-visible"));
}

/** Crea un marco y coloca dentro el elemento indicado. */
function createSectionFrame(className: string, child: HTMLElement): HTMLDivElement {
  const frame = createElement("div", className);
  frame.appendChild(child);

  return frame;
}

/** Crea un elemento HTML y le asigna sus clases. */
function createElement<K extends keyof HTMLElementTagNameMap>(tag: K, className: string): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);
  element.className = className;

  return element;
}

/** Crea el elemento raíz del modal con sus atributos accesibles. */
function createOverlayElement(): HTMLDivElement {
  const overlay = createElement("div", "image-overlay");
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");

  return overlay;
}

/** Crea el botón que cierra el modal. */
function createCloseButton(): HTMLButtonElement {
  const button = createElement("button", "close-btn");
  button.setAttribute("aria-label", "Cerrar");
  button.textContent = "✕";

  return button;
}

/** Crea el área de vista previa de la imagen principal. */
function createMainImage(data: ImageOverlayDetails): HTMLDivElement {
  const wrap = createElement("div", "image-overlay-main-wrap");

  const image = createElement("img", "image-overlay-main");
  image.src = data.fullImage ?? data.image;
  image.alt = data.alt ?? "";
  wrap.appendChild(image);

  return wrap;
}

/** Construye el panel opcional con título, descripción y enlace. */
function createInfoPanel(data: ImageOverlayDetails): HTMLElement {
  const panel = createElement("section", "image-overlay-info-panel panel");

  // Agregar el encabezado solo cuando se proporcionó un título.
  if (data.title) {
    const header = createElement("div", "panel-header");
    const title = document.createElement("h1");
    title.textContent = data.title;

    header.appendChild(title);
    panel.appendChild(header);
  }

  // El contenido se conserva aunque no haya descripción para mantener el panel.
  const content = createElement("div", "panel-content image-overlay-panel");

  if (data.description) {
    const description = document.createElement("p");
    // Las descripciones pueden ser claves de traducción o texto literal.
    description.textContent = getTranslation(data.description) ?? data.description;

    content.appendChild(description);
  }

  panel.appendChild(content);

  if (data.link) {
    panel.appendChild(createLinkAction(data));
  }

  return panel;
}

/** Construye el botón de acción que abre el enlace en otra pestaña. */
function createLinkAction(data: ImageOverlayDetails): HTMLDivElement {
  const actions = createElement("div", "image-overlay-actions");
  const link = createElement("a", "button image-overlay-link");
  const href = data.link;

  if (!href) return actions;

  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = data.linkLabel ?? new URL(href, location.href).hostname;

  actions.appendChild(link);

  return actions;
}
