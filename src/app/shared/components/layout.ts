import m from "mithril";
import banner from "./banner.ts";
import sidebar from "./sidebar.ts";
import { getSettings } from "../core/settings-logic";

export default {
  view(vnode: m.Vnode) {
    const { vignetteEffect } = getSettings();
    return m("div.layout", [
      vignetteEffect ? m("div.vignette", { id: "vignette" }) : null,
      m(".container", [
        m(banner, { role: "banner" }),
        m(".layout-content", [
          m(sidebar, { role: "navigation" }),
          m(".content-column", { role: "main" }, vnode.children)
        ])
      ])
    ])
  }
}