import m from "mithril";
import { loadStatus } from "./webmaster.discord.js";
import { setCurrentPath } from "../../shared/core/html-meta.js";
import { parseBBCode } from "../../shared/utils/bbcode.js";
import { getTranslation } from "../../shared/core/i18n.ts";

const webmasterPage = {
	oncreate() {
		setCurrentPath(m.route);
	},

	view: function () {
		return m(".content", [
			m(".panel-grid-2", { style: "--panel-col-1:315px; --panel-col-2:1fr;" }, [
				m(".panel-frame", [
					m(".panel", [
						m(".panel-header",
							m("p.text-title", getTranslation("webmaster.profile-title")),
							m(".panel-controls", [
								m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
								m("button.panel-button", { "data-panel-action": "close" }, "X")
							])
						),

						m(".panel-content.profile-panel-content", [
							m(".profile-header", [

								m(".profile-avatar",
									m("img", { src: "/assets/images/pages/webmaster/pfp.webp" })
								),

								m(".profile-info", [
									m("p.profile-username", "Timmy1236"),
									m("a.profile-status#status", { "data-tooltip-i18n": "tooltip.pages.webmaster.profile.status", "onclick": loadStatus }, "Status")
								])
							]),

							m(".profile-section", [
								m("p.profile-section-title", getTranslation("webmaster.socials-title")),

								m(".profile-socials", [
									m("button.icon-button", { "onclick": () => window.open("https://github.com/Timmy1236", "_blank"), "data-tooltip": "github.com/Timmy1236" }, m("img", { src: "./assets/images/icons/socials/github.png" })),
									m("button.icon-button", { "onclick": () => window.open("https://discordapp.com/users/375889010419171328", "_blank"), "data-tooltip": "@timmy1236" }, m("img", { src: "./assets/images/icons/socials/discord.png" })),
									m("button.icon-button", { "onclick": () => window.open("https://steamcommunity.com/id/Timmy1236/", "_blank"), "data-tooltip": "STEAM_0:1:96376877" }, m("img", { src: "./assets/images/icons/socials/steam.png" })),
									m("button.icon-button", { "onclick": () => window.open("mailto:timmy.1236@outlook.com", "_blank"), "data-tooltip": "timmy.1236@outlook.com" }, m("img", { src: "./assets/images/icons/socials/mail.png" }))
								])
							])
						])
					])
				]),

				m(".panel-frame", [
					m(".panel", [
						m(".panel-header",
							m("p.text-title", getTranslation("webmaster.about-me.title")),

							m(".panel-controls", [
								m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
								m("button.panel-button", { "data-panel-action": "close" }, "X")
							])
						),

						m(".panel-content", [
							m("p", m.trust(parseBBCode(getTranslation("webmaster.about-me.description"))))
						])
					])
				])
			]),

			m(".panel-frame", [
				m(".panel", [
					m(".panel-header",
						m("p.text-title", getTranslation("webmaster.tech-stack.title")),

						m(".panel-controls", [
							m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
							m("button.panel-button", { "data-panel-action": "close" }, "X")
						])
					),
					m(".panel-content",
						m("p", getTranslation("webmaster.tech-stack.languages")),
						m(".scroll-tag-container", [
							m(".tag", [m("img", { src: "/assets/images/pages/webmaster/icons/typescript.svg" }), m("a", { href: "https://www.typescriptlang.org/" }, "TypeScript")]),
							m(".tag", [m("img", { src: "/assets/images/pages/webmaster/icons/csharp.svg" }), m("a", { href: "https://dotnet.microsoft.com/es-es/languages/csharp" }, "C#")]),
							m(".tag", [m("img", { src: "/assets/images/pages/webmaster/icons/godotengine.svg" }), m("a", { href: "https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html" }, "GDScript")]),
							m(".tag", [m("img", { src: "/assets/images/pages/webmaster/icons/python.svg" }), m("a", { href: "https://www.python.org/" }, "Python")]),
							m(".tag", [m("img", { src: "/assets/images/pages/webmaster/icons/lua.svg" }), m("a", { href: "https://www.lua.org/" }, "Lua")]),
							m(".tag", [m("img", { src: "/assets/images/pages/webmaster/icons/javascript.svg" }), m("a", { href: "https://developer.mozilla.org/es/docs/Web/JavaScript" }, "JavaScript")]),
							m(".tag", [m("img", { src: "/assets/images/pages/webmaster/icons/html.svg" }), m("a", { href: "https://dev.w3.org/html5/spec-LC/" }, "HTML")]),
							m(".tag", [m("img", { src: "/assets/images/pages/webmaster/icons/css.svg" }), m("a", { href: "https://www.w3.org/Style/CSS/Overview.en.html" }, "CSS")])
						]),

						m("p", getTranslation("webmaster.tech-stack.infra")),
						m(".scroll-tag-container", [
							m(".tag", [m("img", { src: "/assets/images/pages/webmaster/icons/redhat.svg" }), m("a", { href: "https://redhatofficial.github.io/" }, "Red Hat")]),
							m(".tag", [m("img", { src: "/assets/images/pages/webmaster/icons/debian.svg" }), m("a", { href: "https://www.debian.org/" }, "Debian")]),
							m(".tag", [m("img", { src: "/assets/images/pages/webmaster/icons/mysql.svg" }), m("a", { href: "https://www.mysql.com/" }, "MySQL")]),
							m(".tag", [m("img", { src: "/assets/images/pages/webmaster/icons/mariadb.svg" }), m("a", { href: "https://mariadb.org/" }, "MariaDB")]),
							m(".tag", [m("img", { src: "/assets/images/pages/webmaster/icons/sqlite.svg" }), m("a", { href: "https://sqlite.org/" }, "SQLite")])
						]),

						m("p", getTranslation("webmaster.tech-stack.software")),
						m(".scroll-tag-container", [
							m(".tag", [m("img", { src: "/assets/images/pages/webmaster/icons/godotengine.svg" }), m("a", { href: "https://github.com/godotengine/godot" }, "Godot")]),
							m(".tag", [m("img", { src: "/assets/images/pages/webmaster/icons/blender.svg" }), m("a", { href: "https://github.com/blender/blender" }, "Blender")]),
							m(".tag", [m("img", { src: "/assets/images/pages/webmaster/icons/krita.svg" }), m("a", { href: "https://github.com/kde/krita" }, "Krita")]),
							m(".tag", [m("img", { src: "/assets/images/pages/webmaster/icons/aseprite.svg" }), m("a", { href: "https://github.com/aseprite/aseprite" }, "Aseprite")])
						])
					)
				])
			]),

			// Interest
			m(".panel-frame", [
				m(".panel", {}, [
					m(".panel-header",
						m("p.text-title", getTranslation("webmaster.interest.title")),
						m(".panel-controls", [
							m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
							m("button.panel-button", { "data-panel-action": "close" }, "X")
						])
					),

					m(".panel-content",
						m("p", getTranslation("webmaster.interest.games")),
						m(".scroll-cover-container", [
							// Voices of the Void
							m("a.cover", { "href": "https://mrdrnose.itch.io/votv", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.votv" }, [
								m("img.cover-image", { src: "/assets/images/pages/webmaster/covers/games/votv.webp" })
							]),
							// Minecraft
							m("a.cover", { "href": "https://namemc.com/profile/Timmy1236.1", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.minecraft" }, [
								m("img.cover-image", { src: "/assets/images/pages/webmaster/covers/games/minecraft.webp" })
							]),
							// Hytale
							m("a.cover", { "href": "https://hytl.tools/profile/timmy1236", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.hytale" }, [
								m("img.cover-image", { src: "/assets/images/pages/webmaster/covers/games/hytale.webp" })
							]),
							// Terraria
							m("a.cover", { "href": "https://store.steampowered.com/app/105600/Terraria/", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.terraria" }, [
								m("img.cover-image", { src: "/assets/images/pages/webmaster/covers/games/terraria.webp" })
							]),
							// Warframe
							m("a.cover", { "href": "https://store.steampowered.com/app/230410/Warframe/", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.warframe" }, [
								m("img.cover-image", { src: "/assets/images/pages/webmaster/covers/games/warframe.webp" })
							]),
							// Roblox
							m("a.cover", { "href": "https://www.roblox.com/users/89179192/profile", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.roblox" }, [
								m("img.cover-image", { src: "/assets/images/pages/webmaster/covers/games/roblox.webp" })
							]),
							// Half Life
							m("a.cover", { "href": "https://www.half-life.com/en/home/", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.hl" }, [
								m("img.cover-image", { src: "/assets/images/pages/webmaster/covers/games/hl2.webp" })
							]),
							// Team Fortress 2
							m("a.cover", { "href": "https://www.teamfortress.com/", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.tf" }, [
								m("img.cover-image", { src: "/assets/images/pages/webmaster/covers/games/tf.webp" })
							]),
							// Portal 1
							m("a.cover", { "href": "https://www.thinkwithportals.com/index.php", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.portal1" }, [
								m("img.cover-image", { src: "/assets/images/pages/webmaster/covers/games/portal1.webp" })
							]),
							// Portal 2
							m("a.cover", { "href": "https://www.thinkwithportals.com/index.php", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.portal2" }, [
								m("img.cover-image", { src: "/assets/images/pages/webmaster/covers/games/portal2.webp" })
							]),
							// SCP
							m("a.cover", { "href": "https://scp-wiki.wikidot.com/", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.scp" }, [
								m("img.cover-image", { src: "/assets/images/pages/webmaster/covers/games/scp.webp" })
							]),
							// GTA V
							m("a.cover", { "href": "https://google.com", "data-tooltip-i18n": "tooltip.pages.webmaster.interests.gta" }, [
								m("img.cover-image", { src: "/assets/images/pages/webmaster/covers/games/gtav.webp" })
							])
						]),

						m("p", getTranslation("webmaster.interest.series")),
						m(".scroll-cover-container", [
							// Tres acordes
							m("a.cover", { href: "https://www.imdb.com/es/title/tt32792180/" }, [
								m("img.cover-image", { src: "/assets/images/pages/webmaster/covers/series/tres-acordes.webp" })
							]),
							// Smiling Friends
							m("a.cover", { href: "https://www.imdb.com/es/title/tt12074628/" }, [
								m("img.cover-image", { src: "/assets/images/pages/webmaster/covers/series/smiling-friends.webp" })
							]),
							// The Amazing Digital Circus
							m("a.cover", { href: "https://www.imdb.com/es/title/tt27610198/" }, [
								m("img.cover-image", { src: "/assets/images/pages/webmaster/covers/series/tadc.webp" })
							]),
							// Salad Fingers
							m("a.cover", { href: "https://www.imdb.com/es/title/tt1830238/" }, [
								m("img.cover-image", { src: "/assets/images/pages/webmaster/covers/series/salad-fingers.webp" })
							]),
							// Madness Combat
							m("a.cover", { "href": "https://www.imdb.com/es/title/tt2072604/", "data-tooltip": "Madness Combat" }, [
								m("img.cover-image", { src: "/assets/images/pages/webmaster/covers/series/madness-combat.webp" })
							])
						])
					)
				])
			])
		]);
	}
};

export default webmasterPage;