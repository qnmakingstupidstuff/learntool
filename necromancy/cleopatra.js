function cleopatraFunction() {
  var x = document.getElementById("cleopatra_warning");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}