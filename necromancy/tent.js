function tentFunction() {
  var x = document.getElementById("tent_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}