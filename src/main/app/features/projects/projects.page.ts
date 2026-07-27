import m from "mithril";
import { createImageOverlay } from "../../shared/components/image-overlay.js";
import { setCurrentPath } from "../../shared/core/html-meta.js";
import { getTranslation } from "../../shared/core/i18n.js";
import { showToast } from "../../shared/components/toast.js";

const Project = {
	oncreate() {
		setCurrentPath(m.route, "proyect");
		showToast("info", true, "W.I.P", false, "EXPERIMENTAL", false);
	},

	view: function () {
		return m(".content", [

			m(".panel-frame", [
				m(".panel", [
					m(".panel-header",
						m("p.text-title", getTranslation("projects.title")),

						m(".panel-controls", [
							m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
							m("button.panel-button", { "data-panel-action": "close" }, "X")
						])
					),
					// WebSite project
					m(".panel-content", [

						m(".project-header", [
							m(".project-icon",
								m("img", {
									src: "./assets/images/favicon/pages.png",
									alt: "Website icon"
								})
							),

							m("h1.project-title", "Timmy's digital dumpster")
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
							m("a.link-icon", { href: "https://github.com/Timmy1236/Website", target: "_blank" }, [
								m("img", { src: "/assets/images/icons/socials/github.png" }),
								m("span", "GitHub")
							])
						])
					])
				])
			]),

			m(".panel-frame", [
				m(".panel", [
					m(".panel-header",
						m("p.text-title", getTranslation("projects.title")),

						m(".panel-controls", [
							m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
							m("button.panel-button", { "data-panel-action": "close" }, "X")
						])
					),
					// WebSite project
					m(".panel-content", [

						m(".project-header", [
							m(".project-icon",
								m("img", {
									src: "./assets/images/icons/leafy.webp",
									alt: "Leafy icon"
								})
							),

							m("h1.project-title", "Leafy")
						]),

						m(".project-body", [
							m("p.project-description", getTranslation("projects.list.leafy.description"))
						]),

						m(".projects-links", [
							m("a.link-icon", { href: "https://github.com/Timmy1236/Leafy", target: "_blank" }, [
								m("img", { src: "/assets/images/icons/socials/github.png" }),
								m("span", "GitHub")
							])
						])
					])
				])
			])
		]);
	}
};

export default Project;