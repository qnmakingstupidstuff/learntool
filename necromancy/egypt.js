function egyptgraveFunction() {
  var x = document.getElementById("gravestone_egypt_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}