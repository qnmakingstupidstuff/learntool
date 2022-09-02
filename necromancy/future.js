function futureFunction() {
  var x = document.getElementById("gravestone_future_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}