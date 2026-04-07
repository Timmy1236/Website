/*
 * mouse-click.js
 * --------------
 * Reproduce diferentes tipos de sonidos dependiendo de que objeto Estes clickeando por su ID.
*/

const hoverSound = new Audio('/assets/sounds/sfx/mouse/button-hover.mp3');

const canPlaySounds = (localStorage.getItem("mouseClicks") === "true") ? true : false;
let clickSoundCooldown = true;

const createAudio = (path) => new Audio(`./assets/sounds/sfx/mouse/${path}.mp3`);

const SFX = {
  click: createAudio("mouse-down"),
  clickUp: createAudio("mouse-up"),
  cat: createAudio("meow"),
  slugcat: createAudio("meow")
};

const soundConfig = {
  "cat": { audio: SFX.cat, rate: [0.8, 1.5], volume: 0.3, cooldown: 1000 },
  "slugcat": { audio: SFX.slugcat, rate: [0.95, 1.15], volume: 0.75, cooldown: 0 }
};


const audioCtx = new AudioContext();

// Carga un sonido y devuelve una promesa con el buffer listo
function loadSound(path) {
  return fetch(path).then(r => r.arrayBuffer()).then(data => audioCtx.decodeAudioData(data));
}

// Reproduce un buffer ya cargado
function playBuffer(buffer, volume = 1, rate = 1) {
  if (!buffer) return;
  const source = audioCtx.createBufferSource();
  const gainNode = audioCtx.createGain(); // gainNode controla el volumen

  source.buffer = buffer;
  source.playbackRate.value = rate;
  source.connect(gainNode);
  gainNode.gain.value = volume;
  gainNode.connect(audioCtx.destination);
  source.start(0);
}

// Evento de click
if (canPlaySounds) {

  document.body.addEventListener("mousedown", (event) => {
    SFX.click.volume = 0.65;
    SFX.click.play();
    if (!clickSoundCooldown) return;

    const cfg = soundConfig[event.target.id];
    if (cfg) {
      playConfiguredSound(cfg);
      setCooldown(cfg.cooldown);
    }
  });

  document.body.addEventListener("mouseup", () => {
    SFX.clickUp.volume = 0.65;
    SFX.clickUp.play();
  });

  let hoverBuffer = null;
  loadSound('/assets/sounds/sfx/mouse/button-hover.mp3').then(buffer => { hoverBuffer = buffer; });

  let clickBuffer = null;
  loadSound('/assets/sounds/sfx/mouse/button-click.mp3').then(buffer => { clickBuffer = buffer; });


  let releaseBuffer = null;
  loadSound('/assets/sounds/sfx/mouse/button-release.mp3').then(buffer => { releaseBuffer = buffer; });

  // Luego en el evento:
  document.addEventListener('mouseover', (event) => {
    const button = event.target.closest('button');
    if (!button || button.contains(event.relatedTarget)) return;
    playBuffer(hoverBuffer, 0.5);
  });

  // Luego en el evento:
  document.addEventListener('mousedown', (event) => {
    const button = event.target.closest('button');
    if (!button || button.contains(event.relatedTarget)) return;
    playBuffer(clickBuffer, 0.5);
  });

  // Luego en el evento:
  document.addEventListener('mouseup', (event) => {
    const button = event.target.closest('button');
    if (!button || button.contains(event.relatedTarget)) return;
    playBuffer(releaseBuffer, 0.5);
  });
}

function playConfiguredSound({ audio, rate, volume }) {
  audio.preservesPitch = false;
  audio.playbackRate = Math.random() * (rate[1] - rate[0]) + rate[0];
  audio.volume = volume;
  audio.play();
}

function setCooldown(ms = 1000) {
  clickSoundCooldown = false;
  setTimeout(() => (clickSoundCooldown = true), ms);
}