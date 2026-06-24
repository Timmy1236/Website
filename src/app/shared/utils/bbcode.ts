/*
 * bbcode.ts
 * ---------
 * Parsea BBCode ([b], [i], [spoiler], etc.) y emojis (:smile:) de un texto a elementos HTML con CSS.
 * https://en.wikipedia.org/wiki/BBCode
*/

const EMOJI_MAP: Record<string, string> = {
  wave: "wave.gif",
};

type ReplaceFn = (match: string, ...groups: string[]) => string;

const BBCODE_RULES: { pattern: RegExp; replace: string | ReplaceFn }[] = [
  {
    // [b]texto[/b] — Texto en negrita.
    pattern: /\[b\](.*?)\[\/b\]/gis, replace: "<span class='bb-bold'>$1</span>"
  },
  {
    // [i]texto[/i] — Texto en italic.
    pattern: /\[i\](.*?)\[\/i\]/gis, replace: "<span class='bb-italic'>$1</span>"
  },
  {
    // [u]texto[/u] — Texto con underline.
    pattern: /\[u\](.*?)\[\/u\]/gis, replace: "<span class='bb-underline'>$1</span>"
  },
  {
    // [color=red]texto[/color] — Da color al texto (CSS: #fff o white)
    pattern: /\[color=([a-zA-Z#0-9]+)\](.*?)\[\/color\]/gis,
    replace: (_match: string, color: string, content: string) => `<span class='bb-color' style='color:${color}'>${content}</span>`,
  },
  {
    // [url=...]texto[/url] - Texto hipervínculo.
    pattern: /\[url=([^\]]+)\](.*?)\[\/url\]/gis,
    replace: (_match: string, href: string, content: string) => `<a class='bb-link link' href='${href}' target='_blank' rel='noopener noreferrer'>${content}</a>`,
  },
  {
    // [rainbow]texto[/rainbow] — Texto con efecto de arcoíris.
    pattern: /\[rainbow\](.*?)\[\/rainbow\]/gis, replace: "<span class='rainbow-text'>$1</span>"
  },
  {
    // [br][/br] — Nueva linea
    pattern: /\[br\]\[\/br\]/gis, replace: "<br/>"
  },
  {
    // [opacity]texto[/opacity] — Texto con opacidad.
    pattern: /\[opacity=([0-9]|[1-9][0-9]|100)\](.*?)\[\/opacity\]/gis,
    replace: (_match, opacity, content) => {
      const alpha = parseFloat(opacity) / 100;
      return `<span class='bb-opacity' style='opacity:${alpha}'>${content}</span>`;
    },
  },
  {
    // [tooltip=...]texto[/tooltip] - Texto con tooltip que se vuelve visible cuando el texto esta en hover.
    pattern: /\[tooltip=([^\]]+)\]([\s\S]*?)\[\/tooltip\]/gi,
    replace: (_match: string, text: string, content: string) => `<span data-tooltip='${text}' >${content}</span>`,
  },
];

function _parse(html: string): string {
  let result = html;

  for (const rule of BBCODE_RULES) {
    result = result.replace(rule.pattern, rule.replace as string);
  }

  result = result.replace(/:(\w+):/g, (_match: string, name: string) => {
    const filename = EMOJI_MAP[name];
    if (!filename) return _match;
    return `<img class="emoji" src="/assets/images/emojis/${filename}" alt=":${name}:" title=":${name}:">`;
  });

  return result;
}

/**
 * Busca los elementos de la pagina con la data:"bbcode" y modifica el innerHTML para agregar modificaciones o emojis.
 */
export function applyBBCode(): void {
  //console.log("%cbbcode>%c Ejecutando: %capplyBBCode()", "color: #f3d087; background: #282A35;", "color: white", "color: cyan");

  const elements = document.querySelectorAll("[data-bbcode]");

  elements.forEach((element) => {
    element.innerHTML = _parse(element.innerHTML);
  });
}