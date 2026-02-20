/*
  settings.js
  -----------
  - Es el que controla el UI y guardar las configuraciones en el localstorage
*/

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