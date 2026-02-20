document.addEventListener("DOMContentLoaded", function () {
  const backgroundMusicEnabled = localStorage.getItem("backgroundMusic") === "true";
  const visualEffectsEnabled = localStorage.getItem("visualEffects") === "true";

  const ignoreLandingPageEnabled = localStorage.getItem("ignoreLandingPage") === "true";
  const savedTheme = localStorage.getItem("theme") || "default";

  document.getElementById("background-music-toggle").checked = backgroundMusicEnabled;
  document.getElementById("visual-effects-toggle").checked = visualEffectsEnabled;

  document.getElementById("ignore-landingpage-toggle").checked = ignoreLandingPageEnabled;
  document.getElementById("theme-select").value = savedTheme;
});

function confirmSettings() {
  const backgroundMusicEnabled = document.getElementById("background-music-toggle").checked;
  const visualEffectsEnabled = document.getElementById("visual-effects-toggle").checked;

  const ignoreLandingPageEnabled = document.getElementById("ignore-landingpage-toggle").checked;
  const selectedTheme = document.getElementById("theme-select").value;

  localStorage.setItem("backgroundMusic", backgroundMusicEnabled);
  localStorage.setItem("visualEffects", visualEffectsEnabled);

  localStorage.setItem("ignoreLandingPage", ignoreLandingPageEnabled);
  localStorage.setItem("theme", selectedTheme);

  location.reload();
}