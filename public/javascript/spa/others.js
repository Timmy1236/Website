import m from "mithril";
import ButtonsRow from "../components/buttons_row.js";

const Others = {
  oncreate() {
    window.refreshI18n?.();
    window.initDefaultSettings?.();
  },

  view: () =>
    m(".content-column", [

      // WARNING / INTRO
      m(".panel", [
        m(".panel-header",
          m("h1.text-title", { "data-i18n": "others.title" })
        ),

        m(".panel-content", [
          m("span", { "data-i18n": "others.desc" })
        ])
      ]),

      // BUTTON
      m(".panel", [
        m(".panel-header", m("h1.text-title", "Button")),
        m(".panel-content", [
          m("div.iframe.container", [
            m("a", { href: "https://timmy.nekoweb.org" },
              m("img", {
                src: "https://timmy.nekoweb.org/assets/images/buttons/timmy_button.gif",
                alt: "timmy website"
              })
            ),

            m("textarea",
              `
[ Iframe ]
<a href="https://timmy.nekoweb.org"><img src="https://timmy.nekoweb.org/assets/images/buttons/timmy_button.png"></a>

[ Local ]
https://timmy.nekoweb.org/assets/images/buttons/timmy_button.png

[ File Garden ]
https://file.garden/aSqYsBZqpx5ZY3su/media/img/nekoweb/timmy_button.png
`.trim())
          ])
        ])
      ]),

      // TV TIME
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

      // WebTiles
      m(".panel", [
        m(".panel-header",
          m("h1.text-title", "WebTiles")
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

      m(ButtonsRow)
    ])
};

export default Others;