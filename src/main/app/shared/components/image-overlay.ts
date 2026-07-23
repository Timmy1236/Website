export function createImageOverlay(src: string, alt = "") {
	const overlay = document.createElement("div");
	overlay.className = "image-overlay";

	const closeButton = document.createElement("button");
	closeButton.className = "close-btn";
	closeButton.setAttribute("aria-label", "Cerrar");
	closeButton.textContent = "✕";

	closeButton.addEventListener("click", () => {
		overlay.remove();
	});

	const img = document.createElement("img");
	img.src = src;
	img.alt = alt;

	overlay.append(closeButton, img);

	// Cerrar al clickear afuera (en el fondo del overlay)
	overlay.addEventListener("click", (e) => {
		if (e.target === overlay) {
			overlay.remove();
		}
	});

	// Cerrar con la tecla ESC
	document.addEventListener("keydown", function escClose(e) {
		if (e.key === "Escape") {
			overlay.remove();
			document.removeEventListener("keydown", escClose);
		}
	});

	document.body.appendChild(overlay);
}