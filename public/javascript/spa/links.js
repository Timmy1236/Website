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
          m("h1", { "data-i18n": "neighbors.title" }),
        ]),
        m(".panel-content", [
          m(".neighbors", [
            m("a", { href: "https://chantu.nekoweb.org/", "data-tooltip": "Chantu Website!" },
              m("img", {
                src: "https://chantu.nekoweb.org/imgs/buttons/Chantu.png",
                alt: "Chantu website"
              })
            ),
            m("a", { href: "https://slowslushie.nekoweb.org/", "data-tooltip": "Slowslushie Website!" },
              m("img", {
                src: "/assets/images/buttons/slowslushie-fix.png",
                alt: "slowslushie website"
              })
            ),
            m("a", { href: "https://nyani58.nekoweb.org/", "data-tooltip": "NYANI58 Website!" },
              m("img", {
                src: "https://file.garden/Z6nZpUcjoTvBXgF3/assets/realimportant/nyani58_button1.gif",
                alt: "nyani58 website"
              })
            ),
            m("a", { href: "https://nogood-angel.nekoweb.org/home", "data-tooltip": "No-Good Angel Website!" },
              m("img", {
                src: "https://nogood-angel.neocities.org/images/graphics/button_nogood-angel.png",
                alt: "nogood-angel website"
              })
            ),
            m("a", { href: "https://xyzko.nekoweb.org/", "data-tooltip": "xyzko Website!" },
              m("img", {
                src: "/assets/images/buttons/no-button.png",
                alt: "xyzko website"
              })
            ),
            m("a", { href: "https://bweh.dhyotteh.com/", "data-tooltip": "¡Bwéh! Website!" },
              m("img", {
                src: "/assets/images/buttons/no-button.png",
                alt: "¡Bwéh! Website!"
              })
            ),
          ])
        ])
      ),

      // BUTTON
      m(".panel", [
        m(".panel-header", m("h1.text-title", "Button")),
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

      /* TV TIME - Esto sera para mas tarde, muhahaha〈•ˇ‸ˇ•〉Ψ
      m(".panel", [
        m(".panel-header",
          m("h1.text-title", "TV TIME")
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
      */

      // Créditos
      m(".panel", [
        m(".panel-header",
          m("h1.text-title", "Créditos")
        ),
        m(".panel-content", [

          m("h3", "Hosting:"),
          m("ul", [
            m("li", [m("a.link", { href: "https://nekoweb.org/", target: "_blank" }, "Website: Nekoweb")]),
            m("li", [m("a.link", { href: "https://filegarden.com/", target: "_blank" }, "Images: File Garden")]),
          ]),

          m(".spacing-line", { style: "--spacing-margin: 10px;" }),

          m("h3", "Softwares:"),
          m("ul", [
            m("li", [m("a.link", { href: "https://mithril.js.org/", target: "_blank" }, "Mithril: Single Page Application")]),
            m("li", [m("a.link", { href: "https://www.11ty.dev/", target: "_blank" }, "11ty: Static Site Generator")]),
            m("li", [m("a.link", { href: "https://swup.js.org/", target: "_blank" }, "Swup: Page Transition")]),
            m("li", [m("a.link", { href: "https://esbuild.github.io/", target: "_blank" }, "esbuild: Bundler")]),
          ]),

          m(".spacing-line", { style: "--spacing-margin: 10px;" }),

          m("h3", "Herramientas externas:"),
          m("ul", [
            m("li", [m("a.link", { href: "https://ditherit.com/", target: "_blank" }, "Dither it!")]),
            m("li", [m("a.link", { href: "https://compress-or-die.com/", target: "_blank" }, "Compress or Die")]),
          ]),

          m(".spacing-line", { style: "--spacing-margin: 10px;" }),

          m("h3", "Audios/Canciones"),
          m("ul", [
            m("li", [m("a.link", { href: "https://pixabay.com/es/music/ambiente-spring-night-is-over-ambient-liminal-darkambient-night-322125/", target: "_blank" }, `"Spring night is over"`)]),
            m("li", [m("a.link", { href: "https://lesfm.net/track/elevator-music/", target: "_blank" }, `"Elevator Music"`)]),
          ]),

          m(".spacing-line", { style: "--spacing-margin: 10px;" }),

          m("h3", "Imágenes"),
          m("ul", [
            m("li", [m("a.link", { href: "https://www.reddit.com/r/LiminalSpace/comments/19ek506/voices_of_the_void/", target: "_blank" }, "Banner & others VotV images")]),
          ]),
        ])
      ]),

      // WebTiles
      m(".panel", [
        m(".panel-header",
          m("h1.text-title", "iFrame: WebTiles")
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
        ]),
      ]),
    ])
};

export default Others;