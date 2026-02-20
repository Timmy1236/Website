import IntroBanner from "./intro_banner.js";
import Sidebar from "./sidebar.js";

export default {
  view(vnode) {
    return m("div", [
      m("div.vignette", { id: "vignette" }),
      m("div.page", [
        m(IntroBanner),
        m("div.row", [
          m(Sidebar),
          m("div.main-column", vnode.children)
        ])
      ])
    ]);
  }
};
