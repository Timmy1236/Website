import m from "mithril";
import { spaNavigate } from "../ui/trans.js";
import { buttonSounds } from "../media/mouse-click.js";

function navBtn(label, path, tooltip) {
  if (!tooltip) {
    return m("button.sidebar-buttons", { "data-i18n": label, onclick: () => spaNavigate(path), onmousedown: () => buttonSounds("click"), onmouseup: () => buttonSounds("released"), onmouseover: () => buttonSounds("hover") });
  } else {
    return m("button.sidebar-buttons", { "data-i18n": label, "data-tooltip": tooltip, onclick: () => spaNavigate(path), onmousedown: () => buttonSounds("click"), onmouseup: () => buttonSounds("released"), onmouseover: () => buttonSounds("hover") });
  }

}

function externalBtn(label, url, tooltip) {
  if (!tooltip) {
    return m("button.sidebar-buttons", { onclick: () => externalNavigate(url), onmousedown: () => buttonSounds("click"), onmouseup: () => buttonSounds("released"), onmouseover: () => buttonSounds("hover") }, label);
  } else {
    return m("button.sidebar-buttons", { "data-i18n": label, "data-tooltip": tooltip, onclick: () => externalNavigate(url), onmousedown: () => buttonSounds("click"), onmouseup: () => buttonSounds("released"), onmouseover: () => buttonSounds("hover") }, label);
  }
}

function externalNavigate(url) {
  setTimeout(() => { window.location.href = url; }, 150); // Un mini delay extra :3
}

export default {
  view: () =>
    m("div.sidebar", [
      m(".panel.nav-content", [
        m(".panel-header", [
          m("h1", { "data-i18n": "sidebar.navigation.title" }),
          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼")
          ])
        ]),
        m(".panel-content", [
          m(".sidebar-links-container", [
            navBtn("sidebar.navigation.buttons.home", "/home"),
            navBtn("sidebar.navigation.buttons.aboutMe", "/about", "Work in Progress!"),
            navBtn("sidebar.navigation.buttons.proyects", "/proyects", "Work in Progress!"),
            navBtn("sidebar.navigation.buttons.links", "/links"),
            navBtn("sidebar.navigation.buttons.configuration", "/configuration"),
          ]),

          m(".spacing-line sidebar"),

          m(".sidebar-links-container", [
            externalBtn("Sitemap", "./content/sitemap/index.html"),
            externalBtn("Blog", "./content/blog/index.html", "Only in Spanish!"),
            externalBtn("Changelog", "./content/changelog/index.html", "Only in Spanish!"),
          ]),

          m(".spacing-line sidebar"),

          m(".sidebar-links-container", [
            externalBtn("Follow", "https://nekoweb.org/follow/timmy.nekoweb.org/"),
            externalBtn("RSS", "./content/rss/feed.xml"),
          ])
        ]),
      ]),

      /* NOTE: Esta mierda esta muy mal, se necesita unas mejoritas antes de ponerlo.
      m(".panel", [
        m(".panel-header", [
          m("h1", "Random")
        ]),
        m(".panel-content", [
          m("img#sidebar-image", { style: "width:100%" }),
        ])
      ]),
      */
    ])
};
