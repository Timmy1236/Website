import { cLog } from "../../shared/core/clog";
import type { LanyardResponse, Data } from "./discord";

export async function loadDiscordProfile(userId: string) {
	if (window.discordProfileCache) {
		cLog("INFO", "Discord", "Ya hay datos de mi perfil en la cache, no es necesario pedir nada.");
		return renderDiscordProfile(window.discordProfileCache);
	}

	try {
		cLog("INFO", "Discord", "Obteniendo datos nuevos de mi perfil desde la API de Lanyard.");

		const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
		const json: LanyardResponse = await response.json();

		if (!json.success) throw new Error("No se pudo obtener la información del usuario.");

		const data = json.data;
		window.discordProfileCache = data;

		renderDiscordProfile(data);
	}
	catch (error) {
		console.error(error);

		const statusElement = document.getElementById("status");

		if (!statusElement) return;

		statusElement.textContent = "Error!";
		statusElement.style.color = "#ff6666";
	}
}

function renderDiscordProfile(data: Data) {
	const avatarImg = document.getElementById("pfp") as HTMLImageElement;
	const statusElement = document.getElementById("status") as HTMLParagraphElement;

	if (!avatarImg || !statusElement) return;

	const user = data.discord_user;
	const status = data.discord_status;

	avatarImg.src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;

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