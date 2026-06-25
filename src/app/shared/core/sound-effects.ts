/*
 * Sound Effects
 * -------------
 * Maneja la lógica de los efectos de sonidos.
*/

import { getMapSetting } from "../core/settings-logic";

interface SoundConfig {
  audio: HTMLAudioElement;
  rate: number[];
  volume: number;
}
const audioCtx = new AudioContext();
const canPlaySounds: boolean = getMapSetting("soundsEffects") === "true";

/**
 * Activa la lógica cuando el usuario interactúa con la pagina y este activado los efectos de sonidos.
 */
export function initializeSoundsEffects() {
  document.addEventListener("click", function () {
    if (canPlaySounds) {
      console.log("%csound-effects" + "%c Activando AudioContext.", "color: #87F3A9; background: #282A35;", "color: white");
      audioCtx.resume();
      _audioLogic();
    } else {
      console.log("%csound-effects" + "%c Los sonidos están desactivados por el usuario. :(", "color: #87F3A9; background: #282A35;", "color: white");
    }

  }, { once: true });
}

function _audioLogic() {
  const createAudio = (path: string) => new Audio(`./assets/sounds/sfx/mouse/${path}.mp3`);

  const SFX = {
    click: createAudio("mouse-down"),
    clickUp: createAudio("mouse-up"),
    slugcat: createAudio("meow")
  };

  const soundConfig: Record<string, SoundConfig> = {
    "slugcat": { audio: SFX.slugcat, rate: [0.9, 1.2], volume: 0.75 }
  };

  /**
   * Carga un sonido y devuelve una promesa con el buffer listo
   */
  function _loadSound(path: string) {
    return fetch(path).then(r => r.arrayBuffer()).then(data => audioCtx.decodeAudioData(data));
  }

  /**
   * Reproduce un AudioBuffer
   */
  function _playBuffer(buffer: AudioBuffer, volume = 1, rate = 1) {
    if (!buffer) return; // si no hay buffer, no reproducir buffer, JAJAJ
    if (audioCtx.state === "suspended") return; // Si el usuario no interactuó con la pagina, ignoraremos el buffer, esto evitara el problema que se acumule varios efectos de sonidos.

    const source = audioCtx.createBufferSource();
    const gainNode = audioCtx.createGain();

    source.buffer = buffer;
    source.playbackRate.value = rate;
    source.connect(gainNode);

    gainNode.gain.value = volume;
    gainNode.connect(audioCtx.destination);

    source.start(0);
  }

  /**
   * Reproduce un audio junto con su configuración de rate y volumen
   */
  function _playConfiguredSound({ audio, rate, volume }: SoundConfig) {
    if (audio.paused) {
      audio.preservesPitch = false;
      audio.playbackRate = Math.random() * (rate[1] - rate[0]) + rate[0];
      audio.volume = volume;
      audio.play();
    }
  }

  // ==== Buffers de los botones====
  let hoverBuffer: AudioBuffer;
  _loadSound('/assets/sounds/sfx/mouse/button-hover.mp3').then(buffer => { hoverBuffer = buffer; });
  let clickBuffer: AudioBuffer;
  _loadSound('/assets/sounds/sfx/mouse/button-click.mp3').then(buffer => { clickBuffer = buffer; });
  let releaseBuffer: AudioBuffer;
  _loadSound('/assets/sounds/sfx/mouse/button-release.mp3').then(buffer => { releaseBuffer = buffer; });

  // ==== Mouse ====
  document.addEventListener('mouseover', (event: MouseEvent) => {
    if (event.target instanceof HTMLElement) {
      const button = event.target.closest('button');
      if (button) {
        const relatedTarget = event.relatedTarget as HTMLElement | null;
        if (relatedTarget && button.contains(relatedTarget)) return;
        _playBuffer(hoverBuffer, 0.65);
      }
    }
  });

  document.addEventListener('mousedown', (event: MouseEvent) => {
    SFX.click.volume = 0.65;
    SFX.click.play();

    if (event.target instanceof HTMLElement) {
      const button = event.target.closest('button');
      if (button) {
        const relatedTarget = event.relatedTarget as HTMLElement | null;
        if (relatedTarget && button.contains(relatedTarget)) return;
        _playBuffer(clickBuffer, 0.4);
      }

      const cfg = soundConfig[event.target.id];
      if (cfg) {
        _playConfiguredSound(cfg);
      }
    }
  });

  document.addEventListener('mouseup', (event: MouseEvent) => {
    SFX.clickUp.volume = 0.65;
    SFX.clickUp.play();

    if (event.target instanceof HTMLElement) {
      const button = event.target.closest('button');
      if (button) {
        const relatedTarget = event.relatedTarget as HTMLElement | null;
        if (relatedTarget && button.contains(relatedTarget)) return;
        _playBuffer(releaseBuffer, 0.4);
      }
    }
  });

  // ==== Otros buffers =====
  let keyBuffer: AudioBuffer;
  _loadSound('/assets/sounds/sfx/key.mp3').then(buffer => { keyBuffer = buffer; });

  // ==== Keyboard ====
  document.addEventListener('keydown', () => {
    _playBuffer(keyBuffer, 0.5, 0.9 + Math.random() * 0.5);
  });
}