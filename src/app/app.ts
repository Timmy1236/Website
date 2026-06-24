import m from "mithril";

// Globals
import { i18nReady } from "./shared/core/i18n.ts";
import { onFirstVisit } from "./shared/handlers/achievements-trigger.ts";
import { initializeSettings } from "./shared/core/settings-logic.ts";
import { initializeAutoplay } from "./shared/core/autoplay.ts";
import { initializeSoundsEffects } from "./shared/core/sound-effects.ts";
import "./shared/components/tooltip.ts";
import "./shared/components/panel-buttons.ts"

// Pages
import Layout from "./shared/components/layout.ts";
import Home from "./features/home/home.page.ts";
import Webmaster from "./features/webmaster/webmaster.page.ts";
import Projects from "./features/projects/projects.page.ts";
import Links from "./features/links/links.page.ts";
import Configuration from "./features/configuration/configuration.page.ts";
import Achievements from "./features/achievements/achievements.page.ts";
import GuestbookPage from "./features/guestbook/guestbook.page.ts";

async function startApp() {
  document.documentElement.classList.add("app-loaded");

  initializeSettings();
  initializeSoundsEffects();
  initializeAutoplay();
  await i18nReady;

  const root = document.getElementById("app")

  if (root) {
    onFirstVisit();
    m.route(root, "/home", {
      "/home": { render: () => m(Layout, m(Home)) },
      "/webmaster": { render: () => m(Layout, m(Webmaster)) },
      "/projects": { render: () => m(Layout, m(Projects)) },
      "/links": { render: () => m(Layout, m(Links)) },
      "/achievements": { render: () => m(Layout, m(Achievements)) },
      "/configuration": { render: () => m(Layout, m(Configuration)) },
      "/guestbook": { render: () => m(Layout, m(GuestbookPage)) }
    });
  } else {
    console.error("Dude, estas cargando el script app.js en un HTML que no deberías.")
  }
}

startApp();