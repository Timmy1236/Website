import m from "mithril";
import { showButtonOverlay, hideButtonOverlay } from "./links.buttons.overlay.ts";
import { neighborSites, likesSite, MyButton } from "./links.buttons.list.ts";
import { showToast } from "../../shared/components/toast.ts";
import { setCurrentPath } from "../../shared/core/html-meta.ts";
import { getTranslation } from "../../shared/core/i18n.ts";
import panel from "../../shared/components/panel.ts";
import { siteboxGalleryStyles, renderSiteboxIframe } from "./links.sitebox.gallery.ts";

const Others = {
  oncreate() {
    setCurrentPath(m.route, "link");
  },

  view: function () {
    return m(".content", [
      m(panel, {
        title: getTranslation("links.buttonWall.title"),
        content: [
          m("h2.header", getTranslation("links.buttonWall.list.neighbors")),
          m(".website-buttons",
            neighborSites.map(site =>
              m("a", {
                "data-tooltip-i18n": site.tooltip ? site.tooltip : null,
                href: site.url,
                onmouseenter: (e: MouseEvent) => showButtonOverlay(site, e.currentTarget as HTMLElement),
                onmouseleave: (e: MouseEvent) => hideButtonOverlay(e.currentTarget as HTMLElement)
              },
              m("img", { src: site.button, alt: `A decorative, clickable button 88x31px that will take you to the user's page: ${site.owner}`, loading: "eager", fetchpriority: "high", decoding: "async", width: 88, height: 31 })
              )
            )
          ),

          m("h2.header", getTranslation("links.buttonWall.list.likes")),
          m(".website-buttons",
            likesSite.map(site =>
              m("a", {
                "data-tooltip-i18n": site.tooltip ? site.tooltip : null,
                href: site.url,
                onmouseenter: (e: MouseEvent) => showButtonOverlay(site, e.currentTarget as HTMLElement),
                onmouseleave: (e: MouseEvent) => hideButtonOverlay(e.currentTarget as HTMLElement)
              },
              m("img", { src: site.button, alt: `A decorative, clickable button 88x31px that will take you to the user's page: ${site.owner}` })
              )
            )
          ),

          m("h2.header", getTranslation("links.buttonWall.list.myButton")),
          m(".website-buttons",
            m("a", {
              "data-tooltip-i18n": MyButton.tooltip ? MyButton.tooltip : null,
              onmouseenter: (e: MouseEvent) => showButtonOverlay(MyButton, e.currentTarget as HTMLElement), onmouseleave: (e: MouseEvent) => hideButtonOverlay(e.currentTarget as HTMLElement)
            },
            m("img", {
              src: "https://timmy.nekoweb.org/assets/images/buttons/timmy_button.png",
              alt: `A decorative, clickable button 88x31px that will take you to the user's page: ${MyButton.owner}`,
              onclick: () => {
                navigator.clipboard.writeText("https://timmy.nekoweb.org/assets/images/buttons/timmy_button.png");
                showToast({ type: "info", playSound: true, name: "Button!", desc: "toast.timmyButton" });
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
            m("h2.heading.tree-header.header", "Hosting"),
            m(".tree-list", [
              m(".tree-item", m("a.link", { href: "https://nekoweb.org/" }, "NekoWeb")),
              m(".tree-item", m("a.link", { href: "https://filegarden.com/" }, "File Garden"))
            ])
          ]),
          m(".tree-section", [
            m("h2.heading.tree-header.header", "Librerías"),
            m(".tree-list", [
              m(".tree-item", m("a.link", { href: "https://mithril.js.org/" }, "Mithril.js")),
              m(".tree-item", m("a.link", { href: "https://www.11ty.dev/" }, "Eleventy")),
              m(".tree-item", m("a.link", { href: "https://esbuild.github.io/" }, "ESBuild"))
            ])
          ]),
          m(".tree-section", [
            m("h2.heading.tree-header.header", "Herramientas Externas"),
            m(".tree-list", [
              m(".tree-item", m("a.link", { href: "https://ditherit.com/" }, "Dither it!")),
              m(".tree-item", m("a.link", { href: "https://compress-or-die.com/" }, "Compress or Die")),
              m(".tree-item", m("a.link", { href: "https://ezgif.com/" }, "Ezgif"))
            ])
          ]),
          m(".tree-section", [
            m("h2.heading.tree-header.header", "Audios & Canciones"),
            m(".tree-list", [
              m(".tree-item", m("a.link", { href: "https://chezmonplaisir.bandcamp.com/album/lofi-ftw" }, "Lack of Color - That tenderness")),
              m(".tree-item", m("a.link", { href: "https://github.com/sourcesounds/hl2" }, "Source Engine"))
            ])
          ]),
          m(".tree-section", [
            m("h2.heading.tree-header.header", "Imágenes"),
            m(".tree-list", [
              m(".tree-item", m("a.link", { href: "https://www.reddit.com/r/LiminalSpace/comments/19ek506/voices_of_the_void/" }, "Voices of the Void screenshots")),
              m(".tree-item", m("a.link", { href: "https://die-of-death.fandom.com/wiki/Die_of_Death_Wiki" }, "Die of Death screenshots"))
            ])
          ])
        ]
      }),

      m(panel, {
        title: getTranslation("links.siteboxGallery.title"),
        content: m(".sitebox-gallery", siteboxGalleryStyles.map(renderSiteboxIframe))
      }),

      m(panel, {
        title: "iFrame: WebTiles",
        content: m("div.iframe", [
          m("iframe", {
            src: "https://webtiles.kicya.net/e/timmy.nekoweb.org",
            width: "250",
            height: "270",
            frameborder: "0"
          })
        ])
      })
    ]);
  }
};

export default Others;
