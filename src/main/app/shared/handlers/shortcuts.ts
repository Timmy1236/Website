import m from "mithril";
import { handleAudioPause } from "../core/autoplay";

// NOTE: No olvidar actualizar esto si se agregan nuevas paginas :3
const routes: Record<string, string> = {
  1: "/home",
  2: "/projects",
  3: "/webmaster",
  4: "/contact",
  5: "/links",
  6: "/achievements",
  7: "/configuration"
};

export function initShorcuts() {
  window.addEventListener("keyup", (event) => {
  // No molestar si el usuario usa Ctrl+X, Alt+X, o... Meta+X?????
    if (event.ctrlKey || event.altKey || event.metaKey) return;

    // No activar mientras escribe en un input o textarea
    const target = event.target;
    if (target instanceof HTMLElement && target.closest("input, textarea")) return;

    // Shortcuts
    switch (event.key) {
      case "m":
        handleAudioPause();
        break;

      default:
        break;
    }

    // Cambiar de rutas usando las teclas numéricas, las rutas están arriba!
    const route = routes[event.key];
    if (route) m.route.set(route);
  });
}
