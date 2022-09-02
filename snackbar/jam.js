function notifyFunction() {
  var x = document.getElementById("snackbar8");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}