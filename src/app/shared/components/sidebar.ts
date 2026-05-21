import m from "mithril";
import { getSetting, getMapSetting } from "../core/settings-logic";

let isTransitioning = false;
let currentPath = "/home";

function navBtn(label: string, external: boolean, path: string, tooltip: string | null, img: string | null) {
  const isActive = currentPath === path;
  const attrs: m.Attributes = { onclick: () => external ? _externalNavigate(path) : _navigate(path), class: isActive ? "active" : "" };

  if (tooltip) attrs["data-tooltip"] = tooltip;

  return m("button.sidebar-buttons", attrs, [
    m("img", {
      src: img ? `/assets/images/icons/utils/${img}.png` : `/assets/images/icons/utils/no-icon.png`,
      alt: img ? img : "question mark",
      width: "16px", height: "16px"
    }),
    m("span", { "data-i18n": label })
  ]);
}

function _navigate(path: string) {
  if (isTransitioning) return;
  currentPath = path;

  const mainColumn = document.querySelector(".content-column");
  if (!mainColumn) return;

  isTransitioning = true;

  mainColumn.classList.add("exit");
  setTimeout(() => {
    m.route.set(path);
    requestAnimationFrame(() => { mainColumn.classList.remove("exit"); isTransitioning = false; });
  }, 350);
}

function _dataButtons() {
  const local = getSetting("preferred-language") || "en";

  if (local === "es") {
    return [
      navBtn("sidebar.data.buttons.blog", true, "/content/es/blog/index.html", null, "doc-text"),
      navBtn("sidebar.data.buttons.changelog", true, "/content/es/changelog/index.html", null, "doc-changelog"),
    ];
  } else {
    return [
      navBtn("sidebar.data.buttons.blog", true, "/content/en/blog/index.html", null, "doc-text"),
      navBtn("sidebar.data.buttons.changelog", true, "/content/en/changelog/index.html", null, "doc-changelog"),
    ];
  }
}

function _externalNavigate(url: string) {
  setTimeout(() => { window.location.href = url; }, 150); // Un mini delay extra :3
}

// NOTE: SSI Nekoweb no se actualiza al instante cuando entras a la pagina?? Solamente cuando actualizas la pagina???? Aww man :(
// NOTE2: Creo que el SSI si se actualiza con el tiempo, pero cuenta con un delay extremadamente largo.
// TODO: Investigar esto mas al fondo... - The Mysterious Fucking Detective.
function _getNekoStat(type: string) {
  const el = document.getElementById('nekoweb-stats');
  if (el) {
    let count = el.getAttribute(`data-${type}`);
    if (count == "<!--# views -->") count = "0,000"
    if (count == "<!--# followers -->") count = "00"
    return count;
  }
  return "...";
}

function _experimental() {
  const exp = getMapSetting("showExperimental");

  if (exp === "true") {
    return [
      navBtn("sidebar.navigation.buttons.achievements", false, "/achievements", "(SUPER W.I.P)", "achievement"),
      navBtn("sidebar.navigation.buttons.guestbook", false, "/guestbook", "(SUPER W.I.P)", "email"),
      navBtn("sidebar.navigation.buttons.contact", false, "/contact", "(SUPER W.I.P)", "email")
    ]
  } else {
    return [];
  }
}

export default {
  view: () =>
    m("div.sidebar", [

      // Main Navigation
      m(".panel-frame", [
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
              navBtn("sidebar.navigation.buttons.aboutMe", false, "/about", null, "user"),
              navBtn("sidebar.navigation.buttons.projects", false, "/projects", null, "proyect"),
              navBtn("sidebar.navigation.buttons.links", false, "/links", null, "link"),
              navBtn("sidebar.navigation.buttons.configuration", false, "/configuration", null, "settings"),
              ..._experimental()
            ]),
          ]),
        ])
      ]),

      // 'Data' sub-site navigation
      m(".panel-frame", [
        m(".panel.nav-content", [
          m(".panel-header", [
            m("p", { "data-i18n": "sidebar.data.title" }),
            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼")
            ])
          ]),
          m(".panel-content", [
            m(".sidebar-links-container", [
              ..._dataButtons()
            ]),
          ]),
        ])
      ]),

      // Nekoweb Data Panel
      // NOTE: SUUUUUPER WIP, ESTO NECESITA MAS DESARROLLO.
      m(".panel-frame", [
        m(".panel.nav-content", [
          m(".panel-header", [
            m("p", { "data-i18n": "sidebar.nekoweb.title" }),
            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼")
            ])
          ]),
          m(".panel-content", [
            m("div.stats-container", [
              m("p", [m("span", { "data-i18n": "sidebar.nekoweb.buttons.visits", style: "font-size: 24px;" }), m("span", { style: "font-size: 24px;" }, _getNekoStat('views'))]),
              m("p", { style: "margin-bottom:10px;" }, [m("span", { "data-i18n": "sidebar.nekoweb.buttons.followers", style: "font-size: 24px;" }), m("span", { style: "font-size: 24px;" }, _getNekoStat('followers'))]),
              navBtn("sidebar.nekoweb.buttons.follow", true, "https://nekoweb.org/follow/timmy.nekoweb.org/", null, "follow"),
            ])
          ])
        ]),
      ])
    ]),
};
