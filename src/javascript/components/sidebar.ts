import m from "mithril";
import { spaNavigate } from "../ui/trans.js";

/**
 * Crea un botón que permite navegar en la pagina web.
 * @param {string} label 
 * @param {boolean} external 
 * @param {string} path 
 * @param {string} tooltip 
 * @param {string} img 
 * @returns 
 */
function navBtn(label: string, external: boolean, path: string, tooltip: string | null, img: string | null) {
  const attrs: Record<string, any> = {
    onclick: () => external ? externalNavigate(path) : spaNavigate(path),
  };

  if (tooltip) attrs["data-tooltip"] = tooltip;

  return m("button.sidebar-buttons", attrs, [
    m("img", {
      src: img ? `/assets/images/icons/utils/${img}.png` : `/assets/images/icons/utils/no-icon.png`,
      alt: img ? img : "question mark",
      width: "16px",
      height: "16px"
    }),
    m("span", { "data-i18n": label })
  ]);
}

function externalNavigate(url: string) {
  setTimeout(() => { window.location.href = url; }, 150); // Un mini delay extra :3
}

function getNekoStat(type: string) {
  const el = document.getElementById('nekoweb-stats');
  if (el) {
    let count = el.getAttribute(`data-${type}`);
    if (count == "<!--# views -->") count = "0,000"
    if (count == "<!--# followers -->") count = "00"
    return count;
  }
  return "...";
}

export default {
  view: () =>
    m("div.sidebar", [

      // Main Navigation
      m(".panel.nav-content", [
        m(".panel-header", [
          m("p", { "data-i18n": "sidebar.navigation.title" }),
          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼")
          ])
        ]),
        m(".panel-content", [
          m(".sidebar-links-container", [
            navBtn("sidebar.navigation.buttons.home", false, "/home", null, "home"),
            navBtn("sidebar.navigation.buttons.aboutMe", false, "/about", "Work in Progress!", "user"),
            navBtn("sidebar.navigation.buttons.proyects", false, "/proyects", "Work in Progress!", "proyect"),
            navBtn("sidebar.navigation.buttons.links", false, "/links", null, "link"),
            navBtn("sidebar.navigation.buttons.configuration", false, "/configuration", null, "settings"),
          ]),
        ]),
      ]),

      // 'Data' subsite navigation
      m(".panel.nav-content", [
        m(".panel-header", [
          m("p", { "data-i18n": "sidebar.data.title" }),
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
      // NOTE: SUUUUUPER WIP, ESTO NECESITA MAS DESARROLLO.
      m(".panel.nav-content", [
        m(".panel-header", [
          m("p", { "data-i18n": "sidebar.nekoweb.title" }),
          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼")
          ])
        ]),
        m(".panel-content", [
          m("div.stats-container", [
            m("p", [m("span", { "data-i18n": "sidebar.nekoweb.buttons.visits", style: "font-size: 24px;" }), m("span", { style: "font-size: 24px;" }, getNekoStat('views'))]),
            m("p", { style: "margin-bottom:10px;" }, [m("span", { "data-i18n": "sidebar.nekoweb.buttons.followers", style: "font-size: 24px;" }), m("span", { style: "font-size: 24px;" }, getNekoStat('followers'))]),
            navBtn("sidebar.nekoweb.buttons.follow", true, "https://nekoweb.org/follow/timmy.nekoweb.org/", null, "follow"),
          ])
        ])
      ]),
    ]),
};
