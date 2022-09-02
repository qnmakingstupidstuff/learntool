function speedFunction() {
  var x = document.getElementById("zombiepotion_speed_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}