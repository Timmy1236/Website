import m from "mithril";
import banner from "./banner.ts";
import sidebar from "./sidebar.ts";
import { getSettings } from "../core/settings-logic";
import { applyPanelStagger } from "../handlers/panel-stagger.ts";

export default {
  oncreate: applyPanelStagger,
  onupdate: applyPanelStagger,

  view(vnode: m.Vnode) {
    const { vignetteEffect, sidebarPosition } = getSettings();
    return m("div.layout", [
      vignetteEffect ? m("div.vignette", { id: "vignette" }) : null,
      m(".container", [
        m(banner),
        m(".layout-content", { class: sidebarPosition }, [
          m(sidebar),
          m("main.content-column", vnode.children)
        ])
      ])
    ]);
  }
};
