function backpackFunction() {
  var x = document.getElementById("backpack_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}