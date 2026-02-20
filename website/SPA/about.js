import ButtonsRow from "../components/ButtonsRow.js";

const AboutMePage = {
  oncreate() {
    window.refreshI18n?.();
    window.loadDiscordProfile?.("375889010419171328");
  },

  view() {
    return m(".main-column", [

      // ABOUT ME
      m(".content-block.about-me", [
        m(".title",
          m("h1.text-title", { "data-i18n": "about-me.aboutMe.title" }, "Sobre Mí")
        ),

        m(".div-content",
          m(".div-inside", [

            // PERFIL PRINCIPAL
            m(".profile-section", [
              m(".profile-avatar#discord-avatar-container"),
              m(".profile-info", [
                m("h1.profile-username", "Timmy1236"),
                m("p.profile-subinfo#discord-status-text", "Status: Loading..."),
                m("p.profile-subinfo", "🎂 20 Years old | ♂️ He/They | 🌍 Uruguay")
              ])
            ]),

            // RESUMEN
            m(".resume", [
              m("span", { "data-i18n": "[html]about-me.aboutMe.description" })
            ]),

            // SKILLS
            m(".list", [
              m("h2.about-section-title", "Skills"),
              m("ul.about-list", [
                m("li", [
                  m("span", { "data-i18n": "about-me.aboutMe.fact.programming" }),
                  " ",
                  m("span", { style: "color:#e7ff7f" }, "JavaScript"), ", ",
                  m("span", { style: "color:#ffc271" }, "HTML"), ", ",
                  m("span", { style: "color:#83ceff" }, "CSS"), ", ",
                  m("span", { style: "color:#ffcb86" }, "Java"), ", ",
                  m("span", { style: "color:#d47afd" }, "C#"), ", ",
                  m("span", { style: "color:#69aedb" }, "Python"), ", ",
                  m("span", { style: "color:#2f6d96" }, "GDScript"), ", ",
                  m("span", { style: "color:#6a6abd" }, "Lua")
                ]),
                m("li", [
                  m("span", { "data-i18n": "about-me.aboutMe.fact.softwares" }),
                  " ",
                  m("a", { href: "https://github.com/godotengine/godot", target: "_blank", style: "color:#478cbf;text-decoration:none" }, "Godot"), ", ",
                  m("a", { href: "https://github.com/blender/blender", target: "_blank", style: "color:#e4ab6e;text-decoration:none" }, "Blender"), ", ",
                  m("a", { href: "https://github.com/OpenShot/openshot-qt", target: "_blank", style: "color:#6bafdb;text-decoration:none" }, "OpenShot"), ", ",
                  m("a", { href: "https://github.com/KDE/krita", target: "_blank", style: "color:#4cadf3;text-decoration:none" }, "Krita"), ", ",
                  m("a", { href: "https://www.affinity.studio", target: "_blank", style: "color:#A7F175;text-decoration:none" }, "Affinity")
                ])
              ])
            ]),

            // INTERESTS
            m(".list", [
              m("h2.about-section-title", "Interests"),
              m("ul.about-list", [
                m("li", [
                  m("span", { "data-i18n": "about-me.aboutMe.fact.favorite-games" }),
                  " ",
                  m("a", { href: "../pages/others/minecraft.html", target: "_blank", style: "color:#CEA064;text-decoration:none" }, "Minecraft"), ", ",
                  m("a", { href: "https://hytale.com/", target: "_blank", style: "color:#6096C2;text-decoration:none" }, "Hytale"), ", ",
                  m("a", { href: "https://terraria.wiki.gg/", target: "_blank", style: "color:rgb(104,212,104);text-decoration:none" }, "Terraria"), ", ",
                  m("a", { href: "../pages/others/ordis.html", target: "_blank", style: "color:rgb(97,141,207);text-decoration:none" }, "Warframe"), ", ",
                  m("a", { href: "https://www.roblox.com/es/users/89179192/profile", target: "_blank", style: "color:rgb(230,121,121);text-decoration:none" }, "Roblox"), ", ",
                  m("a", { href: "../pages/others/half-life-2.html", target: "_blank", style: "color:rgb(206,160,100);text-decoration:none" }, "Half-Life"), ", ",
                  m("a", { href: "../pages/others/half-life-2.html", target: "_blank", style: "color:rgb(179, 179, 179);text-decoration:none" }, "SCP"), ", ",
                  m("a", { style: "color:#82ac5d;text-decoration:none" }, "GTA V"), ", ",
                  m("a", { style: "color:#bd3e44;text-decoration:none" }, "RDR 2"), ", ",
                  m("a", { href: "https://mrdrnose.itch.io/votv", target: "_blank", style: "color:#626294;text-decoration:none" }, "VotV")
                ]),
                m("li", [
                  m("span", { "data-i18n": "about-me.aboutMe.fact.series" }),
                  " ",
                  m("a", { href: "https://www.youtube.com/@ProduccionesTrukini", target: "_blank", style: "color:rgb(216,148,109);text-decoration:none" }, "Tres Acordes"), ", ",
                  m("a", { href: "https://www.adultswim.com/videos/smiling-friends", target: "_blank", style: "color:rgb(255,235,124);text-decoration:none" }, "Smiling Friends"), ", ",
                  m("a", { href: "https://www.youtube.com/watch?v=HwAPLk_sQ3w&list=PLHovnlOusNLgvAbnxluXCVB3KLj8e4QB-" }, [
                    m("span", { style: "color:#ff6467" }, "D"),
                    m("span", { style: "color:#62a9ff" }, "i"),
                    m("span", { style: "color:#fffea6" }, "g"),
                    m("span", { style: "color:#ff6467" }, "i"),
                    m("span", { style: "color:#62a9ff" }, "t"),
                    m("span", { style: "color:#ff6467" }, "a"),
                    m("span", { style: "color:#fffea6" }, "l "),
                    m("span", { style: "color:#ff6467" }, "C"),
                    m("span", { style: "color:#fffea6" }, "i"),
                    m("span", { style: "color:#62a9ff" }, "r"),
                    m("span", { style: "color:#ff6467" }, "c"),
                    m("span", { style: "color:#fffea6" }, "u"),
                    m("span", { style: "color:#62a9ff" }, "s")
                  ]), ", ",
                  m("a", { href: "https://www.youtube.com/watch?v=fMmlyLdpBXM&list=PL9383CC2C6DBD902F", target: "_blank", style: "color:#919960;text-decoration:none" }, "Salad Fingers"), ", ",
                  m("a", { href: "https://www.newgrounds.com/series/madness", target: "_blank", style: "color:rgb(189, 62, 68);text-decoration:none" }, "Madness Combat")
                ])
              ])
            ]),

            // BOTONES SOCIALES
            m(".social-buttons", [
              m("button.btn", { onclick: () => window.open("https://github.com/Timmy1236", "_blank") }, [
                m("img", { src: "./assets/images/socials/github-icon.svg", alt: "GitHub" }),
                " GitHub"
              ]),
              m("button.btn", { onclick: () => window.open("https://discordapp.com/users/375889010419171328", "_blank") }, [
                m("img", { src: "./assets/images/socials/discord-icon.svg", alt: "Discord" }),
                " Discord"
              ]),
              m("button.btn", { onclick: () => window.open("https://steamcommunity.com/id/Timmy1236/", "_blank") }, [
                m("img", { src: "./assets/images/socials/steam-icon.svg", alt: "Steam" }),
                " Steam"
              ])
            ])

          ])
        )
      ]),

      // STATS
      m(".content-block.stats", [
        m(".title", m("h1.text-title", "WakaTime")),
        m(".stats-content",
          m("embed", {
            src: "https://wakatime.com/share/@Timmy1236/617b68e8-948c-405e-ae2e-d6911a7b9f61.svg"
          })
        )
      ]),

      // BUTTONS
      m(ButtonsRow)

    ]);
  }
};

export default AboutMePage;
