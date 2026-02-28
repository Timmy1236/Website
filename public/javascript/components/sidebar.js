import m from "mithril";
import { spaNavigate } from "../ui/trans.js";
import { buttonSounds } from "../media/mouse-click.js";

function navBtn(label, path) {
  return m("button.sidebar-buttons", { onclick: () => spaNavigate(path), onmousedown: () => buttonSounds("click"), onmouseup: () => buttonSounds("released"), onmouseover: () => buttonSounds("hover") }, label);
}

function externalBtn(label, url) {
  return m("button.sidebar-buttons", { onclick: () => externalNavigate(url), onmousedown: () => buttonSounds("click"), onmouseup: () => buttonSounds("released"), onmouseover: () => buttonSounds("hover") }, label);
}

function externalNavigate(url) {
  setTimeout(() => { window.location.href = url; }, 150); // Un mini delay extra :3
}

export default {
  view: () =>
    m("div.sidebar", [
      m(".panel.nav-content", [
        m(".sidebar-links-container", [
          m("h2.sidebar-title", "Navigation"),
          navBtn("Home", "/home"),
          navBtn("About me", "/about"),
          navBtn("Proyects (WIP)", "/proyects"),
          navBtn("Others (TEMP)", "/others"),
          navBtn("Configuration", "/configuration"),
        ]),

        m(".spacing-lines", [
          m(".spacing-start"),
          m(".spacing-middle"),
          m(".spacing-end"),
        ]),

        m(".sidebar-links-container", [
          externalBtn("Sitemap", "./content/sitemap/index.html"),
          externalBtn("Microblog", "./content/blog/index.html"),
          externalBtn("Changelog", "./content/changelog/index.html"),
        ]),

        m(".spacing-lines", [
          m(".spacing-start"),
          m(".spacing-middle"),
          m(".spacing-end"),
        ]),

        m(".sidebar-links-container", [
          externalBtn("Follow", "https://nekoweb.org/follow/timmy.nekoweb.org/"),
          externalBtn("RSS", "./content/rss/feed.xml"),
        ])
      ]),

      m(".panel", [
        m("img#sidebar-image", { style: "width:100%" }),
      ]),
    ])
};
