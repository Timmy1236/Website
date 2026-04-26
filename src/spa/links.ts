import m from "mithril";
import { refreshi18n } from "../core/i18n";
import { showButtonOverlay, hideButtonOverlay, type ButtonSite } from "../ui/button-overlay.ts";
import { showToast } from "../ui/toast.ts";

// NOTE: Esto a lo mejor tendríamos que moverlo a otro sitio, no es necesariamente lógica en UI pero tener una lista de todos los botones va ser realmente molesto con el tiempo.
const neighborSites: ButtonSite[] = [
  {
    href: "https://chantu.nekoweb.org/",
    btnSrc: "https://chantu.nekoweb.org/imgs/buttons/Chantu.png",
    screenshotSrc: "/assets/images/pages/links/previews/chantu.webp",
    text: "La primera persona que conocí en nekoweb y de paso que hablase en español, si no fuera por Chantu seguramente me hubiera quedado en github pages por lo complicado que se ve todo esto sitio. ¡Super friendly!",
  },
  {
    href: "https://slowslushie.nekoweb.org/",
    btnSrc: "/assets/images/buttons/slowslushie-fix.png",
    screenshotSrc: "/assets/images/pages/links/previews/slowslushie.webp",
    text: "Banner por encima con una anchura que cubre el sidebar y el contenido principal, el sidebar a la izquierda con botones para cambiar de pagina... El contenido principal a la derecha... ¡Mi pagina es original y no se lo robe a nadie!",
  },
  {
    href: "https://nyani58.nekoweb.org/",
    btnSrc: "https://file.garden/Z6nZpUcjoTvBXgF3/assets/realimportant/nyani58_button1.gif",
    screenshotSrc: "/assets/images/pages/links/previews/nyani58.webp",
    text: "¿¿¿DONDE MIERDA ESTOY???",
  },
  {
    href: "https://nogood-angel.nekoweb.org/",
    btnSrc: "https://nogood-angel.nekoweb.org/graphics/buttons/nogood-angel.png",
    screenshotSrc: "/assets/images/pages/links/previews/nogoodangel.webp",
    text: "Cada vez que entro a nekoweb, veo esta misma pagina siempre estando primero en la categoría 'ultimas updates'. ¿Como? ¿Como alguien puede sacar tantas updates? ¿Como alguien le da la cabeza para eso?",
  },
  {
    href: "https://someones-insane.nekoweb.org/",
    btnSrc: "https://someones-insane.nekoweb.org/images/imapettyasshole_button.gif",
    screenshotSrc: "/assets/images/pages/links/previews/someonesInsane.webp",
    text: "No se porque... Pero la imagen del inicio me hace recordar demasiado a los juegos de terror hecho en flash de 'Point & Click' donde los objetos clickeables se verían estúpidamente diferente a los demás. Me hubiera gustado que fuera un flash de verdad corriendo en Ruffle"
  },
  {
    href: "https://yefreitor.com/",
    btnSrc: "https://yefreitor.com/img/button.png",
    screenshotSrc: "/assets/images/pages/links/previews/yefreitor.webp",
    text: "Hay un maldito botón para fumarte un porro en el inicio. ¿Que mas necesitas?"
  },
  {
    href: "https://bweh.dhyotteh.com/",
    btnSrc: "/assets/images/buttons/no-button.png",
    screenshotSrc: "/assets/images/pages/links/previews/bweh.webp",
    text: "Joder, y yo pensando que estaba haciendo la pagina mas interactiva y me sale este con la mejor mierda del mundo D:",
  },
  {
    href: "https://jovidmtp.nekoweb.org/",
    btnSrc: "/assets/images/buttons/no-button.png",
    screenshotSrc: "/assets/images/pages/links/previews/jovidmtp.webp",
    text: "Pobre alma, su pagina siendo super compatible con versiones super antiguas para navegadores! ¡Y la mia necesitaras la ultima version posible de Chrome y ni con eso seras capaz de cargarlo sin problemas!"
  },
  {
    href: "https://cbz.nekoweb.org/",
    btnSrc: "/assets/images/buttons/no-button.png",
    screenshotSrc: "/assets/images/pages/links/previews/cbz.webp",
    text: "Triste de ver que YouPlock cerrara pronto, era silly pero tenia potencial teniendo en cuneta que se veía algo muy complicado de armar. Espero lo mejor para siguientes proyectos.",
  },
  {
    href: "https://ellen.nekoweb.org/",
    btnSrc: "https://ellen.nekoweb.org/Images/oc%20headshot%20style.png",
    screenshotSrc: "/assets/images/pages/links/previews/ellen.webp",
    text: "¿Una lista de badges difíciles de conseguir? Me gusta esa idea. Debería de poner mas cosas de Roblox en mi sitio.",
  },
  {
    href: "https://ramon.nekoweb.org/",
    btnSrc: "https://ramon.nekoweb.org/botonesyblinkies/botonramon.png",
    screenshotSrc: "/assets/images/pages/links/previews/ramon.webp",
    text: "No sabes lo difícil que fue encontrar otra pagina en nekoweb que el autor hable español, 'RaMóN' NO TE ME DESAPAREZCAS, NECESITO CONOCER MAS GENTE QUE HABLE EN ESPAÑOL EN NEKOWEB.",
  },
  {
    href: "https://amoeba.nekoweb.org/",
    btnSrc: "/assets/images/buttons/no-button.png",
    screenshotSrc: "/assets/images/pages/links/previews/amoeba.webp",
    text: "No, la captura no esta mal. La pagina cargo correctamente. Así es el landing page. Me quede como un minuto mirando la pantalla esperando que algo pasara, y tenia que clickear el titulo para continuar. :)"
  },
];

