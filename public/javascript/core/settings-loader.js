/*
  settings-loader.js
  ------------------
  * Encargado de leer los datos del LocalStorage y cargar o activar las funciones necesarias.
*/

let rainAnimationId = null;

// Variables de los configs
const enabledRainEffect = (localStorage.getItem("rainEffect") === "true") ? true : false;
const enabledStaticEffect = (localStorage.getItem("staticEffect") === "true") ? true : false;
const enabledVignetteEffect = (localStorage.getItem("vignetteEffect") === "true") ? true : false;
const enabledReadableFont = (localStorage.getItem("readableFont") === "true") ? true : false;

// === Carga el efecto de lluvia ===
function loadRainEffect() {
  const rainCSS = document.createElement('link');
  rainCSS.rel = 'stylesheet';
  rainCSS.href = './css/effects/rain.css';
  rainCSS.id = 'rain-css';
  document.head.appendChild(rainCSS);

  rainCSS.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    document.body.prepend(canvas);
    setTimeout(() => initRainEffect(canvas), 100);
  };
}

// === Carga el efecto de ruido/estática ===
function loadNoiseEffect() {
  const noiseCSS = document.createElement('link');
  noiseCSS.rel = 'stylesheet';
  noiseCSS.href = './css/effects/noise.css';
  noiseCSS.id = 'noise-css';
  document.head.appendChild(noiseCSS);

  noiseCSS.onload = function () {
    const bgDiv = document.createElement('div');
    bgDiv.className = 'bg';
    bgDiv.id = 'background';
    document.body.prepend(bgDiv);
  };
}

// === Inicializa la animación de lluvia ===
function initRainEffect(canvas) {
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    w = canvas.width;
    h = canvas.height;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let w = canvas.width;
    let h = canvas.height;
    ctx.strokeStyle = "rgba(167, 204, 255, 0.5)";
    ctx.lineWidth = 2;

    const particles = Array.from({ length: 75 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      l: (Math.random() * (1 - 0.5) + 0.35) * 1.25,
      xs: 0,
      ys: Math.random() * 10 + 10
    }));

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        ctx.stroke();
      }
      move();
    }

    function move() {
      for (const p of particles) {
        p.x += p.xs;
        p.y += p.ys;
        if (p.x > w || p.y > h) {
          p.x = Math.random() * w;
          p.y = -20;
        }
      }
    }

    function animate() {
      draw();
      rainAnimationId = requestAnimationFrame(animate);
    }

    animate();
  }
}

// === APLICA EL TEMA GUARDADO ===
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme") || "default";

  if (savedTheme === "default") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
}

// === Punto de entrada ===
function initializeSettings() {
  applySavedTheme();

  if (enabledStaticEffect) {
    loadNoiseEffect();
  }

  if (enabledRainEffect) {
    loadRainEffect();
  }

  if (enabledVignetteEffect) {
    // notverygood. >:(
    const vignetteCSS = document.getElementById('vignette');
    if (!vignetteCSS) return;
    vignetteCSS.remove();
  }

  if (enabledReadableFont) {
    document.querySelectorAll('*').forEach(elemento => {
      elemento.style.setProperty("font-family", "Arial, sans-serif", "important");
    });
  }
}

document.addEventListener('DOMContentLoaded', initializeSettings);