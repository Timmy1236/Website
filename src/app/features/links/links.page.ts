import m from "mithril";
import { showButtonOverlay, hideButtonOverlay } from "./links.buttons.overlay.ts";
import { neighborSites, likesSite, MyButton } from "./links.buttons.list.ts";
import { showToast } from "../../shared/components/toast.ts";
import { setCurrentPath } from "../../shared/core/html-meta.ts";
import { getTranslation } from "../../shared/core/i18n.ts";

const Others = {
  oncreate() {
    setCurrentPath(m.route);
  },

  view: function () {
    return m(".content", [
      m(".panel-frame", [
        m(".panel",
          m(".panel-header", [
            m("p", getTranslation("links.buttonWall.title")),
            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ]),

          m(".panel-content", [
            m("h2", getTranslation("links.buttonWall.list.neighbors")),
            m(".website-buttons",
              neighborSites.map((site) =>
                m("a", {
                  href: site.url,
                  onmouseenter: (e: MouseEvent) =>
                    showButtonOverlay(site, e.currentTarget as HTMLElement),
                  onmouseleave: () => hideButtonOverlay(),
                },
                  m("img", { src: site.button, alt: site.url })
                )
              )
            ),

            m("h2", getTranslation("links.buttonWall.list.likes")),
            m(".website-buttons",
              likesSite.map((site) =>
                m("a", {
                  href: site.url,
                  onmouseenter: (e: MouseEvent) =>
                    showButtonOverlay(site, e.currentTarget as HTMLElement),
                  onmouseleave: () => hideButtonOverlay(),
                },
                  m("img", { src: site.button, alt: site.url })
                )
              )
            ),

            m("h2", getTranslation("links.buttonWall.list.myButton")),
            m(".website-buttons",
              m("a", {
                onmouseenter: (e: MouseEvent) => showButtonOverlay(MyButton, e.currentTarget as HTMLElement), onmouseleave: () => hideButtonOverlay()
              },
                m("img", {
                  src: "https://timmy.nekoweb.org/assets/images/buttons/timmy_button.png",
                  onclick: () => { navigator.clipboard.writeText("https://timmy.nekoweb.org/assets/images/buttons/timmy_button.png"); showToast("info", true, "Button!", false, "toast.timmyButton", true) },
                })
              ),
            ),
          ])
        )
      ]),

      // Créditos
      m(".panel-frame", [
        m(".panel", [
          m(".panel-header",
            m("p.text-title", getTranslation("links.credits.title")),
            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ),
          m(".panel-content", [
            m(".tree-section", [
              m("p.heading.tree-header", "Hosting"),
              m(".tree-list", [
                m(".tree-item", m("a.link", { href: "https://nekoweb.org/", target: "_blank" }, "NekoWeb")),
                m(".tree-item", m("a.link", { href: "https://filegarden.com/", target: "_blank" }, "File Garden")),
              ]),
            ]),
            m(".tree-section", [
              m("p.heading.tree-header", "Librerías"),
              m(".tree-list", [
                m(".tree-item", m("a.link", { href: "https://mithril.js.org/", target: "_blank" }, "Mithril.js")),
                m(".tree-item", m("a.link", { href: "https://www.11ty.dev/", target: "_blank" }, "Eleventy (11ty)")),
                m(".tree-item", m("a.link", { href: "https://esbuild.github.io/", target: "_blank" }, "ESBuild")),
              ]),
            ]),
            m(".tree-section", [
              m("p.heading.tree-header", "Herramientas Externas"),
              m(".tree-list", [
                m(".tree-item", m("a.link", { href: "https://ditherit.com/", target: "_blank" }, "Dither it!")),
                m(".tree-item", m("a.link", { href: "https://compress-or-die.com/", target: "_blank" }, "Compress or Die")),
                m(".tree-item", m("a.link", { href: "https://ezgif.com/", target: "_blank" }, "Ezgif")),
              ]),
            ]),
            m(".tree-section", [
              m("p.heading.tree-header", "Audios & Canciones"),
              m(".tree-list", [
                m(".tree-item", m("a.link", { href: "https://chezmonplaisir.bandcamp.com/album/lofi-ftw", target: "_blank" }, `Lack of Color - That tenderness`)),
                m(".tree-item", m("a.link", { href: "https://github.com/sourcesounds/hl2", target: "_blank" }, `Source Engine sounds`)),
              ]),
            ]),
            m(".tree-section", [
              m("p.heading.tree-header", "Imágenes"),
              m(".tree-list", [
                m(".tree-item", m("a.link", { href: "https://www.reddit.com/r/LiminalSpace/comments/19ek506/voices_of_the_void/", target: "_blank" }, "Voices of the Void screenshots")),
              ]),
            ]),
          ])
        ])
      ]),

      // WebTiles
      m(".panel-frame", [
        m(".panel", [
          m(".panel-header",
            m("p.text-title", "iFrame: WebTiles"),
            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ),
          m(".panel-content", [
            m("div.iframe.container", [
              m("iframe", {
                src: "https://webtiles.kicya.net/e/timmy.nekoweb.org",
                width: "250",
                height: "270",
                frameborder: "0"
              }),
              m("textarea", `<iframe src="https://webtiles.kicya.net/e/timmy.nekoweb.org" width="250" height="270" frameborder="0"></iframe>`.trim())
            ])
          ])
        ])
      ]),

      m(".panel-frame", [
        m(".panel", [
          m(".panel-header",
            m("p.text-title", "TV TIME (SUPER W.I.P)"),
            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ),

          m(".panel-content", [
            m("div.iframe.container", [
              m("iframe", {
                src: "/pages/tv-time.html",
                width: "300",
                height: "314",
                frameborder: "0"
              }),
              m("textarea", `<iframe src="https://timmy.nekoweb.org/pages/tv-time" width="300" height="314" frameborder="0"></iframe>`.trim())
            ])
          ])
        ])
      ])
    ])
  }
};

export default Others;