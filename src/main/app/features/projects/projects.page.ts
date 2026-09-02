import m from "mithril";
import { createImageOverlay } from "../../shared/components/image-overlay.js";
import { setCurrentPath } from "../../shared/core/html-meta.js";
import { getTranslation } from "../../shared/core/i18n.js";
import panel from "../../shared/components/panel.ts";

const Project = {
  oncreate() {
    setCurrentPath(m.route, "proyect");
  },

  view: function () {
    return m(".content", [
      m(panel, {
        title: getTranslation("projects.title"),
        content: [
          m(".project-header", [
            m(".project-icon",
              m("img", {
                src: "./assets/images/pages/projects/website/icon.webp", alt: "Website icon"
              })
            ),

            m("h1.project-title", "Timmy's Dumpster")
          ]),

          m(".project-body", [
            m("p.project-description", getTranslation("projects.list.website.description"))
          ]),

          m(".project-gallery", [
            m(".image-preview", [
              m("img", {
                onclick: () => { createImageOverlay("/assets/images/pages/projects/website/1.0.0.png"); }, src: "/assets/images/pages/projects/website/preview_1.0.0.webp", alt: "2025"
              }),
              m("p.image-text", "2025 Oct - v1.0")
            ]),
            m(".image-preview", [
              m("img", {
                onclick: () => { createImageOverlay("/assets/images/pages/projects/website/2.0.0.png"); }, src: "/assets/images/pages/projects/website/preview_2.0.0.webp", alt: "2025"
              }),
              m("p.image-text", "2026 Apr - v2.0")
            ])
          ]),

          m(".projects-links", [
            m("button.button", { onclick: () => window.open("https://github.com/Timmy1236/Website", "_blank") }, m("img", { src: "./assets/images/icons/socials/github.png" }), "GitHub")
          ])
        ]
      }),

      m(panel, {
        title: getTranslation("projects.title"),
        content: [
          m(".project-header", [
            m(".project-icon",
              m("img", {
                src: "./assets/images/icons/leafy.webp", alt: "Leafy icon"
              })
            ),

            m("h1.project-title", "Leafy")
          ]),

          m(".project-body", [
            m("p.project-description", getTranslation("projects.list.leafy.description"))
          ]),

          m(".projects-links", [
            m("button.button", { onclick: () => window.open("https://github.com/Timmy1236/Leafy", "_blank") }, m("img", { src: "./assets/images/icons/socials/github.png" }), "GitHub")
          ])
        ]
      })
    ]);
  }
};

export default Project;
