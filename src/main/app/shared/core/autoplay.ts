import { showToast } from "../components/toast";
import { getSettings } from "../core/settings-logic";
import { cLog } from "../utils/clog";

let playing = false;
let lastSong: string;

const songsArray: string[] = [
  "./assets/sounds/music/Lack_of_Color-That_tenderness.ogg"
];
const volume = 0.25;

const audio = new Audio();

/**
 * Inicializa los listeners globales para el Autoplay.
 * Escucha la primera interacción del usuario para arrancar la música si está activada.
 */
export function initAutoplay() {
  const { backgroundMusic } = getSettings();
  if (!backgroundMusic) return;

  audio.addEventListener("ended", () => {
    _playSong();
  });

  window.addEventListener("blur", _handleAudioState);
  window.addEventListener("focus", _handleAudioState);

  document.body.addEventListener("click", () => {
    if (!playing) {
      cLog("INFO", "AutoPlay", "Click detectado, comenzando reproducción de música.");
      playing = true;
      _playSong();
    }
  }, { once: true });
}

/**
 * Selecciona y reproduce una canción aleatoria.
 */
function _playSong(): void {
  const songSrc: string = songsArray[Math.floor(Math.random() * songsArray.length)];
  if (!songSrc) return;

  audio.src = songSrc;
  audio.volume = volume;

  audio.play().catch(err => cLog("ADVERTENCIA", "AutoPlay", `Error al intentar reproducir: ${err}`));

  if (lastSong !== songSrc) {
    let songName = songSrc.split("/").pop()?.slice(0, -4).replace(/_/g, " ");
    if (!songName) songName = "null";

    showToast("info", false, "toast.player", true, songName, false);
  }

  lastSong = songSrc;
}

/**
 * Pausa o reanuda la música dependiendo de si el usuario está mirando la página.
 */
function _handleAudioState() {
  if (document.hasFocus() && !audio.muted && playing) {
    if (audio.paused) {
      audio.play().catch(err => cLog("ADVERTENCIA", "AutoPlay", `Error al intentar reproducir: ${err}`));
      audio.volume = volume;
    }
  }
  else {
    if (!audio.paused) {
      audio.pause();
    }
  }
}
