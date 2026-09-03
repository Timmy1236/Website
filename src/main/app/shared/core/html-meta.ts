import m from "mithril";
import { getSettings } from "./settings-logic";

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
  }
};

function changePageIcon(newIconUrl: string) {
  const favicon = document.getElementById("favicon") as HTMLLinkElement;

  if (favicon) {
    favicon.href = newIconUrl;
  }
}

export function setCurrentPath(path: m.Route, icon: string) {
  const current = path.get();
  const { language } = getSettings();

  document.title = (translation[language][current] ?? "Website") + " - Timmy";
  document.documentElement.lang = language;
  changePageIcon(`/assets/images/icons/utils/${icon}.png`);
}
