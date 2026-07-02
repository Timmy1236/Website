import { showToast } from "../components/toast";
import { getSettings } from "../core/settings-logic";

let playing = false;
let lastSong: string;

const songsArray: string[] = ["./assets/sounds/music/Store_Track_1.ogg", "./assets/sounds/music/Simpsons_Hotline.ogg"]
const volume = 0.25

export function initializeAutoplay() {
  const { backgroundMusic } = getSettings();
  if (!backgroundMusic) return;

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
      let songName = songSrc.split('/').pop()?.slice(0, -4).replace(/_/g, " ")
      if (!songName) songName = "null";

      showToast("info", false, "toast.player", true, songName, false)
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