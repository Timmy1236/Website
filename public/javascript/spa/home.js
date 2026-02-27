import ButtonsRow from "../components/buttons_row.js";

const Home = {
  oncreate() {
    window.refreshI18n?.();
    window.initDefaultSettings?.();
  },

  view: () =>
    m(".content-column", [

      m(".panel", [
        m(".panel-header", m("h1.text-title", { "data-i18n": "home.welcome.title" })),
        m(".panel-content", [
          m("div", { "data-i18n": "[html]home.welcome.text" }),
          m("div", {
            style: "width:100%;display:flex;justify-content:center"
          }, m("img#nom-nom", {
            src: "./assets/images/pages/home/tree.gif",
            style: "margin-top:10px"
          }))
        ])
      ]),

      m(ButtonsRow)
    ])
};

export default Home;
