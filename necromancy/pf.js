function pfgraveFunction() {
  var x = document.getElementById("gravestonePlantfoodOnDestruction_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}