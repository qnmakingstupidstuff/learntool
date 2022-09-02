function craterFunction() {
  var x = document.getElementById("crater_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}