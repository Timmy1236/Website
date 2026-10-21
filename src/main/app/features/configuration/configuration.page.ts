import m from "mithril";
import { confirmSettings, restartSettings, draft, refreshDraftFromStorage } from "./configuration.ui.ts";
import { getTranslation } from "../../shared/core/i18n.js";
import { TabPanel } from "../../shared/components/panels.ts";
import { isUnlocked } from "../../shared/core/achievements-logic.ts";
import { setCurrentPath } from "../../shared/core/html-meta.ts";

const themes = [
  {
    value: "simple-purple",
    image: "/assets/images/pages/configuration/purple.webp",
    label: "main.settings.sub-windows.visual.content.themes.options.purple"
  },
  {
    value: "simple-green",
    image: "/assets/images/pages/configuration/green.webp",
    label: "main.settings.sub-windows.visual.content.themes.options.green"
  },
  {
    value: "simple-dark",
    image: "/assets/images/pages/configuration/dark.webp",
    label: "main.settings.sub-windows.visual.content.themes.options.dark"
  },
  {
    value: "omori-darkspace",
    image: "/assets/images/pages/configuration/omori.webp",
    label: "main.settings.sub-windows.visual.content.themes.options.darkspace",
    unlocked: () => isUnlocked("oyasumi")
  }
];

const background = [
  {
    value: "none",
    image: "/assets/images/pages/configuration/empty.png",
    label: "main.settings.sub-windows.visual.content.background.options.empty"
  },
  {
    value: "css",
    image: "/assets/images/pages/configuration/checkboard.png",
    label: "main.settings.sub-windows.visual.content.background.options.checkboard"
  },
  {
    value: "webgl",
    image: "/assets/images/pages/configuration/liquify.png",
    label: "main.settings.sub-windows.visual.content.background.options.liquify"
  }
];

