import { spaNavigate } from "../javascript/ui/trans.js";

function navBtn(label, path) {
  return m("button.div-button.nav-btn", { onclick: () => spaNavigate(path), id: "button" }, label);
}

function externalBtn(label, url) {
  return m("button.div-button", {
    onclick: () => externalNavigate(url)
  }, label);
}

function externalNavigate(url) {
  setTimeout(() => {
    window.location.href = url;
  }, 75);
}


export default {
  view: () =>
    m("div.sidebar", [
      m("div.content-block.nav-content", [
        m("div.links-container", [
          m("h2.container-title", "Navigation"),
          navBtn("Home", "/home"),
          navBtn("About me", "/about"),
          navBtn("Proyects (WIP)", "/proyects"),
          navBtn("Configuration", "/configuration"),
        ]),

        m(".container-divider"),

        m("div.links-container", [
          m("h2.container-title", "Pages"),
          externalBtn("Sitemap", "./generated/sitemap/index.html"),
          externalBtn("Microblog", "./generated/blog/index.html"),
          externalBtn("Changelog", "./generated/changelog/index.html"),
        ]),

        m(".container-divider"),

        m("div.links-container", [
          m("h2.container-title", "Others"),
          m("a", {
            href: "https://nekoweb.org/follow/timmy.nekoweb.org/",
            style: "width:100%"
          }, m("button.div-button#button", "Follow")),
          externalBtn("RSS", "./generated/feed.xml"),
        ])
      ]),

      /*
      m("div.content-block.nav-content", [
        m("img#pursuer", { src: "./assets/images/pursuer.webp", style: "width:100%" })
      ])
      */

    ])
};
