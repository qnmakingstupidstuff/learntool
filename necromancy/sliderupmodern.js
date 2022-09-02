function sliderupmodernFunction() {
  var x = document.getElementById("slider_up_modern_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}