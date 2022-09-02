function warningFunction() {
  var x = document.getElementById("warningframeapp");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
