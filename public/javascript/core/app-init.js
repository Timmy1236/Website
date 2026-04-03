import m from "mithril";

// Core
import "./settings-logic.js";
import { i18nReady } from "./i18n.js";
// Media
import "../media/autoplay.js";
import "../media/mouse-click.js";
import "../media/sidebar-image.js";
// Pages
import "../pages/settings-ui.js";
import "../pages/discord.js";
// UI
import "../ui/trans.js";
import "../ui/image-overlay.js";
import "../ui/tooltip.js";
import "../ui/panel-buttons.js"

// SPA
import Layout from "../components/layout.js";
import Home from "../spa/home.js";
import About from "../spa/about-me.js";
import Proyects from "../spa/proyects.js";
import Links from "../spa/links.js";
import Configuration from "../spa/configuration.js";
import Achievements from "../spa/achievements.js";

async function startApp() {
  await i18nReady;

  if (document.getElementById("app")) {
    m.route(document.getElementById("app"), "/home", {
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