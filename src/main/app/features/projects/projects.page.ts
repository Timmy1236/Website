import m from "mithril";
import { createImageOverlay } from "../../shared/components/image-overlay.ts";
import { setCurrentPath } from "../../shared/services/html-meta.ts";
import { getTranslation } from "../../shared/services/i18n.ts";
import { panel } from "../../shared/components/panels.ts";

const Project = {
  oncreate() {
    setCurrentPath(m.route, "proyect");
  },

  view: function () {
    return m(".content", [
      m(panel, {
        title: getTranslation("main.projects.windows.dumpster.title"),
        content: [
          m(".project-header", [
            m(".project-icon", m("img", { src: "./assets/images/pages/projects/website/icon.webp", alt: "Website icon" })),
            m("h2.project-title", "Timmy's Dumpster")
          ]),

          m(".project-body", [
            m("p.project-description", getTranslation("main.projects.windows.dumpster.description"))
          ]),

          m(".gallery-container", { style: "--gallery-width: 320; --gallery-height: 200;" }, [
            m("a.gallery-item", { onclick: () => { createImageOverlay({ image: "/assets/images/pages/projects/website/1.0.0.png", title: "Timmy's Dumpster · v1.6", alt: "Website screenshot, version v1.6", previewWidth: 850, description: "main.projects.windows.dumpster.gallery.1-0-0" }); } }, [
              m("img.gallery-image", { src: "/assets/images/pages/projects/website/preview_1.0.0.webp" })
            ]),
            m("a.gallery-item", { onclick: () => { createImageOverlay({ image: "/assets/images/pages/projects/website/2.0.0.png", title: "Timmy's Dumpster · v2.0", alt: "Website screenshot, version v2.0", previewWidth: 850, description: "main.projects.windows.dumpster.gallery.2-0-0" }); } }, [
              m("img.gallery-image", { src: "/assets/images/pages/projects/website/preview_2.0.0.webp" })
            ]),
            m("a.gallery-item", { onclick: () => { createImageOverlay({ image: "/assets/images/pages/projects/website/2.1.0.png", title: "Timmy's Dumpster · v2.1", alt: "Website screenshot, version v2.1", previewWidth: 850, description: "main.projects.windows.dumpster.gallery.2-1-0" }); } }, [
              m("img.gallery-image", { src: "/assets/images/pages/projects/website/preview_2.1.0.webp" })
            ])
          ]),

          m(".projects-links", [
            m("button.button", { onclick: () => window.open("https://github.com/Timmy1236/Website", "_blank") }, m("img", { src: "./assets/images/icons/socials/github.png", alt: "" }), "GitHub")
          ])
        ]
      }),

      m(panel, {
        title: getTranslation("main.projects.windows.leafy.title"),
        content: [
          m(".project-header", [
            m(".project-icon", m("img", { src: "./assets/images/icons/leafy.webp", alt: "Leafy icon" })),
            m("h2.project-title", "Leafy")
          ]),

          m(".project-body", [
            m("p.project-description", getTranslation("main.projects.windows.leafy.description"))
          ]),

          m(".projects-links", [
            m("button.button", { onclick: () => window.open("https://github.com/Timmy1236/Leafy", "_blank") }, m("img", { src: "./assets/images/icons/socials/github.png", alt: "" }), "GitHub")
          ])
        ]
      })
    ]);
  }
};

export default Project;
