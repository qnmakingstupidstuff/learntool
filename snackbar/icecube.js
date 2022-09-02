function iceFunction() {
  var x = document.getElementById("snackbar6");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}