import { showToast } from "../components/toast";
import { getSettings } from "../core/settings-logic";
import { cLog } from "../utils/clog";

let playing = false;
let lastSong: string;

const audio = new Audio();
const songsArray: string[] = [
  "./assets/sounds/music/Lack_of_Color-That_tenderness.ogg"
];

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

  window.addEventListener("blur", _handleAudioFocus);
  window.addEventListener("focus", _handleAudioFocus);

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
  const { musicVolume } = getSettings();
  const songSrc: string = songsArray[Math.floor(Math.random() * songsArray.length)];
  if (!songSrc) return;

  audio.src = songSrc;
  audio.volume = (musicVolume / 100);

  audio.play().catch(err => cLog("ADVERTENCIA", "AutoPlay", `Error al intentar reproducir: ${err}`));

  if (lastSong !== songSrc) {
    let songName = songSrc.split("/").pop()?.slice(0, -4).replace(/_/g, " ");
    if (!songName) songName = "null";
    showToast({ type: "info", name: "toast.player", desc: songName });
  }

  lastSong = songSrc;
}

/**
 * Mutea el audio si se esta reproduciendo, o continua el audio si esta pausado.
 */
export function handleAudioPause() {
  if (!playing) {
    audio.play().catch(err => cLog("ADVERTENCIA", "AutoPlay", `Error al intentar reproducir: ${err}`));
    playing = true;
  }
  else {
    audio.pause();
    playing = false;
  }
}

/**
 * Checkea si el audio no esta muteado. En caso que no, pausara o continuara si el usuario sale o vuelve a la pagina.
 */
function _handleAudioFocus() {
  if (playing) {
    if (document.hasFocus()) {
      audio.play().catch(err => cLog("ADVERTENCIA", "AutoPlay", `Error al intentar reproducir: ${err}`));
    }
    else {
      audio.pause();
    }
  }
}
