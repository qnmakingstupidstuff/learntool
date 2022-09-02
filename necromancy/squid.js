function squidFunction() {
  var x = document.getElementById("planttarget_squid_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}