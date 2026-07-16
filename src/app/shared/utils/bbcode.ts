const EMOJI_MAP: Record<string, string> = {
	wave: "wave.gif"
};

type ReplaceFn = (match: string, ...groups: string[]) => string;

/**
 * [b]texto[/b]                 |   Texto en negrita.
 * [i]texto[/i]                 |   Texto en italic.
 * [u]texto[/u]                 |   Texto con underline.
 * [color=red]texto[/color]     |   Texto en color usando CSS.
 * [url=...]texto[/url]         |   Texto hipervínculo.
 * [rainbow]texto[/rainbow]     |   Texto con efecto de arcoíris.
 * [br][/br]                    |   Nueva linea de texto.
 * [opacity]texto[/opacity]     |   Texto con opacidad.
 * [tooltip=...]texto[/tooltip] |   Texto con tooltip.
 */
const BBCODE_RULES: { pattern: RegExp, replace: string | ReplaceFn }[] = [
	{
		pattern: /\[b\](.*?)\[\/b\]/gis,
		replace: "<span class='bb-bold'>$1</span>"
	},
	{
		pattern: /\[i\](.*?)\[\/i\]/gis,
		replace: "<span class='bb-italic'>$1</span>"
	},
	{
		pattern: /\[u\](.*?)\[\/u\]/gis,
		replace: "<span class='bb-underline'>$1</span>"
	},
	{
		pattern: /\[color=([a-zA-Z#0-9]+)\](.*?)\[\/color\]/gis,
		replace: (_match: string, color: string, content: string) => `<span class='bb-color' style='color:${color}'>${content}</span>`
	},
	{
		pattern: /\[url=([^\]]+)\](.*?)\[\/url\]/gis,
		replace: (_match: string, href: string, content: string) => `<a class='bb-link link' href='${href}' target='_blank' rel='noopener noreferrer'>${content}</a>`
	},
	{
		pattern: /\[rainbow\](.*?)\[\/rainbow\]/gis,
		replace: "<span class='rainbow-text'>$1</span>"
	},
	{
		pattern: /\[br\]\[\/br\]/gis,
		replace: "<br/>"
	},
	{
		pattern: /\[opacity=([0-9]|[1-9][0-9]|100)\](.*?)\[\/opacity\]/gis,
		replace: (_match, opacity, content) => {
			const alpha = parseFloat(opacity) / 100;
			return `<span class='bb-opacity' style='opacity:${alpha}'>${content}</span>`;
		}
	},
	{
		pattern: /\[tooltip=([^\]]+)\]([\s\S]*?)\[\/tooltip\]/gi,
		replace: (_match: string, text: string, content: string) => `<span data-tooltip='${text}' >${content}</span>`
	}
];

export function parseBBCode(text: string): string {
	let result = text;

	for (const rule of BBCODE_RULES) {
		result = result.replace(rule.pattern, rule.replace as string);
	}

	result = result.replace(/:(\w+):/g, (_match, name) => {
		const filename = EMOJI_MAP[name];
		if (!filename) return _match;
		return `<img class="emoji" src="/assets/images/emojis/${filename}" alt=":${name}:" title=":${name}:">`;
	});

	return result;
}