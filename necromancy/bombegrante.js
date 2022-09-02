function bombeFunction() {
  var x = document.getElementById("bombegranateseeds_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}