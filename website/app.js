import Layout from "./components/Layout.js";

import Home from "./SPA/home.js";
import About from "./SPA/about.js";
import Proyects from "./SPA/proyects.js";
import Configuration from "./SPA/configuration.js";

m.route(document.getElementById("app"), "/home", {
  "/home": { render: () => m(Layout, m(Home)) },
  "/about": { render: () => m(Layout, m(About)) },
  "/proyects": { render: () => m(Layout, m(Proyects)) },
  "/configuration": { render: () => m(Layout, m(Configuration)) }
});
