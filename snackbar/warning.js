function warningFunction() {
  var x = document.getElementById("snackbar7");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}