import m from "mithril";
import { confirmSettings, restartSettings, settingsMap, initMapFromStorage } from "../pages/settings-ui.ts";
import { changeLanguage, refreshi18n } from "../core/i18n.js"
import TabPanel from "../components/tab-panel.js";
import { isUnlocked } from "../core/achievements-logic.ts";

const ConfigurationPage = {
  oncreate() {
    initMapFromStorage();
    refreshi18n();
    m.redraw();
  },

  onupdate() {
    refreshi18n();
  },

  view: function () {
    return m(".content", [
      m(TabPanel, {
        title: { "data-i18n": "settings.title" },
        tabs: [
          {
            label: "Visual",
            content: () => m("div", [
              m(".settings-group", [
                m("h2.group-title", { "data-i18n": "settings.sections.visual-effects" }),
                m(".option", [
                  m("input", {
                    type: "checkbox", id: "static-effect", checked: settingsMap.get("staticEffect") === "true",
                    onchange: (e: Event) => { settingsMap.set("staticEffect", (e.target as HTMLInputElement).checked ? "true" : "false") }
                  }),
                  m("label", { for: "static-effect", "data-i18n": "settings.options.staticEffects" })
                ]),

                m(".option", [
                  m("input", {
                    type: "checkbox", id: "vignette-effect", checked: settingsMap.get("vignetteEffect") === "true",
                    onchange: (e: Event) => { settingsMap.set("vignetteEffect", (e.target as HTMLInputElement).checked ? "true" : "false") }
                  }),
                  m("label", { for: "vignette-effect", "data-i18n": "settings.options.vignetteEffects" })
                ]),
              ]),

              m(".settings-group", [
                m("h2.group-title", { "data-i18n": "settings.sections.themes" }),

                m(".option", [
                  m("select#theme-select", {
                    value: settingsMap.get("theme") || "simple-purple",
                    onchange: (e: Event) => {
                      settingsMap.set("theme", (e.target as HTMLSelectElement).value);
                    }
                  }, [
                    m("option", { value: "simple-purple" }, "[FLAT] - Purple"),
                    m("option", { value: "simple-dark" }, "[FLAT] - Dark"),
                    m("option", { value: "simple-red" }, "[FLAT] - Red"),
                    m("option", { value: "simple-green" }, "[FLAT] - Green"),
                    m("option", { value: "simple-blue" }, "[FLAT] - Blue"),
                    isUnlocked("oyasumi") ? m("option", { value: "omori-darkspace" }, "[FLAT] - OMORI") : null
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
                m("input", {
                  type: "checkbox", id: "background-music-toggle", checked: settingsMap.get("backgroundMusic") === "true",
                  onchange: (e: Event) => { settingsMap.set("backgroundMusic", (e.target as HTMLInputElement).checked ? "true" : "false") }
                }),
                m("label", { for: "background-music-toggle", "data-i18n": "settings.options.backgroundMusic" })
              ]),

              m(".option", [
                m("input", {
                  type: "checkbox", id: "sound-effects-toggle", checked: settingsMap.get("soundsEffects") === "true",
                  onchange: (e: Event) => { settingsMap.set("soundsEffects", (e.target as HTMLInputElement).checked ? "true" : "false") }
                }),
                m("label", { for: "sound-effects-toggle", "data-i18n": "settings.options.soundsEffects" })
              ])
            ]),
          },
          {
            label: "Accesibilidad",
            content: () => m(".settings-group", [
              m("h2.group-title", { "data-i18n": "settings.sections.others" }),

              m(".option", [
                m("input", {
                  type: "checkbox", id: "readable-font", checked: settingsMap.get("readableFont") === "true",
                  onchange: (e: Event) => { settingsMap.set("readableFont", (e.target as HTMLInputElement).checked ? "true" : "false") }
                }),
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