function sliderdownFunction() {
  var x = document.getElementById("slider_down_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}