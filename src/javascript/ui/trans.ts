import m from "mithril";

let isTransitioning = false;

export function spaNavigate(path: string) {
  if (isTransitioning) return;

  const mainColumn = document.querySelector(".content-column");
  if (!mainColumn) {
    m.route.set(path);
    return;
  }

  isTransitioning = true;

  mainColumn.classList.add("exit");

  setTimeout(() => {
    m.route.set(path);
    requestAnimationFrame(() => { mainColumn.classList.remove("exit"); isTransitioning = false; });
  }, 350);
}
