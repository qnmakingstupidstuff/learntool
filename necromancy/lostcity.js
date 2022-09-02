function lcgraveFunction() {
  var x = document.getElementById("gravestone_lostcity_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}