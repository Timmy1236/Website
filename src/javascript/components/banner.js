import m from "mithril";

const text = "timmy.nekoweb.com";

console.log("Hola mundo!")

export default {
  view: () =>
    m(".banner-panel",
      m(".banner", [
        m("img", { alt: "A dithered image taken from the game Voices of the Void" }),
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