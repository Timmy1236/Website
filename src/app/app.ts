import m from "mithril";

// Shared
import { i18nReady } from "./shared/core/i18n.ts";
import { onFirstVisit } from "./shared/handlers/achievements-trigger.ts";
import "./shared/core/settings-logic.ts";
import Layout from "./shared/components/layout.ts";
import "./shared/ui/autoplay.ts";
import "./shared/ui/sound-effects.ts";
import "./shared/ui/tooltip.ts";
import "./shared/ui/panel-buttons.ts"

// Pages
import Home from "./features/home/home.page.ts";
import About from "./features/about-me/about-me.page.ts";
import Projects from "./features/projects/projects.page.ts";
import Links from "./features/links/links.page.ts";
import Configuration from "./features/configuration/configuration.page.ts";
import Achievements from "./features/achievements/achievements.page.ts";
import GuestbookPage from "./features/guestbook/guestbook.page.ts";
import ContactPage from "./features/contact/contact.page.ts"

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
      "/configuration": { render: () => m(Layout, m(Configuration)) },
      "/guestbook": { render: () => m(Layout, m(GuestbookPage)) },
      "/contact": { render: () => m(Layout, m(ContactPage)) }
    });
  } else {
    console.warn("Hey, estas cargando app.js en una pagina HTML que no cuenta con un div 'app', solo haz esto si quieres cargar ciertos scripts.")
  }
}

startApp();