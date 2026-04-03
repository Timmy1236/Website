import m from "mithril";
import { spaNavigate } from "../ui/trans.js";
import { buttonSounds } from "../media/mouse-click.js";

/**
 * Crea un botón que permite navegar en la pagina web.
 * @param {string} label 
 * @param {boolean} external 
 * @param {string} path 
 * @param {string} tooltip 
 * @param {string} img 
 * @returns 
 */
function navBtn(label, external, path, tooltip, img) {
  const attrs = {
    onclick: () => external ? externalNavigate(path) : spaNavigate(path),
    onmousedown: () => buttonSounds("click"),
    onmouseup: () => buttonSounds("released"),
    onmouseover: () => buttonSounds("hover")
  };

  if (tooltip) attrs["data-tooltip"] = tooltip;

  return m("button.sidebar-buttons", attrs, [
    m("img", {
      src: img ? `/assets/images/icons/utils/${img}.svg` : `/assets/images/icons/utils/no-icon.svg`
    }),
    m("span", { "data-i18n": label })
  ]);
}

function externalNavigate(url) {
  setTimeout(() => { window.location.href = url; }, 150); // Un mini delay extra :3
}

function getNekoStat(type) {
  const el = document.getElementById('nekoweb-stats');
  if (el) {
    return el.getAttribute(`data-${type}`);
  }
  return "...";
}

export default {
  view: () =>
    m("div.sidebar", [

      // Main Navigation
      m(".panel.nav-content", [
        m(".panel-header", [
          m("h1", { "data-i18n": "sidebar.navigation.title" }),
          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼")
          ])
        ]),
        m(".panel-content", [
          m(".sidebar-links-container", [
            navBtn("sidebar.navigation.buttons.home", false, "/home", null, "home"),
            navBtn("sidebar.navigation.buttons.aboutMe", false, "/about", "Work in Progress!", "user"),
            navBtn("sidebar.navigation.buttons.proyects", false, "/proyects", "Work in Progress!", null),
            navBtn("sidebar.navigation.buttons.links", false, "/links", null, null),
            navBtn("sidebar.navigation.buttons.configuration", false, "/configuration", null, "settings"),
          ]),
        ]),
      ]),

      // 'Data' subsite navigation
      m(".panel.nav-content", [
        m(".panel-header", [
          m("h1", { "data-i18n": "sidebar.data.title" }),
          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼")
          ])
        ]),
        m(".panel-content", [
          m(".sidebar-links-container", [
            navBtn("sidebar.data.buttons.sitemap", true, "/content/sitemap/index.html", "Only in Spanish!", "doc"),
            navBtn("sidebar.data.buttons.blog", true, "/content/blog/index.html", "Only in Spanish!", "doc-text"),
            navBtn("sidebar.data.buttons.changelog", true, "/content/changelog/index.html", "Only in Spanish!", "doc-changelog"),
          ]),
        ]),
      ]),

      // Nekoweb Data Panel
      m(".panel.nav-content", [
        m(".panel-header", [
          m("h1", { "data-i18n": "sidebar.navigation.nekoweb" }),
          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼")
          ])
        ]),
        m(".panel-content", [
          m("div.stats-container", [
            m("p", [m("p", "Views: "), getNekoStat('views')]),
            m("p", [m("p", "Followers: "), getNekoStat('followers')])
          ])
        ])
      ]),
    ]),
};
