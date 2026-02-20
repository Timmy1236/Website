/*
  autoplay.js
  -----------
  - Comienza la reproducción de la música del fondo cuando el usuario interactúa con la pagina, si el usuario cambia de tab o no esta enfocado en la pagina, detendrá la música.
*/

volume = 0.5;
canIPlay = localStorage.getItem("backgroundMusic");

document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById('audio');

  // Reproducir audio al hacer clic en cualquier parte de la página
  document.body.addEventListener('click', function () {
    if (canIPlay !== "true") return;

    audio.muted = false;
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