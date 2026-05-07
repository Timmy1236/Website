import m from "mithril";
import { loadDiscordProfile } from "./discord.js";
import { initPanel } from "../../shared/ui/panel-buttons.js";
import { refreshi18n } from "../../shared/core/i18n.js";
import { sendForm } from "../../shared/handlers/form.js";
import { setCurrentPath } from "../../shared/core/html-meta.js";

const AboutMePage = {
  oncreate() {
    setCurrentPath(m.route);
    refreshi18n();
    loadDiscordProfile("375889010419171328");
    initPanel();
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
            m("span", { "data-i18n": "[html]about-me.aboutMe.description" })
          ])
        ])

      ]),

      m(".panel", [
        m(".panel-header",
          m("p.text-title", "Form"),

          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ),

        m(".panel-content", [
          m(".contact", [
            m("p", "Contact"),
            m("input#contact", { type: "text", placeholder: "A way i can contact you (optional)" }),
          ]),

          m("br"),

          m(".message", [
            m("p", "Message"),
            m("textarea.message-form#message"),
          ]),

          m("br"),

          m("button.button", { onclick: sendForm }, "Enviar")
        ])
      ]),

      m(".panel", { "data-default": "closed" }, [
        m(".panel-header",
          m("p.text-title", "Tech stack"),

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
            m("a", { href: "https://mrdrnose.itch.io/votv", "data-tooltip": "Simulador de estar en el escritorio una hora intentando agarrar una señal para que al final simplemente falle y tengas que hacerlo todo de nuevo." }, [
              m("img", { src: "/assets/images/pages/about/covers/games/votv.webp" }),
            ]),
            // Minecraft
            m("a", { href: "https://namemc.com/profile/Timmy1236.1", "data-tooltip": "Minceraft" }, [
              m("img", { src: "/assets/images/pages/about/covers/games/minecraft.webp" }),
            ]),
            // Hytale
            m("a", { href: "https://hytl.tools/profile/timmy1236", "data-tooltip": "Es como un Minecraft, pero no lo es porque es como un Terraria, pero no lo es porque-" }, [
              m("img", { src: "/assets/images/pages/about/covers/games/hytale.webp" }),
            ]),
            // Terraria
            m("a", { href: "https://store.steampowered.com/app/105600/Terraria/", "data-tooltip": "Es demasiado bueno. Pero comenzar un mundo nuevo se siente demasiado lento :(" }, [
              m("img", { src: "/assets/images/pages/about/covers/games/terraria.webp" }),
            ]),
            // Warframe
            m("a", { href: "https://store.steampowered.com/app/230410/Warframe/", "data-tooltip": "Irónicamente unos de los mejores juegos amigables para los jugadores F2P, no existe otro juego que llegue al mismo nivel." }, [
              m("img", { src: "/assets/images/pages/about/covers/games/warframe.webp" }),
            ]),
            // Roblox
            m("a", { href: "https://www.roblox.com/users/89179192/profile", "data-tooltip": "cada dia tengo menos ganas de seguir en esta mierda." }, [
              m("img", { src: "/assets/images/pages/about/covers/games/roblox.webp" }),
            ]),
            // Half Life
            m("a", { href: "https://www.half-life.com/en/home/", "data-tooltip": "Unas de las mejores sagas de toda Valve... Una pena que nunca veremos una tercera entrega :)" }, [
              m("img", { src: "/assets/images/pages/about/covers/games/hl2.webp" }),
            ]),
            // Team Fortress 2
            m("a", { href: "https://www.teamfortress.com/", "data-tooltip": "¡Tengo 1,000 horas en Team Fortress 2! ... Sigo muriendo de la misma manera como siempre, contra un spy siendo medic." }, [
              m("img", { src: "/assets/images/pages/about/covers/games/tf.webp" }),
            ]),
            // Portal 1
            m("a", { href: "https://www.thinkwithportals.com/index.php", "data-tooltip": "Tardas 5 minutos intentando resolver un puzzle..." }, [
              m("img", { src: "/assets/images/pages/about/covers/games/portal1.webp" }),
            ]),
            // Portal 2
            m("a", { href: "https://www.thinkwithportals.com/index.php", "data-tooltip": "Tardas 5 minutos intentando resolver un puzzle... ¡Esta vez con un amigo!" }, [
              m("img", { src: "/assets/images/pages/about/covers/games/portal2.webp" }),
            ]),
            // SCP
            m("a", { href: "https://scp-wiki.wikidot.com/", "data-tooltip": "Ignorando el hecho que el juego este hecho en un motor estúpidamente viejo y de nicho con varios errores y crashes fatales. Es el único juego que realmente me hace sentir que si es de terror, sabiendo que cada zona que pasas puede haber una posibilidad que SCP-173 este ahí campeando en una esquina para matarte." }, [
              m("img", { src: "/assets/images/pages/about/covers/games/scp.webp" }),
            ]),
            // GTA V
            m("a", { href: "https://google.com", "data-tooltip": "Cayo Perico." }, [
              m("img", { src: "/assets/images/pages/about/covers/games/gtav.webp" }),
            ]),
          ]),

          m("p", "Series"),
          m(".scroll-container", [
            // Tres acordes
            m("a", { href: "https://www.imdb.com/es/title/tt32792180/" }, [
              m("img", { src: "/assets/images/pages/about/covers/series/tres-acordes.webp" }),
            ]),
            // Smiling Friends
            m("a", { href: "https://www.imdb.com/es/title/tt12074628/" }, [
              m("img", { src: "/assets/images/pages/about/covers/series/smiling-friends.webp" }),
            ]),
            // The Amazing Digital Circus
            m("a", { href: "https://www.imdb.com/es/title/tt27610198/" }, [
              m("img", { src: "/assets/images/pages/about/covers/series/tadc.webp" }),
            ]),
            // Salad Fingers
            m("a", { href: "https://www.imdb.com/es/title/tt1830238/" }, [
              m("img", { src: "/assets/images/pages/about/covers/series/salad-fingers.webp" }),
            ]),
            // Madness Combat
            m("a", { href: "https://www.imdb.com/es/title/tt2072604/", "data-tooltip": "Madness Combat" }, [
              m("img", { src: "/assets/images/pages/about/covers/series/madness-combat.webp" }),
            ]),
          ]),
        )
      ]),
    ]);
  }
};

export default AboutMePage;
