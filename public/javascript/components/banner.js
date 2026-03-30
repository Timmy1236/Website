import m from "mithril";

const text = "timmy.nekoweb.com";

export default {
  view: () =>
    m(".banner-panel",
      m(".banner", [
        m("img"),
        m("p.banner-title",
          m(".wave-text",
            text.split("").map((char, i) =>
              m("span", {
                style: { "--i": i }
              }, char)
            )
          )
        )
      ])
    )
};