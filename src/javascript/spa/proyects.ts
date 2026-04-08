import m from "mithril";
import { initImageOverlay } from "../ui/image-overlay.js";
import { refreshi18n } from "../core/i18n.js";

const Home = {
  oncreate() {
    refreshi18n();
    initImageOverlay();
  },

  view: () =>
    m(".content-column", [

      m(".panel", [
        m(".panel-header",
          m("h1.text-title", { "data-i18n": "projects.title" }),

          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ),

        m(".projects-list", [

          // PROJECT
          m(".panel-content", [

            m(".project-header", [
              m(".project-icon",
                m("img", {
                  src: "./assets/images/pages/proyects/icons/website.webp",
                  alt: "Website icon"
                })
              ),

              m(".project-meta", [
                m("h2.project-title", "Timmy's digital dumpster"),
                m(".project-tags", [
                  m("span.tag", "Mithril.js"),
                  m("span.tag", "11ty"),
                  m("span.tag", "HTML / CSS / JS")
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
                m("img", { src: "https://file.garden/aSqYsBZqpx5ZY3su/media/img/nekoweb/screenshots/website-2026.png", alt: "2026" }),
                m("p.image-text", "2026 - v2.0 BETA")
              ]),
            ]),

            m(".proyects-buttons", [
              m("button.button", { onclick: () => window.open("https://github.com/Timmy1236/Website", "_blank") }, [
                m("img", { src: "./assets/images/icons/socials/github.png", alt: "GitHub" }),
                "GitHub"
              ])
            ])
          ])
        ])
      ]),
    ])
};

export default Home;
