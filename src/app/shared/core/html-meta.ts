/*
 * html-meta.ts
 * ------------
 * Modifica varios elementos meta y otros del HTML principal para que coincida con la app.
*/
import m from "mithril";
import { getSetting } from "./settings-logic";

const translation: Record<string, Record<string, string>> = {
  es: {
    "/home": "Inicio",
    "/webmaster": "Webmaster",
    "/projects": "Proyectos",
    "/links": "Links",
    "/achievements": "Logros",
    "/configuration": "Configuración",
    "/guestbook": "Guestbook",
    "/contact": "Contacto"
  },
  en: {
    "/home": "Home",
    "/webmaster": "Webmaster",
    "/projects": "Project",
    "/links": "Links",
    "/achievements": "Achievements",
    "/configuration": "Configuration",
    "/guestbook": "Guestbook",
    "/contact": "Contact"
  },
}

export function setCurrentPath(path: m.Route) {
  const current = path.get();
  _setTitle(current);
}

function _setTitle(path: string) {
  const local = getSetting("preferred-language") || "en";
  document.title = translation[local][path] + " - Timmy";
}