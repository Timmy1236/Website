/*
* autoplay.ts
* -----------
* Gestiona la lógica de la música de la pagina, en caso que la pagina se encuentre no enfocada, segundo plano, detendrá la música.
*/
import { getMapSetting } from "../core/settings-logic";
import { showToast } from "./toast";

let playing = false;
let lastSong: string;

const musicEnabled: boolean = getMapSetting("backgroundMusic") === "true";
const songsArray: string[] = ["./assets/sounds/music/Store_Track_1.ogg", "./assets/sounds/music/Simpsons_Hotline.ogg"]
const volume = 0.25

export function initializeAutoplay() {
  if (!musicEnabled) return;
  const audio = new Audio();

  audio.addEventListener('ended', function () {
    _playSong();
  }, false);

  /**
   * Reproduce una canción aleatoria de un array con un toast mostrando que canción se reproduce, si termina el audio, hace un loop.
   */
  function _playSong(): void {
    const songSrc: string = songsArray[Math.floor(Math.random() * songsArray.length)];
    if (!songSrc) return;

    audio.src = songSrc;
    audio.volume = volume;
    audio.play();

    if (lastSong !== songSrc) {
      const songName = songSrc.split('/').pop()?.slice(0, -4).replace(/_/g, " ")
      showToast("Playing...", "info", songName ? songName : "No name?", false)
    }

    lastSong = songSrc;
  }

  document.body.addEventListener('click', function () {
    if (playing === false) {
      playing = true;
      _playSong();
    }
  }, { once: true });

  /**
   * En caso que el usuario ignore la pagina, pausaremos la música para que no reproduzca en segundo plano y sea molesto, si vuelve, reproducimos de vuelta.
   */
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
};