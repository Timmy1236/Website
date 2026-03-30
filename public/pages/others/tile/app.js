var container = document.querySelector(".content");
var bg = document.getElementById("bg");
var cat = document.getElementById("alien-cat");
var cow = document.getElementById("cow");

container.onmousemove = function (e) {
  if (!bg || !cat) return;

  var rect = container.getBoundingClientRect();

  var relX = e.clientX - rect.left;
  var relY = e.clientY - rect.top;

  var x = (relX / rect.width - 0.5) * 2;
  var y = (relY / rect.height - 0.5) * 2;

  var bgStrength = 18;
  var catStrength = 4;
  var cowStrength = 8;

  bg.style.transform = "translate(" + (-x * bgStrength) + "px, " + (-y * bgStrength) + "px)";
  cat.style.transform = "translate(" + (-x * catStrength) + "px, " + (-y * catStrength) + "px)";
  cow.style.transform = "translate(" + (-x * cowStrength) + "px, " + (-y * cowStrength) + "px)";
};

container.onmouseleave = function () {
  bg.style.transform = "translate(0,0)";
  cat.style.transform = "translate(0,0)";
};
