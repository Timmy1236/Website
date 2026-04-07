/*
* autoplay.ts
* -----------
* Gestiona la lógica de la música de la pagina, en caso que la pagina se encuentre no enfocada, segundo plano, detendrá la música.
*/

let volume: number = 0.25;
let playing: boolean = false;
const musicEnabled: boolean = localStorage.getItem("backgroundMusic") === "true";

document.addEventListener("DOMContentLoaded", function () {
  if (!musicEnabled) return;

  const audio = new Audio(`./assets/sounds/music/Grace-FM.mp3`);

  document.body.addEventListener('click', function () {
    playing = true;

    audio.volume = volume;
    audio.play();
  });

  function handleAudioState() {
    if (document.hasFocus() && !audio.muted && playing) {
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