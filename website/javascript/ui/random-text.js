const randomTextArray = [
  "There's cool stuff in configuration tab...",
  "I'm a random text.",
  "I LOVE COLOR GREEN 💚🌳🐸🟢🟩",
  '"Do You Like Hurting Other People?"',
  "I have no idea what to put here.",
  "console.log('Hello World!');",
  "Does this work?",
  "Me no broken english good.",
  "Debería de hacer que dependiendo del idioma salga el texto diferente...",
  "This site was made with love and not with brain",
  "This site dosen't work on Internet Explorer.",
  "This site dosen't work on Mobile, don't try it.",
  "This site dosen't work.",
  "I really don't like the button design in the nav.",
  "AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
  '"At the crossroads, don\'t turn left."',
  '"Clem"',
  "I hate the video banner, but if i remove it, the site looks empty :(",
  "Do you like the new layout? I do, it's... brighter? idk.",
  "ford_door_chime.mp3",
  "Half of the updates are recodes because I programmed the page so poorly lol",
  '"Also try Terraria!"',
  '"Also try Minecraft!"'
];

let isActive = true;
let typingTimeout = null;
let cycleTimeout = null;

function setRandomText() {
  if (!isActive) return;

  const randomText = document.getElementById("random-text");
  if (!randomText) return;

  randomText.innerHTML = "";

  const text =
    randomTextArray[Math.floor(Math.random() * randomTextArray.length)];

  let i = 0;
  const speed = 25;

  function typeWriter() {
    if (!isActive) return;

    if (i < text.length) {
      randomText.innerHTML += text.charAt(i);
      i++;
      typingTimeout = setTimeout(typeWriter, speed);
    }
  }

  typeWriter();

  cycleTimeout = setTimeout(setRandomText, 13000);
}

// En caso que el usuario deja de hacer focus en la pagina, apagamos el script.
function stopScript() {
  isActive = false;

  clearTimeout(typingTimeout);
  clearTimeout(cycleTimeout);

  typingTimeout = null;
  cycleTimeout = null;

  const randomText = document.getElementById("random-text");
  if (randomText) {
    randomText.innerHTML = "zZzZzZz..";
  }
}

// WAKE UP
function resumeScript() {
  if (isActive) return;

  isActive = true;
  setRandomText();
}

document.addEventListener("DOMContentLoaded", setRandomText);

window.addEventListener("blur", stopScript);
window.addEventListener("focus", resumeScript);
