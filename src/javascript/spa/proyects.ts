import m from "mithril";
import { initImageOverlay } from "../ui/image-overlay.js";
import { refreshi18n } from "../core/i18n.js";

const Home = {
  oncreate() {
    refreshi18n();
    initImageOverlay();
  },

  view: function () {
    return m(".content", [
      m(".panel", [
        m(".panel-header",
          m("p.text-title", { "data-i18n": "projects.title" }),

          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ),

        m(".projects-list", [

          // PROJECT
          m(".panel-content", [

            m(".card", [
              m(".project-header", [
                m(".project-icon",
                  m("img", {
                    src: "./assets/images/favicon/pages.png",
                    alt: "Website icon"
                  })
                ),

                m(".project-meta", [
                  m("h2.project-title", "Timmy's digital dumpster"),
                  m(".project-tags", [
                    m("span.tag", "mithril.js"),
                    m("span.tag", "11ty"),
                    m("span.tag", "esbuild")
                  ])
                ])
              ]),

              m(".project-body", [
                m("p.project-description", {
                  "data-i18n": "projects.projectsList.website.description"
                })
              ]),

              m(".project-gallery", [
                m(".image-preview", [
                  m("img", { src: "https://file.garden/aSqYsBZqpx5ZY3su/media/img/nekoweb/screenshots/website-2025.png", alt: "2025" }),
                  m("p.image-text", "2025 - v1.0")
                ]),
                m(".image-preview", [
                  m("img", { src: "https://file.garden/aSqYsBZqpx5ZY3su/media/img/nekoweb/screenshots/Website-2.0.0.png", alt: "2026" }),
                  m("p.image-text", "2026 - v2.0")
                ]),
              ]),

              m(".proyects-links", [
                m("a.link-icon", { href: "https://github.com/Timmy1236/Website", target: "_blank" }, [
                  m("img", { src: "/assets/images/icons/socials/github.png" }),
                  m("span", "GitHub")
                ])
              ])
            ])
          ])
        ])
      ]),
    ])
  }
};

export default Home;
