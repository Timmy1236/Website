const images = [
  "../assets/images/sidebar/pursuer.webp",
  "../assets/images/sidebar/harken.webp",
  "../assets/images/sidebar/artful.webp",
  "../assets/images/sidebar/killdroid.webp",
  "../assets/images/sidebar/badware.webp",
  "../assets/images/sidebar/dozer.webp",
  "../assets/images/sidebar/joey.webp",
  "../assets/images/sidebar/kel.webp",
  "../assets/images/sidebar/hate.webp"
];

let currentIndex = 0;
let intervalId = null;

function changeImageWithFade() {
  const imageElement = document.getElementById("sidebar-image");
  if (!imageElement) return;

  imageElement.classList.add("fade-out");

  setTimeout(() => {
    let newIndex;

    do {
      newIndex = Math.floor(Math.random() * images.length);
    } while (newIndex === currentIndex);

    currentIndex = newIndex;

    imageElement.src = images[currentIndex];

    imageElement.classList.remove("fade-out");
  }, 600); // !!Debe coincidir con la duración del CSS
}

function startImageRotation() {
  const imageElement = document.getElementById("sidebar-image");
  if (!imageElement) return;

  imageElement.src = images[currentIndex];

  intervalId = setInterval(changeImageWithFade, 10000);
}

window.addEventListener("load", startImageRotation);