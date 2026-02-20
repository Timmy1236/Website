/*
  settings-setup.js
  -----------------
  * En caso que esta sea la primera vez que el usuario entra a la página, automáticamente guardaremos una config por defecto.
  Esta config tiene todos los efectos visuales activado por default, pero menos la música, eso lo activara el mismo usuario si quiere.
*/

const SETTINGS_MAP = {
  rainEffect: "rain-effect",
  staticEffect: "static-effect",
  vignetteEffect: "vignette-effect",

  backgroundMusic: "background-music-toggle",
  mouseClicks: "mouse-click-toggle",

  readableFont: "readable-font"
};

function initDefaultSettings() {
  if (localStorage.getItem("settingsInitialized") === "true") {
    return;
  }

  // Visual effects
  localStorage.setItem("rainEffect", "true");
  localStorage.setItem("staticEffect", "true");
  localStorage.setItem("vignetteEffect", "true");

  // Sounds
  localStorage.setItem("backgroundMusic", "false");
  localStorage.setItem("mouseClicks", "false");

  // Other settings
  localStorage.setItem("readableFont", "false");

  // Theme
  localStorage.setItem("theme", "default");

  // Flag de inicialización y forzamos un reload.
  localStorage.setItem("settingsInitialized", "true");
  window.location.reload();
}

window.initDefaultSettings = initDefaultSettings;