function boostile3Function() {
  var x = document.getElementById("boosttile3_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}