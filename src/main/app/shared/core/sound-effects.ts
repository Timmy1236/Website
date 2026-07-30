import { getSettings } from "../core/settings-logic";
import { cLog } from "./clog";

const audioCtx = new AudioContext();

interface SoundConfig {
  buffer: AudioBuffer
  volume: number
  rate: [number, number]
}

const sounds = {} as Record<string, SoundConfig>;

export function initializeSoundsEffects() {
  const { soundsEffects } = getSettings();
  if (!soundsEffects) return;

  document.addEventListener("click", async () => {
    cLog("INFO", "Sound Effects", "Click detectado, activando: 'AudioContext'.");

    await audioCtx.resume();
    await _loadSounds();

    _audioLogic();
  }, { once: true });
}

async function _loadBuffer(path: string): Promise<AudioBuffer> {
  const response = await fetch(path);
  const arrayBuffer = await response.arrayBuffer();

  return await audioCtx.decodeAudioData(arrayBuffer);
}

async function _registerSound(id: string, path: string, volume = 1, rate: [number, number] = [1, 1]) {
  sounds[id] = {
    buffer: await _loadBuffer(path),
    volume,
    rate
  };
}

async function _loadSounds() {
  await Promise.all([
    // Genéricos
    _registerSound("click", "/assets/sounds/sfx/mouse/mouse-down.mp3", 0.65),
    _registerSound("clickUp", "/assets/sounds/sfx/mouse/mouse-up.mp3", 0.65),
    _registerSound("buttonHover", "/assets/sounds/sfx/button/button-hover.mp3", 0.5),
    _registerSound("buttonClick", "/assets/sounds/sfx/button/button-click.mp3", 0.5),
    _registerSound("buttonRelease", "/assets/sounds/sfx/button/button-release.mp3", 0.5),
    _registerSound("key", "/assets/sounds/sfx/key.mp3", 0.5, [0.9, 1.4]),

    // Personalizados
    _registerSound("banner", "/assets/sounds/sfx/others/banner.mp3", 0.2, [0.7, 1.3]),
    _registerSound("hi", "/assets/sounds/sfx/others/hi.mp3"),
    _registerSound("squeak", "/assets/sounds/sfx/others/squeak.mp3")
  ]);
}

function _playSound(id: string) {
  const sound = sounds[id];

  if (!sound || audioCtx.state === "suspended") {
    return;
  }

  const source = audioCtx.createBufferSource();
  const gain = audioCtx.createGain();

  source.buffer = sound.buffer;
  source.playbackRate.value = Math.random() * (sound.rate[1] - sound.rate[0]) + sound.rate[0];

  gain.gain.value = sound.volume; // gain.gain

  source.connect(gain);
  gain.connect(audioCtx.destination);

  source.start();
}

function _audioLogic() {
  // === Mouse
  document.addEventListener("mouseover", (event: MouseEvent) => {
    if (event.target instanceof HTMLElement) {
      const soundKey = event.target.dataset.soundHover;
      if (soundKey) {
        _playSound(soundKey);
      }
    }
  });

  document.addEventListener("mousedown", (event: MouseEvent) => {
    _playSound("click");

    if (event.target instanceof HTMLElement) {
      const soundKey = event.target.dataset.soundClick;
      if (soundKey) {
        _playSound(soundKey);
      }
    }
  });

  document.addEventListener("mouseup", (event: MouseEvent) => {
    _playSound("clickUp");

    if (event.target instanceof HTMLElement) {
      const soundKey = event.target.dataset.soundRelease;
      if (soundKey) {
        _playSound(soundKey);
      }
    }
  });
  // === Mouse

  // Teclado
  document.addEventListener("keydown", () => {
    _playSound("key");
  });
}