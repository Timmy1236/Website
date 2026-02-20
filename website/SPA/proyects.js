import ButtonsRow from "../components/ButtonsRow.js";

const Home = {
  oncreate() {
    window.refreshI18n?.();
    initImageOverlay();
  },

  view: () =>
    m("div.main-column", [

      m(".content-block.projects", [
        m(".title",
          m("h1.text-title", { "data-i18n": "about-me.projects.title" })
        ),

        m(".projects-list", [

          // PROJECT
          m(".div-content", [
            m(".div-inside", [

              m(".project-header", [
                m(".project-icon",
                  m("img", {
                    src: "./assets/images/proyects-icons/test.webp",
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
                  "data-i18n": "about-me.projects.projectsList.website.description"
                })
              ]),

              m(".project-gallery", [
                m(".image-preview", [
                  m("img", { src: "https://file.garden/aSqYsBZqpx5ZY3su/media/img/nekoweb/screenshots/website-2024.png", alt: "2024" }),
                  m("p.image-text", "2024")
                ]),
                m(".image-preview", [
                  m("img", { src: "https://file.garden/aSqYsBZqpx5ZY3su/media/img/nekoweb/screenshots/website-2025.png", alt: "2025" }),
                  m("p.image-text", "2025")
                ]),
                m(".image-preview", [
                  m("img", { src: "https://file.garden/aSqYsBZqpx5ZY3su/media/img/nekoweb/screenshots/website-2026.png", alt: "2026" }),
                  m("p.image-text", "2026")
                ]),
              ]),

              m(".proyects-buttons", [
                m("button.btn", { onclick: () => window.open("https://gitfront.io/r/Timmy1236321/xUutuT61nkv8/Timmy1236.github.io/", "_blank") }, [
                  m("img", { src: "./assets/images/socials/github-icon.svg", alt: "GitFront" }),
                  "GitFront"
                ])
              ])
            ]),
          ])

        ])
      ]),

      m(ButtonsRow)
    ])
};

export default Home;
