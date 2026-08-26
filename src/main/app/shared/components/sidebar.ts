import m from "mithril";
import { getSetting } from "../core/settings-logic";
import { getTranslation } from "../core/i18n";
import { cleanupButtonOverlay } from "../../../app/features/links/links.buttons.overlay";

let isTransitioning = false;
let currentPath: string;

function navBtn(label: string, external: boolean, path: string, img: string | null) {
  const isActive = (currentPath ? currentPath : m.route.get()) === path;
  const attrs: m.Attributes = { "data-sound-release": "buttonRelease", "data-sound-click": "buttonClick", "data-sound-hover": "buttonHover", onclick: () => external ? _externalNavigate(path) : _navigate(path), class: isActive ? "active" : "" };

  return m("button.button.button-sidebar", attrs, [
    m("img", {
      src: img ? `/assets/images/icons/utils/${img}.png` : "/assets/images/icons/utils/no-icon.png",
      alt: img ? img : "question mark",
      width: "16px", height: "16px"
    }),
    m("span", getTranslation(label))
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
    cleanupButtonOverlay();
    m.route.set(path);

    requestAnimationFrame(() => {
      mainColumn.classList.remove("exit");
      isTransitioning = false;
    });
  }, 350);
}

function _dataButtons() {
  const local = getSetting("preferred-language") || "en";

  if (local === "es") {
    return [
      navBtn("sidebar.data.buttons.blog", true, "/content/es/blog/index.html", "doc-text"),
      navBtn("sidebar.data.buttons.changelog", true, "/content/es/changelog/index.html", "doc-changelog")
    ];
  }
  else {
    return [
      navBtn("sidebar.data.buttons.blog", true, "/content/en/blog/index.html", "doc-text"),
      navBtn("sidebar.data.buttons.changelog", true, "/content/en/changelog/index.html", "doc-changelog")
    ];
  }
}

function _externalNavigate(url: string) {
  setTimeout(() => { window.location.href = url; }, 150); // Un mini delay extra :3
}

export default {
  view: () =>
    m("div.sidebar", [

      // Main Navigation
      m(".panel-frame", [
        m(".panel.nav-content", [
          m(".panel-header", [
            m("p", getTranslation("sidebar.navigation.title")),
            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼")
            ])
          ]),
          m(".panel-content", [
            m(".sidebar-buttons-container", [
              navBtn("sidebar.navigation.buttons.home", false, "/home", "home"),
              navBtn("sidebar.navigation.buttons.projects", false, "/projects", "proyect"),
              navBtn("sidebar.navigation.buttons.webmaster", false, "/webmaster", "user"),
              navBtn("sidebar.navigation.buttons.contact", false, "/contact", "contact"),
              navBtn("sidebar.navigation.buttons.links", false, "/links", "link"),
              navBtn("sidebar.navigation.buttons.achievements", false, "/achievements", "achievement"),
              navBtn("sidebar.navigation.buttons.configuration", false, "/configuration", "settings")
            ])
          ])
        ])
      ]),

      // 'Data' sub-site navigation
      m(".panel-frame", [
        m(".panel.nav-content", [
          m(".panel-header", [
            m("p", getTranslation("sidebar.data.title")),
            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼")
            ])
          ]),
          m(".panel-content", [
            m(".sidebar-buttons-container", [
              ..._dataButtons()
            ])
          ])
        ])
      ])
    ])
};
