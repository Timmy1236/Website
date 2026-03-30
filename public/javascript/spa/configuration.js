import m from "mithril";
import { loadSettings, confirmSettings, restartSettings } from "../pages/settings-ui.js";
import { changeLanguage, refreshi18n } from "../core/i18n.js"
import TabPanel from "../components/tab-panel.js";

const ConfigurationPage = {
  oncreate() {
    refreshi18n();
    loadSettings();
  },

  onupdate() {
    refreshi18n();
    loadSettings();
  },

  view() {
    return m(".content-column", [

      m(TabPanel, {
        title: { "data-i18n": "settings.title" },
        tabs: [
          {
            label: "Visual",
            content: () => m("div", [
              m(".settings-group", [
                m("h2.group-title", { "data-i18n": "settings.sections.visual-effects" }),

                m(".option", [
                  m("input", { type: "checkbox", id: "static-effect" }),
                  m("label", { for: "static-effect", "data-i18n": "settings.options.staticEffects" })
                ]),

                m(".option", [
                  m("input", { type: "checkbox", id: "vignette-effect" }),
                  m("label", { for: "vignette-effect", "data-i18n": "settings.options.vignetteEffects" })
                ]),
              ]),

              m(".settings-group", [
                m("h2.group-title", { "data-i18n": "settings.sections.themes" }),

                m(".option", [
                  m("select#theme-select", [
                    m("option", { value: "default" }, "[DETAILS] - Green (BROKEN)"),
                    m("option", { value: "simple-purple" }, "[FLAT] - Purple (DEFAULT)"),
                    m("option", { value: "simple-dark" }, "[FLAT] - Dark"),
                    m("option", { value: "simple-red" }, "[FLAT] - Red"),
                    m("option", { value: "simple-green" }, "[FLAT] - Green"),
                    m("option", { value: "simple-blue" }, "[FLAT] - Blue"),
                  ])
                ])
              ]),
            ]),
          },
          {
            label: "Audio",
            content: () => m(".settings-group", [
              m("h2.group-title", { "data-i18n": "settings.sections.audio" }),

              m(".option", [
                m("input", { type: "checkbox", id: "background-music-toggle" }),
                m("label", { for: "background-music-toggle", "data-i18n": "settings.options.backgroundMusic" })
              ]),

              m(".option", [
                m("input", { type: "checkbox", id: "mouse-click-toggle" }),
                m("label", { for: "mouse-click-toggle", "data-i18n": "settings.options.mouseClicks" })
              ])
            ]),
          },
          {
            label: "Accesibilidad",
            content: () => m(".settings-group", [
              m("h2.group-title", { "data-i18n": "settings.sections.others" }),

              m(".option", [
                m("input", { type: "checkbox", id: "readable-font" }),
                m("label", { for: "readable-font", "data-i18n": "settings.options.readableFont" })
              ])
            ]),
          },
          {
            label: "Lenguajes",
            content: () => m(".settings-group", [
              m("h2.group-title", { "data-i18n": "settings.sections.languages" }),

              m(".option", [
                m(".buttons-list", [
                  m("button.button", { onclick: () => changeLanguage("es"), }, "Español"),
                  m("button.button", { onclick: () => changeLanguage("en"), }, "English")
                ])
              ])
            ]),
          }
        ],
        outTab: m(".configuration-buttons", [
          m("button.button", { onclick: () => confirmSettings() }, "Confirmar"),
          m("button.button", { onclick: () => restartSettings() }, "Default Config")
        ])
      }),
    ]);
  }
};

export default ConfigurationPage;