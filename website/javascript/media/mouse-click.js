/*
  mouse-click.js
  --------------
  - Reproduce diferentes tipos de sonidos dependiendo de que objeto Estes clickeando por su ID.
*/

let canClick = true;

const createAudio = (path) => new Audio(`./assets/sounds/sfx/${path}.mp3`);

const SFX = {
  click: createAudio("mouse-down"),
  clickUp: createAudio("mouse-up"),
  cat: createAudio("meow"),
  pursuer: createAudio("fresh-meat"),
  nomnom: createAudio("nom-nom"),
  button: createAudio("button"),
};

const soundConfig = {
  "cat": { audio: SFX.cat, rate: [0.8, 1.5], volume: 0.3, cooldown: 1000 },
  "pursuer": { audio: SFX.pursuer, rate: [0.75, 1.35], volume: 0.25, cooldown: 1000 },
  "nom-nom": { audio: SFX.nomnom, rate: [0.95, 1.15], volume: 0.75, cooldown: 800 },
  "button": { audio: SFX.button, rate: [0.95, 1.15], volume: 0.65, cooldown: 325 },
};

// Evento de click
if (localStorage.getItem("mouseClicks") === "true") {
  document.body.addEventListener("mousedown", (event) => {
    if (!canClick) return;

    SFX.click.play();

    const cfg = soundConfig[event.target.id];
    if (cfg) {
      playConfiguredSound(cfg);
      setCooldown(cfg.cooldown);
    }
  });

  document.body.addEventListener("mouseup", () => {
    SFX.clickUp.play();
  });
}

function playConfiguredSound({ audio, rate, volume }) {
  audio.preservesPitch = false;
  audio.playbackRate = Math.random() * (rate[1] - rate[0]) + rate[0];
  audio.volume = volume;
  audio.play();
}

function setCooldown(ms = 1000) {
  canClick = false;
  setTimeout(() => (canClick = true), ms);
}
