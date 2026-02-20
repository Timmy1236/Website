/*
  Discord Status Script
  Inserta dinámicamente el avatar y estado de conexión de Discord en la sección "Sobre mí".
*/

async function loadDiscordProfile(userId) {
  try {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
    const data = await response.json();

    if (!data.success) throw new Error("No se pudo obtener la información del usuario.");

    const user = data.data.discord_user;
    const status = data.data.discord_status;

    // === Avatar dinámico ===
    const avatarContainer = document.getElementById("discord-avatar-container");
    avatarContainer.innerHTML = ""; // Limpia si ya había uno
    const avatarImg = document.createElement("img");
    avatarImg.src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`;
    avatarImg.alt = "Avatar de Discord";
    avatarImg.style.borderRadius = "50%";
    avatarImg.style.width = "120px";
    avatarImg.style.height = "120px";
    avatarContainer.appendChild(avatarImg);

    // === Estado de conexión ===
    const statusElement = document.getElementById("discord-status-text");

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
    console.error("Error cargando el perfil de Discord:", error);
    const statusElement = document.getElementById("discord-status-text");
    statusElement.textContent = "⚠️ Error al obtener el estado.";
    statusElement.style.color = "#ff6666";
  }
}

// Cargar al iniciar la página
window.addEventListener("DOMContentLoaded", () => {
  loadDiscordProfile("375889010419171328");
});