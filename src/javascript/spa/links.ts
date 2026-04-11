import m from "mithril";
import { refreshi18n } from "../core/i18n";

const Others = {
  oncreate() {
    refreshi18n();
  },

  view: () =>
    m(".content-column", [

      m(".panel",
        m(".panel-header", [
          m("p", { "data-i18n": "neighbors.title" }),

          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ]),
        m(".panel-content", [
          m(".neighbors", [
            m("a", { href: "https://chantu.nekoweb.org/", "data-tooltip": "Chantu Website!" },
              m("img", { src: "https://chantu.nekoweb.org/imgs/buttons/Chantu.png", alt: "Chantu button" })
            ),
            m("a", { href: "https://slowslushie.nekoweb.org/", "data-tooltip": "Slowslushie Website!" },
              m("img", { src: "/assets/images/buttons/slowslushie-fix.png", alt: "slowslushie button" })
            ),
            m("a", { href: "https://nyani58.nekoweb.org/", "data-tooltip": "NYANI58 Website!" },
              m("img", { src: "https://file.garden/Z6nZpUcjoTvBXgF3/assets/realimportant/nyani58_button1.gif", alt: "nyani58 button" })
            ),
            m("a", { href: "https://nogood-angel.nekoweb.org/home", "data-tooltip": "No-Good Angel Website!" },
              m("img", { src: "https://nogood-angel.neocities.org/images/graphics/button_nogood-angel.png", alt: "nogood-angel button" })
            ),
            m("a", { href: "https://someones-insane.nekoweb.org/", "data-tooltip": "Someones-Insane Website!" },
              m("img", { src: "https://someones-insane.nekoweb.org/images/imapettyasshole_button.gif", alt: "Someones-Insane button" })
            ),
            m("a", { href: "https://yefreitor.com", "data-tooltip": "yefreitor Website!" },
              m("img", { src: "https://yefreitor.com/img/button.png", alt: "Someones-Insane button" })
            ),
            m("a", { href: "https://xyzko.nekoweb.org/", "data-tooltip": "xyzko Website!" },
              m("img", { src: "/assets/images/buttons/no-button.png", alt: "placeholder button" })
            ),
            m("a", { href: "https://bweh.dhyotteh.com/", "data-tooltip": "¡Bwéh! Website!" },
              m("img", { src: "/assets/images/buttons/no-button.png", alt: "placeholder button" })
            ),
            m("a", { href: "https://jovidmtp.nekoweb.org", "data-tooltip": "(jovidmtp) This is a website!" },
              m("img", { src: "/assets/images/buttons/no-button.png", alt: "placeholder button" })
            ),
            m("a", { href: "https://ramon.nekoweb.org/", "data-tooltip": "Ramón Website!" },
              m("img", { src: "/assets/images/buttons/no-button.png", alt: "placeholder button" })
            ),
          ])
        ])
      ),

      // BUTTON
      m(".panel", [
        m(".panel-header",
          m("p.text-title", "Button"),

          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ),
        m(".panel-content", [
          m("div.iframe.container", [
            m(".neighbors", [
              m("a", { href: "https://timmy.nekoweb.org", "data-tooltip": "My Website!" },
                m("img", {
                  src: "https://timmy.nekoweb.org/assets/images/buttons/timmy_button.png",
                  alt: "My website"
                })
              ),
            ]),

            m("textarea",
              `
[ Hotlink ]
https://timmy.nekoweb.org/assets/images/buttons/timmy_button.png

[ File Garden ]
https://file.garden/aSqYsBZqpx5ZY3su/media/img/nekoweb/timmy_button.png
`.trim())
          ])
        ])
      ]),

      // Créditos
      m(".panel", [
        m(".panel-header",
          m("p.text-title", { "data-i18n": "links.credits.title" }),

          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ),
        m(".panel-content", [

          m("p.heading", "[ Hosting ]"),
          m("ul", [
            m("li", [m("a.link", { href: "https://nekoweb.org/", target: "_blank" }, "Website: Nekoweb")]),
            m("li", [m("a.link", { href: "https://filegarden.com/", target: "_blank" }, "Images: File Garden")]),
          ]),

          m(".spacing-line", { style: "--spacing-margin: 10px;" }),

          m("p.heading", "[ Librerías ]"),
          m("ul", [
            m("li", [m("a.link", { href: "https://mithril.js.org/", target: "_blank" }, "Mithril: Single Page Application")]),
            m("li", [m("a.link", { href: "https://www.11ty.dev/", target: "_blank" }, "11ty: Static Site Generator")]),
            m("li", [m("a.link", { href: "https://esbuild.github.io/", target: "_blank" }, "esbuild: TypeScript & CSS Bundler")]),
          ]),

          m(".spacing-line", { style: "--spacing-margin: 10px;" }),

          m("p.heading", "[ Herramientas Externas ]"),
          m("ul", [
            m("li", [m("a.link", { href: "https://ditherit.com/", target: "_blank" }, "Dither it!")]),
            m("li", [m("a.link", { href: "https://compress-or-die.com/", target: "_blank" }, "Compress or Die")]),
            m("li", [m("a.link", { href: "https://ezgif.com/", target: "_blank" }, "Ezgif")]),
          ]),

          m(".spacing-line", { style: "--spacing-margin: 10px;" }),

          m("p.heading", "[ Audios & Canciones ]"),
          m("ul", [
            m("li", [m("a.link", { href: "https://germfood.bandcamp.com/album/night-of-the-consumers-ost", target: "_blank" }, `"Store Track 1: Main website background song"`)])
          ]),

          m(".spacing-line", { style: "--spacing-margin: 10px;" }),

          m("p.heading", "[ Imágenes ]"),
          m("ul", [
            m("li", [m("a.link", { href: "https://www.reddit.com/r/LiminalSpace/comments/19ek506/voices_of_the_void/", target: "_blank" }, "Banner & others VotV images")]),
          ]),
        ])
      ]),

      // WebTiles
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

            m("textarea", `<iframe src="https://webtiles.kicya.net/e/timmy.nekoweb.org" width="250" height="270" frameborder="0"></iframe>

https://timmy.nekoweb.org/pages/others/tile/`
              .trim())
          ])
        ]),
      ]),

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
      ]),

    ])
};

export default Others;