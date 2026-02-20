import { spaNavigate } from "../ui/trans.js";
import { buttonSounds } from "../media/mouse-click.js";

function navBtn(label, path) {
  return m("button.div-button.nav-btn", { onclick: () => spaNavigate(path), onmousedown: () => buttonSounds("click"), onmouseup: () => buttonSounds("released"), onmouseover: () => buttonSounds("hover") }, label);
}

function externalBtn(label, url) {
  return m("button.div-button", { onclick: () => externalNavigate(url), onmousedown: () => buttonSounds("click"), onmouseup: () => buttonSounds("released"), onmouseover: () => buttonSounds("hover") }, label);
}

function externalNavigate(url) {
  setTimeout(() => { window.location.href = url; }, 150); // Un mini delay extra :3
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
          externalBtn("Sitemap", "./content/sitemap/index.html"),
          externalBtn("Microblog", "./content/blog/index.html"),
          externalBtn("Changelog", "./content/changelog/index.html"),
        ]),

        m(".container-divider"),

        m("div.links-container", [
          m("h2.container-title", "Others"),
          m("a", {
            href: "https://nekoweb.org/follow/timmy.nekoweb.org/",
            style: "width:100%"
          }, m("button.div-button#button", "Follow")),
          externalBtn("RSS", "./content/feed.xml"),
        ])
      ]),
    ])
};
