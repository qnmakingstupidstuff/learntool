function darkgraveFunction() {
  var x = document.getElementById("gravestone_dark_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}