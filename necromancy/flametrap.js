function fireFunction() {
  var x = document.getElementById("flame_spreader_trap_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}