import m from "mithril";
import { cLog } from "./shared/utils/clog.ts";
import { loadTranslations } from "./shared/core/i18n.ts";
import { onFirstVisit } from "./shared/handlers/achievements-trigger.ts";

import { initSettings } from "./shared/core/settings-logic.ts";
import { initAutoplay } from "./shared/core/autoplay.ts";
import { initSoundsEffects } from "./shared/core/sound-effects.ts";
import { initTooltip } from "./shared/handlers/tooltip.ts";
import { initPanelButtons } from "./shared/components/panel-buttons.ts";

// Pages
import Layout from "./shared/components/layout.ts";
import Home from "./features/home/home.page.ts";
import Webmaster from "./features/webmaster/webmaster.page.ts";
import Contact from "./features/contact/contact.page.ts";
import Projects from "./features/projects/projects.page.ts";
import Links from "./features/links/links.page.ts";
import Configuration from "./features/configuration/configuration.page.ts";
import Achievements from "./features/achievements/achievements.page.ts";
import Page404 from "./features/404/404.page.ts";

document.documentElement.classList.add("app-loaded");

async function startApp() {
  console.time("Tiempo de carga");

  try {
    cLog("INFO", "App", "Paso 1/4: Cargando settings...");
    const settingsOk = initSettings();

    if (!settingsOk) {
      cLog("ADVERTENCIA", "App", "Version de settings desactualizada, esperando reload...");
      return;
    }

    cLog("INFO", "App", "Paso 2/4: Cargando efectos de sonido y autoplay...");
    await loadTranslations();
    initSoundsEffects();
    initAutoplay();
    initTooltip();
    initPanelButtons();

    cLog("INFO", "App", "Paso 4/4: Montando rutas...");
    const root = document.getElementById("app");

    if (!root) {
      throw new Error("No se encontró el elemento #app en el HTML.");
    }

    onFirstVisit();

    m.route(root, "/home", {
      "/home": { render: () => m(Layout, m(Home)) },
      "/webmaster": { render: () => m(Layout, m(Webmaster)) },
      "/contact": { render: () => m(Layout, m(Contact)) },
      "/projects": { render: () => m(Layout, m(Projects)) },
      "/links": { render: () => m(Layout, m(Links)) },
      "/achievements": { render: () => m(Layout, m(Achievements)) },
      "/configuration": { render: () => m(Layout, m(Configuration)) },
      "/:404": { render: () => m(Layout, m(Page404)) }
    });

    console.timeEnd("Tiempo de carga");
    cLog("INFO", "App", "Pagina cargada correctamente. ฅ ≽^•⩊•^≼ ฅ");
  }
  catch (error) {
    cLog("ERROR", "App", `Fallo cargando la app: ${error}`);
  }
}

startApp();
