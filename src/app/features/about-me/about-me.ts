import m from "mithril";
import { loadDiscordProfile } from "./discord.js";
import { initPanel } from "../../shared/ui/panel-buttons.js";
import { refreshi18n } from "../../shared/core/i18n.js";
import { setCurrentPath } from "../../shared/core/html-meta.js";
import { applyBBCode } from "../../shared/ui/bbcode.js";

const AboutMePage = {
  oncreate() {
    setCurrentPath(m.route);
    refreshi18n();
    loadDiscordProfile("375889010419171328");
    initPanel();
    applyBBCode();
  },

  view: function () {
    return m(".content", [
      m(".panel-grid-2", { style: "--panel-col-1:300px; --panel-col-2:1fr;" }, [
        m(".panel", [
          m(".panel-header",
            m("p.text-title", "Profile"),

            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ),

          m(".panel-content.profile-panel-content", [
            m(".profile-vertical", [

              // AVATAR
              m(".profile-avatar#discord-avatar-container",
                m("img#discord-avatar", { src: "../assets/images/others/loading.gif", alt: "Profile picture" })
              ),

              // USERNAME
              m("p.profile-username", "Timmy1236"),

              // STATUS
              m("p.profile-status#discord-status-text", "Status: Loading..."),
              m("p.profile-activity#discord-activity-text", "Status: Loading..."),

              // SOCIAL ICONS
              m(".profile-socials", [
                m("button.icon-button", { onclick: () => window.open("https://github.com/Timmy1236", "_blank"), "data-tooltip": "github.com/Timmy1236" }, m("img", { src: "./assets/images/icons/socials/github.png" })),
                m("button.icon-button", { onclick: () => window.open("https://discordapp.com/users/375889010419171328", "_blank"), "data-tooltip": "@timmy1236" }, m("img", { src: "./assets/images/icons/socials/discord.png" })),
                m("button.icon-button", { onclick: () => window.open("https://steamcommunity.com/id/Timmy1236/", "_blank"), "data-tooltip": "STEAM_0:1:96376877" }, m("img", { src: "./assets/images/icons/socials/steam.png" })),
                m("button.icon-button", { onclick: () => window.open("mailto:timmy.1236@outlook.com", "_blank"), "data-tooltip": "timmy.1236@outlook.com" }, m("img", { src: "./assets/images/icons/socials/mail.png" }))
              ])
            ])
          ])
        ]),

        m(".panel", [
          m(".panel-header",
            m("p.text-title", { "data-i18n": "about-me.aboutMe.title" }, "About Me"),

            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
            ])
          ),

          m(".panel-content", [
            m("p", { "data-i18n": "about-me.aboutMe.description", "data-bbcode": true })
          ])
        ])

      ]),

      m(".panel", [
        m(".panel-header",
          m("p.text-title", "Tech stack"),

          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ),
        m(".panel-content",
          m("p", "Lenguajes"),
          m(".scroll-container", [
            m(".tag", [m("img", { src: "/assets/images/pages/about/icons/typescript.svg" }), m("a", { href: "https://www.typescriptlang.org/" }, "TypeScript")]),
            m(".tag", [m("img", { src: "/assets/images/pages/about/icons/csharp.svg" }), m("a", { href: "https://dotnet.microsoft.com/es-es/languages/csharp" }, "C#")]),
            m(".tag", [m("img", { src: "/assets/images/pages/about/icons/godotengine.svg" }), m("a", { href: "https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html" }, "GDScript")]),
            m(".tag", [m("img", { src: "/assets/images/pages/about/icons/python.svg" }), m("a", { href: "https://www.python.org/" }, "Python")]),
            m(".tag", [m("img", { src: "/assets/images/pages/about/icons/lua.svg" }), m("a", { href: "https://www.lua.org/" }, "Lua")]),
            m(".tag", [m("img", { src: "/assets/images/pages/about/icons/javascript.svg" }), m("a", { href: "https://developer.mozilla.org/es/docs/Web/JavaScript" }, "JavaScript")]),
            m(".tag", [m("img", { src: "/assets/images/pages/about/icons/html.svg" }), m("a", { href: "https://dev.w3.org/html5/spec-LC/" }, "HTML")]),
            m(".tag", [m("img", { src: "/assets/images/pages/about/icons/css.svg" }), m("a", { href: "https://www.w3.org/Style/CSS/Overview.en.html" }, "CSS")]),
          ]),

          m("p", "Infra"),
          m(".scroll-container", [
            m(".tag", [m("img", { src: "/assets/images/pages/about/icons/redhat.svg" }), m("a", { href: "https://redhatofficial.github.io/" }, "Red Hat")]),
            m(".tag", [m("img", { src: "/assets/images/pages/about/icons/debian.svg" }), m("a", { href: "https://www.debian.org/" }, "Debian")]),
            m(".tag", [m("img", { src: "/assets/images/pages/about/icons/mysql.svg" }), m("a", { href: "https://www.mysql.com/" }, "MySQL")]),
            m(".tag", [m("img", { src: "/assets/images/pages/about/icons/mariadb.svg" }), m("a", { href: "https://mariadb.org/" }, "MariaDB")]),
            m(".tag", [m("img", { src: "/assets/images/pages/about/icons/sqlite.svg" }), m("a", { href: "https://sqlite.org/" }, "SQLite")]),
          ]),

          m("p", "Softwares"),
          m(".scroll-container", [
            m(".tag", [m("img", { src: "/assets/images/pages/about/icons/godotengine.svg" }), m("a", { href: "https://github.com/godotengine/godot" }, "Godot")]),
            m(".tag", [m("img", { src: "/assets/images/pages/about/icons/blender.svg" }), m("a", { href: "https://github.com/blender/blender" }, "Blender")]),
            m(".tag", [m("a", { href: "https://github.com/OpenShot/openshot-qt" }, "OpenShot")]),
            m(".tag", [m("img", { src: "/assets/images/pages/about/icons/krita.svg" }), m("a", { href: "https://github.com/kde/krita" }, "Krita")]),
            m(".tag", [m("img", { src: "/assets/images/pages/about/icons/aseprite.svg" }), m("a", { href: "https://github.com/aseprite/aseprite" }, "Aseprite")]),
          ])
        )
      ]),

      // Interest
      m(".panel", {}, [
        m(".panel-header",
          m("p.text-title", "Interests"),
          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ),

        m(".panel-content",
          m("p", "Juegos"),
          m(".scroll-container", [
            // Voices of the Void
            m("a.cover", { href: "https://mrdrnose.itch.io/votv", "data-tooltip": "Simulador de estar en el escritorio una hora intentando agarrar una señal para que al final simplemente falle y tengas que hacerlo todo de nuevo." }, [
              m("img", { src: "/assets/images/pages/about/covers/games/votv.webp" }),
            ]),
            // Minecraft
            m("a.cover", { href: "https://namemc.com/profile/Timmy1236.1", "data-tooltip": "Minceraft" }, [
              m("img", { src: "/assets/images/pages/about/covers/games/minecraft.webp" }),
            ]),
            // Hytale
            m("a.cover", { href: "https://hytl.tools/profile/timmy1236", "data-tooltip": "Es como un Minecraft, pero no lo es porque es como un Terraria, pero no lo es porque-" }, [
              m("img", { src: "/assets/images/pages/about/covers/games/hytale.webp" }),
            ]),
            // Terraria
            m("a.cover", { href: "https://store.steampowered.com/app/105600/Terraria/", "data-tooltip": "Es demasiado bueno. Pero comenzar un mundo nuevo se siente demasiado lento :(" }, [
              m("img", { src: "/assets/images/pages/about/covers/games/terraria.webp" }),
            ]),
            // Warframe
            m("a.cover", { href: "https://store.steampowered.com/app/230410/Warframe/", "data-tooltip": "Irónicamente unos de los mejores juegos amigables para los jugadores F2P, no existe otro juego que llegue al mismo nivel." }, [
              m("img", { src: "/assets/images/pages/about/covers/games/warframe.webp" }),
            ]),
            // Roblox
            m("a.cover", { href: "https://www.roblox.com/users/89179192/profile", "data-tooltip": "cada dia tengo menos ganas de seguir en esta mierda." }, [
              m("img", { src: "/assets/images/pages/about/covers/games/roblox.webp" }),
            ]),
            // Half Life
            m("a.cover", { href: "https://www.half-life.com/en/home/", "data-tooltip": "Unas de las mejores sagas de toda Valve... Una pena que nunca veremos una tercera entrega :)" }, [
              m("img", { src: "/assets/images/pages/about/covers/games/hl2.webp" }),
            ]),
            // Team Fortress 2
            m("a.cover", { href: "https://www.teamfortress.com/", "data-tooltip": "¡Tengo 1,000 horas en Team Fortress 2! ... Sigo muriendo de la misma manera como siempre, contra un spy siendo medic." }, [
              m("img", { src: "/assets/images/pages/about/covers/games/tf.webp" }),
            ]),
            // Portal 1
            m("a.cover", { href: "https://www.thinkwithportals.com/index.php", "data-tooltip": "Tardas 5 minutos intentando resolver un puzzle..." }, [
              m("img", { src: "/assets/images/pages/about/covers/games/portal1.webp" }),
            ]),
            // Portal 2
            m("a.cover", { href: "https://www.thinkwithportals.com/index.php", "data-tooltip": "Tardas 5 minutos intentando resolver un puzzle... ¡Esta vez con un amigo!" }, [
              m("img", { src: "/assets/images/pages/about/covers/games/portal2.webp" }),
            ]),
            // SCP
            m("a.cover", { href: "https://scp-wiki.wikidot.com/", "data-tooltip": "Ignorando el hecho que el juego este hecho en un motor estúpidamente viejo y de nicho con varios errores y crashes fatales. Es el único juego que realmente me hace sentir que si es de terror, sabiendo que cada zona que pasas puede haber una posibilidad que SCP-173 este ahí campeando en una esquina para matarte." }, [
              m("img", { src: "/assets/images/pages/about/covers/games/scp.webp" }),
            ]),
            // GTA V
            m("a.cover", { href: "https://google.com", "data-tooltip": "Cayo Perico." }, [
              m("img", { src: "/assets/images/pages/about/covers/games/gtav.webp" }),
            ]),
          ]),

          m("p", "Series"),
          m(".scroll-container", [
            // Tres acordes
            m("a.cover", { href: "https://www.imdb.com/es/title/tt32792180/" }, [
              m("img", { src: "/assets/images/pages/about/covers/series/tres-acordes.webp" }),
            ]),
            // Smiling Friends
            m("a.cover", { href: "https://www.imdb.com/es/title/tt12074628/" }, [
              m("img", { src: "/assets/images/pages/about/covers/series/smiling-friends.webp" }),
            ]),
            // The Amazing Digital Circus
            m("a.cover", { href: "https://www.imdb.com/es/title/tt27610198/" }, [
              m("img", { src: "/assets/images/pages/about/covers/series/tadc.webp" }),
            ]),
            // Salad Fingers
            m("a.cover", { href: "https://www.imdb.com/es/title/tt1830238/" }, [
              m("img", { src: "/assets/images/pages/about/covers/series/salad-fingers.webp" }),
            ]),
            // Madness Combat
            m("a.cover", { href: "https://www.imdb.com/es/title/tt2072604/", "data-tooltip": "Madness Combat" }, [
              m("img", { src: "/assets/images/pages/about/covers/series/madness-combat.webp" }),
            ]),
          ]),
        )
      ]),
    ]);
  }
};

export default AboutMePage;
