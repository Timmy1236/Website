/*
  mouse-click.js
  --------------
  - Reproduce diferentes tipos de sonidos dependiendo de que objeto Estes clickeando por su ID.
*/
const canPlaySounds = (localStorage.getItem("mouseClicks") === "true") ? true : false;
let clickSoundCooldown = true;

const createAudio = (path) => new Audio(`./assets/sounds/sfx/${path}.mp3`);

const SFX = {
  click: createAudio("mouse-down"),
  clickUp: createAudio("mouse-up"),
  cat: createAudio("meow"),
  pursuer: createAudio("fresh-meat"),
  nomnom: createAudio("nom-nom")
};

const soundConfig = {
  "cat": { audio: SFX.cat, rate: [0.8, 1.5], volume: 0.3, cooldown: 1000 },
  "pursuer": { audio: SFX.pursuer, rate: [0.75, 1.35], volume: 0.25, cooldown: 1000 },
  "nom-nom": { audio: SFX.nomnom, rate: [0.95, 1.15], volume: 0.75, cooldown: 800 }
};

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

export function buttonSounds(type) {
  if (canPlaySounds) {
    switch (type) {
      case "hover": {
        var audioHover = new Audio("./assets/sounds/sfx/button-hover.wav");
        audioHover.play();
        break;
      }
      case "click": {
        var audioClick = new Audio("./assets/sounds/sfx/button-click.wav");
        audioClick.volume = 0.5;
        audioClick.play();
        break;
      }
      case "released": {
        var audioRelease = new Audio("./assets/sounds/sfx/button-release.wav");
        audioRelease.volume = 0.5;
        audioRelease.play();
        break;
      }
      default: {
        console.error("mouse-click.js> buttonSounds type incorrecto. 'hover' 'click' 'released'")
        break;
      }
    }
  }
}