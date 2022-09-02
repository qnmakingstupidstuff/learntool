function tutorialgraveFunction() {
  var x = document.getElementById("gravestone_tutorial_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}