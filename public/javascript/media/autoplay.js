/*
* autoplay.js
* -----------
* Gestiona la lógica de la música de la pagina, en caso que la pagina se encuentre no enfocada, segundo plano, detendrá la música.
*/

var volume = 0.25;
const musicEnabled = localStorage.getItem("backgroundMusic") === "true";

document.addEventListener("DOMContentLoaded", function () {
  if (!musicEnabled) return;

  const audio = new Audio(`./assets/sounds/music/Grace-FM.mp3`);

  document.body.addEventListener('click', function () {
    audio.volume = volume;
    audio.play();
  });

  /**
   * Maneja el estado del audio según si la ventana de la pagina web esta siendo enfocada o no.
   */
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