import Layout from "./javascript/components/layout.js";

// SPA
import Home from "./javascript/spa/home.js";
import About from "./javascript/spa/about-me.js";
import Proyects from "./javascript/spa/proyects.js";
import Others from "./javascript/spa/others.js";
import Configuration from "./javascript/spa/configuration.js";

// Scripts | Sabes como limpie los scripts del HTML? Ahora todos son importados desde app.js.
import "./javascript/core/settings-setup.js";
import "./javascript/core/settings-loader.js";
import "./javascript/core/i18n.js";
import "./javascript/media/autoplay.js";
import "./javascript/media/mouse-click.js";
import "./javascript/media/sidebar-image.js";
import "./javascript/pages/settings.js";
import "./javascript/pages/discord.js";
import "./javascript/ui/trans.js";
import "./javascript/ui/image-overlay.js";

m.route(document.getElementById("app"), "/home", {
  "/home": { render: () => m(Layout, m(Home)) },
  "/about": { render: () => m(Layout, m(About)) },
  "/proyects": { render: () => m(Layout, m(Proyects)) },
  "/others": { render: () => m(Layout, m(Others)) },
  "/configuration": { render: () => m(Layout, m(Configuration)) }
});
