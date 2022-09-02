function speakerFunction() {
  var x = document.getElementById("speaker_pick");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}