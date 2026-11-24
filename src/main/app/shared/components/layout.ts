import m from "mithril";
import banner from "./banner.ts";
import sidebar from "./sidebar.ts";
import { getSettings } from "../services/settings.ts";
import { applyPanelStagger } from "../handlers/panel-stagger.ts";

export default {
  oncreate: applyPanelStagger,
  onupdate: applyPanelStagger,

  view(vnode: m.Vnode) {
    const { sidebarPosition } = getSettings();
    return m("div.layout", [
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
