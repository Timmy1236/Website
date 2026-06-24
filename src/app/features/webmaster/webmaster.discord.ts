import type { LanyardResponse, Data, Activity } from "./discord";

export async function loadDiscordProfile(userId: string) {
  console.log("%cdiscord.js>" + "%c Ejecutando: " + "%cloadDiscordProfile()", "color: #87F3A9; background: #282A35;", "color: white", "color: cyan");

  if (window.discordProfileCache) {
    console.log("%cdiscord.js>" + "%c Ya hay datos en la cache.", "color: #87F3A9; background: #282A35;", "color: white");
    return renderDiscordProfile(window.discordProfileCache);
  }

  try {
    console.log("%cdiscord.js>" + "%c Obteniendo datos nuevos.", "color: #87F3A9; background: #282A35;", "color: white");

    const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
    const json: LanyardResponse = await response.json();

    if (!json.success) throw new Error("No se pudo obtener la información del usuario.");

    const data = json.data;
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

function getActivityImage(activity: Activity): string | null {
  const image = activity.assets?.large_image;
  if (!image) return null;
  if (image.startsWith("mp:external")) return null;
  return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${image}.png`;
}

function renderDiscordProfile(data: Data) {
  const avatarImg = document.getElementById("pfp") as HTMLImageElement;
  const statusElement = document.getElementById("status") as HTMLParagraphElement;
  const activityContainer = document.getElementById("activity") as HTMLElement;
  const activityImage = document.getElementById("activity-image") as HTMLImageElement;
  const activityName = document.getElementById("activity-name") as HTMLParagraphElement;
  const activityDetails = document.getElementById("activity-details") as HTMLParagraphElement;
  const activityState = document.getElementById("activity-state") as HTMLParagraphElement;

  if (!avatarImg || !statusElement) return;

  const user = data.discord_user;
  const status = data.discord_status;

  avatarImg.src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;

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

  const activity =
    data.activities.find(a => a.type === 0 && a.application_id) ||
    data.activities.find(a => a.type === 1 && a.application_id) ||
    data.activities.find(a => a.type === 2 && a.application_id) ||
    data.activities.find(a => a.type === 3 && a.application_id) ||
    data.activities.find(a => a.application_id && a.type !== 4);

  if (!activity) {
    if (activityContainer) activityContainer.style.display = "none";
    return;
  }

  if (activityContainer) activityContainer.style.display = "";

  activityName.textContent = activity.name ?? "";
  activityDetails.textContent = activity.details ?? "";
  activityState.textContent = activity.state ?? "";

  const imageUrl = getActivityImage(activity);

  if (imageUrl) {
    activityImage.src = imageUrl;
    activityImage.style.display = "";
  } else {
    activityImage.style.display = "none";
  }
}