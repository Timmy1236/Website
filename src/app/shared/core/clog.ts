type type = "INFO" | "ERROR" | "ADVERTENCIA" | "DEBUG";

const BASE_STYLES = [
	"font-family: Verdana, sans-serif; padding: 0 5px 0 6px; border-radius: 5px 0 0 5px; ",
	"font-family: Verdana, sans-serif; padding: 0 6px 0 5px; border-radius: 0 5px 5px 0;",
	"font-family: Verdana, sans-serif; color: white;"
];

export function cLog(type: type, scriptName: string, text: string) {
	const STYLES = [...BASE_STYLES];
	switch (type) {
		case "INFO": // NOTE: ¿Cual es la diferencia entre console.log y console.info?
			STYLES[0] += "background-color: #2b3f57; color: white;";
			STYLES[1] += "background-color: #233447; color: white;";
			console.info(`%c${type}%c${scriptName}%c ${text}`, ...STYLES);
			break;
		case "ERROR":
			STYLES[0] += "background-color: #421111; color: #ff5959;";
			STYLES[1] += "background-color: #330d0d; color: #ff5959;";
			console.error(`%c${type}%c${scriptName}%c ${text}`, ...STYLES);
			break;
		case "ADVERTENCIA":
			STYLES[0] += "background-color: #8a5e24; color: #ffdc74;";
			STYLES[1] += "background-color: #6e4b1d; color: #ffdc74;";
			console.warn(`%c${type}%c${scriptName}%c ${text}`, ...STYLES);
			break;
		case "DEBUG":
		default:
			STYLES[0] += "background-color: #2B5748; color: white;";
			STYLES[1] += "background-color: #204237; color: white;";
			console.log(`%c${type}%c${scriptName}%c ${text}`, ...STYLES);
			break;
	}
}