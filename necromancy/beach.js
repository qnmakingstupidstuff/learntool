function beachgraveFunction() {
  var x = document.getElementById("gravestone_beach_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}