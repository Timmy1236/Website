/*
  tv-time.js
  ----------
  * ... tv(?
*/

const images = [
  "../assets/images/iframe/Jesus-free-ps2.gif",
  "../assets/images/iframe/matematico.webp",
  "../assets/images/iframe/maxwell.webp",
  "../assets/images/iframe/meowl.gif",
  "../assets/images/iframe/jumbo.gif"
];

const static = "../assets/images/iframe/static.gif";

async function changeBackground() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomLink = images[randomIndex];

  document.getElementById('image').style.backgroundImage = "url('" + static + "')";

  await new Promise(resolve => setTimeout(resolve, 1000));

  document.getElementById('image').style.backgroundImage = "url('" + randomLink + "')";
}

changeBackground();
setInterval(changeBackground, 5000);
