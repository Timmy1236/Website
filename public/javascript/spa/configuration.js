import m from "mithril";
import { confirmSettings, restartSettings } from "../pages/settings.js";
import { changeLanguage } from "../core/i18n.js"
import ButtonsRow from "../components/buttons_row.js";

const ConfigurationPage = {
  oncreate() {
    window.refreshI18n?.();
    window.loadSettings?.();
  },

  view() {
    return m(".content-column", [

      // SETTINGS
      m(".panel", [
        m(".panel-header",
          m("h1.text-title", { "data-i18n": "settings.title" })
        ),

        m(".panel-content", [

          // VISUAL EFFECTS
          m(".settings-group", [
            m("h2.group-title", { "data-i18n": "settings.sections.visual-effects" }),

            m(".option", [
              m("input", { type: "checkbox", id: "rain-effect" }),
              m("label", { for: "rain-effect", "data-i18n": "settings.options.rainEffects" })
            ]),

            m(".option", [
              m("input", { type: "checkbox", id: "static-effect" }),
              m("label", { for: "static-effect", "data-i18n": "settings.options.staticEffects" })
            ]),

            m(".option", [
              m("input", { type: "checkbox", id: "vignette-effect" }),
              m("label", { for: "vignette-effect", "data-i18n": "settings.options.vignetteEffects" })
            ])
          ]),

          m(".spacing-line"),

          // AUDIO
          m(".settings-group", [
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

          m(".spacing-line"),

          // OTHERS
          m(".settings-group", [
            m("h2.group-title", { "data-i18n": "settings.sections.others" }),

            m(".option", [
              m("input", { type: "checkbox", id: "readable-font" }),
              m("label", { for: "readable-font", "data-i18n": "settings.options.readableFont" })
            ])
          ]),

          m(".spacing-line"),

          // THEME
          m(".settings-group", [
            m("h2.group-title", { "data-i18n": "settings.sections.themes" }),

            m(".option", [
              m("select#theme-select", [
                m("option", { value: "snew" }, "[DETAILS] - it snew."),
                m("option", { value: "default" }, "[DETAILS] - Green"),
                m("option", { value: "simple" }, "[FLAT] - Dark")
              ])
            ])
          ]),

          m(".spacing-line"),

          // LENGUAJES
          m(".settings-group", [
            m("h2.group-title", { "data-i18n": "settings.sections.languages" }),

            m(".option", [
              m(".buttons-list", [
                m("button.button", { onclick: () => changeLanguage("es"), }, "Español"),
                m("button.button", { onclick: () => changeLanguage("en"), }, "English")
              ])
            ])
          ]),

          m(".spacing-line"),

          // CONFIRMS
          m(".buttons-list", [
            m("button.button", { onclick: () => confirmSettings() }, "Confirm"),
            m("button.button", { onclick: () => restartSettings() }, "Default Config")
          ])
        ])
      ]),

      m(ButtonsRow)

    ]);
  }
};

export default ConfigurationPage;