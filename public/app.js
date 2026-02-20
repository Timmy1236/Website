import Layout from "./javascript/components/Layout.js";

import Home from "./javascript/spa/home.js";
import About from "./javascript/spa/about-me.js";
import Proyects from "./javascript/spa/proyects.js";
import Configuration from "./javascript/spa/configuration.js";

m.route(document.getElementById("app"), "/home", {
  "/home": { render: () => m(Layout, m(Home)) },
  "/about": { render: () => m(Layout, m(About)) },
  "/proyects": { render: () => m(Layout, m(Proyects)) },
  "/configuration": { render: () => m(Layout, m(Configuration)) }
});
