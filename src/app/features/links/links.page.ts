import m from "mithril";
import { refreshi18n } from "../../shared/core/i18n.ts";
import { showButtonOverlay, hideButtonOverlay } from "./links.buttons.overlay.ts";
import { neighborSites, likesSite, MyButton } from "./links.buttons.list.ts";
import { showToast } from "../../shared/ui/toast.ts";
import { setCurrentPath } from "../../shared/core/html-meta.ts";

const Others = {
  oncreate() {
    setCurrentPath(m.route);
    refreshi18n();
  },

  view: function () {
    return m(".content", [
      m(".panel-frame", [
        m(".panel",
          m(".panel-header", [
            m("p", { "data-i18n": "links.buttonWall.title" }),
            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ]),

          m(".panel-content", [
            m("h2", { "data-i18n": "links.buttonWall.list.neighbors" }),
            m(".website-buttons",
              neighborSites.map((site) =>
                m("a", {
                  href: site.href,
                  onmouseenter: (e: MouseEvent) =>
                    showButtonOverlay(site, e.currentTarget as HTMLElement),
                  onmouseleave: () => hideButtonOverlay(),
                },
                  m("img", { src: site.btnSrc, alt: site.href })
                )
              )
            ),

            m("h2", { "data-i18n": "links.buttonWall.list.likes" }),
            m(".website-buttons",
              likesSite.map((site) =>
                m("a", {
                  href: site.href,
                  onmouseenter: (e: MouseEvent) =>
                    showButtonOverlay(site, e.currentTarget as HTMLElement),
                  onmouseleave: () => hideButtonOverlay(),
                },
                  m("img", { src: site.btnSrc, alt: site.href })
                )
              )
            ),

            m("h2", { "data-i18n": "links.buttonWall.list.myButton" }),
            m(".website-buttons",
              m("a", {
                onmouseenter: (e: MouseEvent) =>
                  showButtonOverlay(MyButton, e.currentTarget as HTMLElement),
                onmouseleave: () => hideButtonOverlay(),
                "data-tooltip": "Copy to Clipboard!"
              },
                m("img", {
                  src: "https://timmy.nekoweb.org/assets/images/buttons/timmy_button.png",
                  onclick: () => { navigator.clipboard.writeText("https://timmy.nekoweb.org/assets/images/buttons/timmy_button.png"); showToast("Info", "info", "Link copied!", true) },
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
            m("p.text-title", { "data-i18n": "links.credits.title" }),
            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ),
          m(".panel-content", [
            m(".tree-section", [
              m("p.heading.tree-header", "Hosting"),
              m(".tree-list", [
                m(".tree-item", m("a.link", { href: "https://nekoweb.org/", target: "_blank" }, "Website: Nekoweb")),
                m(".tree-item", m("a.link", { href: "https://filegarden.com/", target: "_blank" }, "Images: File Garden")),
              ]),
            ]),
            m(".tree-section", [
              m("p.heading.tree-header", "Librerías"),
              m(".tree-list", [
                m(".tree-item", m("a.link", { href: "https://mithril.js.org/", target: "_blank" }, "Mithril: Single Page Application")),
                m(".tree-item", m("a.link", { href: "https://www.11ty.dev/", target: "_blank" }, "11ty: Static Site Generator")),
                m(".tree-item", m("a.link", { href: "https://esbuild.github.io/", target: "_blank" }, "esbuild: TypeScript & CSS Bundler")),
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
                m(".tree-item", m("a.link", { href: "https://germfood.bandcamp.com/album/night-of-the-consumers-ost", target: "_blank" }, `"Store Track 1: Main website background song"`)),
                m(".tree-item", m("a.link", { href: "https://github.com/sourcesounds/hl2", target: "_blank" }, `Half-Life 2 (Source) sounds effects`)),
              ]),
            ]),
            m(".tree-section", [
              m("p.heading.tree-header", "Imágenes"),
              m(".tree-list", [
                m(".tree-item", m("a.link", { href: "https://www.reddit.com/r/LiminalSpace/comments/19ek506/voices_of_the_void/", target: "_blank" }, "Banner & others VotV images")),
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
              m("textarea", `<iframe src="https://webtiles.kicya.net/e/timmy.nekoweb.org" width="250" height="270" frameborder="0"></iframe>\n\nhttps://timmy.nekoweb.org/pages/others/tile/`.trim())
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