const likesSite: ButtonSite[] = [
  {
    href: "https://jbc.lol/",
    btnSrc: "https://jbc.lol/imgs/buttons/jbtn.png",
    screenshotSrc: "/assets/images/pages/links/previews/jbc.webp",
    text: "Nekobox realmente me ayudo demasiado para tener un sitebox al menos decente, me parece extraño que eso no sea una función nativa en nekoweb, tengo problemas con el css de mi propia pagina y estos quieren que lo haga a ciegas???",
  },
  {
    href: "https://moosyu.nekoweb.org/",
    btnSrc: "https://moosyu.github.io/assets/buttons/moosyu.png",
    screenshotSrc: "/assets/images/pages/links/previews/moosyu.webp",
    text: "Me robe el código del form de esta misma pagina y el owner no lo sabe :youtube_emoji_biting_nails:",
  },
];

const MyButton: ButtonSite = {
  href: "https://timmy.nekoweb.org/",
  btnSrc: "https://timmy.nekoweb.org/assets/images/buttons/timmy_button.png",
  screenshotSrc: "/assets/images/pages/links/previews/timmy.webp",
  text: "... Ese soy yo.",
}

const Others = {
  oncreate() {
    refreshi18n();
  },

  view: function () {
    return m(".content", [
      m(".panel",
        m(".panel-header", [
          m("p", { "data-i18n": "links.buttonWall.title" }),
          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ]),
        m(".panel-content", [
          m("h2", { "data-i18n": "links.buttonWall.list.neighbors" }),
          m(".neighbors",
            neighborSites.map((site) =>
              m("a", {
                href: site.href,
                onmouseenter: (e: MouseEvent) =>
                  showButtonOverlay(site, e.currentTarget as HTMLElement),
                onmouseleave: () => hideButtonOverlay(),
              },
                m("img", { src: site.btnSrc, alt: site.href })
              )
            )
          ),

          m("h2", { "data-i18n": "links.buttonWall.list.likes" }),
          m(".neighbors",
            likesSite.map((site) =>
              m("a", {
                href: site.href,
                onmouseenter: (e: MouseEvent) =>
                  showButtonOverlay(site, e.currentTarget as HTMLElement),
                onmouseleave: () => hideButtonOverlay(),
              },
                m("img", { src: site.btnSrc, alt: site.href })
              )
            )
          ),

          m("h2", { "data-i18n": "links.buttonWall.list.myButton" }),
          m(".neighbors",
            m("a", {
              onmouseenter: (e: MouseEvent) =>
                showButtonOverlay(MyButton, e.currentTarget as HTMLElement),
              onmouseleave: () => hideButtonOverlay(),
              "data-tooltip": "Copy to Clipboard!"
            },
              m("img", {
                src: "https://timmy.nekoweb.org/assets/images/buttons/timmy_button.png",
                onclick: () => { navigator.clipboard.writeText("https://timmy.nekoweb.org/assets/images/buttons/timmy_button.png"); showToast("Info", "info", "Link copied!") },
              })
            ),
          ),
        ])
      ),

      // Créditos
      m(".panel", [
        m(".panel-header",
          m("p.text-title", { "data-i18n": "links.credits.title" }),
          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ),
        m(".panel-content", [
          m("p.heading", "[ Hosting ]"),
          m("ul", [
            m("li", [m("a.link", { href: "https://nekoweb.org/", target: "_blank" }, "Website: Nekoweb")]),
            m("li", [m("a.link", { href: "https://filegarden.com/", target: "_blank" }, "Images: File Garden")]),
          ]),
          m(".spacing-line", { style: "--spacing-margin: 10px;" }),
          m("p.heading", "[ Librerías ]"),
          m("ul", [
            m("li", [m("a.link", { href: "https://mithril.js.org/", target: "_blank" }, "Mithril: Single Page Application")]),
            m("li", [m("a.link", { href: "https://www.11ty.dev/", target: "_blank" }, "11ty: Static Site Generator")]),
            m("li", [m("a.link", { href: "https://esbuild.github.io/", target: "_blank" }, "esbuild: TypeScript & CSS Bundler")]),
          ]),
          m(".spacing-line", { style: "--spacing-margin: 10px;" }),
          m("p.heading", "[ Herramientas Externas ]"),
          m("ul", [
            m("li", [m("a.link", { href: "https://ditherit.com/", target: "_blank" }, "Dither it!")]),
            m("li", [m("a.link", { href: "https://compress-or-die.com/", target: "_blank" }, "Compress or Die")]),
            m("li", [m("a.link", { href: "https://ezgif.com/", target: "_blank" }, "Ezgif")]),
          ]),
          m(".spacing-line", { style: "--spacing-margin: 10px;" }),
          m("p.heading", "[ Audios & Canciones ]"),
          m("ul", [
            m("li", [m("a.link", { href: "https://germfood.bandcamp.com/album/night-of-the-consumers-ost", target: "_blank" }, `"Store Track 1: Main website background song"`)])
          ]),
          m(".spacing-line", { style: "--spacing-margin: 10px;" }),
          m("p.heading", "[ Imágenes ]"),
          m("ul", [
            m("li", [m("a.link", { href: "https://www.reddit.com/r/LiminalSpace/comments/19ek506/voices_of_the_void/", target: "_blank" }, "Banner & others VotV images")]),
          ]),
        ])
      ]),

      // WebTiles
      m(".panel", [
        m(".panel-header",
          m("p.text-title", "iFrame: WebTiles"),
          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ),
        m(".panel-content", [
          m("div.iframe.container", [
            m("iframe", {
              src: "https://webtiles.kicya.net/e/timmy.nekoweb.org",
              width: "250",
              height: "270",
              frameborder: "0"
            }),
            m("textarea", `<iframe src="https://webtiles.kicya.net/e/timmy.nekoweb.org" width="250" height="270" frameborder="0"></iframe>\n\nhttps://timmy.nekoweb.org/pages/others/tile/`.trim())
          ])
        ]),
      ]),

      m(".panel", [
        m(".panel-header",
          m("p.text-title", "TV TIME (SUPER W.I.P)"),
          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ),
        m(".panel-content", [
          m("div.iframe.container", [
            m("iframe", {
              src: "/pages/tv-time.html",
              width: "300",
              height: "314",
              frameborder: "0"
            }),
            m("textarea", `<iframe src="https://timmy.nekoweb.org/pages/tv-time" width="300" height="314" frameborder="0"></iframe>`.trim())
          ])
        ])
      ]),

    ]);
  }
};

export default Others;