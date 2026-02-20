/*
  settings-loader.js
  ----------------------------------------
  - Aplica configuraciones guardadas por el usuario.
  - Carga efectos visuales (lluvia + estática) si están activados.
  - Aplica el tema seleccionado (default, light, dark, etc.).
*/

let rainAnimationId = null;

// === Función auxiliar: obtiene la ruta base según ubicación actual ===
function getBasePath() {
  return window.location.pathname.includes('/pages/') ? '../' : '';
}

// === Carga el efecto de lluvia ===
function loadRainEffect() {
  const basePath = getBasePath();
  const rainCSS = document.createElement('link');
  rainCSS.rel = 'stylesheet';
  rainCSS.href = basePath + '2025/rain.css';
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
  const basePath = getBasePath();
  const noiseCSS = document.createElement('link');
  noiseCSS.rel = 'stylesheet';
  noiseCSS.href = basePath + '2025/noise.css';
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
    ctx.strokeStyle = "rgba(133, 155, 189, 0.5)";
    ctx.lineWidth = 2;

    const maxParts = 100;
    const particles = Array.from({ length: maxParts }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      l: Math.random() * 2,
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

// === Carga ambos efectos con un pequeño delay ===
function loadSpecialEffects() {
  setTimeout(loadNoiseEffect, 50);
  setTimeout(loadRainEffect, 200);
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
  // --- Aplicar tema ---
  applySavedTheme();

  // --- Efectos visuales ---
  const visualEffectsEnabled = localStorage.getItem("visualEffects") === "true";
  if (visualEffectsEnabled) {
    loadSpecialEffects();
  }
}

// === Espera a que el DOM esté listo ===
document.addEventListener('DOMContentLoaded', initializeSettings);