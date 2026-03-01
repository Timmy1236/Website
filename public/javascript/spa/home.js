import m from "mithril";
import ButtonsRow from "../components/buttons_row.js";
import { getLatest } from "../pages/home/get-latest.js";

const Home = {
  latest: null,

  oncreate() {
    window.refreshI18n?.();
    window.initDefaultSettings?.();
  },

  oninit: function () {
    getLatest().then(data => {
      this.latest = data;
      m.redraw();
    });
  },

  view: function () {
    return m(".content-column", [

      m(".panel", [
        m(".panel-header", m("h1.text-title", { "data-i18n": "home.welcome.title" })),
        m(".panel-content", [
          m("div", { "data-i18n": "[html]home.welcome.text" }),
          m("div", {
            style: "width:100%;display:flex;justify-content:center"
          }, m("img#nom-nom", {
            src: "./assets/images/pages/home/tree.gif",
            style: "margin-top:10px"
          }))
        ])
      ]),

      m(".panel", [
        m(".panel-header", m("h1.text-title", { "data-i18n": "home.entries.title" })),
        m(".panel-content", [
          this.latest ? m("div", [
            m("div", [
              m("a.link", { href: "content/" + this.latest.blog.url }, this.latest.blog.title)
            ]),
            m("div", [
              m("a.link", { href: "content/" + this.latest.changelog.url }, this.latest.changelog.title)
            ])
          ])
            : m("p", "Cargando...")
        ])
      ]),

      m(ButtonsRow)
    ])
  }
};

export default Home;
