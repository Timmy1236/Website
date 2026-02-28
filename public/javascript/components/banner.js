import m from "mithril";

export default {
  view: () =>
    m(".banner-panel",
      m(".banner", [
        m("img"),
        m("p.banner-title", "timmy.nekoweb.org")
      ])
    )
};
