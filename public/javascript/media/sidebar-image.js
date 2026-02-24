const images = [
  "../assets/images/sidebar/pursuer.webp",
  "../assets/images/sidebar/harken.webp",
  "../assets/images/sidebar/artful.webp",
  "../assets/images/sidebar/killdroid.webp",
  "../assets/images/sidebar/badware.webp",
  "../assets/images/sidebar/dozer.webp",
  "../assets/images/sidebar/joey.webp"
]

function changeImage() {
  var imageElement = document.getElementById("sidebar-image")
  if (!imageElement) return;

  var imageRandom = images[Math.floor(Math.random() * images.length)];
  imageElement.src = imageRandom
}

window.addEventListener('load', function () {
  changeImage()
})

window.changeImage = changeImage;