function toughFunction() {
  var x = document.getElementById("zombiepotion_toughness_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}