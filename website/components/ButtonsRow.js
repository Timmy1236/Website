const ButtonsRow = {
  view() {
    return m(".content-block buttons-row",
      m(".buttons", [
        m("a", { href: "https://chantu.nekoweb.org/" },
          m("img", {
            src: "https://chantu.nekoweb.org/imgs/buttons/Chantu.png",
            alt: "Chantu website"
          })
        ),
        m("a", { href: "https://slowslushie.nekoweb.org/" },
          m("img", {
            src: "./assets/images/slowslushie-button-fixed.png",
            alt: "slowslushie website"
          })
        ),
        m("a", { href: "https://nyani58.nekoweb.org/" },
          m("img", {
            src: "https://file.garden/Z6nZpUcjoTvBXgF3/assets/realimportant/nyani58_button1.gif",
            alt: "nyani58 website"
          })
        )
      ])
    );
  }
};

export default ButtonsRow;
