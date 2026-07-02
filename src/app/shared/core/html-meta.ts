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
  const local = getSetting("preferred-language") || "en";

  document.title = (translation[local][current] ?? "Website") + " - Timmy";
  document.documentElement.lang = local;
}