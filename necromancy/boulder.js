function boulderFunction() {
  var x = document.getElementById("boulder_trap_falling_forward_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}