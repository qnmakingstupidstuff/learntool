function waitFunction() {
  var x = document.getElementById("snackbar9");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}