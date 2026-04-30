import m from "mithril";

import { i18nReady } from "./shared/core/i18n.ts";
import { onFirstVisit } from "./shared/handlers/achievements-trigger.ts";
import "./shared/core/settings-logic.ts";

import Layout from "./shared/components/layout.ts";

// Globals
import "./shared/ui/autoplay.ts";
import "./shared/ui/sound-effects.ts";
import "./shared/ui/tooltip.ts";
import "./shared/ui/panel-buttons.ts"

// Importando paginas
import Home from "./features/home/home.ts";
import About from "./features/about-me/about-me.ts";
import Projects from "./features/projects/projects.ts";
import Links from "./features/links/links.ts";
import Configuration from "./features/configuration/configuration.ts";
import Achievements from "./features/achievements/achievements.ts";

async function startApp() {
  await i18nReady;
  const root = document.getElementById("app")

  if (root) {
    onFirstVisit();
    m.route(root, "/home", {
      "/home": { render: () => m(Layout, m(Home)) },
      "/about": { render: () => m(Layout, m(About)) },
      "/projects": { render: () => m(Layout, m(Projects)) },
      "/links": { render: () => m(Layout, m(Links)) },
      "/achievements": { render: () => m(Layout, m(Achievements)) },
      "/configuration": { render: () => m(Layout, m(Configuration)) }
    });
  } else {
    console.warn("Hey, estas cargando app.js en una pagina HTML que no cuenta con un div 'app', solo haz esto si quieres cargar ciertos scripts.")
  }
}

startApp();