import ButtonsRow from "../components/ButtonsRow.js";

const Home = {
  oncreate() {
    window.refreshI18n?.();
  },

  view: () =>
    m("div.main-column", [

      m("div.content-block.welcome", [
        m("div.title", m("h1.text-title", { "data-i18n": "home.welcome.title" })),
        m("div.div-content",
          m("div.div-inside", [
            m("div", { "data-i18n": "[html]home.welcome.text" }),
            m("div", {
              style: "width:100%;display:flex;justify-content:center"
            }, m("img#nom-nom", {
              src: "./assets/images/tree.gif",
              style: "margin-top:10px"
            }))
          ])
        )
      ]),

      m(ButtonsRow)
    ])
};

export default Home;
