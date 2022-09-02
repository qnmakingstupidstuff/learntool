function sungraveFunction() {
  var x = document.getElementById("gravestoneSunOnDestruction_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}