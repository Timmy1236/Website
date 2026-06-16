import m from "mithril";
import { confirmSettings, restartSettings, settingsMap, initMapFromStorage } from "./configuration.ui.ts";
import { changeLanguage, getTranslation } from "../../shared/core/i18n.js"
import TabPanel from "../../shared/components/tab-panel.ts";
import { isUnlocked } from "../../shared/core/achievements-logic.ts";
import { setCurrentPath } from "../../shared/core/html-meta.ts";

const ConfigurationPage = {
  oncreate() {
    setCurrentPath(m.route);
    initMapFromStorage();
    m.redraw();
  },

  view: function () {
    return m(".content", [
      m(".panel-frame", [
        m(TabPanel, {
          title: getTranslation("settings.title"),
          tabs: [
            {
              label: "Visual",
              content: () => m("div", [
                m(".settings-group", [
                  m("h2.group-title", getTranslation("settings.sections.visual-effects")),
                  m(".option", [
                    m("input", {
                      type: "checkbox", id: "static-effect", checked: settingsMap.get("staticEffect") === "true",
                      onchange: (e: Event) => { settingsMap.set("staticEffect", (e.target as HTMLInputElement).checked ? "true" : "false") }
                    }),
                    m("label", { for: "static-effect" }, getTranslation("settings.options.staticEffects"))
                  ]),

                  m(".option", [
                    m("input", {
                      type: "checkbox", id: "vignette-effect", checked: settingsMap.get("vignetteEffect") === "true",
                      onchange: (e: Event) => { settingsMap.set("vignetteEffect", (e.target as HTMLInputElement).checked ? "true" : "false") }
                    }),
                    m("label", { for: "vignette-effect" }, getTranslation("settings.options.vignetteEffects"))
                  ]),
                ]),

                m(".settings-group", [
                  m("h2.group-title", getTranslation("settings.sections.themes")),

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
                m("h2.group-title", getTranslation("settings.sections.audio")),

                m(".option", [
                  m("input", {
                    type: "checkbox", id: "background-music-toggle", checked: settingsMap.get("backgroundMusic") === "true",
                    onchange: (e: Event) => { settingsMap.set("backgroundMusic", (e.target as HTMLInputElement).checked ? "true" : "false") }
                  }),
                  m("label", { for: "background-music-toggle" }, getTranslation("settings.options.backgroundMusic"))
                ]),

                m(".option", [
                  m("input", {
                    type: "checkbox", id: "sound-effects-toggle", checked: settingsMap.get("soundsEffects") === "true",
                    onchange: (e: Event) => { settingsMap.set("soundsEffects", (e.target as HTMLInputElement).checked ? "true" : "false") }
                  }),
                  m("label", { for: "sound-effects-toggle" }, getTranslation("settings.options.soundsEffects"))
                ])
              ]),
            },
            {
              label: "Accesibilidad",
              content: () => m(".settings-group", [
                m("h2.group-title", getTranslation("settings.sections.others")),

                m(".option", [
                  m("input", {
                    type: "checkbox", id: "readable-font", checked: settingsMap.get("readableFont") === "true",
                    onchange: (e: Event) => { settingsMap.set("readableFont", (e.target as HTMLInputElement).checked ? "true" : "false") }
                  }),
                  m("label", { for: "readable-font" }, getTranslation("settings.options.readableFont"))
                ])
              ]),
            },
            {
              label: "Otros",
              content: () => m("div", [
                m(".settings-group", [
                  m("h2.group-title", getTranslation("settings.sections.languages")),

                  m(".option", [
                    m(".buttons-list", [
                      m("button.button", { onclick: () => changeLanguage("es"), }, "Español"),
                      m("button.button", { onclick: () => changeLanguage("en"), }, "English")
                    ])
                  ])
                ])
              ])
            }
          ],
          outTab: m(".configuration-buttons", [
            m("button.button", { onclick: () => confirmSettings() }, "Confirmar"),
            m("button.button", { onclick: () => restartSettings() }, "Default Config")
          ])
        })
      ])
    ]);
  }
};

export default ConfigurationPage;