import banner from "./banner.js";
import sidebar from "./sidebar.js";

export default {
  view(vnode) {
    return m("div", [
      m("div.vignette", { id: "vignette" }),
      m(".container", [
        m(banner),
        m(".layout-content", [
          m(sidebar),
          m(".content-column", vnode.children)
        ])
      ])
    ]);
  }
};
