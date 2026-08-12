import m from "mithril";
import { loadStatus } from "./webmaster.discord.js";
import { setCurrentPath } from "../../shared/core/html-meta.js";
import { parseBBCode } from "../../shared/utils/bbcode.js";
import { getTranslation } from "../../shared/core/i18n.ts";
import panel from "../../shared/components/panel.ts";

const _imgIcon = (x: string) => `/assets/images/pages/webmaster/icons/${x}.svg`;
const _CoverGames = (x: string) => `/assets/images/pages/webmaster/covers/games/${x}.webp`;
const _CoverSeries = (x: string) => `/assets/images/pages/webmaster/covers/series/${x}.webp`;

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
                m("img", { "data-sound-click": "squeak", src: "/assets/images/pages/webmaster/pfp.webp" })
              ),
              m(".profile-info", [
                m("p.profile-username", "Timmy1236"),
                m("a.profile-status#status", { "data-tooltip-i18n": "tooltip.pages.webmaster.profile.status", onclick: loadStatus }, "Status")
              ])
            ]),
            m(".profile-section", [
              m("p.profile-section-title", getTranslation("webmaster.socials-title")),
              m(".profile-socials", [
                m("button.icon-button", { onclick: () => window.open("https://github.com/Timmy1236", "_blank"), "data-tooltip": "github.com/Timmy1236" }, m("img", { src: "./assets/images/icons/socials/github.png" })),
                m("button.icon-button", { onclick: () => window.open("https://discordapp.com/users/375889010419171328", "_blank"), "data-tooltip": "@timmy1236" }, m("img", { src: "./assets/images/icons/socials/discord.png" })),
                m("button.icon-button", { onclick: () => window.open("https://steamcommunity.com/id/Timmy1236/", "_blank"), "data-tooltip": "STEAM_0:1:96376877" }, m("img", { src: "./assets/images/icons/socials/steam.png" })),
                m("button.icon-button", { onclick: () => window.open("mailto:timmy.1236@outlook.com", "_blank"), "data-tooltip": "timmy.1236@outlook.com" }, m("img", { src: "./assets/images/icons/socials/mail.png" }))
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
          m("p", getTranslation("webmaster.tech-stack.languages")),
          m(".scroll-tag-container", [
            m(".tag", [m("img", { src: _imgIcon("typescript") }), m("img", { src: _imgIcon("javascript") }), m("a", "TypeScript | Javascript")]),
            m(".tag", [m("img", { src: _imgIcon("css") }), m("a", "CSS")]),
            m(".tag", [m("img", { src: _imgIcon("openjdk") }), m("a", "Java")]),
            m(".tag", [m("img", { src: _imgIcon("csharp") }), m("a", "C#")]),
            m(".tag", [m("img", { src: _imgIcon("godotengine") }), m("a", "GDScript")]),
            m(".tag", [m("img", { src: _imgIcon("python") }), m("a", "Python")]),
            m(".tag", [m("img", { src: _imgIcon("lua") }), m("a", "Lua")])
          ]),
          m("p", getTranslation("webmaster.tech-stack.infra")),
          m(".scroll-tag-container", [
            m(".tag", [m("img", { src: _imgIcon("redhat") }), m("p", "Red Hat")]),
            m(".tag", [m("img", { src: _imgIcon("debian") }), m("p", "Debian")]),
            m(".tag", [m("img", { src: _imgIcon("mysql") }), m("p", "MySQL")]),
            m(".tag", [m("img", { src: _imgIcon("mariadb") }), m("p", "MariaDB")]),
            m(".tag", [m("img", { src: _imgIcon("sqlite") }), m("p", "SQLite")])
          ]),
          m("p", getTranslation("webmaster.tech-stack.software")),
          m(".scroll-tag-container", [
            m(".tag", [m("img", { src: _imgIcon("godotengine") }), m("p", "Godot")]),
            m(".tag", [m("img", { src: _imgIcon("blender") }), m("p", "Blender")]),
            m(".tag", [m("img", { src: _imgIcon("krita") }), m("p", "Krita")]),
            m(".tag", [m("img", { src: _imgIcon("aseprite") }), m("p", "Aseprite")])
          ])
        ]
      }),

      m(panel, {
        title: getTranslation("webmaster.interest.title"),
        content: [
          m("p", getTranslation("webmaster.interest.games")),
          m(".scroll-cover-container", [
            m("a.cover", { href: "https://mrdrnose.itch.io/votv", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.votv" }, [
              m("img.cover-image", { src: _CoverGames("votv") })
            ]),
            m("a.cover", { href: "https://namemc.com/profile/Timmy1236.1", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.minecraft" }, [
              m("img.cover-image", { src: _CoverGames("minecraft") })
            ]),
            m("a.cover", { href: "https://hytl.tools/profile/timmy1236", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.hytale" }, [
              m("img.cover-image", { src: _CoverGames("hytale") })
            ]),
            m("a.cover", { href: "https://store.steampowered.com/app/105600/Terraria/", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.terraria" }, [
              m("img.cover-image", { src: _CoverGames("terraria") })
            ]),
            m("a.cover", { href: "https://store.steampowered.com/app/230410/Warframe/", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.warframe" }, [
              m("img.cover-image", { src: _CoverGames("warframe") })
            ]),
            m("a.cover", { href: "https://www.roblox.com/users/89179192/profile", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.roblox" }, [
              m("img.cover-image", { src: _CoverGames("roblox") })
            ]),
            m("a.cover", { href: "https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.isaac" }, [
              m("img.cover-image", { src: _CoverGames("isaac") })
            ]),
            m("a.cover", { href: "https://www.half-life.com/en/home/", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.hl" }, [
              m("img.cover-image", { src: _CoverGames("hl2") })
            ]),
            m("a.cover", { href: "https://www.teamfortress.com/", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.tf" }, [
              m("img.cover-image", { src: _CoverGames("tf") })
            ]),
            m("a.cover", { href: "https://www.thinkwithportals.com/index.php", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.portal1" }, [
              m("img.cover-image", { src: _CoverGames("portal1") })
            ]),
            m("a.cover", { href: "https://www.thinkwithportals.com/index.php", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.portal2" }, [
              m("img.cover-image", { src: _CoverGames("portal2") })
            ]),
            m("a.cover", { href: "https://scp-wiki.wikidot.com/", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.scp" }, [
              m("img.cover-image", { src: _CoverGames("scp") })
            ]),
            m("a.cover", { href: "https://google.com", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.gta" }, [
              m("img.cover-image", { src: _CoverGames("gtav") })
            ])
          ]),
          m("p", getTranslation("webmaster.interest.series")),
          m(".scroll-cover-container", [
            m("a.cover", { href: "https://www.imdb.com/es/title/tt32792180/" }, [
              m("img.cover-image", { src: _CoverSeries("tres-acordes") })
            ]),
            m("a.cover", { href: "https://www.imdb.com/es/title/tt12074628/" }, [
              m("img.cover-image", { src: _CoverSeries("smiling-friends") })
            ]),
            m("a.cover", { href: "https://www.imdb.com/es/title/tt27610198/" }, [
              m("img.cover-image", { src: _CoverSeries("tadc") })
            ]),
            m("a.cover", { href: "https://www.imdb.com/es/title/tt1830238/" }, [
              m("img.cover-image", { src: _CoverSeries("salad-fingers") })
            ]),
            m("a.cover", { href: "https://www.imdb.com/es/title/tt2072604/", "data-tooltip": "Madness Combat" }, [
              m("img.cover-image", { src: _CoverSeries("madness-combat") })
            ])
          ])
        ]
      })
    ]);
  }
};

export default webmasterPage;
