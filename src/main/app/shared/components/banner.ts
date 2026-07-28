import m from "mithril";

const text = "timmy.nekoweb.com";

export default {
  view: () =>
    m(".banner-panel",
      m(".panel-frame", [
        m(".banner", [
          m("img", { alt: "A dithered image taken from the game Voices of the Void" }),
          m("p.banner-title",
            m(".wave-text",
              text.split("").map((char, i) =>
                m("span.wave-container", { style: { "--i": i } },
                  m("span.wave-text-letter", char)
                )
              )
            )
          )
        ])
      ])
    )
};