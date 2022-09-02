function boostile5Function() {
  var x = document.getElementById("boosttile5_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}