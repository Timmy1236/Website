declare global {
  interface Window {
    discordProfileCache?: Data;
  }
}

export interface LanyardResponse {
  data: Data;
  success: boolean;
}

export interface Data {
  discord_user: DiscordUser;
  activities: Activity[];
  discord_status: string;
}

export interface Activity {
  application_id: string;
  buttons: string[];
  created_at: number;
  details: string;
  id: string;
  name: string;
  platform: string;
  session_id: string;
  state: string;
  type: number;
}

export interface DiscordUser {
  avatar: string;
  bot: boolean;
  discriminator: string;
  display_name: string;
  display_name_styles: null;
  global_name: string;
  id: string;
  public_flags: number;
  username: string;
}

export async function loadDiscordProfile(userId: string) {
  console.log("%cdiscord.js>" + "%c Ejecutando: " + "%cloadDiscordProfile()", "color: #87F3A9; background: #282A35;", "color: white", "color: cyan")

  // Si ya tenemos datos en memoria → no fetch, solo render
  if (window.discordProfileCache) {
    console.log("%cdiscord.js>" + "%c Ya hay datos en la cache.", "color: #87F3A9; background: #282A35;", "color: white")

    return renderDiscordProfile(window.discordProfileCache);
  }

  // Si no está en cache, hacemos fetch
  try {
    console.log("%cdiscord.js>" + "%c Obteniendo datos nuevos.", "color: #87F3A9; background: #282A35;", "color: white")
    const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
    const json: LanyardResponse = await response.json();

    if (!json.success) throw new Error("No se pudo obtener la información del usuario.");

    const data = json.data;

    // Guardamos en memoria global
    window.discordProfileCache = data;

    renderDiscordProfile(data);

  } catch (error) {
    console.error(error);
    const statusElement = document.getElementById("discord-status-text");
    if (!statusElement) return;

    statusElement.textContent = "Error!";
    statusElement.style.color = "#ff6666";
  }
}

function renderDiscordProfile(data: Data) {
  const avatarImg = document.getElementById("discord-avatar") as HTMLImageElement;
  const statusElement = document.getElementById("discord-status-text") as HTMLParagraphElement;
  const activityElement = document.getElementById("discord-activity-text") as HTMLParagraphElement;

  if (!avatarImg || !statusElement) return;

  const user = data.discord_user;
  const status = data.discord_status;
  const activityName = data.activities[0]?.name;
  const activityDetails = data.activities[0]?.details;

  // Avatar
  avatarImg.src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;

  // Estado
  type Status = "online" | "idle" | "dnd" | "offline";

  const statusMap: Record<Status, { text: string; color: string }> = {
    online: { text: "Online", color: "#43b581" },
    idle: { text: "AFK", color: "#faa61a" },
    dnd: { text: "No molestar", color: "#f04747" },
    offline: { text: "Offline", color: "#747f8d" }
  };

  const current = statusMap[status as Status] || statusMap.offline;
  statusElement.textContent = current.text;
  statusElement.style.color = current.color;

  if (activityName) {
    activityElement.textContent = `Activity: ${activityName}`;
    activityElement.dataset.tooltip = activityDetails;
  } else {
    activityElement.style.display = "none";
  }
}
