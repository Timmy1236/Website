import m from "mithril";
import { loadDiscordProfile } from "../pages/discord.js";
import { initPanel } from "../ui/panel-buttons.js";
import { refreshi18n } from "../core/i18n.js";

const AboutMePage = {
  oncreate() {
    refreshi18n();
    loadDiscordProfile("375889010419171328");
    initPanel();
  },

  view() {
    return m(".content-column", [

      m(".panel-grid-2", { style: "--panel-col-1:300px; --panel-col-2:1fr;" }, [
        m(".panel", [
          m(".panel-header",
            m("h1.text-title", "Profile"),

            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ),

          m(".panel-content.profile-panel-content", [
            m(".profile-vertical", [

              // AVATAR
              m(".profile-avatar#discord-avatar-container",
                m("img#discord-avatar", {
                  src: "../assets/images/others/loading.gif",
                  alt: "Profile picture"
                })
              ),

              // USERNAME
              m("h1.profile-username", "Timmy1236"),

              // STATUS
              m("p.profile-status#discord-status-text", "Status: Loading..."),

              // SOCIAL ICONS
              m(".profile-socials", [
                m("button.icon-button", {
                  onclick: () => window.open("https://github.com/Timmy1236", "_blank"),
                  "data-tooltip": "github.com/Timmy1236"
                }, m("img", { src: "./assets/images/icons/github.svg" })),
                m("button.icon-button", {
                  onclick: () => window.open("https://discordapp.com/users/375889010419171328", "_blank"),
                  "data-tooltip": "@timmy1236"
                }, m("img", { src: "./assets/images/icons/discord.svg" })),
                m("button.icon-button", {
                  onclick: () => window.open("https://steamcommunity.com/id/Timmy1236/", "_blank"),
                  "data-tooltip": "STEAM_0:1:96376877"
                }, m("img", { src: "./assets/images/icons/steam.svg" })),
                m("button.icon-button", {
                  onclick: () => window.open("mailto:timmy.1236@outlook.com", "_blank"),
                  "data-tooltip": "timmy.1236@outlook.com"
                }, m("img", { src: "./assets/images/icons/mail.svg" }))
              ])
            ])
          ])
        ]),

        m(".panel", [

          m(".panel-header",
            m("h1.text-title", { "data-i18n": "about-me.aboutMe.title" }, "About Me"),

            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ),

          m(".panel-content", [
            m("span", { "data-i18n": "[html]about-me.aboutMe.description" })
          ])
        ])

      ]),

      m(".panel", { "data-default": "closed" }, [
        m(".panel-header",
          m("h1.text-title", "Tech stack"),

          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ),
        m(".panel-content",
          m(".tags-inline space", [
            m("p.tags-title", "Lenguajes:"),
            m(".tags-grid", [
              m(".tag", { style: "--tag:#e7ff7f" }, [m("p.", "JavaScript")]),
              m(".tag", { style: "--tag:#ffc271" }, [m("p.", "HTML")]),
              m(".tag", { style: "--tag:#83ceff" }, [m("p.", "CSS")]),
              m(".tag", { style: "--tag:#d47afd" }, [m("p.", "C#")]),
              m(".tag", { style: "--tag:#69aedb" }, [m("p.", "Python")]),
              m(".tag", { style: "--tag:#2f6d96" }, [m("p.", "GDScript")]),
              m(".tag", { style: "--tag:#6a6abd" }, [m("p.", "Lua")]),
            ])
          ]),

          m(".tags-inline space", [
            m("p.tags-title", "Infra: "),
            m(".tags-grid", [
              m(".tag", { style: "--tag:#ee0000" }, [m("a.", { href: "https://redhatofficial.github.io/" }, "Red Hat")]),
              m(".tag", { style: "--tag:#d70a53" }, [m("a.", { href: "https://www.debian.org/" }, "Linux (Debian)")]),
              m(".tag", { style: "--tag:#80e288" }, [m("p.", "MongoDB")]),
              m(".tag", { style: "--tag:#4bb7ff" }, [m("p.", "MySQL")]),
              m(".tag", { style: "--tag:#c3745c" }, [m("p.", "MariaDB")]),
              m(".tag", { style: "--tag:#5c7fc3" }, [m("p.", "SQlite")]),
            ])
          ]),

          m(".tags-inline", [
            m("p.tags-title", "Softwares:"),
            m(".tags-grid", [
              m(".tag", { style: "--tag:#478cbf" }, [m("a.", { href: "https://github.com/godotengine/godot" }, "Godot")]),
              m(".tag", { style: "--tag:#e4ab6e" }, [m("a.", { href: "https://github.com/blender/blender" }, "Blender")]),
              m(".tag", { style: "--tag:#6bafdb" }, [m("a.", { href: "https://github.com/OpenShot/openshot-qt" }, "OpenShot")]),
              m(".tag", { style: "--tag:#4cadf3" }, [m("a.", { href: "https://github.com/kde/krita" }, "Krita")]),
              m(".tag", { style: "--tag:#ffffff" }, [m("a.", { href: "https://github.com/aseprite/aseprite" }, "Aseprite")]),
            ])
          ])
        )
      ]),

      m(".panel", { "data-default": "closed" }, [
        m(".panel-header",
          m("h1.text-title", "Interests"),

          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ),

        m(".panel-content",
          m(".tags-inline space", [
            m("p.tags-title", "Juegos:"),
            m(".tags-grid", [
              m(".tag", { style: "--tag:#CEA064" }, [m("p.", "Minecraft")]),
              m(".tag", { style: "--tag:#6096C2" }, [m("p.", "Hytale")]),
              m(".tag", { style: "--tag:#68d468" }, [m("p.", "Terraria")]),
              m(".tag", { style: "--tag:#618dcf" }, [m("p.", "Warframe")]),
              m(".tag", { style: "--tag:#e67979" }, [m("p.", "Roblox")]),
              m(".tag", { style: "--tag:#cea064" }, [m("p.", "Half-Life")]),
              m(".tag", { style: "--tag:#b3b3b3" }, [m("p.", "SCP")]),
              m(".tag", { style: "--tag:#82ac5d" }, [m("p.", "GTA")]),
              m(".tag", { style: "--tag:#bd3e44" }, [m("p.", "RDR 2")]),
              m(".tag", { style: "--tag:#626294" }, [m("p.", "VotV")]),
            ])
          ]),

          m(".tags-inline", [
            m("p.tags-title", "Series:"),
            m(".tags-grid", [
              m(".tag", { style: "--tag:#d8946d" }, [m("p.", "Tres Acordes")]),
              m(".tag", { style: "--tag:#ffeb7c" }, [m("p.", "Smiling Friends")]),

              m(".tag", { style: "--tag:#ff6467" }, [
                m("span", [
                  m("span", { style: "color:#ff6467" }, "D"),
                  m("span", { style: "color:#62a9ff" }, "i"),
                  m("span", { style: "color:#fffea6" }, "g"),
                  m("span", { style: "color:#ff6467" }, "i"),
                  m("span", { style: "color:#62a9ff" }, "t"),
                  m("span", { style: "color:#ff6467" }, "a"),
                  m("span", { style: "color:#fffea6" }, "l "),  // NOTE: Okey?
                  m("span", { style: "color:#ff6467" }, "C"),
                  m("span", { style: "color:#fffea6" }, "i"),
                  m("span", { style: "color:#62a9ff" }, "r"),
                  m("span", { style: "color:#ff6467" }, "c"),
                  m("span", { style: "color:#fffea6" }, "u"),
                  m("span", { style: "color:#62a9ff" }, "s")
                ])
              ]),

              m(".tag", { style: "--tag:#919960" }, [m("p.", "Salad Fingers")]),
              m(".tag", { style: "--tag:#bd3e44" }, [m("p.", "Madness Combat")]),
            ])
          ])
        )
      ]),
    ]);
  }
};

export default AboutMePage;
