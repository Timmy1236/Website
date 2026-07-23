import m from "mithril";
import { getLatest } from "./home.latest.ts";
import { getTranslation } from "../../shared/core/i18n.js";
import { parseBBCode } from "../../shared/utils/bbcode.ts";
import { setCurrentPath } from "../../shared/core/html-meta.ts";
import type { Latest } from "./entries";

function renderPreview(src: string) {
	const extension = src.split(".").pop()?.toLowerCase();

	if (extension === "mp4") {
		return m("video.entry-image", {
			src,
			muted: true,
			loop: true,
			autoplay: true,
			playsinline: true,
			preload: "metadata"
		});
	}

	return m("img.entry-image", { src });
}

const Home = {
	latest: null as Latest | null,
	error: false,

	oncreate() {
		setCurrentPath(m.route);
	},

	oninit: function () {
		getLatest()
			.then((data: Latest) => {
				this.latest = data;
				m.redraw();
			})
			.catch(() => {
				this.error = true;
				m.redraw();
			});
	},

	view: function () {
		return m(".content", [
			m(".panel-frame", [
				m(".panel", [
					m(".panel-header", [
						m("p.text-title", getTranslation("home.welcome.title")),
						m(".panel-controls", [
							m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
							m("button.panel-button", { "data-panel-action": "close" }, "X")
						])
					]),

					m(".panel-content", [
						m("div", { style: "display: flex;" }, [
							m("p", m.trust(parseBBCode(getTranslation("home.welcome.text")))),
							m("img", { src: "./assets/images/pages/home/alien.gif", style: "height:130px;pointer-events:none;" })
						])
					])
				])
			]),

			m(".panel-grid-2", {
				style: "--panel-col-1:1fr; --panel-col-2:1fr;"
			}, [

				// ==== CHANGELOG ====
				m(".panel-frame", [
					m(".panel", [
						m(".panel-header",
							m("p.text-title", getTranslation("home.entries.changelog.title")),

							m(".panel-controls", [
								m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
								m("button.panel-button", { "data-panel-action": "close" }, "X")
							])
						),
						m(".panel-content", [
							this.error
								? m("p", "Error")
								: this.latest
									? m("div.entry-content", [
										m("div", [
											m("a.entry-title link", { href: "content/" + this.latest.changelog.url }, this.latest.changelog.title),
											m("p.entry-date", this.latest.changelog.date),
											m("p", this.latest.changelog.description)
										]),
										m("div", [
											renderPreview(this.latest.changelog.preview)
										])
									])
									: m("p", "Cargando...")
						])
					])
				]),

				// ==== BLOG ====
				m(".panel-frame", [
					m(".panel", [
						m(".panel-header",
							m("p.text-title", getTranslation("home.entries.blog.title")),

							m(".panel-controls", [
								m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
								m("button.panel-button", { "data-panel-action": "close" }, "X")
							])
						),
						m(".panel-content", [
							this.error
								? m("p", "Error")
								: this.latest
									? m("div.entry-content", [
										m("div", [
											m("a.entry-title link", { href: "content/" + this.latest.blog.url }, this.latest.blog.title),
											m("p.entry-date", this.latest.blog.date),
											m("p", this.latest.blog.description)
										]),
										m("div", [
											renderPreview(this.latest.blog.preview)
										])
									])
									: m("p", "Cargando...")
						])
					])
				])
			])
		]);
	}
};

export default Home;