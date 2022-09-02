function cowboyFunction() {
  var x = document.getElementById("gravestone_cowboy_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}