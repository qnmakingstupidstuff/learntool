function battlezsunFunction() {
  var x = document.getElementById("gravestone_battlez_sun_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}