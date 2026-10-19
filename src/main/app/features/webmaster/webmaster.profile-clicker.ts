const plush = ["badware", "killdroid", "artful", "harken", "pursuer"];
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

  if (counterPlush > 4) {
    counterPlush = 0;
    pfp.src = _plushURL("badware");
  }
  else {
    pfp.src = _plushURL(plush[counterPlush]);
  }
}
