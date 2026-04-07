import m from "mithril";
import banner from "./banner.js";
import sidebar from "./sidebar.js";
import { getSetting } from "../core/settings-logic.js";

export default {
  view(vnode) {
    return m("div.layout", [
      getSetting("vignetteEffect") && m("div.vignette", { id: "vignette" }),
      m(".container", [
        m(banner, { role: "banner" }),
        m(".layout-content", [
          m(sidebar, { role: "navigation" }),
          m(".content-column", { role: "main" }, vnode.children),
        ])
      ])
    ]);
  }
};
