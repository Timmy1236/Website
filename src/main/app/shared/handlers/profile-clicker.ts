const plush = ["badware", "killdroid", "artful"];
const _plushURL = (x: string) => `/assets/images/pages/webmaster/${x}.webp`;
let counterClick = 0;
let counterPlush = 0;

export function click() {
  counterClick = ++counterClick;

  if (counterClick > 9) {
    counterClick = 0;
    _nextPlush();
  }
}

function _nextPlush() {
  const pfp = document.getElementById("pfp") as HTMLImageElement;
  counterPlush = ++counterPlush;

  if (counterPlush > 2) {
    counterPlush = 0;
    pfp.src = _plushURL("badware");
  }
  else {
    switch (plush[counterPlush]) {
      case "artful":
        pfp.src = _plushURL("artful");
        break;
      case "badware":
        pfp.src = _plushURL("badware");
        break;
      case "killdroid":
        pfp.src = _plushURL("killdroid");
        break;
      default:
        break;
    }
  }
}
