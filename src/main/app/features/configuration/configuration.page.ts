import m from "mithril";
import { confirmSettings, restartSettings, draft, refreshDraftFromStorage } from "./configuration.ui.ts";
import { changeLanguage, getTranslation } from "../../shared/core/i18n.js";
import TabPanel from "../../shared/components/tab-panel.ts";
import { isUnlocked } from "../../shared/core/achievements-logic.ts";
import { setCurrentPath } from "../../shared/core/html-meta.ts";

const ConfigurationPage = {
  oncreate() {
    setCurrentPath(m.route, "settings");
    refreshDraftFromStorage();
    m.redraw();
  },

  view: function () {
    return m(".content", [
      m(".panel-frame", [
        m(TabPanel, {
          title: getTranslation("settings.title"),
          tabs: [
            {
              label: getTranslation("settings.list.visual"),
              content: () => m("div", [
                m(".settings-group", [
                  m("h2.group-title", getTranslation("settings.sections.visual-effects")),
                  m(".option", [
                    m("input", {
                      type: "checkbox", id: "static-effect", checked: draft.staticEffect,
                      onchange: (e: Event) => { draft.staticEffect = (e.target as HTMLInputElement).checked; }
                    }),
                    m("label", { for: "static-effect" }, getTranslation("settings.options.staticEffects"))
                  ]),

                  m(".option", [
                    m("input", {
                      type: "checkbox", id: "vignette-effect", checked: draft.vignetteEffect,
                      onchange: (e: Event) => { draft.vignetteEffect = (e.target as HTMLInputElement).checked; }
                    }),
                    m("label", { for: "vignette-effect" }, getTranslation("settings.options.vignetteEffects"))
                  ])
                ]),

                m(".settings-group", [
                  m("h2.group-title", getTranslation("settings.sections.themes")),

                  m(".option", [
                    m("select#theme-select", {
                      value: draft.theme,
                      onchange: (e: Event) => {
                        draft.theme = (e.target as HTMLSelectElement).value;
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
                ])
              ])
            },
            {
              label: getTranslation("settings.list.audio"),
              content: () => m(".settings-group", [
                m("h2.group-title", getTranslation("settings.sections.audio")),

                m(".option", [
                  m("input", {
                    type: "checkbox", id: "background-music-toggle", checked: draft.backgroundMusic,
                    onchange: (e: Event) => { draft.backgroundMusic = (e.target as HTMLInputElement).checked; }
                  }),
                  m("label", { for: "background-music-toggle" }, getTranslation("settings.options.backgroundMusic"))
                ]),

                m(".option", [
                  m("input", {
                    type: "checkbox", id: "sound-effects-toggle", checked: draft.soundsEffects,
                    onchange: (e: Event) => { draft.soundsEffects = (e.target as HTMLInputElement).checked; }
                  }),
                  m("label", { for: "sound-effects-toggle" }, getTranslation("settings.options.soundsEffects"))
                ])
              ])
            },
            {
              label: getTranslation("settings.list.accessibility"),
              content: () => m(".settings-group", [
                m("h2.group-title", getTranslation("settings.sections.others")),

                m(".option", [
                  m("input", {
                    type: "checkbox", id: "readable-font", checked: draft.readableFont,
                    onchange: (e: Event) => { draft.readableFont = (e.target as HTMLInputElement).checked; }
                  }),
                  m("label", { for: "readable-font" }, getTranslation("settings.options.readableFont"))
                ])
              ])
            },
            {
              label: getTranslation("settings.list.others"),
              content: () => m("div", [
                m(".settings-group", [
                  m("h2.group-title", getTranslation("settings.sections.languages")),

                  m(".option", [
                    m(".buttons-list", [
                      m("button.button", { onclick: () => changeLanguage("es") }, "Español"),
                      m("button.button", { onclick: () => changeLanguage("en") }, "English")
                    ])
                  ])
                ])
              ])
            }
          ],
          outTab: m(".configuration-buttons", [
            m("button.button", { onclick: () => confirmSettings() }, getTranslation("settings.buttons.confirm")),
            m("button.button", { onclick: () => restartSettings() }, getTranslation("settings.buttons.reset"))
          ])
        })
      ])
    ]);
  }
};

export default ConfigurationPage;
