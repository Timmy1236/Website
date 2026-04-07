/*
 * mouse-click.ts
 * --------------
 * Reproduce diferentes tipos de sonidos dependiendo de que objeto Estes clickeando por su ID.
*/

const canPlaySounds: boolean = localStorage.getItem("mouseClicks") === "true";
let clickSoundCooldown: boolean = true;

if (canPlaySounds) {

  const createAudio = (path: string) => new Audio(`./assets/sounds/sfx/mouse/${path}.mp3`);

  const SFX = {
    click: createAudio("mouse-down"),
    clickUp: createAudio("mouse-up"),
    cat: createAudio("meow"),
    slugcat: createAudio("meow")
  };

  const soundConfig: any = {
    "cat": { audio: SFX.cat, rate: [0.8, 1.5], volume: 0.3 },
    "slugcat": { audio: SFX.slugcat, rate: [0.95, 1.15], volume: 0.75 }
  };


  const audioCtx = new AudioContext();

  // Carga un sonido y devuelve una promesa con el buffer listo
  function loadSound(path: string) {
    return fetch(path).then(r => r.arrayBuffer()).then(data => audioCtx.decodeAudioData(data));
  }

  // Reproduce un buffer ya cargado
  function playBuffer(buffer: AudioBuffer, volume = 1, rate = 1) {
    if (!buffer) return;
    const source = audioCtx.createBufferSource();
    const gainNode = audioCtx.createGain();
    source.buffer = buffer;
    source.playbackRate.value = rate;
    source.connect(gainNode);
    gainNode.gain.value = volume;
    gainNode.connect(audioCtx.destination);
    source.start(0);
  }

  // Evento de click


  document.body.addEventListener("mousedown", (event) => {
    if (event.target === null) return;
    if (event.target instanceof HTMLElement) {
      SFX.click.volume = 0.65;
      SFX.click.play();
      if (!clickSoundCooldown) return;

      const cfg = soundConfig[event.target.id];

      if (cfg) {
        playConfiguredSound(cfg);
      }
    }
  });

  document.body.addEventListener("mouseup", () => {
    SFX.clickUp.volume = 0.65;
    SFX.clickUp.play();
  });

  let hoverBuffer: AudioBuffer;
  loadSound('/assets/sounds/sfx/mouse/button-hover.mp3').then(buffer => { hoverBuffer = buffer; });

  let clickBuffer: AudioBuffer;
  loadSound('/assets/sounds/sfx/mouse/button-click.mp3').then(buffer => { clickBuffer = buffer; });

  let releaseBuffer: AudioBuffer;
  loadSound('/assets/sounds/sfx/mouse/button-release.mp3').then(buffer => { releaseBuffer = buffer; });


  document.addEventListener('mouseover', (event: MouseEvent) => {
    if (!(event.target instanceof HTMLElement)) return;

    const button = event.target.closest('button');
    if (!button || button.contains(event.relatedTarget as Node)) return;

    playBuffer(hoverBuffer, 0.5);
  });

  document.addEventListener('mousedown', (event: MouseEvent) => {
    if (!(event.target instanceof HTMLElement)) return;

    const button = event.target.closest('button');
    if (!button || button.contains(event.relatedTarget as Node)) return;

    playBuffer(clickBuffer, 0.5);
  });

  document.addEventListener('mouseup', (event: MouseEvent) => {
    if (!(event.target instanceof HTMLElement)) return;

    const button = event.target.closest('button');
    if (!button || button.contains(event.relatedTarget as Node)) return;

    playBuffer(releaseBuffer, 0.5);
  });
} else {
  console.log("rip.")
}

interface SoundConfig {
  audio: HTMLAudioElement;
  rate: Array<2>;
  volume: number;
}

function playConfiguredSound({ audio, rate, volume }: SoundConfig) {
  audio.preservesPitch = false;
  audio.playbackRate = Math.random() * (rate[1] - rate[0]) + rate[0];
  audio.volume = volume;
  audio.play();
}