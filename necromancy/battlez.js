function battlezFunction() {
  var x = document.getElementById("gravestone_battlez_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}