import m from "mithril";
import { confirmSettings, restartSettings, draft, refreshDraftFromStorage } from "./configuration.ui.ts";
import { getTranslation } from "../../shared/core/i18n.js";
import TabPanel from "../../shared/components/tab-panel.ts";
import { isUnlocked } from "../../shared/core/achievements-logic.ts";
import { setCurrentPath } from "../../shared/core/html-meta.ts";

const themes = [
  {
    value: "simple-purple",
    image: "/assets/images/pages/configuration/purple.webp",
    label: "Purple"
  },
  {
    value: "simple-green",
    image: "/assets/images/pages/configuration/green.webp",
    label: "Green"
  },
  {
    value: "simple-dark",
    image: "/assets/images/pages/configuration/dark.webp",
    label: "Dark"
  },
  {
    value: "omori-darkspace",
    image: "/assets/images/pages/configuration/omori.webp",
    label: "Darkspace",
    unlocked: () => isUnlocked("oyasumi")
  }
];

const selectTheme = (e: Event) => {
  draft.theme = (e.target as HTMLInputElement).value;
};

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
                  ]),

                  m(".option", [
                    m("input", {
                      type: "checkbox", id: "animatedBg", checked: draft.animatedBg,
                      onchange: (e: Event) => { draft.animatedBg = (e.target as HTMLInputElement).checked; }
                    }),
                    m("label", { for: "animatedBg" }, getTranslation("settings.options.animatedBg"))
                  ])
                ]),

                m(".settings-group", [
                  m("h2.group-title", getTranslation("settings.sections.text")),
                  m(".option", [
                    m("input", {
                      type: "checkbox", id: "readable-font", checked: draft.readableFont,
                      onchange: (e: Event) => { draft.readableFont = (e.target as HTMLInputElement).checked; }
                    }),
                    m("label", { for: "readable-font" }, getTranslation("settings.options.readableFont"))
                  ])
                ]),

                m(".settings-group", [
                  m("h2.group-title", getTranslation("settings.sections.themes")),

                  m(".option-list", themes
                    .filter(theme => !theme.unlocked || theme.unlocked())
                    .map(theme =>
                      m("label.option-list-item", [
                        m("input", {
                          type: "radio",
                          name: "theme",
                          value: theme.value,
                          checked: draft.theme === theme.value,
                          onchange: selectTheme
                        }),

                        m("img.option-list-item-image", {
                          src: theme.image
                        }),

                        m("p.option-list-item-text", theme.label)
                      ])
                    )
                  )
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
              label: getTranslation("settings.list.others"),
              content: () => m(".settings-group", [
                m(".settings-group", [
                  m("h2.group-title", getTranslation("settings.sections.languages")),

                  m(".option", [
                    m(".buttons-list", [
                      m("button.button", { onclick: () => draft.language = "es" }, "Español"),
                      m("button.button", { onclick: () => draft.language = "en" }, "English")
                    ]),
                    m("p", draft.language)
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
