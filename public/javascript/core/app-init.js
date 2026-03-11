/*
  app-init.js
  -----------
  * Este script esta pensado para ser usado con ESbuild, no cumple ninguna función aparte de eso.
*/

// Scripts
import "./settings-setup.js";
import "./settings-loader.js";
import "./i18n.js";
import "../media/autoplay.js";
import "../media/mouse-click.js";
import "../media/sidebar-image.js";
import "../pages/settings.js";
import "../pages/discord.js";
import "../ui/trans.js";
import "../ui/image-overlay.js";

// SPA
import Layout from "../components/layout.js";
import Home from "../spa/home.js";
import About from "../spa/about-me.js";
import Proyects from "../spa/proyects.js";
import Others from "../spa/others.js";
import Configuration from "../spa/configuration.js";

// Mithril
import m from "mithril";

m.route(document.getElementById("app"), "/home", {
  "/home": { render: () => m(Layout, m(Home)) },
  "/about": { render: () => m(Layout, m(About)) },
  "/proyects": { render: () => m(Layout, m(Proyects)) },
  "/others": { render: () => m(Layout, m(Others)) },
  "/configuration": { render: () => m(Layout, m(Configuration)) }
});
