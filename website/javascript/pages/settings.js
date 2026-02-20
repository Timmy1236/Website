/*
  settings.js
  -----------
  - Es el que controla el UI y guardar las configuraciones en el localstorage
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

  /* 
    En caso que esta sea la primera vez que el usuario entra a la página, automáticamente guardaremos una config por defecto.
    Esta config tiene todos los efectos visuales activado por default, pero menos la música, eso lo activara el mismo usuario si quiere.
  */

  // Visual effects
  localStorage.setItem("rainEffect", "true");
  localStorage.setItem("staticEffect", "true");
  localStorage.setItem("vignetteEffect", "true");

  // Sounds
  localStorage.setItem("backgroundMusic", "false");
  localStorage.setItem("mouseClicks", "true");

  // Other settings
  localStorage.setItem("readableFont", "false");

  // Theme
  localStorage.setItem("theme", "default");

  // Flag de inicialización y forzamos un reload.
  localStorage.setItem("settingsInitialized", "true");
  window.location.reload();
}


function loadSettings() {
  console.log("settings.js> Ejecutando loadSettings.") // Si me ves en otras paginas, lo estas haciendo mal!! mongolo. -timmy, para timmy.
  const rain = document.getElementById("rain-effect");
  if (!rain) return;

  for (const [key, id] of Object.entries(SETTINGS_MAP)) {
    const el = document.getElementById(id);
    if (!el) continue;

    el.checked = localStorage.getItem(key) === "true";
  }

  document.getElementById("theme-select").value = localStorage.getItem("theme") || "default";
}

function confirmSettings() {
  for (const [key, id] of Object.entries(SETTINGS_MAP)) {
    const el = document.getElementById(id);
    if (!el) continue;

    localStorage.setItem(key, el.checked);
  }

  localStorage.setItem("theme", document.getElementById("theme-select").value);

  location.reload();
}


window.loadSettings = loadSettings;