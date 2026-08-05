import { type ButtonSite } from "./links.buttons.overlay.ts";

const _preview = (x: string) => `/assets/images/pages/links/previews/${x}.webp`;
const _localButton = (x: string) => `/assets/images/buttons/${x}.png`;

export const neighborSites: ButtonSite[] = [
  {
    url: "https://chantu.nekoweb.org/",
    button: "https://chantu.nekoweb.org/imgs/buttons/Chantu.png",
    preview: _preview("chantu"),
    note: "links.buttonWall.notes.chantu"
  },
  {
    url: "https://slowslushie.nekoweb.org/",
    button: _localButton("slowslushie-fix"),
    preview: _preview("slowslushie"),
    note: "links.buttonWall.notes.slowslushie"
  },
  {
    url: "https://nyani58.nekoweb.org/",
    button: "https://file.garden/Z6nZpUcjoTvBXgF3/assets/realimportant/nyani58_button1.gif",
    preview: _preview("nyani58"),
    note: "links.buttonWall.notes.nyani58"
  },
  {
    url: "https://nogood-angel.nekoweb.org/",
    button: "https://nogood-angel.moe/images/graphics/buttons/button2.webp",
    preview: _preview("nogoodangel")
  },
  {
    url: "https://someones-insane.nekoweb.org/",
    button: "https://someones-insane.nekoweb.org/images/imapettyasshole_button.gif",
    preview: _preview("someonesInsane")
  },
  {
    url: "https://yefreitor.com/",
    button: "https://yefreitor.com/img/button.png",
    preview: _preview("yefreitor")
  },
  {
    url: "https://ellen.nekoweb.org/",
    button: "https://ellen.nekoweb.org/Images/oc%20headshot%20style.png",
    preview: _preview("ellen")
  },
  {
    url: "https://ramon.nekoweb.org/",
    button: "https://ramon.nekoweb.org/botonesyblinkies/botonramon.png",
    preview: _preview("ramon")
  },
  {
    url: "https://reduxflakes.nekoweb.org/",
    button: "https://reduxflakes.nekoweb.org/img/hcl6TIROJn-88.webp",
    preview: _preview("reduxflakes")
  },
  {
    url: "https://lucksiyo.xyz/",
    button: "https://lucksiyo.xyz/resources/button.jpg",
    preview: _preview("lucksiyo")
  },
  {
    url: "https://calijori.com/",
    button: "https://file.garden/aQNtCESHqyYXcwhI/buttons/calijori88x31.png",
    preview: _preview("calijori")
  },
  {
    url: "https://entama.nekoweb.org/",
    button: "https://entama.nekoweb.org/img/buttonentama2.GIF",
    preview: _preview("entama")
  },
  {
    url: "https://venus-territory.nekoweb.org/",
    button: "https://venus-territory.nekoweb.org/media/venus-territory-rose.png",
    preview: _preview("venus")
  },
  {
    url: "https://jovidmtp.nekoweb.org/",
    button: _localButton("jovidmtp"),
    preview: _preview("jovidmtp"),
    tooltip: "links.buttonWall.tooltip.placeholder"
  },
  {
    url: "https://cbz.nekoweb.org/",
    button: _localButton("cbz"),
    preview: _preview("cbz"),
    tooltip: "links.buttonWall.tooltip.placeholder"
  },
  {
    url: "https://amoeba.nekoweb.org/",
    button: _localButton("amoeba"),
    preview: _preview("amoeba"),
    tooltip: "links.buttonWall.tooltip.placeholder"
  },
  {
    url: "https://hyacintho.nekoweb.org/",
    button: _localButton("hyacintho"),
    preview: _preview("hyacintho"),
    tooltip: "links.buttonWall.tooltip.placeholder"
  },
  {
    url: "https://recalls.zone/",
    button: _localButton("recall"),
    preview: _preview("recalls"),
    tooltip: "links.buttonWall.tooltip.placeholder"
  }
];

export const likesSite: ButtonSite[] = [
  {
    url: "https://jbc.lol/",
    button: "https://jbc.lol/imgs/buttons/jbtn.png",
    preview: _preview("jbc"),
    note: "links.buttonWall.notes.jbc"
  },
  {
    url: "https://loyaltyfreakmusic.com/",
    button: "https://loyaltyfreakmusic.com/wp-content/uploads/2024/12/LFM_bouton.gif",
    preview: _preview("loyaltyfreakmusic"),
    note: "links.buttonWall.notes.loyaltyfreakmusic"
  }
];

export const MyButton: ButtonSite = {
  url: "https://timmy.nekoweb.org/",
  button: "https://timmy.nekoweb.org/assets/images/buttons/timmy_button.png",
  preview: _preview("timmy"),
  tooltip: "links.buttonWall.tooltip.timmy"
};