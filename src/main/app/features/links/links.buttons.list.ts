import { type ButtonSite } from "./links.buttons.overlay.ts";

const _preview = (x: string) => `/assets/images/pages/links/previews/${x}.webp`;
const _button = (x: string, y: string) => `/assets/images/pages/links/buttons/${x}.${y}`;
const _note = (x: string) => `main.links.windows.button-wall.content.notes.${x}`;

export const neighborSites: ButtonSite[] = [
  {
    owner: "chantu",
    url: "https://chantu.nekoweb.org/",
    button: _button("chantu", "png"),
    preview: _preview("chantu"),
    note: _note("chantu")
  },
  {
    owner: "slowslushie",
    url: "https://slowslushie.nekoweb.org/",
    button: _button("slowslushie", "png"),
    preview: _preview("slowslushie"),
    note: _note("slowslushie")
  },
  {
    owner: "nyani58",
    url: "https://nyani58.nekoweb.org/",
    button: _button("nyani58", "gif"),
    preview: _preview("nyani58"),
    note: _note("nyani58")
  },
  {
    owner: "nogood angel",
    url: "https://nogood-angel.nekoweb.org/",
    button: _button("nogood-angel", "png"),
    preview: _preview("nogoodangel")
  },
  {
    owner: "someones insane",
    url: "https://someones-insane.nekoweb.org/",
    button: _button("someones-insane", "gif"),
    preview: _preview("someonesInsane")
  },
  {
    owner: "yefreitor",
    url: "https://yefreitor.com/",
    button: _button("yefreitor", "png"),
    preview: _preview("yefreitor")
  },
  {
    owner: "ellen",
    url: "https://ellen.nekoweb.org/",
    button: _button("ellen", "png"),
    preview: _preview("ellen")
  },
  {
    owner: "ramon",
    url: "https://ramon.nekoweb.org/",
    button: _button("ramon", "png"),
    preview: _preview("ramon")
  },
  {
    owner: "reduxflakes",
    url: "https://reduxflakes.nekoweb.org/",
    button: _button("reduxflakes", "webp"),
    preview: _preview("reduxflakes")
  },
  {
    owner: "lucksiyo",
    url: "https://lucksiyo.xyz/",
    button: _button("lucksiyo", "png"),
    preview: _preview("lucksiyo")
  },
  {
    owner: "calijori",
    url: "https://calijori.com/",
    button: _button("calijori", "gif"),
    preview: _preview("calijori")
  },
  {
    owner: "venus territory",
    url: "https://venus-territory.nekoweb.org/",
    button: _button("venus-territory", "png"),
    preview: _preview("venus")
  },
  {
    owner: "Ulon",
    url: "https://ulon.dev/",
    button: _button("ulon", "gif"),
    preview: _preview("ulon")
  },
  {
    owner: "nurnen",
    url: "https://nurnen.nekoweb.org/home.html",
    button: _button("nurnen", "gif"),
    preview: _preview("nurnen")
  },
  {
    owner: "jovidmtp",
    url: "https://jovidmtp.nekoweb.org/",
    button: _button("jovidmtp", "png"),
    preview: _preview("jovidmtp")
  },
  {
    owner: "cbz",
    url: "https://cbz.nekoweb.org/",
    button: _button("cbz", "png"),
    preview: _preview("cbz")
  },
  {
    owner: "amoeba",
    url: "https://amoeba.nekoweb.org/",
    button: _button("amoeba", "png"),
    preview: _preview("amoeba")
  },
  {
    owner: "hyacintho",
    url: "https://hyacintho.nekoweb.org/",
    button: _button("hyacintho", "png"),
    preview: _preview("hyacintho")
  },
  {
    owner: "recalls",
    url: "https://recalls.zone/",
    button: _button("recall", "png"),
    preview: _preview("recalls")
  }
];

export const likesSite: ButtonSite[] = [
  {
    owner: "jbc",
    url: "https://dimden.dev/",
    button: "https://dimden.dev/services/images/88x31.gif",
    preview: _preview("dimden"),
    note: _note("dimden")
  },
  {
    owner: "jbc",
    url: "https://jbc.lol/",
    button: _button("jbc", "gif"),
    preview: _preview("jbc"),
    note: _note("jbc")
  },
  {
    owner: "loyaltyfreakmusic",
    url: "https://loyaltyfreakmusic.com/",
    button: _button("loyaltyfreakmusic", "gif"),
    preview: _preview("loyaltyfreakmusic"),
    note: _note("loyaltyfreakmusic")
  }
];
