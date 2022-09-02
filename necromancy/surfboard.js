function surfboardFunction() {
  var x = document.getElementById("surfboard_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}