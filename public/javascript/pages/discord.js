export async function loadDiscordProfile(userId) {
  console.log("discord.js > Ejecutando loadDiscordProfile.");

  // Si ya tenemos datos en memoria → no fetch, solo render
  if (window.discordProfileCache) {
    console.log("discord.js > Usando cache global.");
    return renderDiscordProfile(window.discordProfileCache);
  }

  // Si no está en cache, hacemos fetch
  try {
    console.log("discord.js > Fetching datos nuevos.");
    const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
    const json = await response.json();

    if (!json.success) throw new Error("No se pudo obtener la información del usuario.");

    const data = json.data;

    // Guardamos en memoria global
    window.discordProfileCache = data;

    renderDiscordProfile(data);

  } catch (error) {
    console.error(error);
    const statusElement = document.getElementById("discord-status-text");
    if (!statusElement) return;

    statusElement.textContent = "⚠️ Error al obtener el estado.";
    statusElement.style.color = "#ff6666";
  }
}

function renderDiscordProfile(data) {
  const avatarImg = document.getElementById("discord-avatar");
  const statusElement = document.getElementById("discord-status-text");

  if (!avatarImg || !statusElement) return;

  const user = data.discord_user;
  const status = data.discord_status;

  // Avatar
  avatarImg.src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;

  // Estado
  const statusMap = {
    online: { text: "🟢 Online", color: "#43b581" },
    idle: { text: "🌙 Idle", color: "#faa61a" },
    dnd: { text: "🔴 No molestar", color: "#f04747" },
    offline: { text: "⚫ Offline", color: "#747f8d" }
  };

  const current = statusMap[status] || statusMap.offline;
  statusElement.textContent = current.text;
  statusElement.style.color = current.color;
}
