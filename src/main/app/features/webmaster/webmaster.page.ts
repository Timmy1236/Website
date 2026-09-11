import m from "mithril";
import { loadStatus } from "./webmaster.discord.js";
import { setCurrentPath } from "../../shared/core/html-meta.js";
import { parseBBCode } from "../../shared/utils/bbcode.js";
import { getTranslation } from "../../shared/core/i18n.ts";
import { click } from "../../shared/handlers/profile-clicker.ts";
import panel from "../../shared/components/panel.ts";
import { gamesCover, seriesMoviesCover, tagInfra, tagLanguages, tagSoftware } from "./webmaster.list.ts";

const webmasterPage = {
  oncreate() {
    setCurrentPath(m.route, "user");
  },

  view: function () {
    return m(".content", [
      m(".panel-grid-2", { style: "--panel-col-1:315px; --panel-col-2:1fr;" }, [
        m(panel, {
          title: getTranslation("webmaster.profile-title"),
          content: m(".profile-panel-content", [
            m(".profile-header", [
              m(".profile-avatar",
                m("img#pfp", { onclick: () => click(), "data-sound-click": "squeak", src: "/assets/images/pages/webmaster/badware.webp", alt: "A 'Die of Death' badware plush toy" })
              ),
              m(".profile-info", [
                m("h2.profile-username", "Timmy1236"),
                m("a.profile-status#status", { "data-tooltip-i18n": "tooltip.pages.webmaster.profile.status", onclick: loadStatus }, "Status")
              ])
            ]),
            m(".profile-section", [
              m("p.profile-section-title", getTranslation("webmaster.socials-title")),
              m(".profile-socials", [
                m("button.button", { onclick: () => window.open("https://github.com/Timmy1236", "_blank"), "data-tooltip": "github.com/Timmy1236" }, m("img", { src: "./assets/images/icons/socials/github.png", alt: "" }), m("span.visually-hidden", "GitHub account")),
                m("button.button", { onclick: () => window.open("https://discordapp.com/users/375889010419171328", "_blank"), "data-tooltip": "@timmy1236" }, m("img", { src: "./assets/images/icons/socials/discord.png", alt: "" }), m("span.visually-hidden", "Discord account")),
                m("button.button", { onclick: () => window.open("https://steamcommunity.com/id/Timmy1236/", "_blank"), "data-tooltip": "STEAM_0:1:96376877" }, m("img", { src: "./assets/images/icons/socials/steam.png", alt: "" }), m("span.visually-hidden", "Steam account"))
              ])
            ])
          ])
        }),
        m(panel, {
          title: getTranslation("webmaster.about-me.title"),
          content: m("p", m.trust(parseBBCode(getTranslation("webmaster.about-me.description"))))
        })
      ]),

      m(panel, {
        title: getTranslation("webmaster.tech-stack.title"),
        content: [
          m("h2.header", getTranslation("webmaster.tech-stack.languages")),
          m(".scroll-tag-container", [
            tagLanguages.map(tag =>
              m(".tag", [m("img", { src: tag.icon, alt: "" }), m("span", tag.text)])
            )
          ]),
          m("h2.header", getTranslation("webmaster.tech-stack.infra")),
          m(".scroll-tag-container", [
            tagInfra.map(tag =>
              m(".tag", [m("img", { src: tag.icon, alt: "" }), m("span", tag.text)])
            )
          ]),
          m("h2.header", getTranslation("webmaster.tech-stack.software")),
          m(".scroll-tag-container", [
            tagSoftware.map(tag =>
              m(".tag", [m("img", { src: tag.icon, alt: "" }), m("span", tag.text)])
            )
          ])
        ]
      }),

      m(panel, {
        title: getTranslation("webmaster.interest.title"),
        content: [
          m("h2.header", getTranslation("webmaster.interest.games")),
          m(".scroll-cover-container", [
            gamesCover.map(cover =>
              m("a.cover", { href: cover.link, "data-tooltip-i18n": cover.fact }, [
                m("img.cover-image", { src: cover.cover, alt: `A clickable cover art image for the video game: ${cover.title}` }) // Mhm, cover.cover -> Timmy 180iq
              ])
            )
          ]),
          m("h2.header", getTranslation("webmaster.interest.series")),
          m(".scroll-cover-container", [
            seriesMoviesCover.map(cover =>
              m("a.cover", { href: cover.link, "data-tooltip-i18n": cover.fact }, [
                m("img.cover-image", { src: cover.cover, alt: `A clickable cover art image for the series or movie: ${cover.title}` }) // Mhm, cover.cover -> Timmy 180iq
              ])
            )
          ])
        ]
      })
    ]);
  }
};

export default webmasterPage;
