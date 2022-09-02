function sliderdownmodernFunction() {
  var x = document.getElementById("slider_down_modern_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}