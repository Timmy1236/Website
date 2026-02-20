/*
  discord.js
  ----------
  - Obtiene datos de mi status en discord y del perfil para ingresarlos en mi about me.
*/

async function loadDiscordProfile(userId) {
  console.log("discord.js> Ejecutando loadDiscordProfile.") // Si me ves en otras paginas, lo estas haciendo mal!! mongolo. -timmy, para timmy.
  try {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
    const data = await response.json();

    if (!data.success) throw new Error("No se pudo obtener la información del usuario.");

    const avatarContainer = document.getElementById("discord-avatar-container");
    const statusElement = document.getElementById("discord-status-text");

    if (!avatarContainer || !statusElement) return;

    const user = data.data.discord_user;
    const status = data.data.discord_status;

    // Avatar
    avatarContainer.innerHTML = "";
    const avatarImg = document.createElement("img");
    avatarImg.src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
    avatarImg.alt = "Avatar de Discord";
    avatarImg.style.borderRadius = "50%";
    avatarImg.style.width = "120px";
    avatarImg.style.height = "120px";
    avatarContainer.appendChild(avatarImg);

    // Estado
    const statusMap = {
      online: { text: "🟢 Online", color: "#43b581" },
      idle: { text: "🌙 Idle", color: "#faa61a" },
      dnd: { text: "🔴 Do Not Disturb", color: "#f04747" },
      offline: { text: "⚫ Offline", color: "#747f8d" }
    };

    const current = statusMap[status] || statusMap.offline;
    statusElement.textContent = current.text;
    statusElement.style.color = current.color;

  } catch (error) {
    const statusElement = document.getElementById("discord-status-text");
    if (!statusElement) return;

    console.error(error);
    statusElement.textContent = "⚠️ Error al obtener el estado.";
    statusElement.style.color = "#ff6666";
  }
}
