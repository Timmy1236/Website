/*
  autoplay.js
  -----------
  - Comienza la reproducción de la música del fondo cuando el usuario interactúa con la pagina, si el usuario cambia de tab o no esta enfocado en la pagina, detendrá la música.
*/

var volume = 0.5;
const canIPlay = (localStorage.getItem("backgroundMusic") === "true") ? true : false;

document.addEventListener("DOMContentLoaded", function () {
  const audio = new Audio(`./assets/sounds/music/night.ogg`);

  document.body.addEventListener('click', function () {
    if (!canIPlay) return;
    audio.volume = volume;
    audio.play();
  });

  // Manejar el estado del audio según el focus de la ventana
  function handleAudioState() {
    if (document.hasFocus() && !audio.muted && canIPlay) {
      if (audio.paused) {
        audio.play();
        audio.volume = volume;
      }
    } else {
      if (!audio.paused) {
        audio.pause();
      }
    }
  }

  window.addEventListener('blur', handleAudioState);
  window.addEventListener('focus', handleAudioState);
});