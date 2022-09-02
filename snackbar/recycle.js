function recycleFunction() {
  var x = document.getElementById("snackbar5");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}