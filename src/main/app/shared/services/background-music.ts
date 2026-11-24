import { showToast } from "../components/toast";
import { getSettings } from "./settings";
import { cLog } from "../utils/clog";

let enabled = false;
let manuallyPaused = false;
let lastSong: string;

const audio = new Audio();
const songsArray: string[] = [
  "./assets/sounds/music/Lack_of_Color-That_tenderness.ogg"
];

/** Conecta todos los events listener de audio, pero no reproduce nada, el usuario debe de clickear. */
// NOTE: Esto es importante ya los navegadores no permite la reproducían automática de audios al entrar un sitio web sin interactuar primero.
export function enableAutoplay() {
  if (enabled) return;
  enabled = true;
  manuallyPaused = false;

  document.body.addEventListener("click", _startPlayback, { once: true });

  window.addEventListener("blur", _handleAudioFocus);
  window.addEventListener("focus", _handleAudioFocus);

  audio.addEventListener("ended", _onSongEnded);
}

/** Elimina todos los events listener de audio y detiene la música que se reproduce actualmente. */
export function disableAutoplay() {
  if (!enabled) return;
  enabled = false;

  document.body.removeEventListener("click", _startPlayback);

  window.removeEventListener("blur", _handleAudioFocus);
  window.removeEventListener("focus", _handleAudioFocus);

  audio.removeEventListener("ended", _onSongEnded);
  audio.pause();
  audio.removeAttribute("src");
  audio.load();
}

function _startPlayback() {
  if (!enabled || manuallyPaused) return;
  cLog("INFO", "AutoPlay", "Click detectado, comenzando reproducción de música.");

  if (audio.src) _resumePlayback();
  else _playSong();
}

function _onSongEnded() {
  if (enabled && !manuallyPaused) _playSong();
}

/** Selecciona una música random del array y lo reproduce */
function _playSong(): void {
  const songSrc = songsArray[Math.floor(Math.random() * songsArray.length)];
  if (!songSrc) return;

  audio.src = songSrc;
  _resumePlayback();

  if (lastSong !== songSrc) {
    let songName = songSrc.split("/").pop()?.slice(0, -4).replace(/_/g, " ");
    if (!songName) songName = "null";
    showToast({ type: "info", name: "toast.player", desc: songName });
  }

  lastSong = songSrc;
}

function _resumePlayback() {
  audio.volume = getSettings().musicVolume / 100;
  audio.play().catch(err => cLog("ADVERTENCIA", "AutoPlay", `Error al intentar reproducir: ${err}`));
}

/** Pausa o continua la música. */
export function handleAudioPause() {
  if (!enabled) return;
  if (!audio.src) return cLog("ADVERTENCIA", "AutoPlay", "Dude, estas intentando mutearlo cuando ni una canción empezó???");

  if (audio.paused) {
    manuallyPaused = false;
    _resumePlayback();
  }
  else {
    audio.pause();
    manuallyPaused = true;
  }
}

/** Si el usuario ignora la pagina, se detendrá la música, continuara si el usuario vuelve. */
function _handleAudioFocus() {
  if (!enabled || !audio.src || manuallyPaused) return;
  if (document.hasFocus()) _resumePlayback();
  else audio.pause();
}
