import m from "mithril";
import { getLatest, getLastCommit } from "../pages/home/get-latest.js";
import { refreshi18n } from "../core/i18n.js";

const Home = {
  latest: null,
  latestCommit: null,

  commitSHA: null,
  commitDate: null,

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
      this.commitSHA = String(data[0].sha).slice(0, 7)
      this.commitDate = new Date(data[0].commit.committer.date).toLocaleDateString();
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
          },
            m("img#slugcat", {
              src: "./assets/images/pages/home/rw-hunter.png",
              style: "margin-right:10px;transform: scale(-1, 1);",
              alt: "Slugcat hunter"
            }),

            m("img#slugcat", {
              src: "./assets/images/pages/home/rw-survivor.png",
              style: "margin-left:10px;",
              alt: "Slugcat survivor"
            }))
        ])
      ]),

      m(".panel-grid-2", {
        style: "--panel-col-1:1fr; --panel-col-2:1fr;"
      }, [

        // ==== CHANGELOG ====
        m(".panel", [
          m(".panel-header",
            m("h1.text-title", { "data-i18n": "home.entries.changelog.title" }),

            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ),
          m(".panel-content", [
            this.latest ? m("div", [
              m(".card", [
                m("a.card-title link", { href: "content/" + this.latest.changelog.url }, this.latest.changelog.title),
                m("p.card-date", this.latest.changelog.date),
                m("p.card-content", this.latest.changelog.description)
              ])
            ])
              : m("p", "Cargando...")
          ])
        ]),

        // ==== BLOG ====
        m(".panel", [
          m(".panel-header",
            m("h1.text-title", { "data-i18n": "home.entries.blog.title" }),

            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ),
          m(".panel-content", [
            this.latest ? m("div", [
              m(".card", [
                m("a.card-title link", { href: "content/" + this.latest.blog.url }, this.latest.blog.title),
                m("p.card-date", this.latest.blog.date),
                m("p.card-content", this.latest.blog.description)
              ]),
            ])
              : m("p", "Cargando...")
          ])
        ]),
      ]),

      // ==== COMMIT ====
      m(".panel", [
        m(".panel-header", [
          m("h1.text-title", { "data-i18n": "home.entries.commit.title" }),

          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ]),
        m(".panel-content", [
          this.latestCommit ? m("div", [
            m(".card", [
              m("a.card-title link", { href: this.latestCommit.html_url }, this.commitSHA),
              m("p.card-date", this.commitDate),
              m("p.card-content", this.latestCommit.commit.message)
            ])
          ]) : m("p", "Cargando...")
        ])
      ]),
    ])
  }
};

export default Home;
