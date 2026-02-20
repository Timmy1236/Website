import ButtonsRow from "../components/buttons_row.js";

const ConfigurationPage = {
  oncreate() {
    window.refreshI18n?.();
    window.loadSettings?.();
  },

  view() {
    return m(".main-column", [

      // SETTINGS
      m(".content-block.settings", [
        m(".title",
          m("h1.text-title", { "data-i18n": "settings.title" })
        ),

        m(".div-content",
          m(".div-inside", [

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

            // OTHERS
            m(".settings-group", [
              m("h2.group-title", { "data-i18n": "settings.sections.others" }),

              m(".option", [
                m("input", { type: "checkbox", id: "readable-font" }),
                m("label", { for: "readable-font", "data-i18n": "settings.options.readableFont" })
              ])
            ]),

            // THEME
            m(".settings-group", [
              m("h2.group-title", { "data-i18n": "settings.sections.themes" }),

              m(".option", [
                m("select#theme-select", [
                  m("option", { value: "snew" }, "It snew"),
                  m("option", { value: "default" }, "Default"),
                  m("option", { value: "simple" }, "Simple")
                ])
              ])
            ]),

            // LENGUAJES
            m(".settings-group", [
              m("h2.group-title", { "data-i18n": "settings.sections.languages" }),

              m(".option", [
                m("button.btn", { onclick: () => changeLanguage("es"), }, "Español"),
                m(".divider"),
                m("button.btn", { onclick: () => changeLanguage("en"), }, "English")
              ])
            ]),

            m("button.btn", { onclick: () => confirmSettings() }, "Confirm")
          ])
        )
      ]),

      m(ButtonsRow)

    ]);
  }
};

export default ConfigurationPage;