import m from "mithril";
import { showButtonOverlay, hideButtonOverlay } from "./links.buttons.overlay.ts";
import { neighborSites, likesSite, MyButton } from "./links.buttons.list.ts";
import { showToast } from "../../shared/components/toast.ts";
import { setCurrentPath } from "../../shared/core/html-meta.ts";
import { getTranslation } from "../../shared/core/i18n.ts";
import panel from "../../shared/components/panel.ts";

const Others = {
  oncreate() {
    setCurrentPath(m.route, "link");
  },

  view: function () {
    return m(".content", [
      m(panel, {
        title: getTranslation("links.buttonWall.title"),
        content: [
          m("h2", getTranslation("links.buttonWall.list.neighbors")),
          m(".website-buttons",
            neighborSites.map(site =>
              m("a", {
                "data-tooltip-i18n": site.tooltip ? site.tooltip : null,
                href: site.url,
                onmouseenter: (e: MouseEvent) => showButtonOverlay(site, e.currentTarget as HTMLElement),
                onmouseleave: () => hideButtonOverlay()
              },
              m("img", { src: site.button, alt: site.url })
              )
            )
          ),

          m("h2", getTranslation("links.buttonWall.list.likes")),
          m(".website-buttons",
            likesSite.map(site =>
              m("a", {
                "data-tooltip-i18n": site.tooltip ? site.tooltip : null,
                href: site.url,
                onmouseenter: (e: MouseEvent) => showButtonOverlay(site, e.currentTarget as HTMLElement),
                onmouseleave: () => hideButtonOverlay()
              },
              m("img", { src: site.button, alt: site.url })
              )
            )
          ),

          m("h2", getTranslation("links.buttonWall.list.myButton")),
          m(".website-buttons",
            m("a", {
              "data-tooltip-i18n": MyButton.tooltip ? MyButton.tooltip : null,
              onmouseenter: (e: MouseEvent) => showButtonOverlay(MyButton, e.currentTarget as HTMLElement), onmouseleave: () => hideButtonOverlay()
            },
            m("img", {
              src: "https://timmy.nekoweb.org/assets/images/buttons/timmy_button.png",
              onclick: () => {
                navigator.clipboard.writeText("https://timmy.nekoweb.org/assets/images/buttons/timmy_button.png");
                showToast("info", true, "Button!", false, "toast.timmyButton", true);
              }
            })
            )
          )
        ]
      }),

      m(panel, {
        title: getTranslation("links.credits.title"),
        content: [
          m(".tree-section", [
            m("p.heading.tree-header", "Hosting"),
            m(".tree-list", [
              m(".tree-item", m("a.link", { href: "https://nekoweb.org/", target: "_blank" }, "NekoWeb")),
              m(".tree-item", m("a.link", { href: "https://filegarden.com/", target: "_blank" }, "File Garden"))
            ])
          ]),
          m(".tree-section", [
            m("p.heading.tree-header", "Librerías"),
            m(".tree-list", [
              m(".tree-item", m("a.link", { href: "https://mithril.js.org/", target: "_blank" }, "Mithril.js")),
              m(".tree-item", m("a.link", { href: "https://www.11ty.dev/", target: "_blank" }, "Eleventy")),
              m(".tree-item", m("a.link", { href: "https://esbuild.github.io/", target: "_blank" }, "ESBuild"))
            ])
          ]),
          m(".tree-section", [
            m("p.heading.tree-header", "Herramientas Externas"),
            m(".tree-list", [
              m(".tree-item", m("a.link", { href: "https://ditherit.com/", target: "_blank" }, "Dither it!")),
              m(".tree-item", m("a.link", { href: "https://compress-or-die.com/", target: "_blank" }, "Compress or Die")),
              m(".tree-item", m("a.link", { href: "https://ezgif.com/", target: "_blank" }, "Ezgif"))
            ])
          ]),
          m(".tree-section", [
            m("p.heading.tree-header", "Audios & Canciones"),
            m(".tree-list", [
              m(".tree-item", m("a.link", { href: "https://chezmonplaisir.bandcamp.com/album/lofi-ftw", target: "_blank" }, "Lack of Color - That tenderness")),
              m(".tree-item", m("a.link", { href: "https://github.com/sourcesounds/hl2", target: "_blank" }, "Source Engine"))
            ])
          ]),
          m(".tree-section", [
            m("p.heading.tree-header", "Imágenes"),
            m(".tree-list", [
              m(".tree-item", m("a.link", { href: "https://www.reddit.com/r/LiminalSpace/comments/19ek506/voices_of_the_void/", target: "_blank" }, "Voices of the Void screenshots")),
              m(".tree-item", m("a.link", { href: "https://die-of-death.fandom.com/wiki/Die_of_Death_Wiki", target: "_blank" }, "Die of Death screenshots"))
            ])
          ])
        ]
      }),

      m(panel, {
        title: "iFrame: WebTiles",
        content: m("div.iframe.container", [
          m("iframe", {
            src: "https://webtiles.kicya.net/e/timmy.nekoweb.org",
            width: "250",
            height: "270",
            frameborder: "0"
          }),
          m("textarea", "<iframe src=\"https://webtiles.kicya.net/e/timmy.nekoweb.org\" width=\"250\" height=\"270\" frameborder=\"0\"></iframe>".trim())
        ])
      })
    ]);
  }
};

export default Others;
