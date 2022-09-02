function iceagegraveFunction() {
  var x = document.getElementById("gravestone_iceage_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}