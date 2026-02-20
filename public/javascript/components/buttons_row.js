const ButtonsRow = {
  view() {
    return m(".content-block buttons-row",
      m(".buttons", [
        m("a", { href: "https://chantu.nekoweb.org/", "data-tooltip": "Chantu Website!" },
          m("img", {
            src: "https://chantu.nekoweb.org/imgs/buttons/Chantu.png",
            alt: "Chantu website"
          })
        ),
        m("a", { href: "https://slowslushie.nekoweb.org/", "data-tooltip": "Slowslushie Website!" },
          m("img", {
            src: "./assets/images/buttons/slowslushie-fix.png",
            alt: "slowslushie website"
          })
        ),
        m("a", { href: "https://nyani58.nekoweb.org/", "data-tooltip": "NYANI58 Website!" },
          m("img", {
            src: "https://file.garden/Z6nZpUcjoTvBXgF3/assets/realimportant/nyani58_button1.gif",
            alt: "nyani58 website"
          })
        ),
        m("a", { href: "https://nogood-angel.nekoweb.org/home", "data-tooltip": "No-Good Angel Website!" },
          m("img", {
            src: "https://nogood-angel.neocities.org/images/graphics/button_nogood-angel.png",
            alt: "nogood-angel website"
          })
        ),
      ])
    );
  }
};

export default ButtonsRow;
