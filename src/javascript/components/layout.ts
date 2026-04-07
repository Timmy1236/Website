import m from "mithril";
import banner from "./banner.ts";
import sidebar from "./sidebar.ts";
import { getSetting } from "../core/settings-logic.js";

export default {
  view(vnode: any) {
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
