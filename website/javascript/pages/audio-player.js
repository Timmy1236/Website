const audio = document.getElementById("player");
const playBtn = document.getElementById("playPause");
const volume = document.getElementById("volume");

audio.volume = 0.5

// Play/Pause
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏹︎";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
});

// Volumen
volume.addEventListener("input", () => {
  audio.volume = volume.value;
});
