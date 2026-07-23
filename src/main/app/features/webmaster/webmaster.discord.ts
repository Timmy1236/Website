import { showToast } from "../../shared/components/toast";
import { cLog } from "../../shared/core/clog";

export interface LanyardResponse {
	data: Data
	success: boolean
}

export interface Data {
	discord_status: string
}

const userID = "375889010419171328";

let lastCheckTime = new Date();
let time: Date;
let fristCheck: boolean;

export async function loadStatus() {
	time = new Date();
	const lastCheck = ((time.getTime() - lastCheckTime.getTime()) / 60000); // En minutos

	if ((lastCheck >= 1) || fristCheck !== true) {
		fristCheck = true;
		lastCheckTime = new Date();

		cLog("INFO", "Discord", "Obteniendo status de Discord.");
		_getStatus();
	}
	else {
		cLog("INFO", "Discord", "Intento de obtener el status de Discord cuando no paso mas de un minuto.");
		showToast("info", true, "webmaster.toasts.status.title", true, "webmaster.toasts.status.desc", true);
	}
}

async function _getStatus() {
	const statusElement = document.getElementById("status") as HTMLParagraphElement;
	if (!statusElement) return;
	statusElement.textContent = "...";

	const response = await fetch(`https://api.lanyard.rest/v1/users/${userID}`);
	const json: LanyardResponse = await response.json();

	if (!json.success) throw new Error("No se pudo obtener la información del usuario.");

	const data = json.data;
	const status = data.discord_status;

	type Status = "online" | "idle" | "dnd" | "offline";

	const statusMap: Record<Status, { text: string, color: string }> = {
		online: { text: "Online", color: "#43b581" },
		idle: { text: "AFK", color: "#faa61a" },
		dnd: { text: "No molestar", color: "#f04747" },
		offline: { text: "Offline", color: "#747f8d" }
	};

	const current = statusMap[status as Status] || statusMap.offline;

	statusElement.textContent = current.text;
	statusElement.style.color = current.color;
}