import m from "mithril";
import { getLatest, getLastCommit } from "../pages/home/get-latest.js";
import { refreshi18n } from "../core/i18n.js";

const Home = {
  latest: null,

  oncreate() {
    refreshi18n();
  },

  oninit: function () {
    getLatest().then(data => {
      this.latest = data;
      m.redraw();
    });

    getLastCommit().then(data => {
      this.latestCommit = data[0];
      m.redraw();
    });

  },

  view: function () {
    return m(".content-column", [
      m(".panel", [
        m(".panel-header", [
          m("h1.text-title", { "data-i18n": "home.welcome.title" }),

          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ]),
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

      m(".panel-grid-2", {
        style: "--panel-col-1:1fr; --panel-col-2:1fr;"
      }, [

        m(".panel", [ // Changelog
          m(".panel-header",
            m("h1.text-title", { "data-i18n": "home.entries.title" }),

            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ),
          m(".panel-content", [
            this.latest ? m("div", [
              m(".card", [
                m("a.card-title link", { href: "content/" + this.latest.changelog.url }, this.latest.changelog.title),
                m("p.card-content", this.latest.changelog.description)
              ])
            ])
              : m("p", "Cargando...")
          ])
        ]),

        m(".panel", [ // Blog
          m(".panel-header",
            m("h1.text-title", { "data-i18n": "home.entries.title" }),

            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ),
          m(".panel-content", [
            this.latest ? m("div", [
              m(".card", [
                m("a.card-title link", { href: "content/" + this.latest.blog.url }, this.latest.blog.title),
                m("p.card-content", this.latest.blog.description)
              ]),
            ])
              : m("p", "Cargando...")
          ])
        ]),
      ]),

      m(".panel", [
        m(".panel-header", [
          m("h1.text-title", { "data-i18n": "home.welcome.title" }),

          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ]),
        m(".panel-content", [
          this.latestCommit ? m("div", [
            m(".card", [
              m("a.card-title link", { href: this.latestCommit.html_url }, this.latestCommit.sha),
              m("p.card-content", this.latestCommit.commit.message)
            ])
          ]) : m("p", "Cargando...")
        ])
      ]),
    ])
  }
};

export default Home;
