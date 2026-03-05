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
          m("span", {
            style: "color:#ffa5a5;font-size:28px;",
            "data-i18n": "others.warning"
          }),
          m("br"),
          m("br"),
          m("span", {
            "data-i18n": "others.desc"
          })
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