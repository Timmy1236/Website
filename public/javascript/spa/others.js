import ButtonsRow from "../components/buttons_row.js";

const Others = {
  oncreate() {
    window.refreshI18n?.();
    window.initDefaultSettings?.();
  },

  view: () =>
    m("div.main-column", [

      // WARNING / INTRO
      m("div.content-block", [
        m("div.title",
          m("h1.text-title", { "data-i18n": "others.title" })
        ),

        m("div.div-content", [
          m("div.div-inside", [
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
        ])
      ]),

      // TV TIME
      m("div.content-block.iframe", [
        m("div.title",
          m("h1.text-title", "TV TIME")
        ),

        m("div.iframe.container", [
          m("iframe", {
            src: "/pages/tv-time.html", // ajustá si tu build cambia rutas
            width: "327",
            height: "339",
            frameborder: "0"
          }),

          m("textarea", `<iframe src="https://timmy.nekoweb.org/pages/tv-time" width="327" height="339" frameborder="0"></iframe>`.trim())
        ])
      ]),

      // BUTTON
      m("div.content-block.iframe", [
        m("div.title",
          m("h1.text-title", "BUTTON")
        ),

        m("div.iframe.container", [
          m("a", { href: "https://timmy.nekoweb.org" },
            m("img", {
              src: "https://timmy.nekoweb.org/assets/images/buttons/timmy_button.gif",
              alt: "timmy website"
            })
          ),

          m("textarea", `https://timmy.nekoweb.org/assets/images/buttons/timmy_button.gif
            
<a href="https://timmy.nekoweb.org"><img src="https://timmy.nekoweb.org/assets/images/buttons/timmy_button.gif"></a>`.trim())
        ])
      ]),

      m(ButtonsRow)
    ])
};

export default Others;