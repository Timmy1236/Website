import IntroBanner from "./IntroBanner.js";
import Sidebar from "./Sidebar.js";

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