const sidebar = [
  {
    value: "left",
    image: "/assets/images/pages/configuration/purple.webp",
    label: "main.settings.sub-windows.visual.content.sidebar.options.left"
  },
  {
    value: "right",
    image: "/assets/images/pages/configuration/right.png",
    label: "main.settings.sub-windows.visual.content.sidebar.options.right"
  }
];

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
          title: getTranslation("main.settings.windows.settings.title"),
          tabs: [
            {
              label: getTranslation("main.settings.sub-windows.visual.title"),
              content: () => m("div", [
                m(".settings-group", [
                  m("h2.group-title.header", getTranslation("main.settings.sub-windows.visual.content.visual-effects.title")),
                  m(".option", [
                    m("input", {
                      type: "checkbox", id: "static-effect", checked: draft.staticEffect,
                      onchange: (e: Event) => { draft.staticEffect = (e.target as HTMLInputElement).checked; }
                    }),
                    m("label", { for: "static-effect" }, getTranslation("main.settings.sub-windows.visual.content.visual-effects.options.static"))
                  ]),

                  m(".option", [
                    m("input", {
                      type: "checkbox", id: "vignette-effect", checked: draft.vignetteEffect,
                      onchange: (e: Event) => { draft.vignetteEffect = (e.target as HTMLInputElement).checked; }
                    }),
                    m("label", { for: "vignette-effect" }, getTranslation("main.settings.sub-windows.visual.content.visual-effects.options.vignette"))
                  ])
                ]),

                m(".settings-group", [
                  m("h2.group-title.header", getTranslation("main.settings.sub-windows.visual.content.text.title")),
                  m(".option", [
                    m("input", {
                      type: "checkbox", id: "readable-font", checked: draft.readableFont,
                      onchange: (e: Event) => { draft.readableFont = (e.target as HTMLInputElement).checked; }
                    }),
                    m("label", { for: "readable-font" }, getTranslation("main.settings.sub-windows.visual.content.text.options.readableFont"))
                  ])
                ]),

                m(".settings-group", [
                  m("h2.group-title.header", getTranslation("main.settings.sub-windows.visual.content.themes.title")),

                  m(".option-list", themes
                    .filter(theme => !theme.unlocked || theme.unlocked())
                    .map(theme =>
                      m("label.option-list-item", [
                        m("input", {
                          type: "radio",
                          name: "theme",
                          value: theme.value,
                          checked: draft.theme === theme.value,
                          onchange: (e: Event) => { draft.theme = (e.target as HTMLInputElement).value; }
                        }),

                        m("img.option-list-item-image", {
                          src: theme.image
                        }),

                        m("p.option-list-item-text", getTranslation(theme.label))
                      ])
                    )
                  )
                ]),

                m(".settings-group", [
                  m("h2.group-title.header", getTranslation("main.settings.sub-windows.visual.content.background.title")),

                  m(".option-list", background.map(background =>
                    m("label.option-list-item", [
                      m("input", {
                        type: "radio",
                        name: "background",
                        value: background.value,
                        checked: draft.background === background.value,
                        onchange: (e: Event) => { draft.background = (e.target as HTMLInputElement).value; }
                      }),

                      m("img.option-list-item-image", {
                        src: background.image
                      }),

                      m("p.option-list-item-text", getTranslation(background.label))
                    ])
                  )
                  )
                ]),

                m(".settings-group", [
                  m("h2.group-title.header", getTranslation("main.settings.sub-windows.visual.content.sidebar.title")),

                  m(".option-list", sidebar.map(sidebar =>
                    m("label.option-list-item", [
                      m("input", {
                        type: "radio",
                        name: "sidebar",
                        value: sidebar.value,
                        checked: draft.sidebarPosition === sidebar.value,
                        onchange: (e: Event) => { draft.sidebarPosition = (e.target as HTMLInputElement).value; }
                      }),

                      m("img.option-list-item-image", {
                        src: sidebar.image
                      }),

                      m("p.option-list-item-text", getTranslation(sidebar.label))
                    ])
                  )
                  )
                ])
              ])
            },
            {
              label: getTranslation("main.settings.sub-windows.audio.title"),
              content: () => m(".settings-group", [
                m("h2.group-title.header", getTranslation("main.settings.sub-windows.audio.content.audio")),

                m(".option", [
                  m("input", {
                    type: "checkbox", id: "background-music-toggle", checked: draft.backgroundMusic,
                    onchange: (e: Event) => { draft.backgroundMusic = (e.target as HTMLInputElement).checked; }
                  }),
                  m("label", { for: "background-music-toggle" }, getTranslation("main.settings.sub-windows.audio.content.backgroundMusic"))
                ]),

                m(".option.music-volume-option", [
                  m("input.music-volume-slider", {
                    type: "range", id: "music-volume-slider", min: 0, max: 100, step: 1, value: draft.musicVolume, "aria-label": "Music volume",
                    oninput: (e: Event) => { draft.musicVolume = Number((e.target as HTMLInputElement).value); }
                  }),
                  m("label", { for: "music-volume-slider" }, `Music volume: ${draft.musicVolume}%`)
                ]),

                m(".option", [
                  m("input", {
                    type: "checkbox", id: "sound-effects-toggle", checked: draft.soundsEffects,
                    onchange: (e: Event) => { draft.soundsEffects = (e.target as HTMLInputElement).checked; }
                  }),
                  m("label", { for: "sound-effects-toggle" }, getTranslation("main.settings.sub-windows.audio.content.soundsEffects"))
                ])
              ])
            },
            {
              label: getTranslation("main.settings.sub-windows.others.title"),
              content: () => m(".settings-group", [
                m(".settings-group", [
                  m("h2.group-title.header", getTranslation("main.settings.sub-windows.others.content.languages")),

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
            m("button.button", { onclick: () => confirmSettings() }, getTranslation("main.settings.windows.settings.buttonConfirm")),
            m("button.button", { onclick: () => restartSettings() }, getTranslation("main.settings.windows.settings.buttonReset"))
          ])
        })
      ])
    ]);
  }
};

export default ConfigurationPage;
