function goldFunction() {
  var x = document.getElementById("goldtile_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}