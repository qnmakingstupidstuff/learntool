function boostileFunction() {
  var x = document.getElementById("boosttile_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}