function placeFunction() {
  var x = document.getElementById("snackbar4");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}