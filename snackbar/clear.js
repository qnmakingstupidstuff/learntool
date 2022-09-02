function clearFunction() {
  var x = document.getElementById("snackbar3");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}