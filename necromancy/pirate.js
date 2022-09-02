function pirateFunction() {
  var x = document.getElementById("gravestone_pirate_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}