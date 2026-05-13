import m from "mithril";
import { getLatest, getLastCommit } from "./latest.ts";
import { refreshi18n } from "../../shared/core/i18n.js";
import { applyBBCode } from "../../shared/ui/bbcode.ts";
import { setCurrentPath } from "../../shared/core/html-meta.ts";
import { createImageOverlay } from "../../shared/ui/image-overlay.ts";
import type { Latest } from "./entries.d.ts";
import type { Root } from "./github.d.ts"

const Home = {
  latest: null as Latest | null,
  latestCommit: null as Root | null,
  commitSHA: null as string | null,
  commitDate: null as string | null,

  oncreate() {
    setCurrentPath(m.route);
    refreshi18n();
    applyBBCode();
  },

  oninit: function () {
    getLatest().then((data: Latest) => {
      this.latest = data;

      m.redraw();
    });

    getLastCommit().then((data: Root[]) => {
      if (data && data.length > 0) {
        const lastCommit = data[0];

        this.latestCommit = lastCommit;
        this.commitSHA = String(lastCommit.sha).slice(0, 7);
        this.commitDate = new Date(lastCommit.commit.committer.date).toLocaleDateString();

        m.redraw();
      }
    });
  },

  view: function () {
    return m(".content", [
      m(".panel-frame", [
        m(".panel", [
          m(".panel-header", [
            m("p.text-title", { "data-i18n": "home.welcome.title" }),
            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ]),

          m(".panel-content", [
            m("div", { style: "display: flex;" }, [
              m("p", { "data-i18n": "home.welcome.text", "data-bbcode": true }),
              m("img", { src: "./assets/images/pages/home/alien.gif", style: "height:130px;pointer-events:none;" })
            ]),
          ])
        ])
      ]),

      m(".panel-grid-2", {
        style: "--panel-col-1:1fr; --panel-col-2:1fr;"
      }, [

        // ==== CHANGELOG ====
        m(".panel-frame", [
          m(".panel", [
            m(".panel-header",
              m("p.text-title", { "data-i18n": "home.entries.changelog.title" }),

              m(".panel-controls", [
                m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
                m("button.panel-button", { "data-panel-action": "close" }, "X")
              ])
            ),
            m(".panel-content", [
              this.latest ? m("div", [
                m("a.entry-title link", { href: "content/" + this.latest.changelog.url }, this.latest.changelog.title),
                m("p.entry-date", this.latest.changelog.date),
                m("p.entry-content", this.latest.changelog.description),
                m(".spacing-line", { style: "--spacing-margin: 10px;" }),
                m("img.entry-image", { onclick: () => { createImageOverlay("https://file.garden/aSqYsBZqpx5ZY3su/Documento.png") }, src: this.latest.changelog.preview }),
              ])
                : m("p", "Cargando...")
            ])
          ])
        ]),

        // ==== BLOG ====
        m(".panel-frame", [
          m(".panel", [
            m(".panel-header",
              m("p.text-title", { "data-i18n": "home.entries.blog.title" }),

              m(".panel-controls", [
                m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
                m("button.panel-button", { "data-panel-action": "close" }, "X")
              ])
            )
            ,
            m(".panel-content", [
              this.latest ? m("div", [
                m("a.entry-title link", { href: "content/" + this.latest.blog.url }, this.latest.blog.title),
                m("p.entry-date", this.latest.blog.date),
                m("p.entry-content", this.latest.blog.description),
                m(".spacing-line", { style: "--spacing-margin: 10px;" }),
                m("img.entry-image", { src: this.latest.blog.preview }),
              ])
                : m("p", "Cargando...")
            ])
          ]),
        ])
      ]),

      // ==== COMMIT ====
      m(".panel-frame", [
        m(".panel", [
          m(".panel-header", [
            m("p.text-title", { "data-i18n": "home.entries.commit.title" }),

            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ]),
          m(".panel-content", [
            this.latestCommit ? m("div", [
              m("a.entry-title link", { href: this.latestCommit.html_url }, this.commitSHA),
              m("p.entry-date", this.commitDate),
              m("p.entry-content", this.latestCommit.commit.message)
            ])
              : m("p", "Cargando...")
          ])
        ])
      ]),
    ])
  }
};

export default Home;