import { cLog } from "../utils/clog";

interface SoundConfig {
  buffer: AudioBuffer
  volume: number
  rate: [number, number]
}

interface SoundDefinition {
  path: string
  volume: number
  rate: [number, number]
}

const SOUND_DEFINITIONS: Record<string, SoundDefinition> = {
  // Teclado y mouse.
  click: { path: "/assets/sounds/sfx/mouse/mouse-down.mp3", volume: 0.65, rate: [0.9, 1.3] },
  clickUp: { path: "/assets/sounds/sfx/mouse/mouse-up.mp3", volume: 0.65, rate: [0.9, 1.3] },
  key: { path: "/assets/sounds/sfx/key.mp3", volume: 0.5, rate: [0.9, 1.3] },

  // Sidebar.
  buttonHover: { path: "/assets/sounds/sfx/button/button-hover.mp3", volume: 0.5, rate: [1, 1] },
  buttonClick: { path: "/assets/sounds/sfx/button/button-click.mp3", volume: 0.5, rate: [1, 1] },
  buttonRelease: { path: "/assets/sounds/sfx/button/button-release.mp3", volume: 0.5, rate: [1, 1] },

  // Sonidos para features especificas.
  banner: { path: "/assets/sounds/sfx/others/banner.mp3", volume: 0.2, rate: [0.7, 1.3] },
  squeak: { path: "/assets/sounds/sfx/others/squeak.mp3", volume: 1, rate: [1, 1] },
  hi: { path: "/assets/sounds/sfx/others/hi.mp3", volume: 1, rate: [1, 1] }
};

let audioContext: AudioContext | null = null;
let sounds: Record<string, SoundConfig> = {};
let enabled = false;
let eventsConnected = false;
let keyDown = false;

/** Crea un evento esperando el click del usuario para comenzar los efectos de sonidos. */
// NOTE: Esto es importante ya los navegadores no permite la reproducían automática de audios al entrar un sitio web sin interactuar primero.
export function enableSoundEffects(): void {
  if (enabled) return;

  enabled = true;
  document.addEventListener("click", _activateSoundEffects, { once: true });
}

/** Desconecta el evento del click y limpia el audioContext. */
export function disableSoundEffects(): void {
  if (!enabled && !audioContext) return;

  enabled = false;
  document.removeEventListener("click", _activateSoundEffects);
  _disconnectAudioEvents();
  sounds = {};

  const context = audioContext;
  audioContext = null;

  if (context) {
    void context.close().catch((error) => {
      cLog("ADVERTENCIA", "Sound Effects", "No se pudo cerrar AudioContext.", error);
    });
  }
}

/** Loads sounds after a user gesture, then connects playback handlers if still enabled. */
async function _activateSoundEffects(): Promise<void> {
  if (!enabled) return;

  let context: AudioContext | null = null;
  try {
    context = audioContext ??= new AudioContext();
    cLog("INFO", "Sound Effects", "Click detectado, activando: 'AudioContext'");
    await context.resume();

    cLog("INFO", "Sound Effects", "Cargando los archivos de audio.");
    const loadedSounds = await _loadSounds(context);
    if (!enabled || audioContext !== context) return;

    sounds = loadedSounds;
    _connectAudioEvents();
  }
  catch (error) {
    if (!enabled || (context && audioContext !== context)) return;

    cLog("ERROR", "Sound Effects", "No se pudieron cargar los archivos de audio.", error);
    document.addEventListener("click", _activateSoundEffects, { once: true });
  }
}

/** Carga y carga(k??) los buffers de los audios */
async function _loadSounds(context: AudioContext): Promise<Record<string, SoundConfig>> {
  const entries = await Promise.all(
    Object.entries(SOUND_DEFINITIONS).map(async ([id, definition]) => {
      cLog("DEBUG", "Sound Effects", `Cargando: ${definition.path} (Vol: ${definition.volume} | Rate: ${definition.rate})`);
      const buffer = await _loadBuffer(definition.path, context);
      return [id, { buffer, volume: definition.volume, rate: definition.rate }] as const;
    })
  );

  return Object.fromEntries(entries);
}

async function _loadBuffer(path: string, context: AudioContext): Promise<AudioBuffer> {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`No se pudo cargar ${path}: HTTP ${response.status}`);

  const arrayBuffer = await response.arrayBuffer();
  return context.decodeAudioData(arrayBuffer);
}

function _connectAudioEvents(): void {
  if (eventsConnected) return;

  eventsConnected = true;

  document.addEventListener("mouseover", _onMouseOver);
  document.addEventListener("mousedown", _onMouseDown);
  document.addEventListener("mouseup", _onMouseUp);
  document.addEventListener("keydown", _onKeyDown);
  document.addEventListener("keyup", _onKeyUp);
}

function _disconnectAudioEvents(): void {
  if (!eventsConnected) {
    keyDown = false;
    return;
  }

  eventsConnected = false;
  keyDown = false;

  document.removeEventListener("mouseover", _onMouseOver);
  document.removeEventListener("mousedown", _onMouseDown);
  document.removeEventListener("mouseup", _onMouseUp);
  document.removeEventListener("keydown", _onKeyDown);
  document.removeEventListener("keyup", _onKeyUp);
}

/**
 * sonido
 * @link https://www.youtube.com/watch?v=iGdebgcWRgQ
 */
function _playSound(id: string): void {
  const sound = sounds[id];
  const context = audioContext;
  if (!sound || !context || context.state !== "running") return;

  const source = context.createBufferSource();
  const gain = context.createGain();

  source.buffer = sound.buffer;
  source.playbackRate.value = Math.random() * (sound.rate[1] - sound.rate[0]) + sound.rate[0];
  gain.gain.value = sound.volume; // gain.gain, jej

  source.connect(gain);
  gain.connect(context.destination);
  source.start();
}

function _onMouseOver(event: MouseEvent): void {
  if (!(event.target instanceof HTMLElement)) return;
  const soundKey = event.target.dataset.soundHover;
  if (soundKey) _playSound(soundKey);
}

function _onMouseDown(event: MouseEvent): void {
  _playSound("click");

  if (!(event.target instanceof HTMLElement)) return;
  const soundKey = event.target.dataset.soundClick;
  if (soundKey) _playSound(soundKey);
}

function _onMouseUp(event: MouseEvent): void {
  _playSound("clickUp");

  if (!(event.target instanceof HTMLElement)) return;
  const soundKey = event.target.dataset.soundRelease;
  if (soundKey) _playSound(soundKey);
}

function _onKeyDown(): void {
  if (keyDown) return;
  keyDown = true;
  _playSound("key");
}

function _onKeyUp(): void {
  keyDown = false;
}
