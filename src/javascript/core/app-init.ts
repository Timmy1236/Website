import m from "mithril";

// Core
import "./settings-logic.ts";
import { i18nReady } from "./i18n.ts";
// Media
import "../media/autoplay.ts";
import "../media/mouse-click.ts"; // NOTE: Recordatorio urgente para una mejor revision, hice terrible el porteo.
// Pages
import "../pages/settings-ui.ts";
import "../pages/discord.ts";
// UI
import "../ui/trans.ts";
import "../ui/image-overlay.ts";
import "../ui/tooltip.ts";
import "../ui/panel-buttons.ts"

// SPA
import Layout from "../components/layout.ts";
import Home from "../spa/home.ts";
import About from "../spa/about-me.ts";
import Proyects from "../spa/proyects.ts";
import Links from "../spa/links.ts";
import Configuration from "../spa/configuration.ts";
import Achievements from "../spa/achievements.ts";

async function startApp() {
  await i18nReady;

  if (document.getElementById("app")) {
    m.route(document.getElementById("app")!, "/home", {
      "/home": { render: () => m(Layout, m(Home)) },
      "/about": { render: () => m(Layout, m(About)) },
      "/proyects": { render: () => m(Layout, m(Proyects)) },
      "/links": { render: () => m(Layout, m(Links)) },
      "/achievements": { render: () => m(Layout, m(Achievements)) },
      "/configuration": { render: () => m(Layout, m(Configuration)) }
    });
  } else {
    console.warn("Hey, estas cargando app.js en una pagina HTML que no cuenta con un div 'app', solo haz esto si quieres cargar ciertos scripts.")
  }
}

startApp();